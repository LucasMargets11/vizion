import React, { useRef } from 'react';
import { useInView, useReducedMotion, motion } from 'framer-motion';

export default function StripeCTA() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { amount: 0.3, once: true });
  const reduce = useReducedMotion();

  return (
    <section ref={ref} id="cta" className="relative w-full bg-white text-black py-16 md:py-24 overflow-hidden">
      {/* Curved Stripe (SVG wave) */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-18 md:h-28 origin-left will-change-transform ${
          reduce ? 'scale-x-100' : inView ? 'scale-x-100 transition-transform duration-700 ease-out' : 'scale-x-0'
        }`}
        aria-hidden="true"
      >
        <svg
          className="w-[120%] h-full translate-x-[-10%]"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          role="presentation"
        >
          {reduce ? (
            <path
              d="M0 55 C 140 5, 360 105, 500 55 S 860 5, 1000 55 L1000 100 L0 100 Z"
              className="fill-brand-blue/90"
            />
          ) : (
            <motion.path
              className="fill-brand-blue/90"
              initial={{ d: 'M0 55 C 140 5, 360 105, 500 55 S 860 5, 1000 55 L1000 100 L0 100 Z' }}
              animate={{
                d: [
                  'M0 55 C 140 5, 360 105, 500 55 S 860 5, 1000 55 L1000 100 L0 100 Z',
                  'M0 50 C 140 15, 360 90, 500 50 S 860 15, 1000 50 L1000 100 L0 100 Z',
                  'M0 60 C 140 10, 360 95, 500 60 S 860 10, 1000 60 L1000 100 L0 100 Z',
                  'M0 55 C 140 5, 360 105, 500 55 S 860 5, 1000 55 L1000 100 L0 100 Z'
                ]
              }}
              transition={{ duration: 14, ease: 'easeInOut', repeat: Infinity }}
            />
          )}
        </svg>
      </div>
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-none px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          ¿Listos para iluminar su próxima historia?
        </h2>
        <p className="mt-3 text-base md:text-lg text-black/70">Conversemos sobre su proyecto.</p>
        <a
          href="#contacto"
          className="mt-6 inline-flex items-center justify-center px-6 py-3 font-semibold rounded-md bg-black text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
        >
          Hablemos
        </a>
      </div>
    </section>
  );
}
