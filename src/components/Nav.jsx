import { Wordmark, Icon } from "./atoms";
import { MEDSTACK_OS_CHECKOUT_URL } from "../config";

const LINKS = [
  ["MedStack OS", "#medstack-os"],
  ["ResearchStack", "#researchstack"],
  ["Why", "#why"],
];

export default function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        background: "rgba(11, 13, 16, 0.72)",
        borderBottom: "1px solid var(--hair)",
        color: "var(--paper)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 66,
        }}
      >
        <a href="#" aria-label="MedStack home" style={{ color: "var(--paper)" }}>
          <Wordmark />
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {LINKS.map(([label, href]) => (
            <a key={label} href={href} style={{ fontSize: 13.5, color: "var(--paper)", opacity: 0.72 }}>
              {label}
            </a>
          ))}
          <span className="hr" style={{ width: 1, height: 20, background: "var(--hair-strong)" }} />
          <a href={MEDSTACK_OS_CHECKOUT_URL} className="btn btn-ghost lemonsqueezy-button" style={{ padding: "9px 15px" }}>
            Get MedStack OS <Icon name="arrow" size={12} />
          </a>
        </nav>
      </div>
    </header>
  );
}
