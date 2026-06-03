import { Icon } from "./atoms";
import { MEDSTACK_OS_CHECKOUT_URL } from "../config";

const INCLUDES = [
  "Visual command dashboard",
  "AI setup protocol",
  "50+ MedStack Copilot prompts",
  "Daily task tracker",
  "Career roadmap",
  "Research and publication trackers",
  "Training-program evidence map",
  "Medical CV evidence builder",
  "Rotation and application systems",
  "Australian internship and pathway hubs",
  "Manuscript pre-submission reviewer",
  "Future OS updates included",
];

const FOUNDING = [
  {
    label: "BONUS 01",
    title: "Live AI setup workshop",
    body: "Join the 1 July 2026 session on connecting AI into your duplicated MedStack OS.",
  },
  {
    label: "BONUS 02",
    title: "7-day setup support",
    body: "Email support while you get the workspace, prompts and career evidence system running.",
  },
  {
    label: "BONUS 03",
    title: "Personal OS setup audit",
    body: "First 25 buyers can request a simple audit so their OS is pointed at the right pathway goals.",
  },
  {
    label: "BONUS 04",
    title: "Future OS updates",
    body: "Get future MedStack OS template updates while founding access is open, including new prompts and workflow upgrades.",
  },
];

const PREVIEWS = [
  {
    src: "/images/medstack-dashboard-preview.png",
    title: "Dashboard command centre",
    body: "See research, publications, rotations, CV evidence and applications in one organised view.",
  },
  {
    src: "/images/medstack-os-product-thumbnail.png",
    title: "One career operating system",
    body: "A clean Notion workspace built around the way medical students actually build their profile.",
  },
];

export default function MedStackOSPurchase() {
  return (
    <section id="get-medstack-os" className="os-purchase">
      <div className="container">
        <div className="os-purchase-grid">
          <div>
            <div className="section-kicker">
              <span className="idx">LIVE PRODUCT</span>
              <span className="rule" />
            </div>

            <span className="tag">
              <span className="dot" />
              FOUNDING ACCESS OPEN
            </span>

            <h2 className="serif os-purchase-title">
              Get the full <em style={{ color: "var(--green)" }}>MedStack OS.</em>
            </h2>

            <p className="os-purchase-copy">
              A premium command centre for Australian medical students and junior doctors who want to organise the
              evidence that matters for competitive pathways: research, CV proof, rotations, applications and weekly
              execution.
            </p>

            <div className="os-price-card ticked">
              <div>
                <div className="rx-label">FOUNDING PRICE</div>
                <div className="os-price">
                  <span>A$99</span>
                  <small>one-time access</small>
                </div>
                <div className="os-founding-note">Includes bonus stack while founding access is open.</div>
              </div>
              <a href={MEDSTACK_OS_CHECKOUT_URL} className="btn btn-green">
                Get MedStack OS <Icon name="arrow" size={12} color="var(--graphite-0)" />
              </a>
            </div>

            <div className="os-bonus-kicker">
              <span>FOUNDING BUYER BONUSES</span>
              <strong>Included today</strong>
            </div>

            <div className="os-founding-bonuses" aria-label="Founding buyer bonuses">
              {FOUNDING.map((item) => (
                <article key={item.title}>
                  <Icon name="spark" size={12} color="var(--green)" />
                  <div>
                    <small>{item.label}</small>
                    <strong>{item.title}</strong>
                    <span>{item.body}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="os-includes">
              {INCLUDES.map((item) => (
                <div key={item} className="os-include">
                  <Icon name="check" size={13} color="var(--green)" strokeWidth={2.2} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="os-preview-stack" aria-label="The MedStack OS product previews">
            {PREVIEWS.map((preview) => (
              <article key={preview.title} className="os-preview-card">
                <img src={preview.src} alt={preview.title} />
                <div>
                  <h3>{preview.title}</h3>
                  <p>{preview.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
