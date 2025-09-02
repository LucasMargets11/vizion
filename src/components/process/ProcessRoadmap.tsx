import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ProcessStep from './ProcessStep';
import { STEPS } from './data';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

// Paleta base para degradés (pueden venir del theme si querés)
const STEP_COLORS = [
  '#ef4444', // rojo
  '#f97316', // naranja
  '#f59e0b', // ámbar
  '#eab308', // amarillo
  '#10b981', // verde
  '#3b82f6', // azul
  '#8b5cf6', // violeta
];

export default function ProcessRoadmap() {
  const [active, setActive] = useState(STEPS[0].id);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // Índice activo y proporción para glow/progreso
  const activeIndex = useMemo(
    () => Math.max(0, STEPS.findIndex((s) => s.id === active)),
    [active]
  );
  const progressPct = ((activeIndex + 1) / STEPS.length) * 100;

  // Gradientes calculados
  const H_GRADIENT = useMemo(
    () => `linear-gradient(90deg, ${STEP_COLORS.join(',')})`,
    []
  );
  const V_GRADIENT = useMemo(
    () => `linear-gradient(180deg, ${STEP_COLORS.join(',')})`,
    []
  );

  return (
    <section id="proceso" className="w-full bg-white text-black py-20 md:py-28 relative overflow-hidden">
      {/* Fondo sutil para dar profundidad (B/N muy bajo) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          background:
            'radial-gradient(1200px 500px at 50% -10%, #000 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <style>{`
        @keyframes slideGradientH {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes slideGradientV {
          0% { background-position: 50% 0%; }
          100% { background-position: 50% 100%; }
        }
      `}</style>

      <div className="px-6 md:px-12 relative z-[1]">
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Cómo iluminamos una historia
        </h3>

        {/* DESKTOP: rail horizontal con degradé + progreso + glow dinámico */}
        <div className="mt-10 hidden md:block relative">
          {/* Base rail tenue */}
          <div className="absolute left-0 right-0 top-5 h-[2px] bg-black/10 rounded-full" />

          {/* Degradé animado (sutil) recorriendo el rail */}
          <div
            className="absolute left-0 right-0 top-5 h-[2px] rounded-full mix-blend-normal"
            style={{
              background: H_GRADIENT,
              backgroundSize: '200% 100%',
              animation: 'slideGradientH 18s linear infinite',
              opacity: 0.4,
            }}
            aria-hidden="true"
          />

          {/* Progreso hasta el paso activo con degradé sólido */}
          <motion.div
            className="absolute left-0 top-5 h-[3px] rounded-full shadow-[0_0_18px_rgba(0,0,0,0.08)]"
            style={{ background: H_GRADIENT }}
            initial={{ width: 0 }}
            animate={{ width: `${progressPct}%` }}
            transition={{ ease: 'easeOut', duration: 0.6 }}
            aria-hidden="true"
          />

          {/* Glow focal siguiendo el paso activo */}
          <motion.div
            key={active}
            className="pointer-events-none absolute left-0 right-0 top-0 h-14"
            initial={{ opacity: 0, filter: 'blur(12px)' }}
            animate={{
              opacity: 1,
              filter: 'blur(0px)',
              background: `radial-gradient(ellipse 280px 46px at ${((activeIndex + 0.5) / STEPS.length) * 100}% 28px, ${
                STEP_COLORS[activeIndex % STEP_COLORS.length]
              }33 0%, transparent 72%)`,
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            aria-hidden="true"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 relative"
            style={{ gridTemplateColumns: `repeat(${STEPS.length}, minmax(0, 1fr))` }}
          >
            {STEPS.map((s, idx) => (
              <StepInViewActivator
                key={s.id}
                id={s.id}
                onActivate={() => setActive(s.id)}
                active={active === s.id}
                horizontal
                disabled={!isDesktop}
              >
                <ProcessStep
                  title={s.title}
                  desc={s.desc}
                  active={active === s.id}
                  onActivate={() => setActive(s.id)}
                  color={STEP_COLORS[idx % STEP_COLORS.length]}
                  nextColor={STEP_COLORS[(idx + 1) % STEP_COLORS.length]}
                />
              </StepInViewActivator>
            ))}
          </motion.div>
        </div>

        {/* MOBILE: rail vertical con degradé animado muy suave */}
        <div className="mt-10 md:hidden relative pl-6 flex flex-col gap-10 snap-y snap-mandatory">
          {/* Rail base */}
          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-black/10 rounded-full" />

          {/* Degradé vertical animado muy sutil */}
          <div
            className="absolute left-3 top-0 bottom-0 w-[2px] rounded-full"
            style={{
              background: V_GRADIENT,
              backgroundSize: '100% 220%',
              animation: 'slideGradientV 22s linear infinite',
              opacity: 0.35,
            }}
            aria-hidden="true"
          />

          {STEPS.map((s, idx) => (
            <StepInViewActivator
              key={s.id}
              id={s.id}
              onActivate={() => setActive(s.id)}
              active={active === s.id}
              disabled={false}
            >
              <ProcessStep
                title={s.title}
                desc={s.desc}
                active={active === s.id}
                onActivate={() => setActive(s.id)}
                color={STEP_COLORS[idx % STEP_COLORS.length]}
                nextColor={STEP_COLORS[(idx + 1) % STEP_COLORS.length]}
              />
            </StepInViewActivator>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepInViewActivator({
  children,
  onActivate,
  active,
  horizontal,
  disabled,
  id,
}: {
  children: React.ReactNode;
  onActivate: () => void;
  active: boolean;
  horizontal?: boolean;
  disabled: boolean;
  id: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: horizontal ? 0.4 : 0.6 });

  useEffect(() => {
    if (!disabled && inView) onActivate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, disabled]);

  return (
    <div
      ref={ref}
      className={`relative ${active ? 'group active' : 'group'} snap-start focus:outline-none`}
      aria-current={active ? 'step' : undefined}
      data-step-id={id}
    >
      {children}
    </div>
  );
}

function useMediaQuery(query: string) {
  const [match, setMatch] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia(query).matches;
  });
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const m = window.matchMedia(query);
    const handler = () => setMatch(m.matches);
    handler();
    m.addEventListener('change', handler);
    return () => m.removeEventListener('change', handler);
  }, [query]);
  return match;
}
