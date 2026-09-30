import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-center px-4 pt-20">
      <div>
        <h1 className="text-8xl font-serif text-primary mb-4">404</h1>
        <h2 className="text-3xl font-serif text-secondary mb-6">Looks like this table doesn't exist.</h2>
        <p className="text-textMuted mb-8 text-lg max-w-md mx-auto">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="btn-secondary">RETURN HOME</Link>
          <Link to="/menu" className="btn-primary">VIEW MENU</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;