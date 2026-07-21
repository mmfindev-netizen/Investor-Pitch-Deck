interface InstitutionalBackgroundProps {
  variant?: "default" | "subtle" | "map";
}

export function InstitutionalBackground({
  variant = "default",
}: InstitutionalBackgroundProps) {
  return (
    <div className="institutional-bg" aria-hidden="true">
      <div className="institutional-bg__base" />
      <div className="institutional-bg__grid" />
      {(variant === "default" || variant === "map") && (
        <svg
          className="institutional-bg__map"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Simplified world map silhouette */}
          <g opacity="0.12" fill="none" stroke="#0F62FE" strokeWidth="1.2">
            <path d="M280 380c40-60 110-90 180-80 50 8 90 40 130 35 45-5 70-50 120-45 55 5 85 55 140 50 40-4 70-35 110-30 55 8 80 60 140 55 45-4 75-40 120-35 60 8 95 65 155 55 40-6 70-40 115-30 50 12 75 55 120 50" />
            <path d="M340 520c35-25 80-20 115 5 30 22 55 20 90 8 40-14 75 10 115 18 45 8 85-15 125-5 35 8 60 35 100 30 50-6 85-40 135-28 40 10 70 40 115 35" />
            <ellipse cx="520" cy="420" rx="70" ry="45" />
            <ellipse cx="780" cy="390" rx="90" ry="55" />
            <ellipse cx="1100" cy="410" rx="100" ry="50" />
            <ellipse cx="1380" cy="430" rx="80" ry="48" />
            <path d="M900 600c20 40 15 80-10 110" />
            <path d="M1200 580c30 35 50 70 40 110" />
          </g>
          {/* Network lines */}
          <g opacity="0.35" stroke="#0F62FE" strokeWidth="1">
            <line x1="400" y1="400" x2="700" y2="380" />
            <line x1="700" y1="380" x2="1050" y2="400" />
            <line x1="1050" y1="400" x2="1400" y2="420" />
            <line x1="700" y1="380" x2="780" y2="520" />
            <line x1="1050" y1="400" x2="1200" y2="560" />
            <line x1="520" y1="420" x2="400" y2="550" />
          </g>
          {/* Data nodes */}
          <g fill="#35D0FF">
            <circle cx="400" cy="400" r="3" opacity="0.7" />
            <circle cx="700" cy="380" r="3.5" opacity="0.8" />
            <circle cx="1050" cy="400" r="3" opacity="0.7" />
            <circle cx="1400" cy="420" r="3" opacity="0.6" />
            <circle cx="780" cy="520" r="2.5" opacity="0.5" />
            <circle cx="1200" cy="560" r="2.5" opacity="0.5" />
            <circle cx="520" cy="420" r="2.5" opacity="0.55" />
          </g>
          {/* Minimal particles */}
          <g fill="#0F62FE" opacity="0.4">
            <circle cx="300" cy="280" r="1.5" />
            <circle cx="1600" cy="300" r="1.5" />
            <circle cx="1500" cy="700" r="1.2" />
            <circle cx="450" cy="720" r="1.2" />
            <circle cx="980" cy="250" r="1.5" />
          </g>
        </svg>
      )}
      {variant === "subtle" && (
        <svg
          className="institutional-bg__network"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <g opacity="0.2" stroke="#0F62FE" strokeWidth="1" fill="none">
            <path d="M100 900 L400 600 L700 750 L1100 400 L1500 550 L1820 200" />
            <path d="M200 200 L500 450 L900 300 L1300 600 L1700 450" />
          </g>
          <g fill="#35D0FF" opacity="0.35">
            <circle cx="400" cy="600" r="2.5" />
            <circle cx="700" cy="750" r="2.5" />
            <circle cx="1100" cy="400" r="3" />
            <circle cx="1500" cy="550" r="2.5" />
          </g>
        </svg>
      )}
    </div>
  );
}
