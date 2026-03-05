"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          mobileOpen ? "bg-fg" : ""
        }`}
      >
        {!mobileOpen && (
          <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm" />
        )}
        <nav className="relative flex items-center justify-between px-6 md:px-12 py-6">
          <a
            href="#"
            className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
              mobileOpen ? "text-bg" : "text-fg"
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
                  className="group relative text-xs tracking-widest uppercase text-fg"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-fg transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden text-xs tracking-widest uppercase transition-colors duration-300 ${
              mobileOpen ? "text-bg" : "text-fg"
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
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] as const }}
            className="md:hidden fixed inset-0 z-30 bg-fg"
          >
            <nav className="flex flex-col items-start justify-center h-full px-12 gap-10">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-center gap-4"
                  >
                    <span className="text-[10px] tracking-[0.2em] text-bg/30 font-mono">
                      0{i + 1}
                    </span>
                    <span className="text-3xl tracking-[0.15em] uppercase text-bg font-light group-hover:translate-x-2 transition-transform duration-300">
                      {item.label}
                    </span>
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Bottom accent */}
            <motion.div
              className="absolute bottom-16 left-12 right-12 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <div className="flex-1 h-px bg-bg/10" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-bg/30">
                {siteConfig.name}
              </span>
              <div className="flex-1 h-px bg-bg/10" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
