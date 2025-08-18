import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from './data';

export default function ServicesSection() {
  return (
    <section id="servicios" className="w-full bg-white text-black py-20 md:py-28">
      <div className="w-full px-6 md:px-12">
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
      </div>
    </section>
  );
}
