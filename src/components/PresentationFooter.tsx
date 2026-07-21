import type { ReactNode } from "react";
import { LegalDisclosure } from "./LegalDisclosure";

interface PresentationFooterProps {
  disclosure?: string;
  meta?: readonly string[];
  emphasis?: boolean;
  children?: ReactNode;
  className?: string;
}

export function PresentationFooter({
  disclosure,
  meta,
  emphasis = false,
  children,
  className = "",
}: PresentationFooterProps) {
  if (!disclosure && !meta?.length && !children) return null;

  return (
    <footer className={`presentation-footer ${className}`}>
      {disclosure && (
        <LegalDisclosure text={disclosure} emphasis={emphasis} />
      )}
      {children}
      {meta && meta.length > 0 && (
        <div className="footer-meta">
          {meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      )}
    </footer>
  );
}
