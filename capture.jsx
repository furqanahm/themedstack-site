// Email capture for "25 AI Prompts for Med Students"
// CONVERTKIT INTEGRATION:
//   1. Sign up at kit.com (free up to 10k subs)
//   2. Create a form, attach the 25-prompts PDF as the "incentive"
//   3. Find your form ID in the form's URL: app.kit.com/forms/<FORM_ID>/...
//   4. Replace FORM_ID below. Done. The form will POST directly to ConvertKit
//      and they'll auto-email the PDF.
const CONVERTKIT_FORM_ID = "9373212"; // The Med Stack · 25 AI Prompts
const CONVERTKIT_ACTION = `https://app.kit.com/forms/${CONVERTKIT_FORM_ID}/subscriptions`;

const EmailCapture = () => {
  const [email, setEmail] = React.useState("");
  const [state, setState] = React.useState("idle"); // idle | submitting | done
  const live = CONVERTKIT_FORM_ID && CONVERTKIT_FORM_ID !== "YOUR_FORM_ID";

  const submit = (e) => {
    if (live) return; // let the real form submit
    e.preventDefault();
    if (!email.includes("@")) return;
    setState("submitting");
    setTimeout(()=>setState("done"), 800);
  };

  return (
    <section id="capture" style={{paddingTop:80, paddingBottom:80, position:"relative"}}>
      <div className="container">
        <div style={{
          background: "linear-gradient(180deg, var(--graphite-2), var(--graphite-1))",
          border:"1px solid var(--graphite-3)",
          borderRadius:22,
          padding:0,
          overflow:"hidden",
          position:"relative",
        }}>
          <div style={{
            display:"grid",
            gridTemplateColumns:"1.1fr 1fr",
            minHeight:380,
          }}>
            {/* Left: copy + form */}
            <div style={{padding:"56px 56px", display:"flex", flexDirection:"column", justifyContent:"space-between", borderRight:"1px solid var(--graphite-3)"}}>
              <div>
                <div style={{display:"flex", alignItems:"center", gap:10, marginBottom:24}}>
                  <span className="tag"><span className="dot"/>FREE · NO SPAM</span>
                  <span className="rx-label">PRESCRIPTION 001</span>
                </div>
                <h2 className="serif" style={{
                  fontSize:"clamp(32px, 4vw, 52px)",
                  lineHeight:1.02, letterSpacing:"-0.02em",
                  margin:0, color:"var(--paper)",
                }}>
                  Get <em style={{fontStyle:"italic", color:"var(--green)"}}>25 AI Prompts</em><br/>
                  for med students.
                </h2>
                <p style={{marginTop:16, fontSize:15, color:"var(--paper)", opacity:0.65, maxWidth:440}}>
                  Battle-tested prompts for OSCEs, SAQs, differentials, ward presentations, and exam revision. Drop your email — straight to your inbox.
                </p>
              </div>

              <form onSubmit={submit} action={live ? CONVERTKIT_ACTION : undefined} method={live ? "post" : undefined} style={{marginTop:32}}>
                {state !== "done" ? (
                  <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
                    <input
                      type="email"
                      name="email_address"
                      placeholder="you@medschool.edu.au"
                      value={email}
                      onChange={e=>setEmail(e.target.value)}
                      style={{flex:"1 1 280px"}}
                      required
                    />
                    <button type="submit" className="btn btn-green" disabled={state==="submitting"}>
                      {state==="submitting" ? "Sending…" : "Send me the prompts"}
                      {state!=="submitting" && <Icon name="arrow" size={12} color="var(--graphite-0)"/>}
                    </button>
                  </div>
                ) : (
                  <div style={{
                    display:"flex", alignItems:"center", gap:12,
                    padding:"14px 16px",
                    background:"rgba(61,190,123,0.08)",
                    border:"1px solid var(--green-deep)",
                    borderRadius:8,
                  }}>
                    <Icon name="check" size={16} color="var(--green)" strokeWidth={2}/>
                    <div>
                      <div style={{fontSize:14, color:"var(--paper)"}}>Filed under your inbox.</div>
                      <div className="mono" style={{fontSize:11, opacity:0.5}}>RX-001 · DELIVERED</div>
                    </div>
                  </div>
                )}
                <div className="mono" style={{fontSize:10, opacity:0.5, marginTop:14, letterSpacing:"0.06em"}}>
                  WE NEVER SELL DATA · UNSUBSCRIBE ANYTIME · EDUCATIONAL USE
                  {!live && <span style={{color:"var(--amber)", marginLeft:8}}>· DEMO MODE — ADD CONVERTKIT FORM ID</span>}
                </div>

                {/* IG alt-funnel */}
                <div style={{
                  marginTop:24, paddingTop:20,
                  borderTop:"1px dashed var(--graphite-3)",
                  display:"flex", alignItems:"center", gap:14, flexWrap:"wrap",
                }}>
                  <div className="mono" style={{fontSize:10, opacity:0.45, letterSpacing:"0.08em"}}>OR</div>
                  <a href="https://instagram.com/themedstack" target="_blank" rel="noopener noreferrer" style={{
                    display:"inline-flex", alignItems:"center", gap:8,
                    fontSize:13, color:"var(--paper)", opacity:0.85,
                    textDecoration:"none",
                    padding:"6px 12px",
                    border:"1px solid var(--graphite-3)",
                    borderRadius:999,
                    background:"var(--graphite-1)",
                  }}>
                    <span style={{
                      width:14, height:14, borderRadius:4,
                      border:"1.5px solid currentColor",
                      position:"relative", display:"inline-block",
                    }}>
                      <span style={{
                        position:"absolute", inset:2,
                        borderRadius:999,
                        border:"1.2px solid currentColor",
                      }}/>
                    </span>
                    DM <strong style={{fontWeight:600}}>"AI"</strong> to <span className="mono" style={{fontSize:11}}>@themedstack</span>
                  </a>
                </div>
              </form>
            </div>

            {/* Right: prompt card preview */}
            <div style={{
              padding:"40px 40px",
              background:`
                repeating-linear-gradient(0deg, transparent, transparent 23px, rgba(244,241,234,0.025) 23px, rgba(244,241,234,0.025) 24px),
                var(--graphite-1)
              `,
              position:"relative",
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>
              <PromptStack/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PromptStack = () => {
  const samples = [
    {n:"03", tag:"DIFFERENTIAL", title:"Acute abdominal pain", body:"Act as my surgical reg. Walk me through differentials for RIF pain in a 22F. Force me to justify each."},
    {n:"07", tag:"OSCE", title:"Chest pain station", body:"Simulate a 54M smoker presenting to ED. Respond as the patient. Mark me on history-taking."},
    {n:"14", tag:"PHARM SAQ", title:"Beta blockers", body:"Generate 6 SAQ-style questions on β-blockers. Include MOA, contraindications, side effects. Mark mine after."},
  ];
  return (
    <div style={{position:"relative", width:"100%", maxWidth:380}}>
      {samples.map((s, i) => (
        <div key={i} className="card-paper" style={{
          padding:18,
          marginTop: i === 0 ? 0 : -8,
          marginLeft: i * 14,
          marginRight: -i * 6,
          transform: `rotate(${(i-1)*1.5}deg)`,
          boxShadow: i === samples.length-1 ? "0 20px 60px -20px rgba(0,0,0,0.7)" : "0 8px 20px -10px rgba(0,0,0,0.4)",
          position: "relative",
          zIndex: samples.length - i,
          opacity: 1 - i * 0.05,
        }}>
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10, paddingBottom:8, borderBottom:"1px dashed var(--paper-3)"}}>
            <div style={{display:"flex", alignItems:"center", gap:8}}>
              <span className="serif" style={{fontSize:22, color:"var(--graphite-1)", lineHeight:1}}>{s.n}</span>
              <span className="mono" style={{fontSize:10, letterSpacing:"0.1em", color:"var(--graphite-1)", opacity:0.5}}>/ 25</span>
            </div>
            <span className="mono" style={{fontSize:10, letterSpacing:"0.1em", color:"var(--green-deep)", textTransform:"uppercase"}}>
              {s.tag}
            </span>
          </div>
          <div style={{fontSize:13, fontWeight:500, color:"var(--graphite-1)", marginBottom:6}}>{s.title}</div>
          <div style={{fontSize:12, lineHeight:1.45, color:"var(--graphite-1)", opacity:0.7, fontStyle:"italic"}}>
            "{s.body}"
          </div>
        </div>
      ))}
    </div>
  );
};

Object.assign(window, { EmailCapture });
