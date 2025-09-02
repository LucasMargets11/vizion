import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import ProcessStep from './ProcessStep';
import { STEPS } from './data';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.03 } },
};

// Paleta base para degradés (podés moverla a tu theme)
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
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const reduce = useReducedMotion();

  // Índice activo (por scroll)
  const activeIndex = useMemo(
    () => Math.max(0, STEPS.findIndex((s) => s.id === active)),
    [active]
  );

  // Si hay hover (en desktop), tiene prioridad visual sobre el activo
  const progressIndex = isDesktop && hoverIndex !== null ? hoverIndex : activeIndex;
  const progressPct = ((progressIndex + 1) / STEPS.length) * 100;

  // Gradientes base (h/v)
  const H_GRADIENT_BASE = useMemo(
    () => `linear-gradient(90deg, ${STEP_COLORS.join(',')})`,
    []
  );
  const V_GRADIENT = useMemo(
    () => `linear-gradient(180deg, ${STEP_COLORS.join(',')})`,
    []
  );

  // Gradiente dinámico hasta el paso (mezcla color actual con el siguiente)
  const dynamicGradient = useMemo(() => {
    const idx = progressIndex;
    const nextIdx = Math.min(idx + 1, STEP_COLORS.length - 1);
    // Colores desde el primero hasta el actual…
    const base = STEP_COLORS.slice(0, idx + 1);
    // …y añadimos el siguiente al final para el blend
    const withBlendTail = [...base, STEP_COLORS[nextIdx]];
    return `linear-gradient(90deg, ${withBlendTail.join(',')})`;
  }, [progressIndex]);

  // Timings armonizados
  const DURATION = reduce ? 0.2 : 0.55;
  const GLOW_DURATION = reduce ? 0.15 : 0.6;
  const EASE = 'easeOut';

  return (
    <section
      id="proceso"
      className="w-full bg-white text-black py-20 md:py-28 relative overflow-hidden"
      style={
        {
          // @ts-ignore CSS vars para tunear sin tocar JS
          '--railBlur': reduce ? '0px' : '12px',
          '--railOpacity': reduce ? 0.22 : 0.4,
        } as React.CSSProperties
      }
    >
      {/* Fondo sutil para profundidad */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          background:
            'radial-gradient(1200px 500px at 50% -10%, #000 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Keyframes locales */}
      <style>{`
        @keyframes slideGradientH {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes slideGradientV {
          0% { background-position: 50% 0%; }
          100% { background-position: 50% 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-rail, .animate-rail-v { animation: none !important; }
        }
      `}</style>

      <div className="px-6 md:px-12 relative z-[1]">
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Cómo iluminamos una historia
        </h3>

        {/* DESKTOP: rail horizontal */}
        <div className="mt-10 hidden md:block relative">
          {/* Base rail tenue */}
          <div className="absolute left-0 right-0 top-5 h-[2px] bg-black/10 rounded-full" />

          {/* Degradé animado sutil recorriendo el rail (decorativo) */}
          {!reduce && (
            <div
              className="absolute left-0 right-0 top-5 h-[2px] rounded-full mix-blend-normal animate-rail"
              style={{
                background: H_GRADIENT_BASE,
                backgroundSize: '200% 100%',
                animation: 'slideGradientH 18s linear infinite',
                opacity: Number((({} as any)['--railOpacity']) ?? 0.4),
              }}
              aria-hidden="true"
            />
          )}

          {/* Progreso hasta el paso (hover o activo) con gradiente dinámico */}
          <motion.div
            className="absolute left-0 top-5 h-[3px] rounded-full shadow-[0_0_18px_rgba(0,0,0,0.08)]"
            style={{ background: dynamicGradient }}
            initial={{ width: 0 }}
            animate={{ width: `${progressPct}%` }}
            transition={{ ease: EASE, duration: DURATION }}
            aria-hidden="true"
          />

          {/* Glow focal siguiendo el paso activo (no en reduce-motion) */}
          {!reduce && (
            <motion.div
              key={active}
              className="pointer-events-none absolute left-0 right-0 top-0 h-14"
              initial={{ opacity: 0, filter: 'blur(var(--railBlur))' }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)',
                background: `radial-gradient(ellipse 280px 46px at ${((activeIndex + 0.5) / STEPS.length) * 100}% 28px, ${
                  STEP_COLORS[activeIndex % STEP_COLORS.length]
                }33 0%, transparent 72%)`,
              }}
              transition={{ duration: GLOW_DURATION, ease: EASE }}
              aria-hidden="true"
            />
          )}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 relative"
            style={{ gridTemplateColumns: `repeat(${STEPS.length}, minmax(0, 1fr))` }}
          >
            {STEPS.map((s, idx) => (
              <div
                key={s.id}
                onMouseEnter={() => isDesktop && setHoverIndex(idx)}
                onMouseLeave={() => isDesktop && setHoverIndex(null)}
              >
                <StepInViewActivator
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
              </div>
            ))}
          </motion.div>
        </div>

        {/* MOBILE: rail vertical (sin hover) */}
        <div className="mt-10 md:hidden relative pl-6 flex flex-col gap-10 snap-y snap-mandatory">
          {/* Rail base */}
          <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-black/10 rounded-full" />

          {/* Degradé vertical animado muy sutil */}
          {!reduce && (
            <div
              className="absolute left-3 top-0 bottom-0 w-[2px] rounded-full animate-rail-v"
              style={{
                background: V_GRADIENT,
                backgroundSize: '100% 220%',
                animation: 'slideGradientV 22s linear infinite',
                opacity: Number((({} as any)['--railOpacity']) ?? 0.35),
              }}
              aria-hidden="true"
            />
          )}

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

  // Umbral distinto desktop/mobile para estabilidad + rootMargin para evitar "flaps"
  const inView = useInView(ref, {
    amount: horizontal ? 0.45 : 0.6,
    margin: horizontal ? '-10% 0px -25% 0px' : '-12% 0px -18% 0px',
  });

  useEffect(() => {
    if (disabled) return;
    if (inView && !active) onActivate();
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
