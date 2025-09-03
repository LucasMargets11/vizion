import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  items: string[];
  icon?: React.ReactNode;
  wrapperClass?: string;
}

export default function ServiceCard({ title, items, icon, wrapperClass = '' }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      className={`group relative w-full ${wrapperClass} aspect-[3/4] max-w-full flex items-center justify-center`}
    >
      {/* Marco escudo */}
      <svg
        viewBox="0 0 300 360"
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <path
          d="M150 12
             C 112 40, 76 40, 48 50
             L 48 175
             C 48 250, 100 292, 150 336
             C 200 292, 252 250, 252 175
             L 252 50
             C 224 40, 188 40, 150 12 Z"
          fill="transparent"
          stroke="rgba(0,0,0,0.65)"
          strokeWidth="8"
          className="transition-colors duration-400 ease-out group-hover:stroke-amber-400"
        />
      </svg>

      {/* Glow */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_50%_14%,rgba(255,210,120,0.14),transparent_60%)]
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
        "
      />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-6 gap-4">
        {/* Título, unos px más abajo */}
        <h3 className="text-lg md:text-xl font-semibold tracking-tight">{title}</h3>

        {/* Ítems, justo debajo del título */}
        <div className="grid grid-cols-1 gap-1 text-sm md:text-base text-gray-600">
          {items.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
