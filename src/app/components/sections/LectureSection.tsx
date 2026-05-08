"use client";

import Container from "../Container";
import SectionLabel from "../SectionLabel";
import { MotionReveal } from "../MotionReveal";
import { lectures } from "../../../content/lectures";

const statusColor: Record<string, string> = {
  완료: "text-[--color-muted]",
  "진행 중": "text-[--color-accent]",
  예정: "text-[--color-ink-soft]",
};

export default function LectureSection() {
  return (
    <section id="lectures" className="py-24 bg-[--color-paper-card] border-t border-[--color-paper-edge]">
      <Container size="wide">
        <MotionReveal>
          <div className="mb-12 grid gap-8 md:grid-cols-[1fr_1.5fr] md:items-end">
            <div>
              <SectionLabel index="02">강의 · 교육 · 멘토링</SectionLabel>
              <h2 className="mt-5 font-[family-name:var(--font-serif-ko)] text-3xl md:text-[2.5rem] leading-[1.2] text-[--color-ink]">
                실전 시스템에서
                <br />
                뽑아낸 코스.
              </h2>
            </div>
            <p className="text-sm md:text-base text-[--color-ink-soft] leading-relaxed max-w-xl">
              강의 자료가 라이브 시스템과 분리되지 않습니다.
              매 회차의 결과물은 슬라이드, USB 핸드오프, 트러블슈팅 매뉴얼까지 함께 갑니다.
            </p>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.1}>
          <div className="rounded-xl bg-[--color-paper] overflow-hidden border border-[--color-paper-edge]">
            <ul>
              {lectures.map((l, idx) => (
                <li
                  key={`${l.date}-${l.title}`}
                  className={`grid grid-cols-[72px_1fr_auto] md:grid-cols-[120px_1.4fr_1fr_auto] gap-3 md:gap-6 items-center px-5 md:px-8 py-4 ${
                    idx !== 0 ? "border-t border-[--color-paper-edge]" : ""
                  } hover:bg-[--color-paper-warm] transition-colors`}
                >
                  <span className="font-[family-name:var(--font-serif-en)] text-xs text-[--color-muted] tabular-nums">
                    {l.date}
                  </span>
                  <div>
                    <p className="font-[family-name:var(--font-serif-ko)] text-sm md:text-base text-[--color-ink] leading-snug">
                      {l.title}
                    </p>
                    <p className="text-[11px] text-[--color-muted] mt-0.5">
                      {l.audience} · {l.format}
                    </p>
                  </div>
                  <p className="hidden md:block text-xs text-[--color-ink-soft] leading-relaxed max-w-[200px]">
                    {l.highlight ?? ""}
                  </p>
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] shrink-0 ${
                      statusColor[l.status] ?? "text-[--color-muted]"
                    }`}
                  >
                    {l.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
