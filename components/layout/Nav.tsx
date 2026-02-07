"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Dev", href: "#dev" },
  { label: "GitHub", href: "#github" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop + closed mobile: blend mode for contrast */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 ${
          mobileOpen ? "" : "mix-blend-difference"
        }`}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 py-6">
          <a
            href="#"
            className={`text-sm font-medium tracking-wider uppercase ${
              mobileOpen ? "text-bg" : "text-white"
            }`}
          >
            {siteConfig.name}
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative text-xs tracking-widest uppercase text-white"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden text-xs tracking-widest uppercase ${
              mobileOpen ? "text-bg" : "text-white"
            }`}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-30 bg-fg"
          >
            <ul className="flex flex-col items-center justify-center h-full gap-12">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl tracking-widest uppercase text-bg font-light"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Decorative line at bottom */}
            <motion.div
              className="absolute bottom-12 left-1/2 -translate-x-1/2 w-12 h-px bg-bg/20"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
