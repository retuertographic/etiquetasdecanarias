export const SITE = "https://etiquetasdecanarias.es";
export const ASSETS = "/sites/etiquetasdecanarias";
export const PHONE = "665826713";
export const WHATSAPP = "34665826713";

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const NAV: NavItem[] = [
  {
    label: "Etiquetas",
    href: `${SITE}/categoria-producto/etiquetas/`,
    children: [
      {
        label: "Etiquetas Colgantes",
        href: `${SITE}/categoria-producto/etiquetas/etiquetas-colgantes/`,
        children: [
          { label: "Etiquetas de Ropa", href: `${SITE}/producto/etiquetas-de-ropa/` },
          { label: "Etiquetas troqueladas", href: `${SITE}/producto/etiquetas-colgantes-troqueladas/` },
        ],
      },
    ],
  },
  { label: "Etiquetas en bobinas", href: `${SITE}/producto/etiquetas-en-bobina/` },
  {
    label: "Imprenta Digital",
    href: `${SITE}/categoria-producto/imprenta-digital/`,
    children: [
      { label: "Tarjetas de visita", href: `${SITE}/producto/tarjetas-de-visita/` },
      { label: "Flyers", href: `${SITE}/producto/flyers/` },
      { label: "Calendarios", href: `${SITE}/producto/calendarios/` },
    ],
  },
  {
    label: "Textil",
    href: `${SITE}/categoria-producto/textil/`,
    children: [
      { label: "DTF", href: `${SITE}/producto/dtf/` },
      { label: "Serigrafía", href: `${SITE}/producto/serigrafia/` },
    ],
  },
  {
    label: "Rotulaciones",
    href: `${SITE}/categoria-producto/rotulaciones/`,
    children: [
      { label: "Rotulación de vehículos", href: `${SITE}/producto/rotulacion-de-vehiculos/` },
      { label: "Gran Formato", href: `${SITE}/producto/pegatinas/` },
      { label: "Vinilos escaparates", href: `${SITE}/producto/vinilos-escaparates/` },
      { label: "Todo para el Taxi", href: `${SITE}/producto/todo-para-el-taxi/` },
    ],
  },
  {
    label: "Impresión UVI",
    href: `${SITE}/categoria-producto/impresion-uvi/`,
    children: [
      { label: "Impresión Directa", href: `${SITE}/producto/impresion-directa/` },
      { label: "Etiquetas Adhesivas UVI", href: `${SITE}/producto/etiquetas-adhesivas/` },
    ],
  },
  {
    label: "Eventos y Ferias",
    href: `${SITE}/categoria-producto/eventos-y-ferias/`,
    children: [
      { label: "Eventos y Ferias", href: `${SITE}/producto/rollups/` },
      { label: "Rollups", href: `${SITE}/producto/rollups-2/` },
    ],
  },
];

export type Product = { title: string; href: string; img: string; alt: string };

const p = (title: string, slug: string, img: string, alt = ""): Product => ({
  title,
  href: `${SITE}/producto/${slug}/`,
  img: `${ASSETS}/productos/${img}`,
  alt,
});

export const BEST_SELLERS: Product[] = [
  p("Etiquetas en bobinas", "etiquetas-en-bobina", "etiquetas-en-bobinas.jpg", "etiquetas adhesivas en bobinas"),
  p("Etiquetas Adhesivas UVI", "etiquetas-adhesivas", "etiquetas-UVI.jpg"),
  p("Etiquetas troqueladas", "etiquetas-colgantes-troqueladas", "etiquetas-colgantes-de-joyeria-1.jpg", "etiquetas colgantes de joyería"),
  p("Etiquetas de Ropa", "etiquetas-de-ropa", "etiquetas-para-ropa.jpg", "etiquetas colgantes person"),
  p("Eventos y Ferias", "rollups", "feria-imagen-1.jpg", "imagen de ferias"),
  p("Rollups", "rollups-2", "imagen-de-producto.jpg"),
  p("Impresión Directa", "impresion-directa", "uvi-portada-1.jpg"),
];

export const ALL_PRODUCTS: Product[] = [
  p("Gran Formato", "pegatinas", "carteles-4.jpg", "cartel exterior"),
  p("Tarjetas de visita", "tarjetas-de-visita", "tarjetas-de-visita-2.jpg"),
  p("Rotulación de vehículos", "rotulacion-de-vehiculos", "camion-de-floravalles-principal-2.jpg"),
  p("Calendarios", "calendarios", "calendarios-1.jpg", "calendarios"),
  p("Vinilos escaparates", "vinilos-escaparates", "vinilos-para-escaparates-1.jpg", "vinilo para escaparates"),
  p("Flyers", "flyers", "articulo-flyer-1.jpg", "flyers personalizados"),
  p("DTF", "dtf", "portada.jpg"),
  p("Serigrafía", "serigrafia", "portada-1.jpg"),
  p("Todo para el Taxi", "todo-para-el-taxi", "taxi.jpg"),
];

export const CLIENTS = [
  "taxi-la-laguna-1",
  "distrifarma",
  "joyeria-rutaby-1",
  "paniclub-1",
  "deportes",
  "clinica-candido-1",
  "alonso",
  "altoanna",
  "palmelita",
  "albertos",
  "bodega-el-julan-1",
  "adana",
  "aguacate-1",
  "cesa",
  "verificalitas-1",
  "eurocontrol",
  "fincarica-1",
  "apeles",
  "faycanes",
  "ohana",
  "el-patio",
  "floravalles",
].map((name) => `${ASSETS}/clientes/${name}.png`);
