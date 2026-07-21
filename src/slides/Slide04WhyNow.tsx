import type { CSSProperties } from "react";
import { pitchDeckConfig } from "../config/pitchDeckConfig";
import {
  SlideContainer,
  GlassCard,
  SectionHeading,
  Timeline,
} from "../components";
import { useSlideAnimation, delayClass } from "../hooks/useSlideAnimation";

const data = pitchDeckConfig.slides.slide04;

const DRIVER_POSITIONS = [
  { top: "0%", left: "50%", transform: "translateX(-50%)" },
  { top: "18%", right: "4%" },
  { bottom: "22%", right: "4%" },
  { bottom: "0%", left: "50%", transform: "translateX(-50%)" },
  { bottom: "22%", left: "4%" },
  { top: "18%", left: "4%" },
] as const;

export function Slide04WhyNow() {
  const { ready, complete, animClass } = useSlideAnimation(4);

  return (
    <SlideContainer
      number={data.number}
      label={data.label}
      animationComplete={complete}
    >
      <SectionHeading title={data.title} />

      <div className="slide-whynow__hub-area">
        <div
          className={`hub-node slide-whynow__hub ${ready ? `${animClass} scale-in ${delayClass(1)}` : ""}`}
        >
          {data.hub}
        </div>
        <div className="slide-whynow__drivers">
          {data.drivers.map((driver, i) => (
            <GlassCard
              key={driver}
              compact
              className={`slide-whynow__driver ${ready ? `${animClass} fade-in ${delayClass(i + 2)}` : ""}`}
              style={DRIVER_POSITIONS[i] as CSSProperties}
            >
              <div
                className="text-subtitle"
                style={{ fontSize: 13, textAlign: "center" }}
              >
                {driver}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <div
        className={`slide-whynow__timeline ${ready ? `${animClass} fade-up ${delayClass(8)}` : ""}`}
      >
        <Timeline stages={data.timeline} />
      </div>
    </SlideContainer>
  );
}
