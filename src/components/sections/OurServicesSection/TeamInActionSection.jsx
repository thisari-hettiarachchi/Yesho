"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { teams } from "@/utils"; 
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; 
const TeamCard = ({ src, alt, isActive = false, onHoverStart, onHoverEnd }) => (
  <div
    className={`bg-card rounded-2xl shadow-2xl overflow-hidden h-full ${
      isActive ? "transform hover:scale-105" : ""
    } transition-all duration-300`}
    onMouseEnter={onHoverStart}
    onMouseLeave={onHoverEnd}
  >
    <div className="aspect-[4/3] relative">
      <Image src={src} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
        </motion.div>
      )}
    </div>
  </div>
);

const TeamInActionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState("next");
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection("next");
      setCurrentIndex((prev) => (prev + 1) % teams.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, teams.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + teams.length) % teams.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % teams.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
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

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "next" ? "100%" : "-100%",
      scale: 0.9,
    }),
    visible: {
      opacity: 1,
      x: "0%",
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction === "next" ? "-100%" : "100%",
      scale: 0.9,
      transition: { duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <section className="py-16 bg-background text-center overflow-x-clip">
      {/* Heading (unchanged) */}
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
        {/* Navigation Buttons (unchanged) */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-card rounded-full p-3 shadow-lg hover:bg-surface transition-all duration-200 hover:scale-110 -translate-x-4 md:-translate-x-12"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-card rounded-full p-3 shadow-lg hover:bg-surface transition-all duration-200 hover:scale-110 translate-x-4 md:translate-x-12"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        {/* Cards container */}
        <div className="relative px-4 md:px-16">
          {/* Mobile */}
          <div className="md:hidden">
            <div className="relative flex items-center justify-center h-[380px]">
              {/* Previous peek */}
              <div className="absolute left-0 w-20 h-72 -translate-x-8 opacity-40 z-0">
                <Image
                  src={teams[(currentIndex - 1 + teams.length) % teams.length]}
                  alt="Previous"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Active card*/}
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute z-10 w-[280px] mx-auto"
                >
                  <TeamCard
                    src={teams[currentIndex]}
                    alt={`Team ${currentIndex + 1}`}
                    isActive={true}
                    onHoverStart={() => setIsAutoPlaying(false)}
                    onHoverEnd={() => setIsAutoPlaying(true)}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Next peek */}
              <div className="absolute right-0 w-20 h-72 translate-x-8 opacity-40 z-0">
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
          <div
            className="hidden md:flex items-center justify-center gap-6"
            style={{ perspective: "1200px" }}
          >
            {/* Previous */}
            <div
              className="w-72 transition-all duration-500 cursor-pointer transform-gpu opacity-50 scale-80 -rotate-y-10 hover:opacity-80 hover:scale-85"
              onClick={goToPrevious}
            >
              <TeamCard
                src={teams[(currentIndex - 1 + teams.length) % teams.length]}
                alt="Previous"
              />
            </div>

            {/* Active*/}
            <div className="w-[450px] h-[338px] relative">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute w-[450px] z-10"
                >
                  <TeamCard
                    src={teams[currentIndex]}
                    alt={`Team ${currentIndex + 1}`}
                    isActive={true}
                    onHoverStart={() => setIsAutoPlaying(false)}
                    onHoverEnd={() => setIsAutoPlaying(true)}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next */}
            <div
              className="w-72 transition-all duration-500 cursor-pointer transform-gpu opacity-50 scale-80 rotate-y-10 hover:opacity-80 hover:scale-85"
              onClick={goToNext}
            >
              <TeamCard
                src={teams[(currentIndex + 1) % teams.length]}
                alt="Next"
              />
            </div>
          </div>
        </div>

        {/* Dots*/}
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