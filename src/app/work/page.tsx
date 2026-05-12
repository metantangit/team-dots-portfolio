import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { workPieces } from "../../content/site";
import WorkGrid from "./WorkGrid";

export const metadata: Metadata = {
  title: "작업 조각",
  description: "고객 식별 정보 대신 문제 흐름과 만든 도구를 보여주는 Dots 작업 조각들.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main className="py-10 md:py-16">
        <Container size="wide">
          <section className="rounded-[2.75rem] bg-[#b8f7cf] p-7 shadow-[0_18px_0_rgba(75,37,88,0.12)] md:p-10">
            <SectionLabel>work pieces</SectionLabel>
            <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.075em] md:text-8xl">
              보여줄 수 있는 만큼만, 그러나 흐름은 분명하게.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-[var(--color-ink-soft)]">
              고객 이름이나 원본 자료 없이도 어떤 반복을 줄이고 어떤 도구를 남겼는지는 설명할 수 있습니다.
            </p>
          </section>

          <section className="mt-8">
            <WorkGrid pieces={workPieces} />
          </section>

          <div className="py-8">
            <Link href="/" className="font-black text-[var(--color-accent)]">← 홈으로</Link>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
