export default function TechBadge({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <span
          key={t}
          className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-[--color-accent-dim]/15 text-[--color-accent] border border-[--color-accent-dim]/20"
        >
          {t}
        </span>
      ))}
    </div>
  );
}
