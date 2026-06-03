import { SectionHeading, Icon } from "./atoms";

const WITHOUT = [
  "Random advice from seniors, forums and group chats",
  "Scattered notes, spreadsheets and lost deadlines",
  "Guessing what actually counts for selection",
  "Research that stalls long before it's published",
];

const WITH = [
  "One system for your whole medical career",
  "Every deadline, document and project tracked",
  "A CV mapped to real selection criteria",
  "Research that reaches publication",
];

export default function WhyThisExists() {
  return (
    <section id="why" className="sec-light">
      <div className="container">
        <div className="section-kicker">
          <span className="idx">06 - WHY THIS EXISTS</span>
          <span className="rule" />
        </div>

        <SectionHeading
          eyebrow="WHY THE MEDSTACK"
          title={
            <>
              Medicine is competitive. Career-building is{" "}
              <em style={{ color: "var(--blue-deep)" }}>confusing.</em>
            </>
          }
          kicker="The MedStack helps medical students and junior doctors stop relying on random advice, scattered notes and vague guidance — and start building a competitive career on purpose."
          maxWidth={760}
        />

        <div style={{ marginTop: 52, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
          {/* Without */}
          <div
            style={{
              border: "1px solid #e6e3d7",
              borderRadius: 16,
              padding: 28,
              background: "rgba(20,22,26,0.025)",
            }}
          >
            <div className="rx-label" style={{ color: "#9a8a55" }}>WITHOUT A SYSTEM</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 18 }}>
              {WITHOUT.map((w) => (
                <div key={w} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                  <span style={{ width: 18, height: 18, borderRadius: 999, flex: "none", display: "grid", placeItems: "center", color: "#c08a3a", border: "1.5px solid #e3c79a", marginTop: 1 }}>
                    <Icon name="cross" size={9} color="#c08a3a" strokeWidth={1.6} />
                  </span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.5, color: "#5b606a" }}>{w}</span>
                </div>
              ))}
            </div>
          </div>

          {/* With */}
          <div
            style={{
              border: "1px solid #cfe9da",
              borderRadius: 16,
              padding: 28,
              background: "linear-gradient(180deg, #f1faf4, #fff)",
            }}
          >
            <div className="rx-label" style={{ color: "var(--green-deep)" }}>WITH THE MEDSTACK</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 18 }}>
              {WITH.map((w) => (
                <div key={w} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                  <span style={{ width: 18, height: 18, borderRadius: 999, flex: "none", display: "grid", placeItems: "center", background: "#1f9d62", marginTop: 1 }}>
                    <Icon name="check" size={10} color="#fff" strokeWidth={2.6} />
                  </span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.5, color: "#26303a", fontWeight: 500 }}>{w}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
