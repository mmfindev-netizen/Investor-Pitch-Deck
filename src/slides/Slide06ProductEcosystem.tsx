import type { CSSProperties } from "react";
import { pitchDeckConfig } from "../config/pitchDeckConfig";
import {
  SlideContainer,
  GlassCard,
  SectionHeading,
} from "../components";
import { useSlideAnimation, delayClass } from "../hooks/useSlideAnimation";

const data = pitchDeckConfig.slides.slide06;

const PRODUCT_POSITIONS = [
  { top: "2%", left: "50%", transform: "translateX(-50%)" },
  { top: "14%", right: "8%" },
  { top: "42%", right: "4%" },
  { bottom: "18%", right: "8%" },
  { bottom: "2%", left: "50%", transform: "translateX(-50%)" },
  { bottom: "18%", left: "8%" },
  { top: "42%", left: "4%" },
  { top: "14%", left: "8%" },
] as const;

export function Slide06ProductEcosystem() {
  const { ready, complete, animClass } = useSlideAnimation(6);

  return (
    <SlideContainer
      number={data.number}
      label={data.label}
      animationComplete={complete}
    >
      <SectionHeading title={data.title} />

      <div className="slide-eco__hub-area">
        <div
          className={`hub-node slide-eco__hub ${ready ? `${animClass} scale-in ${delayClass(1)}` : ""}`}
        >
          {data.hub}
        </div>
        <div className="slide-eco__products">
          {data.products.map((product, i) => (
            <GlassCard
              key={product}
              compact
              className={`slide-eco__product ${ready ? `${animClass} fade-in ${delayClass(Math.min(i + 2, 10))}` : ""}`}
              style={PRODUCT_POSITIONS[i] as CSSProperties}
            >
              <div
                className="text-subtitle"
                style={{ fontSize: 13, textAlign: "center" }}
              >
                {product}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      <GlassCard
        className={`slide-eco__revenue ${ready ? `${animClass} fade-up ${delayClass(8)}` : ""}`}
      >
        <div className="slide-eco__revenue-title">{data.revenueStreamsLabel}</div>
        <div className="slide-eco__streams">
          {data.revenueStreams.map((stream) => (
            <span key={stream} className="slide-eco__stream">
              {stream}
            </span>
          ))}
        </div>
      </GlassCard>
    </SlideContainer>
  );
}
