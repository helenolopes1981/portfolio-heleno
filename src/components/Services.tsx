import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import * as LucideIcons from 'lucide-react';

const Services = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-gray-soft" aria-label="Serviços de Fotografia">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">O que eu faço</span>
          <h2 className="section-title">Momentos Inesquecíveis <br /> <span className="text-primary italic">que Capturo</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Cada evento é único e merece um olhar atento aos detalhes e às emoções espontâneas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            // @ts-ignore
            const IconComponent = LucideIcons[service.icon];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-medium/50 relative overflow-hidden"
              >
                {/* Decorative Background Icon */}
                <div className="absolute -bottom-6 -right-6 text-gray-soft group-hover:text-primary/5 transition-colors duration-500">
                  {IconComponent && <IconComponent size={120} />}
                </div>

                <div className="relative z-10">
                  <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    {IconComponent && <IconComponent className="text-primary group-hover:text-white transition-colors" size={32} />}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 font-serif group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {service.price && (
                    <div className="pt-6 border-t border-gray-soft">
                      <span className="text-xs text-gray-400 uppercase tracking-widest block mb-1">Investimento</span>
                      <span className="text-lg font-bold text-black">{service.price}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
