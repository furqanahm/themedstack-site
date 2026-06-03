import { EcgLine, Icon } from "./atoms";
import { MEDSTACK_OS_CHECKOUT_URL, MEDSTACK_OS_LITE_FORM_URL } from "../config";

const UPDATE_PACK = [
  ["TASK", "Book one protected 30 min deep-work block for CV clean-up."],
  ["CV", "Add bedside teaching session as Teaching evidence; request proof."],
  ["RESEARCH", "Send supervisor follow-up and define one measurable output."],
  ["APP", "Check state internship dates and list required documents."],
];

const AI_WINS = [
  "50+ prompts across CV, research, applications and weekly execution",
  "Turn weekly chaos into specific next actions",
  "Translate experiences into CV evidence",
  "Keep research and applications moving",
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
            <span className="idx">02 - AI COMMAND SYSTEM</span>
            <span className="rule" />
          </div>

          <div className="ai-os-grid">
            <div>
              <span className="tag">
                <span className="dot" />
                NOT JUST A TEMPLATE
              </span>

              <h2 className="serif ai-os-title">
                Turn career chaos into <em style={{ color: "var(--green)" }}>training-program evidence.</em>
              </h2>

              <p className="ai-os-copy">
                Use the 50+ MedStack Copilot prompt vault to turn messy updates into cleaner tasks, CV evidence,
                research moves and application prep. Simple enough to use weekly, structured enough to matter.
              </p>

              <div className="ai-win-list">
                {AI_WINS.map((win) => (
                  <span key={win}>
                    <Icon name="check" size={12} color="var(--green)" strokeWidth={2.2} />
                    {win}
                  </span>
                ))}
              </div>

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

          <div className="ai-mechanism-strip">
            <div>
              <span>1</span>
              Dump the chaos
            </div>
            <div>
              <span>2</span>
              Let AI structure it
            </div>
            <div>
              <span>3</span>
              Update the OS
            </div>
            <div>
              <span>4</span>
              Execute this week
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
