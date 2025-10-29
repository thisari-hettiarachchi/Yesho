"use client";
import React from "react";

const HeroSection = () => {
    return (
        <section className="relative flex items-center justify-center min-h-screen text-center overflow-hidden">
            {/* Background image */}
            <img
                src="/assets/bghero.jpg" // 👈 image inside src/assets
                alt="Our Services"
                className="absolute inset-0 w-full h-full object-cover -z-10"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50 -z-10"></div>

            {/* Text content */}
            <div className="px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Our Services
                </h1>
                <p className="text-lg md:text-xl text-slate-200 font-semibold max-w-2xl mx-auto">
                    We provide high-quality garment restoration and repair services to bring back the perfection and elegance of your clothing.
                </p>
            </div>
        </section>
    );
};

export default HeroSection;
