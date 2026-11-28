"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { cart, formatEuro, useCart } from "./cart-store";
import { productHref } from "./paths";
import { BUTTON, Notice, Section } from "./ui";

export function CartPage() {
  const items = useCart();
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);

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

  return (
    <Section>
      <div className="grid grid-cols-[1fr_380px] items-start gap-12 max-[1024px]:grid-cols-1">
        <table className="w-full border-collapse text-left">
          <thead className="max-[700px]:hidden">
            <tr className="border-b border-[#e3e7f0] text-[14.4px] uppercase">
              <th className="w-10 py-3" aria-label="Eliminar" />
              <th className="py-3 font-normal" colSpan={2}>
                Producto
              </th>
              <th className="py-3 font-normal">Precio</th>
              <th className="py-3 font-normal">Cantidad</th>
              <th className="py-3 text-right font-normal">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-[#e3e7f0] align-top max-[700px]:flex max-[700px]:flex-wrap max-[700px]:gap-x-4 max-[700px]:py-4">
                <td className="py-6 max-[700px]:order-last max-[700px]:py-0">
                  <button type="button" onClick={() => cart.remove(item.id)} aria-label={`Eliminar ${item.title} del carrito`} className="text-2xl leading-none text-[#999] hover:text-[#e53935]">
                    ×
                  </button>
                </td>
                <td className="w-[90px] py-6 pr-4 max-[700px]:py-0">
                  <Link href={productHref(item.slug)} className="relative block h-[70px] w-[70px] overflow-hidden rounded-[4px]">
                    <Image src={item.image} alt="" fill sizes="70px" className="object-cover" />
                  </Link>
                </td>
                <td className="py-6 pr-4 max-[700px]:flex-1 max-[700px]:py-0">
                  <Link href={productHref(item.slug)} className="text-[#2077a8] hover:text-[#FF6900]">
                    {item.title}
                  </Link>
                  <dl className="mt-2 text-[13px] leading-[20px] text-[#808080]">
                    {item.lines.map((l) => (
                      <div key={l.label} className="flex gap-1">
                        <dt className="font-semibold">{l.label}:</dt>
                        <dd>{l.value}</dd>
                      </div>
                    ))}
                  </dl>
                </td>
                <td className="py-6 pr-4 whitespace-nowrap max-[700px]:py-0">{formatEuro(item.price)}</td>
                <td className="py-5 pr-4 max-[700px]:py-0">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    aria-label={`Cantidad de ${item.title}`}
                    onChange={(e) => cart.setQuantity(item.id, Number(e.target.value) || 1)}
                    className="h-10 w-16 rounded-[4px] bg-[#f2f2f2] px-2 text-center shadow-[0_0_0_1px_#e3e7f0] outline-none focus:shadow-[0_0_0_2px_#49a7d1]"
                  />
                </td>
                <td className="py-6 text-right whitespace-nowrap max-[700px]:py-0">{formatEuro(item.price * item.quantity)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="bg-[#f2f4f7] p-8">
          <h2 className="mb-6 text-[25.6px] leading-[1.2] text-[#0f131f]">Total del carrito</h2>
          <div className="flex justify-between border-b border-[#e3e7f0] py-3">
            <span>Subtotal</span>
            <span>{formatEuro(subtotal)}</span>
          </div>
          <div className="flex justify-between py-3 text-[18px] font-semibold">
            <span>Total</span>
            <span>{formatEuro(subtotal)}</span>
          </div>
          <Link href="/finalizar-compra/" className={cn(BUTTON, "mt-4 w-full py-4 text-[16px]")}>
            Finalizar compra
          </Link>
        </div>
      </div>
    </Section>
  );
}
