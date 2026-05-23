import { notFound } from "next/navigation";
import { characters, getCharacterBySlug, getOpponents } from "@/data/characters";
import { getCharacterContent } from "@/lib/mdx";
import CharacterHeader from "@/components/CharacterHeader";
import UsageTips from "@/components/UsageTips";
import MatchupTable from "@/components/MatchupTable";

export function generateStaticParams() {
  return characters.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Next.js 16 requires params to be awaited
  return params.then(({ slug }) => {
    const character = getCharacterBySlug(slug);
    return {
      title: character
        ? `${character.name} - SF6Pedia`
        : "Character Not Found - SF6Pedia",
    };
  });
}

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const character = getCharacterBySlug(slug);
  if (!character) notFound();

  const content = getCharacterContent(slug);
  const opponents = getOpponents(slug);
  const opponentNames = Object.fromEntries(
    opponents.map((o) => [o.slug, o.name])
  );

  const frontmatter = content?.frontmatter;

  return (
    <div className="space-y-10">
      <CharacterHeader character={character} />

      {/* Overview */}
      <section>
        <h2 className="mb-4 text-xl font-bold tracking-wide text-accent-cyan">
          OVERVIEW
        </h2>
        <p className="leading-relaxed text-text-secondary">
          {frontmatter?.overview ||
            `Content for ${character.name} is coming soon. Check back later for a detailed playstyle breakdown.`}
        </p>
      </section>

      {/* Key Moves */}
      <section>
        <h2 className="mb-4 text-xl font-bold tracking-wide text-accent-cyan">
          KEY MOVES / CORE TOOLS
        </h2>
        {frontmatter?.keyMoves && frontmatter.keyMoves.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {frontmatter.keyMoves.map((move, i) => (
              <div
                key={i}
                className="rounded border border-border bg-bg-card p-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-text-primary">{move.name}</h3>
                  <code className="rounded bg-bg-secondary px-2 py-0.5 text-xs text-accent-blue">
                    {move.input}
                  </code>
                </div>
                <p className="mt-2 text-sm text-text-secondary">
                  {move.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-text-muted">
            Key moves data for {character.name} is coming soon.
          </p>
        )}
      </section>

      {/* Usage Tips */}
      <UsageTips tips={frontmatter?.tips || []} />

      {/* Matchup Table */}
      {frontmatter?.matchups && frontmatter.matchups.length > 0 ? (
        <MatchupTable
          matchups={frontmatter.matchups}
          opponentNames={opponentNames}
        />
      ) : (
        <section>
          <h2 className="mb-4 text-xl font-bold tracking-wide text-accent-cyan">
            VS ALL CHARACTERS
          </h2>
          <p className="text-text-muted">
            Matchup data for {character.name} is coming soon.
          </p>
        </section>
      )}

      {/* Back link */}
      <div className="pt-4">
        <a
          href="/"
          className="text-sm text-accent-blue hover:text-accent-purple transition-colors"
        >
          &larr; Back to all characters
        </a>
      </div>
    </div>
  );
}
