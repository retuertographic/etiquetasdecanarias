import type { ReactNode } from "react";
import { WHATSAPP } from "./data";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { FaBrandsWhatsapp } from "./icons";

const WHATSAPP_MESSAGE = "Hola *Canarias Línea Gráfica*. Necesito más información sobre Canarias Línea Gráfica https://etiquetasdecanarias.es";

/** Fixed header, footer and floating WhatsApp button shared by every page. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-white font-[family-name:var(--font-work-sans)] text-base leading-[28px] text-[#4a4a4a]">
      <Header />
      <main className="flex-1 pt-[145px] max-[1024px]:pt-[100px]">{children}</main>
      <Footer />
      {/* Floating WhatsApp button (Joinchat on the source) */}
      <a
        href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir chat de WhatsApp"
        className="fixed right-7 bottom-7 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_1px_6px_rgba(0,0,0,0.06),0_2px_32px_rgba(0,0,0,0.16)] transition-transform hover:scale-105"
      >
        <FaBrandsWhatsapp className="h-[34px] w-[34px]" />
      </a>
    </div>
  );
}
