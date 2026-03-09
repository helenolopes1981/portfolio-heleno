import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO } from '../constants';
import { X, Maximize2, MapPin } from 'lucide-react';
import { PortfolioItem } from '../types';

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white" aria-label="Portfólio de Casos e Projetos">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Meu Portfólio</span>
          <h2 className="section-title">Minha Arte em Imagens: <br /> <span className="text-primary italic">Histórias Reais</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Cada click é uma escolha deliberada para capturar a emoção e a verdade de cada momento.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${
                index % 4 === 0 ? 'md:row-span-2' : ''
              }`}
              onClick={() => setSelectedItem(item)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-white text-2xl font-bold mb-2 font-serif">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <MapPin size={14} className="text-primary" />
                  <span>{item.location}</span>
                </div>
                
                <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                  <Maximize2 size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
            >
              <div 
                className="absolute inset-0 bg-black/95 backdrop-blur-xl" 
                onClick={() => setSelectedItem(null)} 
              />
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
              >
                <button
                  className="absolute top-6 right-6 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-primary transition-colors"
                  onClick={() => setSelectedItem(null)}
                >
                  <X size={24} />
                </button>

                <div className="lg:w-2/3 bg-black flex items-center justify-center">
                  <img 
                    src={selectedItem.imageUrl} 
                    alt={selectedItem.title} 
                    className="max-w-full max-h-[70vh] lg:max-h-[85vh] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="lg:w-1/3 p-10 md:p-16 flex flex-col justify-center">
                  <span className="text-primary font-bold text-sm uppercase tracking-widest mb-4 block">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 font-serif leading-tight">
                    {selectedItem.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 mb-8">
                    <MapPin size={18} className="text-primary" />
                    <span className="text-lg">{selectedItem.location}</span>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-10">
                    {selectedItem.description}
                  </p>
                  
                  <a 
                    href="https://wa.me/5531988281790" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary text-center"
                  >
                    Quero um ensaio assim
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
