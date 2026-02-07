"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { siteConfig } from "@/lib/config";

/**
 * Full-screen dot grid with auto-animating pulse + cursor reactivity.
 * A radial "wave" constantly moves across the grid so it's alive without hover.
 */
function DotGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const timeRef = useRef(0);
  const animFrameRef = useRef<number>(0);

  const SPACING = 32;
  const CURSOR_RADIUS = 180;

  const draw = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
    }

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);

    const cols = Math.ceil(rect.width / SPACING) + 1;
    const rows = Math.ceil(rect.height / SPACING) + 1;
    const time = timestamp * 0.001;

    const { x: mx, y: my } = mouseRef.current;
    const canvasRect = canvas.getBoundingClientRect();

    // Two traveling wave centers that orbit the canvas
    const wave1x = rect.width * 0.5 + Math.cos(time * 0.3) * rect.width * 0.4;
    const wave1y = rect.height * 0.5 + Math.sin(time * 0.4) * rect.height * 0.35;
    const wave2x = rect.width * 0.5 + Math.sin(time * 0.25) * rect.width * 0.35;
    const wave2y = rect.height * 0.5 + Math.cos(time * 0.35) * rect.height * 0.3;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * SPACING;
        const y = row * SPACING;

        // Auto-animate: traveling wave influence
        const d1 = Math.sqrt((x - wave1x) ** 2 + (y - wave1y) ** 2);
        const d2 = Math.sqrt((x - wave2x) ** 2 + (y - wave2y) ** 2);
        const waveInfluence =
          Math.max(0, 1 - d1 / 250) * 0.5 +
          Math.max(0, 1 - d2 / 200) * 0.4;

        // Cursor influence
        const dx = mx - canvasRect.left - x;
        const dy = my - canvasRect.top - y;
        const cursorDist = Math.sqrt(dx * dx + dy * dy);
        const cursorInfluence = Math.max(0, 1 - cursorDist / CURSOR_RADIUS);

        const influence = Math.min(1, waveInfluence + cursorInfluence);
        const r = 1 + influence * 2.5;
        const alpha = 0.06 + influence * 0.35;

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(10, 10, 10, ${alpha})`;
        ctx.fill();
      }
    }

    animFrameRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [draw]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 0.3 }}
    />
  );
}

/**
 * Floating geometric shapes — visible on all screen sizes.
 */
function FloatingShapes() {
  const shapes = [
    // Right side (desktop + mobile)
    { type: "ring", size: 180, x: "75%", y: "20%", delay: 0.6, duration: 30, mobileSize: 100, mobileX: "70%", mobileY: "10%" },
    { type: "ring", size: 100, x: "85%", y: "65%", delay: 1.0, duration: 22, mobileSize: 60, mobileX: "80%", mobileY: "75%" },
    { type: "circle", size: 80, x: "70%", y: "50%", delay: 0.8, duration: 25, mobileSize: 40, mobileX: "75%", mobileY: "45%" },
    // Left side — adds visual weight
    { type: "ring", size: 60, x: "5%", y: "70%", delay: 1.2, duration: 26, mobileSize: 40, mobileX: "8%", mobileY: "80%" },
    { type: "circle", size: 30, x: "15%", y: "20%", delay: 1.4, duration: 20, mobileSize: 20, mobileX: "12%", mobileY: "15%" },
    { type: "line", size: 120, x: "8%", y: "45%", delay: 1.0, duration: 18, rotate: 60, mobileSize: 70, mobileX: "5%", mobileY: "50%" },
    // Center/scattered
    { type: "square", size: 35, x: "45%", y: "80%", delay: 1.3, duration: 28, mobileSize: 25, mobileX: "50%", mobileY: "85%" },
    { type: "line", size: 80, x: "55%", y: "15%", delay: 1.5, duration: 24, rotate: -25, mobileSize: 50, mobileX: "60%", mobileY: "12%" },
    { type: "cross", size: 20, x: "25%", y: "35%", delay: 1.1, duration: 22, mobileSize: 14, mobileX: "20%", mobileY: "30%" },
    { type: "cross", size: 16, x: "88%", y: "35%", delay: 1.6, duration: 20, mobileSize: 12, mobileX: "85%", mobileY: "25%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: shape.x, top: shape.y }}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0, 8, 0],
            x: [0, 6, 0, -5, 0],
            rotate: shape.type === "square" ? [0, 90, 180, 270, 360] : undefined,
          }}
          transition={{
            opacity: { duration: 1, delay: shape.delay },
            scale: { duration: 1, delay: shape.delay },
            y: { duration: shape.duration, repeat: Infinity, ease: "easeInOut" },
            x: { duration: shape.duration * 1.3, repeat: Infinity, ease: "easeInOut" },
            rotate: shape.type === "square"
              ? { duration: shape.duration * 2, repeat: Infinity, ease: "linear" }
              : undefined,
          }}
        >
          {shape.type === "circle" && (
            <div
              className="rounded-full bg-fg/[0.1]"
              style={{ width: shape.size, height: shape.size }}
            />
          )}
          {shape.type === "ring" && (
            <div
              className="rounded-full border border-fg/20"
              style={{ width: shape.size, height: shape.size }}
            />
          )}
          {shape.type === "line" && (
            <div
              className="bg-fg/20"
              style={{
                width: shape.size,
                height: 1,
                transform: `rotate(${shape.rotate ?? 0}deg)`,
              }}
            />
          )}
          {shape.type === "square" && (
            <div
              className="border border-fg/15"
              style={{ width: shape.size, height: shape.size }}
            />
          )}
          {shape.type === "cross" && (
            <div className="relative" style={{ width: shape.size, height: shape.size }}>
              <div
                className="absolute top-1/2 left-0 w-full bg-fg/20"
                style={{ height: 1, transform: "translateY(-50%)" }}
              />
              <div
                className="absolute left-1/2 top-0 h-full bg-fg/20"
                style={{ width: 1, transform: "translateX(-50%)" }}
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
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
      {/* Background layers */}
      <DotGridBackground />
      <FloatingShapes />

      <motion.div style={{ opacity, y }} className="w-full relative z-10">
        <Container className="relative">
          {/* Decorative vertical line */}
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

          {/* Horizontal accent line below CTA */}
          <motion.div
            className="mt-16 w-24 h-px bg-border"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
        </Container>
      </motion.div>
    </section>
  );
}
