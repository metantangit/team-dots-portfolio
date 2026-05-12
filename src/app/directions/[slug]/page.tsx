import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { directions, getDirection, type DesignDirection } from "../../../content/directions";
import { studio } from "../../../content/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return directions.map((direction) => ({ slug: direction.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const direction = getDirection(slug);
  if (!direction) return {};
  return {
    title: direction.name,
    description: direction.subtitle,
    alternates: { canonical: `/directions/${slug}` },
  };
}

function DirectionSwitch({ active }: { active: string }) {
  return (
    <nav className="flex flex-wrap gap-2" aria-label="direction switcher">
      <Link href="/" className="border px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] opacity-70">
        all
      </Link>
      {directions.map((direction) => (
        <Link
          key={direction.slug}
          href={`/directions/${direction.slug}`}
          className={`border px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] ${active === direction.slug ? "opacity-100" : "opacity-45"}`}
        >
          {direction.label}
        </Link>
      ))}
    </nav>
  );
}

function ContactLine({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className="flex flex-wrap gap-3 text-sm">
      <a href={`mailto:${studio.email}?subject=포트폴리오 방향 상담`} className="border px-4 py-2 font-semibold">
        {studio.email}
      </a>
      <a href="tel:+821046859570" className="border px-4 py-2 font-semibold">
        {studio.phone}
      </a>
      <span className={tone === "dark" ? "px-4 py-2 text-white/60" : "px-4 py-2 opacity-60"}>Kakao {studio.kakao}</span>
    </div>
  );
}

function Editorial({ direction }: { direction: DesignDirection }) {
  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#1f2a24]">
      <div className="mx-auto max-w-[1500px] px-5 py-8 md:px-10 md:py-12">
        <header className="flex items-start justify-between gap-8 border-b border-[#d8cbbb] pb-6">
          <div>
            <p className="font-[family-name:var(--font-serif-en)] text-2xl italic text-[#9b5d35]">dots-project.work</p>
            <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[#66736a]">founder editorial</p>
          </div>
          <DirectionSwitch active={direction.slug} />
        </header>

        <section className="grid gap-10 border-b border-[#d8cbbb] py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#9b5d35]">{direction.label} / {direction.name}</p>
            <h1 className="mt-8 font-[family-name:var(--font-serif-ko)] text-5xl leading-[1.04] tracking-[-0.055em] md:text-8xl">
              {direction.title}
            </h1>
          </div>
          <aside className="self-end border-l border-[#d8cbbb] pl-8">
            <p className="text-xl leading-9 text-[#66736a]">{direction.subtitle}</p>
            <p className="mt-8 font-[family-name:var(--font-serif-en)] text-2xl italic text-[#9b5d35]">{direction.method}</p>
          </aside>
        </section>

        <section className="grid gap-px bg-[#d8cbbb] lg:grid-cols-3">
          {direction.blocks.map((block) => (
            <article key={block.title} className="bg-[#f4efe6] p-6 md:p-9">
              <p className="font-[family-name:var(--font-serif-en)] text-xl italic text-[#9b5d35]">{block.kicker}</p>
              <h2 className="mt-10 font-[family-name:var(--font-serif-ko)] text-3xl leading-tight tracking-[-0.04em]">{block.title}</h2>
              <p className="mt-5 leading-8 text-[#66736a]">{block.body}</p>
            </article>
          ))}
        </section>

        <section className="py-14">
          <div className="mb-6 flex items-end justify-between border-b border-[#d8cbbb] pb-4">
            <h2 className="font-[family-name:var(--font-serif-ko)] text-4xl tracking-[-0.04em]">Case notes</h2>
            <p className="text-xs uppercase tracking-[0.24em] text-[#66736a]">anonymous / public-safe</p>
          </div>
          {direction.proof.map((item) => (
            <article key={item.title} className="grid gap-5 border-b border-[#d8cbbb] py-6 md:grid-cols-[0.7fr_1fr_1.2fr]">
              <p className="text-sm uppercase tracking-[0.18em] text-[#9b5d35]">{item.meta}</p>
              <h3 className="text-2xl font-semibold tracking-[-0.03em]">{item.title}</h3>
              <p className="leading-7 text-[#66736a]">{item.body}</p>
            </article>
          ))}
        </section>
        <ContactLine />
      </div>
    </main>
  );
}

function Blueprint({ direction }: { direction: DesignDirection }) {
  return (
    <main className="min-h-screen bg-[#eef5f7] text-[#102a33]">
      <div className="mx-auto max-w-[1500px] px-5 py-8 md:px-10 md:py-12">
        <header className="grid gap-4 border border-[#b7d4dc] bg-white p-4 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#087e8b]">system blueprint · dots-project.work</p>
            <p className="mt-2 text-sm text-[#58717a]">{direction.method}</p>
          </div>
          <DirectionSwitch active={direction.slug} />
        </header>

        <section className="grid gap-8 border-x border-b border-[#b7d4dc] bg-white p-6 md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#087e8b]">{direction.label} / architecture view</p>
            <h1 className="mt-8 text-5xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-8xl">{direction.title}</h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#58717a]">{direction.subtitle}</p>
          </div>
          <svg viewBox="0 0 720 520" className="h-full min-h-[420px] w-full border border-[#b7d4dc] bg-[#f7fbfc]" role="img" aria-label="system blueprint diagram">
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L6,3 z" fill="#087e8b" />
              </marker>
            </defs>
            {[80, 180, 280, 380, 480].map((y) => <line key={y} x1="40" x2="680" y1={y} y2={y} stroke="#d7e8ec" />)}
            {[100, 250, 400, 550].map((x) => <line key={x} y1="40" y2="480" x1={x} x2={x} stroke="#d7e8ec" />)}
            {direction.blocks.map((block, i) => {
              const x = 60 + i * 215;
              return (
                <g key={block.kicker}>
                  <rect x={x} y={150 + (i % 2) * 80} width="165" height="110" fill="#ffffff" stroke="#087e8b" strokeWidth="2" />
                  <text x={x + 18} y={185 + (i % 2) * 80} fill="#087e8b" fontSize="14" fontWeight="700">{block.kicker}</text>
                  <text x={x + 18} y={215 + (i % 2) * 80} fill="#102a33" fontSize="18" fontWeight="700">Module {i + 1}</text>
                  {i < 2 ? <line x1={x + 165} x2={x + 205} y1={205 + (i % 2) * 80} y2={205 + ((i + 1) % 2) * 80} stroke="#087e8b" strokeWidth="3" markerEnd="url(#arrow)" /> : null}
                </g>
              );
            })}
          </svg>
        </section>

        <section className="grid border-x border-b border-[#b7d4dc] bg-white lg:grid-cols-3">
          {direction.blocks.map((block) => (
            <article key={block.title} className="border-b border-[#b7d4dc] p-6 md:p-8 lg:border-b-0 lg:border-r last:border-r-0">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#087e8b]">{block.kicker}</p>
              <h2 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">{block.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#58717a]">{block.body}</p>
            </article>
          ))}
        </section>

        <section className="border-x border-b border-[#b7d4dc] bg-white p-6 md:p-8">
          <h2 className="mb-5 text-2xl font-semibold tracking-[-0.035em]">Module evidence</h2>
          <div className="overflow-hidden border border-[#b7d4dc]">
            {direction.proof.map((item) => (
              <div key={item.title} className="grid gap-4 border-b border-[#b7d4dc] p-4 last:border-b-0 md:grid-cols-[0.7fr_0.8fr_1.3fr]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#087e8b]">{item.meta}</p>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm leading-6 text-[#58717a]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function Atelier({ direction }: { direction: DesignDirection }) {
  return (
    <main className="min-h-screen bg-[#eee5d8] text-[#35291f]">
      <div className="mx-auto max-w-[1420px] px-5 py-8 md:px-10 md:py-12">
        <header className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#b86f52]">warm atelier</p>
            <p className="mt-2 text-sm text-[#77685a]">one-person studio for small systems</p>
          </div>
          <DirectionSwitch active={direction.slug} />
        </header>

        <section className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="rounded-[2rem] bg-[#fffaf1] p-8 shadow-[0_24px_80px_rgba(53,41,31,0.08)] md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b86f52]">{direction.label} · {direction.name}</p>
            <h1 className="mt-8 text-5xl font-semibold leading-[1.0] tracking-[-0.06em] md:text-7xl">{direction.title}</h1>
          </div>
          <div className="rounded-[2rem] bg-[#d8c7b4] p-8 md:p-10">
            <p className="max-w-xl text-xl leading-9 text-[#35291f]">{direction.subtitle}</p>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#77685a]">{direction.method}</p>
          </div>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-3">
          {direction.blocks.map((block, index) => (
            <article key={block.title} className="rounded-[1.5rem] bg-[#fffaf1] p-6 shadow-[0_18px_60px_rgba(53,41,31,0.07)]">
              <div className="mb-10 aspect-[4/3] rounded-[1rem]" style={{ background: ["#d8c7b4", "#e9b8a2", "#c9d6c2"][index] }} />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b86f52]">{block.kicker}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em]">{block.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#77685a]">{block.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-[2rem] bg-[#fffaf1] p-6 md:p-10">
          <h2 className="text-3xl font-semibold tracking-[-0.04em]">Objects on the table</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {direction.proof.map((item) => (
              <article key={item.title} className="border-t border-[#d8c7b4] pt-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#b86f52]">{item.meta}</p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#77685a]">{item.body}</p>
              </article>
            ))}
          </div>
        </section>
        <div className="mt-8"><ContactLine /></div>
      </div>
    </main>
  );
}

function Dossier({ direction }: { direction: DesignDirection }) {
  return (
    <main className="min-h-screen bg-[#f7f7f2] text-[#202124]">
      <div className="mx-auto max-w-[1480px] px-5 py-8 md:px-10 md:py-12">
        <header className="grid gap-4 border-b-2 border-[#202124] pb-5 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#335c67]">capability dossier</p>
            <p className="mt-2 text-sm text-[#61645f]">public-safe summary / no customer identifiers</p>
          </div>
          <DirectionSwitch active={direction.slug} />
        </header>

        <section className="grid gap-8 border-b border-[#d7d9d2] py-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#335c67]">{direction.label} / {direction.name}</p>
            <h1 className="mt-7 text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl">{direction.title}</h1>
          </div>
          <div className="self-end">
            <p className="text-xl leading-9 text-[#61645f]">{direction.subtitle}</p>
            <div className="mt-8 grid grid-cols-2 gap-px bg-[#d7d9d2]">
              {direction.tools.map((tool) => (
                <p key={tool} className="bg-white p-4 text-sm font-semibold">{tool}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="grid gap-px bg-[#202124]">
            <div className="hidden grid-cols-[0.4fr_1fr_1.5fr] gap-px bg-[#202124] text-sm font-bold uppercase tracking-[0.18em] md:grid">
              <p className="bg-[#335c67] p-4 text-white">No.</p>
              <p className="bg-[#335c67] p-4 text-white">Capability</p>
              <p className="bg-[#335c67] p-4 text-white">Description</p>
            </div>
            {direction.blocks.map((block, index) => (
              <article key={block.title} className="grid gap-px bg-[#d7d9d2] md:grid-cols-[0.4fr_1fr_1.5fr]">
                <p className="bg-white p-4 text-2xl font-semibold text-[#335c67]">{String(index + 1).padStart(2, "0")}</p>
                <div className="bg-white p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#61645f]">{block.kicker}</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em]">{block.title}</h2>
                </div>
                <p className="bg-white p-4 leading-7 text-[#61645f]">{block.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t-2 border-[#202124] py-8">
          <h2 className="mb-5 text-3xl font-semibold tracking-[-0.04em]">Evidence summary</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {direction.proof.map((item) => (
              <article key={item.title} className="border border-[#d7d9d2] bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#335c67]">{item.meta}</p>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#61645f]">{item.body}</p>
              </article>
            ))}
          </div>
        </section>
        <ContactLine />
      </div>
    </main>
  );
}

export default async function DirectionPage({ params }: Props) {
  const { slug } = await params;
  const direction = getDirection(slug);
  if (!direction) notFound();

  const style = {
    "--direction-bg": direction.palette.bg,
    "--direction-surface": direction.palette.surface,
    "--direction-ink": direction.palette.ink,
    "--direction-muted": direction.palette.muted,
    "--direction-accent": direction.palette.accent,
    "--direction-line": direction.palette.line,
  } as CSSProperties;

  return (
    <div style={style}>
      {direction.slug === "editorial" ? <Editorial direction={direction} /> : null}
      {direction.slug === "blueprint" ? <Blueprint direction={direction} /> : null}
      {direction.slug === "atelier" ? <Atelier direction={direction} /> : null}
      {direction.slug === "dossier" ? <Dossier direction={direction} /> : null}
    </div>
  );
}
