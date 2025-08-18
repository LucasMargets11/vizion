import React from 'react';
import { Navbar } from '@/components/nav/Navbar';
import { Hero } from '@/components/hero/Hero';
import { Services } from '@/components/features/Services';
import ReelShowcase from '@/components/work/ReelShowcase';
import { About } from '@/components/about/About';
import { CTA } from '@/components/cta/CTA';
import { ContactForm } from '@/components/contact/ContactForm';
import { MapEmbed } from '@/components/contact/MapEmbed';
import { Footer } from '@/components/footer/Footer';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { LogoCloud } from '@/components/ui/LogoCloud';
import { SEO } from '@/components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO title="Lumiax | Agencia Audiovisual" description="Agencia audiovisual obsesionada con las buenas historias." />
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Services />
        <ReelShowcase />
        <About />
        <CTA />
        <Section id="contacto">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <Heading level={2}>Contacto</Heading>
              <p className="mt-4 text-slate-300 text-sm max-w-md">Contanos de tu proyecto y volvemos a la velocidad de la luz.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
            <div className="space-y-6">
              <MapEmbed />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
