import { motion } from 'framer-motion';
import React from 'react';
import { Button } from '@/components/ui/Button';
import { routes } from '@/app/routes';

export const Hero: React.FC = () => {
  return (
  <section className="relative h-screen min-h-[600px] flex items-center justify-center w-full bg-black text-white overflow-hidden" id="top">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={"/src/assets/video/hero.mp4"}
        autoPlay
        muted
        loop
        playsInline
        aria-label="Video de fondo"
      />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
  <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 text-center space-y-6">
        <motion.h1
      className="font-outfit text-5xl md:text-7xl font-extrabold tracking-tight w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Bienvenidos al universo <span className="text-gradient-brand">Vizion</span>
        </motion.h1>
        <motion.p
          className="mx-auto text-lg max-w-3xl text-white/70"
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
            <Button variant="brandGradient">Contáctennos</Button>
          </a>
          <a href={routes.trabajos}>
            <Button variant="brandOutline">Ver reel</Button>
          </a>
        </motion.div>
      </div>
    {/* Flecha anclada al fondo absoluto del hero */}
    <div className="absolute left-0 right-0 bottom-6 md:bottom-8 flex justify-center pointer-events-none select-none">
      <a
        href={routes.equipo}
        className="pointer-events-auto inline-flex flex-col items-center text-white/70 hover:text-white focus-ring group"
        aria-label="Ir a Quiénes somos"
      >
        <svg
          className="w-8 h-8 animate-bounce transition-colors"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0-6-6m6 6 6-6" />
        </svg>
      </a>
    </div>
    </section>
  );
};
