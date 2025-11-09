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
    <section className="py-16 bg-background text-center">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-3 text-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textVariants}
      >
        OUR WORK <span className="text-red-600">SHOWCASE</span>
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-muted mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textVariants}
      >
        A visual look at our craftmanship and attention to detail.
      </motion.p>

      {/* Images */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center max-w-5xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {works.map((img, i) => (
          <motion.div key={i} className="w-94 h-60 overflow-hidden rounded-md" variants={imageVariants}>
            <Image
              src={img}
              alt={`Work showcase ${i + 1}`}
              className="w-full h-full object-cover shadow-md"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkShowcaseSection;
