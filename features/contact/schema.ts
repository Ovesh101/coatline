import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().min(2, "Please share your name").max(80),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{7,14}$/, "Enter a valid phone number (with country code)"),
  whatsappSame: z
    .union([z.literal("on"), z.literal("off"), z.undefined()])
    .optional()
    .transform((v) => v === "on"),

  serviceType: z.enum(["interior", "exterior", "commercial", "textures", "waterproofing"]),
  locality: z.string().max(120).optional(),
  message: z.string().max(1000).optional(),

  website: z.string().max(0).optional(), // honeypot
});

export type QuoteParsed = z.output<typeof quoteSchema>;
