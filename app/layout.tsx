import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Receitas da Lurdinha - Receitas Originais e Curiosidades da Cozinha",
  description: "Bem-vindo às Receitas da Lurdinha! Receitas originais e deliciosas, além de curiosidades e dicas de culinária. Desde bolos até pratos principais, temos tudo que você precisa para impressionar na cozinha.",
  keywords: "receitas, curiosidades culinárias, dicas de cozinha, culinária, comida, bolos, pratos principais, sobremesas, receitas da lurdinha",
  authors: [{ name: "Receitas da Lurdinha" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://receitasdalurdinha.com.br",
    title: "Receitas da Lurdinha",
    description: "Receitas originais e de qualidade da Lurdinha",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google AdSense - Adicione seu ID do AdSense aqui quando tiver */}
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
          crossOrigin="anonymous"
        ></script> */}
      </head>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: 'var(--background)' }}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
