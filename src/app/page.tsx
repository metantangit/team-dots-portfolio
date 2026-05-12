import Link from "next/link";
import Container from "./components/Container";
import { studio, stats, services, workPieces, sessions } from "../content/site";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container size="default" className="pt-6 pb-24">
        <header className="flex items-center justify-between border-b border-[var(--color-line)] pb-5 text-sm">
          <Link href="/" className="font-semibold tracking-[-0.02em]">
            {studio.url}
          </Link>
          <nav className="flex items-center gap-5 text-[var(--color-muted)]">
            <a href="#services" className="hover:text-[var(--color-ink)]">서비스</a>
            <a href="#work" className="hover:text-[var(--color-ink)]">작업</a>
            <a href="#lectures" className="hover:text-[var(--color-ink)]">강의</a>
            <a href="#contact" className="hover:text-[var(--color-ink)] font-semibold text-[var(--color-ink)]">의뢰</a>
          </nav>
        </header>

        <section className="grid gap-10 border-b border-[var(--color-line)] py-16 md:grid-cols-[1.3fr_1fr] md:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              AI Automation Studio · Seoul, KR
            </p>
            <h1
              style={{ fontFamily: "var(--font-serif-ko)" }}
              className="mt-5 whitespace-pre-line text-[2.4rem] leading-[1.1] tracking-[-0.03em] md:text-[3.5rem]"
            >
              {studio.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--color-ink-soft)]">
              {studio.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-semibold text-[var(--color-bg)] hover:bg-[var(--color-accent)]"
              >
                의뢰하기 →
              </a>
              <a
                href="#work"
                className="rounded-full border border-[var(--color-ink)]/30 px-5 py-2.5 text-sm font-semibold hover:border-[var(--color-ink)]"
              >
                최근 작업 보기
              </a>
            </div>
          </div>
          <aside className="self-end text-sm leading-7 text-[var(--color-muted)] md:text-right">
            <p className="font-semibold text-[var(--color-ink)]">{studio.person} · {studio.role}</p>
            <p>{studio.company}</p>
            <p className="mt-2"><a href={`mailto:${studio.email}`} className="hover:text-[var(--color-ink)]">{studio.email}</a></p>
            <p><a href="tel:+821046859570" className="hover:text-[var(--color-ink)]">{studio.phone}</a></p>
          </aside>
        </section>

        <section className="grid grid-cols-2 gap-px border-b border-[var(--color-line)] bg-[var(--color-line)] md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-[var(--color-bg)] px-4 py-6 md:px-6 md:py-8">
              <p
                style={{ fontFamily: "var(--font-serif-en)" }}
                className="text-3xl font-medium tracking-tight md:text-4xl"
              >
                {s.value}
              </p>
              <p className="mt-2 text-xs text-[var(--color-muted)]">{s.label}</p>
            </div>
          ))}
        </section>

        <section id="services" className="border-b border-[var(--color-line)] py-16 md:py-20">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              what we do
            </h2>
            <p className="text-xs text-[var(--color-muted)]">section · 01</p>
          </div>
          <p
            style={{ fontFamily: "var(--font-serif-ko)" }}
            className="mt-3 max-w-3xl text-2xl leading-[1.3] tracking-[-0.02em] md:text-3xl"
          >
            반복을 줄이는 도구를 만들고, 그 도구를 어떻게 쓰는지 같이 가르칩니다.
          </p>
          <ol className="mt-12 grid gap-px bg-[var(--color-line)] md:grid-cols-3">
            {services.map((s) => (
              <li key={s.no} className="bg-[var(--color-bg)] p-6 md:p-7">
                <p className="text-xs font-semibold tracking-[0.24em] text-[var(--color-accent)]">{s.no}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.01em]">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="work" className="border-b border-[var(--color-line)] py-16 md:py-20">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              recent work
            </h2>
            <Link href="/work" className="text-xs text-[var(--color-muted)] hover:text-[var(--color-ink)]">
              모두 보기 →
            </Link>
          </div>
          <ul className="mt-10 divide-y divide-[var(--color-line)]">
            {workPieces.map((w, i) => (
              <li key={w.slug}>
                <Link
                  href={`/work/${w.slug}`}
                  className="group grid grid-cols-[40px_1fr_auto] items-baseline gap-4 py-6 md:gap-8 md:py-8"
                >
                  <span
                    style={{ fontFamily: "var(--font-serif-en)" }}
                    className="text-base text-[var(--color-muted)] md:text-lg"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
                      {w.eyebrow} · {w.field}
                    </p>
                    <h3
                      style={{ fontFamily: "var(--font-serif-ko)" }}
                      className="mt-2 text-xl leading-[1.25] tracking-[-0.02em] md:text-2xl"
                    >
                      {w.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-ink-soft)]">
                      {w.intro}
                    </p>
                  </div>
                  <span className="hidden self-center text-sm text-[var(--color-muted)] group-hover:text-[var(--color-accent)] md:inline">
                    상세 →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section id="lectures" className="border-b border-[var(--color-line)] py-16 md:py-20">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              lectures · coaching
            </h2>
            <Link href="/lectures" className="text-xs text-[var(--color-muted)] hover:text-[var(--color-ink)]">
              전체 →
            </Link>
          </div>
          <p
            style={{ fontFamily: "var(--font-serif-ko)" }}
            className="mt-3 max-w-3xl text-2xl leading-[1.3] tracking-[-0.02em] md:text-3xl"
          >
            AI 입문자부터 실무자까지. 12회+ 워크숍·코칭.
          </p>
          <table className="mt-10 w-full text-sm">
            <thead className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
              <tr className="border-b border-[var(--color-line)]">
                <th className="py-3 text-left font-medium">일자</th>
                <th className="py-3 text-left font-medium">제목</th>
                <th className="hidden py-3 text-left font-medium md:table-cell">대상</th>
                <th className="hidden py-3 text-left font-medium md:table-cell">형식</th>
                <th className="py-3 text-right font-medium">상태</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((s) => (
                <tr key={s.title} className="border-b border-[var(--color-line)]/60">
                  <td
                    style={{ fontFamily: "var(--font-serif-en)" }}
                    className="py-4 pr-3 align-top text-[var(--color-muted)]"
                  >
                    {s.date}
                  </td>
                  <td className="py-4 pr-3 align-top">
                    <p className="font-medium">{s.title}</p>
                    <p className="mt-1 text-xs text-[var(--color-muted)] md:hidden">
                      {s.audience} · {s.format}
                    </p>
                  </td>
                  <td className="hidden py-4 pr-3 align-top text-[var(--color-ink-soft)] md:table-cell">
                    {s.audience}
                  </td>
                  <td className="hidden py-4 pr-3 align-top text-[var(--color-ink-soft)] md:table-cell">
                    {s.format}
                  </td>
                  <td className="py-4 text-right align-top">
                    <span
                      className={
                        s.status === "완료"
                          ? "text-[var(--color-muted)]"
                          : s.status === "진행 중"
                          ? "text-[var(--color-accent)] font-medium"
                          : "text-[var(--color-ink)] font-medium"
                      }
                    >
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section id="contact" className="py-16 md:py-20">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]">
              contact
            </h2>
            <p className="text-xs text-[var(--color-muted)]">답장은 본인이 직접</p>
          </div>
          <p
            style={{ fontFamily: "var(--font-serif-ko)" }}
            className="mt-3 max-w-3xl text-2xl leading-[1.3] tracking-[-0.02em] md:text-3xl"
          >
            반복되는 업무가 있다면, 30분 안에 같이 봅니다.
          </p>
          <div className="mt-10 grid gap-px bg-[var(--color-line)] md:grid-cols-2">
            <div className="bg-[var(--color-bg)] p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">email</p>
              <a href={`mailto:${studio.email}`} className="mt-2 block text-base hover:text-[var(--color-accent)]">
                {studio.email}
              </a>
            </div>
            <div className="bg-[var(--color-bg)] p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">phone</p>
              <a href="tel:+821046859570" className="mt-2 block text-base hover:text-[var(--color-accent)]">
                {studio.phone}
              </a>
            </div>
            <div className="bg-[var(--color-bg)] p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">kakaotalk</p>
              <p className="mt-2 text-base">{studio.kakao}</p>
            </div>
            <div className="bg-[var(--color-bg)] p-6">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">company</p>
              <p className="mt-2 text-base">{studio.company}</p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${studio.email}?subject=%5B의뢰%5D%20AI%20자동화%20프로젝트`}
              className="rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-semibold text-[var(--color-bg)] hover:bg-[var(--color-accent)]"
            >
              프로젝트 의뢰 →
            </a>
            <a
              href={`mailto:${studio.email}?subject=%5B의뢰%5D%20AI%20강의%20문의`}
              className="rounded-full border border-[var(--color-ink)]/30 px-5 py-2.5 text-sm font-semibold hover:border-[var(--color-ink)]"
            >
              강의 문의
            </a>
          </div>
        </section>

        <footer className="flex flex-wrap items-baseline justify-between gap-2 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-muted)]">
          <p>© {new Date().getFullYear()} {studio.company} · {studio.url}</p>
          <p>KAIST 전산학부 · {studio.person}</p>
        </footer>
      </Container>
    </main>
  );
}
