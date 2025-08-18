import React, { useState } from 'react';
import { clsx } from 'clsx';

interface Link { href: string; label: string }
export const MobileMenu: React.FC<{ links: Link[] }> = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button aria-label="Menú" onClick={() => setOpen(!open)} className="focus-ring rounded p-2 text-slate-200">
        <span className="sr-only">Abrir menú</span>
        <div className="space-y-1">
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
          <span className="block h-0.5 w-6 bg-current" />
        </div>
      </button>
      <div
        className={clsx(
          'fixed inset-0 z-40 bg-slate-900/80 backdrop-blur-sm transition-opacity',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setOpen(false)}
      />
      <aside
        className={clsx(
          'fixed top-0 right-0 z-50 h-full w-64 bg-slate-900/95 backdrop-blur-sm shadow-lg transform transition-transform p-8',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-label="Menú móvil"
      >
        <ul className="space-y-6 mt-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-slate-200 hover:text-brand text-lg"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};
