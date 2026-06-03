import { Icon } from "./atoms";

const TESTIMONIALS = [
  {
    name: "Sam",
    role: "Flinders University",
    quote:
      "I finally understood what I should be tracking for applications instead of just hoping my CV would come together later.",
  },
  {
    name: "Dev",
    role: "Curtin University",
    quote:
      "It almost seems like cheating, the things TheMedStack is offering. Some of their AI prompting and how they use AI makes research so much more accessible and simple.",
  },
  {
    name: "Jack",
    role: "Junior doctor",
    quote:
      "I feel that this system integrating AI genuinely helped me. I am interested in applying into vascular surgery, and organising all the things required on the CV helped align all my thoughts in one place.",
  },
  {
    name: "Aisha",
    role: "Curtin University",
    quote:
      "The biggest value was seeing research, CV proof and applications in one place instead of trying to remember everything across notes and spreadsheets.",
  },
  {
    name: "Daniel",
    role: "UNSW",
    quote:
      "It made the medical career side feel much less vague. I could actually see what I had, what was missing, and what I needed to do next.",
  },
];

export default function MedStackTestimonials() {
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="testimonial-section">
      <div className="container">
        <div className="testimonial-header">
          <div>
            <div className="section-kicker">
              <span className="idx">STUDENT FEEDBACK</span>
              <span className="rule" />
            </div>
            <h2 className="serif">Built for the students who know they need to start earlier.</h2>
          </div>
          <p>
            Short, specific feedback from students using TheMedStack to organise research, CV proof, applications and
            pathway decisions before the deadlines hit.
          </p>
        </div>
      </div>

      <div className="testimonial-marquee" aria-label="Student feedback carousel">
        <div className="testimonial-track">
          {marqueeItems.map((item, index) => (
            <article key={`${item.name}-${index}`} className="testimonial-card">
              <div className="testimonial-mark">
                <Icon name="spark" size={14} color="var(--green)" />
              </div>
              <blockquote>{item.quote}</blockquote>
              <div className="testimonial-person">
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
