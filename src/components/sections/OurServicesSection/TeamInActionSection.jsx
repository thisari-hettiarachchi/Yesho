"use client";
;
import { team } from "@/utils";
import Image from "next/image";
import React from "react";


const TeamInActionSection = () => {
    return (
        <section className="py-16 bg-background text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
                OUR TEAM <span className="text-red-600">IN ACTION</span>
            </h2>
            <p className="text-muted mb-10">
                Watch Our Skilled Team Transform Defects Into Perfection
            </p>

            <div className="flex justify-center flex-wrap gap-6 max-w-6xl mx-auto px-6">
                {team.map((img, i) => (
                    <Image
                        key={i}
                        src={img}
                        alt="Team working"
                        className="rounded-lg shadow-md w-80 h-56 object-cover"
                    />
                ))}
            </div>
        </section>
    );
};

export default TeamInActionSection;
