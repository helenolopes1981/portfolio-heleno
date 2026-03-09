export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  stars: number;
  response?: string;
}
