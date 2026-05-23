"use client";

import { useState } from "react";
import MatchupRow from "./MatchupRow";

interface Matchup {
  opponent: string;
  difficulty: "advantageous" | "even" | "disadvantaged";
  notes: string;
}

interface MatchupTableProps {
  matchups: Matchup[];
  opponentNames: Record<string, string>;
}

export default function MatchupTable({
  matchups,
  opponentNames,
}: MatchupTableProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (!matchups || matchups.length === 0) return null;

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold tracking-wide text-accent-cyan">
        VS ALL CHARACTERS
      </h2>
      <div className="divide-y divide-border overflow-hidden rounded border border-border">
        {matchups.map((matchup, i) => (
          <MatchupRow
            key={matchup.opponent}
            opponentName={opponentNames[matchup.opponent] || matchup.opponent}
            difficulty={matchup.difficulty}
            notes={matchup.notes}
            isExpanded={expandedIndex === i}
            onToggle={() => setExpandedIndex(expandedIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
