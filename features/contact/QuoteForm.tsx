"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle, Check } from "lucide-react";
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
          Request a call <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </>
      )}
    </Button>
  );
}

function Field({
  label,
  name,
  error,
  hint,
  optional,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={name} className="block">
      <span className="mb-1.5 flex items-baseline justify-between text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-ink)]/60">
        <span>{label}</span>
        {optional && (
          <span className="font-medium normal-case tracking-normal text-[var(--color-ink)]/35">
            optional
          </span>
        )}
      </span>
      {children}
      {hint && !error && (
        <span className="mt-1 block text-[11px] text-[var(--color-ink)]/45">{hint}</span>
      )}
      {error && (
        <span className="mt-1.5 inline-flex items-center gap-1 text-xs text-red-600">
          <AlertCircle className="h-3.5 w-3.5" /> {error}
        </span>
      )}
    </label>
  );
}

const inputCls =
  "h-[50px] w-full rounded-lg border border-[var(--color-line)] bg-white px-4 text-[15px] text-[var(--color-ink)] placeholder:text-[var(--color-ink)]/40 outline-none transition-all focus:border-[var(--color-cta)] focus:ring-2 focus:ring-[var(--color-cta)]/20";

const textareaCls =
  "min-h-[96px] w-full resize-none rounded-lg border border-[var(--color-line)] bg-white px-4 py-3 text-[15px] text-[var(--color-ink)] placeholder:text-[var(--color-ink)]/40 outline-none transition-all focus:border-[var(--color-cta)] focus:ring-2 focus:ring-[var(--color-cta)]/20";

export function QuoteForm({ variant = "card" }: { variant?: "card" | "plain" }) {
  const [state, action] = useActionState<SubmitResult | null, FormData>(submitQuote, null);

  useEffect(() => {
    if (state?.ok) {
      const el = document.getElementById("quote-form") as HTMLFormElement | null;
      el?.reset();
      // Scroll the success card into view so the user actually sees it.
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
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
          Akil will call you personally to understand the work. Prefer to chat now? WhatsApp
          us using the button on the bottom-right.
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
          <div>
            <p className="font-display text-xl font-semibold leading-tight text-[var(--color-ink)]">
              Request a call
            </p>
            <p className="mt-1 text-[13px] text-[var(--color-ink)]/60">
              Takes 30 seconds. Akil calls you back personally.
            </p>
          </div>
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

        <Field label="Full name" name="name" error={errors.name}>
          <input
            id="name"
            name="name"
            placeholder="Your full name"
            className={inputCls}
            autoComplete="name"
            required
          />
        </Field>

        <Field label="Phone" name="phone" error={errors.phone} hint="We'll never share this.">
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98982 76978"
            className={inputCls}
            autoComplete="tel"
            required
          />
        </Field>

        <label className="group inline-flex cursor-pointer items-center gap-3 text-[13px] text-[var(--color-ink)]/80 has-[:checked]:text-[var(--color-ink)]">
          <input
            type="checkbox"
            name="whatsappSame"
            defaultChecked
            className="peer sr-only"
          />
          <span
            aria-hidden
            className="inline-flex h-5 w-5 flex-none items-center justify-center rounded-md border border-[var(--color-line)] bg-white transition-all group-hover:border-[var(--color-cta)]/60 peer-checked:border-[var(--color-cta)] peer-checked:bg-[var(--color-cta)] peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--color-cta)]/30"
          >
            <Check
              className="h-3.5 w-3.5 scale-0 text-white opacity-0 transition-all group-has-[:checked]:scale-100 group-has-[:checked]:opacity-100"
              strokeWidth={3}
            />
          </span>
          <span className="leading-snug">
            This number is on WhatsApp
          </span>
        </label>

        <Field label="Service" name="serviceType">
          <Select
            name="serviceType"
            defaultValue="interior"
            ariaLabel="Service type"
            options={services.map((s) => ({ value: s.slug, label: s.title }))}
          />
        </Field>

        <Field
          label="Locality"
          name="locality"
          optional
          hint="e.g. Nani Daman, Devka, Vapi — helps us plan the visit."
        >
          <input
            id="locality"
            name="locality"
            placeholder="Which part of town?"
            className={inputCls}
          />
        </Field>

        <Field label="Anything else" name="message" optional>
          <textarea
            id="message"
            name="message"
            rows={3}
            placeholder="A short note — size of the place, timeline, anything we should know."
            className={textareaCls}
          />
        </Field>

        {generalError && (
          <p className="inline-flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            <AlertCircle className="h-4 w-4" /> {generalError}
          </p>
        )}

        <div className="mt-2 flex flex-col-reverse items-stretch justify-between gap-4 border-t border-[var(--color-line)] pt-5 sm:flex-row sm:items-center">
          <p className="text-[11px] text-[var(--color-ink)]/50">
            By submitting you agree to be contacted about this request. No spam, ever.
          </p>
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
