import React, { useEffect, useState } from 'react';
import { X, Heart, Minus, Plus } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';

const FoodModal = ({ item, onClose, cartHook, favHook }: any) => {
  const [quantity, setQuantity] = useState(1);
  const isFav = favHook.isFavorite(item.id);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleAdd = () => {
    cartHook.addToCart(item, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-scale-in">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-white/50 backdrop-blur rounded-full p-2 hover:bg-white transition-colors" aria-label="Close">
          <X size={24} className="text-charcoal" />
        </button>
        
        <div className="md:w-1/2 h-64 md:h-auto relative">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </div>
        
        <div className="md:w-1/2 flex flex-col h-full max-h-[50vh] md:max-h-none overflow-y-auto p-6 md:p-8">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-charcoal pr-10">{item.name}</h2>
            <button 
              onClick={() => favHook.toggleFavorite(item.id)}
              className="p-2 -mr-2 text-gray-400 hover:text-primary transition-colors"
            >
              <Heart size={24} className={isFav ? 'fill-primary text-primary' : ''} />
            </button>
          </div>
          
          <div className="text-2xl font-bold text-primary mb-4">{formatCurrency(item.price)}</div>
          
          <p className="text-textMuted text-base mb-6 leading-relaxed">{item.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
            <div>
              <span className="block text-gray-500 font-medium mb-1">Prep Time</span>
              <span className="font-semibold text-charcoal">{item.prepTime}</span>
            </div>
            <div>
              <span className="block text-gray-500 font-medium mb-1">Rating</span>
              <span className="font-semibold text-charcoal flex items-center">
                <span className="text-accent mr-1">★</span> {item.rating}
              </span>
            </div>
          </div>
          
          <div className="mb-8">
            <span className="block text-gray-500 font-medium mb-2 text-sm">Ingredients</span>
            <div className="flex flex-wrap gap-2">
              {item.ingredients.map((ing: string, i: number) => (
                <span key={i} className="bg-gray-100 text-charcoal px-3 py-1 rounded-full text-xs font-medium">
                  {ing}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 text-gray-500 hover:bg-gray-50 rounded-l-md transition-colors"><Minus size={18} /></button>
              <span className="w-10 text-center font-bold text-charcoal">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-3 text-gray-500 hover:bg-gray-50 rounded-r-md transition-colors"><Plus size={18} /></button>
            </div>
            <button onClick={handleAdd} className="flex-1 btn-primary py-3">
              ADD TO CART - {formatCurrency(item.price * quantity)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodModal;