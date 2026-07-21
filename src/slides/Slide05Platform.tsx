import type { CSSProperties } from "react";
import { pitchDeckConfig } from "../config/pitchDeckConfig";
import {
  SlideContainer,
  GlassCard,
  SectionHeading,
} from "../components";
import { useSlideAnimation, delayClass } from "../hooks/useSlideAnimation";

const data = pitchDeckConfig.slides.slide05;

const MODULE_POSITIONS = [
  { top: "2%", left: "50%", transform: "translateX(-50%)" },
  { top: "14%", right: "6%" },
  { top: "42%", right: "2%" },
  { bottom: "18%", right: "6%" },
  { bottom: "2%", left: "50%", transform: "translateX(-50%)" },
  { bottom: "18%", left: "6%" },
  { top: "42%", left: "2%" },
  { top: "14%", left: "6%" },
] as const;

export function Slide05Platform() {
  const { ready, complete, animClass } = useSlideAnimation(5);

  return (
    <SlideContainer
      number={data.number}
      label={data.label}
      animationComplete={complete}
    >
      <SectionHeading title={data.title} />

      <div className="slide-platform__hub-area">
        <div
          className={`hub-node slide-platform__hub ${ready ? `${animClass} scale-in ${delayClass(1)}` : ""}`}
        >
          {data.hub}
        </div>
        <div className="slide-platform__modules">
          {data.modules.map((mod, i) => (
            <GlassCard
              key={mod}
              compact
              className={`slide-platform__module ${ready ? `${animClass} fade-in ${delayClass(Math.min(i + 2, 10))}` : ""}`}
              style={MODULE_POSITIONS[i] as CSSProperties}
            >
              <div
                className="text-subtitle"
                style={{ fontSize: 13, textAlign: "center" }}
              >
                {mod}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <div
        className={`slide-platform__caps ${ready ? `${animClass} fade-up ${delayClass(8)}` : ""}`}
      >
        {data.capabilities.map((cap) => (
          <GlassCard key={cap} compact className="slide-platform__cap">
            {cap}
          </GlassCard>
        ))}
      </div>
    </SlideContainer>
  );
}
