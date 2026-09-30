import React from 'react';
import { MapPin } from 'lucide-react';

const Location = () => {
  return (
    <div className="py-0 relative">
      <div className="h-[400px] w-full bg-gray-200 relative">
        {/* Fake Map Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1920')] bg-cover bg-center grayscale opacity-50"></div>
        
        {/* Pin */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2 shadow-xl animate-bounce">
            <MapPin className="text-white" size={32} />
          </div>
          <div className="bg-white px-6 py-3 rounded-lg shadow-xl inline-block border border-gray-100">
            <p className="font-bold text-charcoal">The Spice Table</p>
            <p className="text-sm text-gray-500">Civil Lines, Prayagraj</p>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a href="#" className="bg-white/90 backdrop-blur text-charcoal font-bold px-6 py-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-colors border border-gray-200 text-sm tracking-wider">
            OPEN IN GOOGLE MAPS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Location;