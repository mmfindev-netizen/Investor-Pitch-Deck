import type { CSSProperties } from "react";
import { pitchDeckConfig } from "../config/pitchDeckConfig";
import {
  SlideContainer,
  GlassCard,
  SectionHeading,
  OutlineIcon,
  PresentationFooter,
} from "../components";
import { useSlideAnimation, delayClass } from "../hooks/useSlideAnimation";

const data = pitchDeckConfig.slides.slide09;

const CONTROL_POSITIONS = [
  { top: "2%", left: "50%", transform: "translateX(-50%)" },
  { top: "14%", right: "4%" },
  { top: "42%", right: "0%" },
  { bottom: "18%", right: "4%" },
  { bottom: "2%", left: "50%", transform: "translateX(-50%)" },
  { bottom: "18%", left: "4%" },
  { top: "42%", left: "0%" },
  { top: "14%", left: "4%" },
] as const;

export function Slide09SecurityCustodyCompliance() {
  const { ready, complete, animClass } = useSlideAnimation(9);

  return (
    <SlideContainer
      number={data.number}
      label={data.label}
      animationComplete={complete}
      footer={
        <PresentationFooter disclosure={data.cautionNote} emphasis />
      }
    >
      <SectionHeading title={data.title} />

      <div className="slide-sec__hub-area">
        <div
          className={`slide-sec__shield ${ready ? `${animClass} scale-in ${delayClass(1)}` : ""}`}
        >
          <OutlineIcon name="shield" size={36} accent />
          <span className="slide-sec__shield-label">{data.shieldLabel}</span>
        </div>
        <div className="slide-sec__controls">
          {data.controls.map((control, i) => (
            <GlassCard
              key={control}
              compact
              className={`slide-sec__control ${ready ? `${animClass} fade-in ${delayClass(Math.min(i + 2, 10))}` : ""}`}
              style={CONTROL_POSITIONS[i] as CSSProperties}
            >
              <div
                className="text-subtitle"
                style={{ fontSize: 12, textAlign: "center" }}
              >
                {control}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <div
        className={`slide-sec__bottom ${ready ? `${animClass} fade-up ${delayClass(8)}` : ""}`}
      >
        <GlassCard>
          <div className="text-label" style={{ marginBottom: 10 }}>
            Security Standards
          </div>
          <ul className="list-check">
            {data.securityStandards.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard>
          <div className="text-label" style={{ marginBottom: 10 }}>
            Compliance Lifecycle
          </div>
          <ul className="list-check">
            {data.complianceLifecycle.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </SlideContainer>
  );
}
