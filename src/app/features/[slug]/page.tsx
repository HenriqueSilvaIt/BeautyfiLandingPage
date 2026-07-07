import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";

const featureDetails: Record<string, { title: string; description: string; details: string[]; icon: string }> = {
  "ia-whatsapp": {
    title: "IA no WhatsApp",
    description: "Atendimento automático e inteligente 24 horas por dia.",
    icon: "🤖",
    details: [
      "Integração direta com o seu número de WhatsApp comercial atual.",
      "A IA entende texto, áudio e linguagem natural, oferecendo os horários livres conforme a agenda.",
      "Confirmação automática de agendamentos e respostas a dúvidas recorrentes das clientes.",
      "Redução de no-show (faltas) enviando lembretes personalizados de forma automatizada."
    ]
  },
  "lembretes-pix": {
    title: "Lembretes + PIX/Sinal",
    description: "Garanta o comparecimento cobrando um valor de sinal antecipado.",
    icon: "💳",
    details: [
      "Disparo automático de lembretes no WhatsApp das clientes nas vésperas dos horários.",
      "Possibilidade de cobrar sinal ou pagamento total antecipado via PIX de forma integrada.",
      "Liberação automática do horário na agenda em caso de não pagamento do sinal no tempo limite.",
      "Redução real de faltas em até 80%, garantindo estabilidade no faturamento diário."
    ]
  },
  "agenda-online": {
    title: "Agenda Online 24/7",
    description: "Sua vitrine de serviços sempre aberta para agendamento online.",
    icon: "📅",
    details: [
      "Link de agendamento personalizado com o seu logo e fotos de serviços.",
      "Sincronização instantânea com a agenda interna do salão, evitando conflitos de horários.",
      "Acesso simplificado pelo Instagram, WhatsApp ou Google Maps para a cliente agendar.",
      "Configuração de tempo de antecedência e cancelamento prévio de forma automática."
    ]
  },
  "historico-fichas": {
    title: "Histórico e Fichas de Clientes",
    description: "Todas as preferências e histórico das clientes num único lugar.",
    icon: "📝",
    details: [
      "Fichas de anamnese e acompanhamento técnico de químicas e colorações.",
      "Galeria de fotos de 'antes e depois' atreladas ao histórico de visitas da cliente.",
      "Preferências de profissionais, produtos utilizados e avisos sobre restrições ou alergias.",
      "Histórico de faturamento acumulado e frequência de visitas por cliente."
    ]
  },
  "comissoes-financeiro": {
    title: "Comissões & Financeiro",
    description: "Gestão financeira completa com fluxo de caixa e relatórios gerenciais.",
    icon: "📊",
    details: [
      "Cálculo automático de comissões por profissional, facilitando o fechamento semanal.",
      "Fluxo de caixa diário integrado às vendas e agendamentos confirmados.",
      "Emissão de DRE (Demonstrativo do Resultado do Exercício) financeiro simplificado.",
      "Gestão de custos fixos, variáveis e taxas de cartões de forma transparente."
    ]
  },
  "fidelidade-assinaturas": {
    title: "Fidelidade & Assinaturas",
    description: "Crie receitas recorrentes e fidelize sua base de clientes.",
    icon: "💝",
    details: [
      "Criação de planos de assinatura mensal (ex: cabelo ilimitado ou manicure recorrente).",
      "Programa de pontos e fidelidade baseado em valor gasto ou quantidade de visitas.",
      "Disparo de campanhas promocionais automáticas para clientes inativas há mais de 30 dias.",
      "Relatórios de retenção de clientes por profissional."
    ]
  }
};

export default async function FeatureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = featureDetails[slug];

  if (!feature) {
    notFound();
  }

  return (
    <div>
      <Navbar onOpenRegister={() => {}} />

      <main style={{ minHeight: "100vh", paddingTop: "140px", paddingBottom: "100px" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ fontSize: "56px" }}>{feature.icon}</span>
            <h1 className="sec-title" style={{ marginTop: "20px", fontSize: "40px" }}>{feature.title}</h1>
            <p className="sec-subtitle" style={{ fontSize: "18px", marginTop: "10px" }}>{feature.description}</p>
          </div>

          <div style={{ backgroundColor: "#ffffff", padding: "40px", borderRadius: "24px", border: "1px solid var(--border)", boxShadow: "var(--shadow-premium)" }}>
            <h2 style={{ fontSize: "22px", marginBottom: "24px", color: "var(--primary)", fontFamily: "var(--font-body)", fontWeight: 700 }}>O que você vai ter:</h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "20px" }}>
              {feature.details.map((detail, index) => (
                <li key={index} style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "16px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                  <span style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "18px" }}>✓</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>

            <div style={{ textAlign: "center", marginTop: "40px", borderTop: "1px solid var(--border-light)", paddingTop: "30px" }}>
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
