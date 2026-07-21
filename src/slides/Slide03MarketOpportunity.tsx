import { pitchDeckConfig } from "../config/pitchDeckConfig";
import {
  SlideContainer,
  GlassCard,
  MetricCard,
  SectionHeading,
  StatusBadge,
  PresentationFooter,
} from "../components";
import { useSlideAnimation, delayClass } from "../hooks/useSlideAnimation";

const data = pitchDeckConfig.slides.slide03;

export function Slide03MarketOpportunity() {
  const { ready, complete, animClass } = useSlideAnimation(3);

  return (
    <SlideContainer
      number={data.number}
      label={data.label}
      animationComplete={complete}
      backgroundVariant="map"
      footer={
        <PresentationFooter
          disclosure={data.sourceNote}
          meta={[pitchDeckConfig.sharedDisclosures.dataRoom]}
        />
      }
    >
      <SectionHeading title={data.title} subtitle={data.subtitle} />

      <div className="slide-market__layout">
        <div className="slide-market__map-panel">
          <div
            className={`slide-market__metrics ${ready ? `${animClass} fade-up ${delayClass(1)}` : ""}`}
          >
            {data.metrics.map((m, i) => (
              <MetricCard
                key={m.id}
                label={m.label}
                value={m.value}
                sub={m.sub}
                accent={i === 0}
              />
            ))}
          </div>

          <div
            className={`slide-market__themes ${ready ? `${animClass} fade-up ${delayClass(3)}` : ""}`}
          >
            {data.themes.map((theme) => (
              <GlassCard key={theme.title} compact>
                <div className="slide-market__theme-title">{theme.title}</div>
                <div className="slide-market__theme-desc">{theme.description}</div>
              </GlassCard>
            ))}
          </div>
        </div>

        <GlassCard
          className={ready ? `${animClass} fade-right ${delayClass(2)}` : ""}
        >
          <div className="text-label" style={{ marginBottom: 12 }}>
            Market Segmentation
          </div>
          {data.segmentation.map((seg) => (
            <div key={seg.label} className="slide-market__seg-row">
              <span>{seg.label}</span>
              <StatusBadge label={seg.weight} />
            </div>
          ))}
          <div className="text-label" style={{ marginTop: 20, marginBottom: 8 }}>
            Research Credibility
          </div>
          <p className="text-body" style={{ fontSize: 12, lineHeight: 1.45 }}>
            Opportunity framing aligned with institutional digital capital markets
            research themes. Verified sizing figures are maintained in configuration
            and the investor data room.
          </p>
        </GlassCard>
      </div>
    </SlideContainer>
  );
}
