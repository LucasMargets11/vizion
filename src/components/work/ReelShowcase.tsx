import React from 'react';
import ReelShowcaseItem from './ReelShowcaseItem';

// Data placeholder; sustituir thumbnails por rutas reales.
const works = [
  { id: 1, title: 'Spot Publicitario', description: 'Campaña TV / Digital', thumbnail: '/frente.jpg' },
  { id: 2, title: 'Reel Corporativo', description: 'Identidad de marca', thumbnail: '/frente.jpg' },
  { id: 3, title: 'Evento Streaming', description: 'Cobertura Live', thumbnail: '/frente.jpg' },
  { id: 4, title: 'Brand Story', description: 'Narrativa emocional', thumbnail: '/frente.jpg' },
  { id: 5, title: 'Testimonial', description: 'Voces reales', thumbnail: '/frente.jpg' },
  { id: 6, title: 'Behind The Scenes', description: 'Proceso creativo', thumbnail: '/frente.jpg' }
];

const ReelShowcase: React.FC = () => (
  <section id="trabajos" className="w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
      {works.map((w) => (
        <ReelShowcaseItem
          key={w.id}
          title={w.title}
          description={w.description}
          thumbnail={w.thumbnail}
          aspect="video"
        />
      ))}
    </div>
  </section>
);

export default ReelShowcase;
