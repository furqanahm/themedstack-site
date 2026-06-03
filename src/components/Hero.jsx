import { Icon } from "./atoms";
import ProductDemo from "./ProductDemo";
import { MEDSTACK_OS_CHECKOUT_URL, MEDSTACK_OS_LITE_FORM_URL } from "../config";

export default function Hero() {
  return (
    <section style={{ paddingTop: "clamp(52px, 6.5vw, 88px)", paddingBottom: 0, overflow: "hidden" }}>
      <div className="container" style={{ position: "relative" }}>
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
            MedStack OS and ResearchStack help ambitious medical students and junior doctors organise their career,
            build research output, and create a{" "}
            <strong style={{ color: "var(--paper)", fontWeight: 600 }}>CV that stands out</strong> for competitive
            medical pathways.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 30, justifyContent: "center", flexWrap: "wrap" }}>
            <a href={MEDSTACK_OS_CHECKOUT_URL} className="btn btn-primary">
              Get MedStack OS <Icon name="arrow" size={12} color="var(--graphite-0)" />
            </a>
            <a href={MEDSTACK_OS_LITE_FORM_URL} className="btn btn-ghost" target="_blank" rel="noreferrer">
              Get OS Lite free <Icon name="arrow" size={12} />
            </a>
          </div>

          <div className="rx-label" style={{ marginTop: 22, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <span>BUILT IN AUSTRALIA</span>
            <span style={{ opacity: 0.4 }}>-</span>
            <span>EDUCATION-FIRST</span>
            <span style={{ opacity: 0.4 }}>-</span>
            <span>FOUNDING ACCESS OPEN</span>
          </div>

          <div className="hero-signal-strip" aria-label="MedStack OS product signals">
            <span>AI setup protocol</span>
            <span>Daily execution tracker</span>
            <span>Australian pathway layer</span>
          </div>
        </div>

        <div style={{ position: "relative", marginTop: "clamp(44px, 5vw, 70px)", paddingBottom: "clamp(64px, 8vw, 110px)" }}>
          <ProductDemo />
        </div>
      </div>
    </section>
  );
}
