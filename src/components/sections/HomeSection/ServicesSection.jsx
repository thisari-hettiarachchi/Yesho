import React from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/utils";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <div className="bg-(color:var(--background)) py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            KEY SERVICES <span className="text-red-500">WE OFFER</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our comprehensive range of solutions designed to elevate
            your experience
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.slice(0, 4).map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-[360px]"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority={false}
                />
              </div>
              <div className="px-6 py-6 text-center bg-white flex-1 flex items-center justify-center">
                <h3 className="text-base font-bold text-gray-900 leading-tight">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-red-500 text-red-500 rounded-full font-semibold hover:bg-red-500 hover:text-white transition-all duration-300">
            View More
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
