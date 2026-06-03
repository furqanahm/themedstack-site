import { useState } from "react";
import { GridBg, Icon } from "./atoms";
import { CONVERTKIT_ACTION } from "../config";

const BENEFITS = [
  { t: "Early access to ResearchStack Academy", d: "Be first to know when the full research program opens." },
  { t: "Founding member pricing", d: "Lock in the earliest price before public launch." },
  { t: "ResearchStack build updates", d: "See the roadmap, templates and workflows as they are built." },
  { t: "Build log — no spam", d: "Behind-the-scenes updates as we build." },
];

export default function WaitlistCta() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("email_address", email);
      await fetch(CONVERTKIT_ACTION, { method: "POST", body: fd, mode: "no-cors" });
    } catch {
      /* no-cors — treat as success */
    }
    setSubmitting(false);
    setDone(true);
  };

  return (
    <section id="waitlist" style={{ position: "relative" }}>
      <div className="container">
        <div className="section-kicker">
          <span className="idx">10 - RESEARCHSTACK ACADEMY WAITLIST</span>
          <span className="rule" />
        </div>

        <div
          className="ticked"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "var(--r-4)",
            border: "1px solid var(--hair-strong)",
            background: `
              radial-gradient(800px 400px at 82% 18%, rgba(110,151,242,0.16), transparent 60%),
              radial-gradient(760px 420px at 12% 88%, rgba(67,198,138,0.12), transparent 60%),
              var(--graphite-2)
            `,
            padding: "clamp(36px, 5vw, 72px)",
            boxShadow: "var(--shadow-3)",
          }}
        >
          <GridBg opacity={0.22} />
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span className="tag tag-amber">
                  <span className="dot" />
                  FOUNDING ACCESS · OPENING SOON
                </span>
                <span className="rx-label">LIMITED SEATS</span>
              </div>
              <h2 className="serif" style={{ fontSize: "var(--fs-h2)", lineHeight: 1.0, letterSpacing: "-0.018em", margin: 0, color: "var(--paper)" }}>
                Join the waitlist for{" "}
                <em style={{ color: "var(--blue)" }}>ResearchStack Academy.</em>
              </h2>
              <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.6, color: "var(--ink-dim)", maxWidth: 520 }}>
                A deeper research training program for ambitious medical students and junior doctors who want to learn
                how to find projects, work with supervisors, write papers, understand systematic reviews and
                meta-analyses, and build research output that strengthens their CV.
              </p>

              <form onSubmit={onSubmit} style={{ marginTop: 28 }}>
                {!done ? (
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", maxWidth: 480 }}>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@medschool.edu.au"
                      type="email"
                      required
                      style={{ flex: "1 1 240px" }}
                    />
                    <button className="btn btn-primary" type="submit" disabled={submitting}>
                      {submitting ? "Joining…" : "Join the academy waitlist"}
                      {!submitting && <Icon name="arrow" size={12} color="var(--graphite-0)" />}
                    </button>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "14px 16px",
                      background: "rgba(110,151,242,0.1)",
                      border: "1px solid var(--blue-deep)",
                      borderRadius: 9,
                      maxWidth: 480,
                    }}
                  >
                    <Icon name="check" size={16} color="var(--blue)" strokeWidth={2} />
                    <div>
                      <div style={{ fontSize: 14, color: "var(--paper)" }}>You&apos;re on the academy waitlist.</div>
                      <div className="mono" style={{ fontSize: 11, opacity: 0.5 }}>WE&apos;LL EMAIL WHEN RESEARCHSTACK ACADEMY OPENS</div>
                    </div>
                  </div>
                )}
              </form>
            </div>

            <div>
              <div className="rx-label" style={{ marginBottom: 14 }}>WHAT WAITLIST MEMBERS GET</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {BENEFITS.map((b) => (
                  <div
                    key={b.t}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                      padding: "14px 16px",
                      background: "var(--graphite-1)",
                      border: "1px solid var(--hair)",
                      borderRadius: 10,
                    }}
                  >
                    <span style={{ width: 20, height: 20, borderRadius: 999, flex: "none", display: "grid", placeItems: "center", background: "rgba(67,198,138,0.12)", color: "var(--green)", marginTop: 1 }}>
                      <Icon name="check" size={11} color="var(--green)" strokeWidth={2.4} />
                    </span>
                    <div>
                      <div style={{ fontSize: 13.5, color: "var(--paper)", fontWeight: 500 }}>{b.t}</div>
                      <div style={{ fontSize: 12, color: "var(--ink-dim)", marginTop: 2 }}>{b.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
