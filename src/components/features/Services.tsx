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
  <Section id="servicios">
    <div className="space-y-12">
      <Heading level={2}>Servicios</Heading>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <li key={s.title} className="group rounded-xl p-6 bg-white/5 border border-white/5 hover:bg-white/10 transition relative overflow-hidden">
            <div className="text-3xl mb-4" aria-hidden>{s.icon}</div>
            <h3 className="font-semibold text-lg mb-2 font-outfit">{s.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">{s.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  </Section>
);
