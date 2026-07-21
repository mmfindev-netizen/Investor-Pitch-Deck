import { GlassCard } from "./GlassCard";

interface MetricCardProps {
  label: string;
  value: string;
  sub?: string;
  accent?: boolean;
  className?: string;
}

export function MetricCard({
  label,
  value,
  sub,
  accent = false,
  className = "",
}: MetricCardProps) {
  return (
    <GlassCard className={`metric-card ${className}`}>
      <span className="metric-card__label">{label}</span>
      <span
        className={`metric-card__value ${accent ? "metric-card__value--accent" : ""}`}
      >
        {value}
      </span>
      {sub && <span className="metric-card__sub">{sub}</span>}
    </GlassCard>
  );
}
