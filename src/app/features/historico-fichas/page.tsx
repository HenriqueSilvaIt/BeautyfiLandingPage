"use client";

import Navbar from "@/components/Navbar";

export default function HistoricoFichasPage() {
  return (
    <div>
      <Navbar onOpenRegister={() => {}} />

      <main style={{ minHeight: "100vh", paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "56px" }}>📝</span>
            <h1 className="sec-title" style={{ marginTop: "20px", fontSize: "40px" }}>Histórico & Fichas de Clientes</h1>
            <p className="sec-subtitle" style={{ fontSize: "18px", marginTop: "10px" }}>
              Tudo sobre suas clientes e procedimentos organizados em um único lugar.
            </p>
          </div>

          <div style={{ backgroundColor: "#ffffff", padding: "40px", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--shadow-premium)" }}>
            <h2 style={{ fontSize: "22px", marginBottom: "20px", color: "var(--primary)", fontFamily: "var(--font-body)", fontWeight: 700 }}>
              Fichas técnicas e histórico de procedimentos:
            </h2>
            
            <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: "1.6", marginBottom: "24px" }}>
              Garanta o melhor atendimento e a fidelização sabendo exatamente o que sua cliente prefere. O beautyfi ajuda a organizar fórmulas de coloração, anotações de design e fotos de evolução dos tratamentos.
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "20px", marginBottom: "30px" }}>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Fichas de Anamnese:</strong> Configure perguntas personalizadas para registrar a saúde e restrições de cada cliente antes dos procedimentos.</span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Galeria de Evolução:</strong> Salve e compare fotos de 'antes e depois' para demonstrar os resultados reais dos seus serviços.</span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Fórmulas e Preferências:</strong> Nunca mais esqueça o tom de tintura, marca de esmalte ou a cera favorita da cliente.</span>
              </li>
              <li style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                <span><strong>Histórico de Faturamento:</strong> Acompanhe quanto a cliente já gastou, data da última visita e frequência média no seu estabelecimento.</span>
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
