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
    slug: 'spot-publicitario',
    title: 'Spot Publicitario',
    description: 'TV / Redes',
    thumbnail: PUBLIC_THUMB,
    categories: ['audiovisual'],
    images: [PUBLIC_THUMB, PUBLIC_THUMB, PUBLIC_THUMB],
    client: 'Cliente Demo',
    partner: 'Partner Demo',
    website: 'https://example.com',
    content: 'Descripción extensa del proyecto Spot Publicitario. Objetivos, enfoque creativo y resultados.'
  },
  {
    id: 2,
    slug: 'reel-corporativo',
    title: 'Reel Corporativo',
    description: 'Presentación',
    thumbnail: PUBLIC_THUMB,
    categories: ['audiovisual','branding'],
    images: [PUBLIC_THUMB, PUBLIC_THUMB],
    client: 'Empresa XYZ',
    partner: 'Equipo Interno',
    website: 'https://example.com',
    content: 'Historia y narrativa del reel corporativo.'
  }
  // TODO: añadir el resto
];

export function findWorkBySlug(slug: string) {
  return WORKS.find(w => w.slug === slug);
}
