import React from 'react';

const About = () => {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">The Spice Table was created around a simple idea — great food brings people together.</h3>
            <p className="text-textMuted text-lg mb-6 leading-relaxed">
              We source the freshest ingredients to bring you traditional Indian flavors with a modern twist. Every dish is crafted with passion by our expert chefs to deliver an unforgettable dining experience in a warm, family-friendly atmosphere.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="text-center md:text-left">
                <p className="text-4xl font-serif text-primary font-bold mb-1">10+</p>
                <p className="text-sm text-textMuted uppercase tracking-wider font-semibold">Years of Experience</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl font-serif text-primary font-bold mb-1">50+</p>
                <p className="text-sm text-textMuted uppercase tracking-wider font-semibold">Signature Dishes</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl font-serif text-primary font-bold mb-1">25K+</p>
                <p className="text-sm text-textMuted uppercase tracking-wider font-semibold">Happy Guests</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-4xl font-serif text-primary font-bold mb-1">4.9</p>
                <p className="text-sm text-textMuted uppercase tracking-wider font-semibold">Average Rating</p>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-6">(Demo Statistics)</p>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=800" 
              alt="Restaurant Interior" 
              className="rounded-xl shadow-2xl object-cover h-[500px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl hidden md:block">
              <p className="font-serif text-xl font-bold italic text-charcoal">"A culinary journey like no other."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;