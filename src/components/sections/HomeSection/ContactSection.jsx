"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { contactDetails } from "@/utils";



const ContactSection = () => {
  return (
    <div className="min-h-screen py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Contact <span className="text-red-600">Us</span>
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Get in touch with us for expert garment restoration services. We're
            here to help you achieve excellence.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative group flex justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <div className="relative w-full max-w-[480px] h-[260px] flex flex-col justify-between bg-surface border border-muted rounded-2xl p-8 hover:border-red-600/50 transition-all duration-500">
                  <div>
                    <div className="w-14 h-14 bg-red-600/85 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon className="w-7 h-7 text-foreground" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted mb-4 text-sm">
                      {item.description}
                    </p>
                  </div>
                  {item.info}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center pt-8">
          <Link href="/contactus">
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-red-600 rounded-full font-medium transition-all duration-300 overflow-hidden cursor-pointer">
              <span className="relative z-10 text-red-600 transition-colors duration-300 group-hover:text-white">
                Get In Touch
              </span>
              <ArrowRight className="w-5 h-5 relative z-10 text-red-600 transition-colors duration-300 group-hover:text-white group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-10 text-center">
          <p className="text-muted text-sm">
            Or reach out manually to{" "}
            <a
              href="mailto:hello@slothui.com"
              className="text-red-500 hover:text-red-700 transition-colors"
            >
              hello@slothui.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
