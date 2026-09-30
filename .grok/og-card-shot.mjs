import { readFileSync, writeFileSync, copyFileSync } from "node:fs";
import { chromium } from "playwright";

const variants = [
  { bg: "/workspace/public/images/about-interior.jpg", out: "/workspace/.grok/og-card-interior.png" },
  { bg: "/workspace/public/images/hero-set.jpg", out: "/workspace/.grok/og-card-grill.png" },
  { bg: "/workspace/public/images/hero-galbi.jpg", out: "/workspace/.grok/og-card-galbi.png" },
];

const template = readFileSync("/workspace/.grok/og-card.html", "utf8");
const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

try {
  for (const v of variants) {
    const htmlPath = "/workspace/.grok/og-card-render.html";
    writeFileSync(htmlPath, template.replace("FILE", `file://${v.bg}`));
    const page = await browser.newPage({
      viewport: { width: 1200, height: 630 },
      deviceScaleFactor: 1,
    });
    await page.goto(`file://${htmlPath}`, { waitUntil: "load", timeout: 15000 });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(200);
    await page.screenshot({ path: v.out, type: "png", clip: { x: 0, y: 0, width: 1200, height: 630 } });
    await page.close();
    console.log("wrote", v.out);
  }
} finally {
  await browser.close();
}
