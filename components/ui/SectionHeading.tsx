"use client";

import { RevealText } from "@/components/animations/RevealText";

interface SectionHeadingProps {
  label: string;
  title: string;
}

export function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <div className="mb-16 md:mb-24">
      <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
        {label}
      </p>
      <RevealText
        as="h2"
        className="text-3xl md:text-5xl font-light tracking-tight"
      >
        {title}
      </RevealText>
    </div>
  );
}
