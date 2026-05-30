// Top nav + hero
const Nav = () => (
  <header style={{
    position:"sticky", top:0, zIndex:50,
    backdropFilter:"blur(12px)",
    background:"rgba(14,16,19,0.7)",
    borderBottom:"1px solid var(--graphite-3)",
  }}>
    <div className="container" style={{
      display:"flex", alignItems:"center", justifyContent:"space-between",
      height:64,
    }}>
      <Wordmark/>
      <nav style={{display:"flex", alignItems:"center", gap:28}}>
        {[
          ["Pathway", "#pathway"],
          ["Stack OS", "#products"],
          ["Agent", "#agent"],
          ["Manifesto", "#why"],
        ].map(([label, href]) => (
          <a key={label} href={href} style={{
            fontSize:13, color:"var(--paper)", opacity:0.7,
          }}>{label}</a>
        ))}
        <span className="hr" style={{width:1, height:20, background:"var(--graphite-4)"}}/>
        <a href="#capture" className="btn btn-ghost" style={{padding:"8px 14px"}}>
          Free prompts <Icon name="arrow" size={12}/>
        </a>
      </nav>
    </div>
  </header>
);

const HeroDashboard = () => {
  // The right-side product visual: a stacked dashboard preview
  return (
    <div style={{position:"relative"}}>
      {/* Main panel */}
      <WindowChrome title="med-stack-os / patient · case_load.tsx" accent="var(--green)" footerText="MED-STACK OS · v0.4.2">
        <div style={{position:"relative", padding:0, background:"var(--graphite-1)"}}>
          {/* Top vitals bar */}
          <div style={{
            display:"grid", gridTemplateColumns:"repeat(4,1fr)",
            borderBottom:"1px solid var(--graphite-3)",
          }}>
            {[
              {l:"STREAK", v:"42", u:"days", c:"var(--green)"},
              {l:"ANKI DUE", v:"127", u:"cards", c:"var(--blue)"},
              {l:"ROTATION", v:"GP", u:"wk 3 / 6", c:"var(--paper)"},
              {l:"MASTERY", v:"78", u:"%", c:"var(--green)"},
            ].map((it, i) => (
              <div key={i} style={{
                padding:"14px 16px",
                borderRight: i < 3 ? "1px solid var(--graphite-3)" : "none",
              }}>
                <Vital label={it.l} value={it.v} unit={it.u} accent={it.c}/>
              </div>
            ))}
          </div>

          {/* Body grid */}
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:300}}>
            {/* Left: today's plan */}
            <div style={{padding:"18px 16px", borderRight:"1px solid var(--graphite-3)"}}>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14}}>
                <span className="rx-label">TODAY · 26 APR</span>
                <span className="tag tag-blue"><span className="dot"/>FOCUS</span>
              </div>
              <div style={{display:"flex", flexDirection:"column", gap:8}}>
                {[
                  {t:"Cardio block · MI pathophysiology", d:"45m · Anki + agent recall", done:true, c:"var(--green)"},
                  {t:"OSCE: chest pain station", d:"30m · simulated patient", done:true, c:"var(--green)"},
                  {t:"Pharm — beta blockers SAQ", d:"20m · spaced", done:false, c:"var(--blue)"},
                  {t:"Reflection: ward round insight", d:"5m · journaling", done:false, c:"var(--graphite-5)"},
                ].map((it,i)=>(
                  <div key={i} style={{
                    display:"flex", alignItems:"center", gap:10,
                    padding:"10px 12px",
                    background:"var(--graphite-2)",
                    border:"1px solid var(--graphite-3)",
                    borderRadius:8,
                    opacity: it.done ? 0.55 : 1,
                  }}>
                    <span style={{
                      width:14, height:14, borderRadius:4,
                      background: it.done ? it.c : "transparent",
                      border: `1.5px solid ${it.c}`,
                      display:"grid", placeItems:"center", flexShrink:0,
                    }}>
                      {it.done && <Icon name="check" size={10} color="var(--graphite-1)" strokeWidth={2.4}/>}
                    </span>
                    <div style={{flex:1, minWidth:0}}>
                      <div style={{fontSize:12, color:"var(--paper)", textDecoration: it.done?"line-through":"none"}}>{it.t}</div>
                      <div className="mono" style={{fontSize:10, color:"var(--paper)", opacity:0.5, marginTop:2}}>{it.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: knowledge graph */}
            <div style={{padding:"18px 16px", position:"relative", overflow:"hidden"}}>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14}}>
                <span className="rx-label">KNOWLEDGE MAP · CARDIOLOGY</span>
                <span className="mono" style={{fontSize:10, opacity:0.5}}>17 NODES</span>
              </div>
              <KnowledgeGraph/>
            </div>
          </div>

          {/* Bottom: agent chat strip */}
          <div style={{
            borderTop:"1px solid var(--graphite-3)",
            padding:"14px 16px",
            display:"flex", alignItems:"center", gap:12,
            background:"var(--graphite-2)",
          }}>
            <div style={{
              width:28, height:28, borderRadius:8,
              background:"var(--graphite-3)",
              border:"1px solid var(--graphite-4)",
              display:"grid", placeItems:"center",
              color:"var(--green)",
            }}>
              <Icon name="cpu" size={14}/>
            </div>
            <div style={{flex:1}}>
              <div className="mono" style={{fontSize:10, opacity:0.5, marginBottom:2}}>AGENT · STETHOS</div>
              <div style={{fontSize:12, color:"var(--paper)"}}>
                You missed 3 cards on β-blocker contraindications. Want a 6-question SAQ now?
              </div>
            </div>
            <div className="tag" style={{color:"var(--green)"}}>
              <span className="dot"/> READY
            </div>
          </div>
        </div>
      </WindowChrome>

      {/* Floating callout: pathway map mini */}
      <div className="hero-floating-callout" style={{
        position:"absolute", left:-32, bottom:-40,
        width:260,
        animation:"fadeUp 700ms 200ms ease both",
      }}>
        <WindowChrome title="aus_pathway.map" accent="var(--blue)">
          <div style={{padding:"12px 14px", background:"var(--graphite-1)"}}>
            <div className="rx-label" style={{marginBottom:10}}>YR 3 → INTERN</div>
            <PathwayMini/>
          </div>
        </WindowChrome>
      </div>

      {/* Floating callout: prompt card */}
      <div className="hero-floating-callout" style={{
        position:"absolute", right:-24, top:80,
        width:240,
        animation:"fadeUp 700ms 400ms ease both",
      }}>
        <div className="card-paper" style={{padding:14}}>
          <div style={{display:"flex", alignItems:"center", gap:6, marginBottom:8}}>
            <Icon name="spark" size={12} color="var(--graphite-1)"/>
            <span className="mono" style={{fontSize:10, letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--graphite-1)", opacity:0.6}}>PROMPT 07 / 25</span>
          </div>
          <div style={{fontSize:13, lineHeight:1.4, color:"var(--graphite-1)"}}>
            "Act as my consultant. Quiz me on differentials for acute chest pain in a 54M smoker. Use socratic method."
          </div>
          <div style={{marginTop:10, paddingTop:10, borderTop:"1px dashed var(--paper-3)", display:"flex", justifyContent:"space-between"}}>
            <span className="mono" style={{fontSize:10, color:"var(--graphite-1)", opacity:0.5}}>CLINICAL · OSCE</span>
            <span className="mono" style={{fontSize:10, color:"var(--green-deep)"}}>+ COPY</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const KnowledgeGraph = () => {
  // Force-graph style static layout
  const nodes = [
    {id:"MI", x:50, y:50, r:14, c:"var(--green)", lbl:"MI", lit:true},
    {id:"chest", x:22, y:25, r:7, c:"var(--paper)", lbl:"Chest pain"},
    {id:"trop", x:78, y:22, r:8, c:"var(--blue)", lbl:"Troponin"},
    {id:"stemi", x:80, y:62, r:9, c:"var(--green)", lbl:"STEMI"},
    {id:"nstemi", x:62, y:80, r:7, c:"var(--paper)", lbl:"NSTEMI"},
    {id:"angina", x:18, y:65, r:7, c:"var(--paper)", lbl:"Angina"},
    {id:"ecg", x:38, y:18, r:6, c:"var(--blue)", lbl:"ECG"},
    {id:"thromb", x:30, y:88, r:6, c:"var(--paper)", lbl:"Thrombolysis"},
  ];
  const edges = [
    ["MI","chest"],["MI","trop"],["MI","stemi"],["MI","nstemi"],["MI","angina"],["chest","ecg"],["stemi","thromb"],["MI","ecg"],["trop","stemi"],["nstemi","angina"]
  ];
  const find = id => nodes.find(n=>n.id===id);
  return (
    <svg viewBox="0 0 100 100" style={{width:"100%", height:230}}>
      {edges.map(([a,b],i)=>{
        const A=find(a), B=find(b);
        return <line key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y} stroke="var(--graphite-4)" strokeWidth="0.3"/>
      })}
      {nodes.map((n,i)=>(
        <g key={i}>
          {n.lit && <circle cx={n.x} cy={n.y} r={n.r/3.5} fill={n.c} opacity="0.18"/>}
          <circle cx={n.x} cy={n.y} r={n.r/8} fill={n.c}/>
          <circle cx={n.x} cy={n.y} r={n.r/8 + 0.6} fill="none" stroke={n.c} strokeWidth="0.2" opacity="0.5"/>
          <text x={n.x + n.r/6 + 1.2} y={n.y + 0.6} fontSize="2.2" fontFamily="var(--font-mono)" fill="var(--paper)" opacity="0.8">{n.lbl}</text>
        </g>
      ))}
    </svg>
  );
};

const PathwayMini = () => {
  const stages = [
    {l:"YR 3", c:"var(--green)", done:true},
    {l:"YR 4", c:"var(--green)", done:true},
    {l:"AMC", c:"var(--blue)", current:true},
    {l:"MD", c:"var(--graphite-5)"},
    {l:"PGY1", c:"var(--graphite-5)"},
  ];
  return (
    <div style={{display:"flex", alignItems:"center", gap:0}}>
      {stages.map((s, i) => (
        <React.Fragment key={i}>
          <div style={{display:"flex", flexDirection:"column", alignItems:"center", flex:1}}>
            <div style={{
              width:18, height:18, borderRadius:999,
              border:`1.5px solid ${s.c}`,
              background: s.done ? s.c : (s.current ? `${s.c}33` : "transparent"),
              boxShadow: s.current ? `0 0 0 4px ${s.c}22` : "none",
              display:"grid", placeItems:"center",
            }}>
              {s.done && <Icon name="check" size={9} color="var(--graphite-1)" strokeWidth={2.4}/>}
              {s.current && <div style={{width:6, height:6, borderRadius:999, background:s.c, animation:"pulseDot 1.6s ease-in-out infinite"}}/>}
            </div>
            <div className="mono" style={{
              fontSize:9, marginTop:6, color:"var(--paper)", opacity: s.done||s.current ? 1 : 0.4,
              letterSpacing:"0.06em",
            }}>{s.l}</div>
          </div>
          {i < stages.length-1 && (
            <div style={{
              flex:0.5, height:1.5,
              background: stages[i+1].done ? "var(--green)" : (stages[i+1].current ? `linear-gradient(90deg, ${s.c}, ${stages[i+1].c})` : "var(--graphite-4)"),
              marginTop:-22,
            }}/>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const Hero = () => (
  <section style={{paddingTop:64, paddingBottom:160, position:"relative", overflow:"hidden"}}>
    <GridBg opacity={0.25}/>
    <div className="container" style={{position:"relative"}}>
      <div style={{
        display:"grid",
        gridTemplateColumns:"minmax(420px, 1fr) minmax(520px, 1.15fr)",
        gap:80, alignItems:"center",
      }}>
        {/* Left: copy */}
        <div>
          <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:28}}>
            <span className="tag"><span className="dot"/>BUILT IN AUSTRALIA · DAY 001</span>
            <span className="rx-label">v0.1 · LAUNCH</span>
          </div>

          <h1 className="serif" style={{
            fontSize:"clamp(48px, 7vw, 92px)",
            lineHeight:0.98,
            margin:0,
            letterSpacing:"-0.025em",
            color:"var(--paper)",
          }}>
            Tools, systems,<br/>
            and AI agents <em style={{fontStyle:"italic", color:"var(--green)"}}>for future doctors.</em>
          </h1>

          <p style={{
            marginTop:28, marginBottom:0,
            fontSize:18, lineHeight:1.55,
            color:"var(--paper)", opacity:0.72,
            maxWidth:520,
          }}>
            Australian med pathways, AI study workflows, and digital systems built for medical students. Built in Australia, by a med student mid-rotations — in public.
          </p>

          <div style={{display:"flex", gap:12, marginTop:36, flexWrap:"wrap"}}>
            <a href="#capture" className="btn btn-primary">
              Get the free prompt pack <Icon name="arrow" size={12} color="var(--graphite-1)"/>
            </a>
            <a href="#products" className="btn btn-ghost">
              See the stack
            </a>
          </div>

          {/* Trust strip */}
          <div className="trust-strip" style={{
            display:"flex", gap:32, marginTop:48, paddingTop:24,
            borderTop:"1px solid var(--graphite-3)",
            flexWrap:"wrap",
          }}>
            {[
              {n:"FREE", l:"to launch · no paywall"},
              {n:"UCAT · GAMSAT · AMC", l:"pathway-mapped"},
              {n:"100%", l:"built inside medicine"},
            ].map((s,i)=>(
              <div key={i}>
                <div className="serif" style={{fontSize:24, color:"var(--paper)"}}>{s.n}</div>
                <div className="mono" style={{fontSize:10, opacity:0.5, letterSpacing:"0.1em", textTransform:"uppercase", marginTop:2}}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: dashboard */}
        <div style={{position:"relative"}}>
          <HeroDashboard/>
        </div>
      </div>
    </div>

    {/* ECG below */}
    <div style={{marginTop:120, opacity:0.6}}>
      <EcgLine height={60} stroke="var(--green)" speed={9}/>
    </div>
  </section>
);

Object.assign(window, { Nav, Hero });
