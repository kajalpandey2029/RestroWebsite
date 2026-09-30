import React from 'react';
import { Clock, MapPin, Phone, CalendarCheck } from 'lucide-react';

const RestaurantInfo = () => {
  const info = [
    { icon: <Clock className="text-primary mb-2" size={32} />, title: 'OPEN TODAY', desc: '11:00 AM – 11:30 PM' },
    { icon: <MapPin className="text-primary mb-2" size={32} />, title: 'LOCATION', desc: 'Civil Lines, Prayagraj' },
    { icon: <Phone className="text-primary mb-2" size={32} />, title: 'CALL', desc: '+91 98765 43210' },
    { icon: <CalendarCheck className="text-primary mb-2" size={32} />, title: 'RESERVATIONS', desc: 'Available Today' },
  ];

  return (
    <div className="bg-warmBeige py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {info.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
              {item.icon}
              <h3 className="font-bold text-charcoal tracking-wide mb-1">{item.title}</h3>
              <p className="text-textMuted font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;