"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-amber-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo2.png"
                alt="Bamboo Green Logo"
                width={170}
                height={170}
                className="object-contain md:w-[170px] md:h-[170px] w-[100px] h-[100px] ml-4 md:ml-0"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block ml-auto">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-amber-100 hover:text-amber-50 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/accommodation"
                className="text-amber-100 hover:text-amber-50 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300"
              >
                Accommodation
              </Link>
              <Link
                href="/experiences"
                className="text-amber-100 hover:text-amber-50 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300"
              >
                Experiences
              </Link>
              <Link
                href="/events"
                className="text-amber-100 hover:text-amber-50 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300"
              >
                Events
              </Link>
              <Link
                href="/contact"
                className="text-amber-100 hover:text-amber-50 px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300"
              >
                Contact
              </Link>
              <Link href="/accommodation">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-amber-800 text-amber-50 px-6 py-2 rounded-lg font-medium tracking-wide hover:bg-amber-900 transition-all duration-300 shadow-lg"
                >
                  Book Now
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-amber-100 hover:text-amber-50 focus:outline-none transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-amber-900/90 backdrop-blur-md shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block text-amber-100 hover:text-amber-50 px-3 py-2 rounded-lg text-base font-medium tracking-wide transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/accommodation"
              className="block text-amber-100 hover:text-amber-50 px-3 py-2 rounded-lg text-base font-medium tracking-wide transition-colors duration-300"
            >
              Accommodation
            </Link>
            <Link
              href="/experiences"
              className="block text-amber-100 hover:text-amber-50 px-3 py-2 rounded-lg text-base font-medium tracking-wide transition-colors duration-300"
            >
              Experiences
            </Link>
            <Link
              href="/events"
              className="block text-amber-100 hover:text-amber-50 px-3 py-2 rounded-lg text-base font-medium tracking-wide transition-colors duration-300"
            >
              Events
            </Link>
            <Link
              href="/contact"
              className="block text-amber-100 hover:text-amber-50 px-3 py-2 rounded-lg text-base font-medium tracking-wide transition-colors duration-300"
            >
              Contact
            </Link>
            <Link href="/accommodation">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-amber-800 text-amber-50 px-6 py-2 rounded-lg font-medium tracking-wide hover:bg-amber-900 transition-all duration-300 shadow-lg"
              >
                Book Now
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
