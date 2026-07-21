interface GmaxiraLogoProps {
  size?: "sm" | "lg";
  showWordmark?: boolean;
}

export function GmaxiraLogo({ size = "sm", showWordmark = true }: GmaxiraLogoProps) {
  return (
    <div className={`gmaxira-logo ${size === "lg" ? "gmaxira-logo--lg" : ""}`}>
      <svg
        className="gmaxira-logo-mark"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          rx="8"
          stroke="#0F62FE"
          strokeWidth="1.5"
        />
        <path
          d="M10 28V12h8.2c3.4 0 5.6 2.1 5.6 5.1 0 3.1-2.2 5.2-5.6 5.2H14.2V28H10zm4.2-9.2h3.8c1.5 0 2.4-.9 2.4-2.1s-.9-2.1-2.4-2.1h-3.8v4.2z"
          fill="#FFFFFF"
        />
        <path
          d="M26 12h4v3H26v-3zm0 6.5h4v3h-4v-3zm0 6.5h4v3h-4v-3z"
          fill="#35D0FF"
        />
      </svg>
      {showWordmark && <span className="gmaxira-logo-word">GMAXIRA</span>}
    </div>
  );
}
