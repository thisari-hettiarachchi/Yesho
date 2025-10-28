"use client";
import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { logo, menu } from "@/assets";
import Link from "next/link";
import { navLinks } from "@/utils";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [nav, setNav] = useState(false);
  const pathname = usePathname();
  const isNotHomePage = pathname !== "/";

  const changeValueOnScroll = useCallback(() => {
    const scrollValue = window.scrollY;
    setNav(scrollValue > 100);

    // Reset active state when scrolling to top (hero section)
    if (scrollValue < 100 && !isNotHomePage) {
      setActive("");
    }
  }, [isNotHomePage]);

  useEffect(() => {
    let timeoutId;
    const debouncedScrollHandler = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(changeValueOnScroll, 50);
    };

    window.addEventListener("scroll", debouncedScrollHandler);
    return () => {
      window.removeEventListener("scroll", debouncedScrollHandler);
      clearTimeout(timeoutId);
    };
  }, [changeValueOnScroll]);

  // Reset active state when on home page
  useEffect(() => {
    if (!isNotHomePage) {
      setActive("");
    }
  }, [isNotHomePage]);

  return (
    <header className="w-full sticky top-0 z-70 ">
      <motion.nav
        animate={{
          top: nav || isNotHomePage ? "0rem" : "1rem",
          opacity: 1,
          background: nav || isNotHomePage ? "var(--navbar-glass)" : "var(--navbar-transparent)",
          backdropFilter: nav || isNotHomePage ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className={`w-full flex items-center justify-between px-6 md:px-10 transition-colors duration-500 ${nav || isNotHomePage
            ? "text-[color:var(--foreground)] font-semibold shadow-[0_2px_20px_rgba(0,0,0,0.05)]"
            : "mx-auto max-w-7xl text-[color:var(--muted-foreground)] relative"
          }`}
      >
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
            className="w-auto h-6 sm:h-8 md:h-16 object-contain transition-all duration-300"
          />
        </div>

        {/* Center: nav links */}
        <ul className="hidden md:flex items-center gap-10 tracking-[0.35em] text-xs uppercase absolute left-1/2 -translate-x-1/2">
          {navLinks.map((item) => (
            <li key={item.title} className="relative">
              <Link
                href={item.path}
                className={`transition-colors hover:text-[color:var(--foreground)] ${item.active ? "text-[color:var(--foreground)]" : ""
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
      </motion.nav>
    </header>
  );
};

export default NavBar;
