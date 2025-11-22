"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { quality, integrity, commintment, sustainability, innovation } from "@/assets";

const values = [
  { id: 1, number: "01", icon: quality, title: "Quality", description: "We adhere to the standards, methods precision and care." },
  { id: 2, number: "02", icon: integrity, title: "Integrity", description: "We uphold honesty and transparency in every interaction." },
  { id: 3, number: "03", icon: commintment, title: "Commitment", description: "We stay true to our promises, maintaining integrity and focus to achieve success." },
  { id: 4, number: "04", icon: sustainability, title: "Sustainability", description: "Environmentally friendly garment restoration for a greener industry." },
  { id: 5, number: "05", icon: innovation, title: "Innovation", description: "Leveraging cutting-edge techniques to deliver the best results." },
];

const ValueCard = ({ value, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false }}
      className="relative rounded-xl overflow-hidden"
    >
      {/* Rotating gradient background */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background: "linear-gradient(180deg, rgba(220,38,38,0.7), rgba(239,68,68,0.7), rgba(220,38,38,0.7))",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15), 0 4px 6px rgba(0,0,0,0.1)",
          animation: "rotBGimg 6s linear infinite",
        }}
      ></div>

      {/* Inner card */}
      <div className="relative bg-background dark:bg-gray-800 rounded-lg m-[3px] p-4 sm:p-5 md:p-6 h-full hover:shadow-2xl transition-all duration-300">
        {/* Number badge */}
        <div className="absolute -top-3 -left-3 w-12 h-12 sm:w-14 sm:h-14 bg-red-600 text-white flex items-center justify-center rounded-lg font-bold text-lg sm:text-xl shadow-md z-10">
          {value.number}
        </div>

        {/* Content */}
        <div className="pt-6 sm:pt-8 pr-16 sm:pr-20">
          <h3 className="text-lg sm:text-xl font-bold text-foreground dark:text-white mb-2">{value.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">{value.description}</p>
        </div>

        {/* Icon */}
        <div className="absolute top-2 right-4 sm:right-6 w-16 h-16 sm:w-20 sm:h-20">
          <Image src={value.icon} alt={value.title} fill className="object-contain" />
        </div>
      </div>

      {/* Local animation */}
      <style jsx>{`
        @keyframes rotBGimg {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </motion.div>
  );
};

const ValuesSection = () => {
  return (
    <section className="relative py-16 bg-background overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-red-900/20 rounded-full blur-3xl"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob dark:bg-red-700"></div>
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:bg-pink-800"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white">OUR</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-red-600">VALUES</h2>
          <p className="text-muted text-sm sm:text-base mt-4 leading-relaxed dark:text-gray-300 max-w-md">
            The principles that shape our existence, guiding us through challenges in every garment we restore.
          </p>
        </motion.div>

        {/* Responsive grid for all cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <ValueCard key={value.id} value={value} index={index} />
          ))}
        </div>
      </div>

      {/* Floating shapes animation */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 10s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};

export default ValuesSection;
