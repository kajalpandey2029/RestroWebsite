import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsOpen(hour >= 11 && hour < 23);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=1920")' }}>
          <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 tracking-widest uppercase opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <span className="text-accent">Ember</span> & Spice
          </h1>
          <h2 className="text-xl md:text-3xl text-gray-300 font-serif italic mb-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Where Fire Meets Flavor
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            Experience contemporary Indian cuisine crafted with bold spices, seasonal ingredients, and a passion for the art of cooking.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <Link to="/reservations" className="btn-accent w-full sm:w-auto tracking-wide">RESERVE A TABLE</Link>
            <Link to="/menu" className="btn-secondary border-white text-white hover:border-accent hover:bg-accent hover:text-white w-full sm:w-auto tracking-wide">EXPLORE MENU</Link>
          </div>
        </div>
      </section>

      {/* Status */}
      <section className="bg-earthyBrown py-6 text-center text-white">
        <div className="flex items-center justify-center space-x-3 text-sm tracking-widest uppercase font-medium">
          <span className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
          <span>{isOpen ? 'OPEN NOW' : 'CLOSED NOW'}</span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-400">Today 11:30 AM – 11:00 PM</span>
        </div>
      </section>

      {/* Feature */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">Discover</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-secondary mb-6">Chef's Selection</h3>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="text-center">
            <Link to="/menu" className="btn-primary inline-block">VIEW FULL MENU</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;