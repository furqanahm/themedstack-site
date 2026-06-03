import { EcgLine, Icon } from "./atoms";
import { MEDSTACK_OS_CHECKOUT_URL, MEDSTACK_OS_LITE_FORM_URL } from "../config";

const WORKFLOWS = [
  {
    label: "Daily update",
    title: "Messy notes -> tomorrow's plan",
    body: "Paste what you did today, what feels urgent, and what you are avoiding. The prompt returns a clean update pack for tasks, CV evidence, research and applications.",
  },
  {
    label: "CV evidence",
    title: "Experience -> selector-ready proof",
    body: "Turn bedside teaching, society roles, audits, leadership and research into CV evidence lines with impact, proof needed and next action.",
  },
  {
    label: "Research",
    title: "Idea -> supervisor-ready next move",
    body: "Clarify project type, likely output, supervisor email, first meeting agenda, data needs and the smallest publishable next step.",
  },
  {
    label: "Pathway",
    title: "Goal -> Australian pathway map",
    body: "Use the internship and specialty hubs to convert state requirements, college signals and application deadlines into a weekly plan.",
  },
];

const UPDATE_PACK = [
  ["TASK", "Book one protected 30 min deep-work block for CV clean-up."],
  ["CV", "Add bedside teaching session as Teaching evidence; request proof."],
  ["RESEARCH", "Send supervisor follow-up and define one measurable output."],
  ["APP", "Check state internship dates and list required documents."],
];

export default function MedStackAICommandLayer() {
  return (
    <section id="ai-command-layer" className="ai-os-section">
      <div className="container">
        <div className="ai-os-shell ticked">
          <div className="ai-os-rail" aria-hidden>
            <EcgLine height={88} speed={8} />
          </div>

          <div className="section-kicker">
            <span className="idx">02 - AI COMMAND LAYER</span>
            <span className="rule" />
          </div>

          <div className="ai-os-grid">
            <div>
              <span className="tag">
                <span className="dot" />
                NOT JUST A TEMPLATE
              </span>

              <h2 className="serif ai-os-title">
                A medical career OS with an <em style={{ color: "var(--green)" }}>AI operating layer.</em>
              </h2>

              <p className="ai-os-copy">
                Most templates die because they still make you decide what to do next. The MedStack OS gives students
                the workspace, the prompt vault, and the setup protocol to turn messy career updates into clean Notion
                moves.
              </p>

              <div className="ai-os-actions">
                <a href={MEDSTACK_OS_CHECKOUT_URL} className="btn btn-green">
                  Get the AI OS <Icon name="arrow" size={12} color="var(--graphite-0)" />
                </a>
                <a href={MEDSTACK_OS_LITE_FORM_URL} className="btn btn-ghost" target="_blank" rel="noreferrer">
                  Try Lite first
                </a>
              </div>
            </div>

            <div className="ai-terminal" aria-label="AI update pack preview">
              <div className="ai-terminal-top">
                <span />
                <span />
                <span />
                <strong>MEDSTACK COPILOT</strong>
              </div>
              <div className="ai-prompt-box">
                <div className="rx-label">PROMPT INPUT</div>
                <p>
                  I did one ward teaching session, drafted a case report intro, forgot to update my CV, and need to
                  prepare for internship applications. Turn this into a Notion update pack.
                </p>
              </div>
              <div className="ai-update-list">
                {UPDATE_PACK.map(([label, body]) => (
                  <div key={label} className="ai-update-row">
                    <span>{label}</span>
                    <p>{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="ai-workflow-grid">
            {WORKFLOWS.map((workflow) => (
              <article key={workflow.title} className="ai-workflow-card">
                <div className="rx-label">{workflow.label}</div>
                <h3>{workflow.title}</h3>
                <p>{workflow.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
