interface GmaxiraLogoProps {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
}

const SIZE_CLASS: Record<NonNullable<GmaxiraLogoProps["size"]>, string> = {
  sm: "gmaxira-logo--sm",
  md: "gmaxira-logo--md",
  lg: "gmaxira-logo--lg",
};

/**
 * Official Gmaxira GX monogram.
 * White letterforms on transparent background — preserves original colors
 * and landscape aspect ratio (~3:2).
 */
export function GmaxiraLogo({
  size = "sm",
  showWordmark = false,
  className = "",
}: GmaxiraLogoProps) {
  return (
    <div
      className={`gmaxira-logo ${SIZE_CLASS[size]} ${className}`}
      aria-label="Gmaxira"
    >
      <img
        className="gmaxira-logo-mark"
        src="/gmaxira-logo.png"
        alt="Gmaxira"
        draggable={false}
      />
      {showWordmark && <span className="gmaxira-logo-word">GMAXIRA</span>}
    </div>
  );
}
