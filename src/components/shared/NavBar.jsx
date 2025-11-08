"use client";
import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { logo } from "@/assets";
import Link from "next/link";
import { navLinks } from "@/utils";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isTop, setIsTop] = useState(true); // true when at top
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsTop(window.scrollY < 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Dynamic navbar style based on scroll and theme
  const navbarStyle = {
    background: isTop
      ? "transparent"
      : "var(--navbar-glass)",
    backdropFilter: isTop ? "none" : "blur(50px)",
    boxShadow: isTop ? "none" : "0 4px 30px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
  };

  const linkStyle = {
    color: isTop
      ? "white"
      : "var(--background)",
    transition: "color 0.3s ease, opacity 0.3s ease",
  };

  return (
    <header className="w-full fixed top-0 left-0 z-100">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={navbarStyle}
        className="flex items-center justify-between w-full px-6 md:px-10 h-20"
      >
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer ml-20"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src={logo}
            alt="logo"
            className="w-auto h-6 sm:h-8 md:h-16 object-contain transition-all duration-300"
          />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10 tracking-[0.35em] text-xs uppercase absolute left-1/2 -translate-x-1/2">
          {navLinks.map((item) => (
            <li key={item.title} className="relative">
              <Link
                href={item.path}
                style={{
                  ...linkStyle,
                  opacity: pathname === item.path ? 1 : 0.7,
                  fontWeight: pathname === item.path ? 600 : 400,
                }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
};

export default NavBar;
