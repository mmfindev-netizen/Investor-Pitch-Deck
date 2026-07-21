import { pitchDeckConfig } from "../config/pitchDeckConfig";
import {
  SlideContainer,
  GlassCard,
  SectionHeading,
  PresentationFooter,
} from "../components";
import { useSlideAnimation, delayClass } from "../hooks/useSlideAnimation";

const data = pitchDeckConfig.slides.slide07;

export function Slide07CompetitivePositioning() {
  const { ready, complete, animClass } = useSlideAnimation(7);

  return (
    <SlideContainer
      number={data.number}
      label={data.label}
      animationComplete={complete}
      footer={
        <PresentationFooter disclosure={data.inspirationNote} emphasis />
      }
    >
      <SectionHeading title={data.title} />

      <div className="slide-pos__layout">
        <GlassCard
          className={`slide-pos__matrix ${ready ? `${animClass} fade-left ${delayClass(1)}` : ""}`}
        >
          <div className="slide-pos__axis-y">
            <span>{data.axisY.high}</span>
            <span>{data.axisY.low}</span>
          </div>
          <div className="slide-pos__axis-x">
            <span>{data.axisX.low}</span>
            <span>{data.axisX.high}</span>
          </div>
          <div className="slide-pos__plot">
            {data.marketGroups.map((group) => (
              <div
                key={group.id}
                className={`slide-pos__point ${"highlight" in group && group.highlight ? "slide-pos__point--highlight" : ""}`}
                style={{ left: `${group.x}%`, bottom: `${group.y}%` }}
              >
                <div
                  className={`slide-pos__dot ${"highlight" in group && group.highlight ? "slide-pos__dot--highlight" : ""}`}
                />
                <span className="slide-pos__point-label">{group.label}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        <div
          className={`slide-pos__side ${ready ? `${animClass} fade-right ${delayClass(2)}` : ""}`}
        >
          <GlassCard strong>
            <div className="text-label" style={{ marginBottom: 10 }}>
              {data.whyDifferentTitle}
            </div>
            <ul className="list-check">
              {data.whyDifferent.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard>
            <div className="text-label" style={{ marginBottom: 8 }}>
              Strategic Inspiration
            </div>
            <div className="slide-pos__inspiration">
              {data.inspiration.map((item) => (
                <div key={item.label} className="slide-pos__insp-item">
                  <span>{item.label}</span>
                  <span style={{ color: "var(--secondary-cyan)" }}>
                    {item.weight}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </SlideContainer>
  );
}
