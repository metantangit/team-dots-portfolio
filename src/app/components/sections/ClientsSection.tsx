"use client";

import Container from "../Container";
import SectionLabel from "../SectionLabel";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "../MotionReveal";
import { clients } from "../../../content/clients";

export default function ClientsSection() {
  return (
    <section id="clients" className="py-24 border-t border-[--color-paper-edge]">
      <Container size="wide">
        <MotionReveal>
          <div className="mb-12 grid gap-6 md:grid-cols-[1fr_1.6fr] md:items-end">
            <div>
              <SectionLabel index="03">함께한 분들</SectionLabel>
              <h2 className="mt-5 font-[family-name:var(--font-serif-ko)] text-3xl md:text-[2.5rem] leading-[1.2] text-[--color-ink]">
                도메인을
                <br />
                가리지 않습니다.
              </h2>
            </div>
            <p className="text-sm md:text-base text-[--color-ink-soft] leading-relaxed max-w-lg">
              요식업·부동산·금융·패션·교육·물류·스포츠.
              v1은 익명 카테고리로 표기하며, 동의받은 곳부터 v2에서 실명으로 전환합니다.
            </p>
          </div>
        </MotionReveal>

        <MotionStagger
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-[--color-paper-edge] border border-[--color-paper-edge] rounded-xl overflow-hidden"
          delay={0.05}
          stagger={0.06}
        >
          {clients.map((c) => (
            <MotionStaggerItem key={c.label}>
              <div className="bg-[--color-paper] px-5 py-6 hover:bg-[--color-paper-warm] transition-colors group h-full">
                <p className="font-[family-name:var(--font-serif-ko)] text-base text-[--color-ink] leading-snug group-hover:text-[--color-accent] transition-colors">
                  {c.label}
                </p>
                <p className="text-[11px] text-[--color-muted] mt-1.5 tracking-wide">{c.category}</p>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </Container>
    </section>
  );
}
