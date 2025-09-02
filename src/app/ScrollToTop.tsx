import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Fuerza scroll al inicio al entrar a páginas de portfolio (o cualquier ruta sin hash) para evitar quedar a mitad de scroll al navegar desde Home.
 */
export const ScrollToTop: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    // Si es una ruta de portfolio o no hay hash, reseteamos scroll
  if (location.pathname.startsWith('/trabajos') || !location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [location.pathname, location.hash]);
  return null;
};
