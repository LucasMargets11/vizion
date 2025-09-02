import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStepProps {
  title: string;
  desc: string;
  active: boolean;
  onActivate?: () => void;
  id?: string;
  color?: string; // color principal del paso
  nextColor?: string; // color siguiente para crear gradiente activo
}

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
};

export default function ProcessStep({ title, desc, active, onActivate, id, color, nextColor }: ProcessStepProps) {
  const gradient = active && color
    ? `linear-gradient(135deg, ${color}, ${nextColor || color})`
    : undefined;
  return (
    <motion.button
      type="button"
      id={id}
      variants={itemVariants}
      onFocus={onActivate}
      onMouseEnter={onActivate}
      aria-current={active ? 'step' : undefined}
      whileHover={{ scale: 1.05, y: -2 }}
      whileFocus={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded-none transition-colors duration-500 ${
        active ? 'active' : ''
      }`}
    >
      <div className="mb-3 flex items-center">
        <span
          className={`inline-block rounded-full transition-all ease-out ring-offset-2 shadow-sm ${
            active
              ? 'w-8 h-8 ring-2 ring-black/10 shadow-[0_0_0_4px_rgba(0,0,0,0.04)]'
              : 'w-5 h-5 bg-black/10 group-hover:w-6 group-hover:h-6'
          }`}
          style={
            active
              ? { background: gradient || color || '#000', boxShadow: `0 0 0 4px ${color}10, 0 0 18px -4px ${color}90` }
              : { background: 'var(--dot-bg, rgba(0,0,0,0.06))' }
          }
        />
      </div>
      <div className="flex flex-col gap-1">
        <div
          className={`text-base md:text-lg font-semibold tracking-tight leading-snug transition-colors duration-500 ${
            active ? '' : 'text-black/60 group-hover:text-black'
          }`}
          style={active ? { background: gradient, WebkitBackgroundClip: 'text', color: 'transparent' } : undefined}
        >
          {title}
        </div>
        <motion.p
          initial={false}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-sm md:text-base text-black/70 max-w-xs will-change-transform"
        >
          {desc}
        </motion.p>
      </div>
    </motion.button>
  );
}
