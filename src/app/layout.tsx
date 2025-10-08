import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sorriso Vivo | Clínica Odontológica em Curitiba - Batel",
  description:
    "Clínica odontológica moderna em Curitiba especializada em implantes, lentes de contato dental, ortodontia e estética dental. Agende sua consulta no Batel!",
  keywords: [
    "dentista curitiba",
    "clínica odontológica batel",
    "implantes dentários curitiba",
    "lentes de contato dental",
    "ortodontia curitiba",
    "clareamento dental",
    "dentista batel curitiba",
  ],
  authors: [{ name: "Sorriso Vivo Odontologia" }],
  creator: "Sorriso Vivo Odontologia",
  publisher: "Sorriso Vivo Odontologia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://sorrisovivo.odonto.br",
    title: "Sorriso Vivo | Clínica Odontológica em Curitiba",
    description:
      "Clínica odontológica moderna em Curitiba com especialistas em implantes, estética dental e ortodontia. Agende sua consulta!",
    siteName: "Sorriso Vivo Odontologia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0d9488" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
