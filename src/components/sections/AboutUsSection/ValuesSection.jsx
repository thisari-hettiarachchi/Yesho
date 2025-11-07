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
    description: "We adhere to the standards, methods precision and care."
  },
  {
    id: 2,
    number: "02",
    icon: integrity,
    title: "Integrity",
    description: "We uphold honesty and transparency in every interaction."
  },
  {
    id: 3,
    number: "03",
    icon: commintment,
    title: "Commitment",
    description: "Dedicated to exceeding client expectations."
  },
  {
    id: 4,
    number: "04",
    icon: sustainability,
    title: "Sustainability",
    description: "Environmentally friendly garment restoration for a greener industry."
  },
  {
    id: 5,
    number: "05",
    icon: innovation,
    title: "Innovation",
    description: "Leveraging cutting-edge techniques to deliver the best results."
  },
];

const ValuesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* First row*/}
        <div className="grid grid-cols-3 gap-6 items-start">
          {/* Title */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">OUR</h2>
              <h2 className="text-3xl md:text-4xl font-bold text-red-600">VALUES</h2>
              <p className="text-muted text-sm mt-4 leading-relaxed">
                The principles that shape our existence, guiding us through challenges in every garment we restore.
              </p>
            </motion.div>
          </div>

          {/* First 2 cards */}
          {values.slice(0, 2).map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="col-span-1"
            >
              <div className="relative bg-surface border-2 border-red-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                {/* Number badge */}
                <div className="absolute -top-3 -left-3 w-14 h-14 bg-red-600 text-white flex items-center justify-center rounded-lg font-bold text-xl shadow-md">
                  {value.number}
                </div>

                {/* Card content */}
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{value.description}</p>
                </div>

                {/* Icon inside card */}
                <div className="absolute top-2 right-6 w-20 h-20">
                  <Image src={value.icon} alt={value.title} fill className="object-contain" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second row */}
        <div className="flex flex-wrap gap-6 mt-8" >
          {values.slice(2).map((value) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="flex-1 min-w-[250px] max-w-[390px] relative bg-surface border-2 border-red-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Number badge */}
              <div className="absolute -top-3 -left-3 w-14 h-14 bg-red-600 text-white flex items-center justify-center rounded-lg font-bold text-xl shadow-md">
                {value.number}
              </div>

              {/* Card content */}
              <div className="pt-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{value.description}</p>
              </div>

              {/* Icon inside card */}
              <div className="absolute top-2 right-6 w-20 h-20">
                <Image src={value.icon} alt={value.title} fill className="object-contain" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
