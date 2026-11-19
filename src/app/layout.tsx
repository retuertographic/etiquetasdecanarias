import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/sites/etiquetasdecanarias/SiteShell";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: { default: "Inicio - Canarias Línea Gráfica", template: "%s - Canarias Línea Gráfica" },
  description: "Tu fábrica de etiquetas, para todo Canarias. Etiquetas adhesivas, imprenta digital, textil, rotulaciones e impresión UVI en Tenerife.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${workSans.variable} h-full antialiased`}>
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
