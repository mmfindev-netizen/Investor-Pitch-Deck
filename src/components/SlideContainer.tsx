import type { ReactNode } from "react";
import { InstitutionalBackground } from "./InstitutionalBackground";
import { SlideHeader } from "./SlideHeader";

interface SlideContainerProps {
  number: string;
  label: string;
  children: ReactNode;
  footer?: ReactNode;
  showHeader?: boolean;
  showLogo?: boolean;
  className?: string;
  contentClassName?: string;
  backgroundVariant?: "default" | "subtle" | "map";
  animationComplete?: boolean;
}

export function SlideContainer({
  number,
  label,
  children,
  footer,
  showHeader = true,
  showLogo = true,
  className = "",
  contentClassName = "",
  backgroundVariant = "default",
  animationComplete = false,
}: SlideContainerProps) {
  return (
    <section
      className={`slide-container ${animationComplete ? "slide-static" : ""} ${className}`}
      aria-label={`Slide ${number}: ${label}`}
    >
      <InstitutionalBackground variant={backgroundVariant} />
      <div className={`slide-content ${contentClassName}`}>
        {showHeader && (
          <SlideHeader number={number} label={label} showLogo={showLogo} />
        )}
        <div className="slide-body">{children}</div>
        {footer}
      </div>
    </section>
  );
}
