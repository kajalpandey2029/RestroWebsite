import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { ToastProvider } from './components/Toast';

// Pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';
import OrderOnline from './pages/OrderOnline';
import OrderConfirmation from './pages/OrderConfirmation';
import NotFound from './pages/NotFound';

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <ToastProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar onCartClick={() => setCartOpen(true)} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/order" element={<OrderOnline />} />
              <Route path="/confirmation/:id" element={<OrderConfirmation />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          {cartOpen && <CartDrawer onClose={() => setCartOpen(false)} />}
        </div>
      </Router>
    </ToastProvider>
  );
}

export default App;