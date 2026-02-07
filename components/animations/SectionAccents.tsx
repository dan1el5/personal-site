"use client";

import { Parallax } from "@/components/animations/Parallax";

interface Accent {
  type: "ring" | "dot" | "line" | "cross" | "square";
  size: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  speed: number;
  rotate?: number;
}

function AccentShape({ accent }: { accent: Accent }) {
  const style = {
    top: accent.top,
    bottom: accent.bottom,
    left: accent.left,
    right: accent.right,
  };

  const inner = (() => {
    switch (accent.type) {
      case "ring":
        return (
          <div
            className="rounded-full border border-fg/20"
            style={{ width: accent.size, height: accent.size }}
          />
        );
      case "dot":
        return (
          <div
            className="rounded-full bg-fg/15"
            style={{ width: accent.size, height: accent.size }}
          />
        );
      case "line":
        return (
          <div
            className="bg-fg/20"
            style={{
              width: accent.size,
              height: 1,
              transform: `rotate(${accent.rotate ?? 0}deg)`,
            }}
          />
        );
      case "cross":
        return (
          <div className="relative" style={{ width: accent.size, height: accent.size }}>
            <div className="absolute top-1/2 left-0 w-full h-px bg-fg/20 -translate-y-1/2" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-fg/20 -translate-x-1/2" />
          </div>
        );
      case "square":
        return (
          <div
            className="border border-fg/15"
            style={{
              width: accent.size,
              height: accent.size,
              transform: `rotate(${accent.rotate ?? 0}deg)`,
            }}
          />
        );
    }
  })();

  return (
    <Parallax speed={accent.speed} className="absolute pointer-events-none hidden md:block" style={style}>
      {inner}
    </Parallax>
  );
}

export function SectionAccents({ accents }: { accents: Accent[] }) {
  return (
    <>
      {accents.map((accent, i) => (
        <AccentShape key={i} accent={accent} />
      ))}
    </>
  );
}
