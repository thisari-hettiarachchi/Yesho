"use client";
import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <motion.div
      className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] bg-muted rounded-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-red-900/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-purple-900/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-900/10 rounded-full blur-3xl -z-10"></div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.885423705016!2d79.9758501!3d6.9249271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2570065f14367%3A0x3373219c10fe8744!2sYesho%20Intelligence%20Pvt%20Ltd!5e0!3m2!1sen!2slk!4v1730998800000!5m2!1sen!2slk"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Yesho Intelligence Pvt Ltd"
      ></iframe>
    </motion.div>
  );
};

export default MapSection;
