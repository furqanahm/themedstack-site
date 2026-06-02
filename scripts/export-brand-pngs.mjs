import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";

const root = path.resolve("public", "brand");
const chrome = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const files = [
  {
    svg: "medstack-icon.svg",
    html: "medstack-icon-export.html",
    png: "medstack-icon-1024-clean.png",
    width: 1024,
    height: 1024,
  },
  {
    svg: "medstack-wordmark.svg",
    html: "medstack-wordmark-export.html",
    png: "medstack-wordmark-1600x420-clean.png",
    width: 1600,
    height: 420,
  },
];

for (const item of files) {
  const svg = fs.readFileSync(path.join(root, item.svg), "utf8");
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;width:${item.width}px;height:${item.height}px;overflow:hidden;background:transparent}svg{display:block;width:${item.width}px;height:${item.height}px}</style></head><body>${svg}</body></html>`;
  const htmlPath = path.join(root, item.html);
  const pngPath = path.join(root, item.png);
  fs.writeFileSync(htmlPath, html, "utf8");
  const result = spawnSync(chrome, [
    "--headless=new",
    "--disable-gpu",
    "--default-background-color=00000000",
    `--screenshot=${pngPath}`,
    `--window-size=${item.width},${item.height}`,
    pathToFileURL(htmlPath).href,
  ], { stdio: "inherit" });
  if (result.status !== 0) {
    throw new Error(`Failed to export ${item.png}`);
  }
}
