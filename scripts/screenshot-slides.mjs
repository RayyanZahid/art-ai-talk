// Screenshot every slide on the production deck, at desktop and mobile sizes.
// Usage: node scripts/screenshot-slides.mjs [base-url]

import { chromium, devices } from "playwright";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const baseUrl = process.argv[2] || "https://art-ai-talk.vercel.app";
const totalSlides = 20;

const targets = [
  {
    label: "desktop",
    dir: ".screens",
    contextOpts: { viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 },
  },
  {
    label: "mobile",
    dir: ".screens-mobile",
    contextOpts: { ...devices["iPhone 13"] },
  },
];

const browser = await chromium.launch();

for (const target of targets) {
  const outDir = resolve(process.cwd(), target.dir);
  await mkdir(outDir, { recursive: true });
  const context = await browser.newContext(target.contextOpts);
  const page = await context.newPage();

  await page.goto(`${baseUrl}/#1`, { waitUntil: "networkidle" });
  await page.waitForTimeout(3000);

  for (let i = 1; i <= totalSlides; i++) {
    const file = resolve(outDir, `slide-${String(i).padStart(2, "0")}.png`);
    await page.screenshot({ path: file, fullPage: false });
    console.log(`✓ [${target.label}] ${i.toString().padStart(2)} → ${file}`);
    if (i < totalSlides) {
      await page.keyboard.press("ArrowRight");
      await page.waitForTimeout(2400);
    }
  }
  await context.close();
}

await browser.close();
console.log(`\nDone.`);
