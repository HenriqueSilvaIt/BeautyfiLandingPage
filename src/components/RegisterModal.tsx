"use client";

import { useState, FormEvent } from "react";
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

      const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8091";
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
        throw new Error(errData.message || "E-mail já cadastrado ou dados inválidos.");
      }

      // Call parent success flow
      onSuccess({
        ...formData,
        plan: selectedPlan?.name || "Free Trial",
        cycle: selectedPlan?.cycle || "Mensal",
        price: selectedPlan?.price || "0,00",
      });
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
