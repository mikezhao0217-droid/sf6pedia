import { characters } from "@/data/characters";
import CharacterCard from "@/components/CharacterCard";

export default function HomePage() {
  return (
    <div>
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
          <span className="text-transparent bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text">
            STREET FIGHTER 6
          </span>
        </h1>
        <p className="mt-3 text-lg text-text-secondary">
          Character Encyclopedia &mdash; Frame Data, Matchups &amp; Strategy
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {characters.map((character) => (
          <CharacterCard key={character.slug} character={character} />
        ))}
      </div>
    </div>
  );
}
