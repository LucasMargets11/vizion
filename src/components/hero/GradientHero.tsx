import React from 'react';
import clsx from 'clsx';

export interface BreadcrumbItem { label: string; href?: string }
export interface HeroCTA { label: string; href: string }
export interface GradientHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  align?: 'center' | 'left';
  ctaPrimary?: HeroCTA;
  ctaSecondary?: HeroCTA;
  offsetTop?: number; // espacio superior para header fijo
}

/**
 * Hero reutilizable con fondo gradiente brand.
 */
export const GradientHero: React.FC<GradientHeroProps> = ({
  title,
  subtitle,
  breadcrumbs,
  align = 'center',
  ctaPrimary,
  ctaSecondary,
  offsetTop = 0
}) => {
  const isCenter = align === 'center';
  return (
    <header
      role="banner"
      className="relative w-full text-white"
      style={{
        background: 'linear-gradient(135deg, #2563EB 0%, #22D3EE 55%, #14B8A6 100%)'
      }}
    >
      {/* Spacer para que el gradiente no se oculte tras el header fijo */}
      {offsetTop > 0 && <div style={{ height: offsetTop }} aria-hidden="true" />}
      <div className={clsx('mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24', !isCenter && 'flex justify-start')}>
        <div className={clsx('w-full', isCenter ? 'text-center mx-auto' : 'text-left max-w-3xl')}>          
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className={clsx('mb-6 text-xs md:text-sm font-medium flex flex-wrap gap-2', isCenter && 'justify-center')}>
              {breadcrumbs.map((b, i) => {
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <React.Fragment key={i}>
                    {b.href && !isLast ? (
                      <a href={b.href} className="text-white/80 hover:text-white transition drop-shadow">
                        {b.label}
                      </a>
                    ) : (
                      <span className={clsx('text-white font-semibold drop-shadow', isLast && 'opacity-100')} aria-current={isLast ? 'page' : undefined}>
                        {b.label}
                      </span>
                    )}
                    {!isLast && <span className="text-white/50 select-none" aria-hidden="true">/</span>}
                  </React.Fragment>
                );
              })}
            </nav>
          )}
          <h1 className={clsx('font-extrabold tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]', 'text-4xl md:text-5xl lg:text-6xl leading-tight')}>{title}</h1>
          {subtitle && (
            <p className={clsx('mt-4 text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.4)]', 'text-lg md:text-xl leading-snug', isCenter ? 'mx-auto max-w-2xl' : 'max-w-2xl')}>{subtitle}</p>
          )}
          {(ctaPrimary || ctaSecondary) && (
            <div className={clsx('mt-8 flex flex-wrap gap-4', isCenter ? 'justify-center' : 'justify-start')}>
              {ctaPrimary && (
                <a
                  href={ctaPrimary.href}
                  className="inline-flex items-center justify-center h-11 px-5 rounded-xl font-semibold text-sm bg-white/10 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition backdrop-blur-sm"
                >
                  {ctaPrimary.label}
                </a>
              )}
              {ctaSecondary && (
                <a
                  href={ctaSecondary.href}
                  className="inline-flex items-center justify-center h-11 px-5 rounded-xl font-semibold text-sm border border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition"
                >
                  {ctaSecondary.label}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default GradientHero;
