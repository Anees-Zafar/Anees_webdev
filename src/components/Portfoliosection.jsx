import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FiSend } from "react-icons/fi";

const items = [
    {
        id: 1,
        title: "Hemroc Global Trading Company",
        img: "https://plus.unsplash.com/premium_photo-1661962773421-6b97ceec1f0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2xvYmFsJTIwaW1wb3J0JTIwYW5kJTIwZXhwb3J0fGVufDB8fDB8fHww",
        desc: "This project involved creating a fully responsive website with an engaging design, optimized for both desktop and mobile devices.",
        href:"https://hemroc.co/"
    },
    {
        id: 2,
        title: "Hemroc Global Trading Company",
        img: "https://media.istockphoto.com/id/903221072/photo/computer-office-we-design.webp?a=1&b=1&s=612x612&w=0&k=20&c=rNfGK2H5dWaNnbtAWUFUR23zILsrnL5bcVqHP0hLYjY=",
        desc: "Hemroc Trading (Pvt.) Ltd. delivers excellence in import and export across industries, including hospitality, fresh produce, heavy machinery, and infrastructure. We ensure top-quality services tailored to your needs.",
        href:"https://leatheremporio.com/"

    },
    {
        id: 3,
        title: "Hemroc Global Trading Company",
        img: "https://media.istockphoto.com/id/903221072/photo/computer-office-we-design.webp?a=1&b=1&s=612x612&w=0&k=20&c=rNfGK2H5dWaNnbtAWUFUR23zILsrnL5bcVqHP0hLYjY=",
        desc: "Hemroc Trading (Pvt.) Ltd. delivers excellence in import and export across industries, including hospitality, fresh produce, heavy machinery, and infrastructure. We ensure top-quality services tailored to your needs.",
        href:"https://hemroc.co/"

    },
    {
        id: 4,
        title: "Hemroc Global Trading Company",
        img: "https://media.istockphoto.com/id/903221072/photo/computer-office-we-design.webp?a=1&b=1&s=612x612&w=0&k=20&c=rNfGK2H5dWaNnbtAWUFUR23zILsrnL5bcVqHP0hLYjY=",
        desc: "Hemroc Trading (Pvt.) Ltd. delivers excellence in import and export across industries, including hospitality, fresh produce, heavy machinery, and infrastructure. We ensure top-quality services tailored to your needs.",
        href:"https://hemroc.co/"

    }
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);

    return (
        <section>
            <div className="portcontainer">
                <div className="wrapper">
                    <img ref={ref} className='rounded-2xl md:w-[35vw] w-[100vw]' src={item.img} alt={item.title} />
                    <motion.div style={{ y: y }} className="textcontainer ">
                        <h2 className='text-3xl font-[font11]'>{item.title}</h2>
                        <p className='mt-4'>{item.desc}</p>
                        <div className='mt-6'>
                            <NeumorphismButton href={item.href} />
                        </div>               
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const NeumorphismButton = ({ href }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <button
                className={`
                    px-4 py-2 rounded-full 
                    flex items-center gap-2 
                    text-zinc-900
                    bg-[#f3c307]
                    transition-all
                    hover:text-zinc-500
                `}
            >
                <FiSend />
                <span>Visit Project</span>
            </button>
        </a>
    );
};

function PortfolioSection() {
    const portfolioref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: portfolioref,
        offset: ["start start", "end end"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='portfolio' ref={portfolioref}>
            <div className="progress z-50">
                <h1 className='font-[font11]'>My Projects</h1>
                <motion.div style={{ scaleX }} className="progressbar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
}

export default PortfolioSection;
