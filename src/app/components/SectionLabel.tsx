type SectionLabelProps = {
  index?: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionLabel({
  index,
  children,
  className = "",
}: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[--color-muted] ${className}`}
    >
      {index && (
        <span className="font-[family-name:var(--font-serif-en)] italic text-[--color-accent]">
          {index}
        </span>
      )}
      <span className="h-px w-8 bg-[--color-paper-edge]" />
      <span>{children}</span>
    </div>
  );
}
