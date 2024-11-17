import React from 'react';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Button from './Animatedbutton';

const BoxGridanimated = () => {
    const boxArray = Array.from({ length: 110 }); // Adjust number for more/less boxes


    const [hoverIndex, setHoverIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };
    return (
        <>
            <div className='w-[100vw] h-[100vh] relative pt-10  boxanimationdiv '>
                <div className="box-gridanimated absolute  ">
                    {boxArray.map((_, index) => (
                        <div key={index}
                            className={`boxanimated ${hoverIndex === index ? 'hovered' : ''}`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={() => setTimeout(() => setHoverIndex(null), 5900)}
                        />
                    ))}
                </div>


                <section className="sectionbox-content  w-[100vw] bg-none px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
                    <div>
                        <motion.span
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.2, delay: 0.2 }}
                            className=" block mb-4 text-xs md:text-sm text-[#f3c307] font-medium">
                            Solutions for Every Industry
                        </motion.span>
                        <motion.h3
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.2, delay: 0.4 }}
                            className=" boxbganiheading text-4xl text-white md:text-6xl font-[font4] font-semibold">
                            Transforming Ideas into Powerful Websites
                        </motion.h3>
                        <motion.p
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.2, delay: 0.6 }}
                            className=" text-base md:text-lg text-zinc-300 my-4 md:my-6">
                            Crafting websites for diverse sectors, including healthcare, legal, education, and e-commerce. Whether for a hospital, school, law office, online store, or blog, each project is carefully designed to meet unique industry demands and goals.
                        </motion.p>
                        <Button />
                    </div>
                    <ShuffleGrid />
                </section>
            </div>

        </>

    );
};

export default BoxGridanimated;






const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: "https://media.istockphoto.com/id/1731160977/photo/judge-or-legal-advisor-lawyer-examining-and-signing-legal-documents.webp?a=1&b=1&s=612x612&w=0&k=20&c=_6TYvuifx4HmI9KBF7sG8xnKZ3MzOq5DOIhTWxicP7s=",
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        id: 8,
        src: "https://plus.unsplash.com/premium_photo-1671436824833-91c0741e89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1610768764270-790fbec18178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
    },
    {
        id: 13,
        src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
        id: 14,
        src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    },
    {
        id: 15,
        src: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 16,
        src: "https://plus.unsplash.com/premium_photo-1683887034146-c79058dbdcb1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}
        ></motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-4 grid-rows-4 md:h-[450px] h-[250px] gap-1">
            {squares.map((sq) => sq)}
        </div>
    );
};


