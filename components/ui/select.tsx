"use client";

import * as React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

type Option = { value: string; label: string };

export function Select({
  name,
  defaultValue,
  options,
  placeholder = "Select…",
  ariaLabel,
}: {
  name: string;
  defaultValue?: string;
  options: Option[];
  placeholder?: string;
  ariaLabel?: string;
}) {
  const [value, setValue] = React.useState<string>(defaultValue ?? "");

  return (
    <>
      {/* Hidden input — Radix Select is JS-only; surface value to form submission */}
      <input type="hidden" name={name} value={value} />
      <RadixSelect.Root value={value} onValueChange={setValue}>
        <RadixSelect.Trigger
          aria-label={ariaLabel ?? name}
          className={cn(
            "flex w-full items-center justify-between rounded-lg border border-[var(--color-line)] bg-white px-4 py-3 text-left text-[var(--color-ink)] outline-none transition-all",
            "focus:border-[var(--color-cta)] focus:ring-2 focus:ring-[var(--color-cta)]/20",
            "data-[state=open]:border-[var(--color-cta)] data-[state=open]:ring-2 data-[state=open]:ring-[var(--color-cta)]/20",
          )}
        >
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon className="text-[var(--color-ink)]/50">
            <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content
            position="popper"
            sideOffset={6}
            className="z-[60] max-h-72 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-xl border border-[var(--color-line)] bg-white shadow-xl"
          >
            <RadixSelect.Viewport className="p-1.5">
              {options.map((o) => (
                <RadixSelect.Item
                  key={o.value}
                  value={o.value}
                  className={cn(
                    "relative flex cursor-pointer select-none items-center gap-2 rounded-md px-3 py-2.5 text-[15px] text-[var(--color-ink)] outline-none",
                    "data-[highlighted]:bg-[var(--color-sand)]/35 data-[state=checked]:bg-[var(--color-cta)]/10 data-[state=checked]:text-[var(--color-cta)]",
                  )}
                >
                  <RadixSelect.ItemText>{o.label}</RadixSelect.ItemText>
                  <RadixSelect.ItemIndicator className="ml-auto">
                    <Check className="h-4 w-4" />
                  </RadixSelect.ItemIndicator>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </>
  );
}
