export type SendArgs = {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
};

export interface EmailClient {
  send(args: SendArgs): Promise<{ ok: true } | { ok: false; error: string }>;
}
