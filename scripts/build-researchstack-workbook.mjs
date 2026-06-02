import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const outDir = path.join(root, "content", "researchstack-starter-v2");
const tempDir = path.join(outDir, ".xlsx-build");
const workbookPath = path.join(outDir, "ResearchStack-Starter-Workbook-v2.xlsx");

fs.rmSync(tempDir, { recursive: true, force: true });
fs.mkdirSync(path.join(tempDir, "_rels"), { recursive: true });
fs.mkdirSync(path.join(tempDir, "docProps"), { recursive: true });
fs.mkdirSync(path.join(tempDir, "xl", "_rels"), { recursive: true });
fs.mkdirSync(path.join(tempDir, "xl", "worksheets"), { recursive: true });

const disclaimer =
  "Educational product only. Check your supervisor, hospital research office, university, HREC/governance process, target journal, and local policies before accessing data, contacting patients, submitting abstracts, or publishing.";

function t(v, s = 0) {
  return { v: v ?? "", s, type: "text" };
}

function n(v, s = 0) {
  return { v: v ?? 0, s, type: "number" };
}

function blank() {
  return t("");
}

function row(...cells) {
  return cells;
}

function section(label) {
  return [t(label, 2)];
}

function header(...labels) {
  return labels.map((label) => t(label, 3));
}

function note(label) {
  return [t(label, 4)];
}

function warn(label) {
  return [t(label, 5)];
}

const sheets = [
  {
    name: "START HERE",
    rows: [
      row(t("ResearchStack Starter Workbook", 1)),
      row(t("A workbook-led system for finding, starting, completing, writing, and submitting beginner medical research projects.")),
      row(t(disclaimer, 5)),
      section("How to use this workbook"),
      row(t("1"), t("Start with Project Selector"), t("Choose the highest-fit project type for your current stage.")),
      row(t("2"), t("Build Supervisor CRM"), t("Create a real outreach list instead of waiting for one perfect contact.")),
      row(t("3"), t("Use Outreach Pipeline"), t("Send tailored emails, track follow-ups, and book meetings.")),
      row(t("4"), t("Move into the matching project builder"), t("Case report, audit/QI, retrospective study, literature review, or systematic review/meta-analysis.")),
      row(t("5"), t("Use Tables Figures Planner"), t("Map the exact visuals and tables needed for the project type.")),
      row(t("6"), t("Use Manuscript Builder"), t("Write section by section with prompts and checks.")),
      row(t("7"), t("Use Submission Pack"), t("Prepare cover letter, reporting checklist, journal formatting, and final files.")),
      row(t("8"), t("Log CV evidence"), t("Turn work into evidence: role, output, date, link, referee.")),
      section("What makes this different from a PDF"),
      row(t("The workbook is the product interface. The guides explain, but these sheets should tell the student what to do next.")),
      row(t("The aim is not a guaranteed publication. The aim is a legitimate research pipeline and a clear route to output.")),
    ],
  },
  {
    name: "Project Selector",
    rows: [
      row(t("Research Project Type Selector", 1)),
      row(t("Score each project 1-5. Pick the project with the highest total and lowest approval/time risk.")),
      header("Project Type", "Beginner Fit", "Time To Output", "Approval Complexity", "Supervisor Need", "CV Value", "Best For", "Avoid If", "Total Score"),
      row(t("Case report"), n(5), n(4), n(3), n(4), n(3), t("Unusual case, strong clinical lesson, supportive doctor"), t("No consent/local publication pathway or weak novelty"), blank()),
      row(t("Audit/QI"), n(5), n(4), n(3), n(4), n(4), t("Measurable clinical standard, local improvement, department presentation"), t("No clear standard or no governance pathway"), blank()),
      row(t("Retrospective chart review"), n(3), n(3), n(4), n(5), n(5), t("Existing dataset, clear question, publishable clinical result"), t("Data access uncertain or approvals likely to drag"), blank()),
      row(t("Literature/scoping review"), n(4), n(3), n(2), n(3), n(3), t("Mapping a field, background writing, topic exploration"), t("Question is broad and output unclear"), blank()),
      row(t("Systematic review"), n(3), n(2), n(2), n(4), n(5), t("Clear PICO, enough studies, methods support"), t("No second reviewer or no methods support"), blank()),
      row(t("Meta-analysis"), n(2), n(2), n(2), n(5), n(5), t("Comparable quantitative outcomes across studies"), t("You cannot pool outcomes or lack stats support"), blank()),
      row(t("Survey study"), n(3), n(3), n(4), n(4), n(3), t("Education, attitudes, workforce, student experience"), t("Low response rate or weak questionnaire"), blank()),
      row(t("Medical education project"), n(4), n(3), n(3), n(4), n(4), t("Teaching intervention, curriculum, student outcomes"), t("No evaluation plan or ethics guidance"), blank()),
      note("Rule: choose a project with a named supervisor, approval path, output target, and one next action."),
    ],
  },
  {
    name: "Supervisor CRM",
    rows: [
      row(t("Supervisor CRM", 1)),
      row(t("The goal is a pipeline of contacts, not one magical email.")),
      header("Priority", "Name", "Title", "Specialty", "Institution", "Source", "Why Them", "Relevant Paper/Project", "Email", "Contacted Date", "Follow-Up Date", "Response", "Meeting Date", "Potential Project", "Status", "Notes"),
      row(t("High"), t("Dr Example"), t("Consultant"), t("General Surgery"), t("Example Hospital"), t("Placement"), t("Runs peri-op audits"), t("Antibiotic timing audit"), t("example@email.com"), t("2026-06-01"), t("2026-06-10"), t("No reply yet"), blank(), t("Audit/QI"), t("Contacted"), t("Replace with real contact")),
      row(t("Medium"), t("A/Prof Example"), t("Academic"), t("Emergency"), t("Example University"), t("PubMed"), t("Publishes ED AI/triage work"), t("AI triage review"), t("example@email.com"), blank(), blank(), blank(), blank(), t("Review"), t("To contact"), blank()),
      note("Before emailing: read at least one abstract/paper/profile so your email has one specific reason."),
    ],
  },
  {
    name: "Outreach Pipeline",
    rows: [
      row(t("Outreach Pipeline", 1)),
      row(t("Use this to stop losing emails, follow-ups, and meeting next steps.")),
      header("Contact", "Project Angle", "Email Type", "Sent Date", "Follow-Up 1", "Follow-Up 2", "Response", "Meeting Booked", "Next Action", "Next Action Owner", "Status"),
      row(t("Dr Example"), t("Antibiotic timing audit"), t("Warm placement email"), t("2026-06-01"), t("2026-06-10"), blank(), t("No reply yet"), t("No"), t("Send follow-up"), t("Me"), t("Waiting")),
      row(t("A/Prof Example"), t("AI triage review"), t("Cold paper-based email"), blank(), blank(), blank(), blank(), t("No"), t("Draft tailored email"), t("Me"), t("Drafting")),
      section("Email quality checklist"),
      row(t("Email says who I am"), t("Yes/No")),
      row(t("Email explains why this person"), t("Yes/No")),
      row(t("Email names a topic or paper"), t("Yes/No")),
      row(t("Email offers practical help"), t("Yes/No")),
      row(t("Email has an easy next step"), t("Yes/No")),
    ],
  },
  {
    name: "Project Pipeline",
    rows: [
      row(t("Research Project Pipeline", 1)),
      row(t("Every project must have a type, status, blocker, output, and next action.")),
      header("Project", "Type", "Specialty", "Supervisor", "Status", "Current Blocker", "Next Action", "Due Date", "Approval/Governance Status", "Target Output", "Target Venue/Journal", "Your Role", "Evidence Link", "Priority"),
      row(t("Example antibiotic timing audit"), t("Audit/QI"), t("Surgery"), t("Dr Example"), t("Idea"), t("Need supervisor confirmation"), t("Email consultant"), t("2026-06-10"), t("Not started"), t("Department presentation"), blank(), t("Student contributor"), blank(), t("High")),
      row(t("Example unusual imaging case"), t("Case report"), t("Radiology"), t("Dr Example"), t("Contacted"), t("Need consent/local process"), t("Ask supervisor re consent"), t("2026-06-14"), t("Check local policy"), t("Case report abstract"), blank(), t("Literature search/draft"), blank(), t("Medium")),
      warn("If a project has no next action and no output target, it is not a project yet. It is a vague idea."),
    ],
  },
  {
    name: "Case Report Builder",
    rows: [
      row(t("Case Report Builder", 1)),
      row(t("Best for unusual presentations, diagnostic lessons, management complications, rare associations, or strong clinical learning points.")),
      section("Gate checks before starting"),
      header("Check", "Answer", "Notes"),
      row(t("Is the case genuinely reportable?"), blank(), t("Rare is not enough. Need a clear lesson.")),
      row(t("Is a clinician involved willing to supervise?"), blank(), blank()),
      row(t("Consent/local publication process checked?"), blank(), t("Do not assume de-identification is enough.")),
      row(t("Target journal or conference identified?"), blank(), blank()),
      section("Manuscript structure"),
      header("Section", "What to include", "Your notes", "Status"),
      row(t("Title"), t("Condition + intervention/presentation + 'case report'"), blank(), t("Not started")),
      row(t("Abstract"), t("Background, case summary, conclusion if required"), blank(), t("Not started")),
      row(t("Introduction"), t("Why this case matters and current literature gap"), blank(), t("Not started")),
      row(t("Case presentation"), t("Timeline, history, examination, investigations, diagnosis, management, outcome"), blank(), t("Not started")),
      row(t("Discussion"), t("Compare to literature, explain lesson, limitations"), blank(), t("Not started")),
      row(t("Learning points"), t("3 concise lessons"), blank(), t("Not started")),
      section("Figures and tables"),
      header("Asset", "Purpose", "Needed?", "Owner", "Status"),
      row(t("Timeline table"), t("Clinical course at a glance"), t("Often yes"), blank(), blank()),
      row(t("Imaging/clinical figure"), t("Show key finding if permitted"), t("Maybe"), blank(), blank()),
      row(t("Literature comparison table"), t("Compare similar cases"), t("Useful"), blank(), blank()),
      note("Reporting guideline: CARE checklist is the usual starting point for case reports."),
    ],
  },
  {
    name: "Audit QI Builder",
    rows: [
      row(t("Audit / QI Builder", 1)),
      row(t("Best for comparing practice against a guideline/standard and improving a local process.")),
      section("Define the audit"),
      header("Element", "Prompt", "Your answer"),
      row(t("Problem"), t("What is going wrong or unknown?"), blank()),
      row(t("Standard"), t("Which guideline/policy/benchmark defines good care?"), blank()),
      row(t("Population"), t("Which patients/encounters are included?"), blank()),
      row(t("Time period"), t("What dates will be reviewed?"), blank()),
      row(t("Aim"), t("By DATE, measure/improve X from baseline to target."), blank()),
      row(t("Governance"), t("Audit/QI/research? Local approval pathway?"), blank()),
      section("Measures"),
      header("Measure Type", "Example", "Your measure", "Data source", "Frequency"),
      row(t("Process"), t("% receiving antibiotic within guideline window"), blank(), blank(), blank()),
      row(t("Outcome"), t("Complication/readmission/delay rate"), blank(), blank(), blank()),
      row(t("Balancing"), t("Unintended consequence or extra workload"), blank(), blank(), blank()),
      section("Tables and figures"),
      header("Asset", "Purpose", "Status"),
      row(t("Audit criteria table"), t("Shows standard and how measured"), blank()),
      row(t("Baseline results table"), t("Shows compliance for each criterion"), blank()),
      row(t("Run chart / bar chart"), t("Shows change over time or before/after"), blank()),
      row(t("PDSA table"), t("Shows improvement cycles if QI"), blank()),
    ],
  },
  {
    name: "Retrospective Builder",
    rows: [
      row(t("Retrospective Study Builder", 1)),
      row(t("Best for existing clinical data, clear cohort, defined variables, and realistic approval/data access.")),
      section("Study design"),
      header("Element", "Prompt", "Your answer"),
      row(t("Research question"), t("In POPULATION, is EXPOSURE associated with OUTCOME?"), blank()),
      row(t("Design"), t("Retrospective cohort, case-control, cross-sectional, chart review"), blank()),
      row(t("Setting"), t("Hospital/department/database"), blank()),
      row(t("Inclusion criteria"), t("Who is in?"), blank()),
      row(t("Exclusion criteria"), t("Who is out?"), blank()),
      row(t("Primary outcome"), t("One primary outcome"), blank()),
      row(t("Secondary outcomes"), t("Optional, limited"), blank()),
      row(t("Approval pathway"), t("HREC/governance/low-risk/exemption/local process"), blank()),
      section("Data dictionary"),
      header("Variable", "Type", "Definition", "Allowed values", "Source", "Missing data rule"),
      row(t("Age"), t("Continuous/categorical"), t("Age at index event"), t("Years or age band"), t("EMR"), blank()),
      row(t("Exposure"), t("Binary/category"), t("Define exactly"), t("Yes/No"), t("EMR"), blank()),
      row(t("Outcome"), t("Binary/continuous/time"), t("Define exactly"), blank(), t("EMR"), blank()),
      section("Tables and figures"),
      header("Asset", "Purpose", "Status"),
      row(t("Table 1 baseline characteristics"), t("Describe cohort"), blank()),
      row(t("Outcome table"), t("Primary/secondary outcomes"), blank()),
      row(t("Flow diagram"), t("Included/excluded records"), blank()),
      row(t("Forest plot / OR table if applicable"), t("Associations or subgroup analysis"), blank()),
      note("Reporting guideline: STROBE is the usual starting point for observational studies."),
    ],
  },
  {
    name: "Lit Review Builder",
    rows: [
      row(t("Literature / Scoping Review Builder", 1)),
      row(t("Best for mapping a topic, summarising evidence, or building a focused background when meta-analysis is not appropriate.")),
      section("Question framing"),
      header("Framework", "Use when", "Your question"),
      row(t("PICO"), t("Intervention/exposure and outcome"), blank()),
      row(t("PCC"), t("Population, concept, context for scoping review"), blank()),
      row(t("PEO"), t("Exposure/outcome questions"), blank()),
      section("Search blocks"),
      header("Block", "Synonyms / terms", "MeSH / subject headings", "Notes"),
      row(t("Population"), blank(), blank(), blank()),
      row(t("Concept/intervention"), blank(), blank(), blank()),
      row(t("Outcome/context"), blank(), blank(), blank()),
      section("Screening and extraction"),
      header("Step", "Output", "Status"),
      row(t("Search strategy drafted"), t("Exact search strings saved"), blank()),
      row(t("Databases searched"), t("PubMed/library/Google Scholar etc."), blank()),
      row(t("Titles/abstracts screened"), t("Inclusion/exclusion decisions"), blank()),
      row(t("Full texts reviewed"), t("Final included papers"), blank()),
      row(t("Extraction table completed"), t("Study design, population, findings, limitations"), blank()),
      section("Tables and figures"),
      header("Asset", "Purpose", "Status"),
      row(t("Evidence summary table"), t("Main studies and findings"), blank()),
      row(t("Theme table"), t("Group findings by theme"), blank()),
      row(t("Search flow diagram"), t("Show screening process"), blank()),
    ],
  },
  {
    name: "Sys Review Meta Builder",
    rows: [
      row(t("Systematic Review / Meta-Analysis Builder", 1)),
      row(t("Use this only when the question is narrow, methods are clear, and you have support. Meta-analysis is not just a bigger literature review.")),
      section("Can this be a meta-analysis?"),
      header("Check", "Answer", "Notes"),
      row(t("Clear PICO question"), blank(), blank()),
      row(t("Enough comparable studies"), blank(), blank()),
      row(t("Comparable outcomes/measures"), blank(), blank()),
      row(t("Effect size can be extracted or calculated"), blank(), blank()),
      row(t("Risk of bias tool chosen"), blank(), blank()),
      row(t("Second reviewer available"), blank(), blank()),
      row(t("Supervisor/statistical support available"), blank(), blank()),
      section("Workflow"),
      header("Stage", "What to create", "Owner", "Status"),
      row(t("Protocol"), t("Question, eligibility, outcomes, databases, analysis plan"), blank(), blank()),
      row(t("Search"), t("Database-specific search strings"), blank(), blank()),
      row(t("Screening"), t("Title/abstract and full-text decisions"), blank(), blank()),
      row(t("Extraction"), t("Study characteristics and outcome data"), blank(), blank()),
      row(t("Risk of bias"), t("Tool-specific ratings"), blank(), blank()),
      row(t("Synthesis"), t("Narrative synthesis and/or pooled results"), blank(), blank()),
      row(t("Manuscript"), t("PRISMA-aligned write-up"), blank(), blank()),
      section("Tables and figures"),
      header("Asset", "Purpose", "Status"),
      row(t("PRISMA flow diagram"), t("Selection process"), blank()),
      row(t("Study characteristics table"), t("Who/what/where/how"), blank()),
      row(t("Risk of bias table/figure"), t("Quality appraisal"), blank()),
      row(t("Forest plot"), t("Pooled effect if meta-analysis"), blank()),
      row(t("Funnel plot"), t("Publication bias if appropriate"), blank()),
      note("Reporting guideline: PRISMA 2020 checklist and flow diagram."),
    ],
  },
  {
    name: "Tables Figures Planner",
    rows: [
      row(t("Tables and Figures Planner", 1)),
      row(t("This is where the research becomes visible. Each project type has different expected outputs.")),
      header("Project Type", "Table/Figure", "Purpose", "Required Data", "Tool", "Status"),
      row(t("Case report"), t("Clinical timeline"), t("Shows sequence of presentation, investigations, management, follow-up"), t("Dates/events"), t("Word/PowerPoint"), blank()),
      row(t("Case report"), t("Literature comparison table"), t("Shows how your case compares"), t("Similar cases"), t("Excel/Word"), blank()),
      row(t("Audit/QI"), t("Audit criteria table"), t("Defines standards and measurement"), t("Guideline criteria"), t("Excel"), blank()),
      row(t("Audit/QI"), t("Run chart"), t("Shows change over time"), t("Time series measures"), t("Excel"), blank()),
      row(t("Retrospective"), t("Table 1"), t("Baseline cohort characteristics"), t("Demographics/clinical variables"), t("Excel/SPSS/R"), blank()),
      row(t("Retrospective"), t("Flow diagram"), t("Records included/excluded"), t("Eligibility counts"), t("PowerPoint"), blank()),
      row(t("Systematic review"), t("PRISMA flow diagram"), t("Screening process"), t("Records/duplicates/exclusions"), t("PRISMA template"), blank()),
      row(t("Meta-analysis"), t("Forest plot"), t("Pooled estimate"), t("Effect sizes/SE/CI"), t("R/RevMan/Jamovi"), blank()),
      row(t("Review"), t("Evidence summary table"), t("Main included studies"), t("Study details/findings"), t("Excel/Word"), blank()),
    ],
  },
  {
    name: "Manuscript Builder",
    rows: [
      row(t("Manuscript Builder", 1)),
      row(t("Write section by section. Do not wait until the whole project is perfect before building the skeleton.")),
      header("Section", "Purpose", "Prompts", "Inputs Needed", "Status"),
      row(t("Title"), t("Tell reader the design/topic"), t("Does it name the design and core topic?"), t("Project type, population, setting"), blank()),
      row(t("Abstract"), t("Compressed whole paper"), t("Background, aim, methods, results, conclusion"), t("Final results"), blank()),
      row(t("Introduction"), t("Why this matters"), t("What is known? What gap remains? What is the aim?"), t("Literature matrix"), blank()),
      row(t("Methods"), t("What you did"), t("Design, setting, population, variables, analysis, ethics/governance"), t("Protocol/data dictionary"), blank()),
      row(t("Results"), t("What you found"), t("No interpretation here. Tables/figures drive this section."), t("Cleaned data and figures"), blank()),
      row(t("Discussion"), t("What it means"), t("Main finding, comparison, implications, limitations, future work"), t("Results + key literature"), blank()),
      row(t("Conclusion"), t("Takeaway"), t("What should reader remember?"), t("Discussion"), blank()),
      row(t("References"), t("Support claims"), t("Are all claims cited? Are references real?"), t("Reference manager"), blank()),
      row(t("Reporting checklist"), t("Journal compliance"), t("CARE/STROBE/PRISMA/etc."), t("Target guideline"), blank()),
    ],
  },
  {
    name: "Submission Pack",
    rows: [
      row(t("Publication Submission Pack", 1)),
      row(t("Use this before journal or conference submission.")),
      section("Target details"),
      header("Item", "Your answer"),
      row(t("Target journal/conference"), blank()),
      row(t("Article type"), blank()),
      row(t("Word count"), blank()),
      row(t("Abstract format"), blank()),
      row(t("Reference style"), blank()),
      row(t("Figure/table limits"), blank()),
      row(t("Reporting guideline required"), blank()),
      row(t("Ethics/governance wording"), blank()),
      section("Cover letter builder"),
      header("Part", "Template"),
      row(t("Opening"), t("Dear Editor, Please consider our manuscript entitled '[TITLE]' for publication as a [ARTICLE TYPE] in [JOURNAL].")),
      row(t("Importance"), t("This manuscript addresses [clinical/research problem] by [what the study/case/review does].")),
      row(t("Fit"), t("We believe it is suitable for [JOURNAL] because [audience/relevance].")),
      row(t("Declarations"), t("The manuscript is original, not under consideration elsewhere, and all authors approve submission. Ethics/consent details: [DETAILS].")),
      row(t("Close"), t("Thank you for considering our manuscript. Kind regards, [Corresponding author].")),
      section("Final submission checklist"),
      header("Check", "Done?", "Notes"),
      row(t("Supervisor approved final version"), blank(), blank()),
      row(t("All authors approved"), blank(), blank()),
      row(t("Authorship order confirmed"), blank(), blank()),
      row(t("Ethics/consent/governance wording correct"), blank(), blank()),
      row(t("Reporting checklist complete"), blank(), blank()),
      row(t("Tables/figures labelled and cited"), blank(), blank()),
      row(t("References formatted"), blank(), blank()),
      row(t("Conflicts/funding declared"), blank(), blank()),
    ],
  },
  {
    name: "AI Prompt Vault",
    rows: [
      row(t("AI Prompt Vault", 1)),
      row(t("Use AI to accelerate structure and wording. Do not use it to invent citations, facts, data, or approvals.")),
      header("Stage", "Prompt", "Output"),
      row(t("Project selection"), t("I am an Australian medical student interested in [specialty]. Give me 10 realistic beginner research projects and classify each as case report, audit/QI, retrospective study, literature review, or systematic review. Include approvals risk, output pathway, and first action."), t("Project ideas")),
      row(t("Supervisor email"), t("Rewrite this research outreach email so it is specific, concise, respectful, and easy for a busy doctor to reply to. Do not exaggerate my experience: [email]."), t("Improved email")),
      row(t("Meeting prep"), t("Create a 15-minute meeting agenda for a medical student meeting a potential research supervisor about [topic]. Include questions about approval, data access, output, authorship, and next action."), t("Meeting plan")),
      row(t("Search strategy"), t("For this research question [question], create search blocks with synonyms, MeSH terms, and three PubMed search strings: broad, balanced, narrow."), t("Search strings")),
      row(t("Data dictionary"), t("For this retrospective study question [question], propose a data dictionary with variable definitions, data types, allowed values, and missing-data notes."), t("Data dictionary draft")),
      row(t("Abstract"), t("Using these project notes, draft a structured abstract. Clearly mark missing data and do not invent results: [notes]."), t("Abstract draft")),
      row(t("Manuscript"), t("Turn this results table and project aim into a Results section. Do not interpret the findings; save interpretation for Discussion: [data]."), t("Results draft")),
      row(t("Cover letter"), t("Draft a journal cover letter for this manuscript: title [title], article type [type], journal [journal], key contribution [contribution], ethics/consent details [details]."), t("Cover letter draft")),
    ],
  },
  {
    name: "CV Evidence Log",
    rows: [
      row(t("Research CV Evidence Log", 1)),
      row(t("Every research task should become trackable evidence.")),
      header("Date", "Project", "Output", "Your Role", "Skill Demonstrated", "Evidence Link", "Supervisor/Referee", "CV Bullet Draft", "Status"),
      row(t("2026-06-15"), t("Example antibiotic timing audit"), t("Audit criteria table"), t("Built criteria from guideline and local policy"), t("Audit/QI design"), blank(), t("Dr Example"), t("Developed audit criteria and data collection tool for perioperative antibiotic timing project."), t("Draft")),
      row(t("2026-07-01"), t("Example case report"), t("Literature table"), t("Summarised comparable cases"), t("Literature review"), blank(), t("Dr Example"), t("Prepared literature summary table for supervised case report on [topic]."), t("Draft")),
    ],
  },
  {
    name: "8 Week Sprint",
    rows: [
      row(t("8 Week Research Sprint", 1)),
      row(t("A realistic beginner timeline. Adjust if approvals or supervisors take longer.")),
      header("Week", "Goal", "Key Tasks", "Output", "Done?"),
      row(t("1"), t("Choose lane"), t("Pick specialty/topic; use project selector; shortlist 10 contacts"), t("Supervisor CRM started"), blank()),
      row(t("2"), t("Outreach"), t("Send 5 tailored emails; schedule follow-ups"), t("Outreach pipeline active"), blank()),
      row(t("3"), t("Meet/clarify"), t("Meet supervisor; ask approval/authorship/output questions"), t("One project brief"), blank()),
      row(t("4"), t("Project setup"), t("Choose builder; create protocol/data dictionary/search plan"), t("Project structure"), blank()),
      row(t("5"), t("Work block"), t("Literature/data/case/audit work"), t("First tangible output"), blank()),
      row(t("6"), t("Tables/figures"), t("Build core table/figure plan"), t("Visual outputs drafted"), blank()),
      row(t("7"), t("Manuscript/abstract"), t("Write skeleton; get supervisor feedback"), t("Draft abstract/manuscript"), blank()),
      row(t("8"), t("Submission/CV"), t("Target venue; cover letter; CV evidence"), t("Submission pack or next deadline"), blank()),
    ],
  },
];

function xmlEscape(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function colName(n) {
  let name = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    name = String.fromCharCode(65 + rem) + name;
    n = Math.floor((n - 1) / 26);
  }
  return name;
}

function cellXml(cell, r, c) {
  const ref = `${colName(c)}${r}`;
  const style = cell?.s ? ` s="${cell.s}"` : "";
  if (cell?.type === "number" && cell.v !== "") {
    return `<c r="${ref}"${style}><v>${cell.v}</v></c>`;
  }
  return `<c r="${ref}"${style} t="inlineStr"><is><t>${xmlEscape(cell?.v ?? "")}</t></is></c>`;
}

function sheetXml(sheet) {
  const maxCols = Math.max(...sheet.rows.map((r) => r.length));
  const cols = Array.from({ length: maxCols }, (_, i) => {
    const width = i === 0 ? 24 : i < 4 ? 28 : 20;
    return `<col min="${i + 1}" max="${i + 1}" width="${width}" customWidth="1"/>`;
  }).join("");
  const rowsXml = sheet.rows
    .map((cells, rIndex) => {
      const rowNumber = rIndex + 1;
      const height = rIndex === 0 ? 30 : 22;
      const cellsXml = cells.map((cell, cIndex) => cellXml(cell, rowNumber, cIndex + 1)).join("");
      return `<row r="${rowNumber}" ht="${height}" customHeight="1">${cellsXml}</row>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="3" topLeftCell="A4" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <cols>${cols}</cols>
  <sheetData>${rowsXml}</sheetData>
</worksheet>`;
}

const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  ${sheets.map((_, i) => `<Override PartName="/xl/worksheets/sheet${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join("\n  ")}
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>`;

const rootRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>`;

const workbook = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets>
    ${sheets.map((sheet, i) => `<sheet name="${xmlEscape(sheet.name)}" sheetId="${i + 1}" r:id="rId${i + 1}"/>`).join("\n    ")}
  </sheets>
</workbook>`;

const workbookRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  ${sheets.map((_, i) => `<Relationship Id="rId${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${i + 1}.xml"/>`).join("\n  ")}
  <Relationship Id="rId${sheets.length + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`;

const styles = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="4">
    <font><sz val="10"/><name val="Arial"/></font>
    <font><b/><sz val="16"/><color rgb="FFFFFFFF"/><name val="Arial"/></font>
    <font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Arial"/></font>
    <font><b/><sz val="10"/><color rgb="FF122017"/><name val="Arial"/></font>
  </fonts>
  <fills count="6">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF0E1418"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF18A86E"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFEAF8EF"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFFFF2CC"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left style="thin"><color rgb="FFD7E5DC"/></left><right style="thin"><color rgb="FFD7E5DC"/></right><top style="thin"><color rgb="FFD7E5DC"/></top><bottom style="thin"><color rgb="FFD7E5DC"/></bottom><diagonal/></border>
  </borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="6">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1"><alignment wrapText="1" vertical="top"/></xf>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"><alignment wrapText="1" vertical="center"/></xf>
    <xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"><alignment wrapText="1" vertical="center"/></xf>
    <xf numFmtId="0" fontId="2" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"><alignment wrapText="1" vertical="center"/></xf>
    <xf numFmtId="0" fontId="3" fillId="4" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"><alignment wrapText="1" vertical="top"/></xf>
    <xf numFmtId="0" fontId="3" fillId="5" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1"><alignment wrapText="1" vertical="top"/></xf>
  </cellXfs>
  <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>`;

const now = new Date().toISOString();
const core = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>ResearchStack Starter Workbook v2</dc:title>
  <dc:creator>The MedStack</dc:creator>
  <cp:lastModifiedBy>The MedStack</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">${now}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">${now}</dcterms:modified>
</cp:coreProperties>`;

const app = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>The MedStack</Application>
</Properties>`;

fs.writeFileSync(path.join(tempDir, "[Content_Types].xml"), contentTypes);
fs.writeFileSync(path.join(tempDir, "_rels", ".rels"), rootRels);
fs.writeFileSync(path.join(tempDir, "xl", "workbook.xml"), workbook);
fs.writeFileSync(path.join(tempDir, "xl", "_rels", "workbook.xml.rels"), workbookRels);
fs.writeFileSync(path.join(tempDir, "xl", "styles.xml"), styles);
fs.writeFileSync(path.join(tempDir, "docProps", "core.xml"), core);
fs.writeFileSync(path.join(tempDir, "docProps", "app.xml"), app);
sheets.forEach((sheet, i) => {
  fs.writeFileSync(path.join(tempDir, "xl", "worksheets", `sheet${i + 1}.xml`), sheetXml(sheet));
});

fs.rmSync(workbookPath, { force: true });
const zipPath = workbookPath.replace(/\.xlsx$/i, ".zip");
fs.rmSync(zipPath, { force: true });
const ps = [
  "-NoProfile",
  "-ExecutionPolicy",
  "Bypass",
  "-Command",
  `Compress-Archive -Path '${tempDir}\\*' -DestinationPath '${zipPath}' -Force`,
];
execFileSync("powershell.exe", ps, { stdio: "inherit" });
fs.renameSync(zipPath, workbookPath);
fs.rmSync(tempDir, { recursive: true, force: true });
console.log(workbookPath);
