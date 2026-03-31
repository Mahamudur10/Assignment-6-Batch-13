import { useState } from 'react'
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
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setCartItems([]);
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
    </>
  )
}

export default App