interface LegalDisclosureProps {
  text: string;
  emphasis?: boolean;
  className?: string;
}

export function LegalDisclosure({
  text,
  emphasis = false,
  className = "",
}: LegalDisclosureProps) {
  return (
    <p
      className={`legal-disclosure ${emphasis ? "legal-disclosure--emphasis" : ""} ${className}`}
    >
      {text}
    </p>
  );
}
