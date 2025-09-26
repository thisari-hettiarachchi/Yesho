"use client"
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SplitText = ({
  text,
  className = "",
  splitType = "chars", // "chars" or "words"
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0 },
  duration = 0.6,
  delay = 0,
  ease = "power3.out",
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const targets = containerRef.current.querySelectorAll(
      splitType === "chars" ? ".char" : ".word"
    );

    gsap.fromTo(
      targets,
      { ...from },
      {
        ...to,
        duration,
        delay,
        ease,
        stagger: 0.05,
        onComplete: () => {
          if (onLetterAnimationComplete) onLetterAnimationComplete();
        },
      }
    );
  }, [
    text,
    splitType,
    from,
    to,
    duration,
    delay,
    ease,
    onLetterAnimationComplete,
  ]);

  // Split text into spans
  const getSplitText = () => {
    if (splitType === "words") {
      return text.split(" ").map((word, i) => (
        <span key={i} className="word inline-block mr-1">
          {word}
        </span>
      ));
    }
    // default: chars
    return text.split("").map((char, i) => (
      <span key={i} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div ref={containerRef} className={className}>
      {getSplitText()}
    </div>
  );
};

export default SplitText;
