import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const Navbar = ({ onCartClick }: { onCartClick: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Contact', path: '/contact' },
  ];

  const isDarkNav = scrolled || location.pathname !== '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isDarkNav ? 'bg-secondary text-white shadow-lg py-4' : 'bg-transparent text-white py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-wider text-accent flex items-center">
          <span className="text-white mr-2">EMBER</span>&<span className="text-white ml-2">SPICE</span>
        </Link>
        
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`font-medium text-sm tracking-wide transition-colors ${location.pathname === link.path ? 'text-accent' : 'hover:text-accent'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative hover:text-accent transition-colors" onClick={onCartClick} aria-label="Open Cart">
              <ShoppingBag size={24} />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </button>
            <Link to="/order" className="btn-primary py-2 px-5 text-sm">ORDER ONLINE</Link>
          </div>
        </div>

        <div className="flex items-center space-x-4 lg:hidden">
          <button className="relative" onClick={onCartClick}>
            <ShoppingBag size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-secondary shadow-lg flex flex-col py-4 border-t border-gray-800">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="py-3 px-6 text-left font-medium text-white hover:bg-gray-800 hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link to="/order" onClick={() => setMobileOpen(false)} className="block w-full text-center btn-primary">ORDER ONLINE</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;