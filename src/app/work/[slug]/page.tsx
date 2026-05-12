import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "../../components/Container";
import SectionLabel from "../../components/SectionLabel";
import SiteFooter from "../../components/SiteFooter";
import SiteHeader from "../../components/SiteHeader";
import { workPieces } from "../../../content/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return workPieces.map((piece) => ({ slug: piece.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const piece = workPieces.find((item) => item.slug === slug);
  if (!piece) return {};
  return {
    title: piece.title,
    description: piece.intro,
    alternates: { canonical: `/work/${slug}` },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const piece = workPieces.find((item) => item.slug === slug);
  if (!piece) notFound();

  const index = workPieces.indexOf(piece);
  const prev = workPieces[index - 1] ?? null;
  const next = workPieces[index + 1] ?? null;
  const colorClass = piece.color === "coral" ? "bg-[#ff9b8f]" : piece.color === "mint" ? "bg-[#b8f7cf]" : "bg-[#9ed4ff]";

  return (
    <>
      <SiteHeader />
      <main className="py-10 md:py-16">
        <Container size="wide">
          <section className={`rounded-[2.75rem] ${colorClass} p-7 shadow-[0_18px_0_rgba(75,37,88,0.12)] md:p-10`}>
            <SectionLabel>{piece.eyebrow}</SectionLabel>
            <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.075em] md:text-8xl">
              {piece.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-[var(--color-ink-soft)]">{piece.intro}</p>
          </section>

          <section className="mt-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <article className="rounded-[2.25rem] bg-[var(--color-paper)] p-6 shadow-[0_12px_0_rgba(75,37,88,0.1)] md:p-8">
              <SectionLabel index="A">상황</SectionLabel>
              <p className="mt-6 text-lg leading-9 text-[var(--color-ink-soft)]">{piece.situation}</p>
            </article>
            <article className="rounded-[2.25rem] bg-[var(--color-paper)] p-6 shadow-[0_12px_0_rgba(75,37,88,0.1)] md:p-8">
              <SectionLabel index="B">만든 것</SectionLabel>
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {piece.made.map((item) => (
                  <li key={item} className="rounded-[1.25rem] bg-[#fff0cf] p-4 text-sm font-bold leading-7 text-[var(--color-ink-soft)]">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </section>

          <section className="mt-5 rounded-[2.25rem] bg-[#cfff47] p-6 shadow-[0_12px_0_rgba(75,37,88,0.1)] md:p-8">
            <SectionLabel index="C">달라진 점</SectionLabel>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {piece.changed.map((item) => (
                <p key={item} className="rounded-[1.25rem] bg-[#fff8e8] p-5 text-sm font-bold leading-7 text-[var(--color-ink-soft)]">
                  {item}
                </p>
              ))}
            </div>
          </section>

          <nav className="mt-8 flex items-center justify-between gap-4 py-6">
            <div>
              {prev ? <Link href={`/work/${prev.slug}`} className="font-black text-[var(--color-accent)]">← {prev.title}</Link> : null}
            </div>
            <Link href="/work" className="rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm font-black text-[#fff4d8]">전체 작업</Link>
            <div className="text-right">
              {next ? <Link href={`/work/${next.slug}`} className="font-black text-[var(--color-accent)]">{next.title} →</Link> : null}
            </div>
          </nav>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
