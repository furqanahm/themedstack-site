import { Icon } from "./atoms";
import ProductDemo from "./ProductDemo";

export default function Hero() {
  return (
    <section style={{ paddingTop: "clamp(52px, 6.5vw, 88px)", paddingBottom: 0, overflow: "hidden" }}>
      <div className="container" style={{ position: "relative" }}>
        {/* Headline block */}
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
            <span className="tag">
              <span className="dot" />
              BUILT FOR MEDICAL STUDENTS & JUNIOR DOCTORS
            </span>
          </div>

          <h1 className="display" style={{ fontSize: "clamp(40px, 6.2vw, 80px)", margin: 0, color: "var(--paper)" }}>
            Build the medical CV
            <br />
            that gets you <em style={{ color: "var(--green)" }}>noticed.</em>
          </h1>

          <p
            style={{
              margin: "24px auto 0",
              maxWidth: 640,
              fontSize: "var(--fs-lead)",
              lineHeight: 1.55,
              color: "var(--ink-dim)",
            }}
          >
            MedStack OS, research systems, and practical career tools for ambitious medical students and
            junior doctors building <strong style={{ color: "var(--paper)", fontWeight: 600 }}>competitive medical careers</strong>.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 30, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#waitlist" className="btn btn-primary">
              Join the founding waitlist <Icon name="arrow" size={12} color="var(--graphite-0)" />
            </a>
            <a href="#medstack-os" className="btn btn-ghost">
              <svg width="13" height="13" viewBox="0 0 16 16" aria-hidden style={{ marginRight: -1 }}>
                <path d="M5 3.5l7 4.5-7 4.5z" fill="currentColor" />
              </svg>
              Preview MedStack OS
            </a>
          </div>

          <div className="rx-label" style={{ marginTop: 22, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <span>BUILT IN AUSTRALIA</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>EDUCATION-FIRST</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>FOUNDING ACCESS SOON</span>
          </div>
        </div>

        {/* Product demo — the centerpiece */}
        <div style={{ position: "relative", marginTop: "clamp(44px, 5vw, 70px)", paddingBottom: "clamp(64px, 8vw, 110px)" }}>
          <ProductDemo />
        </div>
      </div>
    </section>
  );
}
