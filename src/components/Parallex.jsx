import React, { useRef } from 'react';
import { useAnimate } from "framer-motion";

import { motion, useTransform, useScroll } from "framer-motion";
// import "./Parallex.css"


function Parallex() {
  const tRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: tRef,
    offset: ["start start", "end start"]
  });
  // Adjust the transformation values for horizontal scrolling
  const ybs = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]); // Adjust as needed
  const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const ybstars = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
    
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        "/images/zafran123.jpg",
        "/images/riceproduct.jpg",
        "/images/pink-salt.jpg",
        "/images/naturalhoney.jpg",
        "/images/kitchenutensils.jpg",
        "/images/Handi crafts.jpg",
        "/images/dryfruitproduct.jpg",
        "/images/fresh foods.jpg",
        "/images/globe-web.jpg",
// /    "/imgs/active/10.jpg",
//         "/imgs/active/11.jpg",
//         "/imgs/active/12.jpg",
//         "/imgs/active/13.jpg",
//         "/imgs/active/14.jpg",
//         "/imgs/active/15.jpg",
//         "/imgs/active/16.jpg",
      ]}
    >
  <div className="parallex w-[100vw] " ref={tRef}  data-scroll data-scroll-speed="-.4"    >
 
        <motion.h1 style={{y:ybs}}  className='textparallex uppercase font-[font1]'>Technologies</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div style={{x:ybstars}} className="stars"></motion.div>
        <motion.div style={{y:ybg}} className="planets"></motion.div>
      </div>

      
    </MouseImageTrail>
    
    </>
  )
}









const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};

export default Parallex;
