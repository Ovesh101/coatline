"use server";

import { quoteSchema, type QuoteParsed } from "./schema";
import { email } from "@/lib/email/resend";
import { env } from "@/lib/env";
import { site } from "@/data/site";

export type SubmitResult =
  | { ok: true }
  | { ok: false; errors: Record<string, string>; message?: string };

function renderEmail(d: QuoteParsed) {
  return `
    <h2 style="font-family:system-ui;margin:0 0 16px">New quote request</h2>
    <table style="font-family:system-ui;font-size:14px;border-collapse:collapse" cellpadding="8">
      <tr><td><strong>Name</strong></td><td>${escape(d.name)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escape(d.phone)}</td></tr>
      <tr><td><strong>City</strong></td><td>${escape(d.city)}</td></tr>
      <tr><td><strong>Service</strong></td><td>${escape(d.serviceType)}</td></tr>
      ${d.area ? `<tr><td><strong>Area</strong></td><td>${d.area} sqft</td></tr>` : ""}
      ${d.message ? `<tr><td valign="top"><strong>Message</strong></td><td>${escape(d.message)}</td></tr>` : ""}
    </table>
    <p style="font-family:system-ui;font-size:12px;color:#666;margin-top:24px">
      Submitted via ${site.url}
    </p>`;
}

function escape(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] ?? c));
}

export async function submitQuote(_: SubmitResult | null, formData: FormData): Promise<SubmitResult> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = quoteSchema.safeParse(raw);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path.join(".");
      if (!errors[key]) errors[key] = issue.message;
    }
    return { ok: false, errors };
  }

  if (parsed.data.website && parsed.data.website.length > 0) {
    return { ok: true };
  }

  const to = env.NOTIFY_EMAIL ?? site.email;
  const result = await email.send({
    to,
    subject: `New quote from ${parsed.data.name} — ${parsed.data.serviceType}`,
    html: renderEmail(parsed.data),
    replyTo: parsed.data.phone.includes("@") ? parsed.data.phone : undefined,
  });

  if (!result.ok) {
    console.error("[quote] email send failed", result.error);
    return { ok: false, errors: {}, message: "Could not send right now. Please WhatsApp us instead." };
  }

  return { ok: true };
}
