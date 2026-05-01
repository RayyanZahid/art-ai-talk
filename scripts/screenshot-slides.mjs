// Screenshot every slide on the production deck.
// Usage: node scripts/screenshot-slides.mjs [base-url]

import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const baseUrl = process.argv[2] || "https://art-ai-talk.vercel.app";
const totalSlides = 20;
const outDir = resolve(process.cwd(), ".screens");
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1600, height: 900 },
  deviceScaleFactor: 1,
});
const page = await context.newPage();

// Single goto, then drive the deck via its own keyboard nav. This way each
// frame is a real on-stage transition, with hash + animations honored.
await page.goto(`${baseUrl}/#1`, { waitUntil: "networkidle" });
await page.waitForTimeout(3000);

for (let i = 1; i <= totalSlides; i++) {
  const file = resolve(outDir, `slide-${String(i).padStart(2, "0")}.png`);
  await page.screenshot({ path: file, fullPage: false });
  console.log(`✓ ${i.toString().padStart(2)} → ${file}`);
  if (i < totalSlides) {
    await page.keyboard.press("ArrowRight");
    await page.waitForTimeout(2400);
  }
}

await browser.close();
console.log(`\nDone. ${totalSlides} screenshots in ${outDir}`);
