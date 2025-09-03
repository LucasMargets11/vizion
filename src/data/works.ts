export interface WorkItem {
  id: number;
  slug: string; // para la URL
  title: string;
  description?: string;
  thumbnail: string;
  categories: string[];
  images: string[]; // galería para el portfolio
  client?: string;
  partner?: string;
  website?: string;
  content?: string; // cuerpo largo en markdown simple o texto
}

const PUBLIC_THUMB = '/frente.jpg';

export const WORKS: WorkItem[] = [
  {
    id: 1,
    slug: 'servicio-tecnico-ehlers',
    title: 'Servicio Técnico Ehlers – Landing SEO',
    description: 'SEO Local / Landing / Conversiones',
    thumbnail: PUBLIC_THUMB,
    categories: ['web', 'seo'],
    images: [PUBLIC_THUMB, PUBLIC_THUMB, PUBLIC_THUMB],
    client: 'Portones Automáticos Ehlers',
    partner: 'Equipo interno',
    website: 'https://www.servisportonesehlers.com/',
    content: `El desafío: La empresa ya tenía sitio institucional, pero no capturaba búsquedas específicas como “servicio técnico portones Ehlers”.

  Qué hicimos: Creamos una landing dedicada al servicio técnico, basada en research de keywords y arquitectura semántica (títulos, meta tags, schema), contenido orientado a intención y CTAs visibles. Mejoramos Core Web Vitals, configuramos tracking (eventos de clic y formularios) y reforzamos SEO local (NAP consistente, datos estructurados).

  Resultado: Mayor visibilidad para la consulta correcta y un flujo más claro de contacto por WhatsApp y teléfono.`
  },

  {
    id: 2,
    slug: 'grupo-bairen-web',
    title: 'Grupo Bairen – Web Inmobiliaria & Catálogo',
    description: 'Sitio Web / Catálogo / SEO Local',
    thumbnail: PUBLIC_THUMB,
    categories: ['web', 'seo', 'ux'],
    images: [PUBLIC_THUMB, PUBLIC_THUMB, PUBLIC_THUMB],
    client: 'Grupo Bairen',
    partner: 'Equipo interno',
    website: 'https://grupobairen.com',
    content: `El desafío: Tenían presencia online, pero necesitaban un sitio que posicionara mejor sus propiedades y capturara búsquedas locales con intención de alquiler/estadia.

Qué hicimos: Diseñamos y desarrollamos una web 100% responsive con catálogo de propiedades, filtros avanzados (ubicación, precio, tipo, habitaciones), fichas con galería y mapa, calendario de disponibilidad y CTAs claros (WhatsApp, formulario). Optimizamos SEO on-page/local (títulos, metas, estructura H1–H3, schema para listings), mejoramos Core Web Vitals y configuramos tracking en GA4 (clics, envíos, llamadas). Dejamos base para reservas y pagos (MercadoPago) e integración con back-end/API.

Resultado: Mayor visibilidad en búsquedas de la zona y un flujo más directo para consultas y reservas, con una experiencia más rápida y ordenada.`
  },
  {
    id: 3,
    slug: 'servicio-tecnico-ehlers',
    title: 'Servicio Técnico Ehlers – Landing SEO',
    description: 'SEO Local / Landing / Conversiones',
    thumbnail: PUBLIC_THUMB,
    categories: ['web', 'seo'],
    images: [PUBLIC_THUMB, PUBLIC_THUMB, PUBLIC_THUMB],
    client: 'Portones Automáticos Ehlers',
    partner: 'Equipo interno',
    website: 'https://www.servisportonesehlers.com/',
    content: `El desafío: La empresa ya tenía sitio institucional, pero no capturaba búsquedas específicas como “servicio técnico portones Ehlers”.

  Qué hicimos: Creamos una landing dedicada al servicio técnico, basada en research de keywords y arquitectura semántica (títulos, meta tags, schema), contenido orientado a intención y CTAs visibles. Mejoramos Core Web Vitals, configuramos tracking (eventos de clic y formularios) y reforzamos SEO local (NAP consistente, datos estructurados).

  Resultado: Mayor visibilidad para la consulta correcta y un flujo más claro de contacto por WhatsApp y teléfono.`
  },
  {
    id: 4,
    slug: 'servicio-tecnico-ehlers',
    title: 'Servicio Técnico Ehlers – Landing SEO',
    description: 'SEO Local / Landing / Conversiones',
    thumbnail: PUBLIC_THUMB,
    categories: ['web', 'seo'],
    images: [PUBLIC_THUMB, PUBLIC_THUMB, PUBLIC_THUMB],
    client: 'Portones Automáticos Ehlers',
    partner: 'Equipo interno',
    website: 'https://www.servisportonesehlers.com/',
    content: `El desafío: La empresa ya tenía sitio institucional, pero no capturaba búsquedas específicas como “servicio técnico portones Ehlers”.

  Qué hicimos: Creamos una landing dedicada al servicio técnico, basada en research de keywords y arquitectura semántica (títulos, meta tags, schema), contenido orientado a intención y CTAs visibles. Mejoramos Core Web Vitals, configuramos tracking (eventos de clic y formularios) y reforzamos SEO local (NAP consistente, datos estructurados).

  Resultado: Mayor visibilidad para la consulta correcta y un flujo más claro de contacto por WhatsApp y teléfono.`
  }

  // TODO: añadir el resto
];

export function findWorkBySlug(slug: string) {
  return WORKS.find((w) => w.slug === slug);
}
