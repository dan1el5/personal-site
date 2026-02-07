/**
 * Static dot grid using a CSS radial-gradient pattern.
 * No canvas, no JS — just a background that tiles.
 */
export function DotGrid({
  spacing = 36,
  size = 1,
  opacity = 0.12,
  className,
}: {
  spacing?: number;
  size?: number;
  opacity?: number;
  className?: string;
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className ?? ""}`}
      style={{
        backgroundImage: `radial-gradient(circle, rgba(10, 10, 10, ${opacity}) ${size}px, transparent ${size}px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
      }}
    />
  );
}
