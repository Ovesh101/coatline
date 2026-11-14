import { chromium } from "playwright";

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.waitForTimeout(1000);
// Scroll just enough to trigger stats inView, then screenshot mid-animation
await page.evaluate(() => window.scrollTo({ top: 700, behavior: "instant" }));
await page.waitForTimeout(400);
await page.screenshot({ path: "/tmp/counter-mid.png", clip: { x: 0, y: 0, width: 2880, height: 900 } });
await page.waitForTimeout(1600);
await page.screenshot({ path: "/tmp/counter-done.png", clip: { x: 0, y: 0, width: 2880, height: 900 } });
await browser.close();
console.log("ok");
