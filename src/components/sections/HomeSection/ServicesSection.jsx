import React from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/utils";
import Image from "next/image";

const ServiceCard = ({
  img,
  title,
  imageClass = "h-60",
  containerClass = "h-[340px]",
  titlePaddingClass = "px-6 py-4",
}) => {
  return (
    <div
      className={`bg-white rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col ${containerClass} max-w-sm mx-auto w-full`}
    >
      <div className={`relative w-full ${imageClass} overflow-hidden`}>
        <Image
          src={img}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover hover:scale-105 transition-transform duration-300"
          priority={false}
        />
      </div>
      <div
        className={`${titlePaddingClass} text-center bg-white flex-1 flex items-center justify-center`}
      >
        <h3 className="text-base font-bold text-gray-900 leading-tight">
          {title}
        </h3>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="bg-[color:var(--background)] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-(var(--foreground)) mb-3">
            KEY SERVICES <span className="text-red-500">WE OFFER</span>
          </h2>
          <p className="text-(var(--foreground)) text-lg">
            Discover our comprehensive range of solutions designed to elevate
            your experience
          </p>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
          {/* Card 1 */}
          <ServiceCard
            img={services[0].img}
            title={services[0].title}
            
          />

          {/* Card 2 */}
          <ServiceCard
            img={services[1].img}
            title={services[1].title}
            
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
          {/* Card 3 */}
          <ServiceCard
            img={services[2].img}
            title={services[2].title}
            
          />

          {/* Card 4 */}
          <ServiceCard
            img={services[3].img}
            title={services[3].title}
            
          />
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
