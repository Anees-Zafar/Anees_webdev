import React, { useState, useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';

function Animatedcursor() {
  const [cursorColor, setCursorColor] = useState('white');

  useEffect(() => {
    const handleMouseMove = (e) => {
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element) {
        const bgColor = window.getComputedStyle(element).backgroundColor;

        if (bgColor && bgColor.match(/\d+/g)) {
          const [r, g, b] = bgColor.match(/\d+/g).map(Number);
          const brightness = (r * 299 + g * 587 + b * 114) / 1000;

          setCursorColor(brightness > 128 ? 'black' : 'white');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={0}
      outerAlpha={0}
      hasBlendMode={true}
      showSystemCursor={true}
      innerStyle={{ backgroundColor: '#ffd630' }}
      outerStyle={{ border: '3px solid #ffd630' }}
    />
  );
}

export default Animatedcursor;
