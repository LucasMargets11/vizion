import React from 'react';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';

interface Service { title: string; desc: string; icon: string }
const services: Service[] = [
  { title: 'Producción', desc: 'Planeación y rodaje de alto impacto.', icon: '🎬' },
  { title: 'Postproducción', desc: 'Edición, color y sonido que cuentan.', icon: '🎛️' },
  { title: 'Branding audiovisual', desc: 'Identidad visual y motion.', icon: '✨' },
  { title: 'Spots', desc: 'Spots publicitarios memorables.', icon: '📺' },
  { title: 'Contenido / Reels', desc: 'Piezas ágiles para redes.', icon: '📱' },
  { title: 'Streaming', desc: 'Eventos en vivo profesionales.', icon: '📡' }
];

export const Services: React.FC = () => (
  <Section id="servicios" variant="light" className="px-0">
    <div className="w-full px-6 md:px-12 lg:px-20 space-y-12">
      <Heading level={2} className="text-5xl md:text-7xl font-extrabold tracking-tight w-full">Servicios</Heading>
      <ul className="grid gap-px bg-black sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <li key={s.title} className="group relative bg-white text-black p-8 flex flex-col justify-start hover:bg-black hover:text-white transition-colors overflow-hidden">
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-mint opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-3xl mb-6" aria-hidden>{s.icon}</div>
            <h3 className="font-semibold text-xl mb-3 font-outfit tracking-tight">
              <span className="bg-gradient-to-r from-brand-blue to-brand-mint bg-clip-text text-transparent group-hover:from-brand-blue/90 group-hover:to-brand-mint/90 transition-colors">
                {s.title}
              </span>
            </h3>
            <p className="text-sm leading-relaxed text-black/70 group-hover:text-white/70">{s.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);
