import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "beautyfi | Plataforma Completa de Gestão para Salões, Clínicas e Barbearias",
  description: "O software de agendamento online e gestão mais completo do mercado. Remunerações automáticas, lembretes via WhatsApp com IA e controle financeiro integrado.",
  keywords: ["agendamento online", "software para salão de beleza", "barbearia", "clínica de estética", "sistema de gestão", "stripe pagamentos"],
  authors: [{ name: "beautyfi Inc." }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="light">
      <body>
        {children}
      </body>
    </html>
  );
}
