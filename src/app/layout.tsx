import type { Metadata } from "next";

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
  return children;
}
