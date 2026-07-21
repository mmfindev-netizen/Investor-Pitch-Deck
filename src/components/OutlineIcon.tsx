export type IconName =
  | "shield"
  | "network"
  | "layers"
  | "globe"
  | "lock"
  | "chart"
  | "building"
  | "flow"
  | "server"
  | "users"
  | "check"
  | "target"
  | "scale"
  | "bridge"
  | "cpu"
  | "key";

interface OutlineIconProps {
  name: IconName;
  size?: number;
  className?: string;
  accent?: boolean;
}

const stroke = {
  base: "#FFFFFF",
  accent: "#35D0FF",
  blue: "#0F62FE",
};

export function OutlineIcon({
  name,
  size = 24,
  className = "",
  accent = false,
}: OutlineIconProps) {
  const primary = accent ? stroke.accent : stroke.base;
  const secondary = stroke.blue;

  return (
    <span className={`outline-icon ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {name === "shield" && (
          <>
            <path
              d="M12 3l7 3v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3z"
              stroke={primary}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 12l1.8 1.8L15 10"
              stroke={secondary}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
        {name === "network" && (
          <>
            <circle cx="6" cy="6" r="2.5" stroke={primary} strokeWidth="2" />
            <circle cx="18" cy="6" r="2.5" stroke={primary} strokeWidth="2" />
            <circle cx="12" cy="18" r="2.5" stroke={primary} strokeWidth="2" />
            <path
              d="M8 7.5l2.5 7M16 7.5l-2.5 7M8.5 6h7"
              stroke={secondary}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}
        {name === "layers" && (
          <>
            <path
              d="M12 3l8 4-8 4-8-4 8-4z"
              stroke={primary}
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M4 12l8 4 8-4"
              stroke={secondary}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 16l8 4 8-4"
              stroke={primary}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
        {name === "globe" && (
          <>
            <circle cx="12" cy="12" r="8" stroke={primary} strokeWidth="2" />
            <path
              d="M4 12h16M12 4c2.5 2.8 2.5 13.2 0 16M12 4c-2.5 2.8-2.5 13.2 0 16"
              stroke={secondary}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}
        {name === "lock" && (
          <>
            <rect
              x="5"
              y="11"
              width="14"
              height="10"
              rx="2"
              stroke={primary}
              strokeWidth="2"
            />
            <path
              d="M8 11V8a4 4 0 018 0v3"
              stroke={secondary}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}
        {name === "chart" && (
          <>
            <path
              d="M4 19h16M7 16V9M12 16V5M17 16v-5"
              stroke={primary}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M7 9l5-4 5 6"
              stroke={secondary}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
        {name === "building" && (
          <>
            <path
              d="M4 20h16M6 20V6l6-2 6 2v14"
              stroke={primary}
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M10 10h.01M14 10h.01M10 14h.01M14 14h.01"
              stroke={secondary}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}
        {name === "flow" && (
          <>
            <path
              d="M4 8h10M14 8l-3-3M14 8l-3 3"
              stroke={primary}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 16H10M10 16l3-3M10 16l3 3"
              stroke={secondary}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
        {name === "server" && (
          <>
            <rect
              x="4"
              y="4"
              width="16"
              height="6"
              rx="1.5"
              stroke={primary}
              strokeWidth="2"
            />
            <rect
              x="4"
              y="14"
              width="16"
              height="6"
              rx="1.5"
              stroke={primary}
              strokeWidth="2"
            />
            <circle cx="8" cy="7" r="1" fill={secondary} />
            <circle cx="8" cy="17" r="1" fill={secondary} />
          </>
        )}
        {name === "users" && (
          <>
            <circle cx="9" cy="8" r="3" stroke={primary} strokeWidth="2" />
            <path
              d="M3 19c0-3 2.5-5 6-5s6 2 6 5"
              stroke={primary}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="17" cy="9" r="2.5" stroke={secondary} strokeWidth="2" />
            <path
              d="M17 14c2.5.2 4 1.8 4 4"
              stroke={secondary}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}
        {name === "check" && (
          <path
            d="M5 12.5l4.5 4.5L19 7"
            stroke={primary}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {name === "target" && (
          <>
            <circle cx="12" cy="12" r="8" stroke={primary} strokeWidth="2" />
            <circle cx="12" cy="12" r="4" stroke={secondary} strokeWidth="2" />
            <circle cx="12" cy="12" r="1.5" fill={secondary} />
          </>
        )}
        {name === "scale" && (
          <>
            <path
              d="M12 4v16M5 8h14"
              stroke={primary}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M5 8l-2 6h4L5 8zM19 8l-2 6h4l-2-6z"
              stroke={secondary}
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </>
        )}
        {name === "bridge" && (
          <>
            <path
              d="M3 16h18M5 16V10M19 16V10"
              stroke={primary}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M5 10c3.5 4 10.5 4 14 0"
              stroke={secondary}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}
        {name === "cpu" && (
          <>
            <rect
              x="7"
              y="7"
              width="10"
              height="10"
              rx="1.5"
              stroke={primary}
              strokeWidth="2"
            />
            <rect
              x="10"
              y="10"
              width="4"
              height="4"
              stroke={secondary}
              strokeWidth="2"
            />
            <path
              d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"
              stroke={primary}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}
        {name === "key" && (
          <>
            <circle cx="8" cy="12" r="4" stroke={primary} strokeWidth="2" />
            <path
              d="M12 12h9M18 12v3M21 12v2"
              stroke={secondary}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </span>
  );
}
