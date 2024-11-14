import React from 'react'
import ButtonWrapper from './Animatedexperiencebtn'
import { motion } from "framer-motion"

function Experiences() {
  return (
    <div>
      <div className="experience w-full gap-7 pt-[100px] h-[120vh] bg-black p-10 md:pt-[10px] flex justify-center items-center">

        <div className="experienceleft w-[30vw]  relative h-[600px] md:h-[500px]  pr-2 ">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=" text-[3.5vw]  font-[font11] experienceheding text-[#ffd630] uppercase" >Experience</motion.h1>
          <p className='capitalize  text-[16px] aboutheding2 text-zinc-200  font-[font4]'>I am Web Developer with 2 years
            of hands-on expertise in CMS and
            full-stack development .
          </p>
          <div>
            <ButtonWrapper className="mt-5" />
          </div>
          <div className="experienceimg float-right absolute bottom-0 right-5" data-scroll data-scroll-speed=".3">
            <img className='w-[300px] opacity-[0.5] z-[-2]' src="images/services.png" alt="" />
          </div>
        </div>
        <div className="experienceright w-[40vw] ">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className='py-3 relative'>
            <p className='font-[font12] text-lg tracking-[1px]   text-white font-bold uppercase'>
              Internship -
              <span className='text-[#ffd630] -mt-2 tracking-[0.5px] font-thin font-[font4] text-[12px] uppercase'>
                &nbsp;&nbsp;Dtek Solutions
              </span></p>
            <span className='absolute expdate top-4 right-2 text-white text-sm'>
              2022 - 2023
            </span>
            <p className='text-zinc-300 leading-5 mt-1  text-md'>I worked on both CMS and front-end development
              using tools like WordPress, Shopify, JavaScript,
              jQuery, HTML, CSS, and Bootstrap. This helped me
              become better at solving problems and
              understanding how different parts of a project fit
              together.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className='py-3 relative'>
            <p className='font-[font12] text-lg tracking-[1px]   text-white font-bold uppercase'>
              Remote Job -
              <span className='text-[#ffd630] -mt-2 tracking-[0.5px] font-thin font-[font4] text-[12px] uppercase'>
                &nbsp;&nbsp;Career Institute
              </span></p>
            <span className='absolute expdate top-4 right-2 text-white text-sm'>
              2023 - 2024
            </span>
            <p className='text-zinc-300 leading-5 mt-1  text-md'>I have been working remotely with Career Institute
              Faisalabad, specializing in WordPress development.
              My responsibilities include creating and maintaining
              WordPress websites, customizing themes to meet
              specific requirements, and ensuring that the
              websites are user-friendly and visually appealing
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className='py-3 relative border-b-[1px] border-[#ffffff6e] border-solid'>
            <p className='font-[font12] text-lg tracking-[1px]   text-white font-bold uppercase'>
              Web-Dev Corse -
              <span className='text-[#ffd630] -mt-2 tracking-[0.5px] font-thin font-[font4] text-[12px] uppercase'>
                &nbsp;&nbsp;Tech Hub IT Company
              </span></p>
            <span className='absolute expdate top-4 right-2 text-white text-sm'>
              2022 - 2023
            </span>
            <p className='text-zinc-300 leading-5 mt-1  text-md'> I am currently enrolled in a web development course at Tech Hub, focusing on front-end development. This program is enhancing my skills in HTML, CSS, JavaScript, and responsive design principles to create modern, user-friendly websites.
            </p>
          </motion.div>



          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className='py-3 relative'>

            <p className='text-zinc-300 leading-5 mt-1  text-md'>
              I am currently enrolled in a web development
              course at Tech Hub, where I am expanding my skills
              in full-Stack development.

            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Experiences
