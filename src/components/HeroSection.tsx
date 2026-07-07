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
          <h1 className="hero-title">
            A agenda com IA que atende e agenda pelo WhatsApp — sozinha, 24h.
          </h1>
          
          <p className="hero-subtitle">
            Reduza faltas em até 80%, ganhe tempo e encha sua agenda. Feito sob medida para profissionais da beleza.
          </p>
          
          <div className="hero-actions">
            <button onClick={onOpenRegister} className="btn-gold" style={{ padding: "16px 36px" }}>
              Começar grátis
            </button>
            <a href="#pricing" className="btn-secondary" style={{ padding: "16px 36px" }}>
              Ver planos
            </a>
          </div>

          <div className="hero-badges">
            <span>✓ 14 dias grátis</span>
            <span>✓ sem cartão</span>
            <span>✓ sem fidelidade</span>
          </div>
        </div>

        {/* Lado Direito: Celular com chat do WhatsApp */}
        <div className="hero-mockup-wrapper">
          <div className="hero-bg-shape"></div>
          
          <div className="hero-phone-mockup">
            <div className="phone-screen">
              {/* WhatsApp Header showing official beautyfi contact */}
              <div className="phone-header" style={{ display: "flex", alignItems: "center", gap: "10px", paddingBottom: "10px", borderBottom: "1px solid rgba(22, 41, 78, 0.08)" }}>
                <img 
                  src="/logo.png" 
                  alt="beautyfi Logo" 
                  style={{ width: "34px", height: "34px", borderRadius: "50%", objectFit: "contain", backgroundColor: "#fff", border: "1px solid rgba(198, 161, 91, 0.2)", padding: "2px" }} 
                />
                <div className="phone-user-status" style={{ display: "flex", flexDirection: "column" }}>
                  <span className="phone-username" style={{ fontSize: "13px", fontWeight: "700", color: "var(--primary)" }}>beautyfi Virtual</span>
                  <span className="phone-status" style={{ fontSize: "10px", color: "#10b981", fontWeight: "600" }}>Online • WhatsApp Comercial</span>
                </div>
              </div>

              {/* Chat Bubble 1 */}
              <div className="chat-bubble chat-left">
                Oi! Tem horário pra fazer cabelo e unha hoje?
              </div>

              {/* Chat Bubble 2 (IA) */}
              <div className="chat-bubble chat-right">
                Olá! Temos sim. Para Cabelo + Unha hoje temos disponível às 14:00 com a Camila ou às 16:30 com a Jéssica. Qual você prefere?
                <span className="chat-ia-badge">IA</span>
              </div>

              {/* Chat Bubble 3 */}
              <div className="chat-bubble chat-left">
                Quero às 14h com a Camila.
              </div>

              {/* Chat Bubble 4 (IA) */}
              <div className="chat-bubble chat-right" style={{ marginBottom: "20px" }}>
                Perfeito! Agendado: Cabelo + Unha hoje às 14:00 com a Camila. Te enviei o link para o pagamento do sinal de 30% via Pix para confirmar seu horário.
                <span className="chat-ia-badge">IA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
