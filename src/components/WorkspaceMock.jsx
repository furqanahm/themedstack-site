import { Fragment } from "react";
import { Icon } from "./atoms";

/* A realistic MedStack dashboard "home" — the product, at a glance.
   Sidebar = the workspace; main = six career tools as live widgets. */

const NAV = [
  { label: "Dashboard", color: "#1f9d62", active: true },
  { label: "Career Roadmap", color: "#3866e0" },
  { label: "Research Tracker", color: "#1f9d62" },
  { label: "Publications", color: "#bd8526" },
  { label: "Rotation Planner", color: "#7a5af0" },
  { label: "CV Builder", color: "#3866e0" },
  { label: "Applications", color: "#1f9d62" },
];

const STAGES = [
  { l: "Pre-med", state: "done" },
  { l: "Med school", state: "now" },
  { l: "Internship", state: "" },
  { l: "Registrar", state: "" },
  { l: "Consultant", state: "" },
];

const PROJECTS = [
  { t: "AI triage in the ED", c: "#d29a3a", s: "IN REVIEW" },
  { t: "Post-op delirium", c: "#3866e0", s: "DRAFTING" },
  { t: "Theatre wait times", c: "#7a5af0", s: "RECRUITING" },
];

export default function WorkspaceMock() {
  return (
    <div className="wm-scroll">
      <div className="wm">
        <div className="wm-bar">
          <div className="wm-dots">
            <i />
            <i />
            <i />
          </div>
          <span className="wm-crumb">The MedStack / Dashboard</span>
          <span className="wm-search">Quick find…</span>
        </div>

        <div className="wm-body">
          <aside className="wm-side">
            <div className="wm-ws">
              <span className="wm-sq" style={{ background: "#1f9d62" }}>M</span>
              <b>The MedStack</b>
            </div>
            <div className="wm-sec">Workspace</div>
            {NAV.map((it) => (
              <div key={it.label} className={`wm-item${it.active ? " active" : ""}`}>
                <span className="d" style={{ background: it.color }} />
                {it.label}
              </div>
            ))}
            <div className="wm-sec">Coming soon</div>
            {["SurgeryStack", "PathwayStack"].map((l) => (
              <div key={l} className="wm-item" style={{ opacity: 0.5 }}>
                <span className="d" style={{ background: "#c9c6bb" }} />
                {l}
              </div>
            ))}
          </aside>

          <main className="wm-main">
            <div className="wm-pagei" style={{ background: "#1f9d62" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <rect x="2" y="2" width="5" height="5" rx="1" stroke="#fff" strokeWidth="1.4" />
                <rect x="9" y="2" width="5" height="5" rx="1" stroke="#fff" strokeWidth="1.4" />
                <rect x="2" y="9" width="5" height="5" rx="1" stroke="#fff" strokeWidth="1.4" />
                <rect x="9" y="9" width="5" height="5" rx="1" stroke="#fff" strokeWidth="1.4" />
              </svg>
            </div>
            <h3 className="wm-h1">Dashboard</h3>
            <div className="wm-props">
              <span className="wm-prop">Year 4 · USyd</span>
              <span className="wm-prop">Term 2 · 2026</span>
              <span className="wm-prop">Aiming · Surgery</span>
            </div>

            <div className="wm-dash">
              {/* Career Roadmap — full width */}
              <div className="wm-w full">
                <div className="wm-wh">
                  <span className="wic" style={{ background: "#3866e0" }}>
                    <Icon name="map" size={14} color="#fff" />
                  </span>
                  <span className="wt">Career Roadmap</span>
                  <span className="wmeta">Year 4 → Internship 2027</span>
                </div>
                <div className="wm-stages">
                  {STAGES.map((s, i) => (
                    <Fragment key={s.l}>
                      <div className={`wm-stage ${s.state}`}>
                        <span className="node">
                          {s.state === "done" && <Icon name="check" size={9} color="#fff" strokeWidth={2.6} />}
                          {s.state === "now" && <span style={{ width: 6, height: 6, borderRadius: 999, background: "#3866e0" }} />}
                        </span>
                        <span className="lbl">{s.l}</span>
                      </div>
                      {i < STAGES.length - 1 && <span className={`wm-conn${s.state === "done" ? " done" : ""}`} />}
                    </Fragment>
                  ))}
                </div>
              </div>

              {/* Research Tracker */}
              <div className="wm-w">
                <div className="wm-wh">
                  <span className="wic" style={{ background: "#1f9d62" }}>
                    <Icon name="node" size={14} color="#fff" />
                  </span>
                  <span className="wt">Research Tracker</span>
                  <span className="wmeta">3 active</span>
                </div>
                {PROJECTS.map((p) => (
                  <div key={p.t} className="wm-li">
                    <span className="dotc" style={{ background: p.c }} />
                    {p.t}
                    <span className="st" style={{ color: p.c }}>{p.s}</span>
                  </div>
                ))}
              </div>

              {/* Publication Tracker */}
              <div className="wm-w">
                <div className="wm-wh">
                  <span className="wic" style={{ background: "#bd8526" }}>
                    <Icon name="book" size={14} color="#fff" />
                  </span>
                  <span className="wt">Publications</span>
                  <span className="wmeta">first author</span>
                </div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 12 }}>
                  <span className="wm-stat">4</span>
                  <span style={{ fontSize: 11.5, color: "#6c707a" }}>papers · 2 published</span>
                </div>
                <div className="wm-bar2">
                  <i style={{ width: "50%", background: "#1f9d62" }} />
                  <i style={{ width: "25%", background: "#d29a3a" }} />
                  <i style={{ width: "25%", background: "#3866e0" }} />
                </div>
                <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
                  <span style={{ fontSize: 10.5, color: "#6c707a" }}><b style={{ color: "#1f9d62" }}>●</b> Published</span>
                  <span style={{ fontSize: 10.5, color: "#6c707a" }}><b style={{ color: "#d29a3a" }}>●</b> In review</span>
                  <span style={{ fontSize: 10.5, color: "#6c707a" }}><b style={{ color: "#3866e0" }}>●</b> Drafting</span>
                </div>
              </div>

              {/* Rotation Planner */}
              <div className="wm-w">
                <div className="wm-wh">
                  <span className="wic" style={{ background: "#7a5af0" }}>
                    <Icon name="pill" size={14} color="#fff" />
                  </span>
                  <span className="wt">Rotation Planner</span>
                  <span className="wmeta">Wk 2 / 6</span>
                </div>
                <div style={{ fontSize: 13.5, color: "#1c1f24", fontWeight: 500 }}>General Surgery</div>
                <div style={{ fontSize: 11.5, color: "#6c707a", margin: "3px 0 12px" }}>RPA Hospital · Mr. Patel’s unit</div>
                <div className="wm-weeks">
                  <i className="on" />
                  <i className="on" />
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <div style={{ fontSize: 11.5, color: "#6c707a", marginTop: 12 }}>
                  Next · <span style={{ color: "#23262c" }}>Cardiology</span>
                </div>
              </div>

              {/* CV Builder */}
              <div className="wm-w">
                <div className="wm-wh">
                  <span className="wic" style={{ background: "#3866e0" }}>
                    <Icon name="layers" size={14} color="#fff" />
                  </span>
                  <span className="wt">CV Builder</span>
                  <span className="wmeta">78% complete</span>
                </div>
                <div className="wm-bar2" style={{ marginBottom: 14 }}>
                  <i style={{ width: "78%", background: "#1f9d62" }} />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  <span className="wm-chip ok">Research ✓</span>
                  <span className="wm-chip ok">Publications ✓</span>
                  <span className="wm-chip">Leadership</span>
                  <span className="wm-chip">Audit</span>
                </div>
              </div>

              {/* Application Tracker — full width */}
              <div className="wm-w full">
                <div className="wm-wh">
                  <span className="wic" style={{ background: "#1f9d62" }}>
                    <Icon name="bolt" size={14} color="#fff" />
                  </span>
                  <span className="wt">Application Tracker</span>
                  <span className="wmeta">RACS · 3 / 8 criteria</span>
                </div>
                <div className="wm-bar2" style={{ marginBottom: 14 }}>
                  <i style={{ width: "38%", background: "#3866e0" }} />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7, alignItems: "center" }}>
                  <span className="wm-chip ok">Logbook ✓</span>
                  <span className="wm-chip ok">Referees ✓</span>
                  <span className="wm-chip ok">Research ✓</span>
                  <span className="wm-chip">Courses · 1/3</span>
                  <span className="wm-chip">GSSE exam</span>
                  <span style={{ marginLeft: "auto", fontSize: 11, color: "#a8742a", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>
                    NEXT · APPLICATIONS OPEN AUG
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
