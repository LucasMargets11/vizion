import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { routes } from '@/app/routes';
import { Footer } from '@/components/footer/Footer';
import GradientHero from '@/components/hero/GradientHero';
import { Navbar } from '@/components/nav/Navbar';
import { findWorkBySlug, WORKS } from '@/data/works';
import { useHeaderOffset } from '@/hooks/useHeaderOffset';

const PortfolioPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const work = slug ? findWorkBySlug(slug) : undefined;

  if (!work) {
    return (
      <div className="min-h-screen flex flex-col bg-white text-black">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-12 text-center">
          <div>
            <h1 className="text-4xl font-bold">Proyecto no encontrado</h1>
            <p className="mt-4 opacity-70">El proyecto solicitado no existe o fue removido.</p>
            <Link to="/" className="mt-6 inline-block font-semibold underline">
              Volver al inicio
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const headerOffset = useHeaderOffset();

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />
      {/* Hero / encabezado del proyecto - el color comienza debajo del header */}
      <GradientHero
        title={work.title}
        subtitle={work.description}
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Trabajos', href: '/trabajos' },
          { label: work.title }
        ]}
        align="center"
        offsetTop={headerOffset}
      />

      {/* Contenido principal */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto pr-6 md:pr-10 lg:pr-16 xl:pr-20 pl-3 md:pl-4 lg:pl-6 xl:pl-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-start">
            {/* Galería ampliada (≈65-70%) acercada al margen izquierdo */}
            <div className="md:col-span-7 lg:col-span-8 space-y-8 -ml-3 md:-ml-4 lg:-ml-6 xl:-ml-8">
              {work.images.map((img, idx) => (
                <figure
                  key={idx}
                  className="w-full overflow-hidden rounded-lg shadow-sm bg-white border border-black/5"
                >
                  <img
                    src={img}
                    alt={work.title + ' imagen ' + (idx + 1)}
                    className="w-full h-auto object-cover"
                  />
                </figure>
              ))}
            </div>
            {/* Sidebar (reposicionado mismo ancho visual) */}
            <aside className="md:col-span-5 lg:col-span-4 sticky top-24 self-start space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Resumen</h2>
                <p className="text-black/70 leading-relaxed whitespace-pre-line">{work.content}</p>
              </div>
              <div className="space-y-4">
                {work.client && (
                  <p className="flex justify-between border-b border-black/10 pb-2">
                    <span className="font-medium">Cliente</span>
                    <span className="ml-6 text-right">{work.client}</span>
                  </p>
                )}
                {work.partner && (
                  <p className="flex justify-between border-b border-black/10 pb-2">
                    <span className="font-medium">Partner</span>
                    <span className="ml-6 text-right">{work.partner}</span>
                  </p>
                )}
                {work.website && (
                  <p className="flex justify-between border-b border-black/10 pb-2">
                    <span className="font-medium">Website</span>
                    <a
                      className="ml-6 text-right underline hover:opacity-80"
                      href={work.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {work.website.replace('https://', '')}
                    </a>
                  </p>
                )}
              </div>
              <div className="pt-2 flex flex-row gap-4 flex-wrap">
                {work.website && (
                  <a
                    href={work.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-11 px-5 rounded-xl font-semibold text-sm bg-black text-white hover:bg-black/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 transition"
                  >
                    Ir a la web
                  </a>
                )}
                <a
                  href={routes.contacto}
                  className="ml-auto inline-flex items-center justify-center h-11 px-5 rounded-xl font-semibold text-sm border border-black/25 text-black hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
                >
                  Contactanos
                </a>
              </div>
            </aside>
          </div>
        </div>

        {/* Sección final (similar al cierre mostrado) */}
        <section className="bg-white border-t border-black/10 py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Proyectos relacionados
            </h3>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
              {WORKS.filter((w) => w.id !== work.id)
                .slice(0, 3)
                .map((r) => (
                  <Link
                    key={r.id}
                    to={`/trabajos/${r.slug}`}
                    className="group block border border-black/10 rounded-lg overflow-hidden hover:shadow-md transition"
                  >
                    <div className="aspect-video overflow-hidden bg-black/5">
                      <img
                        src={r.thumbnail}
                        alt={r.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-lg">{r.title}</h4>
                      {r.description && (
                        <p className="mt-1 text-sm text-black/60">{r.description}</p>
                      )}
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
