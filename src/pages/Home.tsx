import React from 'react';
import { Navbar } from '@/components/nav/Navbar';
import { Hero } from '@/components/hero/Hero';
import ServicesSection from '@/components/services/Services';
import ReelShowcase from '@/components/work/ReelShowcase';
import { About } from '@/components/about/About';
import StripeCTA from '@/components/cta/StripeCTA';
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
      <SEO title="Vizion | Agencia Audiovisual" description="Agencia audiovisual obsesionada con las buenas historias." />
      <Navbar />
      <main className="w-full">
        <Hero />
        {/* Contenedor blanco continuo para evitar bandas negras entre bloques */}
        <div className="bg-white text-black">
          <div className="space-y-40 md:space-y-48">
            <ReelShowcase />
            <About />
            <ServicesSection />
            <StripeCTA />
            <Section id="contacto" variant="light" className="px-0 !py-0">
              <div className="grid grid-cols-1 md:grid-cols-2 w-full py-20 md:py-28">
                <div className="px-6 md:px-12 lg:px-20 py-4">
                  <Heading level={2} className="text-5xl md:text-7xl font-extrabold tracking-tight w-full">Contacto</Heading>
                  <p className="mt-6 text-base-black/70 text-lg max-w-none">Contanos de tu proyecto y volvemos a la velocidad de la luz.</p>
                  <div className="mt-10">
                    <ContactForm />
                  </div>
                </div>
                <div className="w-full h-full flex items-stretch">
                  <MapEmbed />
                </div>
              </div>
            </Section>
          </div>
          <Footer />
        </div>
      </main>
      
    </>
  );
};

export default Home;
