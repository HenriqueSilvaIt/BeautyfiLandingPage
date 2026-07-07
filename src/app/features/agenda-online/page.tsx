"use client";

import Navbar from "@/components/Navbar";

export default function AgendaOnlinePage() {
  return (
    <div>
      <Navbar onOpenRegister={() => {}} />

      <main style={{ minHeight: "100vh", paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "56px" }}>📅</span>
            <h1 className="sec-title" style={{ marginTop: "20px", fontSize: "40px" }}>Agenda Online 24/7</h1>
            <p className="sec-subtitle" style={{ fontSize: "18px", marginTop: "10px" }}>
              Sua vitrine de serviços e agendamentos sempre aberta e acessível.
            </p>
          </div>

          <div style={{ backgroundColor: "#ffffff", padding: "40px", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--shadow-premium)" }}>
            <h2 style={{ fontSize: "22px", marginBottom: "20px", color: "var(--primary)", fontFamily: "var(--font-body)", fontWeight: 700 }}>
              Sua agenda online integrada ao seu Instagram e Google:
            </h2>
            
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6", marginBottom: "24px" }}>
              Disponibilize um link de agendamento personalizado e elegante que reflete a identidade visual do seu negócio. As clientes podem agendar de qualquer lugar, a qualquer hora do dia ou da noite.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "20px", marginBottom: "30px" }}>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Link Personalizado:</strong> Adicione o link na sua bio do Instagram, perfil do WhatsApp e no Google Maps do seu estabelecimento.</span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Fotos & Portfólio:</strong> Exiba fotos reais dos seus cortes, unhas ou maquiagens para atrair e converter mais clientes.</span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Sincronização em Tempo Real:</strong> Bloqueia horários indisponíveis na hora, eliminando riscos de agendamento duplicado.</span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Regras de Agendamento:</strong> Controle limites de horários, tempo mínimo de antecedência e políticas de cancelamento flexíveis.</span>
              </li>
            </ul>

            <div style={{ textAlign: "center", borderTop: "1px solid var(--border-light)", paddingTop: "30px" }}>
              <a href="/" className="btn-gold" style={{ display: "inline-flex", textDecoration: "none" }}>
                Começar teste grátis de 14 dias
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
