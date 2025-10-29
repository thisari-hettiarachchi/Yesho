"use client";
import React from "react";

const works = [
    "/assets/img6.jpg",
    "/assets/img7.jpg",
    "/assets/img2.jpg",
    "/assets/img3.jpg",
];

const WorkShowcaseSection = () => {
    return (
        <section className="py-16 bg-gray-50 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
                OUR WORK <span className="text-red-600">SHOWCASE</span>
            </h2>
            <p className="text-gray-600 mb-10">
                A visual look at our craftsmanship and attention to detail.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
                {works.map((img, i) => (
                    <div key={i} className="border-2 border-gray-200 rounded-lg overflow-hidden shadow">
                        <img src={img} alt={`Work ${i + 1}`} className="object-cover w-full h-60" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkShowcaseSection;

