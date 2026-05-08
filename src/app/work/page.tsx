import type { Metadata } from "next";
import Link from "next/link";
import { cases } from "../../content/cases";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import WorkGrid from "./WorkGrid";

export const metadata: Metadata = {
  title: "작업",
  description:
    "강의로 시작해 공동 프로젝트, 장기 계약, B2B 확장으로 이어진 세 케이스.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-0">
        {/* Page header */}
        <section className="py-16 md:py-24 border-b border-[--color-paper-edge]">
          <Container size="wide">
            <SectionLabel>시그니처 작업</SectionLabel>
            <h1 className="mt-6 font-[family-name:var(--font-serif-ko)] text-[2.2rem] sm:text-[3rem] md:text-[3.75rem] leading-[1.1] tracking-[-0.02em] text-[--color-ink] max-w-2xl">
              강의에서
              <br />
              개발로 흐른다.
            </h1>
            <p className="mt-6 text-sm md:text-base text-[--color-ink-soft] leading-[1.8] max-w-lg">
              세 케이스 모두{" "}
              <span className="text-[--color-accent]">강의·교육으로 시작</span>
              해 공동 프로젝트, 장기 계약, B2B 확장으로 이어졌습니다.
            </p>
          </Container>
        </section>

        {/* Magazine grid */}
        <section>
          <Container size="wide">
            <WorkGrid cases={cases} />
          </Container>
        </section>

        {/* Back to home */}
        <div className="border-t border-[--color-paper-edge] py-8">
          <Container size="wide">
            <Link
              href="/"
              className="text-xs uppercase tracking-[0.25em] text-[--color-muted] hover:text-[--color-accent] transition-colors"
            >
              ← 홈으로
            </Link>
          </Container>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
