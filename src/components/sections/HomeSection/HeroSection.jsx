"use client";
import React from "react";
import SplitText from "@/components/shared/SplitText";
import { bghero } from "@/assets";
import Image from "next/image";
import { useTheme } from "next-themes";

const HeroSection = () => {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden rounded-b-[5%] transition-colors duration-500">
      {/* Background Image */}
      <Image
        src={bghero}
        alt="hero background"
        fill
        className="object-cover opacity-90"
        priority
      />

      {/* Theme-Based Overlay */}
      {currentTheme === "dark" ? (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent z-[10] transition-all duration-500" />
      ) : (
        <div className="absolute inset-0 bg-black/50 z-[10] transition-all duration-500" />
      )}

      {/* Text Content */}
      <div className="relative z-[20] mx-auto max-w-7xl w-full px-6">
        <div className="max-w-3xl">
          <SplitText
            text="Restoring Perfection, Redefining Quality"
            className="tracking-[0.35em] text-xs md:text-sm text-slate-200/90 uppercase"
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
