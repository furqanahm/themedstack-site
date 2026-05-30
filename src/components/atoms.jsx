// Shared atoms: icons, motifs, helpers — monoline clinical style

export const Logo = ({ size = 28, color = "currentColor", accent }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
    <rect x="6" y="7" width="20" height="4" rx="1" fill={color} opacity="0.4" />
    <rect x="4" y="14" width="24" height="4" rx="1" fill={color} opacity="0.7" />
    <rect x="2" y="21" width="28" height="4" rx="1" fill={accent || "var(--green)"} />
  </svg>
);

export const Wordmark = ({ color = "currentColor", size = "sm" }) => {
  const fontSize = size === "lg" ? 28 : 18;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <Logo size={size === "lg" ? 32 : 22} color={color} />
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 500,
          letterSpacing: "-0.015em",
          fontSize,
          color,
          lineHeight: 1,
          fontStyle: "italic",
        }}
      >
        The Med<span style={{ fontStyle: "normal" }}>Stack</span>
      </div>
    </div>
  );
};

export const EcgLine = ({ height = 80, stroke = "var(--green)", speed = 6 }) => (
  <svg
    width="100%"
    height={height}
    viewBox="0 0 1200 80"
    preserveAspectRatio="none"
    style={{ display: "block" }}
    aria-hidden
  >
    <defs>
      <linearGradient id="ecgFade" x1="0" x2="1">
        <stop offset="0" stopColor={stroke} stopOpacity="0" />
        <stop offset="0.15" stopColor={stroke} stopOpacity="1" />
        <stop offset="0.85" stopColor={stroke} stopOpacity="1" />
        <stop offset="1" stopColor={stroke} stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M0,40 L120,40 L150,40 L160,38 L172,42 L184,40 L240,40 L260,40 L268,18 L276,62 L284,28 L292,40 L360,40 L420,40 L432,40 L440,36 L452,44 L464,40 L520,40 L560,40 L568,16 L576,60 L584,30 L592,40 L660,40 L720,40 L732,40 L740,38 L752,42 L760,40 L820,40 L860,40 L868,18 L876,62 L884,28 L892,40 L960,40 L1020,40 L1032,40 L1040,36 L1052,44 L1060,40 L1120,40 L1200,40"
      stroke="url(#ecgFade)"
      strokeWidth="1.5"
      fill="none"
      strokeDasharray="2400"
      style={{ animation: `ecg ${speed}s linear infinite` }}
    />
  </svg>
);

export const GridBg = ({ opacity = 0.4 }) => (
  <svg
    width="100%"
    height="100%"
    style={{ position: "absolute", inset: 0, opacity, pointerEvents: "none" }}
    aria-hidden
  >
    <defs>
      <pattern id="grid-sm" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="var(--graphite-3)" strokeWidth="0.5" />
      </pattern>
      <pattern id="grid-lg" width="120" height="120" patternUnits="userSpaceOnUse">
        <rect width="120" height="120" fill="url(#grid-sm)" />
        <path d="M 120 0 L 0 0 0 120" fill="none" stroke="var(--graphite-4)" strokeWidth="0.6" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-lg)" />
  </svg>
);

export const Icon = ({ name, size = 16, color = "currentColor", strokeWidth = 1.5 }) => {
  const paths = {
    arrow: (
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    check: (
      <path
        d="M3 8.5l3.2 3L13 4.5"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    plus: (
      <path
        d="M8 3v10M3 8h10"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
    ),
    cross: (
      <path
        d="M8 2v12M2 8h12"
        stroke={color}
        strokeWidth={strokeWidth * 1.4}
        strokeLinecap="round"
      />
    ),
    spark: (
      <path
        d="M8 2l1.4 4.6L14 8l-4.6 1.4L8 14l-1.4-4.6L2 8l4.6-1.4z"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinejoin="round"
      />
    ),
    dot: <circle cx="8" cy="8" r="3" fill={color} />,
    pill: (
      <>
        <rect x="2" y="6" width="12" height="4" rx="2" stroke={color} strokeWidth={strokeWidth} fill="none" />
        <line x1="8" y1="6" x2="8" y2="10" stroke={color} strokeWidth={strokeWidth} />
      </>
    ),
    node: (
      <>
        <circle cx="8" cy="8" r="3" stroke={color} strokeWidth={strokeWidth} fill="none" />
        <circle cx="8" cy="8" r="1" fill={color} />
      </>
    ),
    lock: (
      <>
        <rect x="3" y="7" width="10" height="7" rx="1.5" stroke={color} strokeWidth={strokeWidth} fill="none" />
        <path d="M5 7V5a3 3 0 016 0v2" stroke={color} strokeWidth={strokeWidth} fill="none" />
      </>
    ),
    book: (
      <path
        d="M3 3h4a3 3 0 013 3v7a2 2 0 00-2-2H3zM13 3H9a3 3 0 00-3 3v7a2 2 0 012-2h5z"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinejoin="round"
      />
    ),
    cpu: (
      <>
        <rect x="3" y="3" width="10" height="10" rx="1" stroke={color} strokeWidth={strokeWidth} fill="none" />
        <rect x="6" y="6" width="4" height="4" stroke={color} strokeWidth={strokeWidth} fill="none" />
        <path
          d="M6 1v2M10 1v2M6 13v2M10 13v2M1 6h2M1 10h2M13 6h2M13 10h2"
          stroke={color}
          strokeWidth={strokeWidth}
        />
      </>
    ),
    map: (
      <path
        d="M2 4l4-1 4 1 4-1v9l-4 1-4-1-4 1zM6 3v9M10 4v9"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinejoin="round"
      />
    ),
    layers: (
      <path
        d="M8 2l6 3-6 3-6-3zM2 8l6 3 6-3M2 11l6 3 6-3"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinejoin="round"
      />
    ),
    bolt: (
      <path
        d="M9 1L3 9h4l-1 6 6-8H8z"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinejoin="round"
      />
    ),
  };
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" style={{ display: "inline-block", verticalAlign: "middle" }} aria-hidden>
      {paths[name]}
    </svg>
  );
};

export const Vital = ({ label, value, unit, accent = "var(--green)" }) => (
  <div style={{ borderLeft: `2px solid ${accent}`, paddingLeft: 12 }}>
    <div className="rx-label">{label}</div>
    <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginTop: 2 }}>
      <div className="serif" style={{ fontSize: 32, lineHeight: 1, color: "var(--paper)" }}>
        {value}
      </div>
      {unit && (
        <div className="mono" style={{ fontSize: 11, color: "var(--paper)", opacity: 0.5 }}>
          {unit}
        </div>
      )}
    </div>
  </div>
);

export const SectionHeading = ({ eyebrow, title, kicker, align = "left", maxWidth = 720 }) => (
  <div style={{ maxWidth, marginInline: align === "center" ? "auto" : 0, textAlign: align }}>
    {eyebrow && (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          justifyContent: align === "center" ? "center" : "flex-start",
          marginBottom: 18,
        }}
      >
        <span style={{ width: 24, height: 1, background: "var(--graphite-5)" }} />
        <span className="eyebrow">{eyebrow}</span>
      </div>
    )}
    <h2
      className="serif"
      style={{
        fontSize: "clamp(36px, 5vw, 64px)",
        lineHeight: 1.02,
        margin: 0,
        letterSpacing: "-0.02em",
        color: "var(--paper)",
      }}
    >
      {title}
    </h2>
    {kicker && (
      <p
        style={{
          marginTop: 18,
          marginBottom: 0,
          fontSize: 17,
          lineHeight: 1.55,
          color: "var(--paper)",
          opacity: 0.7,
          maxWidth: 600,
          marginInline: align === "center" ? "auto" : 0,
        }}
      >
        {kicker}
      </p>
    )}
  </div>
);

export const WindowChrome = ({ title, children, accent = "var(--green)", footerText }) => (
  <div
    style={{
      background: "var(--graphite-2)",
      border: "1px solid var(--graphite-3)",
      borderRadius: 14,
      overflow: "hidden",
      boxShadow:
        "0 30px 80px -30px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02) inset",
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 14px",
        borderBottom: "1px solid var(--graphite-3)",
        background: "var(--graphite-2)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 8, height: 8, borderRadius: 999, background: "var(--graphite-4)" }} />
        <div style={{ width: 8, height: 8, borderRadius: 999, background: "var(--graphite-4)" }} />
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: 999,
            background: accent,
            boxShadow: `0 0 0 3px ${accent}22`,
          }}
        />
        <span className="mono" style={{ fontSize: 11, color: "var(--paper)", opacity: 0.5, marginLeft: 10 }}>
          {title}
        </span>
      </div>
    </div>
    <div>{children}</div>
    {footerText && (
      <div
        style={{
          padding: "8px 14px",
          borderTop: "1px solid var(--graphite-3)",
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          opacity: 0.5,
          letterSpacing: "0.06em",
        }}
      >
        <span>{footerText}</span>
        <span>● LIVE</span>
      </div>
    )}
  </div>
);
