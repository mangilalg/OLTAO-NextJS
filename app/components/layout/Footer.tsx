"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 5 },
    tap: { scale: 0.9 },
  };

  return (
    <footer className="bg-black text-white">
      <motion.div
        className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            variants={itemVariants}
            className="w-full lg:col-span-1 ll"
          >
            <h2 className="text-xl lg:text-2xl font-light leading-tight mb-6">
              Join the OLTAO Circle – Be the first
              <br />
              to know about new launches,
              <br />
              exclusive offers, and design inspiration.
            </h2>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white text-black px-4 py-3 pr-12 rounded-[8px] text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                className="cursor-pointer absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                aria-label="Submit"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Accessories", href: "/accessories" },
                { label: "About Warranty", href: "/about-warranty" },
                { label: "Why Oltao", href: "/why-oltao" },
                { label: "Contact Us", href: "/contact" },
                { label: "Remote Manual", href: "/remote-manual" },
                { label: "About Us", href: "/about" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-medium mb-4">Legal</h3>
            <ul className="space-y-2">
              {[
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Replacement Policy", href: "/replacement-policy" },
                { label: "Shipping Policy", href: "/shipping" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-medium mb-4">Collections</h3>
            <ul className="space-y-2">
              {[
                { label: "Chandelier Fans", href: "/chandelier-fans" },
                { label: "Luxury Fans", href: "/luxury-fans" },
                { label: "Designer Wall Fans", href: "/designer-wall-fans" },
                { label: "Hugger Fans", href: "/hugger-fans" },
                {
                  label: "Designer Ceiling Fans",
                  href: "/designer-ceiling-fans",
                },
                { label: "Bladeless Fan", href: "/bladeless-fan" },
                {
                  label: "Natural Wooden Blade Fan",
                  href: "/natural-wooden-blade-fan",
                },
                {
                  label: "Outdoor Ceiling Fans",
                  href: "/outdoor-ceiling-fans",
                },
                {
                  label: "Straight Blade Chandelier Fan",
                  href: "/straight-blade-chandelier-fan",
                },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-medium mb-4">Accessories</h3>
            <ul className="space-y-2">
              {[
                { label: "Crystal", href: "/crystal" },
                { label: "Canopy", href: "/canopy" },
                {
                  label: "Remote Controller Kit",
                  href: "/remote-controller-kit",
                },
                { label: "Downrods", href: "/downrods" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      <div className="border-t border-cream/10 ll py-6 overflow-hidden flex justify-center items-center  flex-col md:flex-row ">
        <div className="flex min-w-[75%] whitespace-nowrap animate-scroll ">
          <span className="text-2xl lg:text-3xl font-light tracking-wider mx-3">
            GET IN TOUCH -
          </span>
          <span className="text-2xl lg:text-3xl font-light tracking-wider mx-3">
            GET IN TOUCH -
          </span>
          <span className="text-2xl lg:text-3xl font-light tracking-wider mx-3">
            GET IN TOUCH -
          </span>
          <span className="text-2xl lg:text-3xl font-light tracking-wider mx-3">
            GET IN TOUCH -
          </span>
          <span className="text-2xl lg:text-3xl font-light tracking-wider mx-3">
            GET IN TOUCH -
          </span>
        </div>

        <div className="max-w-[25%] md:px-4 sm:px-6 lg:px-8 bg-black z-50 mt-2 md:mt-0">
          <div className="flex justify-center md:justify-end gap-3">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label="Facebook"
            >
              <motion.div
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
                className="p-0.5 w-6 h-6 md:w-10 md:h-10 bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.div>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label="Instagram"
            >
              <motion.div
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
                className="p-0.5 w-6 h-6 md:w-10 md:h-10 bg-linear-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.div>
            </Link>
            <Link
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label="Pinterest"
            >
              <motion.div
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
                className="p-0.5 w-6 h-6 md:w-10 md:h-10 bg-[#E60023] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </motion.div>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label="LinkedIn"
            >
              <motion.div
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
                className="p-0.5 w-6 h-6 md:w-10 md:h-10 bg-[#0077B5] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.div>
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              aria-label="YouTube"
            >
              <motion.div
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
                className="p-0.5 w-6 h-6 md:w-10 md:h-10 bg-[#FF0000] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center mb-6">
            <div className="text-center">
              <Image
                src="/footer-logo.png"
                alt="Oltao Logo"
                width={500}
                height={500}
                className="w-50 md:w-80 lg:00px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-start gap-4 mb-4 text-sm pb-3-5">
            <button className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <select
                id="language-select"
                defaultValue="English"
                className="block w-full px-1 py-2 bg-neutral-secondary-medium outline-none text-heading text-sm rounded-base shadow-xs placeholder:text-body cursor-pointer text-white"
                aria-label="Select Language"
              >
                <option value="English" className="flex gap-1">
                  English
                </option>
                <option value="Hindi" className="flex gap-1">
                  Hindi
                </option>
                <option value="Arabic" className="flex gap-1">
                  Arabic
                </option>
                <option value="French" className="flex gap-1">
                  French
                </option>
                <option value="German" className="flex gap-1">
                  German
                </option>
              </select>
            </button>
            <button className="cursor-pointer flex items-center gap-2 hover:text-gray-300 transition-colors">
              <select
                id="currency-select"
                defaultValue="INR"
                className="block w-full px-1 py-2 bg-neutral-secondary-medium outline-none text-heading text-sm rounded-base shadow-xs placeholder:text-body text-white cursor-pointer"
                aria-label="Select Currency"
              >
                <option value="INR" className="flex gap-1">
                  🇮🇳 INR
                </option>
                <option value="US" className="flex gap-1">
                  🇺🇸 USD
                </option>
                <option value="CA" className="flex gap-1">
                  🇨🇦 CA
                </option>
                <option value="FR" className="flex gap-1">
                  🇫🇷 FR
                </option>
                <option value="DE" className="flex gap-1">
                  🇩🇪 DE
                </option>
              </select>
            </button>
          </div>

          <p className="text-xs text-gray-400">
            OLTAO is a registered trademark of Nine Oasis Impex Pvt. Ltd.,
            registered in 2019. All rights reserved.
          </p>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </footer>
  );
}
