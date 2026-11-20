"use server";

import { quoteSchema, type QuoteParsed } from "./schema";
import { email } from "@/lib/email/resend";
import { env } from "@/lib/env";
import { site } from "@/data/site";

export type SubmitResult =
  | { ok: true }
  | { ok: false; errors: Record<string, string>; message?: string };

const SERVICE_LABEL: Record<QuoteParsed["serviceType"], string> = {
  interior: "Interior Painting",
  exterior: "Exterior Painting",
  commercial: "Shops & Offices",
  textures: "Textures & Finishes",
  waterproofing: "Waterproofing",
};

function row(label: string, value: string) {
  return `<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top;white-space:nowrap"><strong>${label}</strong></td><td style="padding:6px 0">${escape(value)}</td></tr>`;
}

function renderEmail(d: QuoteParsed) {
  const whatsapp = d.whatsappSame ? " (also on WhatsApp)" : "";
  return `
    <div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px">
      <h2 style="margin:0 0 4px;font-size:20px">New quote request</h2>
      <p style="margin:0 0 20px;color:#666;font-size:13px">From ${escape(d.name)}${d.locality ? " · " + escape(d.locality) : ""}</p>

      <table style="font-size:14px;border-collapse:collapse;width:100%">
        <tbody>
          ${row("Name", d.name)}
          ${row("Phone", d.phone + whatsapp)}
          ${row("Service", SERVICE_LABEL[d.serviceType])}
          ${d.locality ? row("Locality", d.locality) : ""}
          ${d.message ? `<tr><td colspan="2" style="padding:12px 0 4px"><strong>Message</strong></td></tr><tr><td colspan="2" style="padding:0 0 8px;white-space:pre-wrap">${escape(d.message)}</td></tr>` : ""}
        </tbody>
      </table>

      <p style="margin-top:28px;font-size:12px;color:#888">
        Submitted via ${site.url}
      </p>
    </div>`;
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
    subject: `New quote: ${parsed.data.name} — ${SERVICE_LABEL[parsed.data.serviceType]}`,
    html: renderEmail(parsed.data),
  });

  if (!result.ok) {
    console.error("[quote] email send failed", result.error);
    return { ok: false, errors: {}, message: "Could not send right now. Please WhatsApp us instead." };
  }

  return { ok: true };
}
