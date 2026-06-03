import { useState } from "react";
import { GridBg, Icon } from "./atoms";

const BENEFITS = [
  { t: "First look at ResearchStack Starter", d: "Get the release notes before it opens publicly." },
  { t: "Founding member pricing", d: "Lock in the earliest research-product price before launch." },
  { t: "Build updates", d: "See the templates, workflows and research systems as they come together." },
  { t: "No spam", d: "Only product updates, useful research resources and launch timing." },
];

const encode = (data) => new URLSearchParams(data).toString();

export default function WaitlistCta() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitting(true);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "researchstack-waitlist",
          "bot-field": "",
          email,
          source: "website-waitlist",
        }),
      });
    } catch {
      /* Keep the page calm; Netlify records submissions after deploy. */
    }

    setSubmitting(false);
    setDone(true);
  };

  return (
    <section id="waitlist" style={{ position: "relative" }}>
      <div className="container">
        <div className="section-kicker">
          <span className="idx">07 - RESEARCHSTACK WAITLIST</span>
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
                  RESEARCHSTACK STARTER
                </span>
                <span className="rx-label">LIMITED FOUNDING PRICE</span>
              </div>

              <h2 className="serif" style={{ fontSize: "var(--fs-h2)", lineHeight: 1.0, letterSpacing: "-0.018em", margin: 0, color: "var(--paper)" }}>
                Join the early list for{" "}
                <em style={{ color: "var(--blue)" }}>ResearchStack.</em>
              </h2>

              <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.6, color: "var(--ink-dim)", maxWidth: 520 }}>
                We are building the research product separately instead of rushing it. Join the early list and you will
                be first to see the supervisor scripts, project-type guides, manuscript systems and AI research
                workflows before the public launch.
              </p>

              <form
                name="researchstack-waitlist"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={onSubmit}
                style={{ marginTop: 28 }}
              >
                <input type="hidden" name="form-name" value="researchstack-waitlist" />
                <input type="hidden" name="bot-field" value="" />
                <input type="hidden" name="source" value="website-waitlist" />
                {!done ? (
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", maxWidth: 480 }}>
                    <input
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@medschool.edu.au"
                      type="email"
                      required
                      style={{ flex: "1 1 240px" }}
                    />
                    <button className="btn btn-primary" type="submit" disabled={submitting}>
                      {submitting ? "Joining..." : "Join the ResearchStack list"}
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
                      <div style={{ fontSize: 14, color: "var(--paper)" }}>You&apos;re on the ResearchStack list.</div>
                      <div className="mono" style={{ fontSize: 11, opacity: 0.5 }}>WE&apos;LL EMAIL WHEN THE RESEARCH PRODUCT OPENS</div>
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
