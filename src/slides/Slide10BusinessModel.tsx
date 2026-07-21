import type { CSSProperties } from "react";
import { pitchDeckConfig } from "../config/pitchDeckConfig";
import {
  SlideContainer,
  GlassCard,
  SectionHeading,
} from "../components";
import { useSlideAnimation, delayClass } from "../hooks/useSlideAnimation";

const data = pitchDeckConfig.slides.slide10;

const SOURCE_POSITIONS = [
  { top: "0%", left: "50%", transform: "translateX(-50%)" },
  { top: "12%", right: "6%" },
  { top: "40%", right: "1%" },
  { bottom: "16%", right: "6%" },
  { bottom: "0%", left: "50%", transform: "translateX(-50%)" },
  { bottom: "16%", left: "6%" },
  { top: "40%", left: "1%" },
  { top: "12%", left: "6%" },
] as const;

export function Slide10BusinessModel() {
  const { ready, complete, animClass } = useSlideAnimation(10);

  return (
    <SlideContainer
      number={data.number}
      label={data.label}
      animationComplete={complete}
    >
      <SectionHeading title={data.title} />

      <div className="slide-rev__hub-area">
        <div
          className={`hub-node slide-rev__hub ${ready ? `${animClass} scale-in ${delayClass(1)}` : ""}`}
        >
          {data.hub}
        </div>
        <div className="slide-rev__sources">
          {data.sources.map((source, i) => (
            <GlassCard
              key={source}
              compact
              className={`slide-rev__source ${ready ? `${animClass} fade-in ${delayClass(Math.min(i + 2, 10))}` : ""}`}
              style={SOURCE_POSITIONS[i] as CSSProperties}
            >
              <div
                className="text-subtitle"
                style={{ fontSize: 12, textAlign: "center" }}
              >
                {source}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <div
        className={`slide-rev__panels ${ready ? `${animClass} fade-up ${delayClass(8)}` : ""}`}
      >
        {data.panels.map((panel) => (
          <GlassCard key={panel.title} compact>
            <div className="slide-rev__panel-title">{panel.title}</div>
            <ul className="list-check">
              {panel.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </SlideContainer>
  );
}
