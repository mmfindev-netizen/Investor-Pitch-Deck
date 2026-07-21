import { pitchDeckConfig } from "../config/pitchDeckConfig";
import {
  SlideContainer,
  GlassCard,
  SectionHeading,
} from "../components";
import { useSlideAnimation, delayClass } from "../hooks/useSlideAnimation";

const data = pitchDeckConfig.slides.slide14;

export function Slide14FundingAsk() {
  const { ready, complete, animClass } = useSlideAnimation(14);

  return (
    <SlideContainer
      number={data.number}
      label={data.label}
      animationComplete={complete}
    >
      <SectionHeading title={data.title} />

      <div
        className={`slide-fund__hero ${ready ? `${animClass} fade-up ${delayClass(1)}` : ""}`}
      >
        <div className="slide-fund__amount">{data.fundingTarget}</div>
        <div className="slide-fund__period">{data.executionPeriod}</div>
      </div>

      <div className="slide-fund__layout">
        <GlassCard
          className={ready ? `${animClass} fade-left ${delayClass(2)}` : ""}
        >
          <div className="text-label" style={{ marginBottom: 14 }}>
            Use of Funds
          </div>
          {data.useOfFunds.map((item) => (
            <div key={item.label} className="slide-fund__alloc-row">
              <span className="slide-fund__alloc-label">{item.label}</span>
              <span className="slide-fund__alloc-pct">{item.percent}%</span>
              <div className="slide-fund__bar-track">
                <div
                  className="slide-fund__bar-fill"
                  style={{ width: `${item.percent * 2.2}%`, maxWidth: "100%" }}
                />
              </div>
            </div>
          ))}
        </GlassCard>

        <div className={ready ? `${animClass} fade-right ${delayClass(3)}` : ""}>
          <GlassCard>
            <div className="text-label" style={{ marginBottom: 10 }}>
              Milestones
            </div>
            <ul className="list-check">
              {data.milestones.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </GlassCard>

          <div className="slide-fund__panels">
            {data.supportingPanels.map((panel) => (
              <GlassCard key={panel.title} compact>
                <div
                  className="text-subtitle"
                  style={{
                    fontSize: 12,
                    color: "var(--secondary-cyan)",
                    marginBottom: 6,
                  }}
                >
                  {panel.title}
                </div>
                <p className="text-body" style={{ fontSize: 12, lineHeight: 1.4 }}>
                  {panel.text}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
