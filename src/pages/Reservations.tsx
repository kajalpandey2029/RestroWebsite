import React, { useState, useEffect } from 'react';
import { Calendar, Users, CheckCircle2 } from 'lucide-react';
import { useToast } from '../components/Toast';

import { API_URL } from '../config';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', date: '', time: '', guests: '2', occasion: '', specialRequest: ''
  });
  const [submitted, setSubmitted] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const showToast = useToast();

  useEffect(() => {
    if (formData.date && formData.guests) {
      fetch(`${API_URL}/api/reservations/availability?date=${formData.date}&guests=${formData.guests}`)
        .then(res => res.json())
        .then(data => {
          if (data.availableSlots) {
            setAvailableSlots(data.availableSlots);
            if (!data.availableSlots.includes(formData.time)) {
              setFormData({...formData, time: ''});
            }
          }
        });
    }
  }, [formData.date, formData.guests]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const selected = new Date(formData.date);
    const today = new Date();
    today.setHours(0,0,0,0);
    if (selected < today) {
      showToast('Cannot select past dates', 'error');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      
      if (response.ok) {
        setSubmitted(data);
        showToast('Reservation confirmed!');
      } else {
        showToast(data.error || 'Failed to reserve', 'error');
      }
    } catch (err) {
      showToast('Server error', 'error');
    } finally {
      setLoading(false);
    }
  };

  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8+'];
  const occasionOptions = ['None', 'Birthday', 'Anniversary', 'Business Dinner', 'Date Night', 'Family', 'Other'];

  if (submitted) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-20 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-2xl text-center animate-fade-in-up">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-green-500 w-10 h-10" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-secondary mb-4 uppercase tracking-widest">Table Reserved</h2>
          <p className="text-textMuted mb-8 text-lg">Your table has been reserved successfully.</p>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-left grid grid-cols-2 gap-6 mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10"></div>
            <div><span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Reservation #</span><span className="font-bold text-secondary font-mono">{submitted.id.split('-')[0].toUpperCase()}</span></div>
            <div><span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Name</span><span className="font-bold text-secondary">{submitted.name}</span></div>
            <div><span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Date</span><span className="font-bold text-secondary">{submitted.date}</span></div>
            <div><span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Time</span><span className="font-bold text-secondary">{submitted.time}</span></div>
            <div><span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Guests</span><span className="font-bold text-secondary">{submitted.guests}</span></div>
            <div><span className="block text-gray-400 text-xs uppercase tracking-wider mb-1">Occasion</span><span className="font-bold text-secondary">{submitted.occasion || 'None'}</span></div>
          </div>
          
          <button onClick={() => {setSubmitted(null); setFormData({name: '', phone: '', email: '', date: '', time: '', guests: '2', occasion: '', specialRequest: ''})}} className="btn-secondary">
            Make Another Reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          
          <div className="lg:w-5/12 bg-secondary text-white p-10 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-serif font-bold mb-6">Reserve a Table</h2>
              <p className="text-gray-300 mb-10 text-lg">Join us for an unforgettable dining experience. Book your table in advance.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Calendar className="text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                    <p className="text-gray-400 text-sm">Mon-Thu: 11:30 AM – 10:30 PM</p>
                    <p className="text-gray-400 text-sm">Fri-Sun: 11:30 AM – 11:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Large Groups</h4>
                    <p className="text-gray-400 text-sm">For parties of 8+, please contact us directly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-7/12 p-8 md:p-10 bg-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-primary focus:border-primary bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full p-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-primary focus:border-primary bg-gray-50" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full p-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-primary focus:border-primary bg-gray-50" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                  <input required type="date" min={new Date().toISOString().split('T')[0]} value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full p-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-primary focus:border-primary bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guests *</label>
                  <select required value={formData.guests} onChange={e => setFormData({...formData, guests: e.target.value})} className="w-full p-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-primary focus:border-primary bg-gray-50">
                    {guestOptions.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time *</label>
                  <select required value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} className="w-full p-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-primary focus:border-primary bg-gray-50" disabled={!formData.date || availableSlots.length === 0}>
                    <option value="">{formData.date ? (availableSlots.length > 0 ? 'Select Time' : 'No slots available') : 'Select Date First'}</option>
                    {availableSlots.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Occasion</label>
                  <select value={formData.occasion} onChange={e => setFormData({...formData, occasion: e.target.value})} className="w-full p-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-primary focus:border-primary bg-gray-50">
                    {occasionOptions.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                <textarea rows={3} value={formData.specialRequest} onChange={e => setFormData({...formData, specialRequest: e.target.value})} className="w-full p-3 border border-gray-200 rounded-md focus:ring-1 focus:ring-primary focus:border-primary bg-gray-50"></textarea>
              </div>
              
              <button type="submit" disabled={loading || !formData.time} className="w-full btn-primary py-4 text-lg mt-4 disabled:opacity-50">
                {loading ? 'PROCESSING...' : 'CONFIRM RESERVATION'}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Reservations;