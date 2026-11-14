"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { submitQuote, type SubmitResult } from "./submit";
import { services } from "@/data/services";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="md" className="group h-12 px-7">
      {pending ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" /> Sending…
        </>
      ) : (
        <>
          Submit quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </>
      )}
    </Button>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={name} className="block">
      <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-ink)]/60">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 inline-flex items-center gap-1 text-xs text-red-600">
          <AlertCircle className="h-3.5 w-3.5" /> {error}
        </span>
      )}
    </label>
  );
}

const inputCls =
  "w-full rounded-lg border border-[var(--color-line)] bg-white px-4 py-3 text-[var(--color-ink)] placeholder:text-[var(--color-ink)]/40 outline-none transition-all focus:border-[var(--color-cta)] focus:ring-2 focus:ring-[var(--color-cta)]/20";

export function QuoteForm({ variant = "card" }: { variant?: "card" | "plain" }) {
  const [state, action] = useActionState<SubmitResult | null, FormData>(submitQuote, null);

  useEffect(() => {
    if (state?.ok) {
      const el = document.getElementById("quote-form") as HTMLFormElement | null;
      el?.reset();
    }
  }, [state]);

  if (state?.ok) {
    return (
      <div
        className={cn(
          "rounded-2xl p-8 text-center",
          variant === "card" ? "bg-white shadow-lg ring-1 ring-[var(--color-line)]" : "",
        )}
      >
        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-cta)]/15">
          <CheckCircle2 className="h-8 w-8 text-[var(--color-cta)]" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-[var(--color-ink)]">
          Thanks — we&apos;ll call within 2 hours.
        </h3>
        <p className="mt-2 text-sm text-[var(--color-ink)]/70">
          Prefer to chat now? WhatsApp us using the button on the bottom-right.
        </p>
      </div>
    );
  }

  const errors = state && !state.ok ? state.errors : {};
  const generalError = state && !state.ok ? state.message : undefined;

  return (
    <div
      className={cn(
        variant === "card"
          ? "rounded-2xl bg-white p-6 shadow-lg ring-1 ring-[var(--color-line)] md:p-8"
          : "",
      )}
    >
      {variant === "card" && (
        <div className="mb-6 flex items-start justify-between gap-3">
          <p className="font-display text-lg font-semibold leading-tight text-[var(--color-ink)]">
            Request a free quote
          </p>
          <span className="inline-flex flex-none items-center gap-1.5 whitespace-nowrap rounded-full bg-[var(--color-cta)]/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-cta)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-cta)]" />
            2-hour reply
          </span>
        </div>
      )}

      <form id="quote-form" action={action} className="flex flex-col gap-4">
        <input
          name="website"
          type="text"
          tabIndex={-1}
          aria-hidden
          className="absolute -left-[9999px]"
          autoComplete="off"
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Name" name="name" error={errors.name}>
            <input id="name" name="name" placeholder="Your full name" className={inputCls} required />
          </Field>
          <Field label="Phone" name="phone" error={errors.phone}>
            <input id="phone" name="phone" placeholder="+91 98982 76978" className={inputCls} required />
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Service" name="serviceType">
            <Select
              name="serviceType"
              defaultValue="interior"
              ariaLabel="Service type"
              options={services.map((s) => ({ value: s.slug, label: s.title }))}
            />
          </Field>
          <Field label="Area (sqft) · optional" name="area">
            <input id="area" name="area" type="number" min={1} placeholder="e.g. 1200" className={inputCls} />
          </Field>
        </div>

        <Field label="City" name="city" error={errors.city}>
          <input id="city" name="city" defaultValue="Mumbai" className={inputCls} required />
        </Field>

        <Field label="Anything else · optional" name="message">
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="Tell us a bit more — timeline, accent walls, special finishes…"
            className={cn(inputCls, "resize-none")}
          />
        </Field>

        {generalError && (
          <p className="inline-flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            <AlertCircle className="h-4 w-4" /> {generalError}
          </p>
        )}

        <div className="mt-2 flex flex-col-reverse items-stretch justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-[11px] text-[var(--color-ink)]/50">
            By submitting you agree to our privacy policy. No spam, ever.
          </p>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
