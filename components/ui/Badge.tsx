import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-2 py-0.5 text-[10px] tracking-wider uppercase border border-border text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
