import Link from "next/link";
import {
  studio,
  services,
  signatureCases,
  moreWork,
  sessions,
  experiments,
  trustBar,
} from "../content/site";

function SectionHeader({
  numeral,
  label,
  right,
}: {
  numeral: string;
  label: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline justify-between border-t border-[var(--color-ink)]/15 pt-6">
      <div className="flex items-baseline gap-3 text-[var(--color-muted)]">
        <span
          style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}
          className="text-[var(--color-accent)]"
        >
          {numeral}.
        </span>
        <span className="text-xs uppercase tracking-[0.28em]">{label}</span>
      </div>
      {right}
    </div>
  );
}

const statusColor = (s: string) =>
  s === "진행 중"
    ? "text-[var(--color-accent)]"
    : s === "예정"
    ? "text-[var(--color-ink)]"
    : s === "lead"
    ? "text-[var(--color-accent)]"
    : "text-[var(--color-muted)]";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10 md:px-12 md:py-14">
      <header className="flex items-baseline justify-between pb-24 md:pb-32 text-sm">
        <Link href="/" className="flex items-baseline gap-1.5">
          <span className="font-medium tracking-[-0.01em]">dots-project</span>
          <span
            style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}
            className="text-[var(--color-accent)]"
          >
            .
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-[var(--color-muted)] md:flex">
          <a href="#services" className="hover:text-[var(--color-ink)]">서비스</a>
          <a href="#work" className="hover:text-[var(--color-ink)]">작업</a>
          <a href="#lectures" className="hover:text-[var(--color-ink)]">강의</a>
          <a href="#trust" className="hover:text-[var(--color-ink)]">함께한 곳</a>
          <a href="#contact" className="text-[var(--color-ink)] font-medium hover:text-[var(--color-accent)]">
            의뢰 ↗
          </a>
        </nav>
        <a href="#contact" className="text-[var(--color-ink)] font-medium md:hidden">
          의뢰 ↗
        </a>
      </header>

      {/* HERO */}
      <section className="pb-28 md:pb-40">
        <p
          style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}
          className="text-base text-[var(--color-accent)] md:text-lg"
        >
          AI Automation Studio &mdash; Seoul, KR
        </p>
        <h1
          style={{ fontFamily: "var(--font-serif-ko)" }}
          className="mt-8 text-[2.6rem] leading-[1.08] tracking-[-0.035em] md:text-[4.5rem]"
        >
          KAIST 출신 개발자의<br />
          <span className="relative inline-block">
            AI 비즈니스 자동화
            <span
              style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}
              className="text-[var(--color-accent)]"
            >
              .
            </span>
          </span>
        </h1>
        <div className="mt-10 grid gap-10 md:grid-cols-[2fr_1fr] md:items-end">
          <p className="max-w-xl text-lg leading-[1.75] text-[var(--color-ink-soft)] md:text-xl">
            반복되는 운영을 AI 도구로 정리합니다.<br />
            강의로 만난 문제를, 도구로 남기는 일을 합니다.
          </p>
          <div className="text-sm leading-7 text-[var(--color-muted)] md:text-right">
            <p className="text-[var(--color-ink)]">{studio.person}</p>
            <p
              style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}
            >
              founder &amp; operator
            </p>
            <p className="mt-3">
              <a href={`mailto:${studio.email}`} className="hover:text-[var(--color-ink)]">
                {studio.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* I. SERVICES */}
      <section id="services" className="scroll-mt-16 pb-28 md:pb-36">
        <SectionHeader numeral="I" label="서비스 · what we do" />
        <h2
          style={{ fontFamily: "var(--font-serif-ko)" }}
          className="mt-12 max-w-3xl text-2xl leading-[1.35] tracking-[-0.02em] md:text-[2rem]"
        >
          AI로 운영을 정리하고, 그 도구를 어떻게 쓰는지<br className="hidden md:block" />
          같이 가르칩니다.
        </h2>
        <ol className="mt-14 space-y-12 md:space-y-14">
          {services.map((s) => (
            <li
              key={s.no}
              className="grid grid-cols-[3rem_1fr] gap-6 md:grid-cols-[5rem_1fr] md:gap-10"
            >
              <span
                style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}
                className="text-3xl text-[var(--color-accent)] md:text-5xl"
              >
                {s.no}
              </span>
              <div>
                <h3
                  style={{ fontFamily: "var(--font-serif-ko)" }}
                  className="text-xl leading-snug tracking-[-0.02em] md:text-2xl"
                >
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-[1.85] text-[var(--color-ink-soft)]">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* II. SIGNATURE WORK */}
      <section id="work" className="scroll-mt-16 pb-28 md:pb-36">
        <SectionHeader
          numeral="II"
          label="시그니처 작업 · signature cases"
          right={
            <Link
              href="/work"
              className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            >
              전체 →
            </Link>
          }
        />
        <h2
          style={{ fontFamily: "var(--font-serif-ko)" }}
          className="mt-12 max-w-3xl text-2xl leading-[1.35] tracking-[-0.02em] md:text-[2rem]"
        >
          강의로 시작해서 도구로 끝나는 세 가지 흐름.
        </h2>
        <div className="mt-16 space-y-20 md:space-y-24">
          {signatureCases.map((c) => (
            <article
              key={c.index}
              className="grid gap-8 md:grid-cols-[2.5rem_1fr] md:gap-10"
            >
              <div>
                <p
                  style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}
                  className="text-3xl text-[var(--color-accent)] md:text-5xl"
                >
                  {c.index}
                </p>
                <p
                  style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}
                  className="mt-2 text-xs tracking-wider text-[var(--color-muted)] md:text-sm"
                >
                  {c.category}
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {c.field}
                </p>
                <h3
                  style={{ fontFamily: "var(--font-serif-ko)" }}
                  className="mt-3 max-w-3xl text-[1.5rem] leading-[1.2] tracking-[-0.025em] md:text-[2rem]"
                >
                  {c.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-ink-soft)] md:text-base">
                  {c.client}<br />
                  <span className="text-[var(--color-muted)]">{c.format}</span>
                </p>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div>
                    <p
                      style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}
                      className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]"
                    >
                      what we built
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--color-ink)]">
                      {c.built.map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[var(--color-muted)]">—</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p
                      style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}
                      className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]"
                    >
                      what changed
                    </p>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--color-ink)]">
                      {c.impact.map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[var(--color-accent)]">+</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p
                  style={{ fontFamily: "var(--font-serif-ko)" }}
                  className="mt-8 inline-block border-l-2 border-[var(--color-accent)] pl-4 text-base italic leading-7 text-[var(--color-ink-soft)]"
                >
                  {c.funnel}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* MORE WORK ROW */}
        <div className="mt-20 border-t border-[var(--color-line)] pt-10">
          <p
            style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}
            className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]"
          >
            and more work in progress
          </p>
          <ul className="mt-6 grid gap-4 text-sm md:grid-cols-2">
            {moreWork.map((m) => (
              <li
                key={m.field}
                className="flex items-baseline justify-between gap-4 border-b border-[var(--color-line)]/60 pb-3"
              >
                <span>
                  <span className="text-[var(--color-ink)]">{m.field}</span>
                  <span className="ml-2 text-[var(--color-muted)]">— {m.scope}</span>
                </span>
                <span className={`text-xs uppercase tracking-[0.14em] ${statusColor(m.status)}`}>
                  {m.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* III. LECTURES */}
      <section id="lectures" className="scroll-mt-16 pb-28 md:pb-36">
        <SectionHeader
          numeral="III"
          label="강의 · lectures & coaching"
          right={
            <Link
              href="/lectures"
              className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            >
              전체 →
            </Link>
          }
        />
        <h2
          style={{ fontFamily: "var(--font-serif-ko)" }}
          className="mt-12 max-w-3xl text-2xl leading-[1.35] tracking-[-0.02em] md:text-[2rem]"
        >
          AI 입문자부터 실무자까지.<br className="hidden md:block" />
          기업·1:1·소그룹으로 12회 이상.
        </h2>
        <ul className="mt-16 grid gap-12 md:grid-cols-2 md:gap-x-14 md:gap-y-16">
          {sessions.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[2.5rem_1fr] gap-4 md:gap-6">
              <span
                style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}
                className="text-xl text-[var(--color-accent)] md:text-2xl"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3
                  style={{ fontFamily: "var(--font-serif-ko)" }}
                  className="text-lg leading-snug tracking-[-0.02em] md:text-xl"
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-[var(--color-ink-soft)]">
                  {s.takeaway}
                </p>
                <p className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  <span>{s.audience}</span>
                  <span aria-hidden>·</span>
                  <span>{s.format}</span>
                  <span aria-hidden>·</span>
                  <span className={statusColor(s.status)}>{s.status}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* IV. EXPERIMENTS */}
      <section id="experiments" className="scroll-mt-16 pb-28 md:pb-36">
        <SectionHeader numeral="IV" label="사이드 · built by dots" />
        <h2
          style={{ fontFamily: "var(--font-serif-ko)" }}
          className="mt-12 max-w-3xl text-2xl leading-[1.35] tracking-[-0.02em] md:text-[2rem]"
        >
          외부 의뢰가 아닐 때, 직접 운영하며 만든 것들.
        </h2>
        <ul className="mt-14 grid gap-12 md:grid-cols-2 md:gap-x-14 md:gap-y-16">
          {experiments.map((e, i) => (
            <li key={e.name} className="grid grid-cols-[2.5rem_1fr] gap-4 md:gap-6">
              <span
                style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}
                className="text-xl text-[var(--color-accent)] md:text-2xl"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {e.channel}
                </p>
                <h3
                  style={{ fontFamily: "var(--font-serif-ko)" }}
                  className="mt-2 text-lg leading-snug tracking-[-0.02em] md:text-xl"
                >
                  {e.name}
                </h3>
                <p
                  style={{ fontFamily: "var(--font-serif-ko)" }}
                  className="mt-3 text-sm italic leading-[1.7] text-[var(--color-ink-soft)] md:text-base"
                >
                  {e.oneliner}
                </p>
                <ul className="mt-3 space-y-1 text-xs text-[var(--color-ink-soft)] md:text-sm">
                  {e.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-[var(--color-muted)]">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* V. TRUST */}
      <section id="trust" className="scroll-mt-16 pb-28 md:pb-36">
        <SectionHeader numeral="V" label="함께한 곳 · trust" />
        <p className="mt-10 max-w-2xl text-sm text-[var(--color-muted)]">
          진행 중 또는 완료된 의뢰·강의·코칭 기준. v1은 익명 처리, 동의받은 곳부터 실명 전환합니다.
        </p>
        <ul className="mt-10 grid gap-x-10 gap-y-3 md:grid-cols-2">
          {trustBar.map((t, i) => (
            <li
              key={i}
              className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-[var(--color-line)]/60 py-3 text-sm"
            >
              <span className="text-[var(--color-ink)]">{t.name}</span>
              <span
                style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}
                className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]"
              >
                {t.tier}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* VI. CONTACT */}
      <section id="contact" className="scroll-mt-16 pb-20">
        <SectionHeader numeral="VI" label="연락 · contact" />
        <h2
          style={{ fontFamily: "var(--font-serif-ko)" }}
          className="mt-12 max-w-3xl text-3xl leading-[1.25] tracking-[-0.025em] md:text-[2.6rem]"
        >
          반복되는 업무가 있다면,<br />
          30분 안에 같이 봅니다.
        </h2>
        <div className="mt-14 grid gap-8 text-base md:grid-cols-3">
          <div>
            <p
              style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}
              className="text-xs text-[var(--color-muted)] tracking-wider"
            >
              email
            </p>
            <a href={`mailto:${studio.email}`} className="mt-2 block hover:text-[var(--color-accent)]">
              {studio.email}
            </a>
          </div>
          <div>
            <p
              style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}
              className="text-xs text-[var(--color-muted)] tracking-wider"
            >
              phone
            </p>
            <a href="tel:+821046859570" className="mt-2 block hover:text-[var(--color-accent)]">
              {studio.phone}
            </a>
          </div>
          <div>
            <p
              style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}
              className="text-xs text-[var(--color-muted)] tracking-wider"
            >
              kakaotalk
            </p>
            <p className="mt-2">{studio.kakao}</p>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap gap-3">
          <a
            href={`mailto:${studio.email}?subject=%5B의뢰%5D%20AI%20자동화%20프로젝트`}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-bg)] hover:bg-[var(--color-accent)]"
          >
            프로젝트 의뢰 →
          </a>
          <a
            href={`mailto:${studio.email}?subject=%5B의뢰%5D%20AI%20강의%20문의`}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)]/30 px-6 py-3 text-sm font-medium hover:border-[var(--color-ink)]"
          >
            강의 문의
          </a>
        </div>
      </section>

      <footer className="mt-12 flex flex-wrap items-baseline justify-between gap-3 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-muted)]">
        <p>
          © {new Date().getFullYear()} {studio.company}
          <span
            style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}
            className="ml-2"
          >
            &mdash; dots-project.work
          </span>
        </p>
        <p>
          KAIST 전산학부 ·{" "}
          <span style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}>
            Oh Jangseop
          </span>
        </p>
      </footer>
    </main>
  );
}
