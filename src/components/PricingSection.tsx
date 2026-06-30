"use client";

import { useState } from "react";
import styles from "./PricingSection.module.css";

type BillingCycle = "monthly" | "semiannual" | "annual";

interface PricingSectionProps {
  onSelectPlan: (planName: string, billingCycle: string, price: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  const getPrice = (plan: "starter" | "pro" | "enterprise") => {
    if (plan === "starter") {
      switch (cycle) {
        case "monthly": return "59,90";
        case "semiannual": return "52,90";
        case "annual": return "44,90";
      }
    } else if (plan === "pro") {
      switch (cycle) {
        case "monthly": return "99,90";
        case "semiannual": return "87,90";
        case "annual": return "74,90";
      }
    } else {
      switch (cycle) {
        case "monthly": return "179,90";
        case "semiannual": return "Negociação";
        case "annual": return "134,90";
      }
    }
  };

  const getBillingLabel = (plan: "starter" | "pro" | "enterprise") => {
    const price = getPrice(plan);
    if (price === "Negociação") return "Fale com o time";
    
    switch (cycle) {
      case "monthly": return "Cobrado mensalmente";
      case "semiannual": {
        const total = (parseFloat(price.replace(",", ".")) * 6).toFixed(2).replace(".", ",");
        return `R$ ${total} cobrado a cada 6 meses`;
      }
      case "annual": {
        const total = (parseFloat(price.replace(",", ".")) * 12).toFixed(2).replace(".", ",");
        return `R$ ${total} cobrado anualmente`;
      }
    }
  };

  const handleAction = (planName: string, planKey: "starter" | "pro" | "enterprise") => {
    const price = getPrice(planKey);
    const cycleLabel = cycle === "monthly" ? "Mensal" : cycle === "semiannual" ? "Semestral" : "Anual";
    onSelectPlan(planName, cycleLabel, price);
  };

  return (
    <section id="pricing" className={`${styles.pricingSection} section-padding`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Planos simples, transparentes e sob medida</h2>
          
          <div className={styles.toggleContainer}>
            <button 
              onClick={() => setCycle("monthly")}
              className={`${styles.toggleBtn} ${cycle === "monthly" ? styles.toggleBtnActive : ""}`}
            >
              Mensal
            </button>
            <button 
              onClick={() => setCycle("semiannual")}
              className={`${styles.toggleBtn} ${cycle === "semiannual" ? styles.toggleBtnActive : ""}`}
            >
              Semestral
              <span className={styles.discountBadge}>-12%</span>
            </button>
            <button 
              onClick={() => setCycle("annual")}
              className={`${styles.toggleBtn} ${cycle === "annual" ? styles.toggleBtnActive : ""}`}
            >
              Anual
              <span className={styles.discountBadge}>-25%</span>
            </button>
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {/* STARTER */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardName}>
                <span>🌱</span> Starter
              </h3>
              <p className={styles.cardDesc}>1 profissional · Ideal para autônomos e iniciantes</p>
            </div>
            
            <div className={styles.priceWrapper}>
              <div className={styles.priceRow}>
                <span className={styles.priceSymbol}>R$</span>
                <span className={styles.priceValue}>{getPrice("starter")}</span>
                <span className={styles.pricePeriod}>/mês</span>
              </div>
              <span className={styles.billingNote}>{getBillingLabel("starter")}</span>
            </div>

            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}><span className={styles.featureBold}>1 profissional</span> ativo</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>Agendamento online 24/7</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>Histórico e fichas de clientes</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>Lembretes WhatsApp <span className={styles.featureBold}>(até 100/mês)</span></span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>Planos de assinatura para clientes</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCross}>✗</span>
                <span className={styles.featureText}>IA no WhatsApp (atendimento automático)</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCross}>✗</span>
                <span className={styles.featureText}>Cálculo automático de comissão</span>
              </li>
            </ul>

            <button 
              onClick={() => handleAction("Starter", "starter")} 
              className={`${styles.btnAction} ${styles.btnActionSecondary}`}
            >
              Assinar Starter
            </button>
          </div>

          {/* PRO (MOST POPULAR) */}
          <div className={`${styles.card} ${styles.cardPopular}`}>
            <span className={styles.popularBadge}>⭐ MAIS POPULAR</span>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardName}>
                <span>🚀</span> Pro
              </h3>
              <p className={styles.cardDesc}>Até 5 profissionais · Perfeito para salões e barbearias médias</p>
            </div>
            
            <div className={styles.priceWrapper}>
              <div className={styles.priceRow}>
                <span className={styles.priceSymbol}>R$</span>
                <span className={styles.priceValue}>{getPrice("pro")}</span>
                <span className={styles.pricePeriod}>/mês</span>
              </div>
              <span className={styles.billingNote}>{getBillingLabel("pro")}</span>
            </div>

            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>Tudo do plano <span className={styles.featureBold}>Starter</span></span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}><span className={styles.featureBold}>Até 5 profissionais</span> ativos</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}><span className={styles.featureBold}>WhatsApp IA</span> (atendimento e agendamento automático)</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>Cálculo automático de comissões</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>Visão financeira completa & DRE</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>Notificações e lembretes <span className={styles.featureBold}>ilimitados</span></span>
              </li>
            </ul>

            <button 
              onClick={() => handleAction("Pro", "pro")} 
              className={`${styles.btnAction} ${styles.btnActionPrimary}`}
            >
              Assinar Pro
            </button>
          </div>

          {/* ENTERPRISE */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardName}>
                <span>👑</span> Enterprise
              </h3>
              <p className={styles.cardDesc}>Mais de 5 profissionais · Redes de franquias e grandes operações</p>
            </div>
            
            <div className={styles.priceWrapper}>
              {getPrice("enterprise") === "Negociação" ? (
                <div className={styles.priceRow}>
                  <span className={styles.priceValue}>Negociação</span>
                </div>
              ) : (
                <div className={styles.priceRow}>
                  <span className={styles.priceSymbol}>R$</span>
                  <span className={styles.priceValue}>{getPrice("enterprise")}</span>
                  <span className={styles.pricePeriod}>/mês</span>
                </div>
              )}
              <span className={styles.billingNote}>{getBillingLabel("enterprise")}</span>
            </div>

            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>Tudo do plano <span className={styles.featureBold}>Pro</span></span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}><span className={styles.featureBold}>Profissionais ilimitados</span></span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>Gestão <span className={styles.featureBold}>Multi-unidades</span></span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>IA avançada com transbordo humano</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>Relatórios e inteligência de dados customizados</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>Suporte dedicado prioritário 24/7</span>
              </li>
            </ul>

            <button 
              onClick={() => handleAction("Enterprise", "enterprise")} 
              className={`${styles.btnAction} ${styles.btnActionSecondary}`}
            >
              {getPrice("enterprise") === "Negociação" ? "Falar com Consultor" : "Assinar Enterprise"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
