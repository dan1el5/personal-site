"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { siteConfig } from "@/lib/config";

function DotGrid() {
  return (
    <motion.div
      className="absolute top-1/2 right-0 -translate-y-1/2 opacity-20 hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      transition={{ duration: 1.5, delay: 0.8 }}
    >
      <svg width="200" height="200" viewBox="0 0 200 200">
        {Array.from({ length: 100 }).map((_, i) => {
          const x = (i % 10) * 20 + 10;
          const y = Math.floor(i / 10) * 20 + 10;
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="1.5"
              fill="currentColor"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.01, duration: 0.3 }}
            />
          );
        })}
      </svg>
    </motion.div>
  );
}

const nameVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

const letterVariant = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 100]);

  const nameChars = siteConfig.name.split("");

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div style={{ opacity, y }} className="w-full">
        <Container className="relative">
          <DotGrid />

          {/* Decorative line */}
          <motion.div
            className="absolute -left-6 md:-left-12 top-0 w-px h-32 bg-border"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          <motion.p
            className="text-[10px] tracking-[0.3em] uppercase text-muted mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Portfolio
          </motion.p>

          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[0.9] mb-6">
            <motion.span
              className="block overflow-hidden"
              variants={nameVariants}
              initial="hidden"
              animate="visible"
            >
              {nameChars.map((char, i) => (
                <motion.span
                  key={i}
                  variants={letterVariant}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <motion.p
            className="text-sm md:text-base text-muted tracking-wide max-w-md mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {siteConfig.role}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <MagneticButton
              as="a"
              href="#dev"
              className="group inline-flex items-center gap-3 text-xs tracking-[0.2em] uppercase border border-fg px-6 py-3 hover:bg-fg hover:text-bg transition-colors duration-300"
            >
              See my work
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </MagneticButton>
          </motion.div>
        </Container>
      </motion.div>

      {/* Decorative circle */}
      <motion.div
        className="absolute bottom-24 right-12 w-24 h-24 rounded-full border border-border opacity-30 hidden lg:block"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
      />
    </section>
  );
}
