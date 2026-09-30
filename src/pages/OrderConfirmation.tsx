import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Clock } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';

import { API_URL } from '../config';

const OrderConfirmation = () => {
  const { id } = useParams();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/orders/${id}`)
      .then(res => res.json())
      .then(data => {
        setOrder(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h2 className="text-2xl font-serif text-secondary mb-4">Ember & Spice</h2>
        <p className="text-gray-500 animate-pulse">Preparing your experience...</p>
      </div>
    </div>
  );

  if (!order || order.error) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <h2 className="text-2xl text-red-500 mb-4">Order not found</h2>
      <Link to="/" className="btn-secondary">Return Home</Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 md:p-12 text-center animate-fade-in-up">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-green-500 w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-2 uppercase tracking-wide">Order Confirmed</h1>
          <p className="text-textMuted text-lg mb-8">Thank you, {order.customerName}!</p>
          
          <div className="bg-background rounded-xl p-6 mb-8 text-left border border-gray-200">
            <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-200">
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Order #</span>
                <span className="font-bold text-secondary font-mono">{order.id.split('-')[0].toUpperCase()}</span>
              </div>
              <div className="text-right">
                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Total</span>
                <span className="font-bold text-primary text-xl">{formatCurrency(order.total)}</span>
              </div>
            </div>
            
            <div className="flex items-center text-secondary font-medium bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <Clock className="text-accent mr-3" /> 
              <span>Estimated preparation time: 30–40 minutes</span>
            </div>
          </div>
          
          <Link to="/" className="btn-primary inline-block">RETURN HOME</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;