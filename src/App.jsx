
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


  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <StatsSection></StatsSection>
      <ProductSection></ProductSection>
      <GetStartedSection></GetStartedSection>
      <PricingSection></PricingSection>
      <CtaSection></CtaSection>
      <Footer></Footer>
    </>
  )
}

export default App
