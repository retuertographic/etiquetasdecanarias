import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/components/sites/etiquetasdecanarias/data";
import { SiteShell } from "@/components/sites/etiquetasdecanarias/SiteShell";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: { default: "Inicio - Canarias Línea Gráfica", template: "%s - Canarias Línea Gráfica" },
  description: "Tu fábrica de etiquetas, para todo Canarias. Etiquetas adhesivas, imprenta digital, textil, rotulaciones e impresión UVI en Tenerife.",
  // Canonical and Open Graph URLs point at the shop's real domain, so test copies are not indexed as duplicates.
  metadataBase: new URL(SITE),
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Canarias Línea Gráfica",
    images: [{ url: "/sites/etiquetasdecanarias/banners/baner-web-desde-1975-2.jpg", width: 1600, height: 536 }],
  },
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
