import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../components/Toast';

import { API_URL } from '../config';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const showToast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        showToast('Message sent successfully.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        showToast('Failed to send message.', 'error');
      }
    } catch (err) {
      showToast('Server error.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-0 bg-background min-h-screen flex flex-col">
      <div className="container mx-auto px-4 md:px-8 mb-20 flex-grow">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-secondary mb-4">Contact Us</h1>
          <div className="w-16 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/3 space-y-10">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary mr-4 shrink-0 shadow-sm border border-gray-100">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary mb-2 font-serif">Address</h4>
                <p className="text-gray-600 leading-relaxed">123 Civil Lines<br />Prayagraj, Uttar Pradesh<br />India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary mr-4 shrink-0 shadow-sm border border-gray-100">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary mb-2 font-serif">Phone</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary mr-4 shrink-0 shadow-sm border border-gray-100">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-secondary mb-2 font-serif">Email</h4>
                <p className="text-gray-600">hello@emberandspice.com</p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <h4 className="text-xl font-bold text-secondary mb-4 font-serif">Opening Hours</h4>
              <div className="space-y-2 text-gray-600">
                <p className="flex justify-between"><span>Mon – Thu</span> <span>11:30 AM – 10:30 PM</span></p>
                <p className="flex justify-between"><span>Fri – Sun</span> <span>11:30 AM – 11:00 PM</span></p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-serif text-secondary mb-6">Send us a message</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-primary focus:border-primary bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full p-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-primary focus:border-primary bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full p-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-primary focus:border-primary bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full p-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-primary focus:border-primary bg-gray-50" />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea required rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full p-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-primary focus:border-primary bg-gray-50"></textarea>
              </div>
              
              <button type="submit" disabled={loading} className="btn-primary w-full md:w-auto px-10">
                {loading ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="h-[400px] w-full relative z-0">
        <iframe 
          title="Map"
          width="100%" 
          height="100%" 
          frameBorder="0" 
          style={{ border: 0, filter: 'grayscale(100%)' }}
          src="https://www.openstreetmap.org/export/embed.html?bbox=81.82%2C25.43%2C81.85%2C25.46&amp;layer=mapnik&amp;marker=25.45%2C81.83" 
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 pointer-events-none bg-secondary/10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-auto">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl animate-bounce">
            <MapPin className="text-white" size={32} />
          </div>
          <a href="https://www.openstreetmap.org/?mlat=25.45&mlon=81.83#map=15/25.45/81.83" target="_blank" rel="noreferrer" className="bg-white/95 backdrop-blur text-secondary font-bold px-8 py-3 rounded-md shadow-lg hover:bg-primary hover:text-white transition-colors text-sm tracking-wider inline-block">
            GET DIRECTIONS
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;