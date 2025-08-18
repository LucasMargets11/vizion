import React, { useMemo } from 'react';

export interface ReelShowcaseItemProps {
  title: string;
  description?: string;
  thumbnail: string;
  aspect?: 'video' | 'square' | 'photo';
}

/**
 * Item individual del grid del reel.
 * - Zoom suave solo en la imagen (sin reflow)
 * - Overlay blanco con texto negro al hover / focus
 * - Accesible vía teclado (button + focus-visible)
 * - Aspect ratio controlado para evitar jumps de layout
 */
export default function ReelShowcaseItem({
  title,
  description,
  thumbnail,
  aspect = 'video'
}: ReelShowcaseItemProps) {
  const aspectClass = useMemo(() => {
    switch (aspect) {
      case 'square':
        return 'aspect-square';
      case 'photo':
        return 'aspect-[4/5]';
      default:
        return 'aspect-video';
    }
  }, [aspect]);

  return (
    <button
      type="button"
      className={`group relative isolate block w-full overflow-hidden ${aspectClass} focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30`}
      aria-label={title}
    >
      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105 group-focus-visible:scale-105"
      />
      <div className="absolute inset-0 bg-white/90 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 group-focus-visible:opacity-100" />
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h3 className="text-black text-lg sm:text-xl font-semibold opacity-0 translate-y-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0">
          {title}
        </h3>
        {description && (
          <p className="mt-1 max-w-prose text-black/80 text-sm sm:text-base opacity-0 translate-y-2 transition-all duration-300 ease-out delay-75 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0">
            {description}
          </p>
        )}
      </div>
    </button>
  );
}
