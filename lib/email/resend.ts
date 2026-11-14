import { Resend } from "resend";
import type { EmailClient, SendArgs } from "./client";
import { env } from "@/lib/env";

class ResendEmailClient implements EmailClient {
  private client: Resend | null;

  constructor() {
    this.client = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;
  }

  async send(args: SendArgs) {
    if (!this.client || !env.RESEND_FROM) {
      console.log("[email:stub]", { to: args.to, subject: args.subject });
      return { ok: true as const };
    }
    try {
      const { error } = await this.client.emails.send({
        from: env.RESEND_FROM,
        to: args.to,
        subject: args.subject,
        html: args.html,
        replyTo: args.replyTo,
      });
      if (error) return { ok: false as const, error: error.message };
      return { ok: true as const };
    } catch (e) {
      return { ok: false as const, error: e instanceof Error ? e.message : "send failed" };
    }
  }
}

export const email: EmailClient = new ResendEmailClient();
