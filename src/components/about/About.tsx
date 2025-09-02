import React, { useRef } from 'react';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const About: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  // Offset más amplio para una entrada más gradual y salida suave
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 90%', 'end 10%'] });

  // Curvas ~30% más rápidas en total respecto original (otro 20% vs la versión previa): estabiliza muy pronto y mantiene
  //           progreso ->   0      0.13    0.22    0.62   1
  const rawOpacity = useTransform(scrollYProgress, [0,    0.13,  0.22,  0.62,  1], [0, 1, 1, 1, 0]);
  const rawY       = useTransform(scrollYProgress, [0,    0.13,  0.22,  0.62,  1], [52, 0, 0, 0, -34]);
  const rawScale   = useTransform(scrollYProgress, [0,    0.13,  0.22,  0.62,  1], [0.975, 1, 1, 1, 0.988]);
  const rawRotate  = useTransform(scrollYProgress, [0,    0.13,  0.22,  0.62,  1], [0.9, 0, 0, 0, -0.6]);

  // Springs para suavizar micro saltos al hacer scroll desigual
  const springCfg = { stiffness: 230, damping: 30, mass: 0.6 };
  const opacity = useSpring(rawOpacity, springCfg);
  const y = useSpring(rawY, springCfg);
  const scale = useSpring(rawScale, springCfg);
  const rotate = useSpring(rawRotate, springCfg);

  return (
    <Section id="equipo" variant="light" className="px-0" animateOnView={false}>
  <motion.div ref={ref} style={{ opacity, y, scale, rotate }} className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 items-center will-change-transform transition-transform">
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-4">
          <div className="max-w-xl">
          <Heading  
            className="text-lg md:text-xl lg:text-2xl uppercase tracking-[0.25em] font-semibold text-emerald-600 mb-4"
          >
            Equipo multidisciplinario
          </Heading>
            <span className="mt-5 mb-8 block h-px w-28 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 rounded-full" />
            <div className="space-y-8 text-black/75 text-lg md:text-xl leading-relaxed font-light">
              <p className="[text-wrap:balance]">En <span className="font-semibold text-black">Vizion</span> combinamos <span className="font-medium text-black">audiovisual</span> y <span className="font-medium text-black">software</span> para resolver comunicación y operación. Nos obsesiona el detalle visual y la performance técnica.</p>
              <ul className="space-y-5">
                <li className="flex gap-4 items-start">
                  <span aria-hidden className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/40 text-emerald-600">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="leading-relaxed"><span className="font-semibold text-black">Audiovisual</span>: reels, spots, videos corporativos, fotografía, color grading y motion.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <span aria-hidden className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/40 text-emerald-600">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="leading-relaxed"><span className="font-semibold text-black">Software</span>: sitios web y landings modernas, sistemas a medida y paneles de gestión.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <span aria-hidden className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/40 text-emerald-600">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <p className="leading-relaxed"><span className="font-semibold text-black">Soluciones específicas</span>: sistema de pedidos para foodtrucks con tablets Ethernet a servidor local (estable y rápido).</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-6 md:px-12 lg:px-20 py-4">
          <img
            src="/pngwho3.png"
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
