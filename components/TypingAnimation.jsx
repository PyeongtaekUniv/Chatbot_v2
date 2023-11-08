// components/TypingAnimation.js
import React, { useState, useEffect } from "react";

const TypingAnimation = ({ text, speed, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(intervalId);
        if (onComplete) {
          onComplete();
        }
      }
    }, speed);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, [text, speed, onComplete]);

  return <span>{displayedText}</span>;
};

export default TypingAnimation;
