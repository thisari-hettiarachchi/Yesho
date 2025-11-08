"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { vision, mission } from "@/assets";

const VisionMissionSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">OUR</span>{" "}
            <span className="text-red-600">VISION</span>{" "}
            <span className="text-foreground">&</span>{" "}
            <span className="text-red-600">MISSION</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mt-3">
            Guiding ur journey through dedication, quality and innovation.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mt-22"
        >
          {/* Left Column - Text Content */}
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-left">
              Our Vision
            </h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-left">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            <p className="text-muted text-base leading-relaxed">
              To provide exceptional garment and textile mending services that
              meet the highest quality standards, fostering long-term
              partnerships with our clients and contributing to their success.
            </p>
          </div>

          {/* Right Column - Images Side by Side */}
          <div className="flex-1 flex flex-row gap-4 relative items-start">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
              className="relative w-[200px] md:w-[240px] h-[250px] md:h-[300px] overflow-hidden"
            >
              <Image
                src={img4}
                alt="Vision 1"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false }}
              className="relative w-[200px] md:w-[240px] h-[250px] md:h-[300px] overflow-hidden mt-8 md:mt-12"
            >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
            className="flex justify-end"
          >
            <div className="relative w-full max-w-[400px] aspect-[4/3] overflow-hidden mx-auto">
              <Image
                src={vision}
                alt="Our Vision"
                fill
                className="object-cover rounded-2xl"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mt-20"
        >
          <div className="flex-1 flex flex-row gap-4 relative items-start">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
              className="relative w-[200px] md:w-[240px] h-[250px] md:h-[300px] overflow-hidden"
            >
              <Image
                src={img4}
                alt="Vision 1"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: false }}
              className="relative w-[200px] md:w-[240px] h-[250px] md:h-[300px] overflow-hidden mt-8 md:mt-12"
            >
              <Image
                src={img1}
                alt="Vision 2"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </div>
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground text-left">
              Our Mission
            </h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-left">
              To be the leading provider of innovative and high-quality garment
              and textile mending solutions in Sri Lanka and beyond, setting the
              standard for excellence through expertise, technology, and trust.
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
            className="flex justify-start order-2 md:order-1"
          >
            <div className="relative w-full max-w-[400px] aspect-[4/3] overflow-hidden mx-auto">
              <Image
                src={mission}
                alt="Our Mission"
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>

          <div className="space-y-4 order-1 md:order-2">
            <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            <p className="text-muted text-base leading-relaxed">
              To be the leading provider of innovative and high-quality garment
              and textile mending solutions in Sri Lanka and beyond, setting
              industry standards through expertise, technology, and trust.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
