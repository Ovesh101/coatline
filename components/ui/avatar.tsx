import Image from "next/image";
import { cn } from "@/lib/utils/cn";

/**
 * Avatar — renders a photo if `src` is provided, otherwise a branded
 * monogram (initials on a warm sand background). Use for team/founder bylines.
 */
export function Avatar({
  src,
  alt,
  name,
  size = 44,
  className,
  priority,
}: {
  src?: string;
  alt?: string;
  name: string;
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  const initials = getInitials(name);

  if (src) {
    return (
      <div
        className={cn(
          "relative flex-none overflow-hidden rounded-full ring-2 ring-[var(--color-bg)]",
          className,
        )}
        style={{ width: size, height: size }}
      >
        <Image
          src={src}
          alt={alt ?? name}
          fill
          sizes={`${size}px`}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      aria-label={name}
      role="img"
      className={cn(
        "flex-none select-none rounded-full ring-2 ring-[var(--color-bg)]",
        "flex items-center justify-center",
        "bg-gradient-to-br from-[var(--color-sand)] to-[var(--color-cta)]/40",
        "font-display font-bold text-[var(--color-ink)]",
        className,
      )}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.4,
        letterSpacing: "-0.02em",
      }}
    >
      {initials}
    </div>
  );
}

function getInitials(name: string): string {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() ?? "").join("");
}
