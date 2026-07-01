"use client";

import { useEffect, useState } from "react";
import styles from "./StripeSimulation.module.css";

interface StripeSimulationProps {
  isOpen: boolean;
  onClose: () => void;
  purchaseData: {
    name: string;
    email: string;
    businessName: string;
    plan: string;
    cycle: string;
    price: string;
  } | null;
}

type Step = "redirecting" | "checkout" | "processing" | "success";

export default function StripeSimulation({ isOpen, onClose, purchaseData }: StripeSimulationProps) {
  const [step, setStep] = useState<Step>("redirecting");

  useEffect(() => {
    if (isOpen) {
      setStep("redirecting");
      // Simulate redirect delay
      const timer = setTimeout(() => {
        setStep("checkout");
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen || !purchaseData) return null;

  const handlePay = () => {
    setStep("processing");
    setTimeout(() => {
      setStep("success");
    }, 2000);
  };

  const calculateTotal = () => {
    const numericPrice = parseFloat(purchaseData.price.replace(",", "."));
    if (purchaseData.cycle === "Semestral") {
      return (numericPrice * 6).toFixed(2).replace(".", ",");
    } else if (purchaseData.cycle === "Anual") {
      return (numericPrice * 12).toFixed(2).replace(".", ",");
    }
    return purchaseData.price;
  };

  const getBillingCycleText = () => {
    if (purchaseData.cycle === "Semestral") return "Cobrado a cada 6 meses";
    if (purchaseData.cycle === "Anual") return "Cobrado anualmente";
    return "Cobrado mensalmente";
  };

  return (
    <div className={styles.overlay}>
      {/* STEP 1: REDIRECTING */}
      {step === "redirecting" && (
        <div className={styles.loaderContainer}>
          <div className={styles.stripeSpinner}></div>
          <p className={styles.loaderText}>Redirecionando para o Stripe Checkout seguro...</p>
        </div>
      )}

      {/* STEP 2: CHECKOUT PORTAL */}
      {step === "checkout" && (
        <div className={styles.checkoutContainer}>
          {/* Product Details Panel */}
          <div className={styles.infoPanel}>
            <div>
              <button onClick={onClose} className={styles.backLink}>
                ← Voltar para beautyfi
              </button>
              <div style={{ marginTop: 40 }}>
                <div className={styles.brand}>beautyfi</div>
                <h3 className={styles.productName}>Plano {purchaseData.plan}</h3>
                <div className={styles.price}>
                  R$ {purchaseData.price} <span style={{ fontSize: 16, fontWeight: 500 }}>/mês</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Ciclo de Cobrança:</span>
                  <span>{purchaseData.cycle}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Faturamento:</span>
                  <span>{getBillingCycleText()}</span>
                </div>
                <div className={`${styles.summaryRow} ${styles.summaryRowTotal}`}>
                  <span>Total devido hoje:</span>
                  <span>R$ {calculateTotal()}</span>
                </div>
              </div>
            </div>
            
            <div className={styles.stripeSecured}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span>Pagamento seguro via Stripe</span>
            </div>
          </div>

          {/* Payment Form Panel */}
          <div className={styles.formPanel}>
            <h3 className={styles.formTitle}>Informações de Pagamento</h3>
            
            <div className={styles.cardInputGroup}>
              <div className={styles.cardNumRow}>
                <input 
                  type="text" 
                  className={styles.cardNumInput} 
                  placeholder="Número do Cartão" 
                  defaultValue="4242 4242 4242 4242"
                  readOnly 
                />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                  <line x1="1" y1="10" x2="23" y2="10"/>
                </svg>
              </div>
              <div className={styles.cardDetailsRow}>
                <input 
                  type="text" 
                  className={styles.cardSubInput} 
                  placeholder="MM/AA" 
                  defaultValue="12/29"
                  readOnly 
                />
                <input 
                  type="text" 
                  className={styles.cardSubInput} 
                  placeholder="CVC" 
                  defaultValue="123"
                  readOnly 
                />
              </div>
            </div>

            <div style={{ marginBottom: 24, fontSize: 13, color: "#697386" }}>
              Titular do cartão: <span style={{ fontWeight: 600 }}>{purchaseData.name}</span>
            </div>

            <button onClick={handlePay} className={styles.btnPay}>
              Pagar R$ {calculateTotal()}
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: PROCESSING PAYMENT */}
      {step === "processing" && (
        <div className={styles.loaderContainer}>
          <div className={styles.stripeSpinner}></div>
          <p className={styles.loaderText}>Processando seu pagamento com segurança...</p>
        </div>
      )}

      {/* STEP 4: SUCCESS PAGE */}
      {step === "success" && (
        <div className={styles.successContainer}>
          <div className={styles.successIcon}>✓</div>
          <h2 className={styles.successTitle}>Assinatura Ativa!</h2>
          <p className={styles.successDesc}>
            Parabéns! O pagamento do seu plano <strong>{purchaseData.plan} ({purchaseData.cycle})</strong> foi processado com sucesso. 
            <br /><br />
            Seu estabelecimento <strong>{purchaseData.businessName}</strong> foi registrado e as credenciais foram enviadas para o e-mail <strong>{purchaseData.email}</strong>.
          </p>
          <button 
            onClick={() => {
              onClose();
              const appUrl = process.env.NEXT_PUBLIC_APP_URL || 
                (typeof window !== "undefined" && !window.location.hostname.includes("localhost") 
                  ? "https://painel.beautyfi.com.br" 
                  : "http://localhost:5173");
              window.location.href = `${appUrl}/login?email=${encodeURIComponent(purchaseData.email)}`;
            }} 
            className={styles.btnDone}
          >
            Ir para o Painel Beautyfi
          </button>
        </div>
      )}
    </div>
  );
}
