// App.js
import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { motion, useScroll, useTransform } from "framer-motion";
import Animatedcursor from './components/Animatedcursor';
import Hero from './components/Hero';
import About from './components/About';
import Parallex from './components/Parallex';
import Experiences from './components/Experiences';
import PortfolioSection from './components/PortfolioSection';
import Footerform from './components/Footerform';
import Footer from './components/Bottomfooter';
import Aboutme from './components/aboutme';

function App() {
  // const [count, setCount] = useState(0);
  // const scrollRef = useRef(null);

  // useEffect(() => {
  //   const scrollInstance = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //     multiplier: 3, // adjust scroll speed
  //     lerp: 0.15, // smoothness
  //   });

  //   return () => {
  //     scrollInstance.destroy();
  //   };
  // }, []);

  return (
    <div 
  
    >
      <Animatedcursor />
      <Hero />
      <About />
      <Experiences />
      <Parallex />
      <Aboutme/>
      <PortfolioSection />
      <Footerform />
      <Footer />
    </div>
  );
}

export default App;
