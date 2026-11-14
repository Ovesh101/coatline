import { chromium } from "playwright";

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();
await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
await page.waitForTimeout(1000);
// Scroll so Process section is roughly mid-view (section is after hero + stats)
await page.evaluate(() => document.getElementById("process")?.scrollIntoView({ block: "center" }));
await page.waitForTimeout(1500);
await page.screenshot({ path: "/tmp/process-desktop.png", fullPage: false });
await browser.close();
console.log("ok");
