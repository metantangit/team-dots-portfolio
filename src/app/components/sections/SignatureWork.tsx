"use client";

import Container from "../Container";
import SectionLabel from "../SectionLabel";
import { MotionReveal } from "../MotionReveal";
import { cases } from "../../../content/cases";

export default function SignatureWork() {
  return (
    <section
      id="work"
      className="py-24 md:py-32 border-t border-[--color-paper-edge]"
    >
      <Container size="wide">
        <MotionReveal>
          <div className="mb-16 grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-end">
            <div>
              <SectionLabel index="01">시그니처 작업</SectionLabel>
              <h2 className="mt-6 font-[family-name:var(--font-serif-ko)] text-3xl md:text-[2.75rem] leading-[1.15] text-[--color-ink]">
                강의에서
                <br />
                개발로 흐른다.
              </h2>
            </div>
            <p className="text-sm md:text-base text-[--color-ink-soft] leading-relaxed max-w-xl">
              세 케이스 모두{" "}
              <span className="text-[--color-accent]">강의·교육으로 시작</span>
              해 공동 프로젝트, 장기 계약, B2B 확장으로 이어졌습니다.
              클라이언트는 v1 정책상 카테고리로만 표기합니다.
            </p>
          </div>
        </MotionReveal>

        <div className="space-y-24 md:space-y-32">
          {cases.map((c) => (
            <MotionReveal key={c.slug} delay={0.05}>
              <article className="grid gap-8 md:grid-cols-[80px_1fr] md:gap-16">
                {/* index + category column */}
                <div className="md:sticky md:top-28 md:self-start">
                  <p className="font-[family-name:var(--font-serif-en)] italic text-[2.5rem] md:text-5xl text-[--color-accent] leading-none">
                    {String(c.order).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-[--color-muted] leading-snug">
                    {c.category}
                  </p>
                </div>

                {/* content column */}
                <div>
                  <h3 className="font-[family-name:var(--font-serif-ko)] text-2xl md:text-[2rem] text-[--color-ink] leading-tight">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs text-[--color-muted] tracking-wide">
                    {c.client} · {c.period}
                  </p>

                  <p className="mt-6 text-sm md:text-base text-[--color-ink-soft] leading-relaxed max-w-2xl">
                    {c.summary}
                  </p>

                  {/* metrics */}
                  <div className="mt-8 grid gap-px bg-[--color-paper-edge] border border-[--color-paper-edge] rounded-lg overflow-hidden sm:grid-cols-3">
                    {c.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="bg-[--color-paper-card] px-5 py-4"
                      >
                        <p className="text-[10px] uppercase tracking-[0.25em] text-[--color-muted]">
                          {m.label}
                        </p>
                        <p className="mt-1.5 font-[family-name:var(--font-serif-ko)] text-2xl text-[--color-ink]">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* outputs + impact */}
                  <div className="mt-10 grid gap-10 md:grid-cols-2">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-muted] mb-3">
                        만든 것
                      </p>
                      <ul className="space-y-1.5 text-sm text-[--color-ink-soft]">
                        {c.outputs.map((o) => (
                          <li key={o} className="leading-relaxed">
                            — {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-muted] mb-3">
                        임팩트
                      </p>
                      <ul className="space-y-1.5 text-sm text-[--color-ink-soft]">
                        {c.impact.map((imp) => (
                          <li key={imp} className="leading-relaxed">
                            — {imp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {c.pullquote && (
                    <blockquote className="mt-12 border-l-2 border-[--color-accent] pl-6 max-w-2xl">
                      <p className="font-[family-name:var(--font-serif-ko)] text-lg md:text-xl text-[--color-ink] leading-snug">
                        &ldquo;{c.pullquote}&rdquo;
                      </p>
                    </blockquote>
                  )}
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
