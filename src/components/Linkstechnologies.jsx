import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = () => {
  return (
    <section className="bg-black p-4 overflow-y-visible w-[100vw]  ">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="Django"
          subheading="Master Web Development with Django"
          imgSrc="https://www.svgrepo.com/show/353657/django-icon.svg"
        
          
        />
        <Link
          heading="React"
          subheading="Building User Interfaces with React"
          imgSrc="https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.png"
        
        />
        <Link
          heading="Javascript"
          subheading="The Language of the Web"
          imgSrc=  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZW_tIvYGUNtCoiiZE1A522dQjkkknrSzLF302F-1CpZlfsES6UxemA0swGxKbsWufsE&usqp=CAU"

        />
        <Link
          heading="Wordpress"
          subheading="Create Stunning Websites with Ease"
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfFerAPKHNF2p6JpXDFQpLpfz1IpjPM2UP_A&s"
         
        />
        <Link
          heading="Shopify"
          subheading="Your E-commerce Solution Made Simple"
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58f__Hs5QwGWIEcsawDwW1o5IQzaYNPONhQ&s"
          
        />
      </div>
    </section>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-5 transition-colors duration-500 hover:border-neutral-50 md:py-4"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 linkstechhead block text-3xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-5xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0  w-[10vw] rounded-lg object-cover md:w-[9vw] "
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 px-4 py-0 "
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};