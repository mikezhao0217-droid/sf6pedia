type Difficulty = "advantageous" | "even" | "disadvantaged";

interface MatchupRowProps {
  opponentName: string;
  difficulty: Difficulty;
  summary?: string;
  strategies?: string[];
  keyMoves?: string[];
  notes?: string;
  isExpanded: boolean;
  onToggle: () => void;
}

const difficultyConfig: Record<
  Difficulty,
  { label: string; color: string; border: string }
> = {
  advantageous: {
    label: "ADV",
    color: "text-easy",
    border: "border-l-easy",
  },
  even: {
    label: "EVEN",
    color: "text-even",
    border: "border-l-even",
  },
  disadvantaged: {
    label: "DIS",
    color: "text-hard",
    border: "border-l-hard",
  },
};

export default function MatchupRow({
  opponentName,
  difficulty,
  summary,
  strategies,
  keyMoves,
  notes,
  isExpanded,
  onToggle,
}: MatchupRowProps) {
  const config = difficultyConfig[difficulty] || difficultyConfig.even;

  const displayText = summary || notes || "";

  return (
    <div className={`border-l-4 ${config.border}`}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between bg-bg-secondary px-4 py-3 text-left transition-colors hover:bg-bg-card"
      >
        <span className="font-bold text-text-primary">VS {opponentName}</span>
        <span className={`text-xs font-bold ${config.color}`}>
          {config.label}
        </span>
      </button>
      {isExpanded && (
        <div className="bg-bg-card px-4 py-3 space-y-3">
          {displayText && (
            <p className="text-sm font-medium text-text-primary">{displayText}</p>
          )}
          {strategies && strategies.length > 0 && (
            <ul className="space-y-2">
              {strategies.map((strategy, i) => (
                <li key={i} className="text-sm text-text-secondary pl-3 border-l-2 border-border">
                  {strategy}
                </li>
              ))}
            </ul>
          )}
          {keyMoves && keyMoves.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs text-text-muted">Key Moves:</span>
              {keyMoves.map((move, i) => (
                <span
                  key={i}
                  className="rounded bg-bg-secondary px-2 py-0.5 text-xs text-accent-blue"
                >
                  {move}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
