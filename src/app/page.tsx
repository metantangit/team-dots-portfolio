import Link from "next/link";
import { studio, services, workPieces, sessions } from "../content/site";

const SECTION = "scroll-mt-16 border-t border-[var(--color-line)] pt-12 md:pt-16";
const SECTION_LABEL =
  "text-xs font-medium tracking-[0.22em] uppercase text-[var(--color-muted)]";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 md:px-8 md:py-14">
      <header className="flex items-center justify-between pb-20 md:pb-28 text-sm">
        <Link href="/" className="font-medium tracking-[-0.01em]">
          dots-project
        </Link>
        <nav className="flex items-center gap-5 text-[var(--color-muted)]">
          <a href="#work" className="hover:text-[var(--color-ink)]">작업</a>
          <a href="#lectures" className="hover:text-[var(--color-ink)]">강의</a>
          <a href="#contact" className="text-[var(--color-ink)] font-medium hover:text-[var(--color-accent)]">의뢰 ↗</a>
        </nav>
      </header>

      <section className="pb-20 md:pb-28">
        <p className={SECTION_LABEL}>AI Automation Studio · Seoul</p>
        <h1
          style={{ fontFamily: "var(--font-serif-ko)" }}
          className="mt-8 text-[2rem] leading-[1.18] tracking-[-0.025em] md:text-[2.6rem]"
        >
          KAIST 출신 개발자의<br />AI 비즈니스 자동화.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-[1.85] text-[var(--color-ink-soft)]">
          반복되는 운영을 AI 도구로 정리합니다. 강의와 개발을 같이 합니다.
        </p>
        <p className="mt-10 text-sm text-[var(--color-muted)]">
          {studio.person} · <a href={`mailto:${studio.email}`} className="hover:text-[var(--color-ink)]">{studio.email}</a>
        </p>
      </section>

      <section id="services" className={SECTION}>
        <p className={SECTION_LABEL}>서비스</p>
        <ol className="mt-10 space-y-8 md:space-y-10">
          {services.map((s) => (
            <li key={s.no} className="grid grid-cols-[2rem_1fr] gap-4 md:grid-cols-[2.5rem_1fr] md:gap-6">
              <span
                style={{ fontFamily: "var(--font-serif-en)" }}
                className="text-base text-[var(--color-muted)] md:text-lg"
              >
                {s.no}
              </span>
              <div>
                <h3
                  style={{ fontFamily: "var(--font-serif-ko)" }}
                  className="text-lg leading-snug tracking-[-0.015em] md:text-xl"
                >
                  {s.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--color-ink-soft)]">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="work" className={`${SECTION} mt-20 md:mt-28`}>
        <div className="flex items-baseline justify-between">
          <p className={SECTION_LABEL}>작업</p>
          <Link href="/work" className="text-xs text-[var(--color-muted)] hover:text-[var(--color-ink)]">
            전체 →
          </Link>
        </div>
        <ul className="mt-10 space-y-8 md:space-y-10">
          {workPieces.map((w, i) => (
            <li key={w.slug}>
              <Link
                href={`/work/${w.slug}`}
                className="group grid grid-cols-[2rem_1fr] gap-4 md:grid-cols-[2.5rem_1fr] md:gap-6"
              >
                <span
                  style={{ fontFamily: "var(--font-serif-en)" }}
                  className="text-base text-[var(--color-muted)] md:text-lg"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-xs text-[var(--color-muted)]">{w.field}</p>
                  <h3
                    style={{ fontFamily: "var(--font-serif-ko)" }}
                    className="mt-1 text-lg leading-snug tracking-[-0.015em] group-hover:text-[var(--color-accent)] md:text-xl"
                  >
                    {w.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--color-ink-soft)]">
                    {w.intro}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="lectures" className={`${SECTION} mt-20 md:mt-28`}>
        <div className="flex items-baseline justify-between">
          <p className={SECTION_LABEL}>강의 · 12회+</p>
          <Link href="/lectures" className="text-xs text-[var(--color-muted)] hover:text-[var(--color-ink)]">
            전체 →
          </Link>
        </div>
        <ul className="mt-10 space-y-5">
          {sessions.map((s) => (
            <li key={s.title} className="grid grid-cols-[5rem_1fr_auto] items-baseline gap-4 text-sm">
              <span
                style={{ fontFamily: "var(--font-serif-en)" }}
                className="text-[var(--color-muted)]"
              >
                {s.date}
              </span>
              <span className="text-[var(--color-ink)]">{s.title}</span>
              <span
                className={
                  s.status === "완료"
                    ? "text-xs text-[var(--color-muted)]"
                    : s.status === "진행 중"
                    ? "text-xs text-[var(--color-accent)]"
                    : "text-xs text-[var(--color-ink)]"
                }
              >
                {s.status}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className={`${SECTION} mt-20 md:mt-28`}>
        <p className={SECTION_LABEL}>연락</p>
        <div className="mt-10 space-y-3 text-base">
          <p>
            <a href={`mailto:${studio.email}`} className="hover:text-[var(--color-accent)]">
              {studio.email}
            </a>
          </p>
          <p>
            <a href="tel:+821046859570" className="hover:text-[var(--color-accent)]">
              {studio.phone}
            </a>
          </p>
          <p className="text-[var(--color-ink-soft)]">
            <span className="text-[var(--color-muted)]">kakao</span>  {studio.kakao}
          </p>
        </div>
        <div className="mt-10">
          <a
            href={`mailto:${studio.email}?subject=%5B의뢰%5D%20AI%20자동화%20프로젝트`}
            className="inline-flex items-center gap-2 border-b border-[var(--color-ink)] pb-1 text-sm font-medium hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]"
          >
            프로젝트·강의 의뢰 보내기 →
          </a>
        </div>
      </section>

      <footer className="mt-24 flex flex-wrap items-baseline justify-between gap-2 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-muted)]">
        <p>© {new Date().getFullYear()} {studio.company}</p>
        <p>KAIST 전산학부 · {studio.person}</p>
      </footer>
    </main>
  );
}
