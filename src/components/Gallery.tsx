import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { id: 1, category: 'FOOD', src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80&w=800' },
  { id: 2, category: 'INTERIOR', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800' },
  { id: 3, category: 'FOOD', src: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800' },
  { id: 4, category: 'CHEF', src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800' },
  { id: 5, category: 'DESSERTS', src: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800' },
  { id: 6, category: 'INTERIOR', src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800' },
];

const Gallery = () => {
  const [activeCat, setActiveCat] = useState('ALL');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const categories = ['ALL', 'FOOD', 'INTERIOR', 'CHEF', 'DESSERTS'];
  
  const filtered = activeCat === 'ALL' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCat);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const nextImg = (e: any) => { e.stopPropagation(); setLightbox(prev => prev !== null ? (prev + 1) % filtered.length : null); };
  const prevImg = (e: any) => { e.stopPropagation(); setLightbox(prev => prev !== null ? (prev - 1 + filtered.length) % filtered.length : null); };

  return (
    <div className="py-20 bg-surface">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Gallery</h2>
          <p className="text-lg text-textMuted italic">A glimpse into our world.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((img, idx) => (
            <div key={img.id} className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group" onClick={() => openLightbox(idx)}>
              <img src={img.src} alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium uppercase tracking-wider">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button className="absolute top-4 right-4 text-white hover:text-primary transition-colors" onClick={closeLightbox}><X size={32} /></button>
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors p-2" onClick={prevImg}><ChevronLeft size={48} /></button>
          
          <img src={filtered[lightbox].src} alt="Enlarged" className="max-w-full max-h-[85vh] object-contain" onClick={e => e.stopPropagation()} />
          
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors p-2" onClick={nextImg}><ChevronRight size={48} /></button>
        </div>
      )}
    </div>
  );
};

export default Gallery;