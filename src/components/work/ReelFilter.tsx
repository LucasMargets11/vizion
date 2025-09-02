import React, { useRef } from 'react';
import { motion, AnimatePresence, LayoutGroup, useReducedMotion } from 'framer-motion';

export interface FilterDef { key: string; label: string }

interface ReelFilterProps {
  value: string;
  onChange: (key: string) => void;
  filters: FilterDef[];
}

export const ReelFilter: React.FC<ReelFilterProps> = ({ value, onChange, filters }) => {
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const prefersReduced = useReducedMotion();

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const idx = filters.findIndex(f => f.key === value);
      const nextIdx = e.key === 'ArrowRight' ? (idx + 1) % filters.length : (idx - 1 + filters.length) % filters.length;
      onChange(filters[nextIdx].key);
      tabRefs.current[filters[nextIdx].key]?.focus();
    }
  };

  return (
    <LayoutGroup>
      <div
        role="tablist"
        aria-label="Filtrar trabajos"
        className="relative inline-flex items-center justify-center gap-6 md:gap-8 text-sm md:text-base px-2"
        onKeyDown={handleKey}
      >
        {filters.map(f => {
          const active = f.key === value;
            return (
              <button
                key={f.key}
                role="tab"
                ref={el => (tabRefs.current[f.key] = el)}
                aria-selected={active}
                tabIndex={active ? 0 : -1}
                onClick={() => onChange(f.key)}
                className={'relative font-semibold tracking-wide focus-ring outline-none px-1 md:px-2 py-1 transition-colors ' + (active ? 'text-black' : 'text-black/55 hover:text-black')}
              >
                <span className="relative z-10 block px-1 md:px-2 py-0.5">{f.label}</span>
              </button>
            );
        })}
        <AnimatePresence initial={false}>
          {!prefersReduced && (
            <motion.span
              key={value + '-underline'}
              layoutId="rf-underline"
              className="absolute bottom-0 h-[3px] rounded-full"
              initial={{ opacity: 0, scaleX: 0.6 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0, scaleX: 0.6 }}
              transition={{ type: 'spring', stiffness: 500, damping: 48, mass: 0.65 }}
              style={{
                left: tabRefs.current[value]?.offsetLeft,
                width: tabRefs.current[value]?.offsetWidth,
                backgroundColor: 'oklch(68.5% 0.169 237.323)' //
              }}
              aria-hidden="true"
            />

          )}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
};

export default ReelFilter;
