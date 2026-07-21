import type { ReactNode, CSSProperties } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  strong?: boolean;
  compact?: boolean;
  style?: CSSProperties;
}

export function GlassCard({
  children,
  className = "",
  strong = false,
  compact = false,
  style,
}: GlassCardProps) {
  const classes = [
    "glass-card",
    strong ? "glass-card--strong" : "",
    compact ? "glass-card--compact" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
}
