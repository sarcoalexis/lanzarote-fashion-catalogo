
import React, { useState } from 'react';
import { PRODUCTS, Product, Category } from '../types';
import { Search, Filter, ChevronRight } from 'lucide-react';

interface CatalogProps {
  onProductClick: (product: Product) => void;
}

const Catalog: React.FC<CatalogProps> = ({ onProductClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const categories: (Category | 'All')[] = ['All', 'Zapatos', 'Chancletas', 'Sandalias', 'Botas', 'Crocs'];

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full h-full flex flex-col space-y-6 animate-in fade-in duration-700">
      {/* Search Bar */}
      <div className="relative group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600 group-focus-within:text-[#C5A059] transition-colors" size={18} />
        <input 
          type="text" 
          placeholder="Buscar modelos exclusivos..."
          className="w-full bg-[#1A1A1A] border border-neutral-800 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-[#C5A059]/50 transition-all"
        />
      </div>

      {/* Categories Horizontal Scroll */}
      <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-all border flex items-center justify-center min-w-[110px] ${
              selectedCategory === cat 
                ? 'bg-[#C5A059] text-black border-[#C5A059] shadow-[0_0_20px_rgba(197,160,89,0.5)] scale-105' 
                : 'bg-[#8a6d3b] text-black/80 border-[#8a6d3b]/50 hover:bg-[#C5A059]/80'
            }`}
          >
            <span className="mr-[-0.2em]">{cat}</span>
          </button>
        ))}
      </div>

      {/* Grid View */}
      <div className="grid grid-cols-2 gap-4 overflow-y-auto pr-1 scrollbar-hide pb-20">
        {filteredProducts.map(product => (
          <div 
            key={product.id}
            onClick={() => onProductClick(product)}
            className="group cursor-pointer bg-[#111111] rounded-[32px] overflow-hidden border border-neutral-900 hover:border-[#C5A059]/30 transition-all"
          >
            <div className="aspect-square overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <p className="text-[9px] text-[#C5A059] font-bold">${product.price}</p>
              </div>
            </div>
            <div className="p-4 space-y-1">
              <p className="text-[8px] text-[#C5A059] uppercase tracking-[0.2em] font-bold">{product.brand}</p>
              <h3 className="text-xs text-white font-medium truncate">{product.name}</h3>
              <div className="flex items-center justify-between pt-2">
                <p className="text-[9px] text-neutral-500">{product.dozensAvailable} docenas</p>
                <ChevronRight size={14} className="text-neutral-700 group-hover:text-[#C5A059] transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
