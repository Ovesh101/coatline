import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const results = [];
const pass = (name) => { results.push({ name, ok: true }); console.log("✓", name); };
const fail = (name, err) => { results.push({ name, ok: false, err }); console.log("✗", name, "—", err); };

const browser = await chromium.launch();

// --- Desktop checks ---
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
  page.on("console", (m) => { if (m.type() === "error") errors.push(`console.error: ${m.text()}`); });
  page.on("response", (r) => { if (r.status() >= 400) errors.push(`${r.status()} ${r.url()}`); });

  // Home
  await page.goto(BASE, { waitUntil: "networkidle", timeout: 45000 });
  const title = await page.title();
  title.toLowerCase().includes("coatline") ? pass("home: title") : fail("home: title", title);

  (await page.locator("text=A fresh coat.").count()) ? pass("home: hero headline") : fail("home: hero headline");
  (await page.locator("text=Every wall.").count()) ? pass("home: services heading") : fail("home: services");
  (await page.locator("text=Four steps, zero surprises.").count()) ? pass("home: process") : fail("home: process");
  (await page.locator("text=Drag to see the difference.").count()) ? pass("home: featured work") : fail("home: work");
  (await page.locator("text=Fifteen years of").count()) ? pass("home: testimonials") : fail("home: testimonials");
  (await page.locator("text=Everything you").count()) ? pass("home: FAQ") : fail("home: FAQ");

  // Scroll to counters and verify animated
  await page.evaluate(() => window.scrollTo({ top: 1100, behavior: "instant" }));
  await page.waitForTimeout(2500);
  const statsHtml = await page.content();
  statsHtml.includes("500") ? pass("home: counter animated") : fail("home: counter");

  // WhatsApp FAB has correct href
  const waHref = await page.locator('a[aria-label="Chat with us on WhatsApp"]').first().getAttribute("href");
  waHref?.startsWith("https://wa.me/919898276978") ? pass("whatsapp: wa.me link") : fail("whatsapp: wa.me", waHref);

  // Nav → About
  await page.goto(BASE + "/about", { waitUntil: "networkidle" });
  (await page.locator("text=Painted by hand,").count()) ? pass("/about: hero") : fail("/about: hero");
  (await page.locator("text=Thirty years, five chapters.").count()) ? pass("/about: timeline") : fail("/about: timeline");

  // Services
  await page.goto(BASE + "/services", { waitUntil: "networkidle" });
  (await page.locator("text=Five services.").count() && await page.locator("text=One standard.").count()) ? pass("/services: hero") : fail("/services: hero");
  const serviceCount = await page.locator("article h2").count();
  serviceCount >= 5 ? pass(`/services: 5 cards (${serviceCount})`) : fail(`/services: card count`, String(serviceCount));

  // Contact
  await page.goto(BASE + "/contact", { waitUntil: "networkidle" });
  (await page.locator("text=Let's talk").count()) ? pass("/contact: hero") : fail("/contact: hero");
  (await page.locator('form#quote-form').count()) ? pass("/contact: form present") : fail("/contact: form");

  // Submit form happy path
  await page.fill('input[name="name"]', "Test User");
  await page.fill('input[name="phone"]', "+919999999999");
  // Radix Select
  await page.click('button[aria-label="Service type"]');
  await page.waitForTimeout(400);
  await page.locator('[role="option"]:has-text("Exterior Painting")').click();
  await page.waitForTimeout(300);
  await page.fill('input[name="city"]', "Mumbai");
  await page.fill('textarea[name="message"]', "Testing from e2e");
  await page.click('button[type="submit"]');
  await page.waitForSelector("text=we'll call within 2 hours", { timeout: 10000 });
  pass("/contact: form submit success");

  // Form validation path
  await page.goto(BASE + "/contact", { waitUntil: "networkidle" });
  await page.fill('input[name="name"]', "A");
  await page.fill('input[name="phone"]', "bad");
  await page.fill('input[name="city"]', "M");
  await page.evaluate(() => {
    const form = document.querySelector("form");
    form?.querySelectorAll("input").forEach(i => i.removeAttribute("required"));
  });
  await page.click('button[type="submit"]');
  await page.waitForTimeout(1500);
  (await page.locator("text=Enter a valid phone number").count()) ? pass("/contact: validation error shown") : fail("/contact: validation");

  // Sitemap + robots
  const sm = await page.goto(BASE + "/sitemap.xml");
  sm?.status() === 200 ? pass("sitemap 200") : fail("sitemap", String(sm?.status()));
  const rb = await page.goto(BASE + "/robots.txt");
  rb?.status() === 200 ? pass("robots 200") : fail("robots", String(rb?.status()));

  // Security headers
  const resp = await page.goto(BASE + "/");
  const headers = resp?.headers() ?? {};
  headers["x-content-type-options"] === "nosniff" ? pass("header: X-Content-Type-Options") : fail("header: nosniff");
  headers["x-frame-options"] === "DENY" ? pass("header: X-Frame-Options") : fail("header: xfo");
  headers["referrer-policy"] ? pass("header: Referrer-Policy") : fail("header: referrer");

  if (errors.length) fail("desktop: console/network errors", errors.slice(0, 5).join(" | "));
  else pass("desktop: no console or 4xx/5xx");

  await ctx.close();
}

// --- Mobile checks ---
{
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  const page = await ctx.newPage();
  await page.goto(BASE, { waitUntil: "networkidle" });

  // Mobile menu
  await page.click('button[aria-label="Open menu"]');
  await page.waitForTimeout(600);
  (await page.locator("text=About").count()) ? pass("mobile: menu opens with links") : fail("mobile: menu");
  // Close via Escape (dialog-level); avoids multiple-match issue
  await page.keyboard.press("Escape");
  await page.waitForTimeout(500);

  // Hero visible
  const heroCount = await page.locator("h1", { hasText: "A fresh coat" }).count();
  heroCount > 0 ? pass("mobile: hero rendered") : fail("mobile: hero");
  await ctx.close();
}

await browser.close();

const failed = results.filter(r => !r.ok);
console.log(`\n${results.length - failed.length}/${results.length} passed`);
if (failed.length) {
  console.log("Failures:");
  for (const f of failed) console.log(" -", f.name, f.err ? `(${f.err})` : "");
  process.exit(1);
}
