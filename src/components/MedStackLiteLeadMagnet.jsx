import { useState } from "react";
import { Icon } from "./atoms";
import { CONVERTKIT_ACTION, MEDSTACK_OS_CHECKOUT_URL, MEDSTACK_OS_LITE_URL } from "../config";

const LITE_FEATURES = [
  "Lite command centre",
  "Mini career roadmap",
  "Mini research tracker",
  "Mini CV evidence tracker",
  "Weekly reset checklist",
];

export default function MedStackLiteLeadMagnet() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    stage: "",
    university: "",
  });
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.includes("@")) return;

    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("first_name", form.name.trim());
      fd.append("email_address", form.email.trim());
      fd.append("fields[medical_stage]", form.stage);
      fd.append("fields[university]", form.university.trim());
      fd.append("fields[source]", "MedStack OS Lite");
      await fetch(CONVERTKIT_ACTION, { method: "POST", body: fd, mode: "no-cors" });
    } catch {
      /* no-cors submission cannot be inspected; show access either way. */
    }
    setSubmitting(false);
    setDone(true);
  };

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
            <form className="lite-capture" onSubmit={onSubmit}>
              {!done ? (
                <>
                  <div className="lite-capture-grid">
                    <input
                      value={form.name}
                      onChange={updateField("name")}
                      placeholder="Full name"
                      autoComplete="name"
                      required
                    />
                    <input
                      value={form.email}
                      onChange={updateField("email")}
                      placeholder="Email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                    <select value={form.stage} onChange={updateField("stage")} aria-label="Medical stage">
                      <option value="">Stage / year level</option>
                      <option>Pre-med / applicant</option>
                      <option>Year 1 medical student</option>
                      <option>Year 2 medical student</option>
                      <option>Year 3 medical student</option>
                      <option>Year 4 medical student</option>
                      <option>Year 5+ medical student</option>
                      <option>Junior doctor</option>
                    </select>
                    <input
                      value={form.university}
                      onChange={updateField("university")}
                      placeholder="University (optional)"
                      autoComplete="organization"
                    />
                  </div>
                  <div className="lite-actions">
                    <button className="btn btn-primary" type="submit" disabled={submitting}>
                      {submitting ? "Preparing access..." : "Get MedStack OS Lite"}
                      {!submitting && <Icon name="arrow" size={12} color="var(--graphite-0)" />}
                    </button>
                    <a href={MEDSTACK_OS_CHECKOUT_URL} className="btn btn-ghost">
                      Get full OS
                    </a>
                  </div>
                  <p className="lite-privacy">
                    Free access is sent through this form. We may email MedStack product updates and resources. No spam.
                  </p>
                </>
              ) : (
                <div className="lite-access-ready">
                  <div>
                    <Icon name="check" size={16} color="var(--green)" strokeWidth={2.2} />
                    <span>Access ready. Duplicate it into your own Notion workspace.</span>
                  </div>
                  <a href={MEDSTACK_OS_LITE_URL} className="btn btn-primary" target="_blank" rel="noreferrer">
                    Open MedStack OS Lite <Icon name="arrow" size={12} color="var(--graphite-0)" />
                  </a>
                </div>
              )}
            </form>
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
