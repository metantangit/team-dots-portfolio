import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases } from "../../../content/cases";
import Container from "../../components/Container";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import HeroParallax from "./HeroParallax";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary,
    alternates: { canonical: `/work/${slug}` },
  };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();

  const index = cases.indexOf(c);
  const prev = cases[index - 1] ?? null;
  const next = cases[index + 1] ?? null;

  return (
    <>
      <SiteHeader />
      {/* Cinematic deep bg — #050505 for maximum contrast */}
      <main className="bg-[--color-bg-deep] pb-0">
        {/* ── Full-bleed parallax hero ── */}
        <HeroParallax
          src={c.heroAsset}
          alt={c.title}
          order={c.order}
          category={c.category}
          title={c.title}
          client={c.client}
          period={c.period}
          format={c.format}
        />

        {/* ── Body ── */}
        <section className="py-16 md:py-24 pt-12 md:pt-16">
          <Container size="wide">
            <div className="grid gap-16 md:grid-cols-[96px_1fr] md:gap-16">
              {/* Sticky order numeral */}
              <div className="hidden md:block">
                <p className="md:sticky md:top-28 font-[family-name:var(--font-serif-en)] italic text-[4rem] md:text-[5rem] text-[--color-accent]/40 leading-none select-none">
                  {String(c.order).padStart(2, "0")}
                </p>
              </div>

              <div className="space-y-20">
                {/* Summary */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[--color-muted] mb-4">
                    개요
                  </p>
                  <p className="text-base md:text-lg text-[--color-ink-soft] leading-[1.85] max-w-2xl">
                    {c.summary}
                  </p>
                </div>

                {/* Metrics strip */}
                <div className="grid gap-px bg-[--color-paper-edge] border border-[--color-paper-edge] rounded-lg overflow-hidden sm:grid-cols-3">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="bg-[--color-paper-card] px-6 py-5">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-[--color-muted]">
                        {m.label}
                      </p>
                      <p className="mt-2 font-[family-name:var(--font-serif-en)] italic text-3xl text-[--color-ink] leading-none">
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Outputs + Impact */}
                <div className="grid gap-12 md:grid-cols-2 border-t border-[--color-paper-edge] pt-12">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-muted] mb-4">
                      만든 것
                    </p>
                    <ul className="space-y-2.5 text-sm text-[--color-ink-soft]">
                      {c.outputs.map((o) => (
                        <li key={o} className="leading-relaxed flex gap-3">
                          <span className="text-[--color-accent] shrink-0">—</span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-muted] mb-4">
                      임팩트
                    </p>
                    <ul className="space-y-2.5 text-sm text-[--color-ink-soft]">
                      {c.impact.map((imp) => (
                        <li key={imp} className="leading-relaxed flex gap-3">
                          <span className="text-[--color-accent] shrink-0">—</span>
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pullquote */}
                {c.pullquote && (
                  <blockquote className="border-l-2 border-[--color-accent] pl-8 py-2 max-w-2xl">
                    <p className="font-[family-name:var(--font-serif-ko)] text-xl md:text-2xl text-[--color-ink] leading-snug">
                      &ldquo;{c.pullquote}&rdquo;
                    </p>
                  </blockquote>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* ── Case nav ── */}
        <nav
          aria-label="케이스 탐색"
          className="border-t border-[--color-paper-edge]"
        >
          <Container size="wide">
            <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr]">
              {/* Prev */}
              <div className="py-10 pr-6">
                {prev ? (
                  <Link
                    href={`/work/${prev.slug}`}
                    className="group flex flex-col gap-1"
                  >
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[--color-muted] group-hover:text-[--color-accent] transition-colors">
                      ← 이전
                    </span>
                    <span className="text-sm text-[--color-ink-soft] group-hover:text-[--color-ink] transition-colors leading-snug">
                      {prev.title}
                    </span>
                  </Link>
                ) : null}
              </div>

              {/* Center: back to /work */}
              <div className="hidden md:flex items-center px-8 border-x border-[--color-paper-edge]">
                <Link
                  href="/work"
                  className="text-[10px] uppercase tracking-[0.25em] text-[--color-muted] hover:text-[--color-accent] transition-colors"
                >
                  모든 작업
                </Link>
              </div>

              {/* Next */}
              <div className="py-10 pl-6 text-right border-l border-[--color-paper-edge] md:border-l-0">
                {next ? (
                  <Link
                    href={`/work/${next.slug}`}
                    className="group flex flex-col gap-1 items-end"
                  >
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[--color-muted] group-hover:text-[--color-accent] transition-colors">
                      다음 →
                    </span>
                    <span className="text-sm text-[--color-ink-soft] group-hover:text-[--color-ink] transition-colors leading-snug">
                      {next.title}
                    </span>
                  </Link>
                ) : null}
              </div>
            </div>
          </Container>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
