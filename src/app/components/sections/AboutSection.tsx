"use client";

import Container from "../Container";
import SectionLabel from "../SectionLabel";
import { MotionReveal } from "../MotionReveal";
import { about } from "../../../content/about";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-[--color-paper-edge]">
      <Container size="wide">
        <div className="grid gap-16 md:grid-cols-[1fr_1.6fr] items-start">
          {/* portrait card */}
          <MotionReveal>
            <div>
              <SectionLabel index="04">About</SectionLabel>
              <div className="mt-8 relative aspect-[3/4] w-full max-w-[260px] rounded-lg overflow-hidden bg-[--color-paper-card] border border-[--color-paper-edge]">
                <span className="absolute inset-0 flex items-center justify-center font-[family-name:var(--font-serif-ko)] text-[7rem] leading-none text-[--color-accent]/30 select-none">
                  오
                </span>
                <span className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2 text-[10px] uppercase tracking-[0.2em] text-[--color-muted]">
                  <span>
                    오장섭
                    <span className="block mt-0.5 text-[9px] tracking-[0.25em] text-[--color-accent]">
                      KAIST
                    </span>
                  </span>
                  <span className="font-[family-name:var(--font-serif-en)] italic normal-case tracking-normal text-[--color-accent] text-right text-[11px]">
                    Founder · Dots,
                  </span>
                </span>
              </div>
            </div>
          </MotionReveal>

          {/* copy */}
          <MotionReveal delay={0.12}>
            <div>
              <h2 className="font-[family-name:var(--font-serif-ko)] text-3xl md:text-[2.75rem] leading-[1.2] text-[--color-ink]">
                깔때기를
                <br />
                운영합니다.
              </h2>
              <p className="mt-6 text-sm md:text-base text-[--color-ink-soft] leading-[1.8] max-w-2xl">
                {about.shortBio}
              </p>

              <div className="mt-10 grid gap-8 md:grid-cols-2 border-t border-[--color-paper-edge] pt-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-muted] mb-3">
                    정체성
                  </p>
                  <ul className="space-y-2 text-sm text-[--color-ink-soft]">
                    {about.identity.map((item) => (
                      <li key={item} className="leading-relaxed">
                        — {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-muted] mb-3">
                    차별화
                  </p>
                  <ul className="space-y-2 text-sm text-[--color-ink-soft]">
                    {about.differentiation.map((d) => (
                      <li key={d} className="leading-relaxed">
                        — {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
