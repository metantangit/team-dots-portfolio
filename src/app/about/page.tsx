import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { about, studio } from "../../content/site";

export const metadata: Metadata = {
  title: "소개",
  description: about.body,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="py-10 md:py-16">
        <Container size="wide">
          <section className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2.75rem] bg-[#cdb4ff] p-7 shadow-[0_18px_0_rgba(75,37,88,0.12)] md:p-10">
              <SectionLabel>오장섭</SectionLabel>
              <div className="mt-10 grid aspect-square max-w-[420px] place-items-center rounded-full bg-[#fff8e8]/70">
                <div className="grid size-48 place-items-center rounded-full bg-[#cfff47] text-7xl font-black tracking-[-0.08em] text-[var(--color-ink)] shadow-[0_12px_0_rgba(75,37,88,0.14)]">
                  오
                </div>
              </div>
            </div>
            <div className="rounded-[2.75rem] bg-[var(--color-paper)] p-7 shadow-[0_18px_0_rgba(75,37,88,0.12)] md:p-10">
              <SectionLabel>about</SectionLabel>
              <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.075em] md:text-8xl">
                {about.title}
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-9 text-[var(--color-ink-soft)]">{about.body}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {about.facts.map((fact) => (
                  <span key={fact} className="rounded-full bg-[#ffdebd] px-4 py-2 text-sm font-black text-[var(--color-ink-soft)]">
                    {fact}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-8 rounded-[2.5rem] bg-[#9ed4ff] p-7 shadow-[0_18px_0_rgba(75,37,88,0.12)] md:p-10">
            <div className="grid gap-7 md:grid-cols-[1fr_0.8fr] md:items-end">
              <h2 className="text-4xl font-black tracking-[-0.06em] md:text-6xl">
                작은 문제부터 같이 보면, 꽤 많은 일이 가벼워집니다.
              </h2>
              <div className="rounded-[2rem] bg-[#fff8e8] p-6 text-sm leading-7 text-[var(--color-muted)]">
                <a className="block font-black text-[var(--color-accent)]" href={`mailto:${studio.email}`}>{studio.email}</a>
                <a className="mt-2 block" href="tel:+821046859570">{studio.phone}</a>
                <p className="mt-2">Kakao {studio.kakao}</p>
                <p className="mt-2">{studio.company}</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${studio.email}?subject=작게 시스템화하고 싶은 일`} className="rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-black text-[#fff4d8]">메일 보내기</a>
              <Link href="/" className="rounded-full bg-[#cfff47] px-6 py-3 text-sm font-black text-[var(--color-ink)]">홈으로</Link>
            </div>
          </section>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
