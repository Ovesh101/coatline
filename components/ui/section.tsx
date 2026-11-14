import { cn } from "@/lib/utils/cn";

type Tone = "default" | "dark" | "sand";

export function Section({
  children,
  tone = "default",
  className,
  id,
  as: Tag = "section",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  as?: React.ElementType;
}) {
  const bg =
    tone === "dark"
      ? "bg-[var(--color-frame)] text-[var(--color-bg)]"
      : tone === "sand"
        ? "bg-[var(--color-sand)]/30 text-[var(--color-ink)]"
        : "bg-transparent text-[var(--color-ink)]";
  return (
    <Tag
      id={id}
      className={cn(
        "relative w-full",
        bg,
        "py-[var(--section-pad-y)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("mx-auto w-full px-5 md:px-10", className)}
      style={{ maxWidth: "var(--container-max)" }}
    >
      {children}
    </div>
  );
}

export { Eyebrow } from "./typography";
