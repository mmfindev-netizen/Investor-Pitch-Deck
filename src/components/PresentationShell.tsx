import { useCallback, useEffect, useState, type ReactElement } from "react";
import {
  Slide01Cover,
  Slide02Vision,
  Slide03MarketOpportunity,
  Slide04WhyNow,
  Slide05Platform,
  Slide06ProductEcosystem,
  Slide07CompetitivePositioning,
  Slide08TechnologyArchitecture,
  Slide09SecurityCustodyCompliance,
  Slide10BusinessModel,
  Slide11GoToMarket,
  Slide12Roadmap,
  Slide13FinancialOutlook,
  Slide14FundingAsk,
  Slide15InvestmentOpportunity,
  Slide16InvestmentHighlights,
  Slide17ExitOpportunities,
  Slide18ClosingOpportunity,
} from "../slides";

const SLIDES: { id: number; component: () => ReactElement }[] = [
  { id: 1, component: Slide01Cover },
  { id: 2, component: Slide02Vision },
  { id: 3, component: Slide03MarketOpportunity },
  { id: 4, component: Slide04WhyNow },
  { id: 5, component: Slide05Platform },
  { id: 6, component: Slide06ProductEcosystem },
  { id: 7, component: Slide07CompetitivePositioning },
  { id: 8, component: Slide08TechnologyArchitecture },
  { id: 9, component: Slide09SecurityCustodyCompliance },
  { id: 10, component: Slide10BusinessModel },
  { id: 11, component: Slide11GoToMarket },
  { id: 12, component: Slide12Roadmap },
  { id: 13, component: Slide13FinancialOutlook },
  { id: 14, component: Slide14FundingAsk },
  { id: 15, component: Slide15InvestmentOpportunity },
  { id: 16, component: Slide16InvestmentHighlights },
  { id: 17, component: Slide17ExitOpportunities },
  { id: 18, component: Slide18ClosingOpportunity },
];

const TOTAL = SLIDES.length;

export function PresentationShell() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((next: number) => {
    setIndex(Math.max(0, Math.min(TOTAL - 1, next)));
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        e.key === "ArrowRight" ||
        e.key === "PageDown" ||
        e.key === " " ||
        e.key === "Enter"
      ) {
        e.preventDefault();
        setIndex((i) => Math.min(TOTAL - 1, i + 1));
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        setIndex((i) => Math.max(0, i - 1));
      } else if (e.key === "Home") {
        e.preventDefault();
        setIndex(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setIndex(TOTAL - 1);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const Current = SLIDES[index].component;

  return (
    <div className="presentation-shell">
      <div className="keyboard-hint">← → to navigate · Space / Enter next</div>
      <div className="presentation-stage">
        <Current />
        <nav className="presentation-nav" aria-label="Slide navigation">
          <button
            type="button"
            className="nav-btn"
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous slide"
          >
            ←
          </button>
          <div className="nav-progress">
            {String(index + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
          </div>
          <button
            type="button"
            className="nav-btn"
            onClick={next}
            disabled={index === TOTAL - 1}
            aria-label="Next slide"
          >
            →
          </button>
        </nav>
      </div>
    </div>
  );
}
