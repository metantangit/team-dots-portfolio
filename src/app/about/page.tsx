import type { Metadata } from "next";
import Link from "next/link";
import { about } from "../../content/about";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "오장섭 — KAIST 출신 개발자 · 강사",
  description: about.shortBio,
  alternates: { canonical: "/about" },
};

const credentials = [
  { value: "KAIST", label: "전산학부 졸업" },
  { value: "12+", label: "강의·코칭 케이스" },
  { value: "5개", label: "AI 플랫폼 모듈" },
  { value: "852건", label: "실거래 데이터 처리" },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-0">
        {/* ── Hero ── */}
        <section className="py-16 md:py-24 border-b border-[--color-paper-edge]">
          <Container size="wide">
            <div className="grid gap-12 md:grid-cols-[300px_1fr] md:gap-20 items-start">
              {/* Monogram card — enlarged */}
              <div>
                <SectionLabel>오장섭 · Dots,</SectionLabel>
                <div className="mt-8 relative aspect-[3/4] w-full max-w-[260px] rounded-lg overflow-hidden bg-[--color-paper-card] border border-[--color-paper-edge]">
                  <span className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-serif-ko)] text-[9rem] leading-none text-[--color-accent]/25 select-none">
                    오
                  </span>
                  <span className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[--color-muted]">
                      오장섭
                      <span className="block mt-1 text-[11px] tracking-[0.3em] text-[--color-accent] font-semibold">
                        KAIST
                      </span>
                    </span>
                    <span className="font-[family-name:var(--font-serif-en)] italic normal-case tracking-normal text-[--color-accent] text-right text-[12px]">
                      Founder · Dots,
                    </span>
                  </span>
                </div>
              </div>

              {/* Headline + bio */}
              <div>
                {/* KAIST credential — prominent */}
                <div className="mb-6 inline-flex items-center gap-3 border border-[--color-accent]/40 rounded-full px-4 py-1.5 bg-[--color-accent]/5">
                  <span className="font-[family-name:var(--font-serif-en)] italic text-[--color-accent] text-sm">
                    KAIST
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[--color-muted]">
                    전산학부
                  </span>
                </div>

                <h1 className="font-[family-name:var(--font-serif-ko)] text-[2.2rem] sm:text-[3rem] md:text-[3.75rem] leading-[1.1] tracking-[-0.02em] text-[--color-ink]">
                  깔때기를
                  <br />
                  운영합니다.
                </h1>

                <p className="mt-7 text-base md:text-lg text-[--color-ink-soft] leading-[1.85] max-w-2xl">
                  {about.shortBio}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Credentials / Path ── */}
        <section className="py-16 md:py-24 border-b border-[--color-paper-edge]">
          <Container size="wide">
            <SectionLabel>경력 · 이력</SectionLabel>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 border-t border-[--color-paper-edge]">
              {credentials.map((c, i) => (
                <div
                  key={c.label}
                  className={`pt-8 pb-4 pr-6 ${i !== 0 ? "border-l border-[--color-paper-edge] pl-6 pr-0" : ""}`}
                >
                  <p className="font-[family-name:var(--font-serif-en)] italic text-[2rem] md:text-[2.5rem] text-[--color-ink] leading-none">
                    {c.value}
                  </p>
                  <p className="mt-2.5 text-[10px] uppercase tracking-[0.25em] text-[--color-muted] leading-snug">
                    {c.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Identity + Differentiation */}
            <div className="mt-16 grid gap-12 md:grid-cols-2 border-t border-[--color-paper-edge] pt-12">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-muted] mb-5">
                  정체성
                </p>
                <ul className="space-y-3 text-sm text-[--color-ink-soft]">
                  {about.identity.map((item) => (
                    <li key={item} className="leading-relaxed flex gap-3">
                      <span className="text-[--color-accent] shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-muted] mb-5">
                  차별화
                </p>
                <ul className="space-y-3 text-sm text-[--color-ink-soft]">
                  {about.differentiation.map((d) => (
                    <li key={d} className="leading-relaxed flex gap-3">
                      <span className="text-[--color-accent] shrink-0">—</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Contact ── */}
        <section className="py-16 md:py-24">
          <Container size="wide">
            <SectionLabel>연락처</SectionLabel>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-muted] mb-2">
                  이메일
                </p>
                <a
                  href={`mailto:${about.contact.email}`}
                  className="text-sm text-[--color-ink-soft] hover:text-[--color-accent] transition-colors"
                >
                  {about.contact.email}
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-muted] mb-2">
                  전화
                </p>
                <a
                  href={`tel:+82${about.contact.phone.replace(/-/g, "").slice(1)}`}
                  className="text-sm text-[--color-ink-soft] hover:text-[--color-accent] transition-colors"
                >
                  {about.contact.phone}
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-muted] mb-2">
                  카카오
                </p>
                <span className="text-sm text-[--color-ink-soft]">
                  {about.contact.kakao}
                </span>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-muted] mb-2">
                  회사
                </p>
                <span className="text-sm text-[--color-ink-soft]">
                  {about.contact.company}
                </span>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href={`mailto:${about.contact.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-[--color-ink] px-6 py-3 text-sm text-[--color-bg] hover:bg-[--color-accent] transition-colors"
              >
                의뢰하기
                <span aria-hidden>→</span>
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-[--color-paper-edge] px-6 py-3 text-sm text-[--color-ink] hover:border-[--color-accent] hover:text-[--color-accent] transition-colors"
              >
                ← 홈으로
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
