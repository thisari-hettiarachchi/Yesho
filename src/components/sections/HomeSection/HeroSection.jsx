"use client";
import React from "react";
import SplitText from "@/components/shared/SplitText";

const HeroSection = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section className="relative z-10 min-h-screen flex items-center overflow-hidden">
      <div className="mx-auto max-w-7xl w-full">
        <div className="max-w-3xl">
          <SplitText
            text="Restoring Perfection, Redefining Quality"
            className="tracking-[0.35em] text-xs md:text-sm text-slate-300/80 uppercase"
            delay={0.1}
            duration={0.7}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          />

          <SplitText
            text="Redefining Quality,Restoring Trust"
            className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[0.08em] text-white"
            delay={0.2}
            duration={0.7}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />

          <SplitText
            text="Expertly mending and restoring garments to their original beauty, YESHO Intelligence stands proudly as Sri Lanka’s #1 choice in the garment industry."
            className="mt-8 max-w-2xl text-slate-300 leading-8"
            delay={1.5}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
