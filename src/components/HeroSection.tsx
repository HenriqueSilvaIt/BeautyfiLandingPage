"use client";

interface HeroSectionProps {
  onOpenRegister: () => void;
}

export default function HeroSection({ onOpenRegister }: HeroSectionProps) {
  return (
    <section className="hero" style={{ padding: "140px 0 80px 0" }}>
      <div className="container hero-grid">
        {/* Lado Esquerdo: Conteúdo */}
        <div className="hero-content fade-in" style={{ textAlign: "left" }}>
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
          <h1 
            className="hero-title" 
            style={{ 
              fontSize: "46px", 
              lineHeight: "1.15", 
              fontWeight: "900", 
              color: "#16294E", 
              marginBottom: "20px",
              fontFamily: "var(--font-serif, Playfair Display, serif)"
            }}
          >
            Seu app de agendamento completo com IA no WhatsApp
          </h1>
          
          <p 
            className="hero-subtitle" 
            style={{ 
              fontSize: "16px", 
              color: "#475569", 
              lineHeight: "1.6", 
              marginBottom: "36px",
              maxWidth: "540px"
            }}
          >
            A agenda inteligente que atende e agenda pelo WhatsApp sozinha 24h, totalmente integrada a um único aplicativo elegante para você e seus clientes controlarem horários, fichas de anamnese, carteiras de fidelidade e financeiro.
          </p>
          
          <div className="hero-actions" style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
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

          <div className="hero-badges" style={{ display: "flex", gap: "16px", fontSize: "11px", color: "#64748B", fontWeight: "600" }}>
            <span>✓ Teste grátis de 14 dias</span>
            <span>✓ Sem fidelidade</span>
            <span>✓ Configuração em 2 minutos</span>
          </div>
        </div>

        {/* Lado Direito: App Mockup em Destaque + WhatsApp IA Floating Bubble */}
        <div className="hero-mockup-wrapper" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
          {/* Fundo Dourado/Champagne Soft */}
          <div 
            className="hero-bg-shape" 
            style={{ 
              position: "absolute", 
              width: "90%", 
              height: "90%", 
              borderRadius: "50%", 
              background: "radial-gradient(circle, rgba(198, 161, 91, 0.15) 0%, transparent 70%)", 
              zIndex: 1 
            }}
          />
          
          <div style={{ display: "flex", gap: "20px", zIndex: 2, alignItems: "center" }}>
            {/* iPhone 1: Agenda do Profissional */}
            <div 
              style={{
                width: "230px",
                borderRadius: "38px",
                border: "10px solid #1e293b",
                boxShadow: "0 25px 60px -15px rgba(0,0,0,0.45)",
                overflow: "hidden",
                backgroundColor: "#fff",
                transform: "rotate(-3deg) translateY(-15px)",
                transition: "transform 0.3s ease"
              }}
            >
              <img 
                src="/iphone_agenda.png" 
                alt="App de Agenda do Profissional" 
                style={{ width: "100%", height: "auto", display: "block" }} 
              />
            </div>

            {/* iPhone 2: Perfil Cliente / Home */}
            <div 
              style={{
                width: "210px",
                borderRadius: "38px",
                border: "10px solid #1e293b",
                boxShadow: "0 25px 50px -15px rgba(0,0,0,0.38)",
                overflow: "hidden",
                backgroundColor: "#fff",
                transform: "rotate(3deg) translateY(15px)",
                transition: "transform 0.3s ease"
              }}
            >
              <img 
                src="/iphone_home.png" 
                alt="App de Agendamento do Cliente" 
                style={{ width: "100%", height: "auto", display: "block" }} 
              />
            </div>
          </div>

          {/* Floating WhatsApp IA bubble */}
          <div 
            style={{
              position: "absolute",
              bottom: "40px",
              left: "-15px",
              backgroundColor: "#ffffff",
              border: "1px solid rgba(198, 161, 91, 0.25)",
              borderRadius: "20px",
              boxShadow: "0 12px 30px -8px rgba(0,0,0,0.18)",
              padding: "14px 18px",
              maxWidth: "250px",
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              textAlign: "left"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#25D366", fontSize: "16px", fontWeight: "bold" }}>●</span>
              <span style={{ fontSize: "11px", fontWeight: "800", color: "#10b981", textTransform: "uppercase", letterSpacing: "0.05em" }}>WhatsApp IA Ativa</span>
            </div>
            <p style={{ fontSize: "11px", color: "#16294E", margin: 0, fontWeight: "600", lineHeight: "1.4" }}>
              "Agendamento confirmado! Corte de Cabelo hoje às 14:00 com Camila."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
