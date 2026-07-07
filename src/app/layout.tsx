import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "beautyfi | Sistema de Agendamento Online e Gestão para Profissionais da Beleza",
  description: "O software de agendamento e gestão para salões de beleza, barbearias e clínicas de estética mais completo do mercado. Lembretes via WhatsApp com IA e controle financeiro integrado.",
  keywords: ["agendamento online", "software para salão de beleza", "sistema para barbearia", "gestão clínica estética", "agenda whatsapp", "comissões automático", "beautyfi planos", "beautyfi assinatura"],
  authors: [{ name: "beautyfi Inc." }],
  openGraph: {
    title: "beautyfi | Gestão e Agendamento Online Premium",
    description: "Multiplique os agendamentos do seu estabelecimento com a IA no WhatsApp e controle financeiro completo em um só app.",
    url: "https://www.beautyfi.com.br",
    siteName: "beautyfi",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "beautyfi | Gestão e Agendamento Online Premium",
    description: "O software mais completo de gestão para profissionais da beleza.",
  }
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
  // Schema JSON-LD para Rich Snippets do Google (Planos e Produto)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "beautyfi",
    "description": "SaaS de agendamento e gestão para profissionais da beleza",
    "brand": {
      "@type": "Brand",
      "name": "beautyfi"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BRL",
      "lowPrice": "59.90",
      "highPrice": "179.90",
      "offerCount": "4",
      "offers": [
        { "@type": "Offer", "name": "Plano Starter", "price": "59.90", "priceCurrency": "BRL" },
        { "@type": "Offer", "name": "Plano Solo + IA", "price": "74.90", "priceCurrency": "BRL" },
        { "@type": "Offer", "name": "Plano Pro", "price": "99.90", "priceCurrency": "BRL" },
        { "@type": "Offer", "name": "Plano Enterprise", "price": "179.90", "priceCurrency": "BRL" }
      ]
    }
  };

  return (
    <html lang="pt-BR" data-theme="light">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
