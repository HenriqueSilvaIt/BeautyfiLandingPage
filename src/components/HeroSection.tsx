"use client";

import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  onOpenRegister: () => void;
}

export default function HeroSection({ onOpenRegister }: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeStar}>★</span>
            <span>Plataforma #1 de Gestão de Beleza em 2026</span>
          </div>
          
          <h1 className={styles.title}>
            O software de agendamento que seu negócio de <span className={styles.highlight}>beleza</span> merece.
          </h1>
          
          <p className={styles.subtitle}>
            Simplifique sua agenda, atraia novos clientes, automatize comissões e gerencie sua barbearia, clínica ou salão de beleza com a plataforma mais ágil do mercado.
          </p>
          
          <div className={styles.ctas}>
            <button onClick={onOpenRegister} className={styles.btnPrimary}>
              Começar Grátis
            </button>
            <a href="#features" className={styles.btnSecondary}>
              Ver Recursos
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.dashboardPreview}>
            <div className={styles.dbHeader}>
              <span className={styles.dbTitle}>Minha Agenda — Hoje</span>
              <span className={styles.dbStatus}>Online</span>
            </div>

            <div className={styles.calendarGrid}>
              <div className={styles.calendarCard}>
                <div className={styles.cardTime}>09:00 - 10:00</div>
                <div className={styles.cardName}>Corte de Cabelo</div>
                <span className={`${styles.cardStatus} ${styles.statusCompleted}`}>Finalizado</span>
              </div>
              
              <div className={styles.calendarCard}>
                <div className={styles.cardTime}>11:30 - 13:00</div>
                <div className={styles.cardName}>Luzes & Escova</div>
                <span className={`${styles.cardStatus} ${styles.statusConfirmed}`}>Confirmado</span>
              </div>
              
              <div className={styles.calendarCard}>
                <div className={styles.cardTime}>14:00 - 14:45</div>
                <div className={styles.cardName}>Barba & Toalha</div>
                <span className={`${styles.cardStatus} ${styles.statusPending}`}>Aguardando</span>
              </div>
            </div>
          </div>

          {/* Floating Widget 1: WhatsApp IA */}
          <div className={styles.floatingWidget1}>
            <div className={styles.floatingIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <div>
              <div className={styles.floatingVal}>+98%</div>
              <div className={styles.floatingLbl}>Agendados via IA</div>
            </div>
          </div>

          {/* Floating Widget 2: Testimonials & Stars */}
          <div className={styles.floatingWidget2}>
            <div className={styles.reviewStars}>
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <div className={styles.reviewText}>
              "Faturamento aumentou 35% no primeiro mês!"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
