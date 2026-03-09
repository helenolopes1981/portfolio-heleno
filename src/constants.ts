import { Service, PortfolioItem, Testimonial } from './types';

export const WHATSAPP_LINK = "https://wa.me/5531988281790";
export const INSTAGRAM_LINK = "https://www.instagram.com/helenolopesfotografo/";

export const SERVICES: Service[] = [
  {
    id: 'casamentos',
    title: 'Casamentos',
    description: 'A celebração do amor capturada com sensibilidade, do making of ao último brinde.',
    icon: 'Heart',
    price: 'Sob consulta'
  },
  {
    id: '15-anos',
    title: 'Festas de 15 Anos',
    description: 'Um marco na vida de toda debutante, registrado com toda a magia e brilho que a data merece.',
    icon: 'Star',
    price: 'A partir de R$ 1.690,00'
  },
  {
    id: 'infantil',
    title: 'Aniversário Infantil',
    description: 'A pureza e a alegria das crianças em registros espontâneos e cheios de vida.',
    icon: 'Baby',
    price: 'A partir de R$ 650,00'
  },
  {
    id: 'gestante',
    title: 'Ensaio de Gestante',
    description: 'A beleza da espera e a conexão única entre mãe e bebê em cenários encantadores.',
    icon: 'Users',
    price: 'Sob consulta'
  },
  {
    id: 'batizados',
    title: 'Batizados',
    description: 'Momentos de fé e união familiar registrados com respeito e delicadeza.',
    icon: 'Cloud',
    price: 'A partir de R$ 450,00'
  },
  {
    id: 'aniversarios',
    title: 'Aniversários em Geral',
    description: 'Celebre a vida! Cobertura completa para festas de todas as idades.',
    icon: 'PartyPopper',
    price: 'Sob consulta'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'Pré-wedding Rafael e Naiara',
    category: 'Pré-wedding',
    location: 'Sítio em Viçosa',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    description: 'Um ensaio romântico ao ar livre, aproveitando a luz dourada e a natureza exuberante de Viçosa.'
  },
  {
    id: '2',
    title: 'Casamento Ana e Pedro',
    category: 'Casamento',
    location: 'Ponte Nova',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    description: 'A emoção do "sim" em uma cerimônia clássica e elegante no coração de Ponte Nova.'
  },
  {
    id: '3',
    title: '15 Anos de Julia',
    category: '15 Anos',
    location: 'Salão Nobre',
    imageUrl: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&w=800&q=80',
    description: 'Uma noite de sonhos e celebração, com registros que capturam toda a alegria da debutante.'
  },
  {
    id: '4',
    title: 'Ensaio Gestante Marina',
    category: 'Gestante',
    location: 'Parque das Palmeiras',
    imageUrl: 'https://images.unsplash.com/photo-1559734887-19742177a883?auto=format&fit=crop&w=800&q=80',
    description: 'A doce espera de Marina em um ensaio leve e natural em meio à natureza.'
  },
  {
    id: '5',
    title: 'Aniversário de 1 Ano do Leo',
    category: 'Infantil',
    location: 'Espaço Kids',
    imageUrl: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&w=800&q=80',
    description: 'Muita diversão e descobertas no primeiro aninho do Leo.'
  },
  {
    id: '6',
    title: 'Batizado da Helena',
    category: 'Batizado',
    location: 'Igreja Matriz',
    imageUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80',
    description: 'Um momento sagrado de bênçãos e amor familiar.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mônica Chaves',
    text: 'Heleno é ótimo super indico simpático e profissional.',
    stars: 5
  },
  {
    id: '2',
    name: 'Josemiguelsouza Souza',
    text: '',
    stars: 5
  },
  {
    id: '3',
    name: 'Vanessa Santos',
    text: '',
    stars: 5,
    response: 'Obg por avaliar nosso trabalho.'
  },
  {
    id: '4',
    name: 'José Renato Abduani',
    text: '',
    stars: 5
  },
  {
    id: '5',
    name: 'Leia Costa',
    text: 'Muito Show!',
    stars: 5
  }
];
