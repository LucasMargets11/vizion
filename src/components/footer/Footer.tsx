import React from 'react';
import { routes } from '@/app/routes';

export const Footer: React.FC = () => (
  <footer className="mt-24 border-t border-white/5 py-12 text-sm text-slate-400">
    <div className="container flex flex-col md:flex-row justify-between gap-8">
      <div className="space-y-3">
        <a href="#top" className="font-outfit text-lg font-bold text-brand">Lumiax</a>
        <p className="max-w-xs text-slate-500">Historias que iluminan. Producción audiovisual integral.</p>
      </div>
      <nav aria-label="Footer" className="flex gap-8">
        <ul className="space-y-2">
          <li><a className="hover:text-brand" href={routes.servicios}>Servicios</a></li>
          <li><a className="hover:text-brand" href={routes.trabajos}>Trabajos</a></li>
          <li><a className="hover:text-brand" href={routes.equipo}>Equipo</a></li>
          <li><a className="hover:text-brand" href={routes.contacto}>Contacto</a></li>
        </ul>
      </nav>
      <div className="space-y-2">
        <p>&copy; {new Date().getFullYear()} Lumiax. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <a href="#" aria-label="Instagram" className="hover:text-brand">IG</a>
          <a href="#" aria-label="YouTube" className="hover:text-brand">YT</a>
          <a href="#" aria-label="LinkedIn" className="hover:text-brand">IN</a>
        </div>
      </div>
    </div>
  </footer>
);
