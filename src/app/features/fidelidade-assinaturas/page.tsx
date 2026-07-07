"use client";

import Navbar from "@/components/Navbar";

export default function FidelidadeAssinaturasPage() {
  return (
    <div>
      <Navbar onOpenRegister={() => {}} />

      <main style={{ minHeight: "100vh", paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "56px" }}>💝</span>
            <h1 className="sec-title" style={{ marginTop: "20px", fontSize: "40px" }}>Fidelidade & Assinaturas</h1>
            <p className="sec-subtitle" style={{ fontSize: "18px", marginTop: "10px" }}>
              Garanta receita previsível criando planos de recorrência e clubes de vantagens.
            </p>
          </div>

          <div style={{ backgroundColor: "#ffffff", padding: "40px", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--shadow-premium)" }}>
            <h2 style={{ fontSize: "22px", marginBottom: "20px", color: "var(--primary)", fontFamily: "var(--font-body)", fontWeight: 700 }}>
              Recorrência e retenção de clientes inteligente:
            </h2>
            
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6", marginBottom: "24px" }}>
              É muito mais barato fidelizar uma cliente atual do que atrair uma nova. Com o beautyfi, você cria planos de assinatura recorrente (ex: escova ilimitada mensal) e clubes de fidelidade automáticos.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "20px", marginBottom: "30px" }}>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Planos de Assinatura (Recorrência):</strong> Crie pacotes mensais debitados automaticamente no cartão de crédito da cliente via Stripe.</span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Clube de Pontos:</strong> Defina regras de acúmulo de pontos (ex: R$ 1 gasto = 1 ponto) que podem ser trocados por serviços ou produtos no salão.</span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Alerta de Cliente Sumida:</strong> A IA identifica clientes que não agendam há mais de 30 ou 45 dias e envia cupons automáticos de incentivo.</span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Relatórios de Retenção:</strong> Acompanhe a taxa de retorno de clientes gerais e por profissional da equipe.</span>
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
