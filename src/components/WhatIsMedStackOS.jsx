import { SectionHeading, Icon } from "./atoms";

const TOOLS = [
  { icon: "cpu", color: "#1f9d62", title: "AI setup protocol", body: "Connect the duplicated OS to an AI assistant and use update-pack prompts safely." },
  { icon: "bolt", color: "#3866e0", title: "MedStack Copilot", body: "Turn messy updates into tasks, CV evidence, research moves and application actions." },
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
          <span className="idx">05 - MEDSTACK OS</span>
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
          kicker="A career workspace for medical students and junior doctors: track research, CV-building, rotations, conferences, applications, AI prompts and career progress in one place instead of across a dozen scattered notes and spreadsheets."
          maxWidth={760}
        />

        <div className="os-tools-grid">
          {TOOLS.map((t) => (
            <div key={t.title} className="lcard">
              <span className="lchip" style={{ background: t.color }}>
                <Icon name={t.icon} size={18} color="#fff" />
              </span>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
