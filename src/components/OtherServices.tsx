import React from 'react';
import { motion } from 'motion/react';
import { Video, Smartphone, Zap } from 'lucide-react';

const OtherServices = () => {
  return (
    <section className="py-24 md:py-32 bg-white" aria-label="Serviços Adicionais e Inovação">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Inovação e Tecnologia</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight font-serif">
              Além da Fotografia: <br /> <span className="text-primary italic">Inovação para Sua História</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Acompanho a evolução digital para oferecer soluções modernas que complementam o registro fotográfico tradicional, garantindo que sua história seja contada em todos os formatos.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                  <Video className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 font-serif">Storymaker para Casamentos</h4>
                  <p className="text-gray-500">
                    Cobertura em tempo real para as redes sociais. Parte dos stories são publicados no dia do evento, e o restante é editado com carinho depois, incluindo Reels emocionantes.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                  <Smartphone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 font-serif">Estratégia Digital</h4>
                  <p className="text-gray-500">
                    Utilizo as melhores ferramentas de comunicação para garantir um atendimento ágil, moderno e eficiente, facilitando cada etapa do nosso contato.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80" 
                alt="Equipamento fotográfico moderno" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-6 rounded-full text-white">
                  <Zap size={40} className="fill-white" />
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-2xl shadow-xl max-w-[200px] hidden md:block">
              <p className="text-sm font-bold uppercase tracking-widest mb-2">Diferencial</p>
              <p className="text-lg font-serif italic">"Sempre um passo à frente para registrar o seu melhor."</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
