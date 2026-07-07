"use client";

interface Feature {
  slug: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      slug: "ia-whatsapp",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <path d="M8 10h.01M12 10h.01M16 10h.01"/>
        </svg>
      ),
      title: "IA no WhatsApp",
      description: "Nossa inteligência artificial atende, agenda novos horários e confirma agendamentos sozinha, rodando 24 horas por dia.",
    },
    {
      slug: "lembretes-pix",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
          <line x1="12" y1="4" x2="12" y2="20"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      title: "Lembretes + PIX/Sinal",
      description: "Envie cobranças de sinal antecipado e lembretes automáticos no WhatsApp. Reduza o no-show e as faltas em até 80%.",
    },
    {
      slug: "agenda-online",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      title: "Agenda Online 24/7",
      description: "Um link de agendamento personalizado e elegante. Suas clientes agendam serviços sozinhas em segundos pelo Instagram.",
    },
    {
      slug: "historico-fichas",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      title: "Histórico e Fichas",
      description: "Fichas completas com preferências das clientes, anotações de fórmulas, avisos e fotos de antes e depois organizadas.",
    },
    {
      slug: "comissoes-financeiro",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: "Comissões & Financeiro",
      description: "Cálculo automático de comissões por profissional, fluxo de caixa detalhado e relatórios gerenciais/DRE sem planilhas.",
    },
    {
      slug: "fidelidade-assinaturas",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A15B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      title: "Fidelidade & Assinaturas",
      description: "Planos recorrentes (ex: barba mensal) e programa de pontos por fidelidade para garantir receita previsível todo mês.",
    },
  ];

  return (
    <section id="features" className="features-section section-padding">
      <div className="container">
        <div className="sec-header">
          <h2 className="sec-title">Tudo o que seu negócio de beleza precisa</h2>
          <p className="sec-subtitle">
            Unimos agendamento, inteligência artificial integrada e controle financeiro robusto em uma plataforma elegante e acolhedora.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div>
                <div className="feature-icon-wrapper" style={{ marginBottom: "20px" }}>{feature.icon}</div>
                <h3 className="feature-card-title" style={{ marginBottom: "12px" }}>{feature.title}</h3>
                <p className="feature-card-desc">{feature.description}</p>
              </div>
              
              <a 
                href={`/features/${feature.slug}`} 
                style={{ 
                  marginTop: "auto", 
                  fontSize: "13px", 
                  fontWeight: "600", 
                  color: "var(--accent)", 
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  paddingTop: "16px"
                }}
                className="feature-card-link"
              >
                Saiba mais →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
