import Link from "next/link";
import Container from "./components/Container";
import { directions } from "../content/directions";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3efe8] text-[#202124]">
      <Container size="wide" className="py-8 md:py-12">
        <header className="flex items-center justify-between border-b border-[#202124]/20 pb-5">
          <Link href="/" className="text-sm font-semibold tracking-[-0.02em]">
            dots-project.work
          </Link>
          <Link href="/#directions" className="text-xs font-semibold uppercase tracking-[0.24em] text-[#61645f]">
            four new systems
          </Link>
        </header>

        <section className="grid gap-10 border-b border-[#202124]/20 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#335c67]">
              reset from zero
            </p>
            <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.065em] md:text-8xl">
              같은 내용이 아니라,
              <span className="block">다른 사고방식 4개.</span>
            </h1>
          </div>
          <div className="self-end">
            <p className="max-w-xl text-lg leading-8 text-[#61645f]">
              컬러 장난감 톤을 버리고, 아예 다른 디자인 도구로 다시 나눴습니다.
              에디토리얼, 설계도, 따뜻한 작업실, B2B 도시에어 — 각 방향은 화면 구조와 카피 리듬부터 다릅니다.
            </p>
          </div>
        </section>

        <section id="directions" className="grid gap-px bg-[#202124]/15 md:grid-cols-2">
          {directions.map((direction) => (
            <Link
              key={direction.slug}
              href={`/directions/${direction.slug}`}
              className="group min-h-[460px] bg-[#f3efe8] p-6 transition hover:bg-white md:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em]" style={{ color: direction.palette.accent }}>
                  {direction.label} · {direction.name}
                </p>
                <div className="grid grid-cols-3 gap-1">
                  {Object.values(direction.palette).slice(0, 6).map((color) => (
                    <span key={color} className="size-5 border border-black/10" style={{ background: color }} />
                  ))}
                </div>
              </div>
              <h2 className="mt-16 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-6xl">
                {direction.title}
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[#61645f]">
                {direction.tone}
              </p>
              <p className="mt-12 text-sm font-semibold" style={{ color: direction.palette.accent }}>
                open direction →
              </p>
            </Link>
          ))}
        </section>
      </Container>
    </main>
  );
}
