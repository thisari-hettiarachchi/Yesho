"use client";
import { services } from "@/utils";
import Image from "next/image";
import React from "react";

const KeyServicesSection = () => {
    return (
        <section className="py-16 bg-background">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    KEY SERVICES <span className="text-red-600">WE OFFER</span>
                </h2>
                <p className="text-muted mt-2">
                    Discover our comprehensive range of solutions designed to elevate your experience.
                </p>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col gap-12 px-6">
                {services.map((service, i) => (
                    <div
                        key={i}
                        className={`flex flex-col md:flex-row items-center gap-6 ${
                            i % 2 !== 0 ? "md:flex-row-reverse" : ""
                        }`}
                    >
                        <Image
                            src={service.img}
                            alt={service.title}
                            className="w-48 h-48 object-cover rounded-lg shadow-md"
                        />
                        <div className="max-w-md">
                            <h3 className="text-xl font-semibold text-foreground mb-2">
                                {service.title}
                            </h3>
                            <p className="text-muted text-sm">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default KeyServicesSection;
