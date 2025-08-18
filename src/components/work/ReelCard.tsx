import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ReelCardProps {
  title: string;
  description?: string;
  thumbnail: string;
  variants: any;
  heightClass?: string; // override if needed
}

const ReelCard: React.FC<ReelCardProps> = ({ title, description, thumbnail, variants, heightClass = 'h-[260px] md:h-[420px]' }) => {
  const [imgReady, setImgReady] = useState(false);
  return (
    <motion.div
      variants={variants}
      className={`relative group w-full ${heightClass} overflow-hidden`}
    >
      <div className={`absolute inset-0 bg-black/5 ${imgReady ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 animate-pulse`} aria-hidden="true" />
      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        decoding="async"
        onLoad={() => setImgReady(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.06] ${imgReady ? 'opacity-100' : 'opacity-0'} transition-opacity`}
      />
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/90 transition-colors duration-300" />
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h3 className="text-black text-xl md:text-2xl font-semibold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {title}
        </h3>
        {description && (
          <p className="mt-1 text-black/80 text-sm md:text-base opacity-0 translate-y-2 transition-all duration-300 delay-75 group-hover:opacity-100 group-hover:translate-y-0">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default ReelCard;
