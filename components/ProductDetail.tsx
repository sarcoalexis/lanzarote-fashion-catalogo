
import React from 'react';
import { Product } from '../types';
import { ArrowLeft, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';
import Button from './Button';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  return (
    <div className="w-full h-full flex flex-col animate-in slide-in-from-right-10 duration-500 overflow-y-auto scrollbar-hide pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button 
          onClick={onBack}
          className="p-3 rounded-full bg-[#1A1A1A] border border-neutral-800 text-white hover:border-[#C5A059] transition-all"
        >
          <ArrowLeft size={18} />
        </button>
        <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C5A059]">Detalle de Producto</h2>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Image Section */}
      <div className="relative w-full aspect-square rounded-[40px] overflow-hidden border border-neutral-800 mb-8 shadow-2xl">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/40 backdrop-blur-xl rounded-[32px] border border-white/10">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] text-[#C5A059] font-bold uppercase tracking-[0.2em] mb-1">{product.brand}</p>
              <h1 className="serif text-2xl text-white font-bold">{product.name}</h1>
            </div>
            <p className="text-xl text-white font-light">${product.price}</p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="space-y-8 px-2">
        <div className="space-y-3">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">Descripción Técnica</h3>
          <p className="text-sm text-neutral-300 leading-relaxed font-light">
            {product.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-3xl bg-[#111111] border border-neutral-900 space-y-2">
            <p className="text-[9px] text-neutral-500 uppercase tracking-widest">Disponibilidad</p>
            <p className="text-lg text-white font-medium">{product.dozensAvailable} <span className="text-xs text-neutral-500">Docenas</span></p>
          </div>
          <div className="p-4 rounded-3xl bg-[#111111] border border-neutral-900 space-y-2">
            <p className="text-[9px] text-neutral-500 uppercase tracking-widest">Categoría</p>
            <p className="text-lg text-white font-medium">{product.category}</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">Especificaciones</h3>
          <div className="flex flex-wrap gap-2">
            {product.techSpecs.map(spec => (
              <span key={spec} className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-400 uppercase tracking-wider">
                {spec}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <div className="flex items-center space-x-3 text-neutral-500">
            <ShieldCheck size={16} className="text-[#C5A059]" />
            <p className="text-[10px] uppercase tracking-widest">Garantía de Calidad Lanzarote</p>
          </div>
          <div className="flex items-center space-x-3 text-neutral-500">
            <Truck size={16} className="text-[#C5A059]" />
            <p className="text-[10px] uppercase tracking-widest">Envío Express Asegurado</p>
          </div>
        </div>

        <div className="pt-4">
          <Button fullWidth className="py-5">
            <div className="flex items-center justify-center space-x-3">
              <ShoppingBag size={18} />
              <span>Solicitar Pedido</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
