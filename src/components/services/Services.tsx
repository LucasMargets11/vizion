import React, { useRef } from 'react';
import ServiceCard from './ServiceCard';
import { services } from './data';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 5%'] });
  const opacity = useTransform(scrollYProgress, [0, 0.14, 0.58, 0.75, 1], [0, 1, 1, 0.45, 0]);
  const y = useTransform(scrollYProgress, [0, 0.14, 0.58, 0.75, 1], [110, 0, 0, -50, -90]);
  const scale = useTransform(scrollYProgress, [0, 0.14, 0.58, 0.75, 1], [0.9, 1.06, 1.06, 1.0, 0.94]);
  const rotate = useTransform(scrollYProgress, [0, 0.14, 0.58, 0.75, 1], [5, 0, 0, -1.5, -4]);

  return (
    <section id="servicios" className="w-full bg-white text-black py-20 md:py-28 overflow-hidden">
  <motion.div ref={ref} style={{ opacity, y, scale, rotate }} className="w-full px-6 md:px-12 will-change-transform">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Servicios</h2>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12 md:gap-y-20">
          {services.map(s => (
            <ServiceCard
              key={s.id}
              title={s.title}
              description={s.description}
              icon={undefined}
              variant="light"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
