import { SlideNumber } from "./SlideNumber";
import { NavigationLabel } from "./NavigationLabel";
import { GmaxiraLogo } from "./GmaxiraLogo";
import { pitchDeckConfig } from "../config/pitchDeckConfig";

interface SlideHeaderProps {
  number: string;
  label: string;
  showLogo?: boolean;
}

export function SlideHeader({ number, label, showLogo = true }: SlideHeaderProps) {
  return (
    <header className="slide-header">
      <div className="slide-header-left">
        <SlideNumber number={number} />
        <NavigationLabel label={label} />
      </div>
      {showLogo && (
        <div className="slide-header-right">
          <GmaxiraLogo size="sm" />
          <span className="brand-descriptor">
            {pitchDeckConfig.brand.descriptor}
          </span>
        </div>
      )}
    </header>
  );
}
