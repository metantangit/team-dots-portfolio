import Link from "next/link";
import type { WorkPiece } from "../../content/site";

type Props = { pieces: WorkPiece[] };

export default function WorkGrid({ pieces }: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {pieces.map((piece, index) => (
        <Link key={piece.slug} href={`/work/${piece.slug}`} className="group flex min-h-[430px] flex-col justify-between rounded-[2.25rem] bg-[var(--color-paper)] p-6 shadow-[0_14px_0_rgba(75,37,88,0.12)] transition hover:-translate-y-1">
          <div>
            <div className={`mb-7 h-40 rounded-[1.75rem] ${piece.color === "coral" ? "bg-[#ff9b8f]" : piece.color === "mint" ? "bg-[#b8f7cf]" : "bg-[#9ed4ff]"} p-5`}>
              <p className="text-6xl font-black text-[#fff8e8]/75">{String(index + 1).padStart(2, "0")}</p>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--color-muted)]">{piece.field}</p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.05em]">{piece.title}</h2>
            <p className="mt-5 text-sm leading-7 text-[var(--color-muted)]">{piece.intro}</p>
          </div>
          <p className="mt-8 font-black text-[var(--color-accent)]">자세히 보기 →</p>
        </Link>
      ))}
    </div>
  );
}
