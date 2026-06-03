import { Icon } from "./atoms";

/* Video-style product tour frame. */

const NOTES = [
  { label: "Track research", style: { top: 18, left: 0 } },
  { label: "Build your CV", style: { top: 76, right: 0 } },
  { label: "Ask AI for next moves", style: { bottom: 114, left: 0 } },
  { label: "Plan applications", style: { bottom: 38, right: 0 } },
];

const TOUR_POINTS = [
  "Command centre",
  "AI prompt layer",
  "CV evidence",
  "Research pipeline",
];

export default function ProductDemo() {
  return (
    <div className="demo-wrap">
      <div className="demo-glow" aria-hidden />

      {NOTES.map((n) => (
        <span key={n.label} className="demo-note" data-mobile-hide="true" style={n.style}>
          <span className="nd" />
          {n.label}
        </span>
      ))}

      <div className="demo-frame">
        <div className="demo-topbar">
          <div>
            <span />
            <span />
            <span />
          </div>
          <strong>THE MEDSTACK OS / PRODUCT TOUR</strong>
          <em>AI CAREER COMMAND SYSTEM</em>
        </div>

        <div className="demo-screen">
          <video
            className="demo-video"
            src="/videos/medstack-os-demo-18s.mp4"
            poster="/images/medstack-dashboard-preview.png"
            autoPlay
            muted
            loop
            playsInline
            aria-label="MedStack OS product preview"
          />
        </div>

        <div className="demo-controls">
          <span className="demo-time">0:06</span>
          <div className="demo-scrub">
            <i />
          </div>
          <span className="demo-time">0:35</span>
          <span className="rx-label" style={{ marginLeft: 4 }}>
            MEDSTACK OS - LIVE PREVIEW
          </span>
        </div>

        <div className="demo-caption-grid">
          {TOUR_POINTS.map((point) => (
            <span key={point}>
              <Icon name="check" size={11} color="var(--green)" strokeWidth={2.2} />
              {point}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
