import React from 'react';

const reviews = [
  { name: 'Priya Sharma', rating: 5, review: 'Absolutely incredible dining experience. The Butter Chicken was the best I have ever had. The ambiance is perfect for a family dinner.', date: '2 weeks ago', avatar: 'https://i.pravatar.cc/150?img=47' },
  { name: 'Rahul Desai', rating: 5, review: 'A true hidden gem! The spices are perfectly balanced. The Chef special tasting menu is highly recommended.', date: '1 month ago', avatar: 'https://i.pravatar.cc/150?img=11' },
  { name: 'Anita Verma', rating: 5, review: 'Beautiful interior and even better food. The staff was incredibly welcoming. Will definitely be returning soon!', date: '2 months ago', avatar: 'https://i.pravatar.cc/150?img=32' },
];

const Reviews = () => {
  return (
    <div className="py-20 bg-warmBeige">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-4">Guest Reviews</h2>
          <div className="flex justify-center space-x-1 text-accent mb-2">
            {[1,2,3,4,5].map(i => <span key={i} className="text-2xl">★</span>)}
          </div>
          <p className="text-sm text-textMuted uppercase tracking-wider font-semibold">4.9/5 from 2,000+ reviews</p>
          <p className="text-xs text-gray-500 mt-2">(Demo Restaurant Reviews)</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex space-x-1 text-accent mb-4">
                {[...Array(rev.rating)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-charcoal text-lg italic mb-6 flex-grow">"{rev.review}"</p>
              <div className="flex items-center">
                <img src={rev.avatar} alt={rev.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-bold text-charcoal">{rev.name}</h4>
                  <p className="text-sm text-gray-500">{rev.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;