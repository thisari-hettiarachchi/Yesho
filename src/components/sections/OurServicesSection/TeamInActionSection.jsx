"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { teams } from "@/utils";
import Image from "next/image";
import { motion } from "framer-motion";

const TeamInActionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState("next");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setDirection("next");
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % teams.length);
        setIsTransitioning(false);
      }, 150);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, teams.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setDirection("prev");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + teams.length) % teams.length);
      setIsTransitioning(false);
    }, 150);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setDirection("next");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % teams.length);
      setIsTransitioning(false);
    }, 150);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setDirection(index > currentIndex ? "next" : "prev");
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  useEffect(() => {
    let timer = null;
    if (!isAutoPlaying) {
      timer = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 3000); 
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentIndex, isAutoPlaying]);

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 bg-background text-center">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-3 text-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textVariants}
      >
        OUR TEAM <span className="text-primary">IN ACTION</span>
      </motion.h2>

      <motion.p
        className="text-muted mb-10 text-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textVariants}
      >
        Watch Our Skilled Team Transform Defects Into Perfection
      </motion.p>

      <div className="relative">
        {/* Navigation */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card rounded-full p-3 shadow-lg hover:bg-surface transition-all duration-200 hover:scale-110 -translate-x-4 md:-translate-x-12"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card rounded-full p-3 shadow-lg hover:bg-surface transition-all duration-200 hover:scale-110 translate-x-4 md:translate-x-12"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        {/* Cards container */}
        <div className="relative px-4 md:px-16">
          {/* Mobile */}
          <div className="md:hidden overflow-visible">
            <div className="relative flex items-center justify-center">
              {/* Previous peek */}
              <div className="absolute left-0 w-16 h-64 -translate-x-8 opacity-40 z-0">
                <Image
                  src={teams[(currentIndex - 1 + teams.length) % teams.length]}
                  alt="Previous"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Active card (pause on hover) */}
              <motion.div
                className={`relative z-10 w-[280px] mx-auto transition-all duration-500 ${
                  isTransitioning
                    ? direction === "next"
                      ? "opacity-0 translate-x-20"
                      : "opacity-0 -translate-x-20"
                    : "opacity-100 translate-x-0"
                }`}
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="bg-card rounded-2xl shadow-2xl overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={teams[currentIndex]}
                      alt={`Team ${currentIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">
                      Professional Excellence
                    </h3>
                    <p className="text-muted">
                      Our team in action, delivering quality results
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Next peek */}
              <div className="absolute right-0 w-16 h-64 translate-x-8 opacity-40 z-0">
                <Image
                  src={teams[(currentIndex + 1) % teams.length]}
                  alt="Next"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center justify-center gap-6 overflow-visible">
            {/* Previous */}
            <div
              className="w-64 opacity-30 scale-75 transition-all duration-500 cursor-pointer hover:opacity-50"
              onClick={goToPrevious}
            >
              <div className="bg-card rounded-2xl shadow-lg overflow-hidden h-full">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={teams[(currentIndex - 1 + teams.length) % teams.length]}
                    alt="Previous"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Active (pause on hover) */}
            <motion.div
              className="w-[420px] scale-100 z-10 transition-all duration-500"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="bg-card rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={teams[currentIndex]}
                    alt={`Team ${currentIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Next */}
            <div
              className="w-64 opacity-30 scale-75 transition-all duration-500 cursor-pointer hover:opacity-50"
              onClick={goToNext}
            >
              <div className="bg-card rounded-2xl shadow-lg overflow-hidden h-full">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={teams[(currentIndex + 1) % teams.length]}
                    alt="Next"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {teams.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "bg-primary w-8 h-3"
                  : "bg-muted w-3 h-3 hover:bg-muted-foreground"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamInActionSection;
