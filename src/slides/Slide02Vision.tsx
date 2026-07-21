import { pitchDeckConfig } from "../config/pitchDeckConfig";
import {
  SlideContainer,
  GlassCard,
  SectionHeading,
  OutlineIcon,
  PresentationFooter,
} from "../components";
import { useSlideAnimation, delayClass } from "../hooks/useSlideAnimation";

const data = pitchDeckConfig.slides.slide02;

export function Slide02Vision() {
  const { ready, complete, animClass } = useSlideAnimation(2);

  return (
    <SlideContainer
      number={data.number}
      label={data.label}
      animationComplete={complete}
      footer={
        <PresentationFooter
          meta={[pitchDeckConfig.sharedDisclosures.dataRoom]}
        />
      }
    >
      <SectionHeading title="Vision" />
      <p
        className={`slide-vision__message ${ready ? `${animClass} fade-up ${delayClass(1)}` : ""}`}
      >
        {data.coreMessage}
      </p>

      <div className="slide-vision__grid">
        <GlassCard
          className={`slide-vision__col slide-vision__col--problem ${ready ? `${animClass} fade-left ${delayClass(2)}` : ""}`}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <OutlineIcon name="layers" size={22} />
            <h3>{data.problemTitle}</h3>
          </div>
          <ul className="list-check">
            {data.problemItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GlassCard>

        <div
          className={`slide-vision__bridge ${ready ? `${animClass} fade-in ${delayClass(3)}` : ""}`}
        >
          <div className="slide-vision__bridge-line" />
          <OutlineIcon name="bridge" size={28} accent />
          <span className="slide-vision__bridge-label">{data.bridgeLabel}</span>
          <div className="slide-vision__bridge-line" />
        </div>

        <GlassCard
          strong
          className={`slide-vision__col slide-vision__col--vision ${ready ? `${animClass} fade-right ${delayClass(2)}` : ""}`}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <OutlineIcon name="network" size={22} accent />
            <h3>{data.visionTitle}</h3>
          </div>
          <ul className="list-check">
            {data.visionItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </SlideContainer>
  );
}
