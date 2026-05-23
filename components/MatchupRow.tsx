type Difficulty = "advantageous" | "even" | "disadvantaged";

interface MatchupRowProps {
  opponentName: string;
  difficulty: Difficulty;
  notes: string;
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
  notes,
  isExpanded,
  onToggle,
}: MatchupRowProps) {
  const config = difficultyConfig[difficulty];

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
        <div className="bg-bg-card px-4 py-3">
          <p className="text-sm text-text-secondary">{notes}</p>
        </div>
      )}
    </div>
  );
}
