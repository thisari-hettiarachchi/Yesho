"use client";
import { works } from "@/utils";
import Image from "next/image";
import React from "react";

const WorkShowcaseSection = () => {
    return (
        <section className="py-16 bg-background text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground">
                OUR WORK <span className="text-red-600">SHOWCASE</span>
            </h2>
            <p className="text-muted mb-10">
                A visual look at our craftsmanship and attention to detail.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 justify-center">
                {works.map((img, i) => (
                    <div key={i} className="border-2 border-muted rounded-lg overflow-hidden shadow bg-surface">
                        <Image src={img} alt={`Work ${i + 1}`} className="object-cover w-full h-60" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkShowcaseSection;

