

// Parallex.js
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useAnimate } from "framer-motion";
import throttle from 'lodash/throttle';

function Parallex() {
  const tRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: tRef,
    offset: ["start start", "end start"]
  });

  const ybs = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const ybstars = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <MouseImageTrail
      renderImageBuffer={100}
      rotationRange={10}
      images={[
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8iaVaHueCLdIzkbc5wfz7EeSWOsNwH2ohw&s",
        "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZW_tIvYGUNtCoiiZE1A522dQjkkknrSzLF302F-1CpZlfsES6UxemA0swGxKbsWufsE&usqp=CAU",
        "https://www.svgrepo.com/show/353657/django-icon.svg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqf-Kqyd8dSvhhufDguf9CsTZStGVsoSQ5dg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZJO5Mzx2UTpGe9bLql69k1QjgP8ejfC8CA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58f__Hs5QwGWIEcsawDwW1o5IQzaYNPONhQ&s",
        "https://i.pinimg.com/736x/fc/9b/4d/fc9b4d4d43c92322dff53c160295320f.jpg",
        "images/globe-web.jpg",
      ]}
    >
      <div className="parallex w-[100vw]" ref={tRef}>
      <motion.h1 style={{y:ybs}}  className='textparallex uppercase font-[font1]'>Technologies</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div style={{ x: ybstars }} className="stars"></motion.div>
        <motion.div style={{ y: ybg }} className="planets"></motion.div>
      </div>
    </MouseImageTrail>
  );
}

const MouseImageTrail = ({
  children,
  images,
  renderImageBuffer,
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();
  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = throttle((e) => {
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
  }, 50);

  const calculateDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
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
        transform: `translate(-50%, -50%) scale(1) rotate(${imageIndex % 2 ? rotation : -rotation}deg)`,
      },
      { duration: 0.4 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current += 1;
  };

  return (
    <div ref={scope} className="relative overflow-hidden" onMouseMove={handleMouseMove}>
      {children}
      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute h-24 w-auto opacity-0 transition-opacity duration-200"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
          style={{ willChange: 'transform, opacity' }} // enables GPU optimization
        />
      ))}
    </div>
  );
};

export default Parallex;
