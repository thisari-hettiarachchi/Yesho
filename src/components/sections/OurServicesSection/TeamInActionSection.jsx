"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { teams } from "@/utils"; // ✅ your actual data
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Team Card Component
const TeamCard = ({
  src,
  alt,
  name,
  role,
  isActive = false,
  onHoverStart,
  onHoverEnd,
}) => (
  <div
    className={`bg-card rounded-2xl shadow-2xl overflow-hidden h-full ${
      isActive ? "transform hover:scale-105 group" : ""
    } transition-all duration-300`}
    onMouseEnter={onHoverStart}
    onMouseLeave={onHoverEnd}
  >
    <div className="aspect-[4/3] relative">
      <Image src={src} alt={alt} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 p-5 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <h3 className="text-xl font-bold text-white">{name}</h3>
          <p className="text-sm font-medium text-primary">{role}</p>
        </motion.div>
      )}
    </div>
  </div>
);

// ✅ Main Section Component
const TeamInActionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState("next");

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection("next");
      setCurrentIndex((prev) => (prev + 1) % teams.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

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

  // Resume autoplay after delay
  useEffect(() => {
    let timer = null;
    if (!isAutoPlaying) {
      timer = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 5000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentIndex, isAutoPlaying]);

  // Text animation
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Slide animation
  const slideVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === "next" ? "100%" : "-100%",
      scale: 0.95,
    }),
    visible: {
      opacity: 1,
      x: "0%",
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction === "next" ? "-100%" : "100%",
      scale: 0.95,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    }),
  };

  // Calculate previous and next indices
  const prevIndex = (currentIndex - 1 + teams.length) % teams.length;
  const nextIndex = (currentIndex + 1) % teams.length;
  const prevTeam = teams[prevIndex];
  const currentTeam = teams[currentIndex];
  const nextTeam = teams[nextIndex];

  return (
    <section className="py-16 bg-background text-center overflow-x-clip">
      {/* Section Title */}
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

      {/* Content Wrapper */}
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-card/70 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-surface transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-card/70 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-surface transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        {/* Cards */}
        <div className="relative px-4 md:px-16">
          {/* Mobile View */}
          <div className="md:hidden">
            <div className="relative flex items-center justify-center h-[380px]">
              <div className="absolute left-0 w-20 h-72 -translate-x-8 opacity-40 z-0 filter blur-[2px]">
                <Image
                  src={prevTeam.src}
                  alt={prevTeam.alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

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
                    src={currentTeam.src}
                    alt={currentTeam.alt}
                    name={currentTeam.name}
                    role={currentTeam.role}
                    isActive={true}
                    onHoverStart={() => setIsAutoPlaying(false)}
                    onHoverEnd={() => setIsAutoPlaying(true)}
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute right-0 w-20 h-72 translate-x-8 opacity-40 z-0 filter blur-[2px]">
                <Image
                  src={nextTeam.src}
                  alt={nextTeam.alt}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <div
            className="hidden md:flex items-center justify-center gap-6"
            style={{ perspective: "1200px" }}
          >
            <div
              className="w-72 transition-all duration-500 cursor-pointer transform-gpu opacity-50 scale-80 -rotate-y-10 hover:opacity-100 hover:scale-90 hover:!rotate-y-0 z-0"
              onClick={goToPrevious}
              style={{ transformStyle: "preserve-3d" }}
            >
              <TeamCard src={prevTeam.src} alt={prevTeam.alt} />
            </div>

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
                    src={currentTeam.src}
                    alt={currentTeam.alt}
                    name={currentTeam.name}
                    role={currentTeam.role}
                    isActive={true}
                    onHoverStart={() => setIsAutoPlaying(false)}
                    onHoverEnd={() => setIsAutoPlaying(true)}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div
              className="w-72 transition-all duration-500 cursor-pointer transform-gpu opacity-50 scale-80 rotate-y-10 hover:opacity-100 hover:scale-90 hover:!rotate-y-0 z-0"
              onClick={goToNext}
              style={{ transformStyle: "preserve-3d" }}
            >
              <TeamCard src={nextTeam.src} alt={nextTeam.alt} />
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
                  : "bg-muted w-3 h-3 hover:bg-primary/50"
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
