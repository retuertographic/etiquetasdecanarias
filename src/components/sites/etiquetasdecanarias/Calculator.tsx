"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cart, formatEuro, type CartLine } from "./cart-store";
import { ASSETS } from "./data";
import {
  COVERAGE,
  DEFAULT_COVERAGE,
  DEFAULT_FINISHES,
  DEFAULT_QUANTITY,
  DESIGN,
  FINISHES,
  PAPER,
  QUANTITY,
  SHAPE,
  SIZE_MAX,
  SIZE_MIN,
  computePrice,
  type Option,
} from "./pricing";

const INK = "text-[#001931]";
const FIELD_BOX = "rounded-[2px] border border-[rgba(0,25,49,0.1)] bg-[#ecf9fd]";

function Item({ title, required, description, error, children, dataId }: { title: string; required?: boolean; description?: string; error?: boolean; children: ReactNode; dataId: string }) {
  return (
    <div className={cn("mb-[18px]", INK)} data-id={dataId}>
      <div className="mb-1 text-[18px] leading-[28px] font-medium">
        {title} {required && <span className="text-[#e53935]">*</span>}
        {error && <span className="ml-2 rounded-[2px] bg-[#e53935] px-2 py-[2px] align-middle text-[12px] leading-none font-normal text-white">Este campo es obligatorio</span>}
      </div>
      {description && <div className="mb-1 text-[12px] leading-[16px] text-[rgba(0,25,49,0.6)]">{description}</div>}
      {children}
    </div>
  );
}

function Dropdown({ options, value, onChange, placeholder = "Seleccionar valor", label }: { options: Option[]; value: number | null; onChange: (v: number | null) => void; placeholder?: string; label: string }) {
  return (
    <div className="relative">
      <select
        aria-label={label}
        value={value === null ? "" : String(value)}
        onChange={(e) => onChange(e.target.value === "" ? null : Number(e.target.value))}
        className={cn(FIELD_BOX, INK, "h-[46px] w-full cursor-pointer appearance-none px-[18px] text-[18px] font-bold outline-none focus:border-[#2ab84a]")}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((o, i) => (
          <option key={o.label} value={i}>
            {o.label}
          </option>
        ))}
      </select>
      <svg viewBox="0 0 10 6" className="pointer-events-none absolute top-1/2 right-[14px] h-[6px] w-[10px] -translate-y-1/2 text-[rgba(0,25,49,0.6)]" aria-hidden="true">
        <path d="M0 0h10L5 6z" fill="currentColor" />
      </svg>
    </div>
  );
}

function NumberField({ value, onChange, label }: { value: number; onChange: (v: number) => void; label: string }) {
  const clamp = (n: number) => Math.min(SIZE_MAX, Math.max(SIZE_MIN, Math.round(n)));
  const [text, setText] = useState(String(value));
  return (
    <div className="relative">
      <input
        aria-label={label}
        type="number"
        inputMode="numeric"
        min={SIZE_MIN}
        max={SIZE_MAX}
        step={1}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          const n = Number(e.target.value);
          if (e.target.value !== "" && !Number.isNaN(n)) onChange(clamp(n));
        }}
        onBlur={() => {
          const n = clamp(Number(text) || SIZE_MIN);
          setText(String(n));
          onChange(n);
        }}
        className={cn(FIELD_BOX, INK, "h-[46px] w-full appearance-none px-[10px] text-[16px] font-bold outline-none [-moz-appearance:textfield] focus:border-[#2ab84a] [&::-webkit-inner-spin-button]:appearance-none")}
      />
      <div className="absolute top-0 right-0 flex h-full flex-col">
        {[1, -1].map((d) => (
          <button
            key={d}
            type="button"
            aria-label={d > 0 ? "Aumentar" : "Disminuir"}
            onClick={() => {
              const n = clamp(value + d);
              setText(String(n));
              onChange(n);
            }}
            className="group/spin flex h-1/2 w-7 items-center justify-center text-[#001931]"
          >
            {/* 12px visual inside a 28×23px touch target */}
            <span className="flex h-[12px] w-[12px] items-center justify-center rounded-[2px] bg-[rgba(0,25,49,0.1)] group-hover/spin:bg-[rgba(0,25,49,0.2)]">
              <svg viewBox="0 0 10 6" className={cn("h-[5px] w-[8px]", d < 0 && "rotate-180")} aria-hidden="true">
                <path d="M0 6h10L5 0z" fill="currentColor" />
              </svg>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Switch({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={cn("relative h-6 w-[45px] shrink-0 rounded-full transition-colors", checked ? "bg-[#2ab84a]" : "bg-[rgba(0,25,49,0.15)]")}
    >
      <span className={cn("absolute top-[3px] h-[18px] w-[18px] rounded-full bg-white shadow transition-[left]", checked ? "left-[24px]" : "left-[3px]")} />
    </button>
  );
}

function FileField({ label }: { label: string }) {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <div className="flex gap-[10px]">
        <button type="button" onClick={() => inputRef.current?.click()} className="h-[22px] flex-1 rounded-[2px] bg-[#2ab84a] text-[16px] leading-[22px] font-bold text-white">
          Elegir archivo
        </button>
        <span className={cn(FIELD_BOX, "h-[22px] flex-1 truncate bg-[rgba(0,25,49,0.05)] px-2 text-center text-[13px] leading-[20px]")}>{name || "Ningún archivo"}</span>
      </div>
      <input
        ref={inputRef}
        type="file"
        aria-label={label}
        accept=".pdf,.svg,.psd,.jpg,.jpeg"
        className="hidden"
        onChange={(e) => setName(e.target.files?.[0]?.name ?? "")}
      />
      <p className="mt-1 text-[11px] leading-[14px] text-[rgba(0,25,49,0.5)]">Formatos: pdf, svg, psd, jpg/jpeg · máx. 45 MB</p>
    </div>
  );
}

type Row = { label: string; value: string; detail?: string };

export function Calculator({ slug, title, image }: { slug: string; title: string; image: string }) {
  const router = useRouter();
  const [paper, setPaper] = useState<number | null>(null);
  const [shape, setShape] = useState<number | null>(null);
  const [base, setBase] = useState(SIZE_MIN);
  const [height, setHeight] = useState(SIZE_MIN);
  const [quantity, setQuantity] = useState<number | null>(DEFAULT_QUANTITY);
  const [coverageOn, setCoverageOn] = useState(false);
  const [coverage, setCoverage] = useState<number[]>(DEFAULT_COVERAGE);
  const [design, setDesign] = useState<number | null>(null);
  const [designText, setDesignText] = useState("");
  const [finishOn, setFinishOn] = useState(false);
  const [finishes, setFinishes] = useState<number[]>(DEFAULT_FINISHES);
  const [lamination, setLamination] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(true);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const errorRef = useRef<string | null>(null);

  const q = quantity ?? DEFAULT_QUANTITY;
  const price = computePrice({ base, height, quantity: q, shape, design, coverage, finishes });

  useEffect(() => {
    if (!errorRef.current) return;
    document.querySelector(`[data-id="${errorRef.current}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    errorRef.current = null;
  }, [errors]);

  const rows: Row[] = [
    { label: "Etiquetas de papel adhesivo", value: "0", detail: paper === null ? undefined : PAPER[paper].label },
    { label: "Formato de la etiqueta", value: shape === null ? "0" : String(SHAPE[shape].value), detail: shape === null ? undefined : SHAPE[shape].label },
    { label: "Base (mm)", value: `${base} mm` },
    { label: "Alto (mm)", value: `${height} mm` },
    { label: "Que cantidad necesitas?", value: formatEuro(QUANTITY[q].value), detail: QUANTITY[q].label },
    ...(coverageOn ? [{ label: "Cobertura de tintas (%)", value: coverage.map((i) => COVERAGE[i].label.trim()).join(", ") }] : []),
    { label: "Ahora si!, vamos a imprimir...", value: formatEuro(design === null ? 0 : DESIGN[design].value), detail: design === null ? undefined : DESIGN[design].label },
    { label: "Elije la presentación de tu pedido.", value: "0", detail: finishOn ? "Finalización" : undefined },
    ...(finishOn ? [{ label: "Acabados y extras", value: finishes.map((i) => FINISHES[i].label).join(", ") }] : []),
    { label: "Laminacion", value: lamination ? "si" : "" },
  ];

  const addToCart = () => {
    const next: Record<string, boolean> = {};
    if (paper === null) next.paper = true;
    if (shape === null) next.shape = true;
    if (quantity === null) next.quantity = true;
    if (!coverageOn) next.coverage = true;
    if (design === null) next.design = true;
    if (!finishOn) next.finish = true;
    setErrors(next);
    const first = ["paper", "shape", "quantity", "coverage", "design", "finish"].find((k) => next[k]);
    if (first) {
      errorRef.current = { paper: "dropDown_field_id_0", shape: "dropDown_field_id_1", quantity: "dropDown_field_id_10", coverage: "radio_field_id_11", design: "radio_field_id_4", finish: "toggle_field_id_9" }[first] ?? null;
      return;
    }
    const lines: CartLine[] = rows.filter((r) => r.value || r.detail).map((r) => ({ label: r.label, value: r.detail ?? r.value }));
    if (designText) lines.push({ label: "Tu idea", value: designText });
    cart.add({ slug, title, image, price: Math.round(price.total * 100) / 100, lines });
    router.push("/carrito/");
  };

  return (
    <div className="grid grid-cols-2 items-start gap-[30px] px-[10px] max-[900px]:grid-cols-1">
      {/* Fields */}
      <div className="rounded-[2px] border border-[rgba(0,25,49,0.1)] bg-white pt-2 pr-[9px] pb-[10px] pl-3">
        <div className={cn("mb-5 text-[19px] leading-[28px] font-semibold", INK)}>Ajusta tu pedido al milímetro</div>

        <Item title="Etiquetas de papel adhesivo" required error={errors.paper && paper === null} dataId="dropDown_field_id_0">
          <Dropdown label="Etiquetas de papel adhesivo" options={PAPER} value={paper} onChange={setPaper} />
        </Item>
        <Item title="Formato de la etiqueta" required error={errors.shape && shape === null} dataId="dropDown_field_id_1">
          <Dropdown label="Formato de la etiqueta" options={SHAPE} value={shape} onChange={setShape} />
        </Item>
        <Item title="Base (mm)" required dataId="quantity_field_id_2">
          <NumberField label="Base (mm)" value={base} onChange={setBase} />
        </Item>
        <Item title="Alto (mm)" required description="mm" dataId="quantity_field_id_3">
          <NumberField label="Alto (mm)" value={height} onChange={setHeight} />
        </Item>
        <Item title="Que cantidad necesitas?" required description="Si deseas otra cantidad, fuera de esta lista, consúltanos." error={errors.quantity && quantity === null} dataId="dropDown_field_id_10">
          <Dropdown label="Que cantidad necesitas?" options={QUANTITY} value={quantity} onChange={setQuantity} />
        </Item>
        <Item title="Cobertura de tintas" required error={errors.coverage && !coverageOn} dataId="radio_field_id_11">
          <button
            type="button"
            aria-pressed={coverageOn}
            onClick={() => setCoverageOn(true)}
            className={cn(FIELD_BOX, INK, "h-[49px] w-full text-[18px] font-bold", coverageOn && "border-[#2ab84a] bg-[#e9f8ec]")}
          >
            Activar
          </button>
        </Item>
        {coverageOn && (
          <Item title="Cobertura de tintas (%)" description="Indica la proporción de tintas utilizadas en tu diseño." dataId="checkbox_with_img_field_id_7">
            <div className="grid grid-cols-4 gap-2 max-[500px]:grid-cols-2">
              {COVERAGE.map((c, i) => {
                const on = coverage.includes(i);
                return (
                  <button
                    key={c.label}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setCoverage([i])}
                    className={cn(FIELD_BOX, "overflow-hidden p-1 text-[13px] font-bold", on && "border-[#2ab84a] bg-[#e9f8ec]")}
                  >
                    <span className="relative block aspect-square w-full">
                      <Image src={`${ASSETS}/galeria/calc/${c.image}`} alt="" fill sizes="140px" className="object-cover" />
                    </span>
                    <span className="mt-1 block">{c.label.trim()}</span>
                  </button>
                );
              })}
            </div>
          </Item>
        )}
        <Item title="Ahora si!, vamos a imprimir..." required description="Aqui es donde se materializa la imagen final de tu producto." error={errors.design && design === null} dataId="radio_field_id_4">
          <div className="flex flex-wrap gap-x-5 gap-y-2" role="radiogroup" aria-label="Ahora si!, vamos a imprimir...">
            {DESIGN.map((d, i) => (
              <label key={d.label} className="flex cursor-pointer items-center gap-2 text-[18px] font-bold">
                <input type="radio" name="design" checked={design === i} onChange={() => setDesign(i)} className="peer sr-only" />
                <span className={cn("h-[22px] w-[22px] rounded-full border border-[rgba(0,25,49,0.15)] bg-[#ecf9fd]", design === i && "border-[7px] border-[#2ab84a] bg-white")} />
                {d.label}
              </label>
            ))}
          </div>
        </Item>
        {design === 0 && (
          <Item title="Subir archivo de diseño" description="Archivo final con sangrado de 3mm. listo para impresión." dataId="file_upload_field_id_6">
            <FileField label="Subir archivo de diseño" />
          </Item>
        )}
        {design === 1 && (
          <>
            <Item title="Tu diseño personalizado" description="Cuéntanos tu idea y nuestro diseñador gráfico contactará contigo." dataId="text_field_id_19">
              <textarea value={designText} onChange={(e) => setDesignText(e.target.value)} aria-label="Tu diseño personalizado" className={cn(FIELD_BOX, INK, "block h-24 w-full p-3 text-[15px] outline-none")} />
            </Item>
            <Item title="Sube una imagen de un ejemplo que te agrade." description="Sube un dibujo, imagen o cualquier idea que nos ayude a sintonizar con tu proyecto." dataId="file_upload_field_id_20">
              <FileField label="Sube una imagen de un ejemplo que te agrade." />
            </Item>
          </>
        )}
        {design === 2 && (
          <>
            <Item title="Si ya tienes un logo, descríbenos tu idea" description="Prepararemos juntos, un diseño perfecto." dataId="text_field_id_13">
              <textarea value={designText} onChange={(e) => setDesignText(e.target.value)} aria-label="Si ya tienes un logo, descríbenos tu idea" className={cn(FIELD_BOX, INK, "block h-24 w-full p-3 text-[15px] outline-none")} />
            </Item>
            <Item title="Sube tu logo vectorial" description="Te ayudamos a diseñar tu etiqueta con los colores y textos que desees." dataId="file_upload_field_id_17">
              <FileField label="Sube tu logo vectorial" />
            </Item>
          </>
        )}
        <Item title="Elije la presentación de tu pedido." required description="Mejores opciones, etiquetado sin preocupaciones..." error={errors.finish && !finishOn} dataId="toggle_field_id_9">
          <div className="flex items-center gap-[10px] text-[18px] font-bold">
            <span title="Por favor, elije alguna de las siguientes opciones.">Finalización</span>
            <Switch label="Finalización" checked={finishOn} onChange={setFinishOn} />
          </div>
        </Item>
        {finishOn && (
          <Item title="Acabados y extras" required description="Puedes ajustar aun más la presentación de tu pedido de etiquetas." dataId="toggle_field_id_5">
            <div className="flex flex-col gap-[10px]">
              {FINISHES.map((f, i) => {
                const on = finishes.includes(i);
                return (
                  <div key={f.label} className={cn(FIELD_BOX, "flex items-start gap-[10px] px-[15px] py-[14px]", on && "border-[#2ab84a] bg-[#e9f8ec]")}>
                    <Switch label={f.label} checked={on} onChange={() => setFinishes([i])} />
                    <div>
                      <div className="text-[18px] leading-[24px] font-bold">{f.label}</div>
                      <div className="mt-1 text-[12px] leading-[15px] text-[rgba(0,25,49,0.7)]">{f.hint}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Item>
        )}
        <Item title="Laminacion" dataId="toggle_field_id_12">
          <div className="flex items-center gap-[10px] text-[18px] font-bold">
            si
            <Switch label="Laminacion" checked={lamination} onChange={setLamination} />
          </div>
        </Item>
      </div>

      {/* Summary (sticky like the source's Total Summary) */}
      <div className="sticky top-[165px] rounded-[2px] border border-[rgba(0,25,49,0.1)] bg-white px-3 pt-3 pb-5 max-[900px]:static">
        <div className={cn("mb-4 flex items-center justify-between", INK)}>
          <span className="text-[19px] leading-[28px] font-semibold">Total Summary</span>
          <button
            type="button"
            aria-expanded={summaryOpen}
            aria-label="Mostrar u ocultar detalles"
            onClick={() => setSummaryOpen((o) => !o)}
            className="flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(0,25,49,0.1)]"
          >
            <svg viewBox="0 0 10 6" className={cn("h-[5px] w-[8px]", !summaryOpen && "rotate-180")} aria-hidden="true">
              <path d="M0 6h10L5 0z" fill="currentColor" />
            </svg>
          </button>
        </div>
        {summaryOpen && (
          <>
            <div className={cn("flex justify-between rounded-[2px] bg-[rgba(0,25,49,0.1)] px-[10px] py-[5px] text-[16px] font-semibold", INK)}>
              <span>Nombre</span>
              <span>Total</span>
            </div>
            <div className="mt-2">
              {rows.map((r) => (
                <div key={r.label} className={cn("border-b border-dashed border-[rgba(0,25,49,0.2)] pt-[5px] pb-[6px] text-[14px] leading-[28px]", INK)}>
                  <div className="flex justify-between gap-4">
                    <span>{r.label}</span>
                    <span className="text-right">{r.value}</span>
                  </div>
                  {r.detail && <div className="pl-[15px] text-[12px] leading-[22px] text-[rgba(0,25,49,0.7)]">{r.detail}</div>}
                </div>
              ))}
            </div>
          </>
        )}
        <div className={cn("mt-4 flex justify-between border-b border-[rgba(0,25,49,0.1)] px-[10px] pb-1 text-[16px] font-bold", INK)}>
          <span>Total</span>
          <span>{formatEuro(price.total)}</span>
        </div>
        <button type="button" onClick={addToCart} className="mt-[50px] h-10 w-[282px] max-w-full rounded-[2px] bg-[#2ab84a] text-[16px] font-semibold text-white transition-colors hover:bg-[#24a040]">
          Añadir al Carrito
        </button>
      </div>
    </div>
  );
}
