import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setStatus('Message received successfully. (Demo Only)');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Contact Us</h2>
          <p className="text-lg text-textMuted italic">We'd love to hear from you.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/3 space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 shrink-0">
                <MapPin />
              </div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Location</h4>
                <p className="text-gray-600">The Spice Table<br />Civil Lines<br />Prayagraj, Uttar Pradesh<br />India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 shrink-0">
                <Phone />
              </div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Call Us</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4 shrink-0">
                <Mail />
              </div>
              <div>
                <h4 className="text-xl font-bold text-charcoal mb-2">Email</h4>
                <p className="text-gray-600">hello@thespicetable.example</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              {status && <div className="mb-6 p-4 bg-green-50 text-green-800 rounded border border-green-200">{status}</div>}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary" />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                <textarea required rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary"></textarea>
              </div>
              
              <button type="submit" className="btn-primary flex items-center justify-center w-full md:w-auto px-8">
                <Send size={18} className="mr-2" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;