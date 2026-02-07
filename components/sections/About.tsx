"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { Parallax } from "@/components/animations/Parallax";
import { siteConfig } from "@/lib/config";

function CodeVisualization() {
  const lines = [
    { width: "60%", opacity: 0.3 },
    { width: "80%", opacity: 0.2 },
    { width: "45%", opacity: 0.15 },
    { width: "70%", opacity: 0.25 },
    { width: "55%", opacity: 0.2 },
    { width: "90%", opacity: 0.15 },
    { width: "40%", opacity: 0.3 },
    { width: "65%", opacity: 0.2 },
  ];

  return (
    <div className="space-y-2.5 py-8">
      {lines.map((line, i) => (
        <FadeIn key={i} delay={i * 0.05} direction="left">
          <div
            className="h-2 bg-fg rounded-full"
            style={{ width: line.width, opacity: line.opacity }}
          />
        </FadeIn>
      ))}
    </div>
  );
}

export function About() {
  return (
    <Container as="section" id="about" className="py-32 md:py-48">
      <SectionHeading label="01" title="About" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        <div className="space-y-6">
          {siteConfig.bio.map((paragraph, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p className="text-sm leading-relaxed text-muted">{paragraph}</p>
            </FadeIn>
          ))}
        </div>

        <div className="relative">
          <Parallax speed={0.2}>
            {/* Decorative bracket */}
            <div className="relative pl-6 border-l border-border">
              <FadeIn delay={0.2}>
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-light mb-6">
                  How I write code
                </p>
              </FadeIn>
              <CodeVisualization />
            </div>
          </Parallax>

          {/* Decorative circle */}
          <Parallax speed={-0.15} className="absolute -top-8 -right-4">
            <div className="w-16 h-16 rounded-full border border-border opacity-20" />
          </Parallax>
        </div>
      </div>
    </Container>
  );
}
