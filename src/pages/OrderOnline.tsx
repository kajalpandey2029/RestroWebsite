import React, { useState, useEffect } from 'react';
import { useCart } from '../hooks/useCart';
import { useToast } from '../components/Toast';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../utils/formatCurrency';

import { API_URL } from '../config';

const OrderOnline = () => {
  const { cart, subtotal, tax, clearCart } = useCart();
  const navigate = useNavigate();
  const showToast = useToast();
  
  const [orderType, setOrderType] = useState('Delivery');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '', phone: '', email: '', address: '', city: '', zip: '', instructions: '', paymentMethod: 'Cash on Delivery'
  });
  
  const deliveryFee = orderType === 'Delivery' ? 40 : 0;
  const total = subtotal + tax + deliveryFee;

  useEffect(() => {
    if (cart.length === 0) navigate('/menu');
  }, [cart, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch(`${API_URL}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, orderType, items: cart })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        clearCart();
        showToast('Order placed successfully!');
        navigate(`/confirmation/${data.id}`);
      } else {
        showToast(data.error || 'Failed to place order', 'error');
      }
    } catch (err) {
      showToast('Server error. Could not place order.', 'error');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) return null;

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-8">Complete Your Order</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-secondary mb-4 font-serif border-b pb-2">1. Order Type</h2>
                <div className="flex gap-4">
                  {['Delivery', 'Pickup', 'Dine-in'].map(type => (
                    <button 
                      key={type} type="button" 
                      onClick={() => setOrderType(type)} 
                      className={`flex-1 py-3 rounded-lg border-2 font-bold transition-colors ${orderType === type ? 'border-primary bg-primary/5 text-primary' : 'border-gray-200 text-gray-500 hover:border-gray-300'}`}
                    >
                      {type.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold text-secondary mb-4 font-serif border-b pb-2">2. Contact Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input required type="text" value={formData.customerName} onChange={e => setFormData({...formData, customerName: e.target.value})} className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary bg-gray-50" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary focus:border-primary bg-gray-50" />
                  </div>
                </div>
              </div>

              {orderType === 'Delivery' && (
                <div className="mb-8 animate-fade-in">
                  <h2 className="text-xl font-bold text-secondary mb-4 font-serif border-b pb-2">3. Delivery Address</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Street Address *</label>
                      <input required type="text" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary bg-gray-50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                      <input required type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary bg-gray-50" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code *</label>
                      <input required type="text" value={formData.zip} onChange={e => setFormData({...formData, zip: e.target.value})} className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary bg-gray-50" />
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h2 className="text-xl font-bold text-secondary mb-4 font-serif border-b pb-2">4. Payment Method</h2>
                <div className="space-y-3">
                  {['Cash on Delivery', 'Pay at Restaurant'].map(method => (
                    <label key={method} className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${formData.paymentMethod === method ? 'border-primary bg-primary/5' : 'border-gray-200'}`}>
                      <input type="radio" name="paymentMethod" value={method} checked={formData.paymentMethod === method} onChange={() => setFormData({...formData, paymentMethod: method})} className="text-primary focus:ring-primary h-5 w-5" />
                      <span className="ml-3 font-medium text-secondary">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-1">Special Instructions</label>
                <textarea rows={2} value={formData.instructions} onChange={e => setFormData({...formData, instructions: e.target.value})} className="w-full p-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-primary bg-gray-50"></textarea>
              </div>

              <button type="submit" disabled={loading} className="w-full btn-primary py-4 text-lg">
                {loading ? 'PROCESSING...' : `PLACE ORDER - ${formatCurrency(total)}`}
              </button>
            </form>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm sticky top-24">
              <h2 className="text-xl font-bold text-secondary mb-4 font-serif border-b pb-2">Order Summary</h2>
              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto pr-2">
                {cart.map((item: any) => (
                  <div key={item.id} className="flex gap-3 text-sm">
                    <div className="w-12 h-12 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <span className="font-medium text-secondary line-clamp-1">{item.name}</span>
                        <span className="font-medium">{formatCurrency(item.price * item.quantity)}</span>
                      </div>
                      <span className="text-gray-500">Qty: {item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
                <div className="flex justify-between"><span>GST (5%)</span><span>{formatCurrency(tax)}</span></div>
                {orderType === 'Delivery' && <div className="flex justify-between"><span>Delivery Fee</span><span>{formatCurrency(deliveryFee)}</span></div>}
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between text-xl font-bold text-secondary">
                <span>Total</span>
                <span className="text-primary">{formatCurrency(total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;