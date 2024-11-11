import React, { useRef, useState } from 'react'
import '../App.css';
import ParticlesBackground from './Particals';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { motion } from 'framer-motion';
import Navbar from './navbar';
import { Opacity } from 'tsparticles-engine';
import Technologies from './Technologies';
import Marquee from './Marquee';
import { FaPhone } from 'react-icons/fa';


function Hero() {

  const container3 = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay }
    }
  })

  const [text] = useTypewriter({
    words: ['Shopify Development', 'Wordpress Development', 'Frontend Development', 'Backend Development '],
    loop: true,  // Loop infinitely
    typeSpeed: 50,
    deleteSpeed: 50,

  });

  const [text2] = useTypewriter({
    words: ["Elite Level", "Full Stack", "Next Phase"],
    loop: true,  // Loop infinitely
    typeSpeed: 50,
    deleteSpeed: 50,

  });

  const tiltref = useRef(null)
  const [xVal, setxVal] = useState(0)
  const [yVal, setyVal] = useState(0)

  const mouseMoving = (e) => {
    setxVal((e.clientX - tiltref.current.getBoundingClientRect().x - tiltref.current.getBoundingClientRect().width / 2) / 90)
    setyVal(-(e.clientY - tiltref.current.getBoundingClientRect().y - tiltref.current.getBoundingClientRect().height / 2) / 55)


  }

  useGSAP(function () {
    gsap.to(tiltref.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 2,
    })
  }, [xVal, yVal]);

  return (
    <>
      <Navbar />
      <div className="hero-section" onMouseMoe={(e) => {
        mouseMoving(e)
      }}>
        <ParticlesBackground />
        <div className="flexbox  " data-scroll data-scroll-speed="-.3">
          <div className="box1 pl-[60px] pt-[200px] pr-[100px]">
            <div id='tilttitlediv' ref={tiltref}>
              <motion.h1
                data-scroll data-scroll-speed=".1"
                variants={container3(0.5)}
                initial="hidden"
                animate="visible"
                className="herotitle font-[font11]  "><span className='text-zinc-100'>Hi, I'M ANEES</span><span className='text-[#ffd630] darkmode   '>. </span> </motion.h1>
        
            </div>
            <motion.p
              variants={container3(1)}
              initial="hidden"
              animate="visible"
              className='typewritter font-[font4] text-[2vw] text-white mt-[10px] uppercase'>I am into <span className="text-[#ffd630] font-semibold"> &nbsp;{text}<Cursor cursorStyle='.' /> </span></motion.p>
            <motion.p
              variants={container3(1.5)}
              initial="hidden"
              animate="visible"
              className='typewritter2 leading-5 font-[font4] text-lg text-zinc-300 mt-[5px] capitalize'>
              I am proficient at ecommerce solutions or interface enhancement, specializing in web development particulary in Frontend Development, Backend Development , Shopify or  WordPress Development, </motion.p>
          
          </div>


          <div className="box2">
            <img className="box2myimg" src="images/myimage.png" alt="" />

            {/* pulse button  */}
            <div className='absolute pingbtn right-9  '>
              <div className='pulse' >
                <span style={{ "--i": 0 }}></span>
                <span style={{ "--i": 1 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 3 }}></span>
                {/* Phone icon in the center */}
                <FaPhone size={20} color="black" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />

              </div>
            </div>
            <div className="rotateimgs">
              <img className="w-[60px] h-[60px] rotateimg1" src="images/globe-web.jpg" alt="" />
              <img className="w-[60px] h-[60px] rotateimg2 mt-3" src="images/web-dev.jpg" alt="" />

            </div>
          </div>

          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-40%" }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
            className=" heromarqee flex   whitespace-nowrap absolute bottom-2"
          >
            <hr />
            <h1 className="marqueetext text-[10vw] text-zinc-700  font-[font1] uppercase mx-4">
              Crafting innovative experiences
            </h1>
            <h1 className="marqueetext text-[10vw] text-zinc-700 font-[font1] uppercase mx-4">
              Crafting innovative experiences
            </h1>
            <h1 className="marqueetext text-[10vw] text-zinc-700 font-[font1] uppercase mx-4">
              Crafting innovative experiences
            </h1>
            <hr />
          </motion.div>

        </div>
      </div>






    </>
  )
}

export default Hero
