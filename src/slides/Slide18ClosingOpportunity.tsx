import { pitchDeckConfig } from "../config/pitchDeckConfig";
import {
  SlideContainer,
  GlassCard,
  GmaxiraLogo,
  PresentationFooter,
} from "../components";
import { useSlideAnimation, delayClass } from "../hooks/useSlideAnimation";

const data = pitchDeckConfig.slides.slide18;
const contact = pitchDeckConfig.contact;

function ContactFields() {
  const rows: { label: string; value: string }[] = [];

  if (contact.executiveName) {
    rows.push({ label: "Executive", value: contact.executiveName });
  }
  if (contact.executiveTitle) {
    rows.push({ label: "Title", value: contact.executiveTitle });
  }
  if (contact.investorRelationsEmail) {
    rows.push({ label: "IR Email", value: contact.investorRelationsEmail });
  }
  if (contact.corporateWebsite) {
    rows.push({ label: "Website", value: contact.corporateWebsite });
  }
  if (contact.dataRoomAccessStatus) {
    rows.push({ label: "Data Room", value: contact.dataRoomAccessStatus });
  }

  if (rows.length === 0) return null;

  return (
    <div className="slide-close__contact">
      {rows.map((row) => (
        <div key={row.label} className="slide-close__contact-row">
          <span>{row.label}</span>
          <span>{row.value}</span>
        </div>
      ))}
    </div>
  );
}

export function Slide18ClosingOpportunity() {
  const { ready, complete, animClass } = useSlideAnimation(18);
  const panel = data.opportunityPanel;

  return (
    <SlideContainer
      number={data.number}
      label={data.label}
      showHeader={false}
      animationComplete={complete}
      contentClassName="slide-close"
      footer={
        <PresentationFooter disclosure={data.mandatoryDisclosure} emphasis />
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 16,
        }}
        className={ready ? `${animClass} fade-in ${delayClass(1)}` : ""}
      >
        <div className="slide-number">Slide {data.number}</div>
        <GmaxiraLogo />
      </div>

      <div className={ready ? `${animClass} fade-up ${delayClass(2)}` : ""}>
        <div className="slide-close__eyebrow">{data.heroEyebrow}</div>
        <h1 className="slide-close__title">{data.mainTitle}</h1>
        <p className="slide-close__desc">{data.heroDescription}</p>
        <p className="slide-close__statement">{data.primaryClosingStatement}</p>
      </div>

      <div className="slide-close__layout">
        <div className={ready ? `${animClass} fade-left ${delayClass(3)}` : ""}>
          <GlassCard strong>
            <div className="text-label" style={{ marginBottom: 12 }}>
              Investment Opportunity
            </div>
            <div className="slide-close__panel-grid">
              {[
                panel.capitalRaise,
                panel.executionPeriod,
                panel.initialObjective,
                panel.longTermVision,
                panel.investorRole,
              ].map((item) => (
                <div key={item.label} className="slide-close__panel-item">
                  <label>{item.label}</label>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="slide-close__pillars">
              {data.pillars.map((pillar) => (
                <GlassCard key={pillar} compact>
                  <div
                    className="text-subtitle"
                    style={{ fontSize: 12, textAlign: "center" }}
                  >
                    {pillar}
                  </div>
                </GlassCard>
              ))}
            </div>

            <div className="slide-close__formula">
              {data.formula.map((part, i) => (
                <span key={part}>
                  <span>{part}</span>
                  {i < data.formula.length - 1 && (
                    <span className="slide-close__formula-plus"> + </span>
                  )}
                </span>
              ))}
              <span className="slide-close__formula-eq"> = </span>
              <span className="slide-close__formula-result">
                {data.formulaResult}
              </span>
            </div>
          </GlassCard>
        </div>

        <div className={ready ? `${animClass} fade-right ${delayClass(4)}` : ""}>
          <GlassCard>
            <div className="slide-close__cta-block" style={{ borderTop: "none", marginTop: 0, paddingTop: 0 }}>
              <div className="slide-close__cta">{data.cta}</div>
              <p className="slide-close__cta-support">{data.ctaSupport}</p>
            </div>
            <ContactFields />
            {contact.secureQrEnabled && contact.secureQrValue && (
              <div style={{ marginTop: 12 }}>
                <div className="text-label" style={{ marginBottom: 6 }}>
                  Secure Access
                </div>
                <div
                  style={{
                    width: 72,
                    height: 72,
                    border: "1px solid var(--card-border)",
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 9,
                    color: "var(--muted-text)",
                    textAlign: "center",
                    padding: 6,
                  }}
                >
                  QR configured
                </div>
              </div>
            )}
            <p className="slide-close__final">{data.finalSentence}</p>
          </GlassCard>
        </div>
      </div>
    </SlideContainer>
  );
}
