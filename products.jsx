// Product preview cards: Pathway Map, Med Stack OS, Med Stack Agent
const Products = () => (
  <section id="products" style={{position:"relative"}}>
    <div className="container">
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"end", marginBottom:56, gap:32, flexWrap:"wrap"}}>
        <SectionHeading
          eyebrow="THE STACK · 03 PRODUCTS"
          title={<>One operating system <em style={{fontStyle:"italic", color:"var(--blue)"}}>for the entire medical pathway.</em></>}
          kicker="From your first UCAT/GAMSAT to internship and beyond. Each product is built to interoperate — the map informs the OS, the OS feeds the agent."
        />
        <div style={{display:"flex", gap:8}}>
          <span className="tag tag-blue"><span className="dot"/>BUILT IN AUSTRALIA</span>
        </div>
      </div>

      <div style={{display:"grid", gridTemplateColumns:"1fr", gap:24}}>
        <ProductRow
          index="01"
          name="Aus Med Pathway Map"
          tagline="An interactive cartography of Australian medicine."
          desc="Every entry point, every exam, every fork — UCAT, GAMSAT, MedView, USMLE-Step equivalents, AMC, internships, RACP, RACS. See the whole map before you commit to a road."
          status="THIS WEEK"
          price="FREE"
          color="var(--blue)"
          features={["UCAT + GAMSAT + Portfolio routes", "MD program comparison (Melb, Monash, USyd, UQ)", "AMC pathway for IMGs", "Specialty training trees"]}
          visual={<PathwayVisual/>}
        />
        <ProductRow
          index="02"
          name="Med Stack OS"
          tagline="A Notion-based command center for med school."
          desc="Pre-built dashboards for rotations, OSCE prep, Anki integration, reflection journals, and the case logs you actually need. Replaces ten half-broken systems with one designed by a med student."
          status="THIS WEEK"
          price="$19–29 AUD · free tier"
          color="var(--green)"
          features={["Rotation tracker + reflection log", "OSCE station bank (40+ presentations)", "Anki-linked spaced revision", "Cases, tutorials, pharm tables"]}
          visual={<OSVisual/>}
        />
        <ProductRow
          index="03"
          name="Med Stack Agent"
          tagline="A personalised AI study agent. Trained on the way medicine is actually examined."
          desc="Not a generic chatbot. The Agent learns your weaknesses, runs simulated OSCEs, drills SAQs against your year-level rubric, and quietly fills the gaps your syllabus left behind."
          status="2–4 WEEKS"
          price="Pricing soon"
          color="var(--green)"
          features={["Adaptive recall from your Anki history", "OSCE roleplay (patient + examiner)", "SAQ generator + auto-marking", "Differential diagnosis socratic drills"]}
          visual={<AgentVisual/>}
        />
      </div>
    </div>
  </section>
);

const ProductRow = ({index, name, tagline, desc, status, price, color, features, visual}) => (

  <div className="card" style={{
    padding:0,
    overflow:"hidden",
    display:"grid",
    gridTemplateColumns:"1fr 1.2fr",
  }}>
    {/* Left: copy */}
    <div style={{padding:"40px 44px", display:"flex", flexDirection:"column", borderRight:"1px solid var(--graphite-3)"}}>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20}}>
        <span className="mono" style={{fontSize:11, color:"var(--paper)", opacity:0.4, letterSpacing:"0.1em"}}>
          PRODUCT · {index}
        </span>
        <div style={{display:"flex", alignItems:"center", gap:8}}>
          {price && <span className="mono" style={{fontSize:10, opacity:0.55, letterSpacing:"0.08em", textTransform:"uppercase"}}>{price}</span>}
          <span className="tag" style={{
            color: status === "THIS WEEK" ? "var(--green)" : "var(--amber)",
            borderColor: status === "THIS WEEK" ? "var(--green-deep)" : "rgba(233,162,59,0.4)",
          }}>
            <span className="dot" style={{
              background: status === "THIS WEEK" ? "var(--green)" : "var(--amber)",
              boxShadow: `0 0 0 3px ${status === "THIS WEEK" ? "rgba(61,190,123,0.18)" : "rgba(233,162,59,0.18)"}`,
            }}/>
            SHIPS · {status}
          </span>
        </div>
      </div>
      <h3 className="serif" style={{
        fontSize:42, lineHeight:1, letterSpacing:"-0.02em",
        margin:0, color:"var(--paper)",
      }}>{name}</h3>
      <div style={{marginTop:8, fontSize:15, color, opacity:0.9, fontStyle:"italic"}} className="serif">
        {tagline}
      </div>
      <p style={{marginTop:18, fontSize:14, lineHeight:1.55, color:"var(--paper)", opacity:0.65, marginBottom:0}}>
        {desc}
      </p>

      <div style={{marginTop:24, display:"flex", flexDirection:"column", gap:8}}>
        {features.map((f,i)=>(
          <div key={i} style={{display:"flex", alignItems:"center", gap:10, fontSize:13, color:"var(--paper)", opacity:0.85}}>
            <span style={{width:14, height:14, borderRadius:3, background:`${color}22`, border:`1px solid ${color}66`, display:"grid", placeItems:"center"}}>
              <Icon name="check" size={9} color={color} strokeWidth={2}/>
            </span>
            {f}
          </div>
        ))}
      </div>

      <div style={{marginTop:"auto", paddingTop:32, display:"flex", gap:10}}>
        <a className="btn btn-ghost" href="#">
          {status === "THIS WEEK" ? "Notify me on launch" : "Join waitlist"}
          <Icon name="arrow" size={12}/>
        </a>
      </div>
    </div>

    {/* Right: visual */}
    <div style={{
      padding:36,
      background: `
        radial-gradient(600px 300px at 70% 30%, ${color}11, transparent 70%),
        var(--graphite-1)
      `,
      display:"flex", alignItems:"center", justifyContent:"center",
      position:"relative", minHeight:420,
      overflow:"hidden",
    }}>
      <GridBg opacity={0.3}/>
      <div style={{position:"relative", width:"100%"}}>
        {visual}
      </div>
    </div>
  </div>
);

// Pathway Map visual — full pathway with branches; draws on scroll-into-view
const PathwayVisual = () => {
  const wrapRef = React.useRef(null);
  const [draw, setDraw] = React.useState(0); // 0..1 of how much is drawn
  React.useEffect(() => {
    const onScroll = () => {
      if (!wrapRef.current) return;
      const r = wrapRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      // Start drawing when top of element enters bottom of viewport,
      // finish drawing when element is fully past the centre.
      const start = vh; // r.top === vh ⇒ progress 0
      const end = vh * 0.2; // r.top === 0.2*vh ⇒ progress 1
      const p = Math.max(0, Math.min(1, (start - r.top) / (start - end)));
      setDraw(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const dash = (len) => ({
    pathLength: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1 - draw,
  });
  return (
  <WindowChrome title="aus_med_pathway · interactive_map.tsx" accent="var(--blue)" footerText={`ZOOM 1.0 · ${Math.round(draw*47)}/47 NODES · 12 TRACKS`}>
    <div ref={wrapRef} style={{padding:24, background:"var(--graphite-1)", minHeight:340, position:"relative"}}>
      <svg viewBox="0 0 600 320" style={{width:"100%", height:320}}>
        {/* Year markers */}
        {[
          {x:40, l:"YR 11"}, {x:140, l:"GAP"}, {x:240, l:"UND-YR3"}, {x:340, l:"MD-YR1"}, {x:440, l:"INTERN"}, {x:540, l:"PGY+"}
        ].map((m,i)=>(
          <g key={i}>
            <line x1={m.x} y1="20" x2={m.x} y2="300" stroke="var(--graphite-3)" strokeWidth="0.5" strokeDasharray="2 4"/>
            <text x={m.x} y="14" fontSize="8" fontFamily="var(--font-mono)" fill="var(--paper)" opacity="0.4" textAnchor="middle" letterSpacing="1">{m.l}</text>
          </g>
        ))}

        {/* Track 1: UCAT undergrad */}
        <path d="M40,80 L140,80 L240,80 L340,160 L440,160 L540,160" stroke="var(--blue)" strokeWidth="1.5" fill="none" {...dash()}/>
        {/* Track 2: GAMSAT postgrad */}
        <path d="M40,200 L140,200 L240,260 L340,200 L440,200 L540,200" stroke="var(--green)" strokeWidth="1.5" fill="none" {...dash()}/>
        {/* Track 3: IMG / AMC */}
        <path d="M40,260 L140,260 L240,260 L340,260 L440,200 L540,200" stroke="var(--paper)" strokeWidth="1" fill="none" opacity={0.4 * draw} strokeDasharray="3 3"/>

        {/* Nodes */}
        {[
          {x:40, y:80, l:"UCAT", c:"var(--blue)", lit:true},
          {x:140, y:80, l:"Interview", c:"var(--blue)"},
          {x:240, y:80, l:"BSc Med", c:"var(--blue)"},
          {x:340, y:160, l:"MD Y1", c:"var(--paper)"},
          {x:440, y:160, l:"AMC", c:"var(--paper)"},
          {x:540, y:160, l:"Reg", c:"var(--green)"},

          {x:40, y:200, l:"BSc/BA", c:"var(--green)"},
          {x:140, y:200, l:"GAMSAT", c:"var(--green)", lit:true},
          {x:240, y:260, l:"Portfolio", c:"var(--green)"},
          {x:340, y:200, l:"MD", c:"var(--green)"},
          {x:440, y:200, l:"Intern", c:"var(--green)"},
          {x:540, y:200, l:"RACP/RACS", c:"var(--green)"},

          {x:40, y:260, l:"IMG entry", c:"var(--paper)"},
        ].map((n,i,arr)=>{
          // Node lights up based on its x-position relative to draw progress
          const xProgress = (n.x - 40) / 500;
          const nodeLit = draw > xProgress;
          return (
          <g key={i} opacity={nodeLit ? 1 : 0.15} style={{transition:"opacity 200ms"}}>
            {n.lit && nodeLit && <circle cx={n.x} cy={n.y} r="11" fill={n.c} opacity="0.18">
              <animate attributeName="r" values="9;14;9" dur="2.4s" repeatCount="indefinite"/>
            </circle>}
            <circle cx={n.x} cy={n.y} r="4" fill="var(--graphite-1)" stroke={n.c} strokeWidth="1.5"/>
            {n.lit && <circle cx={n.x} cy={n.y} r="2" fill={n.c}/>}
            <text x={n.x} y={n.y - 10} fontSize="8" fontFamily="var(--font-mono)" fill="var(--paper)" opacity="0.85" textAnchor="middle">{n.l}</text>
          </g>
          );
        })}

        {/* Track labels */}
        <text x="560" y="80" fontSize="9" fontFamily="var(--font-sans)" fill="var(--blue)" textAnchor="end">Undergrad MD</text>
        <text x="560" y="240" fontSize="9" fontFamily="var(--font-sans)" fill="var(--green)" textAnchor="end">Postgrad MD</text>
        <text x="560" y="288" fontSize="9" fontFamily="var(--font-sans)" fill="var(--paper)" opacity="0.5" textAnchor="end">IMG / AMC route</text>
      </svg>
    </div>
  </WindowChrome>
  );
};

const OSVisual = () => (
  <WindowChrome title="med-stack-os · workspace" accent="var(--green)" footerText="NOTION TEMPLATE · 14 PAGES">
    <div style={{padding:0, background:"var(--graphite-1)", minHeight:340, display:"grid", gridTemplateColumns:"180px 1fr"}}>
      {/* Sidebar */}
      <div style={{borderRight:"1px solid var(--graphite-3)", padding:"16px 12px"}}>
        <div className="rx-label" style={{marginBottom:10}}>WORKSPACE</div>
        {[
          {l:"Dashboard", c:"var(--green)", a:true, ic:"node"},
          {l:"Rotations", ic:"layers"},
          {l:"OSCE Bank", ic:"book"},
          {l:"Anki Sync", ic:"cpu"},
          {l:"Reflections", ic:"pill"},
          {l:"Cases", ic:"plus"},
          {l:"Pharm Tables", ic:"map"},
        ].map((it,i)=>(
          <div key={i} style={{
            display:"flex", alignItems:"center", gap:10,
            padding:"7px 10px", marginBottom:2,
            borderRadius:6,
            background: it.a ? "var(--graphite-3)" : "transparent",
            color: it.a ? "var(--paper)" : "rgba(244,241,234,0.55)",
            fontSize:12,
          }}>
            <Icon name={it.ic} size={12} color={it.a ? "var(--green)" : "currentColor"}/>
            {it.l}
          </div>
        ))}
      </div>
      {/* Main */}
      <div style={{padding:"20px 22px"}}>
        <div className="rx-label" style={{marginBottom:6}}>WK 03 · ROTATION · GP</div>
        <div className="serif" style={{fontSize:24, color:"var(--paper)", marginBottom:14, letterSpacing:"-0.01em"}}>Tuesday — clinic 09:00</div>

        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:14}}>
          {[
            {l:"PATIENTS SEEN", v:"7", c:"var(--green)"},
            {l:"PRESENTATIONS NEW", v:"3", c:"var(--blue)"},
          ].map((it,i)=>(
            <div key={i} style={{padding:"10px 12px", border:"1px solid var(--graphite-3)", borderRadius:8}}>
              <div className="rx-label" style={{fontSize:9}}>{it.l}</div>
              <div className="serif" style={{fontSize:22, color:it.c, marginTop:2}}>{it.v}</div>
            </div>
          ))}
        </div>

        <div className="rx-label" style={{marginBottom:8, fontSize:9}}>CASE LOG</div>
        <div style={{display:"flex", flexDirection:"column", gap:6}}>
          {[
            {age:"68F", c:"T2DM, HTN", t:"GP, repeat"},
            {age:"23M", c:"Acute MSK shoulder", t:"NEW"},
            {age:"4F", c:"URTI vs OM", t:"Paeds"},
          ].map((it,i)=>(
            <div key={i} style={{
              display:"grid", gridTemplateColumns:"40px 1fr auto", gap:10, alignItems:"center",
              padding:"8px 10px", border:"1px solid var(--graphite-3)", borderRadius:6,
              fontSize:11,
            }}>
              <span className="mono" style={{color:"var(--paper)", opacity:0.6}}>{it.age}</span>
              <span style={{color:"var(--paper)"}}>{it.c}</span>
              <span className="mono" style={{fontSize:9, opacity:0.5, letterSpacing:"0.08em"}}>{it.t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </WindowChrome>
);

const AgentVisual = () => {
  const messages = [
    {who:"agent", txt:"Reviewing your last 7 days. Three weak spots: β-blocker contraindications, MI ECG localisation, RBC indices."},
    {who:"agent", txt:"Want to start with a 4-question SAQ on β-blockers? Marked against your year-3 USyd rubric."},
    {who:"you", txt:"Yes. Make Q1 about asthma + β-blockers."},
    {who:"agent", txt:"Q1 / 4 · A 27F with mild persistent asthma is started on propranolol for migraine prophylaxis. She presents with worsening wheeze. Outline the mechanism (3 marks)…"},
  ];
  return (
    <WindowChrome title="med-stack-agent · session_182.md" accent="var(--green)" footerText="STETHOS · GPT-CLINICAL · TURN 4">
      <div style={{padding:"20px 22px", background:"var(--graphite-1)", minHeight:340}}>
        {/* Header */}
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", paddingBottom:14, borderBottom:"1px solid var(--graphite-3)", marginBottom:14}}>
          <div style={{display:"flex", alignItems:"center", gap:10}}>
            <div style={{
              width:32, height:32, borderRadius:8,
              background:"var(--graphite-3)", border:"1px solid var(--graphite-4)",
              display:"grid", placeItems:"center", color:"var(--green)",
            }}>
              <Icon name="cpu" size={16}/>
            </div>
            <div>
              <div style={{fontSize:13, color:"var(--paper)"}}>Stethos · your agent</div>
              <div className="mono" style={{fontSize:10, opacity:0.5, letterSpacing:"0.08em"}}>YR3 · USYD · ROTATION GP</div>
            </div>
          </div>
          <div className="tag"><span className="dot"/>LIVE</div>
        </div>

        {/* Messages */}
        <div style={{display:"flex", flexDirection:"column", gap:10}}>
          {messages.map((m,i)=>(
            <div key={i} style={{
              display:"flex", justifyContent: m.who === "you" ? "flex-end" : "flex-start",
            }}>
              <div style={{
                maxWidth:"85%",
                padding:"10px 12px",
                borderRadius: m.who === "you" ? "10px 10px 2px 10px" : "10px 10px 10px 2px",
                background: m.who === "you" ? "var(--blue)" : "var(--graphite-2)",
                color: m.who === "you" ? "#fff" : "var(--paper)",
                border: m.who === "you" ? "none" : "1px solid var(--graphite-3)",
                fontSize:12, lineHeight:1.45,
              }}>
                {m.txt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </WindowChrome>
  );
};

Object.assign(window, { Products });
