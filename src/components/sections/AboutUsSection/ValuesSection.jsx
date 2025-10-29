"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { quality, integrity, commintment, sustainability, innovation } from "@/assets";

const values = [
  {
    id: 1,
    number: "01",
    icon: quality,
    title: "Quality",
    description: "We adhere to the standards, methods precision and care.",
  },
  {
    id: 2,
    number: "02",
    icon: integrity,
    title: "Integrity",
    description: "We uphold honesty and transparency in every interaction.",
  },
  {
    id: 3,
    number: "03",
    icon: commintment,
    title: "Commitment",
    description: "Dedicated to exceeding client expectations.",
  },
  {
    id: 4,
    number: "04",
    icon: sustainability,
    title: "Sustainability",
    description: "Environmentally friendly garment restoration for a greener industry.",
  },
  {
    id: 5,
    number: "05",
    icon: innovation,
    title: "Innovation",
    description: "Leveraging cutting-edge techniques to deliver the best results.",
  },
];

const ValuesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex items-start gap-8 mb-12">
          <div className="w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                OUR
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-red-600">
                VALUES
              </h2>
              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                The principles that shape our existence, guiding us through challenges in every garment we restore.
              </p>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="w-2/3 grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="flex gap-4 items-start"
              >
                {/* Card with border */}
                <div className="relative bg-white border-2 border-red-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 flex-1">
                  {/* Red Number Badge */}
                  <div className="absolute -top-3 -left-3 w-14 h-14 bg-red-600 text-white flex items-center justify-center rounded-lg font-bold text-xl shadow-md">
                    {value.number}
                  </div>

                  {/* Content */}
                  <div className="pt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>

                {/* Icon outside card */}
                <div className="relative w-16 h-16 flex-shrink-0 mt-4">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
