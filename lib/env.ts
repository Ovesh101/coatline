import { z } from "zod";

const schema = z.object({
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM: z.string().optional(),
  NOTIFY_EMAIL: z.string().email().optional(),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
  console.error("[env] invalid environment variables:", parsed.error.flatten().fieldErrors);
  throw new Error("Invalid environment variables");
}

export const env = parsed.data;
export const isProd = env.NODE_ENV === "production";
