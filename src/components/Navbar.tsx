"use client";

import { useEffect, useState } from "react";

interface NavbarProps {
  onOpenRegister: () => void;
}

export default function Navbar({ onOpenRegister }: NavbarProps) {
  const [loginUrl, setLoginUrl] = useState("https://painel.beautyfi.com.br/login");

  useEffect(() => {
    const isLocal = typeof window !== "undefined" && window.location.hostname.includes("localhost");
    setLoginUrl(isLocal ? "http://localhost:5173/login" : "https://painel.beautyfi.com.br/login");
  }, []);

  return (
    <header className="navbar" style={{ height: "90px" }}>
      <div className="navbar-container container" style={{ height: "100%" }}>
        {/* Logo displayed larger as png without duplicate text on the side */}
        <a href="#" className="logo" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img 
            src="/logo.png" 
            alt="beautyfi Logo" 
            style={{ height: "56px", width: "auto", objectFit: "contain", borderRadius: "12px" }} 
          />
        </a>

        {/* Links */}
        <nav className="nav-links">
          <a href="#features" className="nav-link">
            Recursos
          </a>
          <a href="#apps" className="nav-link">
            Aplicativos
          </a>
          <a href="#how-it-works" className="nav-link">
            Como funciona
          </a>
          <a href="#pricing" className="nav-link">
            Preços
          </a>
          <a href="#testimonials" className="nav-link">
            Depoimentos
          </a>
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <a 
            href={loginUrl} 
            className="btn-ghost"
            style={{ padding: "10px 20px" }}
          >
            Entrar
          </a>
          
          <button 
            onClick={onOpenRegister} 
            className="btn-gold"
            style={{ padding: "10px 20px", fontSize: "14px" }}
          >
            Começar grátis
          </button>
        </div>
      </div>
    </header>
  );
}
