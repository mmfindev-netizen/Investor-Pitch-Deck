import { pitchDeckConfig } from "../config/pitchDeckConfig";
import {
  SlideContainer,
  GlassCard,
  SectionHeading,
  StatusBadge,
  PresentationFooter,
} from "../components";
import { useSlideAnimation, delayClass } from "../hooks/useSlideAnimation";

const data = pitchDeckConfig.slides.slide15;

export function Slide15InvestmentOpportunity() {
  const { ready, complete, animClass } = useSlideAnimation(15);

  return (
    <SlideContainer
      number={data.number}
      label={data.label}
      animationComplete={complete}
      footer={
        <PresentationFooter
          disclosure={data.capitalReturn.notGuaranteed}
          emphasis
          meta={[pitchDeckConfig.sharedDisclosures.noGuarantee]}
        />
      }
    >
      <SectionHeading title={data.title} />

      <div
        className={`slide-inv__core ${ready ? `${animClass} fade-in ${delayClass(1)}` : ""}`}
      >
        {data.coreAreas.map((area) => (
          <StatusBadge key={area} label={area} />
        ))}
      </div>

      <div className="slide-inv__layout">
        <GlassCard
          className={ready ? `${animClass} fade-up ${delayClass(2)}` : ""}
        >
          <div className="slide-inv__panel-title">Economic Participation</div>
          <ul className="list-check">
            {data.economicParticipation.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard
          className={ready ? `${animClass} fade-up ${delayClass(3)}` : ""}
        >
          <div className="slide-inv__panel-title">Governance Rights</div>
          <ul className="list-check">
            {data.governanceRights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard
          strong
          className={ready ? `${animClass} fade-up ${delayClass(4)}` : ""}
        >
          <div className="slide-inv__panel-title">
            {data.capitalReturn.title}
          </div>
          <p className="text-body" style={{ fontSize: 13, marginBottom: 12 }}>
            {data.capitalReturn.summary}
          </p>
          <ul className="list-check">
            {data.capitalReturn.conditions.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <div className="slide-inv__not-guaranteed">
            {data.capitalReturn.notGuaranteed}
          </div>
        </GlassCard>
      </div>
    </SlideContainer>
  );
}
