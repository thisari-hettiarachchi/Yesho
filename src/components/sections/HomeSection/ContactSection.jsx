"use client";

import React, { useState } from "react";
import { Mail, Building2, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact <span className="text-red-600">Us</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get in touch with us for expert garment restoration services. We're
            here to help you achieve excellence.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email Support */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-500">
              <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Email Support
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                Our team can respond in real time.
              </p>
              <a
                href="mailto:hello@slothui.com"
                className="text-red-500 hover:text-red-400 transition-colors text-sm font-medium"
              >
                hello@slothui.com
              </a>
            </div>
          </div>

          {/* Visit Our Office */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-500">
              <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Visit Our Office
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                Visit our location in real life.
              </p>
              <p className="text-gray-300 text-sm font-medium">
                221b Elementary Avenue, NY
              </p>
            </div>
          </div>

          {/* Call Us Directly */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-500">
              <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Call Us Directly
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                Available during working hours.
              </p>
              <a
                href="tel:+12344567789"
                className="text-red-500 hover:text-red-400 transition-colors text-sm font-medium"
              >
                (+1) 234 - 4567 - 789
              </a>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center pt-8">
          <Link href="/contactus">
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-red-600 rounded-full text-white font-medium hover:bg-red-600 transition-all duration-300 overflow-hidden cursor-pointer">
              <span className="relative z-10">Get In Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm">
            Or reach out manually to{" "}
            <a
              href="mailto:hello@slothui.com"
              className="text-red-500 hover:text-red-400 transition-colors"
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
