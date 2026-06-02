import { Wordmark, Icon } from "./atoms";
import { MEDSTACK_OS_LITE_URL } from "../config";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--graphite-3)",
        paddingTop: 64,
        paddingBottom: 32,
        background: "var(--graphite-1)",
      }}
    >
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48, marginBottom: 64 }}>
          <div>
            <Wordmark />
            <p
              style={{
                marginTop: 16,
                fontSize: 13,
                lineHeight: 1.55,
                color: "var(--paper)",
                opacity: 0.55,
                maxWidth: 300,
              }}
            >
              The career operating system for ambitious future doctors. Built inside Australian medicine.
            </p>
            <div style={{ marginTop: 20, display: "flex", gap: 8 }}>
              <span className="tag">
                <span className="dot" />
                AUSTRALIA
              </span>
              <span className="tag tag-blue">
                <span className="dot" />
                MEDSTACK
              </span>
            </div>
          </div>

          {[
            {
              h: "PRODUCT",
              l: [
                ["OS Lite free", MEDSTACK_OS_LITE_URL],
                ["Full MedStack OS", "#get-medstack-os"],
                ["What is MedStack OS", "#medstack-os"],
                ["ResearchStack Starter", "#researchstack"],
                ["ResearchStack Academy", "#academy"],
              ],
            },
            {
              h: "GET STARTED",
              l: [
                ["Founding waitlist", "#waitlist"],
                ["Why The MedStack", "#why"],
              ],
            },
            {
              h: "COMPANY",
              l: [
                ["Contact", "#"],
                ["Privacy", "#"],
                ["Terms", "#"],
              ],
            },
          ].map((col, i) => (
            <div key={i}>
              <div className="rx-label" style={{ marginBottom: 14 }}>
                {col.h}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.l.map(([label, href], j) => (
                  <a
                    key={j}
                    href={href}
                    target={href.startsWith("https://") ? "_blank" : undefined}
                    rel={href.startsWith("https://") ? "noreferrer" : undefined}
                    style={{ fontSize: 13, color: "var(--paper)", opacity: 0.7 }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            padding: "24px 28px",
            border: "1px solid var(--graphite-3)",
            borderLeft: "3px solid var(--amber)",
            borderRadius: 8,
            background: "var(--graphite-2)",
            marginBottom: 32,
          }}
        >
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 6,
                flexShrink: 0,
                background: "rgba(233,162,59,0.12)",
                color: "var(--amber)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Icon name="cross" size={14} color="var(--amber)" strokeWidth={1.4} />
            </div>
            <div>
              <div className="rx-label" style={{ color: "var(--amber)", marginBottom: 6 }}>
                DISCLAIMER · STUDENT EDUCATION ONLY
              </div>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: "var(--paper)", opacity: 0.75, maxWidth: 820 }}>
                MedStack is an educational resource for medical and pre-medical students. It is{" "}
                <strong>not medical advice</strong>, not a substitute for professional clinical judgement, and not
                intended for patient care. AI outputs are unverified — always cross-reference against your
                institution&apos;s curriculum and supervising clinicians.
              </p>
            </div>
          </div>
        </div>

        <div className="hr" style={{ marginBottom: 24 }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div className="mono" style={{ fontSize: 11, opacity: 0.5, letterSpacing: "0.06em" }}>
            © 2026 MEDSTACK · AUSTRALIA
          </div>
          <div className="mono" style={{ fontSize: 11, opacity: 0.5, letterSpacing: "0.06em" }}>
            v1.0 · <span style={{ color: "var(--green)" }}>● SHIPPING</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
