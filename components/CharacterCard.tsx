import Link from "next/link";
import type { Character } from "@/data/characters";

function getInitials(name: string): string {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <Link href={`/characters/${character.slug}`}>
      <div className="group relative overflow-hidden rounded border border-border bg-bg-card transition-all duration-200 hover:border-accent-purple/50 hover:bg-bg-card-hover hover:shadow-lg hover:shadow-accent-purple/10">
        {/* Portrait placeholder */}
        <div className="flex aspect-[3/4] items-center justify-center bg-gradient-to-br from-bg-secondary to-bg-primary">
          <span className="text-4xl font-black text-text-muted/30 transition-colors group-hover:text-accent-purple/40">
            {getInitials(character.name)}
          </span>
        </div>

        {/* Info */}
        <div className="p-3">
          <h2 className="text-sm font-bold tracking-wide text-text-primary sm:text-base">
            {character.name}
          </h2>
          <p className="mt-0.5 text-xs text-text-muted line-clamp-1">
            {character.subtitle}
          </p>
        </div>

        {/* Bottom accent line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-accent-blue to-accent-purple opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </Link>
  );
}
