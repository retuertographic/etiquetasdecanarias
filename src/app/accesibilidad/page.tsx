import type { Metadata } from "next";
import { Fragment } from "react";
import { Section } from "@/components/sites/etiquetasdecanarias/ui";

export const metadata: Metadata = { title: "Accesibilidad" };

/** Accessibility statement, copied paragraph by paragraph from the live page. */
const PARAGRAPHS: string[][] = [
  [
    "ACCESIBILIDAD",
    "Ana Rodriguez López se ha comprometido a hacer accesible su sitio web de conformidad con el Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público."
  ],
  [
    "La presente declaración de accesibilidad se aplica al sitio web https://etiquetasdecanarias.es/"
  ],
  [
    "SITUACIÓN DE CUMPLIMIENTO",
    "Este sitio web es parcialmente conforme con el RD 1112/2018 debido a las excepciones y a la falta de conformidad de los aspectos que se indican a continuación."
  ],
  [
    "CONTENIDO NO ACCESIBLE",
    "El contenido que se recoge a continuación no es accesible por lo siguiente:"
  ],
  [
    "Falta de conformidad con el RD 1112/2018",
    "Podría existir información, estructura o relaciones que no pudieran determinarse mediante programación o que no estuvieran disponibles en el texto (Requisito número 9.1.3.1 de UNE-EN 301549:2022)"
  ],
  [
    "Podrían existir textos que no cumplan los mínimos exigidos de contraste 4.5:1, con respecto a los colores adyacentes del fondo de la sección de la web. (Requisito número 9.1.4.11 de UNE-EN 301549:2022)"
  ],
  [
    "Podrían existir enlaces cuya finalidad no pueda determinarse a partir del texto del enlace únicamente o a partir del texto del enlace junto con su contexto de enlace determinado mediante programación (Requisito número 9.2.4.4 de UNE-EN 301549:2022)"
  ],
  [
    "Podrían existir nombres, roles, estados, propiedades y valores que no pueden determinarse mediante programación (Requisito número 9.4.1.2 de UNE-EN 301549:2022)"
  ],
  [
    "Carga desproporcionada",
    "No aplica."
  ],
  [
    "El contenido no entra dentro del ámbito de la legislación aplicable",
    "Podrían existir archivos ofimáticos en PDF u otros formatos publicados antes del 20 de septiembre de 2018 que no cumplan en su totalidad todos los requisitos de accesibilidad. Aunque se ha procurado que la mayoría de ellos sí lo cumplan."
  ],
  [
    "PREPARACIÓN DE LA PRESENTE DECLARACIÓN DE ACCESIBILIDAD",
    "La presente declaración fue preparada el 12/13/2024."
  ],
  [
    "El método empleado para preparar la declaración ha sido una autoevaluación llevada a cabo por la propia entidad."
  ],
  [
    "Última revisión de la declaración: 12/13/2024."
  ],
  [
    "OBSERVACIONES Y DATOS DE CONTACTO",
    "Puede realizar comunicaciones sobre requisitos de accesibilidad (artículo 10.2.a del RD 1112/2018) a través de la siguiente dirección de correo electrónico: info@canariaslineagrafica.es"
  ],
  [
    "Por ejemplo:",
    " Informar sobre cualquier posible incumplimiento por parte de este sitio web.",
    " Transmitir otras dificultades de acceso al contenido.",
    " Formular cualquier otra consulta o sugerencia de mejora relativa a la accesibilidad del sitio web."
  ],
  [
    "También puede presentar:",
    " Queja relativa al cumplimiento de los requisitos del RD 1112/2018",
    " Solicitud de Información accesible relativa a:",
    "o Contenidos que están excluidos del ámbito de aplicación del RD 1112/2018 según lo establecido por el artículo 3, apartado 4.",
    "o Contenidos que están exentos del cumplimiento de los requisitos de accesibilidad por imponer una carga desproporcionada."
  ],
  [
    "En la Solicitud de información accesible, se debe concretar, con toda claridad, los hechos, razones y petición que permitan constatar que se trata de una solicitud razonable y legítima."
  ],
  [
    "Las quejas y reclamaciones sobre información accesible se realizarán a través de la siguiente dirección de correo electrónico: info@canariaslineagrafica.es"
  ],
  [
    "CONTENIDO OPCIONAL",
    "Este sitio web se ha diseñado adaptándose a los estándares y normativas vigentes en relación a la accesibilidad, cumpliendo con los puntos de verificación de prioridad 2 (AA) definidos en la especificación de Pautas de Accesibilidad al Contenido en la Web (WCAG 2.1)"
  ],
  [
    "Está diseñado para su visualización responsiva, de modo que pueda visualizarse correctamente en dispositivos como tabletas electrónicas y dispositivos móviles."
  ],
  [
    "Asimismo, está diseñado para poder cambiar el tamaño del texto mediante los menús definidos para ello según el navegador utilizado."
  ],
  [
    "También puede realizarse mediante los siguientes atajos de teclado, presionando ambas teclas al mismo tiempo:",
    " Ctrl + : aumentarlo.",
    " Ctrl – : disminuirlo.",
    " Ctrl 0 : restaurar tamaño original."
  ],
  [
    "Del mismo modo, si un usuario no dispone de ratón podrá moverse por los distintoselementos de la página que visita a través del teclado, mediante la tecla de tabulación."
  ]
];

export default function Page() {
  return (
    <Section>
      {PARAGRAPHS.map((lines, i) => (
        <p key={i} className="mb-6">
          {lines.map((line, j) => (
            <Fragment key={j}>
              {j > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </p>
      ))}
    </Section>
  );
}
