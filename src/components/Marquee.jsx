import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from "framer-motion";
import '../App.css';
import Technologies from './Technologies';
import Aboutme from './aboutme';
import Hoverimages from './Hoverimages';
import Parallex from './Parallex';

const Marquee = () => {


    return (
        <>

            <div  >



                {/* <div className=" flex overflow-hidden bg-white   "  >


                    <motion.div
                        initial={{ x: "0%" }}
                        animate={{ x: "-70%" }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop"
                        }}
                        className=" flex bg-white  whitespace-nowrap pb-7 "
                    >
                        <hr />
                        <h1 className="marqueetext text-[20vw]  font-[font1] uppercase mx-4">
                            Crafting innovative experiences
                        </h1>
                        <h1 className="marqueetext text-[20vw] font-[font1] uppercase mx-4">
                            Crafting innovative experiences
                        </h1>
                        <hr />
                    </motion.div>


                </div> */}
                
                {/* <Hoverimages /> */}
                <div className='w-full bg-black h-[80px] m-0 p-0'></div>
                <Aboutme />
            </div>
        </>
    );
};

export default Marquee;
