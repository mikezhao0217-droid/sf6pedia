export default function UsageTips({ tips }: { tips: string[] }) {
  if (!tips || tips.length === 0) return null;

  return (
    <section>
      <h2 className="mb-4 text-xl font-bold tracking-wide text-accent-cyan">
        USAGE TIPS
      </h2>
      <ul className="space-y-3">
        {tips.map((tip, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-purple" />
            <span className="text-text-secondary">{tip}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
