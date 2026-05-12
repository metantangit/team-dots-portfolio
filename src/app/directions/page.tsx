import type { Metadata } from "next";
import Link from "next/link";
import Container from "../components/Container";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { directions } from "../../content/directions";

export const metadata: Metadata = {
  title: "새 디자인 방향",
  description: "장난스러운 톤을 벗어난 네 가지 새로운 포트폴리오 디자인 방향.",
  alternates: { canonical: "/directions" },
};

export default function DirectionsPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#f3efe8] py-12 text-[#202124] md:py-20">
        <Container size="wide">
          <section className="border-b border-[#202124]/20 pb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#335c67]">new serious directions</p>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.06em] md:text-8xl">
              장난스러움 말고, 완전히 다른 디자인 문법 4개.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#61645f]">
              이번 시안은 색만 바꾸지 않고 형태 자체를 바꿉니다. 에디토리얼, 설계도, 따뜻한 작업실, B2B 보고서 네 방향입니다.
            </p>
          </section>
          <section className="mt-10 grid gap-4 md:grid-cols-2">
            {directions.map((direction) => (
              <Link
                key={direction.slug}
                href={`/directions/${direction.slug}`}
                className="group grid min-h-[390px] border border-[#202124]/15 bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(32,33,36,0.12)] md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: direction.palette.accent }}>
                      {direction.label} · {direction.name}
                    </p>
                    <div className="flex gap-1.5">
                      {Object.values(direction.palette).slice(0, 5).map((color) => (
                        <span key={color} className="size-5 rounded-full border border-black/10" style={{ background: color }} />
                      ))}
                    </div>
                  </div>
                  <h2 className="mt-10 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-6xl">
                    {direction.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-sm leading-7 text-[#61645f]">{direction.tone}</p>
                </div>
                <p className="self-end text-sm font-semibold" style={{ color: direction.palette.accent }}>시안 보기 →</p>
              </Link>
            ))}
          </section>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
