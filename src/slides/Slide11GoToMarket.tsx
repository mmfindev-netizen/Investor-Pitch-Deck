import { pitchDeckConfig } from "../config/pitchDeckConfig";
import {
  SlideContainer,
  GlassCard,
  SectionHeading,
  FlowConnector,
} from "../components";
import { useSlideAnimation, delayClass } from "../hooks/useSlideAnimation";

const data = pitchDeckConfig.slides.slide11;

export function Slide11GoToMarket() {
  const { ready, complete, animClass } = useSlideAnimation(11);

  return (
    <SlideContainer
      number={data.number}
      label={data.label}
      animationComplete={complete}
    >
      <SectionHeading title={data.title} />

      <div className="slide-gtm__layout">
        <GlassCard
          className={ready ? `${animClass} fade-left ${delayClass(1)}` : ""}
        >
          <div className="text-label" style={{ marginBottom: 14 }}>
            Main Flow
          </div>
          <FlowConnector steps={data.flow} direction="vertical" />
        </GlassCard>

        <div>
          <div
            className={`slide-gtm__sides ${ready ? `${animClass} fade-right ${delayClass(2)}` : ""}`}
          >
            <GlassCard>
              <div className="text-label" style={{ marginBottom: 10 }}>
                Target Customers
              </div>
              <ul className="list-check">
                {data.targetCustomers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard>
              <div className="text-label" style={{ marginBottom: 10 }}>
                Acquisition Channels
              </div>
              <ul className="list-check">
                {data.acquisitionChannels.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <div
            className={`slide-gtm__bottom ${ready ? `${animClass} fade-up ${delayClass(4)}` : ""}`}
          >
            {data.bottomSections.map((section) => (
              <GlassCard key={section.title} compact>
                <div
                  className="text-subtitle"
                  style={{ fontSize: 13, marginBottom: 6, color: "var(--secondary-cyan)" }}
                >
                  {section.title}
                </div>
                <p className="text-body" style={{ fontSize: 12, lineHeight: 1.4 }}>
                  {section.text}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
