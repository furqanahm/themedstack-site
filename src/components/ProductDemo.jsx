/* Video-style product tour frame. */

const NOTES = [
  { label: "Track research", style: { top: 24, left: 0 } },
  { label: "Build your CV", style: { top: 86, right: 0 } },
  { label: "Manage projects", style: { bottom: 112, left: 0 } },
  { label: "Plan applications", style: { bottom: 34, right: 0 } },
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
        <div className="demo-screen">
          <video
            className="demo-video"
            src="/videos/medstack-os-demo-18s.mp4"
            poster="/images/medstack-dashboard-preview.png"
            autoPlay
            muted
            loop
            playsInline
            aria-label="29 second MedStack OS product preview"
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
      </div>
    </div>
  );
}
