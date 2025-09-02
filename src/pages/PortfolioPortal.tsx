import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Navbar } from '@/components/nav/Navbar';
import GradientHero from '@/components/hero/GradientHero';
import { useHeaderOffset } from '@/hooks/useHeaderOffset';
import { WORKS } from '@/data/works';
import ReelCard from '@/components/work/ReelCard';
import ReelFilter, { FilterDef } from '@/components/work/ReelFilter';
import { Footer } from '@/components/footer/Footer';
import { Link } from 'react-router-dom';

const FILTERS: FilterDef[] = [
  { key: 'all', label: 'TODO' },
  { key: 'audiovisual', label: 'AUDIOVISUAL' },
  { key: 'branding', label: 'BRANDING' }
];

const PortfolioPortal: React.FC = () => {
  const headerOffset = useHeaderOffset();
  const [filter, setFilter] = useState('all');
  const prefersReduced = useReducedMotion();

  const filtered = useMemo(() => {
    if (filter === 'all') return WORKS;
    return WORKS.filter(w => w.categories.includes(filter));
  }, [filter]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      <GradientHero
        title="Nuestros trabajos"
        subtitle="Selección de proyectos y piezas audiovisuales."
        breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Trabajos' }]}
        align="center"
        offsetTop={headerOffset}
      />
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 xl:px-20 py-12 md:py-20">
          <div className="flex justify-center mb-10">
            <ReelFilter value={filter} onChange={setFilter} filters={FILTERS} />
          </div>
          <motion.div
            variants={{ hidden: { opacity: 1 }, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {filtered.map(w => (
                <Link key={w.id + filter} to={`/trabajos/${w.slug}`} className="block">
                  <ReelCard
                    title={w.title}
                    description={w.description}
                    thumbnail={w.thumbnail}
                    variants={prefersReduced
                      ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.15 } } }
                      : { hidden: { opacity: 0, y: 12, scale: 0.985 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } } }}
                  />
                </Link>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPortal;
