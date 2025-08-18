import { motion } from 'framer-motion';
import React from 'react';
import { Button } from '@/components/ui/Button';
import { routes } from '@/app/routes';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center" id="top">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={"/src/assets/video/hero.mp4"}
        autoPlay
        muted
        loop
        playsInline
        aria-label="Video de fondo"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-base-900/90" />
      <div className="relative z-10 container text-center space-y-6">
        <motion.h1
          className="font-outfit text-5xl sm:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bienvenidos al universo <span className="text-brand">Lumiax</span>
        </motion.h1>
        <motion.p
          className="mx-auto max-w-2xl text-lg text-slate-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          Agencia audiovisual obsesionada con las buenas historias.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <a href={routes.contacto}>
            <Button variant="primary">Contáctennos</Button>
          </a>
          <a href={routes.trabajos}>
            <Button variant="secondary">Ver reel</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
