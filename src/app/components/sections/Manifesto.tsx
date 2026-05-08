"use client";

import Container from "../Container";
import { MotionReveal } from "../MotionReveal";

const beats = [
  {
    label: "Funnel",
    title: "강의가 입구, 개발이 출구.",
    body: "신뢰가 쌓이면 협업 제안이 자연스럽게 발생합니다. 모든 케이스가 이 흐름을 따랐습니다.",
  },
  {
    label: "Live material",
    title: "슬라이드는 운영 코드에서 직접 잘라냅니다.",
    body: "강의 자료가 실제 라이브 시스템과 분리되지 않습니다. 수강생은 작동하는 코드를 손에 쥐고 나갑니다.",
  },
  {
    label: "Handoff",
    title: "끝나도 혼자서 이어갑니다.",
    body: "라이브 덱 · USB 패키지 · 트러블슈팅 매뉴얼. 다음 단계를 의존 없이 실행할 수 있도록.",
  },
];

export default function Manifesto() {
  return (
    <section className="py-24 md:py-32 border-t border-[--color-paper-edge]">
      <Container size="wide">
        <MotionReveal>
          <p className="font-[family-name:var(--font-serif-ko)] text-2xl md:text-[2.25rem] lg:text-[2.5rem] leading-[1.3] text-[--color-ink] max-w-4xl">
            AI를 잘 가르치는 사람은 많습니다.
            <br />
            <span className="text-[--color-muted]">하지만 그 자리에서 바로 </span>
            <span className="text-[--color-accent]">제품을 만들어 넘기는</span>
            <span className="text-[--color-muted]"> 사람은 드뭅니다.</span>
          </p>
        </MotionReveal>

        <div className="mt-20 grid gap-0 md:grid-cols-3 border-t border-[--color-paper-edge]">
          {beats.map((b, i) => (
            <MotionReveal key={b.label} delay={i * 0.12}>
              <div
                className={`pt-8 pb-8 ${i !== 0 ? "md:border-l md:border-[--color-paper-edge] md:pl-8" : ""} ${i < beats.length - 1 ? "border-b border-[--color-paper-edge] md:border-b-0 pr-0 md:pr-8" : ""}`}
              >
                <p className="font-[family-name:var(--font-serif-en)] italic text-xs text-[--color-accent] mb-4 tracking-wide">
                  {String(i + 1).padStart(2, "0")} · {b.label}
                </p>
                <h3 className="font-[family-name:var(--font-serif-ko)] text-lg md:text-xl text-[--color-ink] leading-snug mb-4">
                  {b.title}
                </h3>
                <p className="text-sm text-[--color-ink-soft] leading-relaxed">
                  {b.body}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
