"use client";
import { motion } from "framer-motion";
import StyledWrapper from "@/components/shared/StyledWrapper";
import { about } from "@/assets";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  

  const handleExploreClick = () => {
    window.scrollTo({
      top: window.innerHeight * 0.7,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative flex items-center justify-center h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] xl:h-[90vh] overflow-hidden rounded-b-[3%] sm:rounded-b-[4%] md:rounded-b-[5%]">
      {/* Background Image */}
      <Image
        src={about}
        alt="hero background"
        fill
        className="object-cover opacity-90 dark:opacity-60"
        priority
      />
      <div className="absolute inset-0 bg-black/40 dark:bg-transparent transition-all duration-500" />
      {/* Text Content */}
      <div className="relative z-10 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white/70">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 sm:space-y-5 md:space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-3 md:mb-4">
            About Us
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto leading-relaxed mb-4 sm:mb-5 md:mb-6 px-2 sm:px-0"
          >
            At Yesho Intelligence, we redefine excellence in garment
            <br className="hidden sm:block" />
            and textile mending services that meet the highest quality
            <br className="hidden sm:block" />
            standards through precision, passion and value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-2 sm:pt-3 md:pt-4"
          >
            <StyledWrapper>
              <button
                onClick={handleExploreClick}
                className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-transparent border-2 border-red-600 rounded-full text-sm sm:text-base font-medium transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 text-red-600 transition-colors duration-300 group-hover:text-white">
                  Explore
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 text-red-600 transition-colors duration-300 group-hover:text-white group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>
            </StyledWrapper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
