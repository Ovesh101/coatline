import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const PAGES = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/services", name: "services" },
  { path: "/contact", name: "contact" },
];

const browser = await chromium.launch();

async function shoot(path, name, viewport, isMobile = false, suffix = "") {
  const ctx = await browser.newContext({
    viewport,
    deviceScaleFactor: 2,
    isMobile,
    hasTouch: isMobile,
  });
  const page = await ctx.newPage();
  await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 45000 });
  await page.waitForTimeout(2000);

  if (isMobile && path === "/") {
    // Capture nav behaviors on mobile home
    await page.screenshot({ path: `/tmp/coatline-mobile-top.png`, fullPage: false });
    await page.evaluate(() => window.scrollTo({ top: 400, behavior: "instant" }));
    await page.waitForTimeout(700);
    await page.screenshot({ path: `/tmp/coatline-mobile-scrolled.png`, fullPage: false });
    // Open menu
    await page.click('button[aria-label="Open menu"]');
    await page.waitForTimeout(700);
    await page.screenshot({ path: `/tmp/coatline-mobile-menu.png`, fullPage: false });
    await page.keyboard.press("Escape");
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForTimeout(400);
  }

  const height = await page.evaluate(() => document.body.scrollHeight);
  const step = Math.floor(viewport.height * 0.7);
  for (let y = 0; y < height; y += step) {
    await page.evaluate((v) => window.scrollTo({ top: v, behavior: "instant" }), y);
    await page.waitForTimeout(450);
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(400);
  await page.screenshot({ path: `/tmp/coatline-${name}-${suffix}.png`, fullPage: true });
  await ctx.close();
}

for (const p of PAGES) {
  await shoot(p.path, p.name, { width: 1440, height: 900 }, false, "desktop");
  await shoot(p.path, p.name, { width: 390, height: 844 }, true, "mobile");
}

await browser.close();
console.log("ok");
