import { useEffect, useState } from 'react';

/**
 * Devuelve la altura (en px) del header fijo para desplazar héroes que no deben ir por detrás.
 */
export function useHeaderOffset(defaultPx: number = 80) {
  const [offset, setOffset] = useState(defaultPx);
  useEffect(() => {
    const measure = () => {
      const el = document.querySelector('header[role="banner"]') as HTMLElement | null;
      if (el) setOffset(el.offsetHeight);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);
  return offset;
}
