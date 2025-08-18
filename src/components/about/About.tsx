import React from 'react';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';

export const About: React.FC = () => (
  <Section id="equipo" variant="light" className="px-0">
    <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 items-center">
      {/* Columna izquierda: texto */}
      <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-4">
        <Heading level={2} className="text-5xl md:text-7xl font-extrabold tracking-tight w-full">Quiénes somos</Heading>
        <p className="mt-6 text-lg leading-relaxed text-black/80 max-w-none">
          Somos un equipo multidisciplinario obsesionado con narrativas que conectan. Creemos en la potencia de la estética al servicio de la historia.
        </p>
      </div>
      {/* Columna derecha: imagen PNG sin fondo */}
      <div className="flex justify-center items-center px-6 md:px-12 lg:px-20 py-4">
        <img
          src="/pngwho.png"
          alt="Personaje creativo excéntrico representando al equipo"
          className="mx-auto h-auto w-full max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-lg"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </Section>
);
