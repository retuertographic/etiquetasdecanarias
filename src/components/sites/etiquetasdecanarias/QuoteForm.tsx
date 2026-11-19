"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { WHATSAPP } from "./data";
import { BUTTON, INPUT } from "./ui";

function Glyph({ d, viewBox = "0 0 24 24" }: { d: string; viewBox?: string }) {
  return (
    <svg viewBox={viewBox} className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

const ICONS = {
  user: <Glyph d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-7 9a7 7 0 0 1 14 0" />,
  mail: <Glyph d="M3 6h18v12H3zM3 6l9 7 9-7" />,
  phone: <Glyph d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />,
  text: <Glyph d="M4 6h16M4 10h10M4 14h16M4 18h10" />,
};

function Field({ icon, error, children, className }: { icon: ReactNode; error?: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <div className="relative">
        <span className="pointer-events-none absolute top-[14.5px] left-6 text-[#4a4a4a]">{icon}</span>
        {children}
      </div>
      {error && <div className="mt-1 text-[14px] leading-[1.4] text-[#e53935]">{error}</div>}
    </div>
  );
}

type Errors = Partial<Record<"name" | "email" | "phone" | "message" | "agree", string>>;

/**
 * "Solicita un presupuesto" form. The source posts it to WordPress; this copy
 * validates the same fields and hands the request to the shop's WhatsApp.
 */
export function QuoteForm({ productTitle }: { productTitle: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const v = (k: string) => String(data.get(k) ?? "").trim();
    const next: Errors = {};
    if (!v("name")) next.name = "Rellena este campo";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v("email"))) next.email = "Por favor, introduce una dirección de correo electrónico válida.";
    if (!v("phone")) next.phone = "Rellena este campo";
    if (!v("message")) next.message = "Rellena este campo";
    if (!data.get("agree")) next.agree = "Tienes que aprobar los términos para continuar";
    setErrors(next);
    if (Object.keys(next).length) return;

    const text = [
      `Solicitud de presupuesto: *${productTitle}*`,
      `Nombre: ${v("name")}`,
      `Correo electrónico: ${v("email")}`,
      `Teléfono: ${v("phone")}`,
      `Proyecto: ${v("message")}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const inputCls = cn(INPUT, "h-[45px] pl-[52.8px]");

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-[14px]">
      <Field icon={ICONS.user} error={errors.name}>
        <input name="name" type="text" placeholder="Nombre *" aria-label="Nombre" className={inputCls} />
      </Field>
      <div className="grid grid-cols-2 gap-[14px] max-[600px]:grid-cols-1">
        <Field icon={ICONS.mail} error={errors.email}>
          <input name="email" type="email" placeholder="Correo electrónico *" aria-label="Correo electrónico" className={inputCls} />
        </Field>
        <Field icon={ICONS.phone} error={errors.phone}>
          <input name="phone" type="tel" placeholder="Teléfono *" aria-label="Teléfono" className={inputCls} />
        </Field>
      </div>
      <Field icon={ICONS.text} error={errors.message}>
        <textarea
          name="message"
          placeholder="Cuéntanos acerca de tu proyecto *"
          aria-label="Cuéntanos acerca de tu proyecto"
          className={cn(INPUT, "block h-32 resize-y py-[11.2px] pl-[52.8px] leading-[22.4px]")}
        />
      </Field>
      <div>
        <label className="flex items-center gap-[6px] py-[3.2px] leading-[22.4px]">
          <input name="agree" type="checkbox" className="h-5 w-5 rounded-[4px] accent-[#49a7d1]" />
          <span>
            He leído y entiendo la{" "}
            <Link href="/politica-de-privacidad/" className="hover:text-[#FF6900]">
              Política de Privacidad
            </Link>
          </span>
        </label>
        {errors.agree && <div className="mt-1 text-[14px] leading-[1.4] text-[#e53935]">{errors.agree}</div>}
      </div>
      <div>
        <button type="submit" className={BUTTON}>
          Enviar
        </button>
      </div>
      {sent && <p className="text-[#4a4a4a]">Hemos abierto WhatsApp con tu solicitud para que puedas enviárnosla.</p>}
    </form>
  );
}
