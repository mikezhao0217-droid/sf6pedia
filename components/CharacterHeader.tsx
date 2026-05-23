import type { Character } from "@/data/characters";

function getInitials(name: string): string {
  return name
    .split(/[\s.]+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);
}

export default function CharacterHeader({
  character,
}: {
  character: Character;
}) {
  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
      {/* Large portrait placeholder */}
      <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded border border-border bg-gradient-to-br from-bg-secondary to-bg-primary">
        <span className="text-6xl font-black text-text-muted/20">
          {getInitials(character.name)}
        </span>
      </div>

      <div className="text-center sm:text-left">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
          {character.name}
        </h1>
        <p className="mt-2 text-lg font-medium text-transparent bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text">
          {character.subtitle}
        </p>
      </div>
    </div>
  );
}
