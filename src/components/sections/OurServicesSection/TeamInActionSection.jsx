"use client";

import { teams } from "@/utils";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const TeamInActionSection = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }, 
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
    <section className="py-16 bg-background text-center">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-3 text-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textVariants}
      >
        OUR TEAM <span className="text-red-600">IN ACTION</span>
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-muted mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textVariants}
      >
        Watch Our Skilled Team Transform Defects Into Perfection
      </motion.p>

      {/* Images */}
      <motion.div
        className="flex justify-center flex-wrap gap-6 max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {teams.map((img, i) => (
          <motion.div
            key={i}
            className="rounded-lg shadow-md w-80 h-100 overflow-hidden"
            variants={imageVariants}
          >
            <Image
              src={img}
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamInActionSection;
