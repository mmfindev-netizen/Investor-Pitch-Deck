import { pitchDeckConfig } from "../config/pitchDeckConfig";
import {
  SlideContainer,
  GlassCard,
  SectionHeading,
  PresentationFooter,
} from "../components";
import { useSlideAnimation, delayClass } from "../hooks/useSlideAnimation";

const data = pitchDeckConfig.slides.slide13;

const MIX_COLORS = [
  "#0F62FE",
  "#35D0FF",
  "#4B7BE5",
  "#1A8FAD",
  "#6B8CFF",
];

function GrowthChart() {
  const { years, revenueIndex, ebitdaIndex } = data.growthSeries;
  const maxVal = Math.max(...revenueIndex, ...ebitdaIndex) * 1.1;
  const w = 560;
  const h = 200;
  const padL = 8;
  const padR = 8;
  const padT = 10;
  const padB = 24;
  const chartW = w - padL - padR;
  const chartH = h - padT - padB;

  const points = (series: readonly number[]) =>
    series
      .map((v, i) => {
        const x = padL + (i / (series.length - 1)) * chartW;
        const y = padT + chartH - (v / maxVal) * chartH;
        return `${x},${y}`;
      })
      .join(" ");

  return (
    <svg className="slide-fin__chart-svg" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      {[0.25, 0.5, 0.75, 1].map((t) => (
        <line
          key={t}
          x1={padL}
          x2={w - padR}
          y1={padT + chartH * (1 - t)}
          y2={padT + chartH * (1 - t)}
          stroke="rgba(15,98,254,0.15)"
          strokeWidth="1"
        />
      ))}
      <polyline
        fill="none"
        stroke="#0F62FE"
        strokeWidth="2.5"
        points={points(revenueIndex)}
      />
      <polyline
        fill="none"
        stroke="#35D0FF"
        strokeWidth="2.5"
        points={points(ebitdaIndex)}
      />
      {years.map((year, i) => {
        const x = padL + (i / (years.length - 1)) * chartW;
        return (
          <text
            key={year}
            x={x}
            y={h - 4}
            textAnchor="middle"
            fill="#AEB7C2"
            fontSize="11"
            fontFamily="Inter,sans-serif"
          >
            {year}
          </text>
        );
      })}
      <g transform={`translate(${padL + 8}, ${padT + 8})`}>
        <line x1="0" y1="0" x2="16" y2="0" stroke="#0F62FE" strokeWidth="2.5" />
        <text x="22" y="4" fill="#AEB7C2" fontSize="10" fontFamily="Inter,sans-serif">
          Revenue (index)
        </text>
        <line x1="120" y1="0" x2="136" y2="0" stroke="#35D0FF" strokeWidth="2.5" />
        <text x="142" y="4" fill="#AEB7C2" fontSize="10" fontFamily="Inter,sans-serif">
          EBITDA (index)
        </text>
      </g>
    </svg>
  );
}

export function Slide13FinancialOutlook() {
  const { ready, complete, animClass } = useSlideAnimation(13);

  return (
    <SlideContainer
      number={data.number}
      label={data.label}
      animationComplete={complete}
      footer={
        <PresentationFooter
          disclosure={data.forwardLookingNote}
          emphasis
          meta={[data.modelNote]}
        />
      }
    >
      <SectionHeading title={data.title} subtitle={data.subtitle} />

      <div
        className={`slide-fin__metrics ${ready ? `${animClass} fade-in ${delayClass(1)}` : ""}`}
      >
        {data.headlineMetrics.map((m) => (
          <span key={m} className="slide-fin__metric-chip">
            {m}
          </span>
        ))}
      </div>

      <div className="slide-fin__layout">
        <div className={ready ? `${animClass} fade-left ${delayClass(2)}` : ""}>
          <GlassCard className="slide-fin__chart">
            <div className="text-label" style={{ marginBottom: 8 }}>
              Five-Year Growth Chart
            </div>
            <GrowthChart />
          </GlassCard>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 10,
              marginTop: 12,
            }}
          >
            {data.marginCategories.map((m) => (
              <GlassCard key={m.label} compact>
                <div className="text-label">{m.label}</div>
                <div
                  className="text-subtitle"
                  style={{ fontSize: 13, marginTop: 6 }}
                >
                  {m.trend}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        <div
          className={`slide-fin__side-grid ${ready ? `${animClass} fade-right ${delayClass(3)}` : ""}`}
        >
          <GlassCard compact>
            <div className="text-label">Revenue Mix</div>
            <div className="slide-fin__mix-bar">
              {data.revenueMix.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    width: `${item.share}%`,
                    background: MIX_COLORS[i % MIX_COLORS.length],
                  }}
                  title={`${item.label}: ${item.share}%`}
                />
              ))}
            </div>
            <div className="slide-fin__mix-legend">
              {data.revenueMix.map((item, i) => (
                <div key={item.label} className="slide-fin__mix-item">
                  <span>
                    <span
                      style={{
                        display: "inline-block",
                        width: 8,
                        height: 8,
                        borderRadius: 2,
                        background: MIX_COLORS[i % MIX_COLORS.length],
                        marginRight: 6,
                      }}
                    />
                    {item.label}
                  </span>
                  <span>{item.share}%</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard compact>
            <div className="text-label" style={{ marginBottom: 8 }}>
              Growth Drivers
            </div>
            <ul className="list-check">
              {data.growthDrivers.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard compact>
            <div className="text-label" style={{ marginBottom: 8 }}>
              Model Assumptions
            </div>
            <ul className="list-check">
              {data.assumptions.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </SlideContainer>
  );
}
