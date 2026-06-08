"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { companyInfo, navigationLinks } from "@/data/siteContent";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3 shadow-md"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="group flex items-center space-x-3 focus:outline-none">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-slate-200 bg-white p-0.5 shrink-0 shadow-sm">
              <Image
                src="/logo.png"
                alt="Site Support Services Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-primary transition-all duration-300">
                Site Support <span className="text-accent">Services</span>
              </span>
              <span className={`text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase ${scrolled ? "text-slate-600" : "text-slate-500"} group-hover:text-primary transition-all duration-300`}>
                {companyInfo.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-all-300 relative ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-slate-700 hover:text-primary hover:bg-slate-100/50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${companyInfo.phones[0].link}`}
              className="flex items-center text-sm font-semibold text-slate-700 hover:text-primary transition-all-300"
            >
              <Phone className="w-4 h-4 mr-2 text-accent" />
              <span className="hidden lg:inline">{companyInfo.phones[0].value}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-bold text-slate-900 bg-accent hover:bg-accent-hover transition-all-300 transform hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Request a Service
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-primary hover:bg-slate-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 h-6" /> : <Menu className="block h-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-lg"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-2.5 rounded-md text-base font-bold transition-all-300 ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-slate-800 hover:bg-slate-100 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 pb-2 border-t border-slate-100 px-3 flex flex-col space-y-3">
                <a
                  href={`tel:${companyInfo.phones[0].link}`}
                  className="flex items-center text-sm font-semibold text-slate-700 hover:text-primary transition-all-300"
                >
                  <Phone className="w-4 h-4 mr-2 text-accent" />
                  {companyInfo.phones[0].value}
                </a>
                <Link
                  href="/contact"
                  className="w-full text-center px-4 py-3 rounded-md shadow-sm text-base font-bold text-slate-900 bg-accent hover:bg-accent-hover transition-all-300 block"
                >
                  Request a Service
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
