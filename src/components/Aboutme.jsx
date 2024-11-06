import React, { useRef } from 'react';
import BubbleText from './Aboutheading';
import Lottie from 'lottie-react';
import Aboutlottie from '../assets/Aboutlottie.json';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Hand from '../assets/Hand.gif';
import Progressbar from './Progressbar';
import Button from './Animatedbutton';
import { motion, useTransform, useScroll } from "framer-motion";
import Parallex from './Parallex';
import { HoverImageLinks } from './Linkstechnologies';
import BoxGridanimated from './Animatedboxesbg';



function Aboutme() {




  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Adjust the transformation values for smoother scrolling
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);


  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 }
  };

  return (

    <section ref={targetRef} className="relative h-[900vh] bg-black">
      <div className="sticky top-0 flex items-center overflow-hidden bg-black h-[100vh]">
        <motion.div
          style={{ x }}
          transition={{ type: "keyframes", duration: 1 }}
          className='flex relative' >

          <div className='overflow-y-visible '>
            <HoverImageLinks />
          </div>
         
          <div className='w-[100vw]'>
         <BoxGridanimated/>
         </div>

          {/* first section starts  */}
          <div className='h-screen  bg-black  pt-7 m-0'>

            <div className='flex gap-2 w-[100vw] justify-center items-center  '>
              <div className='w-[40vw] pl-3  h-[80vh] pr-10 border-l-[1px] border-solid border-[#f3c4079d]'>
                <BubbleText />
                <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>Your Web Development Partner</p>


                <h1 className='flex text-2xl aboutheding2 text-white mt-10 font-[font7]'>  Hi <img src={Hand} width="35px" alt="waving hand" />, I'm &nbsp; Anees Zafar</h1>
                <p className='text-zinc-300 leading-6 mt-4  text-md'>I'm a passionate web developer dedicated to building functional, user-friendly, and visually appealing web applications. With expertise in both front-end and back-end development, I bring a versatile skill set to every project. I strive to stay up-to-date with the latest industry trends and technologies, ensuring that my solutions are both innovative and robust. My goal is to create seamless digital experiences that empower users and help businesses grow. Let's connect to explore how I can help bring your vision to life!</p>

                <Button />
              </div>
              <div className='w-[40vw] h-[80vh]  p-0 '>
                <Lottie className='mt-[-60px]' style={{ width: '40vw' }} animationData={Aboutlottie} />

                <Carousel
                  className='careousel  mt-2 '
                  responsive={responsive}
                  ssr={true}
                  infinite={true}
                  autoPlay={true} // Assuming you want autoplay on non-mobile devices
                  autoPlaySpeed={2000}
                // keyBoardControl={true}
                // customTransition="all .5"
                // transitionDuration={500}
                // containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // dotListClass="custom-dot-list-style"
                // itemClass="carousel-item-padding-40-px"
                >
                  <div className='text-white flex flex-col justify-center items-center text-3xl m-0 '><Progressbar targetProgress={100} />
                    <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>HTML</p>
                  </div>
                  <div className='text-white flex flex-col justify-center items-center text-3xl m-0 '><Progressbar targetProgress={100} />
                    <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>CSS</p>
                  </div>
                  <div className='text-white flex flex-col justify-center items-center text-3xl m-0 '><Progressbar targetProgress={90} />
                    <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>JAVASCRIPT</p>
                  </div>
                  <div className='text-white flex flex-col justify-center items-center text-3xl m-0 '><Progressbar targetProgress={80} />
                    <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>JQUERY</p>
                  </div>
                  <div className='text-white flex flex-col justify-center items-center text-3xl m-0 '><Progressbar targetProgress={100} />
                    <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>BOOTSTRAP</p>
                  </div>
                  <div className='text-white flex flex-col justify-center items-center text-3xl m-0 '><Progressbar targetProgress={70} />
                    <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>REACT-JS</p>
                  </div>
                  <div className='text-white flex flex-col justify-center items-center text-3xl m-0 '><Progressbar targetProgress={90} />
                    <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>DJANGO</p>
                  </div>
                  <div className='text-white flex flex-col justify-center items-center text-3xl m-0 '><Progressbar targetProgress={75} />
                    <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>SHOPIFY</p>
                  </div>
                  <div className='text-white flex flex-col justify-center items-center text-3xl m-0 '><Progressbar targetProgress={85} />
                    <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>WORDPRESS</p>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
          {/* first section ends  */}



          {/* secomd div starts  */}
          <div className='h-screen w-full bg-black p-7 pt-7 m-0'>

            <div className='flex gap-2 justify-center items-center  '>
              <div className='w-[40vw] pl-3  h-[80vh] pr-10 border-l-[1px] border-solid border-[#f3c4079d]'>
                <BubbleText />
                <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>Your Web Development Partner</p>


                <h1 className='flex text-3xl text-white mt-10'>  Hi <img src={Hand} width="35px" alt="waving hand" />, I'm &nbsp; Anees Zafar</h1>
                <p className='text-zinc-300 leading-6 mt-4  text-md'>I'm a passionate web developer dedicated to building functional, user-friendly, and visually appealing web applications. With expertise in both front-end and back-end development, I bring a versatile skill set to every project. I strive to stay up-to-date with the latest industry trends and technologies, ensuring that my solutions are both innovative and robust. My goal is to create seamless digital experiences that empower users and help businesses grow. Let's connect to explore how I can help bring your vision to life!</p>

                <Button />
              </div>
              <div className='w-[40vw] h-[80vh]  p-0 '>
                <Lottie className='mt-[-60px]' style={{ width: '40vw' }} animationData={Aboutlottie} />

                <Carousel
                  className='careousel  mt-2 '
                  responsive={responsive}
                  ssr={true}
                  infinite={true}
                  autoPlay={true} // Assuming you want autoplay on non-mobile devices
                  autoPlaySpeed={3000}
                // keyBoardControl={true}
                // customTransition="all .5"
                // transitionDuration={500}
                // containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // dotListClass="custom-dot-list-style"
                // itemClass="carousel-item-padding-40-px"
                >
                  <div className='text-white flex flex-col justify-center items-center text-3xl m-0 '><Progressbar targetProgress={100} />
                    <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>HTML</p>
                  </div>
                  <div className='text-white flex flex-col justify-center items-center text-3xl m-0 '><Progressbar targetProgress={100} />
                    <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>CSS</p>
                  </div>
                  <div className='text-white flex flex-col justify-center items-center text-3xl m-0 '><Progressbar targetProgress={90} />
                    <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>JAVASCRIPT</p>
                  </div>
                  <div className='text-white flex flex-col justify-center items-center text-3xl m-0 '><Progressbar targetProgress={80} />
                    <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>JQUERY</p>
                  </div>
                  <div className='text-white flex flex-col justify-center items-center text-3xl m-0 '><Progressbar targetProgress={100} />
                    <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>BOOTSTRAP</p>
                  </div>
                  <div className='text-white flex flex-col justify-center items-center text-3xl m-0 '><Progressbar targetProgress={70} />
                    <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>REACT-JS</p>
                  </div>
                  <div className='text-white flex flex-col justify-center items-center text-3xl m-0 '><Progressbar targetProgress={90} />
                    <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>DJANGO</p>
                  </div>
                  <div className='text-white flex flex-col justify-center items-center text-3xl m-0 '><Progressbar targetProgress={90} />
                    <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>SHOPIFY</p>
                  </div>
                  <div className='text-white flex flex-col justify-center items-center text-3xl m-0 '><Progressbar targetProgress={95} />
                    <p className='text-zinc-300 text-[10px] font-[font7] aboutheding2 '>WORDPRESS</p>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

          {/* secomd div ends  */}

        </motion.div>
      </div>
    </section>
  );
}

export default Aboutme;
