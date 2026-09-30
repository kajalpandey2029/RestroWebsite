import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { id: 1, category: 'FOOD', src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'INTERIOR', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'FOOD', src: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'CHEF', src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'DINING', src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'FOOD', src: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=800' },
];

const Gallery = () => {
  const [activeCat, setActiveCat] = useState('ALL');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const categories = ['ALL', 'FOOD', 'INTERIOR', 'CHEF', 'DINING'];
  
  const filtered = activeCat === 'ALL' ? galleryImages : galleryImages.filter(img => img.category === activeCat);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-secondary mb-4">Gallery</h1>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCat === cat ? 'bg-secondary text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((img, idx) => (
            <div key={img.id} className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group shadow-sm" onClick={() => setLightbox(idx)}>
              <img src={img.src} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-secondary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium uppercase tracking-wider text-sm border-b-2 border-accent pb-1">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white hover:text-accent transition-colors z-10 p-2" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors p-2 z-10" 
            onClick={(e) => { e.stopPropagation(); setLightbox(prev => prev !== null ? (prev - 1 + filtered.length) % filtered.length : null); }}>
            <ChevronLeft size={48} />
          </button>
          
          <img src={filtered[lightbox].src} alt="Enlarged" className="max-w-full max-h-[85vh] object-contain animate-scale-in shadow-2xl" onClick={e => e.stopPropagation()} />
          
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors p-2 z-10" 
            onClick={(e) => { e.stopPropagation(); setLightbox(prev => prev !== null ? (prev + 1) % filtered.length : null); }}>
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;