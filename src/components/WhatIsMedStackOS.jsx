import { SectionHeading, Icon } from "./atoms";

const TOOLS = [
  { icon: "node", color: "#1f9d62", title: "Research tracker", body: "Every project, supervisor and deadline in one pipeline." },
  { icon: "book", color: "#bd8526", title: "Publication tracker", body: "Track each paper from idea to in-print." },
  { icon: "layers", color: "#3866e0", title: "CV builder & progress", body: "A living CV scored against selection criteria." },
  { icon: "spark", color: "#7a5af0", title: "Conference tracker", body: "Abstracts, deadlines and presentations, organised." },
  { icon: "pill", color: "#1f9d62", title: "Rotation planner", body: "Map terms, hospitals and what to get from each." },
  { icon: "bolt", color: "#3866e0", title: "Applications & opportunities", body: "Deadlines, criteria and documents in one tracker." },
  { icon: "cpu", color: "#bd8526", title: "Weekly career dashboard", body: "See exactly what to do this week to stay on track." },
  { icon: "map", color: "#7a5af0", title: "Specialty goals & pathway", body: "Reverse-engineer the path to your target specialty." },
];

export default function WhatIsMedStackOS() {
  return (
    <section id="medstack-os" className="sec-light">
      <div className="container">
        <div className="section-kicker">
          <span className="idx">01 — MEDSTACK OS</span>
          <span className="rule" />
        </div>

        <SectionHeading
          eyebrow="WHAT IS MEDSTACK OS"
          title={
            <>
              One workspace for your{" "}
              <em style={{ color: "var(--green-deep)" }}>entire medical career.</em>
            </>
          }
          kicker="A career workspace for medical students and junior doctors — track research, CV-building, rotations, conferences, applications and career progress in one place, instead of across a dozen scattered notes and spreadsheets."
          maxWidth={760}
        />

        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {TOOLS.map((t) => (
            <div key={t.title} className="lcard">
              <span className="lchip" style={{ background: t.color }}>
                <Icon name={t.icon} size={18} color="#fff" />
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 480,
                  fontSize: 18,
                  letterSpacing: "-0.012em",
                  color: "#1c1f24",
                  margin: "16px 0 0",
                }}
              >
                {t.title}
              </h3>
              <p style={{ margin: "7px 0 0", fontSize: 13.5, lineHeight: 1.55, color: "#5b606a" }}>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
