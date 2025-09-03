import { motion, type MotionProps } from 'framer-motion';
import React, { useState } from 'react';

interface ReelCardProps {
  title: string;
  description?: string;
  thumbnail: string;
  variants: MotionProps['variants'];
  /**
   * Controla la altura/aspecto. Default ahora usa relación 16:9 para una vista más “edge-to-edge”.
   * Si necesitan otra, pasen un override (ej: 'h-[180px] md:h-[220px] lg:h-[260px]').
   */
  heightClass?: string;
  /** Permite ajustar márgenes externos desde el grid padre si fuese necesario */
  className?: string;
}

// Ajustes clave solicitados:
// - Menor “margen con los bordes”: contenedor sin padding/márgenes internos, esquinas y ring sutil para que el contenido llegue casi al borde.
// - Mejor look: overlay en degradé (no lava la imagen), transición GPU, objeto centrado, ligera mejora de contraste en hover.
const ReelCard: React.FC<ReelCardProps> = ({
  title,
  description,
  thumbnail,
  variants,
  heightClass = 'aspect-[16/9]',
  className = ''
}) => {
  const [imgReady, setImgReady] = useState(false);

  return (
    <motion.div
      variants={variants}
      className={`relative group w-full ${heightClass} overflow-hidden rounded-[6px] sm:rounded-[8px] ring-1 ring-black/5 shadow-sm ${className}`}
    >
      {/* Skeleton */}
      <div
        className={`absolute inset-0 bg-black/5 ${
          imgReady ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-300 animate-pulse`}
        aria-hidden="true"
      />

      {/* Imagen */}
      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        decoding="async"
        onLoad={() => setImgReady(true)}
        className={`absolute inset-0 h-full w-full object-cover object-center transform-gpu will-change-transform transition-transform duration-500 ease-out group-hover:scale-[1.04] ${
          imgReady ? 'opacity-100' : 'opacity-0'
        } transition-opacity`}
      />

      {/* Degradé sutil para legibilidad sin “lavar” la imagen */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Contenido */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-2 md:px-3">
        <h3 className="text-white drop-shadow-md text-lg md:text-xl font-semibold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {title}
        </h3>
        {description && (
          <p className="mt-1 text-white/90 drop-shadow-md text-xs md:text-sm opacity-0 translate-y-2 transition-all duration-300 delay-75 group-hover:opacity-100 group-hover:translate-y-0">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default ReelCard;
