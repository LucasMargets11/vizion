export type Service = {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export const services: Service[] = [
  { id: 1, title: 'Producción', description: 'Planeación y rodaje de alto impacto.' },
  { id: 2, title: 'Postproducción', description: 'Edición, color y sonido que cuentan.' },
  { id: 3, title: 'Branding audiovisual', description: 'Identidad visual y motion.' },
  { id: 4, title: 'Spots', description: 'Spots publicitarios memorables.' },
  { id: 5, title: 'Contenido / Reels', description: 'Piezas ágiles para redes.' },
  { id: 6, title: 'Streaming', description: 'Eventos en vivo profesionales.' }
];
