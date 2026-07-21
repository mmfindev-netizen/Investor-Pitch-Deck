import { pitchDeckConfig } from "../config/pitchDeckConfig";
import {
  SlideContainer,
  GlassCard,
  SectionHeading,
  StatusBadge,
  FlowConnector,
  PresentationFooter,
} from "../components";
import { useSlideAnimation, delayClass } from "../hooks/useSlideAnimation";

const data = pitchDeckConfig.slides.slide17;

export function Slide17ExitOpportunities() {
  const { ready, complete, animClass } = useSlideAnimation(17);

  return (
    <SlideContainer
      number={data.number}
      label={data.label}
      animationComplete={complete}
      footer={
        <PresentationFooter disclosure={data.mandatoryDisclosure} emphasis />
      }
    >
      <SectionHeading title={data.title} />
      <p
        className={`slide-exit__message ${ready ? `${animClass} fade-in ${delayClass(1)}` : ""}`}
      >
        {data.coreMessage}
      </p>

      <div className="slide-exit__layout">
        <div>
          <div
            className={`slide-exit__paths ${ready ? `${animClass} fade-left ${delayClass(2)}` : ""}`}
          >
            {data.liquidityPaths.map((path) => (
              <GlassCard key={path.title} compact className="slide-exit__path">
                <div className="slide-exit__path-title">{path.title}</div>
                <StatusBadge label={path.status} muted />
              </GlassCard>
            ))}
          </div>

          <GlassCard
            style={{ marginTop: 12 }}
            className={ready ? `${animClass} fade-up ${delayClass(4)}` : ""}
          >
            <div className="text-label" style={{ marginBottom: 10 }}>
              Enterprise Value Drivers
            </div>
            <div className="slide-exit__ev">
              {data.enterpriseValueDrivers.map((d) => (
                <StatusBadge key={d} label={d} />
              ))}
            </div>
          </GlassCard>
        </div>

        <div
          className={`slide-exit__flows ${ready ? `${animClass} fade-right ${delayClass(3)}` : ""}`}
        >
          <GlassCard>
            <div className="text-label" style={{ marginBottom: 12 }}>
              Conceptual Liquidity Timeline
            </div>
            <FlowConnector
              steps={data.conceptualTimeline}
              direction="vertical"
            />
          </GlassCard>

          <GlassCard>
            <div className="text-label" style={{ marginBottom: 12 }}>
              Investor Participation
            </div>
            <FlowConnector
              steps={data.investorParticipation}
              direction="horizontal"
            />
          </GlassCard>

          <GlassCard compact>
            <div className="text-label" style={{ marginBottom: 8 }}>
              Investor Protections
            </div>
            <ul className="list-check">
              {data.investorProtections.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </SlideContainer>
  );
}
