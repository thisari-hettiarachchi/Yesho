"use client";

import { works } from "@/utils";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const WorkShowcaseSection = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }, // stagger images
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative py-12 sm:py-16 bg-background text-center overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-red-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="relative z-10">
      {/* Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-foreground px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textVariants}
      >
        OUR WORK <span className="text-red-600">SHOWCASE</span>
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-muted text-sm sm:text-base mb-6 sm:mb-8 md:mb-10 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textVariants}
      >
        A visual look at our craftmanship and attention to detail.
      </motion.p>

      {/* Images */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 justify-items-center max-w-5xl mx-auto px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {works.map((img, i) => (
          <motion.div key={i} className="w-full max-w-md h-48 sm:h-56 md:h-60 overflow-hidden rounded-md" variants={imageVariants}>
            <Image
              src={img}
              alt={`Work showcase ${i + 1}`}
              width={400}
              height={240}
              className="w-full h-full object-cover shadow-md"
            />
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
};

export default WorkShowcaseSection;
