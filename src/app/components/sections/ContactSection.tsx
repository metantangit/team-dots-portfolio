"use client";

import Container from "../Container";
import SectionLabel from "../SectionLabel";
import { MotionReveal } from "../MotionReveal";

const channels = [
  { label: "Email", value: "ojsoym2@gmail.com", href: "mailto:ojsoym2@gmail.com" },
  { label: "Phone", value: "010-4685-9570", href: "tel:+821046859570" },
  { label: "KakaoTalk", value: "dots_connect", href: null },
  { label: "Domain", value: "dots-project.work", href: "https://dots-project.work", serif: true },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-[--color-paper-edge]">
      <Container size="wide">
        <div className="grid gap-16 md:grid-cols-[1fr_1fr] md:gap-24 items-start">
          {/* left */}
          <MotionReveal>
            <div>
              <SectionLabel index="05">Contact</SectionLabel>
              <h2 className="mt-6 font-[family-name:var(--font-serif-ko)] text-4xl md:text-[3.25rem] leading-[1.1] tracking-[-0.015em] text-[--color-ink]">
                답장은 <span className="text-[--color-accent]">직접</span>.
              </h2>

              <p className="mt-6 max-w-sm text-sm md:text-base text-[--color-ink-soft] leading-[1.8]">
                문의 폼도, 중개자도 없습니다.
                메일·전화·카톡 중 편한 채널로 보내면
                같은 사람이 24시간 안에 회신합니다.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:ojsoym2@gmail.com?subject=강의 의뢰"
                  className="inline-flex items-center gap-2 rounded-full bg-[--color-ink] px-6 py-3 text-sm text-[--color-bg] hover:bg-[--color-accent] transition-colors"
                >
                  강의 의뢰
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="mailto:ojsoym2@gmail.com?subject=프로젝트 의뢰"
                  className="inline-flex items-center gap-2 rounded-full border border-[--color-paper-edge] px-6 py-3 text-sm text-[--color-ink] hover:border-[--color-accent] hover:text-[--color-accent] transition-colors"
                >
                  프로젝트 의뢰
                </a>
              </div>
            </div>
          </MotionReveal>

          {/* channel list */}
          <MotionReveal delay={0.1}>
            <ul className="border-t border-[--color-paper-edge] mt-2">
              {channels.map((c) => (
                <li
                  key={c.label}
                  className="flex items-baseline justify-between gap-4 border-b border-[--color-paper-edge] py-4"
                >
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[--color-muted] shrink-0">
                    {c.label}
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      className={`text-sm md:text-base text-[--color-ink] hover:text-[--color-accent] transition-colors text-right ${
                        c.serif ? "font-[family-name:var(--font-serif-en)]" : ""
                      }`}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-sm md:text-base text-[--color-ink] text-right">
                      {c.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
