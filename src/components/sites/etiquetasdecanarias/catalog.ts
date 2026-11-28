// Generated from the live etiquetasdecanarias.es pages (product + category HTML).
export type GalleryImage = { src: string; width: number; height: number; alt: string };
export type CatalogProduct = {
  slug: string;
  /** WordPress post ID on the live site (used by the review/quote forms). */
  wpId: number;
  title: string;
  image: string;
  imageAlt: string;
  /** Trusted HTML copied from the product description. */
  content: string;
  features: string[];
  gallery: GalleryImage[];
  related: string[];
  categories: string[];
  calculator: boolean;
  tags: string[];
};
export type CatalogCategory = { slug: string; title: string; products: string[]; parent: string | null };

export const PRODUCTS: CatalogProduct[] = [
  {
    "slug": "calendarios",
    "wpId": 724,
    "title": "Calendarios",
    "image": "/sites/etiquetasdecanarias/productos/calendarios-1.jpg",
    "imageAlt": "calendarios",
    "content": "<p>Realizamos calendarios completamente personalizados. Trasmite tu mejor imagen cada día del año.</p>",
    "features": [],
    "gallery": [
      {
        "src": "/sites/etiquetasdecanarias/galeria/calendarios/calendario-floravalles-1.jpg",
        "width": 901,
        "height": 793,
        "alt": "calendarios floravalles"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/calendarios/Sin-titulo-1.jpg",
        "width": 768,
        "height": 1024,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/calendarios/calendarios-hierba-sana.jpg",
        "width": 900,
        "height": 780,
        "alt": "faldilla calendarios"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/calendarios/calendario-faldilla-jpg-842x1024.jpg",
        "width": 842,
        "height": 1024,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/calendarios/calendario-floravalles-portada.jpg",
        "width": 900,
        "height": 847,
        "alt": "calendarios de floravalles"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/calendarios/calendario-de-espiral-1024x1015.jpg",
        "width": 1024,
        "height": 1015,
        "alt": ""
      }
    ],
    "related": [
      "flyers",
      "tarjetas-de-visita"
    ],
    "categories": [
      "imprenta-digital"
    ],
    "calculator": false,
    "tags": []
  },
  {
    "slug": "dtf",
    "wpId": 822,
    "title": "DTF",
    "image": "/sites/etiquetasdecanarias/productos/portada.jpg",
    "imageAlt": "",
    "content": "<p>La impresión textil en DTF, es un sistema que permite realizar impresiones a todo color con máxima calidad, colores vibrantes y muchísimos detalles. Ideal para cantidades pequeñas o medianas.</p>",
    "features": [],
    "gallery": [
      {
        "src": "/sites/etiquetasdecanarias/galeria/dtf/dtf-impresion.jpg",
        "width": 556,
        "height": 559,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/dtf/camiseta-768x1024.jpg",
        "width": 768,
        "height": 1024,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/dtf/dtf-2.jpg",
        "width": 700,
        "height": 733,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/dtf/road3.jpg",
        "width": 600,
        "height": 600,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/dtf/road2.jpg",
        "width": 600,
        "height": 600,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/dtf/sueter-logo-1.jpg",
        "width": 600,
        "height": 600,
        "alt": ""
      }
    ],
    "related": [
      "serigrafia"
    ],
    "categories": [
      "textil"
    ],
    "calculator": false,
    "tags": []
  },
  {
    "slug": "etiquetas-adhesivas",
    "wpId": 827,
    "title": "Etiquetas Adhesivas UVI",
    "image": "/sites/etiquetasdecanarias/productos/etiquetas-UVI.jpg",
    "imageAlt": "",
    "content": "<p>Nuestras etiquetas con tinta UVI ofrecerán a su producto una terminación muy especial, se pueden realizar acabados con textos en relieve sobre fondos de color o sobre materiales transparentes.</p> ",
    "features": [
      "Tinta blanca sobre transparentes",
      "Waterproof",
      "Relieves espectaculares",
      "Colores Vibrantes"
    ],
    "gallery": [
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-adhesivas/relieve-mar.jpg",
        "width": 600,
        "height": 563,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-adhesivas/etiquetas-UVI.jpg",
        "width": 614,
        "height": 621,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-adhesivas/etiquetas-en-relieve-1024x512.jpg",
        "width": 1024,
        "height": 512,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-adhesivas/tinta-blanca-mas-color.jpg",
        "width": 600,
        "height": 555,
        "alt": "etiquetas con tinta blanca"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-adhesivas/tinta-blanca.jpg",
        "width": 700,
        "height": 583,
        "alt": ""
      }
    ],
    "related": [
      "impresion-directa",
      "etiquetas-colgantes-troqueladas",
      "etiquetas-de-ropa",
      "etiquetas-en-bobina"
    ],
    "categories": [
      "etiquetas",
      "impresion-uvi"
    ],
    "calculator": false,
    "tags": []
  },
  {
    "slug": "etiquetas-colgantes-troqueladas",
    "wpId": 799,
    "title": "Etiquetas troqueladas",
    "image": "/sites/etiquetasdecanarias/productos/etiquetas-colgantes-de-joyeria-1.jpg",
    "imageAlt": "etiquetas colgantes de joyería",
    "content": "<p>Las etiquetas colgantes troqueladas están especialmente indicadas para joyerías, aunque también se puede aplicar para personalizar infinidad de productos, prendas de ropa delicadas, cosméticos, frutas y verduras, regalos especiales…</p> <p>¡viste con esta etiqueta de categoría premium tus productos!</p> <p>Disponemos de múltiples acabados: retro, eco, lujo, mate, extrabrillo, laminado, ¡Busca tu estilo!</p> ",
    "features": [],
    "gallery": [
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-colgantes-troqueladas/colgantes-colgantes.jpg",
        "width": 900,
        "height": 796,
        "alt": "etiquetas colgantes troqueladas para joyería"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-colgantes-troqueladas/colgantes-colgantes-yariela.jpg",
        "width": 1000,
        "height": 802,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-colgantes-troqueladas/colgantes-colgantes-conchi.jpg",
        "width": 1000,
        "height": 1020,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-colgantes-troqueladas/colgantes-savasa-906x1024.jpg",
        "width": 906,
        "height": 1024,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-colgantes-troqueladas/savasa-troquel1.jpg",
        "width": 1000,
        "height": 722,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-colgantes-troqueladas/colgantes-joyeria-alcala.jpg",
        "width": 1000,
        "height": 668,
        "alt": ""
      }
    ],
    "related": [
      "impresion-directa",
      "etiquetas-adhesivas",
      "etiquetas-de-ropa",
      "etiquetas-en-bobina"
    ],
    "categories": [
      "etiquetas",
      "etiquetas/etiquetas-colgantes"
    ],
    "calculator": false,
    "tags": []
  },
  {
    "slug": "etiquetas-de-ropa",
    "wpId": 611,
    "title": "Etiquetas de Ropa",
    "image": "/sites/etiquetasdecanarias/productos/etiquetas-para-ropa.jpg",
    "imageAlt": "etiquetas colgantes person",
    "content": "<p>Etiquetas colgantes con troquel circular. Especialmente Indicadas para ropa, aunque son también muy utilizadas para decorar infinidad de productos, aportando un detalle decorativo que ofrece una información extra al cliente final.</p>",
    "features": [],
    "gallery": [
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-de-ropa/etiquetas-para-ropa-2.jpg",
        "width": 1000,
        "height": 666,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-de-ropa/colgantes-mar-939x1024.jpg",
        "width": 939,
        "height": 1024,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-de-ropa/colgantes-magenta.jpg",
        "width": 1000,
        "height": 631,
        "alt": "etiquetas colgantes con textura"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-de-ropa/colgantes-tallitos-1.jpg",
        "width": 1000,
        "height": 993,
        "alt": "etiquetas colgantes"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-de-ropa/savasa-colgantes-897x1024.jpg",
        "width": 897,
        "height": 1024,
        "alt": ""
      }
    ],
    "related": [
      "etiquetas-colgantes-troqueladas"
    ],
    "categories": [
      "etiquetas",
      "etiquetas/etiquetas-colgantes"
    ],
    "calculator": false,
    "tags": []
  },
  {
    "slug": "etiquetas-en-bobina",
    "wpId": 221,
    "title": "Etiquetas en bobinas",
    "image": "/sites/etiquetasdecanarias/productos/etiquetas-en-bobinas.jpg",
    "imageAlt": "etiquetas adhesivas en bobinas",
    "content": "<p>Te ofrecemos las etiquetas adhesivas en bobinas, con el acabado más profesional. Tenemos máquinas modernas que garantizan una calidad de impresión óptima, contamos con sistemas de impresión y troquelado digital que permiten realizar las etiquetas de cualquier medida y forma, sin añadir sobrecostes de troqueles ni grabados, pudiendo así, ofrecer a nuestros clientes tiradas pequeñas a precios muy competitivos.</p> <p>Etiquetas perfectas para alimentación, fruta, cosméticos, joyería, productos químicos, de marcaje general… Siempre personalizadas con su logo y colores corporativos.</p>",
    "features": [
      "Variedad de materiales para ofrecer máximas soluciones.",
      "Tiradas reducidas, a precios competitivos.",
      "Realizamos tus diseños a medida, 100 % personalizable.",
      "Grandes tiradas, con descuentazos.",
      "Etiquetas con la forma y medida que puedas imaginar.",
      "¡50 Años de experiencia nos avalan!",
      "Realizamos tus trabajos en tiempo récord, ¡descúbrelo!",
      "Tratamiento cercano, puedes visitarnos y contarnos tus proyectos."
    ],
    "gallery": [
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/etiquetas-adhesivas-en-bobinas.jpg",
        "width": 1000,
        "height": 841,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/etiquetas-de-papel-finca-el-patio.jpg",
        "width": 1000,
        "height": 796,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/etiquetas-en-envases-1024x717.jpg",
        "width": 1024,
        "height": 717,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/etiquetas-de-aceites-1-1024x889.jpg",
        "width": 1024,
        "height": 889,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/etiquetas-de-precintos-1024x909.jpg",
        "width": 1024,
        "height": 909,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/paniclub.jpg",
        "width": 1022,
        "height": 701,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/oro-joyeria-clasic-1024x908.jpg",
        "width": 1024,
        "height": 908,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/etiquetas-de-joyeria-adhesivas.jpg",
        "width": 500,
        "height": 500,
        "alt": "uetas adhesivas de joyería"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/tuno-963x1024.jpg",
        "width": 963,
        "height": 1024,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/fotos-queseria-1024x916.jpg",
        "width": 1024,
        "height": 916,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/etiquetas-mangos-1024x780.jpg",
        "width": 1024,
        "height": 780,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/etiquetas-el-julan.jpg",
        "width": 1000,
        "height": 670,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/etiquetas-para-aguacates.jpg",
        "width": 1000,
        "height": 697,
        "alt": "etiquetas para aguacates"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/etiquetas-oro-1.jpg",
        "width": 979,
        "height": 954,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/etiquetas-principe-oro-brillo-1024x946.jpg",
        "width": 1024,
        "height": 946,
        "alt": "Etiquetas en bobinas Oro Brillo"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/yayo-1024x655.png",
        "width": 1024,
        "height": 655,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/procalm-1024x624.png",
        "width": 1024,
        "height": 624,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/page6-1024x563.jpg",
        "width": 1024,
        "height": 563,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/etiquetas4-1024x756.jpg",
        "width": 1024,
        "height": 756,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/etiquetas-precintos.jpg",
        "width": 1012,
        "height": 1024,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/etiquetas-en-bobina/etiquetas1-1024x760.jpg",
        "width": 1024,
        "height": 760,
        "alt": "etiquetas adhesivas en bobinas"
      }
    ],
    "related": [
      "impresion-directa",
      "etiquetas-adhesivas",
      "etiquetas-colgantes-troqueladas",
      "etiquetas-de-ropa"
    ],
    "categories": [
      "etiquetas"
    ],
    "calculator": true,
    "tags": [
      "cotizador"
    ]
  },
  {
    "slug": "flyers",
    "wpId": 821,
    "title": "Flyers",
    "image": "/sites/etiquetasdecanarias/productos/articulo-flyer-1.jpg",
    "imageAlt": "flyers personalizados",
    "content": "<p>Realizamos flyers de máxima calidad y los fabricamos en un tiempo express. Disponemos de ofertas para grandes y pequeñas cantidades.</p>",
    "features": [],
    "gallery": [
      {
        "src": "/sites/etiquetasdecanarias/galeria/flyers/ise-1024x761.jpg",
        "width": 1024,
        "height": 761,
        "alt": "flyers"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/flyers/flyes-minelis.jpg",
        "width": 600,
        "height": 583,
        "alt": "flyers personalizados enA6"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/flyers/flyers-farmacia.jpg",
        "width": 900,
        "height": 985,
        "alt": "flyers"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/flyers/flyers-576x1024.jpg",
        "width": 576,
        "height": 1024,
        "alt": ""
      }
    ],
    "related": [
      "calendarios",
      "tarjetas-de-visita"
    ],
    "categories": [
      "imprenta-digital"
    ],
    "calculator": false,
    "tags": []
  },
  {
    "slug": "impresion-directa",
    "wpId": 828,
    "title": "Impresión Directa",
    "image": "/sites/etiquetasdecanarias/productos/uvi-portada-1.jpg",
    "imageAlt": "",
    "content": "<p>Realizamos impresión directa sobre cajas, estuches, envases, papel, madera, cristal… infinidad de superficies, logrando acabados únicos.</p> <p>¡El límite lo pone tu imaginación!</p> ",
    "features": [
      "Acabados en Relieve",
      "Acabados con Barniz Selectivo",
      "Ideal para personalizar pequeñas o medianas cantidades."
    ],
    "gallery": [
      {
        "src": "/sites/etiquetasdecanarias/galeria/impresion-directa/impresion-directa-sobre-cajitas.jpg",
        "width": 650,
        "height": 764,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/impresion-directa/cajita-de-boda.jpg",
        "width": 700,
        "height": 625,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/impresion-directa/impresion-directa-sobre-maquillaje-maquina.jpg",
        "width": 700,
        "height": 836,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/impresion-directa/impresion-directa-sobre-maquillaje.jpg",
        "width": 600,
        "height": 624,
        "alt": ""
      }
    ],
    "related": [
      "etiquetas-adhesivas",
      "etiquetas-colgantes-troqueladas",
      "etiquetas-de-ropa",
      "etiquetas-en-bobina"
    ],
    "categories": [
      "etiquetas",
      "impresion-uvi"
    ],
    "calculator": false,
    "tags": []
  },
  {
    "slug": "pegatinas",
    "wpId": 306,
    "title": "Gran Formato",
    "image": "/sites/etiquetasdecanarias/productos/carteles-4.jpg",
    "imageAlt": "cartel exterior",
    "content": "<h4>Renueva tu imagen</h4> <p>Descubre todas nuestras opciones para renovar tu antiguo rótulo o para crear desde cero la imagen exterior e interior de tu negocio. Confía en nuestra experiencia. Nuestro departamento de diseño esta a tu disposición para asesorarte y ofrecerte siempre la mejor calidad – precio.</p>",
    "features": [
      "Renovamos y reacondicionamos tu cartel antiguo, ¡quedará como nuevo!",
      "Tiempos de producción e instalación Express.",
      "Precios muy especiales para emprendedores."
    ],
    "gallery": [
      {
        "src": "/sites/etiquetasdecanarias/galeria/pegatinas/cartel-circular-1.jpg",
        "width": 1004,
        "height": 935,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/pegatinas/cinecitta.jpg",
        "width": 1000,
        "height": 450,
        "alt": "rotulo cinecittá"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/pegatinas/minelis-logo-1024x809.jpg",
        "width": 1024,
        "height": 809,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/pegatinas/tapeando-e1731197240913.jpg",
        "width": 650,
        "height": 573,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/pegatinas/cartel-ise-santa-cruz-1024x577.jpg",
        "width": 1024,
        "height": 577,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/pegatinas/rotulacion-ise2.jpg",
        "width": 816,
        "height": 714,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/pegatinas/montaje-1024x371.jpg",
        "width": 1024,
        "height": 371,
        "alt": ""
      }
    ],
    "related": [
      "todo-para-el-taxi",
      "vinilos-escaparates",
      "rotulacion-de-vehiculos"
    ],
    "categories": [
      "rotulaciones"
    ],
    "calculator": false,
    "tags": []
  },
  {
    "slug": "rollups-2",
    "wpId": 830,
    "title": "Rollups",
    "image": "/sites/etiquetasdecanarias/productos/imagen-de-producto.jpg",
    "imageAlt": "",
    "content": "<p>Realizamos tus rollup personalizados, rápidos y con la mejor calidad.</p> <p>Creamos tu diseño, para que no pase desapercibido!</p>",
    "features": [],
    "gallery": [
      {
        "src": "/sites/etiquetasdecanarias/galeria/rollups-2/impresion-1.jpg",
        "width": 600,
        "height": 512,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/rollups-2/rollup-tremolo.jpg",
        "width": 700,
        "height": 597,
        "alt": "rollup tremolo"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/rollups-2/rollup-trevejos.jpg",
        "width": 708,
        "height": 604,
        "alt": "rollup trevejos"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/rollups-2/rollup.jpg",
        "width": 600,
        "height": 512,
        "alt": "mieles de abona."
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/rollups-2/rollup-vipfit.jpg",
        "width": 800,
        "height": 726,
        "alt": "rollup Vipfit"
      }
    ],
    "related": [
      "rollups"
    ],
    "categories": [
      "eventos-y-ferias"
    ],
    "calculator": false,
    "tags": []
  },
  {
    "slug": "rollups",
    "wpId": 829,
    "title": "Eventos y Ferias",
    "image": "/sites/etiquetasdecanarias/productos/feria-imagen-1.jpg",
    "imageAlt": "imagen de ferias",
    "content": "<p>Trabajamos para que sus stands sean un éxito, le ofrecemos todos los materiales necesarios con la mejor calidad y tiempos de entrega siempre ajustados.</p>",
    "features": [
      "Rollups",
      "Lona",
      "Manteles",
      "Tarjetas y Flyers",
      "Decoración de mobiliario"
    ],
    "gallery": [
      {
        "src": "/sites/etiquetasdecanarias/galeria/rollups/stand-mieles-de-abona.jpg",
        "width": 1000,
        "height": 651,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/rollups/decoracion-mieles-de-abona.jpg",
        "width": 900,
        "height": 678,
        "alt": "decoración de mostrador"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/rollups/vipfit.jpg",
        "width": 799,
        "height": 669,
        "alt": "feria vipfit"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/rollups/feria-minelis-1.jpg",
        "width": 600,
        "height": 900,
        "alt": "Feria minelis"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/rollups/feria-minelis-2.jpg",
        "width": 600,
        "height": 900,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/rollups/feria-minelis-3.jpg",
        "width": 600,
        "height": 900,
        "alt": ""
      }
    ],
    "related": [
      "rollups-2"
    ],
    "categories": [
      "eventos-y-ferias"
    ],
    "calculator": false,
    "tags": []
  },
  {
    "slug": "rotulacion-de-vehiculos",
    "wpId": 482,
    "title": "Rotulación de vehículos",
    "image": "/sites/etiquetasdecanarias/productos/camion-de-floravalles-principal-2.jpg",
    "imageAlt": "",
    "content": "<h4>Tu imagen sobre ruedas</h4> <p>Rotulación a medida para vehículos de todo tipo, comerciales e industriales. Nos encargamos de la medición, el diseño, la impresión y la instalación. Trabajamos con materiales de calidad que garantizan el mejor acabado y durabilidad.</p>",
    "features": [
      "Vehículos comerciales",
      "Vehículos industriales"
    ],
    "gallery": [
      {
        "src": "/sites/etiquetasdecanarias/galeria/rotulacion-de-vehiculos/camion-de-floravalles.jpg",
        "width": 1000,
        "height": 750,
        "alt": "Camión de Floravalles"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/rotulacion-de-vehiculos/rotulacion-de-Rahn-1016x1024.jpg",
        "width": 1016,
        "height": 1024,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/rotulacion-de-vehiculos/WhatsApp-Image-2024-11-09-at-19.17.45-1024x768.jpeg",
        "width": 1024,
        "height": 768,
        "alt": "Coche de carreras"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/rotulacion-de-vehiculos/taci-1024x976.jpg",
        "width": 1024,
        "height": 976,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/rotulacion-de-vehiculos/camion-de-izana.jpg",
        "width": 939,
        "height": 882,
        "alt": "Camión de Izaña"
      }
    ],
    "related": [
      "todo-para-el-taxi",
      "vinilos-escaparates",
      "pegatinas"
    ],
    "categories": [
      "rotulaciones"
    ],
    "calculator": false,
    "tags": []
  },
  {
    "slug": "serigrafia",
    "wpId": 823,
    "title": "Serigrafía",
    "image": "/sites/etiquetasdecanarias/productos/portada-1.jpg",
    "imageAlt": "",
    "content": "<p>La impresión textil en tinta serigráfica, es ideal para lograr prendas personalizadas a un solo color, con una textura única y máxima durabilidad. Indicado para cantidades medias/altas.</p>",
    "features": [],
    "gallery": [
      {
        "src": "/sites/etiquetasdecanarias/galeria/serigrafia/impresion-de-camisetas.jpg",
        "width": 700,
        "height": 933,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/serigrafia/camisetas-2.jpg",
        "width": 600,
        "height": 628,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/serigrafia/camisetas2.jpg",
        "width": 768,
        "height": 1024,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/serigrafia/camisetas-sertigrafica.jpg",
        "width": 600,
        "height": 620,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/serigrafia/serigrafia-sueter.jpg",
        "width": 600,
        "height": 754,
        "alt": ""
      }
    ],
    "related": [
      "dtf"
    ],
    "categories": [
      "textil"
    ],
    "calculator": false,
    "tags": []
  },
  {
    "slug": "tarjetas-de-visita",
    "wpId": 321,
    "title": "Tarjetas de visita",
    "image": "/sites/etiquetasdecanarias/productos/tarjetas-de-visita-2.jpg",
    "imageAlt": "",
    "content": "<p>Sencillas y eficaces, las Tarjetas de Visita estándar combinan, en 3 formatos diferentes, una gran calidad de impresión con un servicio rápido y competitivo.</p>",
    "features": [
      "Elige entre distintos tamaños",
      "Una o dos caras",
      "Tiradas cortas o largas"
    ],
    "gallery": [
      {
        "src": "/sites/etiquetasdecanarias/galeria/tarjetas-de-visita/fotolaly-1024x760.jpg",
        "width": 1024,
        "height": 760,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/tarjetas-de-visita/tarjetas-2-1024x682.jpg",
        "width": 1024,
        "height": 682,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/tarjetas-de-visita/fotosluna-1024x760.jpg",
        "width": 1024,
        "height": 760,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/tarjetas-de-visita/tarjetas-3-936x1024.jpg",
        "width": 936,
        "height": 1024,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/tarjetas-de-visita/tarjetas-adasat.jpg",
        "width": 750,
        "height": 1000,
        "alt": "tarjetas mieles de abona"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/tarjetas-de-visita/tarjetas-con-textura-1-e1731355105798-1024x659.jpg",
        "width": 1024,
        "height": 659,
        "alt": ""
      }
    ],
    "related": [
      "flyers",
      "calendarios"
    ],
    "categories": [
      "imprenta-digital"
    ],
    "calculator": false,
    "tags": []
  },
  {
    "slug": "todo-para-el-taxi",
    "wpId": 842,
    "title": "Todo para el Taxi",
    "image": "/sites/etiquetasdecanarias/productos/taxi.jpg",
    "imageAlt": "",
    "content": "<p>Disponemos de todos los adhesivos para los taxis de La Laguna, nuestros adhesivos cumplen con la normativa de Ayuntamiento y estamos autorizados a rotular los vehículos nuevos. Los materiales que utilizamos son poliméricos de alta gama, libre de burbujas y con un laminado de máxima protección.</p>  ",
    "features": [],
    "gallery": [
      {
        "src": "/sites/etiquetasdecanarias/galeria/todo-para-el-taxi/taxi-2-768x1024.jpg",
        "width": 768,
        "height": 1024,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/todo-para-el-taxi/braille-1.jpg",
        "width": 826,
        "height": 675,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/todo-para-el-taxi/cabeceros-576x1024.jpg",
        "width": 576,
        "height": 1024,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/todo-para-el-taxi/vehiculo-7-plazas-2-1024x768.jpg",
        "width": 1024,
        "height": 768,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/todo-para-el-taxi/instalacion-1-926x1024.jpg",
        "width": 926,
        "height": 1024,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/todo-para-el-taxi/no-abrir-1-768x1024.jpg",
        "width": 768,
        "height": 1024,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/todo-para-el-taxi/etiquetas-minusvalido-1.jpg",
        "width": 600,
        "height": 540,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/todo-para-el-taxi/banda-rampa-768x1024.jpg",
        "width": 768,
        "height": 1024,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/todo-para-el-taxi/taci-2-1024x976.jpg",
        "width": 1024,
        "height": 976,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/todo-para-el-taxi/no-abrir-2-768x1024.jpg",
        "width": 768,
        "height": 1024,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/todo-para-el-taxi/adhesivos-1024x768.jpg",
        "width": 1024,
        "height": 768,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/todo-para-el-taxi/adhesivos-de-braille.jpg",
        "width": 500,
        "height": 436,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/todo-para-el-taxi/adhesivos-de-no-comer.jpg",
        "width": 470,
        "height": 440,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/todo-para-el-taxi/adhesivos-de-dia-libre-1.jpg",
        "width": 500,
        "height": 436,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/todo-para-el-taxi/adhesivos-de-cinturon-2.jpg",
        "width": 478,
        "height": 347,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/todo-para-el-taxi/adhesivos-de-placa-1.jpg",
        "width": 600,
        "height": 421,
        "alt": ""
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/todo-para-el-taxi/adhesivos-de-camara-2-2.jpg",
        "width": 747,
        "height": 547,
        "alt": ""
      }
    ],
    "related": [
      "vinilos-escaparates",
      "rotulacion-de-vehiculos",
      "pegatinas"
    ],
    "categories": [
      "rotulaciones"
    ],
    "calculator": false,
    "tags": []
  },
  {
    "slug": "vinilos-escaparates",
    "wpId": 751,
    "title": "Vinilos escaparates",
    "image": "/sites/etiquetasdecanarias/productos/vinilos-para-escaparates-1.jpg",
    "imageAlt": "vinilo para escaparates",
    "content": "<p>Vinilos Personalizados a medida para tus escaparates. Trabajamos una amplia gama de materiales y acabados para ajustarnos a todo lo que quieras realizar.</p>",
    "features": [
      "Letras de corte",
      "Vinilo Arenado",
      "Vinilo impreso en gran formato",
      "Diseño a todo color y troquelado",
      "Vinilo opacante",
      "Vinilo con Lámina solar",
      "Vinilo microperforado"
    ],
    "gallery": [
      {
        "src": "/sites/etiquetasdecanarias/galeria/vinilos-escaparates/escaparate-ISE.jpg",
        "width": 599,
        "height": 493,
        "alt": "Vinilo personalizado troquelado"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/vinilos-escaparates/Sin-titulo-576x1024.jpg",
        "width": 576,
        "height": 1024,
        "alt": "carteles para escaparates"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/vinilos-escaparates/vinilo-de-corte-887x1024.jpg",
        "width": 887,
        "height": 1024,
        "alt": "vinilo decorativo"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/vinilos-escaparates/logo-en-arenado-y-vacio.jpg",
        "width": 650,
        "height": 721,
        "alt": "logo en arenado y troquelado en vacío"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/vinilos-escaparates/holistic-microperforado.jpg",
        "width": 700,
        "height": 742,
        "alt": "vinilo microperforado"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/vinilos-escaparates/holistic-cristal-arenado.jpg",
        "width": 600,
        "height": 444,
        "alt": "vinilo arenado"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/vinilos-escaparates/holistic-cristal-arenado-2.jpg",
        "width": 505,
        "height": 365,
        "alt": "vinilos arenados"
      },
      {
        "src": "/sites/etiquetasdecanarias/galeria/vinilos-escaparates/vinilo-arenado-576x1024.jpeg",
        "width": 576,
        "height": 1024,
        "alt": "vinilo arenado"
      }
    ],
    "related": [
      "todo-para-el-taxi",
      "rotulacion-de-vehiculos",
      "pegatinas"
    ],
    "categories": [
      "rotulaciones"
    ],
    "calculator": false,
    "tags": []
  }
];

export const CATEGORIES: CatalogCategory[] = [
  {
    "slug": "etiquetas",
    "title": "Etiquetas",
    "products": [
      "etiquetas-adhesivas",
      "etiquetas-de-ropa",
      "etiquetas-en-bobina",
      "etiquetas-colgantes-troqueladas",
      "impresion-directa"
    ],
    "parent": null
  },
  {
    "slug": "etiquetas/etiquetas-colgantes",
    "title": "Etiquetas Colgantes",
    "products": [
      "etiquetas-de-ropa",
      "etiquetas-colgantes-troqueladas"
    ],
    "parent": "etiquetas"
  },
  {
    "slug": "imprenta-digital",
    "title": "Imprenta Digital",
    "products": [
      "calendarios",
      "flyers",
      "tarjetas-de-visita"
    ],
    "parent": null
  },
  {
    "slug": "textil",
    "title": "Textil",
    "products": [
      "dtf",
      "serigrafia"
    ],
    "parent": null
  },
  {
    "slug": "rotulaciones",
    "title": "Rotulaciones",
    "products": [
      "pegatinas",
      "rotulacion-de-vehiculos",
      "todo-para-el-taxi",
      "vinilos-escaparates"
    ],
    "parent": null
  },
  {
    "slug": "impresion-uvi",
    "title": "Impresión UVI",
    "products": [
      "etiquetas-adhesivas",
      "impresion-directa"
    ],
    "parent": null
  },
  {
    "slug": "eventos-y-ferias",
    "title": "Eventos y Ferias",
    "products": [
      "rollups",
      "rollups-2"
    ],
    "parent": null
  }
];

/** Products per page on /tienda/ (WooCommerce setting on the source). */
export const SHOP_PAGE_SIZE = 12;

export const PRODUCT_BY_SLUG = new Map(PRODUCTS.map((p) => [p.slug, p]));
export const CATEGORY_BY_SLUG = new Map(CATEGORIES.map((c) => [c.slug, c]));

export { categoryHref, productHref } from "./paths";

/** Products sorted by title (the WooCommerce shop default on the source). */
export function productsByTitle(list: CatalogProduct[] = PRODUCTS) {
  return [...list].sort((a, b) => a.title.localeCompare(b.title, "es"));
}
