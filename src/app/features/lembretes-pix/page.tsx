"use client";

import Navbar from "@/components/Navbar";

export default function LembretesPixPage() {
  return (
    <div>
      <Navbar onOpenRegister={() => {}} />

      <main style={{ minHeight: "100vh", paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "56px" }}>💳</span>
            <h1 className="sec-title" style={{ marginTop: "20px", fontSize: "40px" }}>Lembretes + PIX/Sinal</h1>
            <p className="sec-subtitle" style={{ fontSize: "18px", marginTop: "10px" }}>
              Reduza o no-show e as faltas em até 80% cobrando uma taxa de sinal.
            </p>
          </div>

          <div style={{ backgroundColor: "#ffffff", padding: "40px", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--shadow-premium)" }}>
            <h2 style={{ fontSize: "22px", marginBottom: "20px", color: "var(--primary)", fontFamily: "var(--font-body)", fontWeight: 700 }}>
              Garantia financeira de comparecimento:
            </h2>
            
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6", marginBottom: "24px" }}>
              As faltas de clientes geram prejuízos ocultos gigantescos no fim do mês. Com o beautyfi, você configura o envio automático de lembretes e links de PIX para cobrança de sinal antecipado diretamente no WhatsApp da cliente.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "20px", marginBottom: "30px" }}>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Cobrança de Sinal Integrada:</strong> Defina uma porcentagem ou valor fixo para a cliente pagar no ato do agendamento para garantir o horário.</span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Lembretes Persistentes:</strong> Avisos amigáveis enviados no WhatsApp em intervalos de 24h, 12h ou 2h antes do procedimento.</span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Cancelamento Automático:</strong> Se a cliente não pagar o Pix do sinal em até 30 minutos, o horário é liberado automaticamente na agenda para outra pessoa.</span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Segurança Total:</strong> Integração direta com gateways de pagamento que validam e notificam o recebimento instantaneamente.</span>
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
