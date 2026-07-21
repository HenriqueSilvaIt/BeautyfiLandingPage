"use client";

interface HeroSectionProps {
  onOpenRegister: () => void;
}

export default function HeroSection({ onOpenRegister }: HeroSectionProps) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        {/* Lado Esquerdo: Conteúdo */}
        <div className="hero-content fade-in">
          <span 
            className="hero-badge" 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "6px", 
              backgroundColor: "rgba(198, 161, 91, 0.12)", 
              color: "#C6A15B", 
              padding: "6px 14px", 
              borderRadius: "100px", 
              fontSize: "11px", 
              fontWeight: "800", 
              textTransform: "uppercase", 
              letterSpacing: "0.05em",
              marginBottom: "20px" 
            }}
          >
            ✨ Aplicativo Integrado Premium
          </span>
          <h1 className="hero-title">
            A plataforma definitiva de gestão e agendamento para o mercado de beleza
          </h1>
          
          <p className="hero-subtitle">
            O sistema completo e premium que integra o controle do seu negócio (financeiro, comissões, equipe) a um aplicativo exclusivo para suas clientes agendarem sozinhas, com confirmações automáticas por WhatsApp, clube de fidelidade e fichas digitais de anamnese.
          </p>
          
          <div className="hero-actions">
            <button 
              onClick={onOpenRegister} 
              className="btn-gold" 
              style={{ 
                padding: "16px 36px", 
                fontSize: "14px", 
                fontWeight: "700", 
                borderRadius: "30px",
                cursor: "pointer"
              }}
            >
              Começar grátis
            </button>
            <a 
              href="#apps" 
              className="btn-secondary" 
              style={{ 
                padding: "16px 36px", 
                fontSize: "14px", 
                fontWeight: "700", 
                borderRadius: "30px", 
                border: "2px solid #C6A15B", 
                color: "#16294E",
                backgroundColor: "transparent",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s"
              }}
            >
              Ver o Aplicativo
            </a>
          </div>

          <div className="hero-badges">
            <span>✓ Teste grátis de 14 dias</span>
            <span>✓ Sem fidelidade</span>
            <span>✓ Configuração em 2 minutos</span>
          </div>
        </div>

        {/* Lado Direito: App Mockup em Destaque + WhatsApp IA Floating Bubble */}
        <div className="hero-mockup-wrapper">
          {/* Fundo Dourado/Champagne Soft */}
          <div className="hero-bg-shape" />
          
          <div className="hero-artwork-container" style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", padding: "0 10px" }}>
            <img 
              src="/hero_artwork.png" 
              alt="Plataforma de Gestão e Agendamento Beautyfi" 
              style={{ 
                width: "100%", 
                maxWidth: "480px", 
                height: "auto", 
                borderRadius: "20px", 
                boxShadow: "0 25px 50px -12px rgba(22, 41, 78, 0.35)",
                border: "1px solid rgba(198, 161, 91, 0.15)",
                display: "block"
              }} 
            />
          </div>


        </div>
      </div>
    </section>
  );
}
