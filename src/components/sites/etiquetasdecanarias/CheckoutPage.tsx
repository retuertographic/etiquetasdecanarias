"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { formatEuro, useCart } from "./cart-store";
import { WHATSAPP } from "./data";
import { BUTTON, INPUT, Notice, Section } from "./ui";

const FIELDS: { name: string; label: string; required?: boolean; type?: string; half?: boolean; autoComplete?: string }[] = [
  { name: "first_name", label: "Nombre", required: true, half: true, autoComplete: "given-name" },
  { name: "last_name", label: "Apellidos", required: true, half: true, autoComplete: "family-name" },
  { name: "company", label: "Nombre de la empresa (opcional)", autoComplete: "organization" },
  { name: "nif", label: "NIF / CIF (opcional)" },
  { name: "address", label: "Dirección de la calle", required: true, autoComplete: "street-address" },
  { name: "postcode", label: "Código postal", required: true, autoComplete: "postal-code" },
  { name: "city", label: "Localidad / Ciudad", required: true, autoComplete: "address-level2" },
  { name: "state", label: "Provincia", required: true, autoComplete: "address-level1" },
  { name: "phone", label: "Teléfono", required: true, type: "tel", autoComplete: "tel" },
  { name: "email", label: "Dirección de correo electrónico", required: true, type: "email", autoComplete: "email" },
];

/**
 * Checkout reconstructed from WooCommerce's standard layout (the source's
 * checkout could not be observed). Online payment is not connected in this
 * copy, so the order is handed to the shop's WhatsApp.
 */
export function CheckoutPage() {
  const items = useCart();
  const [sent, setSent] = useState(false);
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);

  if (!items.length) {
    return (
      <Section>
        <Notice>Tu carrito está vacío.</Notice>
        <Link href="/tienda/" className={BUTTON}>
          Volver a la tienda
        </Link>
      </Section>
    );
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const text = [
      "*Nuevo pedido*",
      ...items.map((i) => `• ${i.quantity} × ${i.title} — ${formatEuro(i.price * i.quantity)}\n  ${i.lines.map((l) => `${l.label}: ${l.value}`).join(" | ")}`),
      `Total: ${formatEuro(total)}`,
      "",
      ...FIELDS.map((f) => `${f.label.replace(" (opcional)", "")}: ${get(f.name)}`).filter((l) => !l.endsWith(": ")),
      get("notes") ? `Notas: ${get("notes")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <Section>
      {sent && <Notice>Hemos abierto WhatsApp con el resumen de tu pedido. Envíanos el mensaje y te confirmaremos el pago y la entrega.</Notice>}
      <form onSubmit={onSubmit} className="grid grid-cols-[1fr_440px] items-start gap-12 max-[1024px]:grid-cols-1">
        <div>
          <h2 className="mb-6 text-[25.6px] leading-[1.2] text-[#0f131f]">Detalles de facturación</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 max-[600px]:grid-cols-1">
            {FIELDS.map((f) => (
              <p key={f.name} className={f.half ? "" : "col-span-2 max-[600px]:col-span-1"}>
                <label htmlFor={`co-${f.name}`} className="mb-[4.8px] block font-bold">
                  {f.label} {f.required && <abbr className="text-[#e53935] no-underline" title="obligatorio">*</abbr>}
                </label>
                <input id={`co-${f.name}`} name={f.name} type={f.type ?? "text"} required={f.required} autoComplete={f.autoComplete} className={cn(INPUT, "h-[45px]")} />
              </p>
            ))}
            <p className="col-span-2 max-[600px]:col-span-1">
              <label htmlFor="co-notes" className="mb-[4.8px] block font-bold">
                Notas del pedido (opcional)
              </label>
              <textarea id="co-notes" name="notes" placeholder="Notas sobre tu pedido, por ejemplo, notas especiales para la entrega." className={cn(INPUT, "block h-32 py-3")} />
            </p>
          </div>
        </div>

        <div className="bg-[#f2f4f7] p-8">
          <h2 className="mb-6 text-[25.6px] leading-[1.2] text-[#0f131f]">Tu pedido</h2>
          <div className="flex justify-between border-b border-[#e3e7f0] pb-2 text-[14.4px] uppercase">
            <span>Producto</span>
            <span>Subtotal</span>
          </div>
          {items.map((i) => (
            <div key={i.id} className="flex justify-between gap-4 border-b border-[#e3e7f0] py-3">
              <span>
                {i.title} <strong>× {i.quantity}</strong>
              </span>
              <span className="whitespace-nowrap">{formatEuro(i.price * i.quantity)}</span>
            </div>
          ))}
          <div className="flex justify-between border-b border-[#e3e7f0] py-3">
            <span>Subtotal</span>
            <span>{formatEuro(total)}</span>
          </div>
          <div className="flex justify-between py-3 text-[18px] font-semibold">
            <span>Total</span>
            <span>{formatEuro(total)}</span>
          </div>
          <p className="mt-4 bg-white p-4 text-[14.4px] leading-[22px]">
            El pago en línea no está conectado en esta versión de la web. Al realizar el pedido te enviaremos a WhatsApp con el resumen para confirmarlo con nosotros.
          </p>
          <label className="mt-4 flex items-start gap-2 text-[14.4px] leading-[22px]">
            <input type="checkbox" required className="mt-1 h-4 w-4 accent-[#49a7d1]" />
            <span>
              He leído y estoy de acuerdo con la{" "}
              <Link href="/politica-de-privacidad/" className="underline hover:text-[#FF6900]">
                política de privacidad
              </Link>{" "}
              <abbr className="text-[#e53935] no-underline" title="obligatorio">
                *
              </abbr>
            </span>
          </label>
          <button type="submit" className={cn(BUTTON, "mt-6 w-full py-4 text-[16px]")}>
            Realizar el pedido
          </button>
        </div>
      </form>
    </Section>
  );
}
