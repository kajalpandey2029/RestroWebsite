import React from 'react';
import { Heart, Plus } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';

const MenuCard = ({ item, onClick, favHook, cartHook }: any) => {
  const isFav = favHook.isFavorite(item.id);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer flex flex-col h-full" onClick={onClick}>
      <div className="relative h-56 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <button 
          onClick={(e) => { e.stopPropagation(); favHook.toggleFavorite(item.id); }}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Toggle Favorite"
        >
          <Heart size={20} className={isFav ? 'fill-primary text-primary' : 'text-gray-400'} />
        </button>
        <div className="absolute top-3 left-3 flex space-x-2">
          {item.isVegetarian ? (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold border border-green-200">VEG</span>
          ) : (
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded font-bold border border-red-200">NON-VEG</span>
          )}
          {item.isSpicy && <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded font-bold border border-orange-200">SPICY</span>}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold text-charcoal">{item.name}</h3>
          <span className="text-primary font-bold text-lg">{formatCurrency(item.price)}</span>
        </div>
        <p className="text-textMuted text-sm mb-4 flex-grow line-clamp-2">{item.description}</p>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm font-medium text-gray-500">
            <span className="text-accent mr-1">★</span> {item.rating}
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); cartHook.addToCart(item); }}
            className="flex items-center text-sm font-bold text-primary hover:text-white hover:bg-primary px-3 py-1.5 rounded transition-colors"
          >
            <Plus size={16} className="mr-1" /> ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;