import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-white" aria-label="Sobre Heleno Lopes">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=800&q=80" 
                alt="Retrato de Heleno Lopes" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full -z-10 blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-primary/30 rounded-tl-3xl" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Conheça o Fotógrafo</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              A Paixão Por Trás <br /> <span className="text-primary italic">da Lente</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Olá! Eu sou Heleno Lopes. Mais do que um fotógrafo, sou um contador de histórias visuais. Utilizo meu próprio nome como marca porque acredito que a fotografia é, acima de tudo, uma conexão entre pessoas.
              </p>
              <p>
                Meu atendimento é pessoal, próximo e acolhedor. Não vejo meus clientes apenas como contratos, mas como protagonistas de momentos que merecem ser eternizados com o máximo de dedicação e sensibilidade.
              </p>
              <p>
                Com expertise em eventos sociais em Ponte Nova e região, minha missão é capturar a essência de cada celebração, entregando não apenas fotos, mas memórias que farão você reviver cada emoção por gerações.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-3xl font-bold text-black mb-1">10+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Anos de Experiência</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-black mb-1">500+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Histórias Contadas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
