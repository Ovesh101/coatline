import { Avatar } from "@/components/ui/avatar";
import { site } from "@/data/site";

export function SocialProofPill() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-[var(--color-sand)]/80 py-1.5 pl-1.5 pr-5 shadow-sm ring-1 ring-black/[0.03]">
      <Avatar
        name={site.founder}
        src={site.founderPhoto.src || undefined}
        alt={site.founderPhoto.alt}
        size={44}
      />
      <div className="text-left leading-tight">
        <p className="font-display text-sm font-bold text-[var(--color-ink)]">
          Run personally by {site.founder}
        </p>
        <p className="text-[11px] text-[var(--color-ink)]/70">
          {site.founderYears} years painting · {site.address.city}
        </p>
      </div>
    </div>
  );
}
