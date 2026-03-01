
export type AuthView = 'login' | 'register' | 'recovery' | 'catalog' | 'detail';

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export type Category = 'Zapatos' | 'Chancletas' | 'Sandalias' | 'Botas' | 'Crocs';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  dozensAvailable: number;
  techSpecs: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Royal Oxford Gold',
    brand: 'Lanzarote Signature',
    category: 'Zapatos',
    price: 299,
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=800',
    description: 'Calzado de gala confeccionado en piel de becerro con acabados a mano y detalles en hilo de oro.',
    dozensAvailable: 12,
    techSpecs: ['Piel Genuina', 'Suela de Cuero', 'Costura Goodyear', 'Plantilla Ergonómica']
  },
  {
    id: '2',
    name: 'Azure Slide',
    brand: 'Lanzarote Sport',
    category: 'Chancletas',
    price: 85,
    image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&q=80&w=800',
    description: 'Comodidad absoluta con polímeros de alta densidad y diseño anatómico para el descanso premium.',
    dozensAvailable: 45,
    techSpecs: ['EVA Inyectada', 'Antideslizante', 'Resistente al Agua', 'Ultra Ligera']
  },
  {
    id: '3',
    name: 'Desert Nomad',
    brand: 'Lanzarote Adventure',
    category: 'Botas',
    price: 350,
    image: 'https://images.unsplash.com/photo-1520639889313-7272a74b1c73?auto=format&fit=crop&q=80&w=800',
    description: 'Botas de alta resistencia con protección reforzada y estilo urbano sofisticado.',
    dozensAvailable: 8,
    techSpecs: ['Nubuck Premium', 'Membrana Impermeable', 'Suela Vibram', 'Cordones de Kevlar']
  },
  {
    id: '4',
    name: 'Velvet Sandal',
    brand: 'Lanzarote Boutique',
    category: 'Sandalias',
    price: 120,
    image: 'https://images.unsplash.com/photo-1562273103-912067decb69?auto=format&fit=crop&q=80&w=800',
    description: 'Elegancia veraniega con tiras de terciopelo y base de corcho natural prensado.',
    dozensAvailable: 24,
    techSpecs: ['Corcho Natural', 'Terciopelo Italiano', 'Hebillas de Latón', 'Suela de Goma']
  },
  {
    id: '5',
    name: 'Elite Clog',
    brand: 'Lanzarote Comfort',
    category: 'Crocs',
    price: 95,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800',
    description: 'La reinvención del confort con ventilación estratégica y materiales de grado médico.',
    dozensAvailable: 60,
    techSpecs: ['Croslite Premium', 'Ventilación 360', 'Fácil Limpieza', 'Soporte de Arco']
  }
];
