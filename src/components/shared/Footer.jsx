"use client";
import React from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { logo } from "@/assets";
import { linkSections } from "@/utils";
import Image from "next/image";

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "hover:bg-pink-500" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:bg-sky-500" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com", color: "hover:bg-blue-600" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com", color: "hover:bg-red-600" },
  ];

  return (
    <footer className="relative bg-background text-muted overflow-hidden">
      {/* Blurred Background Accents */}
      <div className="absolute -top-10 -left-10 w-60 h-60 bg-gradient-to-tr from-red-800/30 via-red-500/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-gradient-to-br from-blue-900/30 via-blue-500/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-tr from-red-900/20 via-red-600/10 to-transparent rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      {/* Decorative top gradient line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-red-700 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-800 via-red-500 to-blue-900 animate-pulse opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Main Footer Section */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-3">
              <Image
                src={logo}
                alt="Yesho Intelligence Logo"
                width={180}
                height={80}
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="text-sm leading-relaxed mb-6 hover:text-foreground transition-colors duration-300 max-w-md">
              YESHO Intelligence is a leading expert in the field of garment and textile mending.
              We have built a reputation as a trusted partner for businesses seeking
              high-quality garment restoration services.
            </p>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {linkSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-foreground font-bold text-sm uppercase tracking-wider mb-4 relative inline-block group cursor-default">
                  {section.title}
                  <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></span>
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm text-muted hover:text-primary flex items-center group relative overflow-hidden px-2 py-1 -mx-2 rounded-lg hover:bg-surface transition-all duration-300"
                      >
                        <ChevronRight
                          size={14}
                          className="mr-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary"
                        />
                        <span>{link}</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Follow Us Section */}
          <div className="lg:col-span-3">
            <h3 className="text-foreground font-bold text-sm uppercase tracking-wider mb-4 relative inline-block group cursor-default">
              Follow Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative w-11 h-11 rounded-xl bg-surface border border-muted flex items-center justify-center text-muted hover:text-white ${social.color} hover:border-transparent transition-all duration-300 transform hover:scale-125 hover:shadow-2xl hover:-translate-y-2 group overflow-hidden`}
                    aria-label={social.name}
                  >
                    <Icon
                      size={18}
                      className="relative z-10 transition-all duration-300 group-hover:rotate-[360deg] group-hover:scale-110"
                    />
                    <span className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </a>
                );
              })}
            </div>
            <p className="text-muted text-xs mt-6 leading-relaxed hover:text-foreground transition-colors duration-300">
              Stay connected with us on social media for the latest updates, offers, and textile care tips.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4 text-xs pt-4">
          <a
            href="mailto:info@yeshointelligence.com"
            className="flex items-center text-muted hover:text-primary transition-all duration-300 group"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-surface flex items-center justify-center mr-2 group-hover:bg-primary group-hover:text-blue transition-all duration-300 shadow-sm group-hover:shadow-md">
              <Mail size={12} className="sm:w-3.5 sm:h-3.5" />
            </div>
            <span className="break-all">
              info@yeshoint.com
            </span>
          </a>

          <a
            href="tel:+1234567890"
            className="flex items-center text-muted hover:text-primary transition-all duration-300 group"
          >
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-surface flex items-center justify-center mr-2 group-hover:bg-primary group-hover:text-blue transition-all duration-300 shadow-sm group-hover:shadow-md">
              <Phone size={12} className="sm:w-3.5 sm:h-3.5" />
            </div>
            <span className="whitespace-nowrap">
              (+94) 777 - 722 - 485
            </span>
          </a>

          <div className="flex items-start sm:items-center text-muted group hover:text-primary transition-colors duration-300 cursor-default">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-surface flex items-center justify-center mr-2 mt-0.5 sm:mt-0 group-hover:bg-primary group-hover:text-blue transition-all duration-300 shadow-sm flex-shrink-0">
              <MapPin size={12} className="sm:w-3.5 sm:h-3.5" />
            </div>
            <span className="text-[10px] sm:text-xs">207/7 Dahampasal MW, Pahala Bomiriya, Kaduwela, Sri Lanka</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted py-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-muted group cursor-default">
              Copyright {new Date().getFullYear()} ©{" "}
              <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                Yesho Intelligence
              </span>{" "}
              All Rights Reserved.
            </p>
            <div className="flex gap-6 text-xs">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i) => (
                <a
                  key={i}
                  href={`/${item.toLowerCase().replace(" ", "")}`}
                  className="text-muted hover:text-primary transition-all duration-300 relative group"
                >
                  <span>{item}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Accent */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/5 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
