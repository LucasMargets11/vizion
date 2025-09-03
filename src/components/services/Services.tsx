import React from 'react';
// import ServiceCard from './ServiceCard'; // temporalmente no se usa

// Data temporal omitida mientras se re-diseña el layout con fondo
// const services = [...];

export default function ServicesSection() {

  // posClass ya no se usa mientras no hay cards

  return (
    <section id="servicios" className="relative w-full bg-white text-black py-20 md:py-28 overflow-hidden">
      {/* Imagen decorativa derecha */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/fondoservices.png"
          alt=""
          className="hidden md:block absolute inset-0 h-full w-full max-w-none object-cover object-center pointer-events-none"
          loading="lazy"
          decoding="async"
          style={{ transform: 'translateZ(0)' }}
        />
      </div>

  <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 min-h-[520px] md:min-h-[600px] flex flex-col justify-start">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight max-w-xl">
          Nuestros Servicios
        </h2>
        {/* Placeholder de donde irán las cards nuevamente */}
  <div className="mt-16 h-40 flex items-center text-sm uppercase tracking-wider text-black/30">
          (Próximamente: grid de servicios aquí)
        </div>
      </div>
    </section>
  );
}
