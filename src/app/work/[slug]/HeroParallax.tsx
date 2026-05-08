"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Props = {
  src: string;
  alt: string;
  order: number;
  category: string;
  title: string;
  client: string;
  period: string;
  format: string;
};

export default function HeroParallax({
  src,
  alt,
  order,
  category,
  title,
  client,
  period,
  format,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Subtle parallax: image drifts up 80px as hero scrolls out
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: "80vh", minHeight: "480px" }}
    >
      {/* Parallaxed image */}
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[--color-bg-deep]/95 via-[--color-bg-deep]/40 to-[--color-bg-deep]/10" />

      {/* Title block — overlaid bottom-left */}
      <div className="absolute bottom-0 left-0 right-0 pb-10 px-6 md:px-12 max-w-7xl mx-auto">
        <p className="font-[family-name:var(--font-serif-en)] italic text-[3rem] md:text-[4rem] text-[--color-accent]/60 leading-none mb-2 select-none">
          {String(order).padStart(2, "0")}
        </p>
        <p className="text-[10px] uppercase tracking-[0.28em] text-[--color-muted] mb-3">
          {category}
        </p>
        <h1 className="font-[family-name:var(--font-serif-ko)] text-[2rem] sm:text-[3rem] md:text-[3.5rem] leading-[1.1] tracking-[-0.02em] text-[--color-ink] max-w-3xl">
          {title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[--color-muted] tracking-wide">
          <span>{client}</span>
          <span aria-hidden className="text-[--color-paper-edge]">·</span>
          <span>{period}</span>
          <span aria-hidden className="text-[--color-paper-edge]">·</span>
          <span className="font-[family-name:var(--font-serif-en)] italic normal-case tracking-normal text-[--color-accent]">
            {format}
          </span>
        </div>
      </div>
    </div>
  );
}
