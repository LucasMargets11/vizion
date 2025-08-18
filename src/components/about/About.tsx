import React, { useRef } from 'react';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { motion, useScroll, useTransform } from 'framer-motion';

export const About: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  // Ajustamos offsets para tener en cuenta header fijo (~72px) y adelantar el fade-out
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 5%'] });

  // Más puntos intermedios: entra rápido, mantiene, y empieza a desvanecerse antes de tocar el header
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.6, 0.8, 1], [0, 1, 1, 0.5, 0]);
  const y = useTransform(scrollYProgress, [0, 0.15, 0.6, 0.8, 1], [90, 0, 0, -40, -70]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.6, 0.8, 1], [0.92, 1.05, 1.05, 1.01, 0.95]);
  const rotate = useTransform(scrollYProgress, [0, 0.15, 0.6, 0.8, 1], [4, 0, 0, -1, -3]);

  return (
    <Section id="equipo" variant="light" className="px-0" animateOnView={false}>
  <motion.div ref={ref} style={{ opacity, y, scale, rotate }} className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 items-center will-change-transform">
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-4">
          <Heading level={2} className="text-5xl md:text-7xl font-extrabold tracking-tight w-full">Quiénes somos</Heading>
          <p className="mt-6 text-lg leading-relaxed text-black/80 max-w-none">
            Somos un equipo multidisciplinario obsesionado con narrativas que conectan. Creemos en la potencia de la estética al servicio de la historia.
          </p>
        </div>
        <div className="flex justify-center items-center px-6 md:px-12 lg:px-20 py-4">
          <img
            src="/pngwho.png"
            alt="Personaje creativo excéntrico representando al equipo"
            className="mx-auto h-auto w-full max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
      </motion.div>
    </Section>
  );
};
