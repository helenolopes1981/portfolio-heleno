import React from 'react';
import { motion } from 'motion/react';
import { WHATSAPP_LINK } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      role="region" 
      aria-label="Introdução e Chamada Principal"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80" 
          alt="Casal em momento romântico" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            Heleno Lopes: <span className="text-primary italic">Sua História</span>, Meu Click.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Capturando emoções em Ponte Nova e região. Transformando momentos efêmeros em memórias eternas com sensibilidade e arte.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-4 w-full sm:w-auto"
            >
              Orçamento via WhatsApp
            </a>
            <a 
              href="#portfolio" 
              className="px-10 py-4 rounded-full border border-white/30 hover:bg-white/10 transition-all text-lg w-full sm:w-auto backdrop-blur-sm"
            >
              Ver Portfólio
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
