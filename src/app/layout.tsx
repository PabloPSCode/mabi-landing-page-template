import type { Metadata } from "next";
import { Inter } from "next/font/google";
//@ts-ignore
import "../styles/globals.css";

// Inter is the closest open-source substitute for SF Pro; on Apple platforms
// the CSS stack resolves to the real SF Pro ahead of it (see globals.css).
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Juliana Alvarenga — Nutricionista em Alphaville/SP",
  description:
    "Nutricionista com 18 anos de experiência, especialista em Nutrição Funcional, Integrativa, Intestinal e Esportiva. Criadora do Método ReConnect. Atendimento presencial em Alphaville e online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
