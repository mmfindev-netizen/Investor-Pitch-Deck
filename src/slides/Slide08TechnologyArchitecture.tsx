import { pitchDeckConfig } from "../config/pitchDeckConfig";
import {
  SlideContainer,
  GlassCard,
  SectionHeading,
} from "../components";
import { useSlideAnimation, delayClass } from "../hooks/useSlideAnimation";

const data = pitchDeckConfig.slides.slide08;

export function Slide08TechnologyArchitecture() {
  const { ready, complete, animClass } = useSlideAnimation(8);

  return (
    <SlideContainer
      number={data.number}
      label={data.label}
      animationComplete={complete}
    >
      <SectionHeading title={data.title} />

      <div className="slide-tech__layout">
        <div className={ready ? `${animClass} fade-left ${delayClass(1)}` : ""}>
          <div className="slide-tech__layers">
            {data.layers.map((layer) => (
              <GlassCard key={layer.name} compact className="slide-tech__layer">
                <div className="slide-tech__layer-name">{layer.name}</div>
                <div className="slide-tech__layer-items">
                  {layer.items.map((item) => (
                    <span key={item} className="slide-tech__chip">
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
          <div className="slide-tech__backbone">{data.backbone}</div>
        </div>

        <div className={ready ? `${animClass} fade-right ${delayClass(2)}` : ""}>
          <GlassCard style={{ marginBottom: 14 }}>
            <div className="text-label" style={{ marginBottom: 8 }}>
              Key Performance Targets
            </div>
            <div className="slide-tech__perf">
              {data.performance.map((row) => (
                <div key={row.label} className="slide-tech__perf-row">
                  <span style={{ color: "var(--secondary-text)" }}>
                    {row.label}
                  </span>
                  <strong style={{ color: "var(--secondary-cyan)" }}>
                    {row.value}
                  </strong>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <div className="text-label" style={{ marginBottom: 10 }}>
              Technology Stack
            </div>
            <div className="slide-tech__stack">
              {data.stack.map((tech) => (
                <span key={tech} className="slide-tech__chip">
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </SlideContainer>
  );
}
