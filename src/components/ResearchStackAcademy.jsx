const TOPICS = [
  "Case reports",
  "Systematic reviews",
  "Meta-analysis",
  "Manuscript writing",
  "AI-assisted research workflows",
  "Journal submission strategy",
];

export default function ResearchStackAcademy() {
  return (
    <section id="academy" style={{ paddingTop: "clamp(28px, 4vw, 56px)", paddingBottom: "clamp(28px, 4vw, 56px)" }}>
      <div className="container">
        <div
          className="card ticked"
          style={{
            padding: "clamp(24px, 4vw, 40px)",
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "clamp(24px, 4vw, 56px)",
            alignItems: "center",
            opacity: 0.92,
          }}
        >
          <div>
            <span className="tag" style={{ color: "var(--ink-dim)" }}>
              <span className="dot" style={{ background: "var(--graphite-6)", boxShadow: "none" }} />
              COMING LATER
            </span>
            <h3 className="serif" style={{ fontSize: "var(--fs-h3)", margin: "16px 0 0", color: "var(--paper)", letterSpacing: "-0.015em" }}>
              ResearchStack Academy
            </h3>
            <p style={{ margin: "12px 0 0", fontSize: 14.5, lineHeight: 1.6, color: "var(--ink-dim)", maxWidth: 420 }}>
              The complete research course — a deeper, end-to-end program for trainees who want to go all the way.
              The Starter System comes first; the Academy follows.
            </p>
          </div>

          <div>
            <div className="rx-label" style={{ marginBottom: 14 }}>WHAT IT WILL COVER</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
              {TOPICS.map((t) => (
                <span
                  key={t}
                  className="mono"
                  style={{
                    fontSize: 11.5,
                    letterSpacing: "0.02em",
                    color: "var(--ink-dim)",
                    border: "1px solid var(--hair)",
                    borderRadius: 999,
                    padding: "7px 13px",
                    background: "rgba(243,241,233,0.02)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <a href="#waitlist" style={{ display: "inline-block", marginTop: 18, fontSize: 13.5, color: "var(--paper)", opacity: 0.8, borderBottom: "1px solid var(--hair-strong)", paddingBottom: 2 }}>
              Get notified when it opens →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
