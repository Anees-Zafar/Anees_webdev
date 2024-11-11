import React, { useRef } from 'react';
import BubbleText from './Aboutheading';

import "react-multi-carousel/lib/styles.css";
import Hand from '../assets/Hand.gif';
import Button from './Animatedbutton';
import { motion, useTransform, useScroll } from "framer-motion";
import { HoverImageLinks } from './Linkstechnologies';
import BoxGridanimated from './Animatedboxesbg';
import anime from "animejs";



function Aboutme() {




  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Adjust the transformation values for smoother scrolling
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-67%"]);


  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 }
  };

  return (

    <section ref={targetRef} className="relative h-[300vh] md:h-[900vh] bg-black">
      <div className="sticky top-0 flex items-center overflow-hidden bg-black h-[100vh]">
        <motion.div
          style={{ x }}
          transition={{ type: "keyframes", duration: 1 }}
          className='flex relative' >

          <div className='overflow-y-visible '>
            <HoverImageLinks />
          </div>

          <div className='w-[100vw]'>
            <BoxGridanimated />
          </div>

          {/* first section starts  */}
          <div className='h-screen  bg-black   m-0'>

            <div className='dotsectionmain flex gap-2 w-[100vw] justify-center items-center  relative h-[100vh]   '>


              <div className='dotsectioncon w-[50vw] pl-3 z-20 pointer-events-none absolute left-[250px] top-[70px]  h-[80vh] pt-10  '>



                <motion.h1

                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="herotitlegarentee font-[font11]  "><span className='text-zinc-100'>
                    A Strong Commitment to Uncompromising Quality</span></motion.h1>
                <motion.p
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className='text-zinc-300 leading-6 mt-4  text-md'>
                  I believe that true success lies in the details, and that is why I make quality my
                  top priority in every project. Whether it’s a design, development, or any other creative
                  solution, I am dedicated to delivering work that not only meets but exceeds expectations.
                  From concept to completion, I focus on precision, craftsmanship, and sustainable results,
                  ensuring that each project reflects the highest standards of excellence. This commitment
                  is at the heart of everything I do—because exceptional quality is the foundation of
                  long-term success.
                </motion.p>


              </div>


              <div className=' dotsectiondot w-[40vw] h-[80vh] absolute right-[250px] p-0 z-10 '>
                <DotGrid />

              </div>



            </div>
          </div>
          {/* first section ends  */}




        </motion.div>
      </div>
    </section>
  );
}

export default Aboutme;
const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

const DotGrid = () => {
  const handleDotClick = (e) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};