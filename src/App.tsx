import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WorkValues from './components/WorkValues';
import Testimonials from './components/Testimonials';
import OtherServices from './components/OtherServices';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WorkValues />
        <Testimonials />
        <OtherServices />
        
        {/* Final CTA Section */}
        <section id="contato" className="py-24 md:py-32 bg-primary text-white overflow-hidden relative">
          <div className="container-custom text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif">
                Vamos eternizar sua <br /> <span className="italic">próxima história?</span>
              </h2>
              <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
                Estou pronto para ouvir seus sonhos e transformar cada detalhe em uma memória inesquecível.
              </p>
              <a 
                href="https://wa.me/5531988281790" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary px-12 py-5 rounded-full font-bold text-xl hover:bg-black hover:text-white transition-all shadow-2xl hover:scale-105 active:scale-95 inline-block"
              >
                Solicitar Orçamento Personalizado
              </a>
            </motion.div>
          </div>
          
          {/* Decorative Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif font-bold text-white/5 whitespace-nowrap pointer-events-none select-none">
            HELENO LOPES
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

