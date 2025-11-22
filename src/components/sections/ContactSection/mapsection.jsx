"use client";
import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <motion.div
      className="w-full h-[300px] sm:h-[350px] md:h-[400px] bg-muted rounded-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
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
