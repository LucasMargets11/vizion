import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import ProcessStep from './ProcessStep';
import { STEPS } from './data';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } }
};

const STEP_COLORS = [
  '#ef4444', // rojo
  '#f97316', // naranja
  '#f59e0b', // ámbar
  '#eab308', // amarillo
  '#10b981', // verde
  '#3b82f6', // azul
  '#8b5cf6'  // violeta
];

export default function ProcessRoadmap() {
  const [active, setActive] = useState(STEPS[0].id);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <section id="proceso" className="w-full bg-white text-black py-20 md:py-28">
      <div className="px-6 md:px-12">
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">Cómo iluminamos una historia</h3>
    <div className="mt-10 hidden md:block relative">
          <motion.div
      className="absolute left-0 right-0 top-5 h-[2px] origin-left"
      style={{ background: 'linear-gradient(90deg,#ef4444,#f97316,#f59e0b,#eab308,#10b981,#3b82f6,#8b5cf6)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-7 gap-6 relative"
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
                />
              </StepInViewActivator>
            ))}
          </motion.div>
        </div>
        <div className="mt-10 md:hidden relative pl-6 flex flex-col gap-10 snap-y snap-mandatory"
          style={{ background: 'linear-gradient(180deg,#ef4444,#f97316,#f59e0b,#eab308,#10b981,#3b82f6,#8b5cf6)' }}>
          <div className="absolute left-0 top-0 bottom-0 w-px bg-black/10" />
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
  id
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
  }, [inView, disabled, onActivate]);
  return (
    <div ref={ref} className={`relative ${active ? 'group active' : 'group'} snap-start focus:outline-none`}>{children}</div>
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
