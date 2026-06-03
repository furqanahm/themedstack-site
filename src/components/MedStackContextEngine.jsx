import { EcgLine, Icon } from "./atoms";
import { MEDSTACK_OS_CHECKOUT_URL } from "../config";

const CONTEXT_ITEMS = [
  "Research projects",
  "CV evidence",
  "Rotation goals",
  "Internship dates",
  "Supervisor follow-ups",
  "Application criteria",
  "Conference deadlines",
  "Deep-work blocks",
  "Teaching proof",
  "Publication pipeline",
];

const FLOW = [
  {
    step: "Input",
    title: "Dump the medical career chaos",
    body: "Projects, evidence, rotations, deadlines, applications, ideas and loose notes go into one connected workspace.",
    lines: ["Gastro rotation", "Case report draft", "Internship document gap"],
  },
  {
    step: "Process",
    title: "The OS structures it for AI",
    body: "The databases and prompt vault give AI enough context to return useful career moves instead of generic study advice.",
    lines: ["Priority stack", "Evidence gaps", "Next realistic action"],
  },
  {
    step: "Output",
    title: "Wake up with the next move",
    body: "Your daily plan becomes obvious: what to update, what to chase, what to write, and what to protect time for.",
    lines: ["30 min research block", "Add CV proof", "Send supervisor follow-up"],
  },
];

export default function MedStackContextEngine() {
  return (
    <section id="context-engine" className="context-engine-section">
      <div className="container">
        <div className="context-engine-shell ticked">
          <div className="context-engine-bg" aria-hidden>
            <EcgLine height={94} speed={7} />
          </div>

          <div className="context-engine-header">
            <div>
              <div className="section-kicker">
                <span className="idx">03 - CONTEXT ENGINE</span>
                <span className="rule" />
              </div>
              <h2 className="serif">
                The point is not more organisation. It is <em style={{ color: "var(--green)" }}>usable context.</em>
              </h2>
            </div>
            <p>
              MedStack OS gives AI the career context most medical students keep scattered across notes, spreadsheets,
              screenshots and memory. That is what makes the outputs useful.
            </p>
          </div>

          <div className="context-marquee" aria-label="MedStack context layer">
            <div>
              {[...CONTEXT_ITEMS, ...CONTEXT_ITEMS].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </div>

          <div className="context-flow-grid">
            {FLOW.map((item, index) => (
              <article key={item.step} className="context-flow-card">
                <div className="context-step">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {item.step}
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="context-mini-list">
                  {item.lines.map((line) => (
                    <span key={line}>
                      <Icon name="check" size={11} color="var(--green)" strokeWidth={2.2} />
                      {line}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="context-pulse-panel">
            <div>
              <div className="rx-label">DAY 1 WIN</div>
              <strong>Duplicate the OS, set your current stage, add one research project, add one CV item, then ask AI what matters this week.</strong>
            </div>
            <a href={MEDSTACK_OS_CHECKOUT_URL} className="btn btn-green">
              Build my OS <Icon name="arrow" size={12} color="var(--graphite-0)" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
