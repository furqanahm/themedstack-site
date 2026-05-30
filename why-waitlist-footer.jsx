// "Why this exists" + Coming soon waitlist + Footer/disclaimer
const Why = () => (
  <section id="why" style={{position:"relative", paddingTop:120, paddingBottom:120}}>
    <div className="container">
      <div style={{display:"grid", gridTemplateColumns:"0.8fr 1.2fr", gap:80, alignItems:"start"}}>
        <div style={{position:"sticky", top:120}}>
          <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:24}}>
            <span className="rx-label">RX · MANIFESTO</span>
          </div>
          <h2 className="serif" style={{
            fontSize:"clamp(40px, 5vw, 72px)",
            lineHeight:1, letterSpacing:"-0.025em",
            margin:0, color:"var(--paper)",
          }}>
            Medicine is <em style={{fontStyle:"italic", color:"var(--green)"}}>gatekept</em><br/>
            on purpose.<br/>
            <em style={{fontStyle:"italic", color:"var(--blue)"}}>We're not.</em>
          </h2>
          <p style={{marginTop:24, fontSize:16, lineHeight:1.6, color:"var(--paper)", opacity:0.7, maxWidth:420}}>
            We're not here to replace your medical education. We're here to make it readable. The Med Stack exists because no one inside the system gets a map — they get a stack of PDFs and an old senior's word.
          </p>

          <div style={{
            marginTop:36, padding:20,
            border:"1px solid var(--graphite-3)",
            borderRadius:14,
            background:"var(--graphite-2)",
          }}>
            <div className="mono" style={{fontSize:10, opacity:0.5, letterSpacing:"0.1em", marginBottom:8}}>
              — CURTIS LANGLOTZ · STANFORD RADIOLOGY
            </div>
            <div className="serif" style={{fontSize:19, color:"var(--paper)", lineHeight:1.35, fontStyle:"italic"}}>
              "AI won't replace doctors. But doctors who use AI <span style={{fontStyle:"normal", color:"var(--green)"}}>will</span> replace doctors who don't."
            </div>
          </div>
        </div>

        <div style={{display:"flex", flexDirection:"column", gap:16}}>
          {[
            {
              n:"01", c:"var(--red)",
              before:"GATEKEPT",
              afterLabel:"OPEN",
              afterColor:"var(--green)",
              title:"The pathway is buried.",
              body:"Information about UCAT scores, MedView interview, AMC, RACP, USMLE-equivalents lives in 4-year-old forum threads. Our pathway map gathers it into one source of truth — annotated, dated, and Australian-first.",
            },
            {
              n:"02", c:"var(--red)",
              before:"CONFUSING",
              afterLabel:"CLEAR",
              afterColor:"var(--green)",
              title:"The systems are fragmented.",
              body:"Anki here. OneNote there. A WhatsApp group of seniors. PDFs on a Google Drive someone's cousin set up in 2021. Med Stack OS replaces that mess with one operating system, designed by a student in the trenches.",
            },
            {
              n:"03", c:"var(--red)",
              before:"OUTDATED",
              afterLabel:"AI-NATIVE",
              afterColor:"var(--blue)",
              title:"Study workflows are pre-AI.",
              body:"Most med study advice still pretends LLMs don't exist. We treat AI as a study partner — for OSCE simulation, SAQ generation, differentials drilling — without ever pretending it's a clinician. Education first. Always.",
            },
          ].map((it,i)=>(
            <div key={i} className="card" style={{padding:32}}>
              <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:18}}>
                <span className="serif" style={{fontSize:36, color:"var(--paper)", opacity:0.3, lineHeight:1}}>{it.n}</span>
                <div style={{display:"flex", alignItems:"center", gap:8}}>
                  <span className="mono" style={{
                    fontSize:10, padding:"4px 8px",
                    background:"rgba(217,72,74,0.1)", color:"var(--red)",
                    borderRadius:4, letterSpacing:"0.1em",
                    textDecoration:"line-through",
                    textDecorationColor:"var(--red)",
                  }}>{it.before}</span>
                  <Icon name="arrow" size={12} color="var(--paper)"/>
                  <span className="mono" style={{
                    fontSize:10, padding:"4px 8px",
                    background:`${it.afterColor}1a`, color:it.afterColor,
                    borderRadius:4, letterSpacing:"0.1em",
                  }}>{it.afterLabel}</span>
                </div>
              </div>
              <h3 className="serif" style={{
                fontSize:28, letterSpacing:"-0.015em", lineHeight:1.1,
                margin:0, color:"var(--paper)",
              }}>{it.title}</h3>
              <p style={{
                marginTop:12, fontSize:14, lineHeight:1.6,
                color:"var(--paper)", opacity:0.65, marginBottom:0,
              }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Waitlist = () => {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("email_address", email);
      await fetch("https://app.kit.com/forms/9373212/subscriptions", { method: "POST", body: fd, mode: "no-cors" });
    } catch {}
    setSubmitting(false);
    setDone(true);
  };
  return (
    <section id="agent" style={{position:"relative", paddingTop:80, paddingBottom:120}}>
      <div className="container">
        <div style={{
          position:"relative", overflow:"hidden",
          borderRadius:22,
          border:"1px solid var(--graphite-3)",
          background: `
            radial-gradient(800px 400px at 80% 20%, rgba(61,123,255,0.15), transparent 60%),
            radial-gradient(800px 400px at 20% 80%, rgba(61,190,123,0.1), transparent 60%),
            var(--graphite-2)
          `,
          padding:"72px 64px",
        }}>
          <GridBg opacity={0.3}/>
          <div style={{position:"relative", display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:64, alignItems:"center"}}>
            <div>
              <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:24}}>
                <span className="tag tag-amber"><span className="dot"/>2–4 WEEKS OUT</span>
                <span className="rx-label">RX · WAITLIST</span>
              </div>
              <h2 className="serif" style={{
                fontSize:"clamp(40px, 5.5vw, 72px)",
                lineHeight:1, letterSpacing:"-0.025em",
                margin:0, color:"var(--paper)",
              }}>
                A personal AI study<br/>
                agent — <em style={{fontStyle:"italic", color:"var(--blue)"}}>coming soon.</em>
              </h2>
              <p style={{marginTop:20, fontSize:16, color:"var(--paper)", opacity:0.7, maxWidth:520}}>
                Med Stack Agent is in development. Drop your email + uni + year, and you'll be first to get access when alpha opens. No spam, no fluff.
              </p>

              <form onSubmit={onSubmit} style={{marginTop:28}}>
                {!done ? (
                  <div style={{display:"flex", gap:10, flexWrap:"wrap", maxWidth:480}}>
                    <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@medschool.edu.au" type="email" required style={{flex:"1 1 240px"}}/>
                    <button className="btn btn-primary" type="submit" disabled={submitting}>
                      {submitting ? "Reserving…" : "Reserve a seat"} {!submitting && <Icon name="arrow" size={12} color="var(--graphite-1)"/>}
                    </button>
                  </div>
                ) : (
                  <div style={{display:"flex", alignItems:"center", gap:12, padding:"14px 16px", background:"rgba(61,123,255,0.1)", border:"1px solid var(--blue-deep)", borderRadius:8, maxWidth:480}}>
                    <Icon name="check" size={16} color="var(--blue)" strokeWidth={2}/>
                    <div>
                      <div style={{fontSize:14, color:"var(--paper)"}}>You're on the list.</div>
                      <div className="mono" style={{fontSize:11, opacity:0.5}}>WE'LL EMAIL WHEN ALPHA OPENS</div>
                    </div>
                  </div>
                )}
              </form>

              <div style={{marginTop:28, display:"flex", gap:24, flexWrap:"wrap"}}>
                {[
                  {n:"FREE", l:"to launch"},
                  {n:"AU-FIRST", l:"curriculum aligned"},
                  {n:"BUILD-LOG", l:"public progress"},
                ].map((s,i)=>(
                  <div key={i}>
                    <div className="serif" style={{fontSize:24, color:"var(--paper)"}}>{s.n}</div>
                    <div className="mono" style={{fontSize:10, opacity:0.5, letterSpacing:"0.1em", textTransform:"uppercase", marginTop:2}}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: phased timeline */}
            <div>
              <div className="rx-label" style={{marginBottom:14}}>SHIP SCHEDULE</div>
              <div style={{display:"flex", flexDirection:"column", gap:10}}>
                {[
                  {q:"THIS WEEK", t:"Aus Med Pathway Map · free", state:"current"},
                  {q:"THIS WEEK", t:"Med Stack OS · Notion templates", state:"current"},
                  {q:"2–4 WEEKS", t:"Med Stack Agent · alpha", state:"queued"},
                  {q:"LATER", t:"OSCE Jarvis · specialty maps", state:"queued"},
                ].map((it,i)=>{
                  const c = it.state==="done"?"var(--green)":it.state==="current"?"var(--blue)":"var(--graphite-5)";
                  return (
                    <div key={i} style={{
                      display:"grid", gridTemplateColumns:"86px 1fr auto", gap:14, alignItems:"center",
                      padding:"14px 16px",
                      background: it.state==="current"?"var(--graphite-1)":"transparent",
                      border:`1px solid ${it.state==="current"?"var(--blue-deep)":"var(--graphite-3)"}`,
                      borderRadius:10,
                    }}>
                      <span className="mono" style={{fontSize:11, color:c, letterSpacing:"0.06em"}}>{it.q}</span>
                      <span style={{fontSize:13, color:"var(--paper)"}}>{it.t}</span>
                      <span style={{
                        width:10, height:10, borderRadius:999,
                        background: it.state==="queued" ? "transparent" : c,
                        border:`1.5px solid ${c}`,
                        animation: it.state==="current" ? "pulseDot 1.6s ease-in-out infinite" : "none",
                      }}/>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={{
    borderTop:"1px solid var(--graphite-3)",
    paddingTop:64, paddingBottom:32,
    background:"var(--graphite-1)",
  }}>
    <div className="container">
      <div style={{display:"grid", gridTemplateColumns:"1.4fr 1fr 1fr 1fr", gap:48, marginBottom:64}}>
        <div>
          <Wordmark/>
          <p style={{marginTop:16, fontSize:13, lineHeight:1.55, color:"var(--paper)", opacity:0.55, maxWidth:300}}>
            Tools, systems, and AI agents for future doctors. Built inside Australian medicine.
          </p>
          <div style={{marginTop:20, display:"flex", gap:8}}>
            <span className="tag"><span className="dot"/>AUSTRALIA</span>
            <span className="tag tag-blue"><span className="dot"/>BUILT 2026</span>
          </div>
        </div>

        {[
          {h:"PRODUCTS", l:["Aus Med Pathway Map","Med Stack OS","Med Stack Agent","25 AI Prompts (free)"]},
          {h:"RESOURCES", l:["Manifesto","Founder note","Changelog","On the record"]},
          {h:"COMPANY", l:["Contact","Press","Privacy","Terms"]},
        ].map((col,i)=>(
          <div key={i}>
            <div className="rx-label" style={{marginBottom:14}}>{col.h}</div>
            <div style={{display:"flex", flexDirection:"column", gap:10}}>
              {col.l.map((l,j)=>(
                <a key={j} href="#" style={{fontSize:13, color:"var(--paper)", opacity:0.7}}>{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div style={{
        padding:"24px 28px",
        border:"1px solid var(--graphite-3)",
        borderLeft:"3px solid var(--amber)",
        borderRadius:8,
        background:"var(--graphite-2)",
        marginBottom:32,
      }}>
        <div style={{display:"flex", gap:16, alignItems:"flex-start"}}>
          <div style={{
            width:32, height:32, borderRadius:6, flexShrink:0,
            background:"rgba(233,162,59,0.12)", color:"var(--amber)",
            display:"grid", placeItems:"center",
          }}>
            <Icon name="cross" size={14} color="var(--amber)" strokeWidth={1.4}/>
          </div>
          <div>
            <div className="rx-label" style={{color:"var(--amber)", marginBottom:6}}>DISCLAIMER · STUDENT EDUCATION ONLY</div>
            <p style={{margin:0, fontSize:13, lineHeight:1.6, color:"var(--paper)", opacity:0.75, maxWidth:820}}>
              The Med Stack is an educational resource for medical and pre-medical students. It is <strong>not medical advice</strong>, not a substitute for professional clinical judgement, and not intended for patient care. AI outputs are unverified — always cross-reference against your institution's curriculum and supervising clinicians. If you are unwell, contact a registered healthcare provider or, in Australia, call <span className="mono">000</span>.
            </p>
          </div>
        </div>
      </div>

      <div className="hr" style={{marginBottom:24}}/>

      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12}}>
        <div className="mono" style={{fontSize:11, opacity:0.5, letterSpacing:"0.06em"}}>
          © 2026 THE MED STACK · AUSTRALIA · ALL TRADEMARKS BELONG TO THEIR OWNERS
        </div>
        <div className="mono" style={{fontSize:11, opacity:0.5, letterSpacing:"0.06em"}}>
          v0.1 · BUILT IN AUSTRALIA · STATUS · <span style={{color:"var(--green)"}}>● SHIPPING</span>
        </div>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Why, Waitlist, Footer });
