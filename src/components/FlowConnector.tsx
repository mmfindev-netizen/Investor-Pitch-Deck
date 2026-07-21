interface FlowConnectorProps {
  steps: readonly string[];
  direction?: "vertical" | "horizontal";
  className?: string;
}

export function FlowConnector({
  steps,
  direction = "vertical",
  className = "",
}: FlowConnectorProps) {
  if (direction === "horizontal") {
    return (
      <div className={`flow-connector flow-connector--horizontal ${className}`}>
        {steps.map((step, index) => (
          <div key={step} className="flow-connector__h-item">
            <div className="flow-connector__node">{step}</div>
            {index < steps.length - 1 && (
              <div className="flow-connector__h-arrow" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flow-connector ${className}`}>
      {steps.map((step, index) => (
        <div key={step} className="flow-connector__step">
          <div className="flow-connector__node">{step}</div>
          {index < steps.length - 1 && (
            <div className="flow-connector__arrow" aria-hidden="true" />
          )}
        </div>
      ))}
    </div>
  );
}
