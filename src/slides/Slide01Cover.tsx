import { pitchDeckConfig } from "../config/pitchDeckConfig";
import { SlideContainer, GmaxiraLogo } from "../components";
import { useSlideAnimation, delayClass } from "../hooks/useSlideAnimation";

const data = pitchDeckConfig.slides.slide01;

export function Slide01Cover() {
  const { ready, complete, animClass } = useSlideAnimation(1);

  return (
    <SlideContainer
      number={data.number}
      label={data.label}
      showHeader={false}
      animationComplete={complete}
      contentClassName="slide-cover"
      backgroundVariant="map"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 28,
        }}
        className={ready ? `${animClass} fade-in ${delayClass(1)}` : ""}
      >
        <GmaxiraLogo size="lg" />
      </div>

      <div className="slide-cover__hero">
        <div
          className={`slide-cover__brand-block ${ready ? `${animClass} fade-left ${delayClass(2)}` : ""}`}
        >
          <div className="accent-line" />
          <div>
            <h1 className="slide-cover__brand-name">{data.brandName}</h1>
            <p className="slide-cover__descriptor">{data.descriptor}</p>
            <p className="slide-cover__tagline">{data.tagline}</p>
          </div>
        </div>

        <div
          className={`slide-cover__visual ${ready ? `${animClass} scale-in ${delayClass(3)}` : ""}`}
          aria-hidden="true"
        >
          <svg className="slide-cover__orbit" viewBox="0 0 480 480" fill="none">
            <circle
              cx="240"
              cy="240"
              r="200"
              stroke="rgba(15,98,254,0.25)"
              strokeWidth="1"
            />
            <circle
              cx="240"
              cy="240"
              r="140"
              stroke="rgba(53,208,255,0.3)"
              strokeWidth="1"
            />
            <circle
              cx="240"
              cy="240"
              r="80"
              stroke="rgba(15,98,254,0.4)"
              strokeWidth="1.5"
            />
            <circle cx="240" cy="240" r="28" fill="rgba(15,98,254,0.2)" stroke="#35D0FF" strokeWidth="1.5" />
            <circle cx="240" cy="40" r="4" fill="#35D0FF" />
            <circle cx="440" cy="240" r="4" fill="#0F62FE" />
            <circle cx="240" cy="440" r="3.5" fill="#35D0FF" />
            <circle cx="40" cy="240" r="3.5" fill="#0F62FE" />
            <circle cx="380" cy="100" r="3" fill="#35D0FF" opacity="0.7" />
            <circle cx="100" cy="380" r="3" fill="#0F62FE" opacity="0.7" />
            <line x1="240" y1="240" x2="240" y2="40" stroke="rgba(53,208,255,0.35)" strokeWidth="1" />
            <line x1="240" y1="240" x2="440" y2="240" stroke="rgba(15,98,254,0.35)" strokeWidth="1" />
            <line x1="240" y1="240" x2="380" y2="100" stroke="rgba(53,208,255,0.25)" strokeWidth="1" />
            <text
              x="240"
              y="246"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="Montserrat,sans-serif"
              fontSize="11"
              fontWeight="700"
              letterSpacing="1.5"
            >
              GLOBAL
            </text>
          </svg>
        </div>
      </div>
    </SlideContainer>
  );
}
