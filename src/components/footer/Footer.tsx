import React from 'react';
import { routes } from '@/app/routes';

export const Footer: React.FC = () => (
  <footer className="w-full bg-black text-white py-16 text-sm">
    <div className="w-full px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between gap-12">
      <div className="space-y-4 max-w-sm">
        <a href="#top" className="font-outfit text-2xl font-extrabold tracking-tight">Vizion</a>
        <p className="text-white/60">Historias que iluminan. Producción audiovisual integral.</p>
      </div>
      <nav aria-label="Footer" className="flex gap-16">
        <ul className="space-y-3">
          <li><a className="hover:opacity-80 transition" href={routes.servicios}>Servicios</a></li>
          <li><a className="hover:opacity-80 transition" href={routes.trabajos}>Trabajos</a></li>
          <li><a className="hover:opacity-80 transition" href={routes.equipo}>Equipo</a></li>
          <li><a className="hover:opacity-80 transition" href={routes.contacto}>Contacto</a></li>
        </ul>
      </nav>
      <div className="space-y-4">
        <p className="text-white/60">&copy; {new Date().getFullYear()} Vizion. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <a href="#" aria-label="Instagram" className="hover:opacity-80 transition">IG</a>
          <a href="#" aria-label="YouTube" className="hover:opacity-80 transition">YT</a>
          <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition">IN</a>
        </div>
      </div>
    </div>
  </footer>
);
