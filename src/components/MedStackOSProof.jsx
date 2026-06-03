import { Icon } from "./atoms";

const SIGNALS = [
  {
    title: "AI products sell the mechanism",
    body: "The strongest AI OS pages lead with the transformation: raw notes, projects and goals become an executable plan.",
  },
  {
    title: "Medical templates are usually too narrow",
    body: "Most medical Notion products focus on study, logbooks or research only. MedStack connects CV, research, rotations, applications and pathway planning.",
  },
  {
    title: "Students need the first win fast",
    body: "The product has to feel useful inside the first 30 minutes: duplicate, set stage, add one CV item, add one research project, run one AI prompt.",
  },
];

const SCENARIOS = [
  {
    role: "Clinical-year medical student",
    quote: "I know I need research and CV evidence, but I do not know what to do this week.",
    answer: "MedStack turns that into a weekly command centre with research, CV, rotation and application moves.",
  },
  {
    role: "Research-curious student",
    quote: "I want to publish but I do not know how to approach a supervisor or choose a project.",
    answer: "The research engine gives outreach scripts, project tracking and an AI workflow for the next realistic step.",
  },
  {
    role: "Junior doctor or intern applicant",
    quote: "I need to keep pathway deadlines and evidence organised without another spreadsheet.",
    answer: "The Australian internship and pathway hubs keep the official links, state signals and application prep in one place.",
  },
];

export default function MedStackOSProof() {
  return (
    <section id="proof" className="proof-section">
      <div className="container">
        <div className="section-kicker">
          <span className="idx">06 - WHY THIS CAN WIN</span>
          <span className="rule" />
        </div>

        <div className="proof-header">
          <div>
            <div className="eyebrow">MARKET SIGNALS</div>
            <h2 className="serif">
              Built from what sells, narrowed to what medical students actually need.
            </h2>
          </div>
          <p>
            The market rewards complete systems, AI prompt engines, clean walkthroughs and proof that the buyer can
            start immediately. The MedStack OS uses those mechanics, but points them at Australian medical career
            execution instead of generic productivity.
          </p>
        </div>

        <div className="signal-grid">
          {SIGNALS.map((signal, index) => (
            <article key={signal.title} className="signal-card ticked">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{signal.title}</h3>
              <p>{signal.body}</p>
            </article>
          ))}
        </div>

        <div className="scenario-grid">
          {SCENARIOS.map((scenario) => (
            <article key={scenario.role} className="scenario-card">
              <div className="scenario-icon">
                <Icon name="spark" size={15} color="var(--green)" />
              </div>
              <div className="rx-label">{scenario.role}</div>
              <blockquote>{scenario.quote}</blockquote>
              <p>{scenario.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
