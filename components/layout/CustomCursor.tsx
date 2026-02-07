"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks";

export function CustomCursor() {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show on devices with a fine pointer (no touch)
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    setIsMobile(!hasPointer);

    if (!hasPointer) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    // Detect hoverable elements
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        "a, button, [role='button'], input, textarea, select, .cursor-hover"
      );
      setHovered(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY]);

  if (reduced || isMobile) return null;

  return (
    <>
      {/* Hide the default cursor globally */}
      <style>{`
        * { cursor: none !important; }
      `}</style>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x, y }}
      >
        <motion.div
          className="rounded-full border border-white -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: hovered ? 48 : 32,
            height: hovered ? 48 : 32,
            opacity: hidden ? 0 : 1,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="rounded-full bg-white -translate-x-1/2 -translate-y-1/2"
          animate={{
            width: hovered ? 8 : 4,
            height: hovered ? 8 : 4,
            opacity: hidden ? 0 : 1,
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        />
      </motion.div>
    </>
  );
}
