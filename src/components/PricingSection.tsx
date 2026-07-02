"use client";

import { useState } from "react";
import styles from "./PricingSection.module.css";

type BillingCycle = "monthly" | "semiannual" | "annual";

interface PricingSectionProps {
  onSelectPlan: (planName: string, billingCycle: string, price: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  const getPrice = (plan: "starter" | "solo-ia" | "pro" | "enterprise") => {
    if (plan === "starter") {
      switch (cycle) {
        case "monthly": return "59,90";
        case "semiannual": return "53,90";
        case "annual": return "49,90";
      }
    } else if (plan === "solo-ia") {
      switch (cycle) {
        case "monthly": return "74,90";
        case "semiannual": return "67,40";
        case "annual": return "62,40";
      }
    } else if (plan === "pro") {
      switch (cycle) {
        case "monthly": return "99,90";
        case "semiannual": return "89,90";
        case "annual": return "83,25";
      }
    } else {
      switch (cycle) {
        case "monthly": return "179,90";
        case "semiannual": return "161,90";
        case "annual": return "149,90";
      }
    }
  };

  const getBillingLabel = (plan: "starter" | "solo-ia" | "pro" | "enterprise") => {
    const price = getPrice(plan);
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

  const handleAction = (planName: string, planKey: "starter" | "solo-ia" | "pro" | "enterprise") => {
    const price = getPrice(planKey);
    const cycleLabel = cycle === "monthly" ? "Mensal" : cycle === "semiannual" ? "Semestral" : "Anual";
    onSelectPlan(planName, cycleLabel, price);
  };

  return (
    <section id="pricing" className={`${styles.pricingSection} section-padding`}>
      <div className="container mx-auto px-4">
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
              <span className={styles.discountBadge}>Desconto</span>
            </button>
            <button 
              onClick={() => setCycle("annual")}
              className={`${styles.toggleBtn} ${cycle === "annual" ? styles.toggleBtnActive : ""}`}
            >
              Anual
              <span className={styles.discountBadge}>Melhor Preço</span>
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
              <p className={styles.cardDesc}>Para autônomo e MEI</p>
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
                <span className={styles.featureText}>1 profissional ativo</span>
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
                <span className={styles.featureText}>Lembretes WhatsApp (até 100/mês)</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>Planos de assinatura para clientes</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCross}>✗</span>
                <span className={styles.featureText}>IA no WhatsApp</span>
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

          {/* SOLO + IA */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardName}>
                <span>🤖</span> Solo + IA
              </h3>
              <p className={styles.cardDesc}>Solo com inteligência artificial</p>
            </div>
            
            <div className={styles.priceWrapper}>
              <div className={styles.priceRow}>
                <span className={styles.priceSymbol}>R$</span>
                <span className={styles.priceValue}>{getPrice("solo-ia")}</span>
                <span className={styles.pricePeriod}>/mês</span>
              </div>
              <span className={styles.billingNote}>{getBillingLabel("solo-ia")}</span>
            </div>

            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>1 profissional ativo</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}><span className="font-bold">Tudo do Starter</span></span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}><span className="font-bold text-accent">IA no WhatsApp (atende e agenda)</span> — com cota mensal incluída</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>Lembretes e notificações ilimitados</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCross}>✗</span>
                <span className={styles.featureText}>Cálculo automático de comissão</span>
              </li>
            </ul>

            <button 
              onClick={() => handleAction("Solo + IA", "solo-ia")} 
              className={`${styles.btnAction} ${styles.btnActionSecondary}`}
            >
              Assinar Solo + IA
            </button>
          </div>

          {/* PRO (MOST POPULAR) */}
          <div className={`${styles.card} ${styles.cardPopular}`}>
            <span className={styles.popularBadge}>⭐ MAIS POPULAR</span>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardName}>
                <span>🚀</span> Pro
              </h3>
              <p className={styles.cardDesc}>Até 5 profissionais</p>
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
                <span className={styles.featureText}><span className="font-bold">Tudo do Starter</span></span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>Até 5 profissionais ativos</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}><span className="font-bold text-accent">IA no WhatsApp (atende e agenda)</span> — com cota mensal incluída</span>
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
                <span className={styles.featureText}>Lembretes e notificações ilimitados</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>Programa de pontos de fidelidade</span>
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
              <p className={styles.cardDesc}>Redes e franquias</p>
            </div>
            
            <div className={styles.priceWrapper}>
              <div className={styles.priceRow}>
                <span className={styles.priceSymbol}>a partir de R$</span>
                <span className={styles.priceValue}>{getPrice("enterprise")}</span>
                <span className={styles.pricePeriod}>/mês</span>
              </div>
              <span className={styles.billingNote}>{getBillingLabel("enterprise")}</span>
            </div>

            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}><span className="font-bold">Tudo do Pro</span></span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>Profissionais ilimitados</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIconCheck}>✓</span>
                <span className={styles.featureText}>Gestão multi-unidades</span>
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
              Falar com vendas
            </button>
          </div>
        </div>

        {/* Phrase of value and Badges */}
        <div className="mt-16 text-center border-t border-dashed border-gray-200 dark:border-gray-800 pt-12">
          <p className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-6 italic">
            "Menos que 1 cliente por mês. Se evitar 1 falta, já se pagou."
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-gray-600 dark:text-gray-400">
            <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full flex items-center gap-1.5">🛡️ 14 dias grátis</span>
            <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full flex items-center gap-1.5">⚡ Sem fidelidade</span>
            <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full flex items-center gap-1.5">🔄 Cancele quando quiser</span>
            <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full flex items-center gap-1.5">🔒 Dados protegidos (LGPD)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
