"use client";
import { motion } from "framer-motion";
import StyledWrapper from "@/components/shared/StyledWrapper";
import { about } from "@/assets";

const HeroSection = () => {
  const handleExploreClick = () => {
    window.scrollTo({
      top: window.innerHeight * 0.7,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${about.src})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About Us
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6"
          >
            At Yesho Intelligence, we redefine excellence in garment<br/>
            and textile mending services that meet the highest quality<br/>
            standards through precision, passion and value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-2"
          >
            <StyledWrapper>
              <button
                onClick={handleExploreClick}
                className="bg-transparent border-2 border-red-600 text-white px-10 py-3 rounded-full text-base font-medium hover:bg-red-600 transition-all duration-300"
              >
                Explore
              </button>
            </StyledWrapper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
