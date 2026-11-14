"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { Section, Container, Eyebrow } from "@/components/ui/section";
import { faqs } from "@/data/faqs";

export function Faq() {
  return (
    <Section id="faq" tone="sand">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>Questions</Eyebrow>
            <h2
              className="mt-3 font-display font-bold tracking-tight text-[var(--color-ink)]"
              style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
            >
              Everything you want to know before saying yes.
            </h2>
            <p className="mt-6 max-w-sm text-[var(--color-ink)]/70">
              Didn&apos;t find your question? WhatsApp us — we usually reply in under an hour.
            </p>
          </div>

          <div className="md:col-span-7">
            <Accordion.Root type="single" collapsible className="divide-y divide-[var(--color-ink)]/10">
              {faqs.map((f) => (
                <Accordion.Item key={f.id} value={f.id} className="group py-2">
                  <Accordion.Header>
                    <Accordion.Trigger className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-semibold text-[var(--color-ink)] transition-colors hover:text-[var(--color-cta)] md:text-xl">
                      {f.q}
                      <Plus
                        aria-hidden
                        className="h-5 w-5 flex-none transition-transform duration-300 group-data-[state=open]:rotate-45"
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-[acc-down_220ms_ease-out] data-[state=closed]:animate-[acc-up_180ms_ease-in]">
                    <p className="pb-6 pr-10 text-[15px] leading-relaxed text-[var(--color-ink)]/75">
                      {f.a}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </Container>
    </Section>
  );
}
