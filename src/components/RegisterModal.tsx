"use client";

import { useState, useEffect, FormEvent } from "react";
import styles from "./RegisterModal.module.css";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: {
    name: string;
    cycle: string;
    price: string;
  } | null;
  onSuccess: (formData: any) => void;
}

export default function RegisterModal({ isOpen, onClose, selectedPlan, onSuccess }: RegisterModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    businessName: "",
    professionals: "1",
    phone: "",
    address: "",
  });

  const [plans, setPlans] = useState<any[]>([]);

  useEffect(() => {
    if (!isOpen) return;
    const fetchPlans = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 
          (typeof window !== "undefined" && !window.location.hostname.includes("localhost")
            ? "https://www.styleappblue.lojinhadoquebrabackend.com.br"
            : "http://localhost:8091");
        const res = await fetch(`${baseUrl}/subscriptions/plans`);
        if (res.ok) {
          const data = await res.json();
          setPlans(data);
        }
      } catch (e) {
        console.error("Failed to load Stripe plans", e);
      }
    };
    fetchPlans();
  }, [isOpen]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const nameParts = formData.name.trim().split(" ");
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(" ") || "Admin";

      // Geocodificação de endereço (OpenStreetMap Nominatim)
      let latitude = null;
      let longitude = null;
      try {
        const encoded = encodeURIComponent(formData.address);
        const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encoded}`);
        if (geoRes.ok) {
          const geoData = await geoRes.json();
          if (geoData && geoData.length > 0) {
            latitude = parseFloat(geoData[0].lat);
            longitude = parseFloat(geoData[0].lon);
          }
        }
      } catch (geoErr) {
        console.error("Geocoding failed, proceeding with empty coordinates", geoErr);
      }

      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 
        (typeof window !== "undefined" && !window.location.hostname.includes("localhost")
          ? "https://www.styleappblue.lojinhadoquebrabackend.com.br"
          : "http://localhost:8091");
      const response = await fetch(`${baseUrl}/auth/signup/barber`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          businessName: formData.businessName,
          address: formData.address,
          latitude,
          longitude,
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        let errMsg = errData.message;
        if (errData.errors && errData.errors.length > 0) {
          errMsg = errData.errors.map((e: any) => `${e.fieldName}: ${e.message}`).join(", ");
        }
        throw new Error(errMsg || "E-mail já cadastrado ou dados inválidos.");
      }

      // 1. Encontrar o priceId correspondente do plano do banco
      let priceId = null;
      if (plans.length > 0 && selectedPlan) {
        const matched = plans.find(p => 
          p.name.toLowerCase().includes(selectedPlan.name.toLowerCase())
        );
        if (matched) {
          priceId = matched.stripePriceId;
        } else {
          // Busca o primeiro plano ativo como fallback
          priceId = plans[0].stripePriceId;
        }
      }

      // Fallback para IDs de teste caso o banco local esteja vazio
      if (!priceId && selectedPlan) {
        const planNameLower = selectedPlan.name.toLowerCase();
        if (planNameLower.includes("starter")) {
          priceId = "price_1PzStarterTestFallback";
        } else if (planNameLower.includes("pro")) {
          priceId = "price_1PzProTestFallback";
        } else {
          priceId = "price_1PzEnterpriseTestFallback";
        }
        console.warn(`Price ID não encontrado no banco. Utilizando fallback temporário: ${priceId}`);
      }

      // 2. Tentar autenticar o usuário criado via oauth2 para obter o token JWT
      let stripeRedirected = false;
      try {
        const loginParams = new URLSearchParams();
        loginParams.append("grant_type", "password");
        loginParams.append("username", formData.email);
        loginParams.append("password", formData.password);
        loginParams.append("scope", "read write");

        const tokenRes = await fetch(`${baseUrl}/oauth2/token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic c3R5bGVhcHA6c3R5bGVhcHAxMjM=", // styleapp:styleapp123
          },
          body: loginParams.toString(),
        });

        if (tokenRes.ok && priceId) {
          const tokenData = await tokenRes.json();
          const token = tokenData.access_token;

          // 3. Criar sessão de checkout do Stripe no backend
          const successUrl = `${window.location.origin}/checkout-success`;
          const cancelUrl = window.location.origin;

          const sessionRes = await fetch(
            `${baseUrl}/stripe/checkout-session?priceId=${encodeURIComponent(priceId)}&successUrl=${encodeURIComponent(successUrl)}&cancelUrl=${encodeURIComponent(cancelUrl)}`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (sessionRes.ok) {
            const sessionData = await sessionRes.json();
            if (sessionData.url) {
              stripeRedirected = true;
              window.location.href = sessionData.url;
              return;
            }
          } else {
            const errText = await sessionRes.text().catch(() => "");
            console.error("Erro ao criar sessão de checkout no Stripe:", sessionRes.status, errText);
          }
        }
      } catch (authErr) {
        console.error("Autenticação ou Stripe Checkout falhou", authErr);
      }

      if (!stripeRedirected) {
        alert("Conta criada com sucesso! O redirecionamento para o pagamento do Stripe falhou (plano/priceId não configurado ou Stripe offline). Redirecionando você para o login...");
      }

      // Redirecionamento fallback caso Stripe não esteja disponível ou seja trial grátis
      const appUrl = typeof window !== "undefined" && !window.location.hostname.includes("localhost")
        ? "https://painel.beautyfi.com.br"
        : "http://localhost:5173";
      window.location.href = `${appUrl}/login?email=${encodeURIComponent(formData.email)}`;
    } catch (err: any) {
      setError(err.message || "Ocorreu um erro no cadastro. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar">
          ✕
        </button>
        
        <h2 className={styles.title}>Crie sua conta</h2>
        <p className={styles.subtitle}>Comece seu teste grátis de 14 dias sem compromisso.</p>

        {selectedPlan && (
          <div className={styles.planBadge}>
            <div>
              <span className={styles.planBadgeLabel}>Plano selecionado</span>
              <div className={styles.planBadgeValue}>
                {selectedPlan.name} ({selectedPlan.cycle}) — R$ {selectedPlan.price}/mês
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">Seu Nome Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={styles.input}
              placeholder="ex: Maria Silva"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">E-mail Comercial</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className={styles.input}
              placeholder="ex: contato@meusalao.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="password">Senha de Acesso</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              minLength={6}
              className={styles.input}
              placeholder="Mínimo 6 caracteres"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="businessName">Nome do Estabelecimento</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              required
              className={styles.input}
              placeholder="ex: Studio Beautyfi"
              value={formData.businessName}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="phone">Celular / WhatsApp</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className={styles.input}
              placeholder="ex: (11) 99999-9999"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="address">Endereço do Estabelecimento</label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className={styles.input}
              placeholder="ex: Av. Paulista, 1000 - São Paulo, SP"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="professionals">Número de Profissionais</label>
            <select
              id="professionals"
              name="professionals"
              className={`${styles.input} ${styles.select}`}
              value={formData.professionals}
              onChange={handleChange}
            >
              <option value="1">1 profissional (Ideal para autônomo)</option>
              <option value="5">Até 5 profissionais (Barbearia/Salão médio)</option>
              <option value="10">Mais de 5 profissionais (Redes/Franquias)</option>
            </select>
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <button type="submit" disabled={loading} className={styles.btnSubmit}>
            {loading ? (
              <>
                <div className={styles.spinner}></div>
                Criando sua conta...
              </>
            ) : (
              "Prosseguir para Pagamento"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
