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
  return (
    <div
      className={`flow-connector ${direction === "horizontal" ? "flow-connector--horizontal" : ""} ${className}`}
    >
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
