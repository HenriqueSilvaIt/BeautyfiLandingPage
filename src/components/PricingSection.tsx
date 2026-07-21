"use client";

import { useState } from "react";

type BillingCycle = "monthly" | "semiannual" | "annual";

interface PricingSectionProps {
  onSelectPlan: (planName: string, billingCycle: string, price: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  const getPrice = (plan: "starter" | "pro" | "enterprise") => {
    if (plan === "starter") {
      switch (cycle) {
        case "monthly": return "49,90";
        case "semiannual": return "44,90";
        case "annual": return "41,58";
      }
    } else if (plan === "pro") {
      switch (cycle) {
        case "monthly": return "89,90";
        case "semiannual": return "80,90";
        case "annual": return "74,90";
      }
    } else {
      switch (cycle) {
        case "monthly": return "159,90";
        case "semiannual": return "143,90";
        case "annual": return "133,25";
      }
    }
  };

  const getBillingLabel = (plan: "starter" | "pro" | "enterprise") => {
    const price = getPrice(plan);
    switch (cycle) {
      case "monthly":
        return "Cobrado mensalmente";
      case "semiannual": {
        const total = (parseFloat(price.replace(",", ".")) * 6).toFixed(2).replace(".", ",");
        return `R$ ${total} cobrados a cada 6 meses`;
      }
      case "annual": {
        const total = (parseFloat(price.replace(",", ".")) * 12).toFixed(2).replace(".", ",");
        return `R$ ${total} cobrados a cada 12 meses`;
      }
    }
  };

  const handleAction = (planName: string, planKey: "starter" | "pro" | "enterprise") => {
    const price = getPrice(planKey);
    const cycleLabel = cycle === "monthly" ? "Mensal" : cycle === "semiannual" ? "Semestral" : "Anual";
    onSelectPlan(planName, cycleLabel, price);
  };

  return (
    <section id="pricing" className="pricing section-padding">
      <div className="container">
        <div className="sec-header">
          <h2 className="sec-title">Planos simples e transparentes</h2>
          <p className="sec-subtitle">Escolha o plano ideal para a sua fase e coloque seu negócio no piloto automático.</p>
        </div>

        {/* 3-Pill Toggle Selector */}
        <div className="pricing-toggle-pill-container">
          <button 
            onClick={() => setCycle("monthly")}
            className={`pricing-toggle-pill-btn ${cycle === "monthly" ? "active" : ""}`}
          >
            Mensal
          </button>
          
          <button 
            onClick={() => setCycle("semiannual")}
            className={`pricing-toggle-pill-btn ${cycle === "semiannual" ? "active" : ""}`}
          >
            Semestral
            <span className="pill-discount-badge">Economize 10%</span>
          </button>
          
          <button 
            onClick={() => setCycle("annual")}
            className={`pricing-toggle-pill-btn ${cycle === "annual" ? "active" : ""}`}
          >
            Anual
            <span className="pill-discount-badge">2 meses grátis</span>
          </button>
        </div>

        {/* Plan Cards Grid */}
        <div className="pricing-grid">
          {/* STARTER */}
          <div className="pricing-card">
            <div>
              <h3 className="pricing-plan-name">Starter</h3>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "16px" }}>Para autônomo e MEI</p>
              
              <div className="pricing-plan-price">
                <span className="price-currency">R$</span>
                <span className="price-number">{getPrice("starter")}</span>
                <span className="price-period">/mês</span>
              </div>
              <p className="pricing-value-sentence" style={{ fontStyle: "normal", color: "var(--text-secondary)", marginBottom: "30px", fontSize: "12px" }}>
                {getBillingLabel("starter")}
              </p>

              <ul className="pricing-features-list">
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> 1 profissional ativo
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> App mobile (cliente + profissional)
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Agendamento online 24/7
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Histórico e fichas de clientes
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Ficha de anamnese
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Controle de comandas e caixa
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Recebimento de sinal por Pix
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Clube de assinaturas para clientes
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Lembretes por WhatsApp (até 100/mês)
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Relatórios essenciais
                </li>
                <li className="pricing-feature-item" style={{ opacity: 0.5 }}>
                  <span style={{ color: "#9ca3af" }}>✗</span> Cálculo automático de comissão
                </li>
                <li className="pricing-feature-item" style={{ opacity: 0.5 }}>
                  <span style={{ color: "#9ca3af" }}>✗</span> Programa de fidelidade
                </li>
              </ul>
            </div>

            <button 
              onClick={() => handleAction("Starter", "starter")} 
              className="btn-secondary"
              style={{ width: "100%", marginTop: "20px" }}
            >
              Assinar Starter
            </button>
          </div>

          {/* PRO */}
          <div className="pricing-card pricing-card-popular">
            <span className="popular-ribbon">Mais popular</span>
            <div>
              <h3 className="pricing-plan-name">Pro</h3>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "16px" }}>Até 5 profissionais</p>
              
              <div className="pricing-plan-price">
                <span className="price-currency">R$</span>
                <span className="price-number">{getPrice("pro")}</span>
                <span className="price-period">/mês</span>
              </div>
              <p className="pricing-value-sentence" style={{ fontStyle: "normal", color: "var(--text-secondary)", marginBottom: "30px", fontSize: "12px" }}>
                {getBillingLabel("pro")}
              </p>

              <ul className="pricing-features-list">
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Até 5 profissionais ativos
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Tudo do Starter
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Cálculo automático de comissões
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Visão financeira completa e DRE
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Programa de pontos de fidelidade
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Lembretes e notificações ilimitados (uso justo)
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Mensagens automáticas de reativação e aniversário
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Relatórios completos
                </li>
              </ul>
            </div>

            <button 
              onClick={() => handleAction("Pro", "pro")} 
              className="btn-gold"
              style={{ width: "100%", marginTop: "20px" }}
            >
              Assinar Pro
            </button>
          </div>

          {/* ENTERPRISE */}
          <div className="pricing-card">
            <div>
              <h3 className="pricing-plan-name">Enterprise</h3>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "16px" }}>Redes e franquias</p>
              
              <div className="pricing-plan-price">
                <span className="price-currency">R$</span>
                <span className="price-number">{getPrice("enterprise")}</span>
                <span className="price-period">/mês</span>
              </div>
              <p className="pricing-value-sentence" style={{ fontStyle: "normal", color: "var(--text-secondary)", marginBottom: "30px", fontSize: "12px" }}>
                {getBillingLabel("enterprise")}
              </p>

              <ul className="pricing-features-list">
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Profissionais ilimitados
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Tudo do Pro
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Gestão multi-unidades
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Relatórios e inteligência de dados customizados
                </li>
                <li className="pricing-feature-item">
                  <span style={{ color: "var(--accent)" }}>✓</span> Suporte dedicado prioritário 24/7
                </li>
              </ul>
            </div>

            <button 
              onClick={() => handleAction("Enterprise", "enterprise")} 
              className="btn-secondary"
              style={{ width: "100%", marginTop: "20px" }}
            >
              Falar com especialista
            </button>
          </div>
        </div>

        {/* Phrase of value */}
        <div className="pricing-value-sentence" style={{ marginTop: "40px", fontSize: "16px" }}>
          "Menos que 1 cliente por mês. Se evitar 1 única falta, a plataforma já se pagou sozinha."
        </div>
      </div>
    </section>
  );
}
