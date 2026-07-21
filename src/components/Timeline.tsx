interface TimelineStage {
  year: string;
  title?: string;
  items?: readonly string[];
  note?: string;
}

interface TimelineProps {
  stages: readonly TimelineStage[];
  className?: string;
}

export function Timeline({ stages, className = "" }: TimelineProps) {
  return (
    <div className={`timeline ${className}`}>
      {stages.map((stage) => (
        <div key={stage.year} className="timeline__item">
          <div className="timeline__track" />
          <div className="timeline__dot" />
          <div className="timeline__year">{stage.year}</div>
          {stage.title && <div className="timeline__title">{stage.title}</div>}
          {stage.note && (
            <p className="text-body" style={{ fontSize: 12, paddingLeft: 4 }}>
              {stage.note}
            </p>
          )}
          {stage.items && (
            <ul className="timeline__items">
              {stage.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
