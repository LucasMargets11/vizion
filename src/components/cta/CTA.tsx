import React from 'react';
import { Button } from '@/components/ui/Button';
import { routes } from '@/app/routes';

export const CTA: React.FC = () => (
  <section className="py-24 bg-gradient-to-r from-brand/10 to-accent/10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
      <h2 className="font-outfit text-3xl sm:text-4xl font-semibold max-w-xl">
        ¿Listos para iluminar su próxima historia?
      </h2>
      <a href={routes.contacto}><Button variant="primary">Hablemos</Button></a>
    </div>
  </section>
);
