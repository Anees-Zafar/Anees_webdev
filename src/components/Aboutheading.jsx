import React, { useEffect } from "react";
import { motion } from "framer-motion";


const BubbleText = () => {
  useEffect(() => {
    const spans = document.querySelectorAll(".hover-text span");

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function () {
        this.style.fontWeight = "1500";
        this.style.color = "rgb(0, 255, 255)";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = "#f3c307";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = "#f3c307";
        }
      });

      span.addEventListener("mouseleave", function () {
        this.style.fontWeight = "100";
        this.style.color = "#f3c307";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "100";
          leftNeighbor.style.color = "#f3c307";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "100";
          rightNeighbor.style.color = "rgb(0, 255, 255)";
        }
      });
    });
  }, []);

  return (
    <motion.h2 
    whileInView={{opacity:1 , y:0}}
    initial={{opacity:0 , y:100 }}
    transition={{duration:0.5}}
    className="hover-text text-[4vw] leading-0 font-[font11] aboutheding text-white uppercase"  >
      <Text>MY BIo</Text>
    </motion.h2>
  );
};

const Text = ({ children }) => {
  return (
    <>
      {children.split("").map((child, idx) => (
        <span
          style={{
            transition: "0.35s font-weight, 0.35s color",
          }}
          key={idx}
        >
          {child}
        </span>
      ))}
    </>
  );
};

export default BubbleText;