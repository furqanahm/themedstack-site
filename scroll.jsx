// "How it works" — 4-beat section with synced animated mockup (no sticky)
const Scrollytelling = () => {
  const beats = [
    {
      eyebrow: "01 · DIAGNOSE",
      title: "Your weak spots, surfaced.",
      body: "The agent reads your last 30 days of Anki, your reflection notes, and the topics you've been avoiding. It builds a quiet list of what you actually don't know.",
      visual: <DiagnoseBeat/>,
    },
    {
      eyebrow: "02 · DRILL",
      title: "Socratic questioning, not slop.",
      body: "Quizzed by a simulated consultant. Not multiple-choice — open SAQs marked against your year-level rubric. You'll feel it in your chest the first time it pushes back.",
      visual: <DrillBeat/>,
    },
    {
      eyebrow: "03 · SIMULATE",
      title: "OSCE roleplay, on demand.",
      body: "Patient + examiner, played by the agent. Chest pain station, paeds rash, mental state exam. Anytime, no booking, no judgment.",
      visual: <SimulateBeat/>,
    },
    {
      eyebrow: "04 · LOG",
      title: "Everything ends up in your stack.",
      body: "Cases, reflections, marked SAQs, missed concepts — all written back into your Med Stack OS. So next month's revision starts where last month's left off.",
      visual: <LogBeat/>,
    },
  ];

  return (
    <section style={{ paddingTop: 120, paddingBottom: 120, position: "relative" }}>
      <div className="container">
        <div style={{ marginBottom: 64 }}>
          <SectionHeading
            eyebrow="SECTION 04 · HOW THE AGENT WORKS"
            title={<>From confused to <em style={{fontStyle:"italic", color:"var(--green)"}}>clinically sharp</em> — in four moves.</>}
            kicker="The Med Stack Agent runs a continuous loop: diagnose what you don't know, drill it, simulate it, then log everything back to your operating system."
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {beats.map((b, i) => (
            <BeatRow key={i} beat={b} flip={i % 2 === 1} idx={i}/>
          ))}
        </div>
      </div>
    </section>
  );
};

const BeatRow = ({ beat, flip, idx }) => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="card"
      style={{
        padding: 0,
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: flip ? "1.2fr 1fr" : "1fr 1.2fr",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 700ms ease, transform 700ms ease",
      }}
    >
      {/* Visual side */}
      <div style={{
        order: flip ? 2 : 1,
        background: "var(--graphite-1)",
        borderRight: flip ? "none" : "1px solid var(--graphite-3)",
        borderLeft: flip ? "1px solid var(--graphite-3)" : "none",
        position: "relative",
        minHeight: 420,
      }}>
        {beat.visual}
      </div>

      {/* Copy side */}
      <div style={{
        order: flip ? 1 : 2,
        padding: "48px 52px",
        display: "flex", flexDirection: "column", justifyContent: "center",
      }}>
        <div className="mono" style={{ fontSize: 11, color: "var(--green)", letterSpacing: "0.18em", marginBottom: 18 }}>
          {beat.eyebrow}
        </div>
        <h3 className="serif" style={{
          fontSize: "clamp(32px, 3.6vw, 48px)", lineHeight: 1.04, letterSpacing: "-0.02em",
          margin: 0, color: "var(--paper)",
        }}>{beat.title}</h3>
        <p style={{ marginTop: 18, fontSize: 16, lineHeight: 1.6, color: "var(--paper)", opacity: 0.7, marginBottom: 0 }}>
          {beat.body}
        </p>
      </div>
    </div>
  );
};

const DiagnoseBeat = () => (
  <div style={{ padding: 24, height: "100%" }}>
    <div className="rx-label" style={{ marginBottom: 14 }}>WEAK SPOT ANALYSIS · LAST 30 DAYS</div>
    {[
      { l: "β-blocker contraindications", v: 32, c: "var(--red)" },
      { l: "MI ECG localisation", v: 41, c: "var(--amber)" },
      { l: "RBC indices interpretation", v: 48, c: "var(--amber)" },
      { l: "Peripheral neuropathy DDx", v: 58, c: "var(--amber)" },
      { l: "ACS management algorithm", v: 72, c: "var(--green)" },
      { l: "Asthma stepwise therapy", v: 84, c: "var(--green)" },
    ].map((it, i) => (
      <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 80px 44px", gap: 12, alignItems: "center", padding: "10px 0", borderBottom: "1px solid var(--graphite-3)" }}>
        <span style={{ fontSize: 13, color: "var(--paper)" }}>{it.l}</span>
        <div style={{ height: 6, background: "var(--graphite-3)", borderRadius: 999, overflow: "hidden" }}>
          <div style={{ width: `${it.v}%`, height: "100%", background: it.c, transition: "width 800ms ease" }}/>
        </div>
        <span className="mono" style={{ fontSize: 11, color: it.c, textAlign: "right" }}>{it.v}%</span>
      </div>
    ))}
  </div>
);

const DrillBeat = () => (
  <div style={{ padding: 24 }}>
    <div className="rx-label" style={{ marginBottom: 14 }}>SAQ · β-BLOCKERS · Q1 / 6</div>
    <div style={{ padding: 16, background: "var(--graphite-2)", border: "1px solid var(--graphite-3)", borderRadius: 8, marginBottom: 14 }}>
      <div style={{ fontSize: 13, lineHeight: 1.55, color: "var(--paper)" }}>
        A 27F with mild persistent asthma is started on propranolol for migraine prophylaxis. She presents to ED with worsening wheeze. Outline the mechanism by which non-selective β-blockade exacerbates bronchospasm. <span className="mono" style={{ opacity: 0.5, fontSize: 11 }}>(3 marks)</span>
      </div>
    </div>
    <div style={{ padding: 14, background: "var(--graphite-1)", border: "1.5px dashed var(--green-deep)", borderRadius: 8, fontSize: 12, color: "var(--paper)", opacity: 0.8, fontFamily: "var(--font-mono)" }}>
      <span className="mono" style={{ color: "var(--green)" }}>›</span> typing your answer<span style={{animation:"pulseDot 1s infinite"}}>▍</span>
    </div>
    <div style={{ marginTop: 12, display: "flex", gap: 10, alignItems: "center", padding: "10px 14px", border: "1px solid var(--blue-deep)", background: "rgba(61,123,255,0.08)", borderRadius: 8 }}>
      <Icon name="check" size={12} color="var(--blue)" strokeWidth={2}/>
      <div className="mono" style={{ fontSize: 11, color: "var(--blue)", letterSpacing: "0.06em" }}>EXAMINER · OPEN QUESTION, MOA ATTEMPTED</div>
    </div>
  </div>
);

const SimulateBeat = () => (
  <div style={{ padding: 24 }}>
    <div className="rx-label" style={{ marginBottom: 14 }}>OSCE · CHEST PAIN STATION · 8:00</div>
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {[
        { who: "patient", txt: "Doctor, my chest's been hurting since this morning. Right here." },
        { who: "you", txt: "Can you describe the pain — sharp, dull, crushing?" },
        { who: "patient", txt: "Like… something heavy on me. Spreads to my left arm." },
        { who: "examiner", txt: "MARK · Open question, OPQRST started. Continue." },
        { who: "you", txt: "When did it first start — and have you ever had pain like this before?" },
      ].map((m, i) => (
        <div key={i} style={{ display: "flex", justifyContent: m.who === "you" ? "flex-end" : "flex-start" }}>
          <div style={{
            maxWidth: "78%", padding: "10px 14px", lineHeight: 1.4,
            borderRadius: m.who === "you" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
            background: m.who === "examiner" ? "rgba(61,123,255,0.12)" : (m.who === "you" ? "var(--blue)" : "var(--graphite-2)"),
            color: m.who === "you" ? "#fff" : "var(--paper)",
            border: m.who === "examiner" ? "1px solid var(--blue-deep)" : (m.who === "patient" ? "1px solid var(--graphite-3)" : "none"),
            fontStyle: m.who === "patient" ? "italic" : "normal",
            fontFamily: m.who === "examiner" ? "var(--font-mono)" : "inherit",
            fontSize: m.who === "examiner" ? 10 : 13,
            letterSpacing: m.who === "examiner" ? "0.06em" : "normal",
          }}>{m.txt}</div>
        </div>
      ))}
    </div>
  </div>
);

const LogBeat = () => (
  <div style={{ padding: 24 }}>
    <div className="rx-label" style={{ marginBottom: 14 }}>WRITTEN BACK TO MED STACK OS</div>
    {[
      { p: "Cases · 27F asthma + propranolol", t: "+ 1 case logged", c: "var(--green)" },
      { p: "Reflections · OSCE chest pain timing", t: "+ 1 reflection", c: "var(--green)" },
      { p: "Anki · 4 new cards generated", t: "+ 4 cards", c: "var(--blue)" },
      { p: "Weak spots · β-blockers (32→61%)", t: "+29% mastery", c: "var(--green)" },
      { p: "OSCE log · Chest pain station marked", t: "+ session", c: "var(--blue)" },
    ].map((it, i) => (
      <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 12, alignItems: "center", padding: "12px 14px", border: "1px solid var(--graphite-3)", borderRadius: 8, marginBottom: 8, background: "var(--graphite-2)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Icon name="check" size={12} color={it.c} strokeWidth={2}/>
          <span style={{ fontSize: 13, color: "var(--paper)" }}>{it.p}</span>
        </div>
        <span className="mono" style={{ fontSize: 10, color: it.c, letterSpacing: "0.06em" }}>{it.t}</span>
      </div>
    ))}
  </div>
);

// Scroll-driven ECG that traces a continuous line down the side of the page
const ScrollEcg = () => {
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-ecg" style={{
      position: "fixed", left: 16, top: 0, bottom: 0,
      width: 32, pointerEvents: "none", zIndex: 40,
      display: "flex", flexDirection: "column", alignItems: "center",
    }}>
      <div className="mono" style={{ fontSize: 9, color: "var(--paper)", opacity: 0.4, letterSpacing: "0.18em", writingMode: "vertical-rl", transform: "rotate(180deg)", marginTop: 80 }}>
        ECG · LIVE TRACE
      </div>
      <svg width="32" height="100%" viewBox="0 0 32 1000" preserveAspectRatio="none" style={{ flex: 1, marginTop: 16 }}>
        <path
          d="M16,0 L16,80 L12,90 L20,100 L8,115 L24,130 L16,140 L16,200 L12,210 L20,220 L8,235 L24,250 L16,260 L16,320 L12,330 L20,340 L8,355 L24,370 L16,380 L16,440 L12,450 L20,460 L8,475 L24,490 L16,500 L16,560 L12,570 L20,580 L8,595 L24,610 L16,620 L16,680 L12,690 L20,700 L8,715 L24,730 L16,740 L16,800 L12,810 L20,820 L8,835 L24,850 L16,860 L16,1000"
          stroke="var(--green)" strokeWidth="1.2" fill="none" opacity="0.55"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - progress}
        />
        {/* Glowing dot at current trace point */}
        <circle cx="16" cy={progress * 1000} r="3" fill="var(--green)">
          <animate attributeName="r" values="3;5;3" dur="1.4s" repeatCount="indefinite"/>
        </circle>
      </svg>
      <div className="mono" style={{ fontSize: 9, color: "var(--green)", letterSpacing: "0.1em", marginBottom: 32 }}>
        {Math.round(progress * 100)}%
      </div>
    </div>
  );
};

Object.assign(window, { Scrollytelling, ScrollEcg });
