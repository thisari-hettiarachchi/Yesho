"use client";
import React from "react";

const services = [
    {
        image: "/assets/img5.jpg",
        title: "Handling Color & Uneven Shading",
        description:
            "We specialize in identifying and correcting color mismatches, hue shifts, and uneven shading. Our expert color technicians ensure garment consistency while maintaining fabric quality and finish.",
    },
    {
        image: "/assets/img2.png",
        title: "Comprehensive Garment & Textile Review",
        description:
            "Our review process covers every detail of garment construction — from stitching accuracy to fabric integrity — ensuring garments meet production standards.",
    },
    {
        image: "/assets/img3.jpg",
        title: "Expert Repair & Mending of Defects",
        description:
            "Our skilled technicians perform precise repairs to correct holes, tears, and loose stitching, restoring garments to their original perfection.",
    },
    {
        image: "/assets/img4.jpeg",
        title: "Professional Stain Removal Services",
        description:
            "We remove stains caused by oils, dyes, and chemicals using safe methods that preserve texture and color while restoring garments to a spotless finish.",
    },
    {
        image: "/assets/img3.jpg",
        title: "Quality Assurance & Compliance Checks",
        description:
            "Before garments leave the facility, they undergo rigorous inspections to meet brand quality and compliance standards for flawless results.",
    },
];

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
                        <img
                            src={service.image}
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
