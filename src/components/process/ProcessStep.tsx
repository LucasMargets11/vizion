import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStepProps {
  title: string;
  desc: string;
  active: boolean;
  onActivate?: () => void;
  id?: string;
  color?: string; // color dinámico para el paso
}

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
};

export default function ProcessStep({ title, desc, active, onActivate, id, color }: ProcessStepProps) {
  return (
    <motion.button
      type="button"
      id={id}
      variants={itemVariants}
      onFocus={onActivate}
      onMouseEnter={onActivate}
      aria-current={active ? 'step' : undefined}
      className={`group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded-none transition-colors ${
        active ? 'active' : ''
      }`}
    >
      <div className="mb-3 flex items-center">
        <span
          className={`inline-block rounded-full transition-all duration-300 ease-out ring-offset-2 ${
            active
              ? 'w-8 h-8 ring-2 ring-black/10'
              : 'w-5 h-5 bg-black/10 group-hover:bg-black/30'
          }`}
          style={active ? { background: color || '#000' } : { background: 'var(--dot-bg, rgba(0,0,0,0.06))' }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-base md:text-lg font-semibold tracking-tight leading-snug" style={active ? { color } : undefined}>{title}</div>
        <p
          className={`text-sm md:text-base text-black/70 max-w-xs transition-all duration-300 ease-out ${
            active
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'
          }`}
        >
          {desc}
        </p>
      </div>
    </motion.button>
  );
}
