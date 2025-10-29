"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { img4, img1, img2 } from "@/assets";

const VisionMissionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            OUR <span className="text-red-600">VISION</span> &{" "}
            <span className="text-red-600">MISSION</span>
          </h2>
          <p className="text-gray-600 text-base mt-3">
            Guiding our journey through dedication, quality and innovation.
          </p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Our Vision
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              To provide exceptional garment and textile mending services that meet the highest quality standards, fostering long-term partnerships with our clients and contributing to their success.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
            className="flex gap-4 justify-end"
          >
            <div className="relative w-[240px] h-[200px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={img4}
                alt="Vision 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-[240px] h-[200px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={img1}
                alt="Vision 2"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
          className="grid md:grid-cols-2 gap-8 items-start"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
            className="relative h-[200px] rounded-md overflow-hidden order-2 md:order-1"
          >
            <Image
              src={img2}
              alt="Our Mission"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="space-y-4 order-1 md:order-2">
            <h3 className="text-2xl font-bold text-gray-900">
              Our Mission
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              To be the leading provider of innovative and high-quality garment and textile mending solutions in Sri Lanka and beyond, setting industry standards through expertise, technology, and trust.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
