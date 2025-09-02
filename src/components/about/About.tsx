import React, { useRef } from 'react';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const About: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  // Opacidad basada en scroll: entra suave y se desvanece al salir
  // Ajustá los umbrales si querés que empiece antes/después.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'end 15%'], // visible en el rango central
  });

  // 0 → 1 al entrar | 1 sostenido | 1 → 0 al salir
  const rawOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const opacity = useSpring(rawOpacity, { stiffness: 220, damping: 28, mass: 0.6 });

  return (
    <Section id="equipo" variant="light" className="px-0" animateOnView={false}>
      <motion.div
        ref={ref}
        style={{ opacity }}
        className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 items-center"
      >
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 py-4">
          <div className="max-w-xl w-full">
            <Heading
              className="text-lg md:text-xl lg:text-2xl uppercase tracking-[0.25em] font-semibold text-[oklch(68.5%_0.169_237.323)] mb-4"
            >
              Equipo multidisciplinario
            </Heading>

            {/* Barra fija (sin animación) */}
            <span className="mt-5 mb-8 block h-[3px] w-full rounded-full bg-[oklch(68.5%_0.169_237.323)]" />
            <div className="space-y-8 text-black/75 text-lg md:text-xl leading-relaxed font-light">
              <p className="[text-wrap:balance]">
                En <span className="font-semibold text-black">Vizion</span> combinamos
                {' '}<span className="font-medium text-black">audiovisual</span> y
                {' '}<span className="font-medium text-black">software</span> para resolver comunicación y operación.
                Nos obsesiona el detalle visual y la performance técnica.
              </p>

              <ul className="space-y-5"> 
              <li className="flex gap-4 items-start">
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md 
                            bg-[oklch(68.5%_0.169_237.323_/_0.1)] 
                            ring-1 ring-[oklch(68.5%_0.169_237.323_/_0.4)] 
                            text-[oklch(68.5%_0.169_237.323)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="leading-relaxed">
                  <span className="font-semibold text-black">Audiovisual</span>: reels, spots, videos corporativos, fotografía, color grading y motion.
                </p>
              </li>

              <li className="flex gap-4 items-start">
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md 
                            bg-[oklch(68.5%_0.169_237.323_/_0.1)] 
                            ring-1 ring-[oklch(68.5%_0.169_237.323_/_0.4)] 
                            text-[oklch(68.5%_0.169_237.323)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="leading-relaxed">
                  <span className="font-semibold text-black">Software</span>: sitios web y landings modernas, sistemas a medida y paneles de gestión.
                </p>
              </li>

              <li className="flex gap-4 items-start">
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-md 
                            bg-[oklch(68.5%_0.169_237.323_/_0.1)] 
                            ring-1 ring-[oklch(68.5%_0.169_237.323_/_0.4)] 
                            text-[oklch(68.5%_0.169_237.323)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <p className="leading-relaxed">
                  <span className="font-semibold text-black">Soluciones específicas</span>: sistema de pedidos para foodtrucks con tablets Ethernet a servidor local (estable y rápido).
                </p>
              </li>
            </ul>

            </div>
          </div>
        </div>

        <div className="flex justify-center items-center px-6 md:px-12 lg:px-20 py-4">
          <img
            src="/pngwho3.png"
            alt="Equipo Vizion: audiovisual + software"
            className="mx-auto h-auto w-full max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
      </motion.div>
    </Section>
  );
};
