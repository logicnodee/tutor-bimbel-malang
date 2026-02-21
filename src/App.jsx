import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Mentors from './components/Mentors';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';

function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleOpenCheckout = (pkg) => {
    setSelectedPackage(pkg);
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
    setTimeout(() => setSelectedPackage(null), 300); // Wait for exit animation
  };

  return (
    <div className="font-sans antialiased text-slate-900 bg-slate-50 min-h-screen flex flex-col selection:bg-emerald-500/30 selection:text-emerald-900">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Features />
        <Mentors />
        <Pricing onOpenCheckout={handleOpenCheckout} />
      </main>

      <Footer />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        selectedPackage={selectedPackage}
      />
    </div>
  );
}

export default App;
