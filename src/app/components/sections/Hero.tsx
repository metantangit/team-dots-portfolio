"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../Container";

const stats = [
  { value: "12+", label: "강의·코칭 케이스" },
  { value: "5개", label: "AI 플랫폼 모듈" },
  { value: "852건", label: "실거래 데이터 처리" },
  { value: "KAIST", label: "출신 개발자" },
];

// 5 most visually distinct teamdots screenshots for mosaic
const mosaicImages = [
  { src: "/screenshots/teamdots-business-viewport.png", alt: "AI 플랫폼 비즈니스 대시보드" },
  { src: "/screenshots/teamdots-home-viewport.png", alt: "AI 플랫폼 홈 화면" },
  { src: "/screenshots/teamdots-realestate-viewport.png", alt: "부동산 분석 모듈" },
  { src: "/screenshots/teamdots-rnd-viewport.png", alt: "R&D 리서치 모듈" },
  { src: "/screenshots/teamdots-ai-research-detail.png", alt: "AI 리서치 상세 화면" },
];

// KST clock component
function KstClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    function update() {
      const now = new Date();
      const kst = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Seoul" }));
      const hh = String(kst.getHours()).padStart(2, "0");
      const mm = String(kst.getMinutes()).padStart(2, "0");
      const ss = String(kst.getSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss} KST`);
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <span
      className="font-[family-name:var(--font-sans)] tracking-[0.15em] text-[--color-muted] tabular-nums text-[10px]"
      aria-label="현재 한국 표준시"
    >
      {time}
    </span>
  );
}

// Single mosaic tile with individual parallax
function MosaicTile({
  image,
  className,
  scrollY,
  parallaxRange,
  priority = false,
}: {
  image: { src: string; alt: string };
  className: string;
  scrollY: ReturnType<typeof useScroll>["scrollY"];
  parallaxRange: [number, number];
  priority?: boolean;
}) {
  const y = useTransform(scrollY, [0, 600], parallaxRange);

  return (
    <motion.div
      style={{ y }}
      className={`relative overflow-hidden rounded-sm border border-[--color-paper-edge] ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 1280px) 50vw, 400px"
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[--color-bg]/20" />
    </motion.div>
  );
}

// Headline words for stagger animation
const headlineLines = ["AI를 가르치고,", "AI로 만든다."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 overflow-hidden"
    >
      {/* radial glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(201,168,106,0.06),transparent_55%)]"
      />

      <Container size="wide">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* ── Left column: text content ── */}
          <div className="lg:col-span-5 flex flex-col gap-0">
            {/* eyebrow */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[--color-muted] mb-8 sm:mb-10">
              <span className="h-px w-6 bg-[--color-paper-edge]" />
              <span>오장섭 · Dots,</span>
              <span className="h-px w-6 bg-[--color-paper-edge]" />
              <span className="text-[--color-ink] tracking-[0.28em] sm:tracking-[0.3em]">KAIST</span>
              <span className="text-[--color-paper-edge]">/</span>
              <span className="font-[family-name:var(--font-serif-en)] italic text-[--color-accent] normal-case tracking-normal">
                Seoul
              </span>
              <span className="hidden sm:inline-block ml-1 h-px w-4 bg-[--color-paper-edge]" />
              <KstClock />
            </div>

            {/* headline — staggered line reveal */}
            <h1 className="font-[family-name:var(--font-serif-ko)] text-[2.4rem] sm:text-5xl md:text-[3.5rem] lg:text-[4.25rem] leading-[1.1] tracking-[-0.02em] text-[--color-ink] max-w-3xl overflow-hidden">
              {headlineLines.map((line, i) => (
                <motion.span
                  key={i}
                  className="block overflow-hidden"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.2 + i * 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {i === 1 ? (
                    <>
                      <span className="text-[--color-accent]">AI</span>
                      {line.replace("AI", "")}
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </h1>

            {/* sub */}
            <motion.p
              className="mt-7 max-w-md text-[0.9rem] md:text-base text-[--color-ink-soft] leading-[1.75]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
            >
              강의로 신뢰를 쌓고,
              그 자리에서 다음 일이 시작됩니다.
              <br />
              한 사람이 가르치고 만듭니다.
            </motion.p>

            {/* Tablet/Mobile mini-mosaic — 3-tile horizontal strip below copy (md ~ lg-1, plus mobile compact) */}
            <motion.div
              className="mt-10 grid grid-cols-3 gap-2 lg:hidden"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              {mosaicImages.slice(0, 3).map((img) => (
                <div
                  key={img.src}
                  className="relative h-[120px] sm:h-[150px] md:h-[180px] overflow-hidden rounded-sm border border-[--color-paper-edge]"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 30vw, 0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[--color-bg]/30" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column: 5-module mosaic — desktop only ── */}
          <div className="hidden lg:block lg:col-span-7">
            {/*
              Asymmetric mosaic layout:
              Row 1: large (col 1-3, row 1-2) + medium top-right (col 3, row 1)
              Row 2: medium-left (col 1, row 2) + small-right (col 2-3, row 2)

              Using CSS grid with fixed rows for precise control
            */}
            <div
              className="grid gap-2"
              style={{
                gridTemplateColumns: "2fr 1.2fr 1.2fr",
                gridTemplateRows: "220px 180px 180px",
              }}
            >
              {/* Tile 1: large, spans rows 1-2 col 1 */}
              <MosaicTile
                image={mosaicImages[0]}
                className="row-span-2"
                scrollY={scrollY}
                parallaxRange={[0, -28]}
                priority
              />
              {/* Tile 2: top-center col 2 */}
              <MosaicTile
                image={mosaicImages[1]}
                className=""
                scrollY={scrollY}
                parallaxRange={[0, -14]}
                priority
              />
              {/* Tile 3: top-right col 3 */}
              <MosaicTile
                image={mosaicImages[2]}
                className=""
                scrollY={scrollY}
                parallaxRange={[0, -20]}
              />
              {/* Tile 4: center-left col 2 */}
              <MosaicTile
                image={mosaicImages[3]}
                className=""
                scrollY={scrollY}
                parallaxRange={[0, -8]}
              />
              {/* Tile 5: center-right col 3 */}
              <MosaicTile
                image={mosaicImages[4]}
                className=""
                scrollY={scrollY}
                parallaxRange={[0, -18]}
              />
              {/* Tile row 3: wide span col 1-2 */}
              <div
                className="col-span-2 relative overflow-hidden rounded-sm border border-[--color-paper-edge] bg-[--color-paper-card] flex items-center px-6 gap-8"
              >
                {/* decorative stat strip inside mosaic */}
                {stats.slice(0, 3).map((s) => (
                  <div key={s.label} className="shrink-0">
                    <p className="font-[family-name:var(--font-serif-en)] italic text-xl text-[--color-ink] leading-none">
                      {s.value}
                    </p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[--color-muted]">
                      {s.label}
                    </p>
                  </div>
                ))}
                <div className="ml-auto text-[10px] uppercase tracking-[0.25em] text-[--color-muted]">
                  Dots,
                </div>
              </div>
              {/* Tile row 3: col 3 */}
              <div className="relative overflow-hidden rounded-sm border border-[--color-accent]/20 bg-[--color-bg-warm] flex items-center justify-center">
                <span className="font-[family-name:var(--font-serif-en)] italic text-4xl text-[--color-accent]/30 select-none">
                  Dots,
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* ── Data strip + CTAs — bottom ── */}
      <Container size="wide">
        <div className="mt-16 border-t border-[--color-paper-edge] grid grid-cols-2 sm:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`pt-6 pb-2 pr-8 ${i !== 0 ? "border-l border-[--color-paper-edge] pl-8 pr-0" : ""}`}
            >
              <p className="font-[family-name:var(--font-serif-en)] italic text-2xl md:text-3xl text-[--color-ink] leading-none">
                {s.value}
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[--color-muted] leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-[--color-ink] px-6 py-3 text-sm font-[family-name:var(--font-sans)] text-[--color-bg] hover:bg-[--color-accent] transition-colors"
          >
            작업 보기
            <span aria-hidden>→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[--color-paper-edge] px-6 py-3 text-sm text-[--color-ink] hover:border-[--color-accent] hover:text-[--color-accent] transition-colors"
          >
            의뢰하기
          </a>
        </div>
      </Container>

      {/* ── Scroll indicator — upgraded bouncing arrow ── */}
      <motion.span
        aria-hidden
        className="absolute bottom-6 right-8 text-[10px] uppercase tracking-[0.3em] text-[--color-muted] hidden md:flex flex-col items-center gap-1"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <span>scroll</span>
        <span>↓</span>
      </motion.span>
    </section>
  );
}
