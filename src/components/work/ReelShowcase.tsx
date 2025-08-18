import React, { useRef, useState, useMemo } from 'react';
import { motion, useInView, useReducedMotion, AnimatePresence } from 'framer-motion';
import { usePreloadImages } from './usePreloadImages';
import ReelCard from './ReelCard';
import ReelFilter, { FilterDef } from './ReelFilter';

export type Work = { id: number; title: string; description?: string; thumbnail: string; categories: string[] };

// Usamos imágenes de ejemplo existentes (thumb1-3) ciclando mientras se agregan assets reales
const PUBLIC_THUMB = '/frente.jpg'; // imagen en carpeta public
const works: Work[] = [
  { id: 1, title: 'Spot Publicitario', description: 'TV / Redes', thumbnail: PUBLIC_THUMB, categories: ['audiovisual'] },
  { id: 2, title: 'Reel Corporativo', description: 'Presentación', thumbnail: PUBLIC_THUMB, categories: ['audiovisual','branding'] },
  { id: 3, title: 'Evento Streaming', description: 'En vivo', thumbnail: PUBLIC_THUMB, categories: ['audiovisual'] },
  { id: 4, title: 'Brand Story', description: 'Narrativa', thumbnail: PUBLIC_THUMB, categories: ['branding','audiovisual'] },
  { id: 5, title: 'Testimonial Cliente', description: 'Historias reales', thumbnail: PUBLIC_THUMB, categories: ['audiovisual'] },
  { id: 6, title: 'Identidad Motion', description: 'Sistema gráfico', thumbnail: PUBLIC_THUMB, categories: ['branding'] },
  { id: 7, title: 'Lanzamiento Producto', description: 'Impacto', thumbnail: PUBLIC_THUMB, categories: ['audiovisual'] },
  { id: 8, title: 'Documental Corto', description: 'Historia', thumbnail: PUBLIC_THUMB, categories: ['audiovisual'] },
  { id: 9, title: 'Anuncio Social Ads', description: 'Performance', thumbnail: PUBLIC_THUMB, categories: ['audiovisual','branding'] }
];

export const FILTERS: FilterDef[] = [
  { key: 'all', label: 'TODO' },
  { key: 'audiovisual', label: 'AUDIOVISUAL' },
  { key: 'branding', label: 'BRANDING' }
];

const ReelShowcase: React.FC = () => {
  const [filterKey, setFilterKey] = useState<string>('all');
  const urls = useMemo(() => works.map(w => w.thumbnail), []);
  const { ready } = usePreloadImages(urls);
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { amount: 0.25, once: true });

  const container = {
    hidden: { opacity: 1 },
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } }
  };
  const item = prefersReduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.15 } } }
    : { hidden: { opacity: 0, y: 12, scale: 0.985 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } } };

  const filtered = filterKey === 'all' ? works : works.filter(w => w.categories.includes(filterKey));
  const showState = ready && inView ? 'visible' : 'hidden';

  return (
    <section id="trabajos" className="w-full bg-white text-black py-16 md:py-24">
      <div className="w-full text-center px-6 md:px-12 lg:px-20">
        <h2 className="mx-auto max-w-none text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
          Somos una agencia enfocada en la producción de contenido.
        </h2>
      </div>
      <div className="mt-10 md:mt-12 flex justify-center">
        <ReelFilter value={filterKey} onChange={setFilterKey} filters={FILTERS} />
      </div>
      <motion.div
        ref={ref as any}
        variants={container}
        initial="hidden"
        animate={showState}
        className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-0"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map(w => (
            <ReelCard
              key={w.id + filterKey}
              title={w.title}
              description={w.description}
              thumbnail={w.thumbnail}
              variants={item}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ReelShowcase;
