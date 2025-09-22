import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sorriso Vivo - Clínica Odontológica",
  description: "Transformando sorrisos, cuidando de você. Clínica odontológica com mais de 10 anos de experiência, tecnologia moderna e atendimento humanizado.",
  keywords: "odontologia, clínica dental, dentista, limpeza dental, clareamento, ortodontia, implantes, estética do sorriso",
  authors: [{ name: "Sorriso Vivo" }],
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased font-sans bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
