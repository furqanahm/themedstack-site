import { Icon } from "./atoms";
import { PRICING } from "../config";

const MODULES = [
  { title: "Research roadmap", body: "A step-by-step path from zero to your first publication." },
  { title: "Cold email vault", body: "Proven templates and a follow-up cadence that get replies." },
  { title: "Project selection matrix", body: "Pick projects that actually publish — and fit your time." },
  { title: "Research project tracker", body: "Every project, supervisor and submission in one place." },
  { title: "AI research workflow", body: "Use AI to move faster — drafting, screening, structuring." },
  { title: "CV translation guide", body: "Turn research output into CV lines selectors reward." },
  { title: "Journal & conference database", body: "Starter list of where to submit and present, by field." },
  { title: "Worksheets", body: "Fill-in templates for emails, protocols and write-ups." },
];

const WORKFLOW = [
  { label: "Find a publishable project", done: true },
  { label: "Email supervisor — template sent", done: true },
  { label: "Confirm case eligibility", done: true },
  { label: "Draft manuscript", done: false },
  { label: "Internal review", done: false },
  { label: "Submit to BMJ Case Reports", done: false },
];

/* Light "document" product view — a real ResearchStack project page */
function ProjectDoc() {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e7e5dd",
        borderRadius: 16,
        boxShadow: "0 40px 110px -50px rgba(0,0,0,0.5), 0 10px 30px -18px rgba(0,0,0,0.25)",
        overflow: "hidden",
        color: "#23262c",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "0 16px", height: 42, background: "#faf9f5", borderBottom: "1px solid #eeece5" }}>
        <div style={{ display: "flex", gap: 6 }}>
          <i style={{ width: 10, height: 10, borderRadius: 999, background: "#dddbd0" }} />
          <i style={{ width: 10, height: 10, borderRadius: 999, background: "#dddbd0" }} />
          <i style={{ width: 10, height: 10, borderRadius: 999, background: "#dddbd0" }} />
        </div>
        <span className="mono" style={{ fontSize: 11, color: "#8c909a" }}>ResearchStack / Projects</span>
      </div>

      <div style={{ padding: "26px 28px 28px" }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: "#3866e0", display: "grid", placeItems: "center", marginBottom: 14 }}>
          <Icon name="book" size={16} color="#fff" />
        </div>
        <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 420, fontSize: 26, letterSpacing: "-0.02em", color: "#1c1f24", margin: 0 }}>
          Post-op delirium — case report
        </h3>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "16px 0 20px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11.5, padding: "4px 10px", borderRadius: 6, background: "#e6ecfb", color: "#2e54c2", fontWeight: 500 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "#3866e0" }} />
            Drafting
          </span>
          <span style={{ fontSize: 11.5, color: "#6c707a", background: "#f4f3ec", border: "1px solid #ecebe3", borderRadius: 6, padding: "5px 10px" }}>
            Target · BMJ Case Rep
          </span>
          <span style={{ fontSize: 11.5, color: "#6c707a", background: "#f4f3ec", border: "1px solid #ecebe3", borderRadius: 6, padding: "5px 10px" }}>
            Supervisor · Dr. Patel
          </span>
        </div>

        <div style={{ height: 1, background: "#f0efe8", margin: "0 0 18px" }} />

        <div className="mono" style={{ fontSize: 9.5, letterSpacing: "0.13em", color: "#a9aeb6", marginBottom: 12 }}>
          WORKFLOW · 3 / 6
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          {WORKFLOW.map((w) => (
            <div key={w.label} style={{ display: "flex", alignItems: "center", gap: 11 }}>
              <span
                style={{
                  width: 17,
                  height: 17,
                  borderRadius: 5,
                  flex: "none",
                  display: "grid",
                  placeItems: "center",
                  background: w.done ? "#1f9d62" : "#fff",
                  border: w.done ? "1px solid #1f9d62" : "1.5px solid #d9d7cd",
                }}
              >
                {w.done && <Icon name="check" size={10} color="#fff" strokeWidth={2.6} />}
              </span>
              <span style={{ fontSize: 13.5, color: w.done ? "#9aa0a8" : "#2b2e34", textDecoration: w.done ? "line-through" : "none" }}>
                {w.label}
              </span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18, display: "flex", gap: 10, alignItems: "flex-start", padding: "12px 14px", borderRadius: 10, background: "#f4f3ec", border: "1px solid #ecebe3" }}>
          <span style={{ width: 24, height: 24, borderRadius: 6, background: "#fff", border: "1px solid #e7e5dd", display: "grid", placeItems: "center", color: "#1f9d62", flex: "none" }}>
            <Icon name="cpu" size={13} />
          </span>
          <div>
            <div className="mono" style={{ fontSize: 9.5, letterSpacing: "0.1em", color: "#a9aeb6" }}>AI · SUGGESTED NEXT STEP</div>
            <div style={{ fontSize: 12.5, color: "#3c4047", marginTop: 3 }}>Draft the Discussion (~350 words) from your case notes.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PriceCard() {
  const href = PRICING.live ? PRICING.checkoutUrl || "#" : "#waitlist";
  const label = PRICING.live ? PRICING.buyCta : PRICING.waitlistCta;
  return (
    <div className="card ticked" style={{ padding: 26, marginTop: 26 }}>
      <div className="rx-label">FOUNDING ACCESS</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 10 }}>
        <span className="serif" style={{ fontSize: 46, lineHeight: 1, color: "var(--paper)", letterSpacing: "-0.02em" }}>
          {PRICING.founding}
        </span>
        <span className="mono" style={{ fontSize: 14, color: "var(--ink-dim)" }}>{PRICING.currency}</span>
      </div>
      <div style={{ marginTop: 10, fontSize: 13.5, color: "var(--ink-dim)" }}>
        Regular price: {PRICING.regular} {PRICING.currency}
      </div>
      <div className="rx-label" style={{ marginTop: 4 }}>{PRICING.note}</div>
      <a href={href} className="btn btn-green" style={{ marginTop: 18, width: "100%", justifyContent: "center" }}>
        {label} <Icon name="arrow" size={12} color="var(--graphite-0)" />
      </a>
    </div>
  );
}

export default function ResearchStackStarter() {
  return (
    <section id="researchstack">
      <div className="container">
        <div className="section-kicker">
          <span className="idx">07 - RESEARCHSTACK STARTER SYSTEM</span>
          <span className="rule" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(36px, 5vw, 72px)", alignItems: "center" }}>
          {/* Left — product visualization */}
          <ProjectDoc />

          {/* Right — the offer */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <span className="tag tag-amber">
                <span className="dot" />
                NEXT PRODUCT
              </span>
            </div>

            <h2 className="serif" style={{ fontSize: "var(--fs-h2)", lineHeight: 1.0, margin: 0, color: "var(--paper)" }}>
              Build the research side of your CV —{" "}
              <em style={{ color: "var(--green)" }}>without the guesswork.</em>
            </h2>
            <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.6, color: "var(--ink-dim)", maxWidth: 480 }}>
              A complete starter system with the roadmap, templates, trackers, and workflows to help you find
              projects, contact supervisors, choose the right study type, and start building CV-worthy research
              output.
            </p>

            <PriceCard />
          </div>
        </div>

        {/* Modules */}
        <div className="rx-label" style={{ marginTop: "clamp(40px, 5vw, 64px)", marginBottom: 22 }}>
          WHAT&apos;S INSIDE · 8 MODULES
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {MODULES.map((m, i) => (
            <div key={m.title} className="card ticked" style={{ padding: 20 }}>
              <span
                style={{
                  display: "inline-grid",
                  placeItems: "center",
                  width: 24,
                  height: 24,
                  borderRadius: 6,
                  background: "rgba(31,157,98,0.10)",
                  border: "1px solid rgba(31,157,98,0.35)",
                  color: "var(--green)",
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  fontWeight: 600,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div style={{ fontSize: 14.5, fontWeight: 600, color: "var(--paper)", letterSpacing: "-0.01em", marginTop: 14 }}>
                {m.title}
              </div>
              <div style={{ fontSize: 12.5, lineHeight: 1.5, color: "var(--ink-dim)", marginTop: 5 }}>{m.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
