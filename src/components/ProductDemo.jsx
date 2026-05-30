import WorkspaceMock from "./WorkspaceMock";

/* Video-style product tour frame. The live workspace mock sits behind a
   play overlay + scrubber so it reads as a real demo video. When a real
   recording exists, drop a <video> into .demo-screen in place of WorkspaceMock. */

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
          <WorkspaceMock />
          <div className="demo-play" aria-hidden>
            <span className="ring" />
            <button className="pbtn" type="button" aria-label="Preview MedStack OS" title="Product tour — coming soon">
              <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
                <path d="M8 6l8 5-8 5z" fill="#15181d" />
              </svg>
            </button>
          </div>
        </div>

        <div className="demo-controls">
          <span className="demo-time">0:18</span>
          <div className="demo-scrub">
            <i />
          </div>
          <span className="demo-time">2:30</span>
          <span className="rx-label" style={{ marginLeft: 4 }}>
            MEDSTACK OS · PRODUCT TOUR
          </span>
        </div>
      </div>
    </div>
  );
}
