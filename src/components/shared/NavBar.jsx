"use client";
import React from "react";
import Image from "next/image";
import { logo, menu } from "@/assets";
import Link from "next/link";
import { navLinks } from "@/utils";

const NavBar = () => {
  return (
    <header className="w-full sticky top-0 z-20 ">
      <nav className="mx-auto max-w-7xl px-6 md:px-10 pt-6 flex items-center justify-between text-slate-300 relative">
        {/* Left: Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Image
            src={logo}
            alt="logo"
            width={40}
            height={40}
            className="w-auto h-6 sm:h-8 md:h-16 object-contain transition-all duration-300"
          />
        </div>

        {/* Center: nav links */}
        <ul className="hidden md:flex items-center gap-10 tracking-[0.35em] text-xs uppercase absolute left-1/2 -translate-x-1/2">
          {navLinks.map((item) => (
            <li key={item.title} className="relative">
              <Link
                href={item.path}
                className={`hover:text-white transition-colors ${
                  item.active ? "text-white" : ""
                }`}
              >
                {item.title}
              </Link>
              {item.active && (
                <span className="absolute left-1/2 -bottom-4 -translate-x-1/2 h-2 w-2 rounded-full bg-red-500" />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
