import { Icon, Wordmark } from "./atoms";
import { MEDSTACK_OS_ACCESS_URL } from "../config";

const SETUP_STEPS = [
  "Open the template link below.",
  "Click Duplicate in the top-right of Notion.",
  "Save it into your own Notion workspace.",
  "Start from 00 - START HERE.",
];

const INCLUDED = [
  "Visual command centre",
  "Research and publication trackers",
  "Rotation planner",
  "CV evidence builder",
  "Application tracker",
  "Setup guide and template vault",
];

export default function MedStackOSAccess() {
  return (
    <main className="access-page">
      <section className="access-hero">
        <div className="container">
          <a href="/" className="access-brand" aria-label="Back to The MedStack home">
            <Wordmark />
          </a>

          <div className="access-grid">
            <div className="access-copy">
              <span className="tag">
                <span className="dot" />
                PAYMENT COMPLETE
              </span>

              <h1 className="serif access-title">Welcome to The MedStack OS.</h1>

              <p className="access-lead">
                Your Notion workspace is ready. Duplicate the template into your own Notion account before editing so
                you keep a clean copy forever.
              </p>

              <div className="access-actions">
                <a href={MEDSTACK_OS_ACCESS_URL} className="btn btn-green">
                  Open The MedStack OS <Icon name="arrow" size={12} color="var(--graphite-0)" />
                </a>
                <a href="mailto:themedstack@gmail.com" className="btn btn-ghost">
                  Need help?
                </a>
              </div>
            </div>

            <div className="access-card ticked">
              <div className="rx-label">FIRST SETUP</div>
              <ol>
                {SETUP_STEPS.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="access-section">
        <div className="container">
          <div className="access-panel">
            <div>
              <div className="section-kicker">
                <span className="idx">INCLUDED</span>
                <span className="rule" />
              </div>
              <h2 className="serif">What you now have access to.</h2>
            </div>

            <div className="access-included-grid">
              {INCLUDED.map((item) => (
                <div key={item} className="access-included">
                  <Icon name="check" size={13} color="var(--green)" strokeWidth={2.2} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="access-note">
            <div className="rx-label">ACCESS AND REFUNDS</div>
            <p>
              Because this is a digital product delivered immediately after purchase, purchases are generally final
              once access has been provided. This does not limit your rights under Australian Consumer Law. If the
              template does not open, email <a href="mailto:themedstack@gmail.com">themedstack@gmail.com</a> with your
              order email and a screenshot.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
