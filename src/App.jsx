import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/hero'
import LocomotiveScroll from 'locomotive-scroll';
import Animatedcursor from './components/Animatedcursor'
import Marquee from './components/Marquee'
import Technologies from './components/Technologies'
import About from './components/About'
import Parallex from './components/Parallex'
import Experiences from './components/Experiences'
import { HoverImageLinks } from './components/Linkstechnologies'
import PortfolioSection from './components/Portfoliosection'
import Footerform from './components/Footerform'
import Footer from './components/Bottomfooter'
import Aboutme from './components/aboutme'

function App() {
  const [count, setCount] = useState(0)
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Animatedcursor/>
      <Hero />
       <About/>
      <Experiences/>
      <Parallex/>
      <Aboutme/>
      {/* <HoverImageLinks/> */}
        {/* technologies sectio starts  */}
        {/* <Marquee/>   */}

        <PortfolioSection/>
          <Footerform/>
      <Footer/>
    
    </>
  )
}

export default App
