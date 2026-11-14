import Image from "next/image";

const avatars = [
  "https://i.pravatar.cc/80?img=1",
  "https://i.pravatar.cc/80?img=5",
  "https://i.pravatar.cc/80?img=9",
];

export function SocialProofPill({ count = "1.5k", label = "Happy clients" }: { count?: string; label?: string }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full bg-[var(--color-sand)]/80 pr-5 pl-2 py-2 shadow-sm">
      <div className="flex -space-x-2">
        {avatars.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-full border-2 border-[var(--color-bg)] object-cover"
          />
        ))}
      </div>
      <div className="text-left leading-tight">
        <p className="font-display text-sm font-bold text-[var(--color-ink)]">{count}</p>
        <p className="text-[11px] text-[var(--color-ink)]/70">{label}</p>
      </div>
    </div>
  );
}
