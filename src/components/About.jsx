import React, { useRef } from 'react';
import BubbleText from './Aboutheading';
import Lottie from 'lottie-react';
import Aboutlottie from '../assets/Aboutlottie.json';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Hand from '../assets/Hand.gif';
import Progressbar from './Progressbar';
import Button from './Animatedbutton';
import { motion } from 'framer-motion';
import Aboutmarqee from './Aboutmarqee';




function About() {



    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, slidesToSlide: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 2, slidesToSlide: 1 }
    };

    return (

    < >

         <div className="h-[90px] bg-black relative">
         <div class="custom-shape-divider-top-1730737459">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>

         </div>


        <div className='flex gap-2 w-full aboutsectionmain   justify-center  items-center h-[100vh] bg-black relative '>
            
            <div className='w-[35vw] pl-3 abconsec  h-[80vh] pr-10 ' data-scroll data-scroll-speed=".3">
                <BubbleText/>
                <motion.p
                whileInView={{opacity:1 , x:0}}
                initial={{opacity:0 }}
                transition={{duration:0.5 , delay:0.1}}
                 className='text-[#ffd630] text-[12px] mt-[-10px]  font-[font7] aboutheding2 absubheading '>Your Web Development Partner</motion.p>


                <motion.h1 
               whileInView={{opacity:1 , x:0}}
               initial={{opacity:0 , x:-100 }}
               transition={{duration:0.5 , delay:0.2}}
                 className='flex  text-3xl aboutheding2 text-white mt-10 font-[font11] absubheading2'>  Hi <img src={Hand} width="35px" alt="waving hand" />, I'm &nbsp; Anees Zafar</motion.h1>
                <motion.p 
                 whileInView={{opacity:1 , x:0}}
                 initial={{opacity:0 , x:-100 }}
                 transition={{duration:0.5 , delay:0.3}}
                className='text-zinc-300 leading-6 mt-4  text-md absubheading3'>
                    I'm a passionate web developer dedicated to building functional, user-friendly, and visually
                     appealing web applications. With expertise in both front-end and back-end development,
                      I bring a versatile skill set to every project. I strive to stay up-to-date with the 
                      latest industry trends and technologies, ensuring that my solutions are both innovative
                       and robust. </motion.p>

                <Button />
            </div>
            <div 
       
            className='w-[35vw] h-[80vh] relative ablosec  p-0 ' data-scroll data-scroll-speed="-.1">
                <Lottie  className='mt-[-60px] lotiabout w-[40vw] '  animationData={Aboutlottie} />

                <Carousel
                    className='careousel w-[450px]  mt-2 ml-[50px] '
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true} // Assuming you want autoplay on non-mobile devices
                    autoPlaySpeed={2000}
              
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

       <Aboutmarqee/>

      

    

        </>
    );
}

export default About;
