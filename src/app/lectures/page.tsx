import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { sessions, studio } from "../../content/site";

export const metadata: Metadata = {
  title: "강의",
  description: "AI를 소개하는 시간이 아니라 실제 업무 흐름을 함께 다시 그리는 워크숍과 코칭.",
  alternates: { canonical: "/lectures" },
};

const statusColor = {
  완료: "bg-[#ffdebd]",
  "진행 중": "bg-[#cfff47]",
  예정: "bg-[#cdb4ff]",
};

export default function LecturesPage() {
  return (
    <>
      <SiteHeader />
      <main className="py-10 md:py-16">
        <Container size="wide">
          <section className="rounded-[2.75rem] bg-[#ffdebd] p-7 shadow-[0_18px_0_rgba(75,37,88,0.12)] md:p-10">
            <SectionLabel>lectures & workshops</SectionLabel>
            <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.075em] md:text-8xl">
              AI를 설명하기보다, 내 일에 붙이는 법을 같이 봅니다.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-[var(--color-ink-soft)]">
              강의는 사람을 만나기 위한 자리입니다. 하지만 내용은 실제 업무 자료와 작은 시스템 실험으로 남아야 합니다.
            </p>
          </section>

          <section className="mt-8 grid gap-4">
            {sessions.map((session) => (
              <article key={`${session.date}-${session.title}`} className="grid gap-4 rounded-[2rem] bg-[var(--color-paper)] p-5 shadow-[0_10px_0_rgba(75,37,88,0.1)] md:grid-cols-[120px_1fr_160px] md:items-center md:p-6">
                <p className="text-lg font-black text-[var(--color-accent)]">{session.date}</p>
                <div>
                  <h2 className="text-2xl font-black tracking-[-0.04em]">{session.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{session.takeaway}</p>
                  <p className="mt-1 text-xs font-bold text-[var(--color-ink-soft)]">{session.audience} · {session.format}</p>
                </div>
                <p className={`w-fit rounded-full px-4 py-2 text-sm font-black md:ml-auto ${statusColor[session.status]}`}>{session.status}</p>
              </article>
            ))}
          </section>

          <section className="mt-8 rounded-[2.5rem] bg-[#b8f7cf] p-7 shadow-[0_18px_0_rgba(75,37,88,0.12)] md:p-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <p className="max-w-2xl text-3xl font-black tracking-[-0.05em] md:text-5xl">우리 조직의 실제 자료로 실습하고 싶다면?</p>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:${studio.email}?subject=강의·워크숍 문의`} className="rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm font-black text-[#fff4d8]">문의하기</a>
                <Link href="/" className="rounded-full bg-[#cfff47] px-5 py-3 text-sm font-black text-[var(--color-ink)]">홈으로</Link>
              </div>
            </div>
          </section>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
