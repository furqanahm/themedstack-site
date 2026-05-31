import { Icon } from "./atoms";
import { MEDSTACK_OS_CHECKOUT_URL } from "../config";

const INCLUDES = [
  "Visual command dashboard",
  "Career roadmap",
  "Research and publication trackers",
  "Medical CV evidence builder",
  "Rotation and application systems",
  "Setup guide and template vault",
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
              A premium Notion command centre for medical students to organise rotations, research, CV evidence,
              applications and deep work without rebuilding the same scattered system every term.
            </p>

            <div className="os-price-card ticked">
              <div>
                <div className="rx-label">FOUNDING PRICE</div>
                <div className="os-price">
                  <span>A$79</span>
                  <small>one-time access</small>
                </div>
              </div>
              <a href={MEDSTACK_OS_CHECKOUT_URL} className="btn btn-green lemonsqueezy-button">
                Get MedStack OS <Icon name="arrow" size={12} color="var(--graphite-0)" />
              </a>
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
