import React, { useEffect } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { formatCurrency } from '../utils/formatCurrency';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const CartDrawer = ({ onClose }: any) => {
  const { cart, removeFromCart, updateQuantity, subtotal, tax } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleCheckout = () => {
    onClose();
    navigate('/order');
  };

  return (
    <div className="fixed inset-0 z-[70] flex justify-end animate-fade-in">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-background">
          <h2 className="text-2xl font-serif font-bold text-secondary flex items-center">
            <ShoppingBag className="mr-3 text-primary" /> Your Cart
          </h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-primary transition-colors bg-white rounded-full shadow-sm">
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-grow overflow-y-auto p-6 flex flex-col gap-6 bg-white">
          {cart.length === 0 ? (
            <div className="m-auto text-center py-20">
              <ShoppingBag size={64} className="mx-auto text-gray-200 mb-4" />
              <p className="text-xl font-medium text-secondary mb-2 font-serif">Your cart is empty.</p>
              <button onClick={() => {onClose(); navigate('/menu');}} className="btn-secondary mt-6">EXPLORE MENU</button>
            </div>
          ) : (
            cart.map((item: any) => (
              <div key={item.id} className="flex gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md flex-shrink-0 border border-gray-100" />
                <div className="flex-grow flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-secondary line-clamp-1">{item.name}</h3>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="text-primary font-semibold text-sm">{formatCurrency(item.price)}</div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-gray-200 rounded">
                      <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 text-gray-500 hover:bg-gray-100"><Minus size={14} /></button>
                      <span className="px-3 text-sm font-medium">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 text-gray-500 hover:bg-gray-100"><Plus size={14} /></button>
                    </div>
                    <span className="font-bold text-secondary text-sm">{formatCurrency(item.price * item.quantity)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-background">
            <div className="flex flex-col gap-2 mb-6 text-sm text-secondary">
              <div className="flex justify-between"><span>Subtotal</span><span className="font-medium">{formatCurrency(subtotal)}</span></div>
              <div className="flex justify-between text-gray-500"><span>GST (5%)</span><span>{formatCurrency(tax)}</span></div>
              <div className="flex justify-between text-lg font-bold mt-2 pt-2 border-t border-gray-200">
                <span>Total</span><span className="text-primary">{formatCurrency(subtotal + tax)}</span>
              </div>
            </div>
            <button onClick={handleCheckout} className="w-full btn-primary py-4 text-lg flex justify-center items-center group">
              PROCEED TO CHECKOUT <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;