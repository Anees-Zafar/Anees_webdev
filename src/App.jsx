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
      {/* <HoverImageLinks/> */}
        {/* technologies sectio starts  */}
        <Marquee/>
      
    </>
  )
}

export default App
