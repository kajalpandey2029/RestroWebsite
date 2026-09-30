import React, { useState, useEffect } from 'react';
import { useCart } from '../hooks/useCart';
import { useToast } from '../components/Toast';
import { Search, Info, Plus } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';

import { API_URL } from '../config';

const Menu = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCat, setActiveCat] = useState('ALL');
  const [search, setSearch] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const { addToCart } = useCart();
  const showToast = useToast();

  useEffect(() => {
    fetch(`${API_URL}/api/menu`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setItems(data);
        } else {
          console.error('Menu API returned non-array:', data);
          showToast(data.error || 'Failed to load menu.', 'error');
          setItems([]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        showToast('Failed to load menu. Is backend running?', 'error');
        setLoading(false);
      });
  }, []);

  const categories = ['ALL', 'STARTERS', 'VEGETARIAN', 'NON-VEGETARIAN', 'MAINS', 'BIRYANI', 'BREADS', 'DESSERTS', 'DRINKS'];

  const filtered = items.filter(item => {
    const mCat = activeCat === 'ALL' || item.category === activeCat;
    const nameMatch = (item.name || '').toLowerCase().includes(search.toLowerCase());
    const descMatch = (item.description || '').toLowerCase().includes(search.toLowerCase());
    const mSearch = search === '' ? true : (nameMatch || descMatch);
    const mVeg = vegOnly ? item.isVegetarian === true : true;
    return mCat && mSearch && mVeg;
  });

  const handleAdd = (item: any) => {
    addToCart(item);
    showToast(`${item.name} added to your order.`);
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-secondary mb-4">Our Menu</h2>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6 border-b border-gray-200 pb-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-2xl">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCat === cat ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600 cursor-pointer">
              <input type="checkbox" checked={vegOnly} onChange={e => setVegOnly(e.target.checked)} className="rounded text-primary focus:ring-primary h-4 w-4" />
              Veg Only
            </label>
            <div className="relative flex-grow md:w-64">
              <input 
                type="text" 
                placeholder="Search menu..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(item => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.isVegetarian ? 
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold border border-green-200">VEG</span> : 
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded font-bold border border-red-200">NON-VEG</span>
                    }
                    {item.isSpicy && <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded font-bold border border-orange-200">🌶 {item.spiceLevel}</span>}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-secondary">{item.name}</h3>
                    <span className="text-primary font-bold text-lg">{formatCurrency(item.price)}</span>
                  </div>
                  <p className="text-textMuted text-sm mb-4 flex-grow line-clamp-2">{item.description}</p>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <button className="text-gray-400 hover:text-primary transition-colors flex items-center text-sm font-medium">
                      <Info size={16} className="mr-1" /> Details
                    </button>
                    <button 
                      onClick={() => handleAdd(item)}
                      className="flex items-center text-sm font-bold text-primary hover:text-white hover:bg-primary px-4 py-2 rounded-md border border-primary transition-colors"
                    >
                      <Plus size={16} className="mr-1" /> ADD TO ORDER
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
            <h3 className="text-2xl font-serif text-secondary mb-2">No items found</h3>
            <p className="text-textMuted">Try adjusting your search or filters.</p>
            <button onClick={() => {setSearch(''); setVegOnly(false); setActiveCat('ALL');}} className="mt-4 text-primary font-medium hover:underline">Clear all filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;