"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import RegisterModal from "@/components/RegisterModal";
import StripeSimulation from "@/components/StripeSimulation";

interface Testimonial {
  name: string;
  role: string;
  avatarInitials: string;
  text: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; cycle: string; price: string } | null>(null);
  const [stripePurchaseData, setStripePurchaseData] = useState<any | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const testimonials: Testimonial[] = [
    {
      name: "Bruna Albuquerque",
      role: "Lash & Nail Designer (Autônoma)",
      avatarInitials: "BA",
      text: "O sistema mudou minha vida! O aplicativo fecha os horários enquanto estou atendendo ou até dormindo. Reduzi faltas cobrando o sinal via Pix e minha agenda encheu.",
    },
    {
      name: "Camila Rocha",
      role: "Dona do Studio Beauty (5 profissionais)",
      avatarInitials: "CR",
      text: "O financeiro e as comissões automáticas do plano Pro economizaram horas do meu final de semana. É muito limpo e as profissionais acompanham a agenda delas pelo próprio celular.",
    },
    {
      name: "Renata Vasconcellos",
      role: "Esteticista e Lash Artist",
      avatarInitials: "RV",
      text: "Antes eu perdia clientes porque demorava pra responder no WhatsApp. Agora com o link de agendamento online e o app, elas marcam sozinhas de madrugada. Não troco por nada!",
    },
  ];

  const faqs: FaqItem[] = [
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim! O beautyfi não possui fidelidade no plano mensal. Você pode cancelar ou alterar o plano a qualquer momento diretamente pelo seu painel administrativo.",
    },
    {
      question: "Preciso de cartão para testar?",
      answer: "Não! Você pode criar sua conta e começar a testar gratuitamente por 7 dias sem precisar colocar dados de cartão de crédito.",
    },
    {
      question: "As notificações vão para o meu WhatsApp?",
      answer: "Sim! O sistema envia os lembretes automáticos usando nosso número oficial. Você não precisa comprar outro número ou chip.",
    },
    {
      question: "Serve para qual tipo de salão?",
      answer: "O beautyfi foi criado sob medida para profissionais de beleza autônomas e estabelecimentos de todos os portes: manicures, lashes, designers de sobrancelhas, cabeleireiras, esteticistas, maquiadoras e salões de beleza.",
    },
  ];

  const handleOpenRegister = () => {
    setSelectedPlan(null);
    setIsRegisterOpen(true);
  };

  const handleSelectPlan = (planName: string, billingCycle: string, price: string) => {
    if (planName === "Enterprise" || price === "Negociação" || price.toLowerCase().includes("negoci")) {
      const message = encodeURIComponent("Olá! Gostaria de falar com um consultor sobre o plano Enterprise do Beautyfi.");
      window.open(`https://api.whatsapp.com/send?phone=5511967438366&text=${message}`, "_blank");
      return;
    }
    setSelectedPlan({ name: planName, cycle: billingCycle, price });
    setIsRegisterOpen(true);
  };

  const handleRegisterSuccess = (formData: any) => {
    setIsRegisterOpen(false);
    setStripePurchaseData(formData);
  };

  const handleCloseStripe = () => {
    setStripePurchaseData(null);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div>
      <Navbar onOpenRegister={handleOpenRegister} />

      <main style={{ minHeight: "100vh" }}>
        {/* 1. HERO */}
        <HeroSection onOpenRegister={handleOpenRegister} />

        {/* 2. FAIXA DE PROVA SOCIAL */}
        <section className="social-proof">
          <div className="container social-proof-content">
            <div className="social-proof-stars">
              <span className="stars-gold">★★★★★</span>
              <span>Avaliação de Excelência em Gestão</span>
            </div>
            
            <div className="social-proof-badges">
              {/* Google Play */}
              <div className="store-badge" style={{ backgroundColor: "#000", color: "#fff", display: "flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ fontSize: "20px" }}>🤖</span>
                <div style={{ textAlign: "left", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "8px", textTransform: "uppercase" }}>Disponível no</span>
                  <span style={{ fontSize: "12px", fontWeight: "bold" }}>Google Play</span>
                </div>
              </div>
              
              {/* App Store */}
              <div className="store-badge" style={{ backgroundColor: "#000", color: "#fff", display: "flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ fontSize: "20px" }}>🍎</span>
                <div style={{ textAlign: "left", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "8px", textTransform: "uppercase" }}>Disponível na</span>
                  <span style={{ fontSize: "12px", fontWeight: "bold" }}>App Store</span>
                </div>
              </div>
            </div>
          </div>
        </section>

               {/* APLICATIVOS MÓVEIS */}
        <section id="apps" className="apps-section section-padding">
          <div className="container">
            <div className="sec-header">
              <h2 className="sec-title">Um único aplicativo para todo o seu negócio</h2>
              <p className="sec-subtitle">Sem múltiplos downloads. O beautyfi integra a jornada da cliente e o controle do profissional em um único aplicativo com alternância rápida de perfil.</p>
            </div>

            <div className="apps-grid">
              {/* Perfil Cliente */}
              <div className="app-card">
                <div className="app-card-title">
                  <span>📱</span> Perfil Cliente
                  <span className="app-card-badge">Cliente agenda sozinho</span>
                </div>
                <p className="app-card-desc">
                  Sua cliente faz o download do app e agenda de forma autônoma em segundos! Ela pode visualizar seus profissionais favoritos, buscar horários disponíveis, confirmar presença e pagar de forma segura.
                </p>
                <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
                  <div style={{ backgroundColor: "#000", color: "#fff", display: "flex", alignItems: "center", gap: "8px", padding: "6px 12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <span style={{ fontSize: "16px" }}>🤖</span>
                    <span style={{ fontSize: "11px", fontWeight: "bold" }}>Google Play</span>
                  </div>
                  <div style={{ backgroundColor: "#000", color: "#fff", display: "flex", alignItems: "center", gap: "8px", padding: "6px 12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <span style={{ fontSize: "16px" }}>🍎</span>
                    <span style={{ fontSize: "11px", fontWeight: "bold" }}>App Store</span>
                  </div>
                </div>
              </div>

              {/* Perfil Profissional */}
              <div className="app-card">
                <div className="app-card-title">
                  <span>💼</span> Perfil Profissional
                  <span className="app-card-badge">Sua agenda & Gestão</span>
                </div>
                <p className="app-card-desc">
                  Gerencie todo o seu estabelecimento no mesmo app. Controle de horários na palma da mão, cálculo automático de comissões da sua equipe e confirmações automáticas por WhatsApp.
                </p>
                <div style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
                  <div style={{ backgroundColor: "#000", color: "#fff", display: "flex", alignItems: "center", gap: "8px", padding: "6px 12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <span style={{ fontSize: "16px" }}>🤖</span>
                    <span style={{ fontSize: "11px", fontWeight: "bold" }}>Google Play</span>
                  </div>
                  <div style={{ backgroundColor: "#000", color: "#fff", display: "flex", alignItems: "center", gap: "8px", padding: "6px 12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <span style={{ fontSize: "16px" }}>🍎</span>
                    <span style={{ fontSize: "11px", fontWeight: "bold" }}>App Store</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. COMO FUNCIONA */}
        <section id="how-it-works" className="how-it-works section-padding">
          <div className="container">
            <div className="sec-header">
              <h2 className="sec-title">Como funciona o beautyfi</h2>
              <p className="sec-subtitle">Você ativa em minutos e vê o resultado no primeiro dia.</p>
            </div>

            <div className="steps-container">
              {/* Passo 1 */}
              <div className="step-item">
                <span className="step-number">01</span>
                <h3 className="step-title">Conecte seu WhatsApp</h3>
                <p className="step-desc">Acesse o painel e vincule seu WhatsApp com leitura de QR Code rápida em 1 clique.</p>
              </div>

              {/* Passo 2 */}
              <div className="step-item">
                <span className="step-number">02</span>
                <h3 className="step-title">Lembretes automáticos</h3>
                <p className="step-desc">O sistema envia lembretes para os seus clientes de forma educada, informando o horário e cobrando o Pix de sinal.</p>
              </div>

              {/* Passo 3 */}
              <div className="step-item">
                <span className="step-number">03</span>
                <h3 className="step-title">Acompanhe na tela</h3>
                <p className="step-desc">Tudo cai direto na sua agenda em tempo real no seu celular. Você só foca no atendimento.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. DEPOIMENTOS */}
        <section id="testimonials" className="testimonials section-padding">
          <div className="container">
            <div className="sec-header">
              <h2 className="sec-title">Quem usa, ama e recomenda</h2>
              <p className="sec-subtitle">Histórias reais de donas de negócio de beleza que transformaram sua gestão.</p>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((t, idx) => (
                <div key={idx} className="testimonial-card">
                  <div>
                    <div className="testimonial-stars">★★★★★</div>
                    <p className="testimonial-text">"{t.text}"</p>
                  </div>
                  <div className="testimonial-user">
                    <div className="testimonial-avatar">{t.avatarInitials}</div>
                    <div className="testimonial-info">
                      <span className="testimonial-name">{t.name}</span>
                      <span className="testimonial-role">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. PREÇOS */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 7. FAQ */}
        <section id="faq" className="faq section-padding">
          <div className="container">
            <div className="sec-header">
              <h2 className="sec-title">Perguntas frequentes</h2>
              <p className="sec-subtitle">Tire suas principais dúvidas sobre o funcionamento do beautyfi.</p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, idx) => (
                <div key={idx} className="faq-item">
                  <button onClick={() => toggleFaq(idx)} className="faq-header">
                    <span>{faq.question}</span>
                    <span className={`faq-icon ${activeFaq === idx ? "faq-icon-active" : ""}`}>+</span>
                  </button>
                  {activeFaq === idx && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CTA FINAL */}
        <section className="cta-final">
          <div className="container">
            <h2>Pronta para encher sua agenda?</h2>
            <p>Comece seu teste de 14 dias grátis hoje e economize tempo.</p>
            
            <button onClick={handleOpenRegister} className="btn-gold" style={{ padding: "16px 40px", fontSize: "16px" }}>
              Começar grátis agora
            </button>

            <div className="cta-final-badges">
              {/* Google Play */}
              <div style={{ backgroundColor: "#000", color: "#fff", display: "flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer" }}>
                <span style={{ fontSize: "20px" }}>🤖</span>
                <div style={{ textAlign: "left", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "8px", textTransform: "uppercase" }}>Disponível no</span>
                  <span style={{ fontSize: "12px", fontWeight: "bold" }}>Google Play</span>
                </div>
              </div>
              
              {/* App Store */}
              <div style={{ backgroundColor: "#000", color: "#fff", display: "flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer" }}>
                <span style={{ fontSize: "20px" }}>🍎</span>
                <div style={{ textAlign: "left", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "8px", textTransform: "uppercase" }}>Disponível na</span>
                  <span style={{ fontSize: "12px", fontWeight: "bold" }}>App Store</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 9. RODAPÉ */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-col">
            <span className="logo" style={{ fontSize: "24px", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
              <img src="/logo.png" alt="beautyfi Logo" style={{ height: "30px", width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)", borderRadius: "8px" }} />
              <div style={{ display: "flex", alignItems: "baseline", fontWeight: "700" }}>
                <span className="logo-beauty" style={{ color: "#fff" }}>beauty</span>
                <span className="logo-fi" style={{ color: "var(--accent)" }}>fi</span>
              </div>
            </span>
            <p className="footer-desc">
              O software de agendamento e gestão que organiza sua agenda, fideliza clientes e cuida do seu financeiro.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Recursos</h4>
            <ul className="footer-links">
              <li><a href="#features" className="footer-link">Notificações WhatsApp</a></li>
              <li><a href="#features" className="footer-link">Lembretes & Pix</a></li>
              <li><a href="#features" className="footer-link">Agenda Online</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Segurança</h4>
            <ul className="footer-links">
              <li><span className="footer-link">100% em Conformidade com LGPD</span></li>
              <li><span className="footer-link">Pagamentos seguros por Stripe</span></li>
              <li><span className="footer-link">Termos de Serviço</span></li>
              <li><Link href="/politica-de-privacidade" className="footer-link">Política de Privacidade</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Suporte</h4>
            <ul className="footer-links">
              <li><span className="footer-link">contato@beautyfi.com.br</span></li>
              <li><span className="footer-link">Suporte no WhatsApp</span></li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>&copy; {new Date().getFullYear()} beautyfi. Todos os direitos reservados. CNPJ: XX.XXX.XXX/0001-XX</p>
          <p>Feito para empoderar profissionais de beleza do Brasil.</p>
        </div>
      </footer>

      {/* MODALS */}
      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        selectedPlan={selectedPlan}
        onSuccess={handleRegisterSuccess}
      />

      <StripeSimulation
        isOpen={stripePurchaseData !== null}
        onClose={handleCloseStripe}
        purchaseData={stripePurchaseData}
      />

      {/* Botão Flutuante do WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=5511967438366&text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20sobre%20o%20Beautyfi."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#25D366",
          color: "#fff",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
          zIndex: 9999,
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 6px 15px rgba(0, 0, 0, 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
        }}
        title="Falar com Especialista no WhatsApp"
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
