import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from './Toast';

import { API_URL } from '../config';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const showToast = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        showToast("You're on the list!");
        setEmail('');
      } else {
        showToast(data.error || 'Failed to subscribe.', 'error');
      }
    } catch (err) {
      showToast('Server error.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-secondary text-white pt-20 pb-10 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-serif font-bold tracking-wider text-accent flex items-center mb-4">
              <span className="text-white mr-2">EMBER</span>&<span className="text-white ml-2">SPICE</span>
            </Link>
            <p className="text-gray-400 italic mb-8 font-serif">Where Fire Meets Flavor</p>
            <div className="flex space-x-4">
              {['Instagram', 'Facebook', 'X'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-sm font-medium border border-white/5">
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-sm tracking-[0.2em] uppercase text-gray-400">Quick Links</h3>
            <ul className="space-y-4 text-gray-300">
              {['Menu', 'About', 'Reservations', 'Contact'].map(link => (
                <li key={link}><Link to={`/${link.toLowerCase()}`} className="hover:text-accent transition-colors block">{link}</Link></li>
              ))}
              <li><Link to="/order" className="text-primary hover:text-white transition-colors font-medium block">Order Online</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-sm tracking-[0.2em] uppercase text-gray-400">Contact Details</h3>
            <ul className="space-y-4 text-gray-300">
              <li>123 Civil Lines<br />Prayagraj, UP, India</li>
              <li><a href="tel:+919876543210" className="hover:text-accent transition-colors">+91 98765 43210</a></li>
              <li><a href="mailto:hello@emberandspice.com" className="hover:text-accent transition-colors">hello@emberandspice.com</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-6 text-sm tracking-[0.2em] uppercase text-gray-400">Newsletter</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email address" 
                required 
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent"
              />
              <button type="submit" disabled={loading} className="w-full bg-accent text-white font-medium py-3 rounded-md hover:bg-opacity-90 transition-colors uppercase tracking-wider text-sm">
                {loading ? 'JOINING...' : 'JOIN THE TABLE'}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center md:text-left text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 Ember & Spice. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;