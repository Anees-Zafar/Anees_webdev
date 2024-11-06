import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progressbar = ({ targetProgress }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < targetProgress) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= targetProgress) {
            clearInterval(interval);
            return targetProgress;
          }
          return prev + 5;
        });
      }, 70);

      return () => clearInterval(interval);
    }
  }, [progress, targetProgress]);

  return (
    <div style={{ width: 90, height: 90 }}>
      <CircularProgressbar 
        value={progress} 
        text={`${progress}%`} 
        styles={buildStyles({
          textColor: "#f3c307",
          pathColor: "#2bcaca",
          trailColor: "white",
        })}
      />
    </div>
  );
};

export default Progressbar;
