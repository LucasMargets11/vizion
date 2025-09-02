import React, { useEffect, useState } from 'react';
import { routes } from '@/app/routes';
import clsx from 'clsx';
import { MobileMenu } from './MobileMenu';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const links = [
  { href: routes.servicios, label: 'Servicios' },
  { href: routes.trabajos, label: 'Trabajos' },
  { href: routes.equipo, label: 'Equipo' },
  { href: routes.contacto, label: 'Contacto' }
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isPortfolio = location.pathname.startsWith('/trabajos');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all',
        (scrolled || isPortfolio)
          ? 'bg-base-black backdrop-blur-sm ring-1 ring-base-white/10'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav className="container flex items-center justify-between py-4" aria-label="Principal">
        <Link to="/" className="font-outfit text-xl font-bold tracking-tight text-base-white focus-ring px-1 py-1 rounded">
          Vizi<span className="text-gradient-brand">o</span>n
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-base-white/70 hover:text-base-white focus-ring px-1 py-2 rounded"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <MobileMenu links={links} />
        </div>
      </nav>
    </header>
  );
};
