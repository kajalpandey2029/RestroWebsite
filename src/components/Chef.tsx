import React from 'react';

const Chef = () => {
  return (
    <div className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-full transform -translate-x-10 translate-y-10 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=800" 
              alt="Chef Aarav Mehta" 
              className="rounded-xl shadow-xl w-full h-[600px] object-cover"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Meet Our Chef</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Chef Aarav Mehta</h3>
            <p className="text-textMuted text-lg mb-8 leading-relaxed">
              "Passionate about combining traditional Indian flavors with contemporary culinary techniques. Every dish tells a story of our heritage, crafted with modern precision and the finest seasonal ingredients."
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 text-primary font-bold text-xl">15+</div>
                <span className="text-charcoal font-medium text-lg">Years Experience</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 text-primary font-bold text-xl">✨</div>
                <span className="text-charcoal font-medium text-lg">Modern Indian Cuisine</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 text-primary font-bold text-xl">🍽️</div>
                <span className="text-charcoal font-medium text-lg">Signature Tasting Menus</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-8">(Demo Content)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;