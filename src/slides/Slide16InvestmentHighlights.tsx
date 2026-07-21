import { pitchDeckConfig } from "../config/pitchDeckConfig";
import {
  SlideContainer,
  GlassCard,
  OutlineIcon,
} from "../components";
import { useSlideAnimation, delayClass } from "../hooks/useSlideAnimation";
import type { IconName } from "../components/OutlineIcon";

const data = pitchDeckConfig.slides.slide16;

const HIGHLIGHT_ICONS: IconName[] = [
  "globe",
  "building",
  "chart",
  "shield",
  "cpu",
  "flow",
  "users",
  "target",
];

export function Slide16InvestmentHighlights() {
  const { ready, complete, animClass } = useSlideAnimation(16);

  return (
    <SlideContainer
      number={data.number}
      label={data.label}
      animationComplete={complete}
    >
      <h2
        className={`slide-why__title ${ready ? `${animClass} fade-in ${delayClass(1)}` : ""}`}
      >
        {data.title}
      </h2>
      <p
        className={`slide-why__subtitle ${ready ? `${animClass} fade-in ${delayClass(1)}` : ""}`}
      >
        {data.subtitle}
      </p>

      <div className="slide-why__highlights">
        {data.highlights.map((h, i) => (
          <GlassCard
            key={h}
            className={`slide-why__highlight ${ready ? `${animClass} fade-up ${delayClass(Math.min(i + 2, 10))}` : ""}`}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <OutlineIcon name={HIGHLIGHT_ICONS[i]} size={22} accent />
            </div>
            {h}
          </GlassCard>
        ))}
      </div>

      <div
        className={`slide-why__mid ${ready ? `${animClass} fade-up ${delayClass(8)}` : ""}`}
      >
        <GlassCard>
          <div className="text-label" style={{ marginBottom: 10 }}>
            Investment Summary
          </div>
          <ul className="list-check">
            {data.investmentSummary.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard>
          <div className="text-label" style={{ marginBottom: 10 }}>
            Investment Thesis
          </div>
          <ul className="list-check">
            {data.investmentThesis.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GlassCard>
      </div>

      <div
        className={`slide-why__bottom ${ready ? `${animClass} fade-in ${delayClass(9)}` : ""}`}
      >
        {data.bottomStatement}
      </div>
    </SlideContainer>
  );
}
