import { EcgLine, Icon } from "./atoms";
import { MEDSTACK_OS_CHECKOUT_URL } from "../config";

const INCLUDED = [
  {
    title: "The Core Career OS",
    value: "A$297 value",
    items: [
      "Command centre dashboard",
      "Career roadmap and current-stage switcher",
      "Research, CV, rotation and application trackers",
      "Deep-work desk and weekly reset system",
      "Future OS template updates included",
    ],
  },
  {
    title: "AI Setup + Prompt Engine",
    value: "A$197 value",
    items: [
      "MedStack Copilot setup protocol",
      "50+ prompt vault for CV, research, applications and weekly execution",
      "Daily update-pack prompt system",
      "Claude, Codex, ChatGPT and Notion connection guidance",
    ],
  },
  {
    title: "Australian Pathway Layer",
    value: "A$197 value",
    items: [
      "Internship and application hub",
      "Specialty pathway atlas",
      "Selection-criteria thinking built into the OS",
      "Australian-first medical career structure",
    ],
  },
  {
    title: "Founding Buyer Bonuses",
    value: "A$199 value",
    items: [
      "BONUS 01: live AI setup workshop on 1 July 2026",
      "BONUS 02: first 25 buyers get a personal OS setup audit",
      "BONUS 03: Claude, Codex and Notion workflow setup guidance",
      "BONUS 04: future OS updates, new prompts and workflow upgrades while founding access is open",
    ],
  },
];

export default function MedStackOfferStack() {
  return (
    <section id="offer-stack" className="offer-stack-section">
      <div className="container">
        <div className="simple-offer-shell ticked">
          <div className="simple-offer-ecg" aria-hidden>
            <EcgLine height={92} speed={8} />
          </div>

          <div className="simple-offer-header">
            <div className="section-kicker">
              <span className="idx">03 - EVERYTHING INCLUDED</span>
              <span className="rule" />
            </div>

            <h2 className="serif">One simple package. No recurring fees.</h2>
            <p>
              The MedStack OS gives Australian medical students and junior doctors one place to build the evidence,
              research output and application structure needed for competitive training pathways.
            </p>
          </div>

          <div className="simple-included-grid">
            {INCLUDED.map((block) => (
              <article key={block.title} className="simple-included-card">
                <div className="simple-included-top">
                  <h3>{block.title}</h3>
                  <span>{block.value}</span>
                </div>
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" size={13} color="var(--green)" strokeWidth={2.2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="simple-price-panel">
            <div>
              <div className="rx-label">NORMALLY INCLUDED VALUE</div>
              <strong className="was-price">A$890</strong>
              <p className="price-microcopy">The full OS, AI setup layer, pathway tools and founding bonuses.</p>
            </div>

            <div className="simple-price-divider" />

            <div>
              <div className="rx-label">TODAY'S FOUNDING PRICE</div>
              <strong>A$99</strong>
              <p>One-time payment. Instant access. Future OS updates included while founding access is open.</p>
            </div>

            <a href={MEDSTACK_OS_CHECKOUT_URL} className="btn btn-green">
              Get MedStack OS <Icon name="arrow" size={12} color="var(--graphite-0)" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
