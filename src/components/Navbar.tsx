"use client";

import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

interface NavbarProps {
  onOpenRegister: () => void;
}

export default function Navbar({ onOpenRegister }: NavbarProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [loginUrl, setLoginUrl] = useState("https://painel.beautyfi.com.br/login");

  useEffect(() => {
    // Load theme preference on mount
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }

    const isLocal = typeof window !== "undefined" && window.location.hostname.includes("localhost");
    setLoginUrl(isLocal ? "http://localhost:5173/login" : "https://painel.beautyfi.com.br/login");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <img src="/logo.png" alt="Beautyfi Logo" style={{ height: "32px", width: "auto", marginRight: "8px", objectFit: "contain" }} />
          <span className={styles.logoTextBeauty}>beauty</span>
          <span className={styles.logoTextFi}>fi</span>
        </a>

        <nav className={styles.nav}>
          <a href="#features" className={styles.navLink}>
            Funcionalidades
          </a>
          <a href="#pricing" className={styles.navLink}>
            Planos e Preços
          </a>
          <a href="#testimonials" className={styles.navLink}>
            Depoimentos
          </a>
          <a href="#faq" className={styles.navLink}>
            Perguntas Frequentes
          </a>
        </nav>

        <div className={styles.actions}>
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Alterar Tema">
            {theme === "light" ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              </svg>
            )}
          </button>

          <a 
            href={loginUrl} 
            className={styles.btnText} 
            style={{ textDecoration: "none" }}
          >
            Entrar
          </a>
          
          <button onClick={onOpenRegister} className={styles.btnPrimary}>
            Criar Conta Grátis
          </button>
        </div>
      </div>
    </header>
  );
}
