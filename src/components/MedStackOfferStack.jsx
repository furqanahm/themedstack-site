import { EcgLine, Icon } from "./atoms";
import { MEDSTACK_OS_CHECKOUT_URL, MEDSTACK_OS_LITE_FORM_URL } from "../config";

const STACK = [
  {
    eyebrow: "CORE OPERATING SYSTEM",
    value: "A$297 value",
    title: "MedStack OS Command Centre",
    items: [
      "Visual medical career dashboard",
      "Research, CV, rotation and application command views",
      "Career roadmap and current-stage switcher",
      "Deep-work desk with 30-minute execution rhythm",
    ],
  },
  {
    eyebrow: "AI CONTEXT LAYER",
    value: "A$197 value",
    title: "MedStack Copilot System",
    items: [
      "AI setup protocol for your duplicated workspace",
      "Daily update-pack prompt system",
      "Prompt vault for CV, research and applications",
      "Notion AI / Claude / ChatGPT workflow guidance",
    ],
  },
  {
    eyebrow: "AUSTRALIAN PATHWAY RESOURCES",
    value: "A$149 value",
    title: "Internship + Specialty Navigation",
    items: [
      "Australian internship and pathway hub",
      "State application links and decision prompts",
      "Specialty pathway atlas structure",
      "Selection-criteria thinking built into the OS",
    ],
  },
  {
    eyebrow: "CAREER BUILDING TEMPLATES",
    value: "A$129 value",
    title: "CV, Research + Application Engines",
    items: [
      "Medical CV evidence builder",
      "Supervisor outreach and follow-up templates",
      "Manuscript pre-submission reviewer workflow",
      "Application tracker and document gap map",
    ],
  },
];

const BONUSES = [
  "Live AI setup workshop on 1 July 2026",
  "7-day founding buyer email support",
  "First 25 buyers: personal OS setup audit",
  "Weekly execution tracker and setup guide",
  "Future v1 updates while founding access is open",
  "ResearchStack Starter founder discount when it opens",
];

const SIGNALS = [
  "Fast first win: duplicate, set your stage, add one project, run one prompt.",
  "Medical-specific: CV, research, rotations and applications in one system.",
  "Australia-aware: internship and pathway resources built around local medical career decisions.",
];

const COHORT = [
  {
    label: "LIVE WORKSHOP",
    title: "AI setup session",
    body: "A live walkthrough on 1 July 2026 showing how to duplicate the OS, connect your AI workflow, and run the daily update system.",
  },
  {
    label: "SUPPORT",
    title: "7-day founding help",
    body: "Email support for setup questions, broken access, and getting your first CV, research and application items into the system.",
  },
  {
    label: "CAPPED BONUS",
    title: "First 25: setup audit",
    body: "Send your current stage, goals and workspace screenshot. Get a simple setup note showing what to fix first.",
  },
];

export default function MedStackOfferStack() {
  return (
    <section id="offer-stack" className="offer-stack-section">
      <div className="container">
        <div className="offer-stack-shell ticked">
          <div className="offer-ecg" aria-hidden>
            <EcgLine height={90} speed={9} />
          </div>

          <div className="offer-stack-header">
            <div>
              <div className="section-kicker">
                <span className="idx">03 - EVERYTHING INCLUDED</span>
                <span className="rule" />
              </div>
              <span className="tag">
                <span className="dot" />
                ONE SIMPLE PACKAGE
              </span>
              <h2 className="serif">
                The full medical career OS, not a scattered bundle of pages.
              </h2>
            </div>

            <div className="offer-total-card">
              <div className="rx-label">STACKED VALUE</div>
              <div className="offer-total-value">A$773+</div>
              <p>Founding access today: <strong>A$79</strong> one-time payment.</p>
              <a href={MEDSTACK_OS_CHECKOUT_URL} className="btn btn-green">
                Get lifetime access <Icon name="arrow" size={12} color="var(--graphite-0)" />
              </a>
            </div>
          </div>

          <div className="offer-stack-grid">
            {STACK.map((block) => (
              <article key={block.title} className="offer-stack-card">
                <div className="offer-card-top">
                  <span>{block.eyebrow}</span>
                  <em>{block.value}</em>
                </div>
                <h3>{block.title}</h3>
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" size={12} color="var(--green)" strokeWidth={2.2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="bonus-strip">
            <div>
              <div className="rx-label">FOUNDING BONUSES</div>
              <strong>Designed to make the first week feel obvious, not overwhelming.</strong>
            </div>
            <div className="bonus-list">
              {BONUSES.map((bonus) => (
                <span key={bonus}>{bonus}</span>
              ))}
            </div>
          </div>

          <div className="cohort-bonus-grid">
            {COHORT.map((item) => (
              <article key={item.title}>
                <div className="rx-label">{item.label}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="offer-signal-row" aria-label="Why the offer is different">
            {SIGNALS.map((signal) => (
              <div key={signal}>
                <Icon name="spark" size={13} color="var(--green)" />
                <span>{signal}</span>
              </div>
            ))}
          </div>

          <div className="pricing-step-row">
            <article>
              <span>v1.0</span>
              <strong>Current founding access</strong>
              <em>A$79</em>
            </article>
            <article>
              <span>v1.1</span>
              <strong>After cohort bonuses close</strong>
              <em>A$99-A$149</em>
            </article>
            <article>
              <span>v1.2</span>
              <strong>ResearchStack bundle</strong>
              <em>A$299+</em>
            </article>
          </div>

          <div className="offer-final-cta">
            <p>
              Start with Lite if you want to test the workflow. Buy the full OS if you want the whole command system,
              AI layer and Australian career structure.
            </p>
            <div>
              <a href={MEDSTACK_OS_CHECKOUT_URL} className="btn btn-primary">
                Get MedStack OS
              </a>
              <a href={MEDSTACK_OS_LITE_FORM_URL} className="btn btn-ghost" target="_blank" rel="noreferrer">
                Try Lite free
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
