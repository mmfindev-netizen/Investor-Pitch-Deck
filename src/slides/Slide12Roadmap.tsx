import { pitchDeckConfig } from "../config/pitchDeckConfig";
import {
  SlideContainer,
  SectionHeading,
  Timeline,
  PresentationFooter,
} from "../components";
import { useSlideAnimation, delayClass } from "../hooks/useSlideAnimation";

const data = pitchDeckConfig.slides.slide12;

export function Slide12Roadmap() {
  const { ready, complete, animClass } = useSlideAnimation(12);

  return (
    <SlideContainer
      number={data.number}
      label={data.label}
      animationComplete={complete}
      footer={<PresentationFooter disclosure={data.note} />}
    >
      <SectionHeading title={data.title} />

      <div
        className={`slide-roadmap__timeline ${ready ? `${animClass} fade-up ${delayClass(2)}` : ""}`}
      >
        <Timeline stages={data.stages} />
      </div>
    </SlideContainer>
  );
}
