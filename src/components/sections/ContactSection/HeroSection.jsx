"use client";
import Image from "next/image";
import contact from "@/assets/contact.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-[550px] md:h-[650px] flex items-center justify-center overflow-hidden">
      <Image
        src={contact}
        alt="Contact background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        className="relative z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Have questions, feedback, or partnership ideas?
          <br />
          Reach out and we'll respond as soon as possible.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
