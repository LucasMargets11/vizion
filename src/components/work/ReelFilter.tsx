import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FilterDef { key: string; label: string }

interface ReelFilterProps {
  value: string;
  onChange: (key: string) => void;
  filters: FilterDef[];
}

export const ReelFilter: React.FC<ReelFilterProps> = ({ value, onChange, filters }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState<{ width: number; left: number } | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const measure = useCallback(() => {
    const el = tabRefs.current[value];
    if (el) {
      const { offsetWidth, offsetLeft } = el;
      setIndicatorStyle({ width: offsetWidth, left: offsetLeft });
    }
  }, [value]);

  useEffect(() => {
    measure();
  }, [measure, value, filters]);

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [measure]);

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
    <div
      ref={containerRef}
      role="tablist"
      aria-label="Filtrar trabajos"
      className="relative inline-flex items-center justify-center gap-8 text-sm md:text-base px-4"
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
            className={'relative font-semibold tracking-wide focus-ring transition-colors pb-2 ' + (active ? 'text-black' : 'text-black/60 hover:text-black')}
          >
            {f.label}
          </button>
        );
      })}
      <AnimatePresence>
        {indicatorStyle && (
          <motion.span
            key={value}
            layout
            layoutId="tab-indicator"
            className="absolute -bottom-0.5 h-1 rounded-full bg-black"
            initial={{ opacity: 0, scaleX: 0.6 }}
            animate={{ opacity: 1, scaleX: 1, left: indicatorStyle.left, width: indicatorStyle.width }}
            exit={{ opacity: 0, scaleX: 0.6 }}
            transition={{ type: 'spring', stiffness: 420, damping: 40, mass: 0.6 }}
            style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReelFilter;
