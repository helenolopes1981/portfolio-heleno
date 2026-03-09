import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, ShieldCheck, CreditCard } from 'lucide-react';

const WorkValues = () => {
  const values = [
    {
      icon: CheckCircle2,
      title: 'Todas as Fotos',
      text: 'Não trabalho com limites. Você recebe todas as fotos boas tiradas no evento, sem custos extras por foto.'
    },
    {
      icon: Clock,
      title: 'Entrega Rápida',
      text: 'Prazo de entrega de até 20 dias úteis. Suas memórias não ficam esquecidas na gaveta.'
    },
    {
      icon: ShieldCheck,
      title: 'Backup Seguro',
      text: 'Suas fotos são guardadas por 6 meses em nosso backup, garantindo segurança total.'
    },
    {
      icon: CreditCard,
      title: 'Pagamento Facilitado',
      text: 'Parcelamento no cartão em até 10x para que você possa investir no registro dos seus sonhos.'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-black text-white" aria-label="Modelo de Trabalho e Valores">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Como eu trabalho</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight font-serif">
              Transparência e Dedicação <br /> <span className="text-primary italic">em Cada Click</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              Meu compromisso é com a sua satisfação e com a verdade do registro. Por isso, adoto um modelo de trabalho transparente, focado no valor do serviço e na entrega completa da experiência.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((item, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center">
                    <item.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="text-xl font-bold font-serif">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-dark p-10 md:p-16 rounded-3xl border border-white/10 relative z-10">
              <h3 className="text-2xl font-bold mb-8 font-serif text-center">Entrega Padrão</h3>
              <ul className="space-y-6">
                {[
                  'Todas as fotos editadas (cor e iluminação)',
                  'Entrega em Pendrive personalizado',
                  'Link do álbum no Google Fotos para compartilhar',
                  'Atendimento humanizado e personalizado',
                  'Storymaker incluso (em casamentos)'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300">
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 pt-8 border-t border-white/10 text-center">
                <p className="text-gray-400 text-sm italic">
                  "Não vendo pacotes, entrego histórias completas."
                </p>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[120px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkValues;
