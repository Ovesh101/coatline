import { cn } from "@/lib/utils/cn";

/**
 * Small-caps overline — the only typography primitive used across sections.
 * All section titles use raw h2 inline because title scale varies per section;
 * standardising them would hide meaningful context differences.
 */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-body text-[11px] font-semibold uppercase tracking-[0.18em]",
        "text-[var(--color-ink)]/55",
        className,
      )}
    >
      {children}
    </p>
  );
}
