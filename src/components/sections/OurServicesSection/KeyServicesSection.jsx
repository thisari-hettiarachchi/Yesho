"use client";
import { services } from "@/utils";
import Image from "next/image";
import React from "react";

const KeyServicesSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">
                    KEY SERVICES <span className="text-red-600">WE OFFER</span>
                </h2>
                <p className="text-gray-600 mt-2">
                    Discover our comprehensive range of solutions designed to elevate your experience.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
                {services.map((service, i) => (
                    <div key={i} className="flex gap-6">
                        <Image
                            src={service.img}
                            alt={service.title}
                            className="w-40 h-40 object-cover rounded-lg shadow-md"
                        />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default KeyServicesSection;
