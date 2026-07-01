"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";

function CheckoutSuccessContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  const sessionId = searchParams.get("session_id") || "";
  const [appUrl, setAppUrl] = useState("https://painel.beautyfi.com.br");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLocal = window.location.hostname.includes("localhost");
      setAppUrl(isLocal ? "http://localhost:5173" : "https://painel.beautyfi.com.br");
    }
  }, []);

  return (
    <div style={cardStyle}>
      <div style={iconContainerStyle}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={checkStyle}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      
      <h1 style={titleStyle}>Assinatura Ativada!</h1>
      <p style={descStyle}>
        Seu pagamento foi confirmado pelo Stripe e seu estabelecimento já está totalmente pronto para uso.
      </p>

      {email && (
        <div style={emailBoxStyle}>
          <span style={emailLabelStyle}>E-mail de acesso:</span>
          <strong style={emailValueStyle}>{email}</strong>
        </div>
      )}

      <div style={infoBoxStyle}>
        <p style={infoTextStyle}>
          ℹ️ Agora você já pode configurar profissionais, serviços, comissões, comandas e gerenciar seu fluxo de caixa pelo painel web ou aplicativo mobile.
        </p>
      </div>

      <a 
        href={`${appUrl}/login?email=${encodeURIComponent(email)}`} 
        style={btnStyle}
      >
        Acessar Painel Beautyfi
      </a>

      <div style={footerStyle}>
        <Link href="/" style={backLinkStyle}>
          ← Voltar para a Home
        </Link>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <div style={containerStyle}>
      <Suspense fallback={<div style={loadingStyle}>Carregando...</div>}>
        <CheckoutSuccessContent />
      </Suspense>
    </div>
  );
}

// Styling system
const containerStyle: React.CSSProperties = {
  minHeight: "100vh",
  background: "radial-gradient(circle at top, #0f172a, #020617)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "24px",
  fontFamily: "'Outfit', 'Inter', system-ui, sans-serif",
  color: "#f8fafc",
};

const loadingStyle: React.CSSProperties = {
  fontSize: "18px",
  color: "#eab308",
  fontWeight: "bold",
};

const cardStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: "480px",
  background: "rgba(15, 23, 42, 0.6)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  borderRadius: "24px",
  padding: "48px 32px",
  textAlign: "center",
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
};

const iconContainerStyle: React.CSSProperties = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  background: "rgba(234, 179, 8, 0.1)",
  border: "1px solid rgba(234, 179, 8, 0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 28px",
};

const checkStyle: React.CSSProperties = {
  color: "#eab308",
};

const titleStyle: React.CSSProperties = {
  fontSize: "28px",
  fontWeight: 700,
  color: "#ffffff",
  marginBottom: "12px",
};

const descStyle: React.CSSProperties = {
  fontSize: "14px",
  color: "#94a3b8",
  lineHeight: "1.6",
  marginBottom: "24px",
};

const emailBoxStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.03)",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  borderRadius: "12px",
  padding: "12px 16px",
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "28px",
};

const emailLabelStyle: React.CSSProperties = {
  fontSize: "13px",
  color: "#64748b",
};

const emailValueStyle: React.CSSProperties = {
  fontSize: "13px",
  color: "#eab308",
};

const infoBoxStyle: React.CSSProperties = {
  background: "rgba(234, 179, 8, 0.04)",
  border: "1px solid rgba(234, 179, 8, 0.1)",
  borderRadius: "16px",
  padding: "16px",
  marginBottom: "32px",
  textAlign: "left",
};

const infoTextStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "#cbd5e1",
  lineHeight: "1.6",
  margin: 0,
};

const btnStyle: React.CSSProperties = {
  display: "block",
  width: "100%",
  padding: "14px",
  background: "#eab308",
  color: "#0f172a",
  fontWeight: "bold",
  fontSize: "14px",
  borderRadius: "12px",
  textDecoration: "none",
  transition: "all 0.2s ease",
  boxShadow: "0 4px 14px 0 rgba(234, 179, 8, 0.3)",
};

const footerStyle: React.CSSProperties = {
  marginTop: "24px",
};

const backLinkStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "#64748b",
  textDecoration: "none",
};
