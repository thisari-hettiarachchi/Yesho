"use client";
import React from "react";
import HeroSection from "@/components/sections/OurServicesSection/ServiceHeroSection";
import KeyServicesSection from "@/components/sections/OurServicesSection/KeyServicesSection";
import WorkShowcaseSection from "@/components/sections/OurServicesSection/WorkShowcaseSection";
import TeamInActionSection from "@/components/sections/OurServicesSection/TeamInActionSection";

const ourservicesPage = () => {
    return (
        <main className="overflow-hidden">
            <HeroSection />
            <KeyServicesSection />
            <WorkShowcaseSection />
            <TeamInActionSection />
        </main>
    );
};

export default ourservicesPage;
