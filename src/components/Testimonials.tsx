import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-gray-soft" aria-label="Depoimentos de Clientes">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Vozes de Clientes</span>
          <h2 className="section-title">Quem Confia em <br /> <span className="text-primary italic">Meu Olhar</span></h2>
          <div className="flex flex-col items-center gap-2 mb-6">
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="text-lg font-bold text-black">
              Heleno Lopes Fotógrafo: 5,0 <span className="text-gray-400 font-normal text-sm ml-2">(5 avaliações no Google)</span>
            </p>
            <p className="text-sm text-gray-500">Fotógrafo em Ponte Nova, Minas Gerais</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-medium/50 flex flex-col relative group hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote size={48} />
              </div>

              <div className="flex items-center gap-1 text-yellow-500 mb-6">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className={`text-gray-600 italic leading-relaxed mb-8 flex-grow ${!testimonial.text ? 'text-gray-300' : ''}`}>
                {testimonial.text || "Avaliação de 5 estrelas sem comentário."}
              </p>

              <div className="pt-6 border-t border-gray-soft">
                <h4 className="font-bold text-black text-lg font-serif">{testimonial.name}</h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Cliente Satisfeito</p>
              </div>

              {testimonial.response && (
                <div className="mt-6 bg-gray-soft p-4 rounded-xl border-l-4 border-primary">
                  <p className="text-xs font-bold text-black mb-1">Resposta do Proprietário:</p>
                  <p className="text-xs text-gray-600 italic">"{testimonial.response}"</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://www.google.com/search?q=heleno+lopes+fotografo+ponte+nova" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary font-bold hover:underline inline-flex items-center gap-2 text-lg"
          >
            Ver mais avaliações no Google My Business
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
