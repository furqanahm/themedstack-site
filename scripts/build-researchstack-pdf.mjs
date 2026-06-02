import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceDir = path.join(root, "content", "researchstack-starter");
const htmlOut = path.join(sourceDir, "ResearchStack-Starter-Draft.html");

const orderedFiles = [
  "README.md",
  "01-product-positioning.md",
  "02-30-day-research-sprint.md",
  "03-project-type-playbook.md",
  "04-australian-ethics-qi-audit-guide.md",
  "05-literature-search-starter.md",
  "06-output-and-publication-roadmap.md",
  "07-ai-prompt-vault.md",
  "scripts/research-outreach-email-scripts.md",
  "scripts/supervisor-meeting-scripts.md",
  "scripts/follow-up-and-rescue-scripts.md",
  "templates/case-report-template.md",
  "templates/audit-qi-project-template.md",
  "templates/abstract-template.md",
  "templates/manuscript-section-template.md",
  "trackers/research_pipeline.csv",
  "trackers/supervisor_crm.csv",
  "trackers/literature_matrix.csv",
  "trackers/conference_journal_tracker.csv",
  "trackers/authorship_contribution_tracker.csv",
  "trackers/data_extraction_template.csv",
  "08-market-research-and-offer-notes.md",
  "09-sales-page-draft.md",
  "10-content-seeds.md",
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function inlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function parseMarkdownTable(lines, startIndex) {
  const rows = [];
  let i = startIndex;
  while (i < lines.length && /^\s*\|.*\|\s*$/.test(lines[i])) {
    rows.push(lines[i]);
    i += 1;
  }

  if (rows.length < 2 || !/^\s*\|?\s*:?-{3,}:?\s*\|/.test(rows[1])) {
    return null;
  }

  const htmlRows = rows
    .filter((_, index) => index !== 1)
    .map((row, index) => {
      const cells = row
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => inlineMarkdown(cell.trim()));
      const tag = index === 0 ? "th" : "td";
      return `<tr>${cells.map((cell) => `<${tag}>${cell}</${tag}>`).join("")}</tr>`;
    });

  return {
    html: `<table>${htmlRows.join("")}</table>`,
    nextIndex: i,
  };
}

function renderMarkdown(markdown, fileLabel) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let paragraph = [];
  let listItems = [];
  let orderedItems = [];
  let inCode = false;
  let codeLines = [];

  function flushParagraph() {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  }

  function flushList() {
    if (listItems.length) {
      html.push(`<ul>${listItems.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
      listItems = [];
    }
    if (orderedItems.length) {
      html.push(`<ol>${orderedItems.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ol>`);
      orderedItems = [];
    }
  }

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];

    if (line.trim().startsWith("```")) {
      flushParagraph();
      flushList();
      if (inCode) {
        html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
        inCode = false;
      } else {
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      continue;
    }

    const table = parseMarkdownTable(lines, i);
    if (table) {
      flushParagraph();
      flushList();
      html.push(table.html);
      i = table.nextIndex - 1;
      continue;
    }

    const heading = /^(#{1,4})\s+(.+)$/.exec(line);
    if (heading) {
      flushParagraph();
      flushList();
      const level = heading[1].length;
      const text = heading[2].trim();
      const id = slugify(`${fileLabel}-${text}`);
      html.push(`<h${Math.min(level, 4)} id="${id}">${inlineMarkdown(text)}</h${Math.min(level, 4)}>`);
      continue;
    }

    const bullet = /^\s*-\s+(.+)$/.exec(line);
    if (bullet) {
      flushParagraph();
      orderedItems = [];
      listItems.push(bullet[1]);
      continue;
    }

    const ordered = /^\s*\d+\.\s+(.+)$/.exec(line);
    if (ordered) {
      flushParagraph();
      listItems = [];
      orderedItems.push(ordered[1]);
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      flushList();
      continue;
    }

    paragraph.push(line.trim());
  }

  flushParagraph();
  flushList();
  return html.join("\n");
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quote = false;
  const input = text.replace(/\r\n/g, "\n");

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];
    const next = input[i + 1];

    if (char === '"' && quote && next === '"') {
      cell += '"';
      i += 1;
    } else if (char === '"') {
      quote = !quote;
    } else if (char === "," && !quote) {
      row.push(cell);
      cell = "";
    } else if (char === "\n" && !quote) {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  if (cell.length || row.length) {
    row.push(cell);
    rows.push(row);
  }

  return rows.filter((r) => r.some((c) => c.trim()));
}

function renderCsv(text) {
  const rows = parseCsv(text);
  if (!rows.length) return "";

  const [header, ...body] = rows;
  return `
    <div class="table-scroll">
      <table>
        <tr>${header.map((cell) => `<th>${escapeHtml(cell)}</th>`).join("")}</tr>
        ${body
          .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`)
          .join("")}
      </table>
    </div>
  `;
}

const sections = orderedFiles.map((relativeFile) => {
  const absoluteFile = path.join(sourceDir, relativeFile);
  const body = fs.readFileSync(absoluteFile, "utf8");
  const title = relativeFile
    .replaceAll("\\", "/")
    .replace(".md", "")
    .replace(".csv", "")
    .replace(/^\d+-/, "")
    .replaceAll("-", " ")
    .replaceAll("_", " ");

  const content = relativeFile.endsWith(".csv")
    ? renderCsv(body)
    : renderMarkdown(body, relativeFile);

  return { relativeFile, title, content };
});

const toc = sections
  .map(
    (section, index) =>
      `<li><span>${String(index + 1).padStart(2, "0")}</span>${escapeHtml(section.title)}</li>`,
  )
  .join("");

const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>ResearchStack Starter Draft</title>
  <style>
    @page {
      size: A4;
      margin: 18mm 16mm;
    }

    :root {
      color: #152018;
      background: #fbfaf5;
      font-family: Inter, Arial, sans-serif;
      line-height: 1.48;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background: #fbfaf5;
      color: #152018;
      font-size: 10.5pt;
    }

    .cover {
      min-height: 250mm;
      padding: 18mm 0 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      page-break-after: always;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: #19b878;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-size: 9pt;
    }

    .mark {
      width: 28px;
      height: 28px;
      border-radius: 7px;
      background: #0f1519;
      border: 1px solid #254c3d;
      display: inline-block;
      position: relative;
    }

    .mark::before,
    .mark::after {
      content: "";
      position: absolute;
      left: 7px;
      right: 7px;
      height: 3px;
      background: #5ee4a2;
      border-radius: 99px;
    }

    .mark::before { top: 9px; }
    .mark::after { top: 16px; }

    .cover h1 {
      margin: 34mm 0 0;
      max-width: 165mm;
      font-size: 42pt;
      line-height: 0.95;
      letter-spacing: -0.02em;
      color: #0f1519;
    }

    .cover .subtitle {
      margin-top: 10mm;
      max-width: 145mm;
      font-size: 15pt;
      line-height: 1.45;
      color: #38453e;
    }

    .cover-card {
      margin-top: 20mm;
      border: 1px solid #cbe6d8;
      border-radius: 16px;
      padding: 10mm;
      background: linear-gradient(135deg, #e9f8ef, #ffffff);
    }

    .cover-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 5mm;
      margin-top: 7mm;
    }

    .pill {
      border: 1px solid #c7ded1;
      border-radius: 999px;
      padding: 3mm 4mm;
      color: #176b48;
      font-size: 9pt;
      font-weight: 700;
      background: #f8fff9;
    }

    .footer-note {
      border-top: 1px solid #dce8df;
      padding-top: 6mm;
      color: #607068;
      font-size: 9pt;
    }

    .toc {
      page-break-after: always;
    }

    .toc h2 {
      font-size: 25pt;
      margin: 0 0 9mm;
    }

    .toc ol {
      list-style: none;
      padding: 0;
      margin: 0;
      columns: 2;
      column-gap: 12mm;
    }

    .toc li {
      break-inside: avoid;
      padding: 2.2mm 0;
      border-bottom: 1px solid #e4ebe6;
      color: #223129;
    }

    .toc span {
      color: #19a96f;
      font-weight: 800;
      margin-right: 4mm;
      font-family: Consolas, monospace;
    }

    section {
      page-break-before: always;
    }

    section:first-of-type {
      page-break-before: auto;
    }

    .file-label {
      color: #19a96f;
      font-family: Consolas, monospace;
      font-size: 8pt;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 5mm;
    }

    h1 {
      color: #0f1519;
      font-size: 24pt;
      line-height: 1.05;
      margin: 0 0 8mm;
      letter-spacing: -0.01em;
    }

    h2 {
      color: #176b48;
      font-size: 17pt;
      margin: 10mm 0 3.5mm;
      page-break-after: avoid;
    }

    h3 {
      color: #152018;
      font-size: 12.5pt;
      margin: 7mm 0 2.5mm;
      page-break-after: avoid;
    }

    h4 {
      color: #435148;
      font-size: 10.5pt;
      margin: 5mm 0 2mm;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      page-break-after: avoid;
    }

    p {
      margin: 0 0 3.5mm;
    }

    ul, ol {
      margin: 0 0 4mm 6mm;
      padding-left: 5mm;
    }

    li {
      margin: 1.4mm 0;
    }

    a {
      color: #0f8f61;
      text-decoration: none;
      word-break: break-word;
    }

    code {
      font-family: Consolas, monospace;
      background: #eef5ef;
      border: 1px solid #d8e8dc;
      border-radius: 4px;
      padding: 0 3px;
      font-size: 9pt;
    }

    pre {
      white-space: pre-wrap;
      background: #10161a;
      color: #d9fff0;
      border-radius: 10px;
      padding: 5mm;
      font-size: 8.7pt;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin: 4mm 0 6mm;
      font-size: 8.5pt;
      page-break-inside: auto;
    }

    tr {
      page-break-inside: avoid;
    }

    th {
      background: #123326;
      color: #ffffff;
      text-align: left;
      font-weight: 800;
      padding: 2.2mm;
      border: 1px solid #264b3c;
    }

    td {
      vertical-align: top;
      padding: 2.1mm;
      border: 1px solid #d8e4dc;
      background: #ffffff;
    }

    .table-scroll {
      overflow: visible;
    }

    .note {
      border-left: 4px solid #22c982;
      background: #ecfaf1;
      padding: 4mm 5mm;
      border-radius: 10px;
      margin: 6mm 0;
    }

    .section-shell {
      border-top: 3px solid #19b878;
      padding-top: 6mm;
    }
  </style>
</head>
<body>
  <main>
    <div class="cover">
      <div>
        <div class="brand"><span class="mark"></span>The MedStack</div>
        <h1>ResearchStack Starter</h1>
        <p class="subtitle">A practical research launch system for Australian medical students who want to find projects, contact supervisors, and build CV-ready research outputs without guessing.</p>
        <div class="cover-card">
          <strong>Founder draft</strong>
          <p>This compiled PDF includes the full working product source: guides, scripts, templates, tracker previews, sales notes, and content seeds.</p>
          <div class="cover-grid">
            <span class="pill">Supervisor outreach</span>
            <span class="pill">Audit / QI starter</span>
            <span class="pill">Literature search</span>
            <span class="pill">CV evidence</span>
            <span class="pill">Publication roadmap</span>
            <span class="pill">AI prompt vault</span>
          </div>
        </div>
      </div>
      <div class="footer-note">Education and organisation support only. Students must check local university, hospital, supervisor, governance, and HREC requirements.</div>
    </div>

    <div class="toc">
      <h2>Contents</h2>
      <ol>${toc}</ol>
    </div>

    ${sections
      .map(
        (section) => `
          <section>
            <div class="section-shell">
              <div class="file-label">${escapeHtml(section.relativeFile)}</div>
              ${section.content}
            </div>
          </section>
        `,
      )
      .join("")}
  </main>
</body>
</html>`;

fs.writeFileSync(htmlOut, html, "utf8");
console.log(htmlOut);
