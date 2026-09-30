import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1920")' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-wide opacity-0 animate-fade-in-up" style={{animationFillMode: 'forwards', animationDelay: '0.2s'}}>
          THE SPICE TABLE
        </h1>
        <h2 className="text-xl md:text-3xl text-cream font-medium mb-8 italic opacity-0 animate-fade-in-up" style={{animationFillMode: 'forwards', animationDelay: '0.4s'}}>
          Good Food. Great Moments.
        </h2>
        <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{animationFillMode: 'forwards', animationDelay: '0.6s'}}>
          Fresh ingredients, bold flavors, and unforgettable dining experiences crafted with passion.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 animate-fade-in-up" style={{animationFillMode: 'forwards', animationDelay: '0.8s'}}>
          <button onClick={() => document.getElementById('menu')?.scrollIntoView({behavior: 'smooth'})} className="btn-primary text-lg w-full sm:w-auto">
            EXPLORE MENU
          </button>
          <button onClick={() => document.getElementById('reservations')?.scrollIntoView({behavior: 'smooth'})} className="btn-secondary border-white text-white hover:border-primary w-full sm:w-auto text-lg">
            RESERVE A TABLE
          </button>
        </div>

        <div className="mt-12 text-white flex flex-col items-center opacity-0 animate-fade-in-up" style={{animationFillMode: 'forwards', animationDelay: '1s'}}>
          <div className="flex space-x-1 mb-2 text-accent">
            {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
          </div>
          <p className="text-sm font-medium">"4.9/5 from 2,000+ happy guests"</p>
          <p className="text-xs text-gray-400 mt-1">(Demo Restaurant Data)</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;