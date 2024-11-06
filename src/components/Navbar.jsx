import IconButton from "./IconButton";
import { FaLinkedin, FaFacebook, FaWhatsapp, FaGithub } from "react-icons/fa";
import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50); // Show if scrolling up or at top
    setIsScrolled(currentScrollY > 50); // Track if scrolled down
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`navbarhead ${isVisible ? 'visible' : 'hidden'} ${isScrolled ? 'scrolled' : ''}`}>
      <img className='logoimg ' src="images/anes-logo.png" alt="" />
      <div className="socialicons flex items-center justify-center gap-4">
        <IconButton text="Github" ><FaGithub size={20} /></IconButton>
        <IconButton text="Facebook" ><FaFacebook size={20} /></IconButton>
        <IconButton text="Whatsapp" ><FaWhatsapp size={20} /></IconButton>

        <IconButton text="Linkedin" ><FaLinkedin size={20} /></IconButton>
      </div>
    </div>
  );
}

export default Navbar;
