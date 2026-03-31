import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import GetStartedSection from './components/GetStartedSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import PricingSection from './components/PricingSection'
import ProductSection from './components/ProductSection'
import StatsSection from './components/StatsSection'

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (!cartItems.find(item => item.id === product.id)) {
      setCartItems([...cartItems, product]);
      toast.success(`${product.title} added to cart`, {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const removeFromCart = (id) => {
    const product = cartItems.find(item => item.id === id);
    setCartItems(cartItems.filter(item => item.id !== id));
    toast.error(`${product?.title || "Item"} removed!`, {
      position: "bottom-right",
      autoClose: 2000,
    });
  };

  const handleCheckout = () => {
    setCartItems([]);
    toast.info("Proceeding to checkout Cart cleared!", {
      position: "bottom-right",
      autoClose: 3000,
    });
  };

  return (
    <>
      <Navbar cartCount={cartItems.length} />

      <HeroSection />
      <StatsSection />

      <ProductSection
        addToCart={addToCart}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        handleCheckout={handleCheckout}
      />

      <GetStartedSection />
      <PricingSection />
      <CtaSection />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App