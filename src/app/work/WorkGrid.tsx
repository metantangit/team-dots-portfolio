"use client";

import Image from "next/image";
import Link from "next/link";
import { MotionReveal } from "../components/MotionReveal";
import type { Case } from "../../content/cases";

type Props = { cases: Case[] };

export default function WorkGrid({ cases }: Props) {
  const [c1, c2, c3] = cases;

  return (
    <div className="py-16 md:py-24">
      {/*
        Magazine asymmetric layout:
        md grid: 3 columns
        - Tile 1 (Case 1): large, col-span-2, row 1 — full-bleed with title overlay
        - Tile 2 (Case 2): col-span-1, row 1 — medium, aligns right of Case 1
        - Tile 3 (Case 3): col-span-3, row 2 — wide landscape strip
      */}
      <div className="grid gap-3 md:grid-cols-3 md:grid-rows-[480px_340px]">

        {/* Case 1 — large left */}
        {c1 && (
          <MotionReveal className="md:col-span-2 md:row-span-1">
            <Link
              href={`/work/${c1.slug}`}
              className="group relative flex h-[340px] md:h-full overflow-hidden rounded-sm border border-[--color-paper-edge] block"
            >
              <Image
                src={c1.heroAsset}
                alt={c1.title}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 66vw"
                priority
              />
              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/30 to-transparent" />

              {/* caption block */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                {/* accent line — draws on hover */}
                <div className="mb-3 h-px w-0 bg-[--color-accent] transition-all duration-500 ease-out group-hover:w-12" />
                <p className="font-[family-name:var(--font-serif-en)] italic text-[--color-accent] text-sm mb-1">
                  {String(c1.order).padStart(2, "0")}
                </p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-muted] mb-2">
                  {c1.category}
                </p>
                <h2 className="font-[family-name:var(--font-serif-ko)] text-xl md:text-2xl text-[--color-ink] leading-snug">
                  {c1.title}
                </h2>
                <p className="mt-1 text-[11px] text-[--color-muted] tracking-wide">
                  {c1.client} · {c1.period}
                </p>
              </div>
            </Link>
          </MotionReveal>
        )}

        {/* Case 2 — medium right */}
        {c2 && (
          <MotionReveal delay={0.1} className="md:col-span-1 md:row-span-1">
            <Link
              href={`/work/${c2.slug}`}
              className="group relative flex h-[280px] md:h-full overflow-hidden rounded-sm border border-[--color-paper-edge] block"
            >
              <Image
                src={c2.heroAsset}
                alt={c2.title}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 34vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                <div className="mb-3 h-px w-0 bg-[--color-accent] transition-all duration-500 ease-out group-hover:w-12" />
                <p className="font-[family-name:var(--font-serif-en)] italic text-[--color-accent] text-sm mb-1">
                  {String(c2.order).padStart(2, "0")}
                </p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-muted] mb-2">
                  {c2.category}
                </p>
                <h2 className="font-[family-name:var(--font-serif-ko)] text-xl text-[--color-ink] leading-snug">
                  {c2.title}
                </h2>
                <p className="mt-1 text-[11px] text-[--color-muted] tracking-wide">
                  {c2.client} · {c2.period}
                </p>
              </div>
            </Link>
          </MotionReveal>
        )}

        {/* Case 3 — wide bottom strip */}
        {c3 && (
          <MotionReveal delay={0.18} className="md:col-span-3 md:row-span-1">
            <Link
              href={`/work/${c3.slug}`}
              className="group relative flex h-[280px] md:h-full overflow-hidden rounded-sm border border-[--color-paper-edge] block"
            >
              <Image
                src={c3.heroAsset}
                alt={c3.title}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                <div className="mb-3 h-px w-0 bg-[--color-accent] transition-all duration-500 ease-out group-hover:w-12" />
                <p className="font-[family-name:var(--font-serif-en)] italic text-[--color-accent] text-sm mb-1">
                  {String(c3.order).padStart(2, "0")}
                </p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[--color-muted] mb-2">
                  {c3.category}
                </p>
                <h2 className="font-[family-name:var(--font-serif-ko)] text-xl md:text-2xl text-[--color-ink] leading-snug">
                  {c3.title}
                </h2>
                <p className="mt-1 text-[11px] text-[--color-muted] tracking-wide">
                  {c3.client} · {c3.period}
                </p>
              </div>
            </Link>
          </MotionReveal>
        )}
      </div>
    </div>
  );
}
