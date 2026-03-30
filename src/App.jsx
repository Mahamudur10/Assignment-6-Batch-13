
import './App.css'
import GetStartedSection from './components/GetStartedSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import PricingSection from './components/PricingSection'
import StatsSection from './components/StatsSection'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <StatsSection></StatsSection>
      <GetStartedSection></GetStartedSection>
      <PricingSection></PricingSection>
    </>
  )
}

export default App
