# The MedStack — Project Reference

> Permanent reference document for the vision, brand, and build direction of **The MedStack**.
> Keep this updated as the product and positioning evolve. Last reviewed: 2026-05.

---

## 1. Vision

**The MedStack is the career operating system for ambitious future doctors.**

Medicine has a hidden curriculum: the research, publications, CV, and strategic decisions
that determine who gets into competitive training programs — none of which are formally
taught. The MedStack exists to make that hidden curriculum **explicit, organised, and
achievable**.

One workspace where a medical student or junior doctor can plan their career, build a
research record, track publications, manage rotations, assemble a CV, and run their
specialty applications — instead of juggling a dozen disconnected tools, forum threads,
and senior students' advice.

We are **starting with research** — the fastest-compounding and hardest-to-navigate part
of a competitive CV — and expanding into the full career platform from there.

---

## 2. Target Audience

Primary users, in order of current focus:

1. **Medical students** — building a standout profile early, before the competitive years.
2. **Junior doctors (interns / residents)** — converting clinical work into publications,
   audits, and a portfolio that survives selection.
3. **Future surgical trainees** — engineering the operative, research, and logbook profile
   that surgical (and other competitive) training programs reward.

Adjacent / secondary:
- Competitive specialty applicants (any college) reverse-engineering selection criteria.
- Research-focused students who want a real pipeline without losing clinical time.

**Geography:** Australia-first (RACS / RACP / college pathways, AU universities, AMC),
with the model generalising to other systems later.

---

## 3. Brand Positioning

- **Name / wordmark:** *The MedStack* — "The Med" in italic serif, "Stack" roman; one word
  `MedStack` to stay consistent with the sub-brand family.
- **Sub-brand family (camelCase):** ResearchStack, SurgeryStack, PathwayStack.
- **One-liner:** *The career operating system for ambitious future doctors.*
- **Tone:** premium, intelligent, high-performance, academic, surgical, data-driven,
  sophisticated, editorial, institutional. Trustworthy and aspirational — **not** a cheerful
  study app, **not** a generic AI startup.
- **Non-negotiables:**
  - **Education-first.** Never medical advice; never a substitute for clinical supervision.
    AI outputs are unverified and must be cross-referenced. Disclaimer stays in the footer.
  - Honest about what ships and when (no overpromising; "coming soon" means coming soon).
  - Built inside medicine, in public.

---

## 4. Website Structure (current homepage)

Single-page site (Vite + React). Section order:

1. **Nav** — sticky, dark frosted glass. Wordmark + links (MedStack OS, ResearchStack, Why)
   + "Join the waitlist" CTA.
2. **Hero** — eyebrow + headline ("Build the medical CV that gets you noticed.") + subheadline
   + dual CTA ("Join the founding waitlist" / "Preview MedStack OS"), with a **video-style
   MedStack OS product demo as the centerpiece** (live workspace mock inside a player frame,
   play overlay, scrubber, and floating annotation pills: Track research / Build your CV /
   Manage projects / Plan applications).
3. **What is MedStack OS?** (01 — light) — plain explanation + 8 tools: Research tracker,
   Publication tracker, CV builder & progress, Conference tracker, Rotation planner,
   Applications & opportunities, Weekly career dashboard, Specialty goals & pathway.
4. **ResearchStack Starter System** (02 — dark) — the first **paid** offer. Positioning, a
   light "project doc" product visual, a price card (driven by `config.js`), and 8 modules:
   Research roadmap, Cold email vault, Project selection matrix, Research project tracker,
   AI research workflow, CV translation guide, Journal/conference database, Worksheets.
5. **ResearchStack Academy** (03 — coming later) — de-emphasized strip; the fuller course
   (case reports, systematic reviews, meta-analysis, manuscript writing, AI-assisted
   workflows, journal submission strategy).
6. **Why this exists** (04 — light) — without-a-system vs with-The-MedStack contrast.
7. **Founding waitlist** (05 — dark) — closing CTA for MedStack OS + ResearchStack, with
   founding-member benefits.
8. **Footer** — wordmark, product/links, education-first disclaimer.

> Note: the standalone "AI Systems" section was removed. AI is now positioned only as a
> feature *inside* research workflows (the ResearchStack "AI research workflow" module and
> the in-mock "AI suggested next step"), never as the headline brand. SurgeryStack /
> PathwayStack / InterviewStack are intentionally **not** prominent right now.

### Tech / repo
- **Stack:** Vite 6 + React 19, plain CSS design system (`src/styles.css`), no UI framework.
- **Entry:** `index.html` → `src/main.jsx` → `src/App.jsx`.
- **Components:** `src/components/*`.
- **Email capture:** ConvertKit form (`src/config.js`), `no-cors` POST.
- **Deploy:** Netlify — build `npm run build`, publish `dist/`. (`netlify.toml`.)
- **Local:** `npm install`, `npm run dev`, `npm run build`.

---

## 5. Current Homepage Direction

- **Aesthetic:** premium **dark** site (Linear feel). The **light theme appears only inside
  the product screenshots** (Notion-style workspace UI floating on dark) — this was a
  deliberate decision after testing full light/dark section alternation, which felt too
  contrasting.
- **Hero is product-first:** a realistic **MedStack dashboard mockup** is the centerpiece so
  visitors understand the product in ~5 seconds without reading. The dashboard shows:
  - **Career Roadmap** (Pre-med → Med school → Internship → Registrar → Consultant)
  - **Research Tracker** (active projects + status)
  - **Publication Tracker** (counts: published / in review / drafting)
  - **Rotation Planner** (current rotation, weeks, next up)
  - **CV Builder** (completeness + sections)
  - **Application Tracker** (RACS criteria progress + next deadline)
- **Inspiration:** Notion (workspace clarity), Linear (dark premium polish), Arc (warmth +
  personality), Apple (restraint, hierarchy, confidence).
- **Avoid:** generic AI-startup gradients, generic dark-mode SaaS templates, cheesy medical
  iconography (stethoscopes, crosses), emoji.

---

## 6. Product Roadmap

| Phase | Product | Status |
|-------|---------|--------|
| Now | **MedStack OS** — the career workspace (research, CV, rotations, conferences, applications, dashboard, pathway) | Building · waitlist |
| First paid | **ResearchStack Starter System** — roadmap, templates, trackers and worksheets from zero to first publication | Founding access opening soon |
| Later | **ResearchStack Academy** — the full research course | Coming later |
| Later | SurgeryStack / PathwayStack / InterviewStack — broader ecosystem | Not prominent yet |

**Pricing** lives in `src/config.js` (`PRICING`): founding `$497 AUD`, regular `$997 AUD`,
`live: false` (waitlist mode). Flip `live` and copy when you start selling.

**ResearchStack Starter modules (the current wedge):**
1. Research roadmap
2. Cold email vault
3. Project selection matrix
4. Research project tracker
5. AI research workflow
6. CV translation guide
7. Journal & conference starter database
8. Worksheets

---

## 7. Design Principles

1. **Product over prose.** Show the workspace; let visuals carry comprehension. Text supports,
   never substitutes.
2. **Dark, premium, restrained.** Deep graphite surfaces, warm ivory ink, hairline borders,
   layered elevation, generous spacing. Minimal, never busy.
3. **Editorial typography.**
   - Display / headings: **Newsreader** (medical-journal / editorial authority).
   - UI / body: **Hanken Grotesk** (humanist, highly readable).
   - Data / labels: **IBM Plex Mono** (institutional, tabular numerals).
4. **Blended light/dark, never harsh.** Dark premium sections (soft graphite, not pure black)
   alternate with soft off-white sections (`#F4F2EA`, not pure white). Light sections use a
   CSS token-flip (`.sec-light`) so shared components adapt automatically. Product
   screenshots are always light, reading as real software.
5. **Medical identity through data, not clip-art.** Journals, college codes (RACS/RACP),
   PRISMA, logbooks, rotations, percentiles — reference medicine via language and data, never
   literal medical icons.
6. **Coherent sub-brand system.** ResearchStack / SurgeryStack / PathwayStack share one visual
   and naming language under The MedStack.
7. **Trust signals everywhere.** Honest statuses, education-first framing, AU specificity,
   "built in the open."
8. **Accessible & responsive.** Real contrast tiers, focus-visible rings, reduced-motion
   support, mobile-aware layouts (product mock scrolls horizontally to keep fidelity).

---

## 8. Future Ideas

- **Onboarding by year level / target specialty** — tailor the dashboard and roadmap to the
  user's stage and goal college.
- **CV export** — generate a formatted, college-aligned CV / portfolio from tracked data.
- **Selection-criteria engine** — live mapping of a user's profile against each college's
  scoring rubric, with ranked "next best move" suggestions.
- **Supervisor / project marketplace** — connect students to live, publishable projects.
- **AI manuscript assistant** — case-report and abstract drafting from the user's own notes
  (author stays the human; education-first guardrails).
- **Audit & QI toolkit** — structured templates that turn rotations into publishable output.
- **Community / cohort** — founding-cohort build log, peer accountability, shared templates.
- **Mobile app** — capture cases, log procedures, and update the CV from the ward.
- **Backend** — accounts, real databases per stack, and integrations (Anki, reference
  managers, calendar) — explicitly *not* in scope for the current static marketing site.
- **Expansion** — generalise pathways beyond Australia once the AU model is proven.

---

*This document is the source of truth for direction. Update it when the vision, audience,
positioning, structure, roadmap, or principles change.*
