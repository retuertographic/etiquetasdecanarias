/**
 * Price formula of the "Ajusta tu pedido al milímetro" calculator (Cost
 * Calculator Builder, calc #1401) on /producto/etiquetas-en-bobina/,
 * transcribed from the calculator's configuration on the live site.
 */

export type Option = { label: string; value: number; hint?: string };

export const PAPER: Option[] = [
  { label: "Couche Brillo", value: 0 },
  { label: "Couche Mate", value: 0 },
];

export const SHAPE: Option[] = [
  { label: "Cuadrado", value: 0 },
  { label: "Rectangular", value: 0 },
  { label: "Circular", value: 0 },
  { label: "Ovalada", value: 0 },
  { label: "Formas Especiales", value: 40 },
];

export const QUANTITY: Option[] = [
  { label: "100", value: 49 },
  { label: "250", value: 59 },
  { label: "500", value: 79 },
  { label: "1000", value: 115 },
  { label: "2500", value: 165 },
  { label: "5000", value: 285 },
  { label: "10000", value: 390 },
  { label: "15000", value: 526 },
  { label: "25000", value: 745 },
  { label: "50000", value: 995 },
];
export const DEFAULT_QUANTITY = 3; // "1000"

export const COVERAGE: (Option & { image: string })[] = [
  { label: "0% (sin impresión)", value: 0.85, image: "porcentaje-de-tinta-0.jpg" },
  { label: "15% ", value: 1.0000001, image: "porcentaje-de-tinta-15.jpg" },
  { label: "50% ", value: 1.25, image: "porcentaje-de-tinta-50.jpg" },
  { label: "100%", value: 1.45, image: "porcentaje-de-tinta-100.jpg" },
];
export const DEFAULT_COVERAGE = [1]; // "15%"

export const DESIGN: Option[] = [
  { label: "Diseño final", value: 0 },
  { label: "Solicita tu diseño", value: 39 },
  { label: "Tienes una Idea", value: 25 },
];

export const FINISHES: Option[] = [
  { label: "Estándar", value: 1.0000001, hint: "Rollos individuales,  listos para colocar a mano. (Sin coste adicional)" },
  { label: "Numeradas", value: 1.7, hint: "Rollos individuales de cantidad determinada con datos variables." },
  { label: "A granel (DESCUENTO)", value: 0.95, hint: "Rollo único de 25cm de ancho, tu opción mas económica para colocación manual. (Descuento de 5%)" },
  { label: "Texto variable", value: 2.1, hint: "Rollos individuales de cantidad a asignar, con textos variables. " },
  { label: "Individuales", value: 1.35, hint: "Paquetes de pegatinas individuales de cantidad definida por el usuario." },
  { label: "Pre-corte individual", value: 1.6, hint: "Rollo con linea de puntos troquelada que permite una fácil separación de las etiquetas, simplemente, tirando de ella." },
  { label: "Para etiquetadora", value: 1.2, hint: "Rollos individuales, de media especifica y sentido de salida a seleccionar. " },
  { label: "Para reimpresión", value: 1.35, hint: "Rollos individuales de medida especificada por el cliente y separación entre etiquetas de medida especifica.(Entre 3 y 10mm) " },
];
export const DEFAULT_FINISHES = [0]; // "Estándar"

export const SIZE_MIN = 15;
export const SIZE_MAX = 140;

/** "Coeficiente Superficie": quantity price scaled by label area (mm²). */
export function surfaceCoefficient(area: number, quantityPrice: number) {
  if (area <= 1199) return quantityPrice * 1;
  if (area <= 1999) return quantityPrice * 1.1;
  // 2000–19999 in steps of 1000mm²: ×1.15, ×1.20 … ×1.95, then ×2.02.
  if (area >= 19000 && area <= 19999) return quantityPrice * 2.02;
  if (area >= 2000 && area < 19000) return quantityPrice * (Math.round((1.15 + Math.floor((area - 2000) / 1000) * 0.05) * 100) / 100);
  return 0; // the source formula has no branch for larger areas
}

/** "Coeficiente Lam" (shown in the summary when lamination is on). */
export function laminationCoefficient(surface: number) {
  return surface <= 80 ? surface + 35 : surface * 1.4;
}

export type PriceInput = {
  base: number;
  height: number;
  quantity: number; // index into QUANTITY
  shape: number | null; // index into SHAPE
  design: number | null; // index into DESIGN
  coverage: number[]; // selected COVERAGE index (single choice on the source)
  finishes: number[]; // selected FINISHES index (single choice on the source)
};

export function computePrice(input: PriceInput) {
  const area = input.base * input.height;
  const surface = surfaceCoefficient(area, QUANTITY[input.quantity].value);
  const coverage = input.coverage.reduce((s, i) => s + COVERAGE[i].value, 0);
  const finish = input.finishes.reduce((s, i) => s + FINISHES[i].value, 0);
  const shape = input.shape === null ? 0 : SHAPE[input.shape].value;
  const design = input.design === null ? 0 : DESIGN[input.design].value;
  const total = coverage > 0 && finish > 0 ? surface * coverage * finish + (shape + design) : 0;
  return { area, surface, lamination: laminationCoefficient(surface), total };
}
