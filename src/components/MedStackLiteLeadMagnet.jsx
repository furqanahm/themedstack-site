import { Icon } from "./atoms";
import { MEDSTACK_OS_CHECKOUT_URL, MEDSTACK_OS_LITE_FORM_URL } from "../config";

const LITE_FEATURES = [
  "Lite command centre",
  "Mini career roadmap",
  "Mini research tracker",
  "Mini CV evidence tracker",
  "Weekly reset checklist",
];

export default function MedStackLiteLeadMagnet() {
  return (
    <section id="medstack-lite" className="lite-section">
      <div className="container">
        <div className="lite-card ticked">
          <div>
            <span className="tag">
              <span className="dot" />
              FREE STARTER DASHBOARD
            </span>
            <h2 className="serif lite-title">
              Start free with <em style={{ color: "var(--green)" }}>MedStack OS Lite.</em>
            </h2>
            <p className="lite-copy">
              A lightweight Notion dashboard for medical students who want to start organising research ideas, CV
              evidence, career stages and weekly priorities before upgrading to the full operating system.
            </p>
            <div className="lite-capture lite-access-card">
              <div>
                <div className="rx-label">FREE ACCESS</div>
                <strong>Enter your details and get instant access to the Lite Notion template.</strong>
              </div>
              <div className="lite-actions">
                <a href={MEDSTACK_OS_LITE_FORM_URL} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Get MedStack OS Lite <Icon name="arrow" size={12} color="var(--graphite-0)" />
                </a>
                <a href={MEDSTACK_OS_CHECKOUT_URL} className="btn btn-ghost">
                  Get full OS
                </a>
              </div>
              <p className="lite-privacy">
                We collect your name, email, stage and main goal so we can improve MedStack and send useful medical
                career resources. No spam.
              </p>
            </div>
          </div>

          <div className="lite-feature-grid">
            {LITE_FEATURES.map((feature) => (
              <div key={feature} className="lite-feature">
                <Icon name="check" size={13} color="var(--green)" strokeWidth={2.2} />
                <span>{feature}</span>
              </div>
            ))}
            <div className="lite-upgrade-note">
              <div className="rx-label">UPGRADE PATH</div>
              <strong>Lite gives you the workflow. The full MedStack OS gives you the operating system.</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
