import React, { useState } from 'react';
import { menuItems } from '../data/menu';
import MenuCard from './MenuCard';
import FoodModal from './FoodModal';
import { useFavorites } from '../hooks/useFavorites';
import { Search } from 'lucide-react';

const categories = ['ALL', 'STARTERS', 'MAIN COURSE', 'PIZZA', 'BURGERS', 'PASTA', 'DESSERTS', 'DRINKS'];

const Menu = ({ cartHook }: any) => {
  const [activeCat, setActiveCat] = useState('ALL');
  const [search, setSearch] = useState('');
  const [selectedFood, setSelectedFood] = useState<any>(null);
  const favHook = useFavorites();

  const filteredItems = menuItems.filter(item => {
    const matchesCat = activeCat === 'ALL' || item.category === activeCat;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                          item.description.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Explore Our Menu</h2>
          <p className="text-lg text-textMuted italic">Something delicious for every craving.</p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCat === cat ? 'bg-primary text-white' : 'bg-gray-100 text-textMain hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Search dishes..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-charcoal text-sm">Clear</button>
            )}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map(item => (
              <MenuCard 
                key={item.id} 
                item={item} 
                onClick={() => setSelectedFood(item)}
                favHook={favHook}
                cartHook={cartHook}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-textMuted text-lg">
            No dishes found.
          </div>
        )}
      </div>

      {selectedFood && (
        <FoodModal 
          item={selectedFood} 
          onClose={() => setSelectedFood(null)} 
          cartHook={cartHook}
          favHook={favHook}
        />
      )}
    </div>
  );
};

export default Menu;