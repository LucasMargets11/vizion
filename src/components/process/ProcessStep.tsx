import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProcessStepProps {
  title: string;
  desc: string;
  active: boolean;
  revealed: boolean; // si ya fue "revelado" por el progreso
  delay?: number; // delay coordinado
  introPhase?: boolean; // durante barrido inicial
  onActivate?: () => void;
  id?: string;
  color?: string;
  nextColor?: string;
}

export default function ProcessStep({ title, desc, active, revealed, introPhase, delay = 0, onActivate, id, color, nextColor }: ProcessStepProps) {
  const [hovered, setHovered] = useState(false);
  const gradient = active && color
    ? `linear-gradient(135deg, ${color}, ${nextColor || color})`
    : undefined;
  const targetOpacity = revealed ? 1 : (introPhase ? 0 : 0.14);
  return (
    <motion.button
      type="button"
      id={id}
      initial={{ opacity: 0 }}
      animate={{ opacity: targetOpacity }}
      transition={{ duration: revealed ? 1.15 : 0.4, ease: 'easeOut', delay: revealed ? delay : 0 }}
      onFocus={onActivate}
      onMouseEnter={() => { onActivate?.(); setHovered(true); }}
      onMouseLeave={() => setHovered(false)}
      aria-current={active ? 'step' : undefined}
      whileHover={{ scale: 1.05, y: -2 }}
      whileFocus={{ scale: 1.04, y: -1 }}
  whileTap={{ scale: 0.96 }}
      className={`group relative w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded-none transition-colors duration-500 ${
        active ? 'active' : ''
      }`}
    >
      <div className="mb-3 flex items-center">
        <motion.span
          className={`inline-block rounded-full ring-offset-2 shadow-sm`}
          animate={{
            width: active ? 32 : hovered ? 24 : 20,
            height: active ? 32 : hovered ? 24 : 20,
            opacity: active ? 1 : hovered ? 0.95 : 0.3,
            boxShadow: active
              ? `0 0 0 4px ${color}10, 0 0 18px -4px ${color}90`
              : hovered
              ? `0 0 0 2px ${color}18, 0 0 10px -2px ${color}55`
              : '0 0 0 0 rgba(0,0,0,0)'
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 26, mass: 0.8 }}
          style={{ background: active ? (gradient || color || '#000') : (color || '#000') }}
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
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 2 }}
          transition={{ duration: 0.32, ease: 'easeOut' }}
          className="text-sm md:text-base text-black/70 max-w-xs will-change-transform"
        >
          {desc}
        </motion.p>
      </div>
    </motion.button>
  );
}
