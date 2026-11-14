import { chromium } from "playwright";

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
const page = await ctx.newPage();

// Contact page — open the Radix Select
await page.goto("http://localhost:3000/contact", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);
await page.screenshot({ path: "/tmp/contact-top.png", fullPage: false });

await page.click('button[aria-label="Service type"]');
await page.waitForTimeout(600);
await page.screenshot({ path: "/tmp/contact-select-open.png", fullPage: false });

// Close and hover a contact row
await page.keyboard.press("Escape");
await page.waitForTimeout(300);
await page.locator('a:has-text("WhatsApp")').first().hover();
await page.waitForTimeout(400);
await page.screenshot({ path: "/tmp/contact-hover.png", fullPage: false });

// Services page — hover 6th tile
await page.goto("http://localhost:3000/#services", { waitUntil: "networkidle" });
await page.waitForTimeout(1000);
await page.evaluate(() => document.querySelector("#services")?.scrollIntoView());
await page.waitForTimeout(800);
await page.screenshot({ path: "/tmp/services-grid.png", fullPage: false });
await page.locator('a:has-text("Something specific?")').hover();
await page.waitForTimeout(500);
await page.screenshot({ path: "/tmp/services-grid-hover.png", fullPage: false });

await browser.close();
console.log("ok");
