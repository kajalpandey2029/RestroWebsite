import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle2 } from 'lucide-react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', date: '', time: '', guests: '2', request: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = 'Required';
    if (!formData.phone) newErrors.phone = 'Required';
    if (!formData.date) newErrors.date = 'Required';
    if (!formData.time) newErrors.time = 'Required';
    
    // Date validation - prevent past dates
    if (formData.date) {
      const selected = new Date(formData.date);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selected < today) newErrors.date = 'Cannot select past dates';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      const resId = 'RES-' + Math.floor(1000 + Math.random() * 9000);
      localStorage.setItem('spice_table_reservation', JSON.stringify({...formData, id: resId}));
    }
  };

  const timeSlots = ['11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];
  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8+'];

  if (submitted) {
    return (
      <div className="py-20 bg-surface">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-green-500 w-10 h-10" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-charcoal mb-4">Reservation Request Received</h2>
          <p className="text-textMuted mb-8">We look forward to hosting you, {formData.name}!</p>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-left grid grid-cols-2 gap-4 mb-8">
            <div><span className="block text-gray-500 text-sm">Date</span><span className="font-bold text-charcoal">{formData.date}</span></div>
            <div><span className="block text-gray-500 text-sm">Time</span><span className="font-bold text-charcoal">{formData.time}</span></div>
            <div><span className="block text-gray-500 text-sm">Guests</span><span className="font-bold text-charcoal">{formData.guests}</span></div>
            <div><span className="block text-gray-500 text-sm">Reservation ID</span><span className="font-bold text-charcoal">RES-{Math.floor(1000 + Math.random() * 9000)}</span></div>
          </div>
          
          <p className="text-xs text-gray-400 mb-6">(This is a demo reservation. No real table was booked.)</p>
          <button onClick={() => {setSubmitted(false); setFormData({name: '', phone: '', email: '', date: '', time: '', guests: '2', request: ''})}} className="btn-secondary">
            Make Another Reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-surface relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          
          <div className="lg:w-5/12 bg-charcoal text-white p-10 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-serif font-bold mb-6">Reserve Your Table</h2>
              <p className="text-gray-300 mb-10 text-lg">Join us for an unforgettable dining experience. Book your table in advance.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Calendar className="text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Opening Hours</h4>
                    <p className="text-gray-400">Mon-Thu: 11AM - 10PM</p>
                    <p className="text-gray-400">Fri-Sun: 11AM - 11:30PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Large Groups</h4>
                    <p className="text-gray-400">For parties of 8+, please contact us directly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-7/12 p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={`w-full p-3 border rounded-md focus:ring-1 focus:ring-primary focus:border-primary ${errors.name ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className={`w-full p-3 border rounded-md focus:ring-1 focus:ring-primary focus:border-primary ${errors.phone ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone}</span>}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address (Optional)</label>
                <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                  <input type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className={`w-full p-3 border rounded-md focus:ring-1 focus:ring-primary focus:border-primary ${errors.date ? 'border-red-500' : 'border-gray-300'}`} />
                  {errors.date && <span className="text-red-500 text-xs mt-1">{errors.date}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time *</label>
                  <select value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} className={`w-full p-3 border rounded-md focus:ring-1 focus:ring-primary focus:border-primary bg-white ${errors.time ? 'border-red-500' : 'border-gray-300'}`}>
                    <option value="">Select Time</option>
                    {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.time && <span className="text-red-500 text-xs mt-1">{errors.time}</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Guests *</label>
                  <select value={formData.guests} onChange={e => setFormData({...formData, guests: e.target.value})} className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary bg-white">
                    {guestOptions.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
              </div>
              
              {formData.time && (
                <div className="bg-green-50 text-green-800 p-3 rounded border border-green-200 text-sm flex items-center">
                  <CheckCircle2 size={16} className="mr-2 text-green-600" /> Demo availability — connect restaurant backend for live availability.
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests (Optional)</label>
                <textarea value={formData.request} onChange={e => setFormData({...formData, request: e.target.value})} rows={3} className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary"></textarea>
              </div>
              
              <button type="submit" className="w-full btn-primary py-4 text-lg mt-4">
                CONFIRM RESERVATION
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Reservation;