import React, { createContext, useContext, useState } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

const ToastContext = createContext<any>(null);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<any[]>([]);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 pointer-events-none">
        {toasts.map(t => (
          <div key={t.id} className="bg-white rounded-lg shadow-lg border border-gray-100 p-4 flex items-center gap-3 animate-fade-in-up pointer-events-auto min-w-[300px]">
            {t.type === 'success' ? <CheckCircle className="text-green-500 shrink-0" /> : <XCircle className="text-red-500 shrink-0" />}
            <span className="text-charcoal font-medium text-sm flex-grow">{t.message}</span>
            <button onClick={() => setToasts(prev => prev.filter(toast => toast.id !== t.id))} className="text-gray-400 hover:text-gray-600">
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);