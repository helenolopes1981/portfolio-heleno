import React from 'react';
import { Instagram, MapPin, Camera, Heart } from 'lucide-react';
import { INSTAGRAM_LINK, WHATSAPP_LINK } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 md:py-24 border-t border-white/10">
      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
        {/* Brand & Social */}
        <div className="flex flex-col gap-6">
          <a href="/" className="flex items-center gap-3 group">
            <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Camera className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight">
              Heleno Lopes <span className="text-primary">Fotógrafo</span>
            </span>
          </a>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Transformando momentos efêmeros em memórias eternas com sensibilidade e arte em Ponte Nova e região.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/20 hover:bg-primary hover:border-primary transition-all group"
              aria-label="Instagram de Heleno Lopes"
            >
              <Instagram size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-white/20 hover:bg-primary hover:border-primary transition-all group"
              aria-label="WhatsApp de Heleno Lopes"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5 group-hover:scale-110 transition-transform"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold font-serif">Navegação</h3>
          <ul className="flex flex-col gap-3">
            {['Sobre', 'Serviços', 'Portfólio', 'Depoimentos', 'Contato'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Location & Contact */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold font-serif">Localização</h3>
          <div className="flex items-start gap-3 text-gray-400">
            <MapPin size={20} className="text-primary shrink-0" />
            <p className="text-sm">Ponte Nova, Minas Gerais e Região.</p>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Atendimento personalizado e humanizado para registrar sua história.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-custom mt-16 md:mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-gray-500 text-xs">
          © {currentYear} Heleno Lopes Fotógrafo. Todos os direitos reservados.
        </p>
        <p className="text-gray-500 text-xs flex items-center gap-1">
          Feito com <Heart size={12} className="text-primary fill-primary" /> para eternizar momentos.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
