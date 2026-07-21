interface StatusBadgeProps {
  label: string;
  muted?: boolean;
  className?: string;
}

export function StatusBadge({
  label,
  muted = false,
  className = "",
}: StatusBadgeProps) {
  return (
    <span
      className={`status-badge ${muted ? "status-badge--muted" : ""} ${className}`}
    >
      {label}
    </span>
  );
}
