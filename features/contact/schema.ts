import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().min(2, "Please share your name").max(80),
  phone: z
    .string()
    .regex(/^\+?[1-9]\d{7,14}$/, "Enter a valid phone number"),
  serviceType: z.enum(["interior", "exterior", "commercial", "textures", "waterproofing"]),
  area: z
    .union([z.string(), z.number()])
    .optional()
    .transform((v) => (v === "" || v === undefined ? undefined : Number(v)))
    .pipe(z.number().int().positive().optional()),
  city: z.string().min(2, "Please share your city"),
  message: z.string().max(1000).optional(),
  website: z.string().max(0).optional(), // honeypot
});

export type QuoteInput = z.input<typeof quoteSchema>;
export type QuoteParsed = z.output<typeof quoteSchema>;
