"use client";

import Navbar from "@/components/Navbar";

export default function IaWhatsappPage() {
  return (
    <div>
      <Navbar onOpenRegister={() => {}} />

      <main style={{ minHeight: "100vh", paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "56px" }}>🤖</span>
            <h1 className="sec-title" style={{ marginTop: "20px", fontSize: "40px" }}>IA no WhatsApp</h1>
            <p className="sec-subtitle" style={{ fontSize: "18px", marginTop: "10px" }}>
              Atendimento automático inteligente rodando 24 horas por dia, 7 dias por semana.
            </p>
          </div>

          <div style={{ backgroundColor: "#ffffff", padding: "40px", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--shadow-premium)" }}>
            <h2 style={{ fontSize: "22px", marginBottom: "20px", color: "var(--primary)", fontFamily: "var(--font-body)", fontWeight: 700 }}>
              Como a Inteligência Artificial revoluciona sua agenda:
            </h2>
            
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6", marginBottom: "24px" }}>
              A IA do beautyfi se conecta ao seu WhatsApp comercial e atende suas clientes como uma recepcionista humana altamente treinada. Ela compreende textos, mensagens de áudio e gírias locais.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "20px", marginBottom: "30px" }}>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Atendimento 24h:</strong> Agendamento em tempo real, mesmo durante a madrugada ou nos seus dias de folga.</span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Respostas a dúvidas:</strong> Esclarece dúvidas sobre preços, serviços, localização e estacionamento instantaneamente.</span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Confirmação ativa:</strong> Entra em contato com a cliente um dia antes para confirmar o horário e atualiza a agenda no sistema de forma automática.</span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Redirecionamento Inteligente:</strong> Em caso de situações complexas ou solicitações específicas, a IA faz o transbordo para atendimento humano de forma transparente.</span>
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
