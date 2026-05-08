import type { Metadata } from "next";
import Link from "next/link";
import { lectures, type LectureStatus } from "../../content/lectures";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "강의",
  description:
    "부동산, F&B, 회계, 교육 도메인을 가리지 않는 AI 강의·코칭 케이스 목록.",
  alternates: { canonical: "/lectures" },
};

const statusConfig: Record<
  LectureStatus,
  { label: string; className: string }
> = {
  완료: {
    label: "완료",
    className: "text-[--color-muted] border-[--color-paper-edge]",
  },
  "진행 중": {
    label: "진행 중",
    className: "text-[--color-accent] border-[--color-accent]",
  },
  예정: {
    label: "예정",
    className: "text-[--color-ink-soft] border-[--color-ink-soft]",
  },
};

export default function LecturesPage() {
  const ongoing = lectures.filter((l) => l.status === "진행 중");
  const planned = lectures.filter((l) => l.status === "예정");
  const completed = lectures.filter((l) => l.status === "완료");

  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-0">
        {/* Page header */}
        <section className="py-16 md:py-24 border-b border-[--color-paper-edge]">
          <Container size="wide">
            <SectionLabel>강의 · 코칭</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-serif-ko)] text-[2.2rem] sm:text-[3rem] md:text-[3.75rem] leading-[1.1] tracking-[-0.02em] text-[--color-ink] max-w-2xl">
              가르치고,
              <br />
              함께 만든다.
            </h1>
            <p className="mt-6 text-sm md:text-base text-[--color-ink-soft] leading-[1.8] max-w-lg">
              도메인 구분 없이,{" "}
              <span className="text-[--color-accent]">실전 시스템을 만든 사람</span>
              이 직접 가르칩니다.
            </p>

            {/* Summary stats */}
            <div className="mt-12 flex flex-wrap gap-8 border-t border-[--color-paper-edge] pt-8">
              <div>
                <p className="font-[family-name:var(--font-serif-en)] italic text-3xl text-[--color-ink] leading-none">
                  {lectures.length}
                </p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.25em] text-[--color-muted]">
                  총 케이스
                </p>
              </div>
              <div className="border-l border-[--color-paper-edge] pl-8">
                <p className="font-[family-name:var(--font-serif-en)] italic text-3xl text-[--color-accent] leading-none">
                  {ongoing.length}
                </p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.25em] text-[--color-muted]">
                  진행 중
                </p>
              </div>
              <div className="border-l border-[--color-paper-edge] pl-8">
                <p className="font-[family-name:var(--font-serif-en)] italic text-3xl text-[--color-ink] leading-none">
                  {completed.length}
                </p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.25em] text-[--color-muted]">
                  완료
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Lecture table */}
        <section className="py-0">
          <Container size="wide">
            {/* Header row — desktop only */}
            <div className="hidden md:grid grid-cols-[120px_1fr_180px_140px_120px] gap-6 py-4 border-b border-[--color-paper-edge] text-[10px] uppercase tracking-[0.25em] text-[--color-muted]">
              <span>일자</span>
              <span>주제 · 대상</span>
              <span>포맷</span>
              <span>하이라이트</span>
              <span className="text-right">상태</span>
            </div>

            <ol className="divide-y divide-[--color-paper-edge]">
              {[...ongoing, ...planned, ...completed].map((l, i) => {
                const s = statusConfig[l.status];
                return (
                  <li
                    key={i}
                    className="group grid gap-3 md:grid-cols-[120px_1fr_180px_140px_120px] md:gap-6 py-6 md:py-5 md:items-center"
                  >
                    {/* Date */}
                    <p className="text-xs font-[family-name:var(--font-serif-en)] italic text-[--color-muted]">
                      {l.date}
                    </p>

                    {/* Title + audience */}
                    <div>
                      <p className="text-sm text-[--color-ink] leading-snug font-[family-name:var(--font-serif-ko)]">
                        {l.title}
                      </p>
                      <p className="mt-0.5 text-xs text-[--color-muted]">
                        {l.audience}
                      </p>
                    </div>

                    {/* Format */}
                    <p className="text-xs text-[--color-ink-soft]">{l.format}</p>

                    {/* Highlight */}
                    <p className="text-xs text-[--color-accent] leading-snug">
                      {l.highlight ?? "—"}
                    </p>

                    {/* Status badge */}
                    <div className="md:text-right">
                      <span
                        className={`inline-block text-[10px] uppercase tracking-[0.2em] border rounded-full px-2.5 py-0.5 ${s.className}`}
                      >
                        {s.label}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Container>
        </section>

        {/* CTA */}
        <div className="border-t border-[--color-paper-edge] py-16">
          <Container size="wide">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
              <p className="font-[family-name:var(--font-serif-ko)] text-xl md:text-2xl text-[--color-ink] leading-snug max-w-sm">
                강의 의뢰 · 코칭 문의
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:ojsoym2@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-[--color-ink] px-6 py-3 text-sm text-[--color-bg] hover:bg-[--color-accent] transition-colors"
                >
                  이메일 보내기
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-full border border-[--color-paper-edge] px-6 py-3 text-sm text-[--color-ink] hover:border-[--color-accent] hover:text-[--color-accent] transition-colors"
                >
                  ← 홈으로
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
