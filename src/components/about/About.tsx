import React from 'react';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';

export const About: React.FC = () => (
  <Section id="equipo">
    <div className="grid gap-10 md:grid-cols-2 items-center">
      <div className="space-y-6">
        <Heading level={2}>Quiénes somos</Heading>
        <p className="text-slate-300 leading-relaxed">
          Somos un equipo multidisciplinario obsesionado con narrativas que conectan. Creemos en la
          potencia de la estética al servicio de la historia.
        </p>
      </div>
      <div className="h-72 rounded-lg overflow-hidden bg-white/5 flex items-center justify-center text-slate-400">
        Foto / Frame de rodaje
      </div>
    </div>
  </Section>
);
