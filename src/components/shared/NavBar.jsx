"use client";
import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { logo, menu, close } from "@/assets";
import Link from "next/link";
import { navLinks } from "@/utils";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isTop, setIsTop] = useState(true); // true when at top
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setIsTop(window.scrollY < 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Dynamic navbar style based on scroll and theme
  const navbarStyle = {
    background: isTop ? "transparent" : "var(--navbar-glass)",
    backdropFilter: isTop ? "none" : "blur(50px)",
    boxShadow: isTop ? "none" : "0 4px 30px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
  };

  const linkStyle = {
    color: "white",
    transition: "color 0.3s ease, opacity 0.3s ease",
  };

  return (
    <header className="w-full fixed top-0 left-0 z-[100]">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={navbarStyle}
        className="flex items-center justify-between w-full px-4 sm:px-6 md:px-10 h-16 sm:h-20"
      >
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer ml-0 sm:ml-4 md:ml-8 lg:ml-20"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src={logo}
            alt="logo"
            className="w-auto h-6 sm:h-8 md:h-12 lg:h-16 object-contain transition-all duration-300"
          />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10 tracking-[0.35em] text-xs uppercase absolute left-1/2 -translate-x-1/2">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-white z-[101]"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Image src={close} alt="close" width={24} height={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Image src={menu} alt="menu" width={24} height={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 sm:w-80 bg-background/95 backdrop-blur-xl shadow-2xl z-[100] lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col pt-24 px-6">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      className={`block py-4 text-lg font-medium transition-colors ${
                        pathname === item.path
                          ? "text-primary border-l-4 border-primary pl-4"
                          : "text-foreground hover:text-primary pl-4"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
