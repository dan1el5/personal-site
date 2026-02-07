"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { Parallax } from "@/components/animations/Parallax";
import { SectionAccents } from "@/components/animations/SectionAccents";
import { siteConfig } from "@/lib/config";

function Highlights() {
  return (
    <div className="relative pl-6 border-l border-border">
      <FadeIn delay={0.2}>
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted-light mb-8">
          Stats
        </p>
      </FadeIn>

      <ul className="space-y-6">
        {siteConfig.highlights.map((highlight, i) => (
          <motion.li
            key={i}
            className="group"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3 + i * 0.1,
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          >
            <span className="block text-2xl md:text-3xl font-light tracking-tight text-fg">
              {highlight.value}
            </span>
            <span className="block text-xs text-muted mt-1 tracking-wide">
              {highlight.label}
            </span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative py-32 md:py-48 overflow-hidden bg-[#f3f3f3]"
    >
      <SectionAccents
        accents={[
          { type: "ring", size: 100, top: "10%", right: "5%", speed: 0.3 },
          { type: "dot", size: 8, top: "70%", left: "3%", speed: -0.2 },
          {
            type: "line",
            size: 80,
            bottom: "15%",
            right: "10%",
            speed: 0.15,
            rotate: -30,
          },
          { type: "cross", size: 16, top: "40%", left: "2%", speed: 0.25 },
        ]}
      />

      <Container className="relative">
        <SectionHeading label="01" title="About" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="space-y-6">
            {siteConfig.bio.map((paragraph, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <p className="text-sm leading-relaxed text-muted">
                  {paragraph}
                </p>
              </FadeIn>
            ))}
          </div>

          <div className="relative">
            <Parallax speed={0.2}>
              <Highlights />
            </Parallax>

            <Parallax speed={-0.15} className="absolute -top-8 -right-4">
              <div className="w-16 h-16 rounded-full border border-border opacity-20" />
            </Parallax>
          </div>
        </div>
      </Container>
    </section>
  );
}
