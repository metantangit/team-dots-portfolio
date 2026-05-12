type Props = {
  children: React.ReactNode;
  index?: string;
  className?: string;
};

export default function SectionLabel({ children, index, className = "" }: Props) {
  return (
    <p className={`inline-flex items-center gap-2 rounded-full bg-[var(--color-paper)]/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-ink)] shadow-[0_8px_0_rgba(75,37,88,0.12)] ${className}`}>
      {index ? <span className="text-[var(--color-accent)]">{index}</span> : null}
      <span>{children}</span>
    </p>
  );
}
