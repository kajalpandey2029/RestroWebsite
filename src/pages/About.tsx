import React from 'react';

const About = () => {
  return (
    <div className="pt-24 pb-20 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-secondary mb-4">Our Story</h1>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Where Fire Meets Flavor</h2>
            <p className="text-textMuted text-lg leading-relaxed mb-6">
              EMBER & SPICE was born from a simple idea — Indian food should feel familiar yet unexpected. We embarked on a journey to redefine contemporary Indian cuisine, blending the rich, deeply rooted traditions of the subcontinent with modern culinary artistry.
            </p>
            <p className="text-textMuted text-lg leading-relaxed">
              Every dish on our menu is a celebration of vibrant spices, seasonal ingredients, and the transformative power of the flame. From our tandoor to your table, we are passionate about crafting moments that linger long after the meal is over.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform translate-x-4 translate-y-4"></div>
            <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800" alt="Restaurant interior" className="relative rounded-2xl shadow-xl w-full h-96 object-cover" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-white p-12 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold font-serif">1</div>
            <h3 className="font-bold text-secondary mb-2 text-xl">Our Philosophy</h3>
            <p className="text-gray-500 text-sm">Authenticity without boundaries. We respect the roots of Indian cuisine while exploring its endless possibilities.</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold font-serif">2</div>
            <h3 className="font-bold text-secondary mb-2 text-xl">Our Kitchen</h3>
            <p className="text-gray-500 text-sm">A symphony of fire and spice, led by visionary chefs who bring decades of experience and passion to the plate.</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold font-serif">3</div>
            <h3 className="font-bold text-secondary mb-2 text-xl">Our Ingredients</h3>
            <p className="text-gray-500 text-sm">We partner with local farmers and artisans to ensure the freshest, highest-quality produce in every bite.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;