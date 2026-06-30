"use client";

import styles from "./FeaturesSection.module.css";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      title: "Agendamento Online 24/7",
      description: "Seu cliente agenda em segundos por um link personalizado. Reduza o tempo gasto no telefone e as mensagens repetitivas.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Histórico de Clientes",
      description: "Tenha todas as informações, preferências de serviço, histórico de compras e fotos do antes e depois em um só lugar.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      ),
      title: "Lembretes Automáticos",
      description: "Disparos automáticos por WhatsApp reduzem as faltas (no-show) em até 80%. Mais compromisso, mais faturamento.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z"/>
          <path d="M12 8v4l3 3"/>
        </svg>
      ),
      title: "Inteligência Artificial no WhatsApp",
      description: "Deixe nossa IA conversar e agendar serviços diretamente no WhatsApp dos seus clientes de forma natural e rápida.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: "Comissões & Financeiro",
      description: "Chega de planilhas. Cálculo de comissão automatizado por profissional, relatórios de fluxo de caixa e controle de estoque.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      ),
      title: "Planos de Assinatura",
      description: "Crie planos de recorrência mensais para seus clientes (ex: barba ilimitada). Garanta receita previsível para seu negócio.",
    },
  ];

  return (
    <section id="features" className={`${styles.featuresSection} section-padding`}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.tagline}>Recursos Exclusivos</p>
          <h2 className={styles.title}>Tudo o que você precisa para crescer o seu negócio</h2>
          <p className={styles.subtitle}>
            Unimos agendamento simples a ferramentas avançadas de inteligência artificial e controle de caixa para colocar seu salão ou barbearia no piloto automático.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
