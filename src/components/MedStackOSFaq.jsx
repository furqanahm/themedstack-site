const FAQS = [
  {
    q: "Is this only for Australian medical students?",
    a: "The core OS works globally, but the pathway and internship layer is written for Australia first because that is where the hidden rules are most specific for our audience.",
  },
  {
    q: "Is this just a Notion template?",
    a: "No. The workspace is the base layer. The paid version also includes the AI setup protocol, prompt vault, daily tracker, CV evidence system, research engine, application tracker and Australian pathway hubs.",
  },
  {
    q: "Do I need Notion AI?",
    a: "No. You can use the OS on a free Notion account. Notion AI can help, but the prompt vault also works with ChatGPT, Claude or other AI tools.",
  },
  {
    q: "Can it connect directly to AI?",
    a: "The OS includes a step-by-step setup protocol for connecting your duplicated Notion workspace to an AI assistant through Notion integrations where available. The safest V1 workflow is still: run the prompt, review the output, then update the database intentionally.",
  },
  {
    q: "What happens after purchase?",
    a: "You receive the paid Notion template link and duplicate it into your own workspace. Once duplicated, your copy is yours to edit and customise.",
  },
  {
    q: "Is this medical advice?",
    a: "No. The MedStack is an educational and career-organisation system. It is not clinical advice, not patient-care guidance and not a replacement for university, hospital or college requirements.",
  },
  {
    q: "What is the refund policy?",
    a: "Because access is delivered immediately as a digital product, refunds are generally not offered after the template is accessed. If something is broken or access fails, email us and we will fix it.",
  },
  {
    q: "How is the free Lite version different?",
    a: "Lite gives the basic dashboard and starter workflow. The full OS adds the AI layer, dedicated engines, deeper trackers, prompt vault, application systems and Australian pathway modules.",
  },
];

export default function MedStackOSFaq() {
  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-kicker">
          <span className="idx">07 - FAQ</span>
          <span className="rule" />
        </div>

        <div className="faq-grid">
          <div>
            <div className="eyebrow">BEFORE YOU BUY</div>
            <h2 className="serif">Clear answers, no vague template-store energy.</h2>
            <p>
              The product is built for students who want a serious system, not another pretty dashboard they abandon
              after a week.
            </p>
          </div>

          <div className="faq-list">
            {FAQS.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
