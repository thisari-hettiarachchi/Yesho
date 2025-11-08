"use client";
import { works } from "@/utils";
import Image from "next/image";
import React from "react";

const WorkShowcaseSection = () => {
  return (
    <section className="py-16 bg-background text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
        OUR WORK <span className="text-red-600">SHOWCASE</span>
      </h2>
      <p className="text-muted mb-10">
        A visual look at our craftmanship and attention to detail.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center max-w-5xl mx-auto px-6">
        {works.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`Work showcase ${i + 1}`}
            className="shadow-md w-94 h-60 object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default WorkShowcaseSection;
