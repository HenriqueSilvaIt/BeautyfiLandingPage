"use client";

import { useState } from "react";
import styles from "./page.module.css";
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
      name: "Camila Rocha",
      role: "Dona do Studio Camila Rocha (12 profissionais)",
      avatarInitials: "CR",
      text: "Migrar para o plano Pro do Beautyfi foi o melhor investimento que fizemos. A comissão automática reduziu nosso trabalho administrativo de horas para minutos no fim da semana. E a IA no WhatsApp é surreal!",
    },
    {
      name: "Rodrigo Mendes",
      role: "Proprietário da Barbearia Velho Oeste (3 profissionais)",
      avatarInitials: "RM",
      text: "Antes eu perdia metade do meu dia respondendo WhatsApp para agendar cortes. Agora a IA do Beautyfi faz tudo. Os clientes adoraram a agilidade e eu consigo focar 100% no atendimento. Recomendo muito!",
    },
    {
      name: "Juliana Santos",
      role: "Esteticista Autônoma",
      avatarInitials: "JS",
      text: "Como autônoma no plano Starter, o agendamento online facilitou demais. Meus clientes agendam até de madrugada pelo link do Instagram. Os lembretes por WhatsApp acabaram com os esquecimentos de horário.",
    },
  ];

  const faqs: FaqItem[] = [
    {
      question: "Posso cancelar quando quiser?",
      answer: "Sim! Não cobramos taxas extras de cancelamento. Você pode cancelar ou alterar seu plano a qualquer momento diretamente pelas configurações do seu painel.",
    },
    {
      question: "Preciso de cartão para testar?",
      answer: "Não! Você pode iniciar o seu período de teste grátis de 14 dias sem precisar informar nenhum dado de cartão de crédito.",
    },
    {
      question: "Funciona no meu WhatsApp?",
      answer: "Sim! Toda a nossa integração de lembretes e Inteligência Artificial é feita utilizando o seu número de WhatsApp atual do estabelecimento.",
    },
  ];

  const handleOpenRegister = () => {
    setSelectedPlan(null); // default signup
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
    <div className={styles.page}>
      <Navbar onOpenRegister={handleOpenRegister} />

      <main className={styles.main}>
        {/* HERO SECTION */}
        <HeroSection onOpenRegister={handleOpenRegister} />

        {/* FEATURES SECTION */}
        <FeaturesSection />

        {/* PRICING SECTION */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className={`${styles.testimonials} section-padding`}>
          <div className="container">
            <div className={styles.secHeader}>
              <h2 className={styles.secTitle}>Aprovado por milhares de profissionais</h2>
              <p className={styles.secSubtitle}>Veja o que dizem os estabelecimentos que já usam o Beautyfi diariamente</p>
            </div>

            <div className={styles.testimonialGrid}>
              {testimonials.map((t, idx) => (
                <div key={idx} className={styles.tCard}>
                  <div>
                    <div className={styles.tStars}>★★★★★</div>
                    <p className={styles.tText}>"{t.text}"</p>
                  </div>
                  <div className={styles.tUser}>
                    <div className={styles.tAvatar}>{t.avatarInitials}</div>
                    <div className={styles.tUserInfo}>
                      <span className={styles.tUserName}>{t.name}</span>
                      <span className={styles.tUserRole}>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section id="faq" className={`${styles.faq} section-padding`}>
          <div className="container">
            <div className={styles.secHeader}>
              <h2 className={styles.secTitle}>Perguntas Frequentes</h2>
              <p className={styles.secSubtitle}>Tire suas principais dúvidas sobre o funcionamento do Beautyfi</p>
            </div>

            <div className={styles.faqContainer}>
              <div className={styles.faqList}>
                {faqs.map((faq, idx) => (
                  <div key={idx} className={styles.faqItem}>
                    <button onClick={() => toggleFaq(idx)} className={styles.faqHeader}>
                      <span className={styles.faqQuestion}>{faq.question}</span>
                      <span className={`${styles.faqIcon} ${activeFaq === idx ? styles.faqIconActive : ""}`}>+</span>
                    </button>
                    {activeFaq === idx && (
                      <div className={styles.faqAnswer}>
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={`${styles.footerGrid} container`}>
          <div className={styles.fLogoSection}>
            <span className={styles.fLogo}>
              <img src="/logo.png" alt="Beautyfi Logo" style={{ height: "32px", width: "auto", marginRight: "8px", objectFit: "contain" }} />
              <span className={styles.fLogoTextBeauty}>beauty</span>
              <span className={styles.fLogoTextFi}>fi</span>
            </span>
            <p className={styles.fDesc}>
              A evolução da gestão de beleza. Agendamento simplificado, inteligência artificial integrada e controle financeiro robusto para o seu negócio.
            </p>
          </div>
          
          <div className={styles.fCol}>
            <h4 className={styles.fColTitle}>Produto</h4>
            <ul className={styles.fLinks}>
              <li><a href="#features" className={styles.fLink}>Funcionalidades</a></li>
              <li><a href="#pricing" className={styles.fLink}>Planos e Preços</a></li>
              <li><a href="#" className={styles.fLink}>Integração WhatsApp</a></li>
            </ul>
          </div>
          
          <div className={styles.fCol}>
            <h4 className={styles.fColTitle}>Suporte</h4>
            <ul className={styles.fLinks}>
              <li><a href="#" className={styles.fLink}>Central de Ajuda</a></li>
              <li><a href="#" className={styles.fLink}>Termos de Uso</a></li>
              <li><a href="#" className={styles.fLink}>Privacidade</a></li>
            </ul>
          </div>

          <div className={styles.fCol}>
            <h4 className={styles.fColTitle}>Contato</h4>
            <ul className={styles.fLinks}>
              <li><span className={styles.fLink}>contato@beautyfi.com.br</span></li>
              <li><span className={styles.fLink}>Suporte no WhatsApp</span></li>
            </ul>
          </div>
        </div>

        <div className={`${styles.footerBottom} container`}>
          <p>&copy; {new Date().getFullYear()} beautyfi Inc. Todos os direitos reservados.</p>
          <p>Feito com amor para profissionais de beleza.</p>
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
    </div>
  );
}
