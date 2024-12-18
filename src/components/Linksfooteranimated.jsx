import React from "react";
import {
  SiGoogle,
  SiLinkedin,
  SiFiverr,
  SiFacebook,
  SiInstagram,
  SiGithub,
  SiWhatsapp,
  SiShopify,
  SiWordpress,
} from "react-icons/si";
import { useAnimate } from "framer-motion";

const AnimatedLinks = () => {
  return (
    <div className="bg-black  ">
      <div className="mx-auto max-w-7xl">
        <ClipPathLinks />
      </div>
    </div>
  );
};

const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-neutral-100 border border-neutral-100">
      <div className="grid grid-cols-2 divide-x divide-neutral-100">
        <LinkBox Icon={SiGoogle} href="#" />
        <LinkBox Icon={SiShopify} href="#" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-100">
        <LinkBox Icon={SiFacebook} href="#" />
        <LinkBox Icon={SiLinkedin} href="#" />
        <LinkBox Icon={SiInstagram} href="#" />
        <LinkBox Icon={SiFiverr} href="#" />
      </div>
      <div className="grid grid-cols-3 divide-x divide-neutral-100">
        <LinkBox Icon={SiGithub} href="#" />
        <LinkBox Icon={SiWhatsapp} href="#" />
        <LinkBox Icon={SiWordpress} href="#" />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();

    const proximityToLeft = { proximity: Math.abs(box.left - e.clientX), side: "left" };
    const proximityToRight = { proximity: Math.abs(box.right - e.clientX), side: "right" };
    const proximityToTop = { proximity: Math.abs(box.top - e.clientY), side: "top" };
    const proximityToBottom = { proximity: Math.abs(box.bottom - e.clientY), side: "bottom" };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl text-[#ffd630] sm:text-3xl lg:text-4xl" />

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-neutral-100 text-black"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
};

export default AnimatedLinks;
