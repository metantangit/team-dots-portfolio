"use client";

import { motion } from "framer-motion";

const tags = [
  "AI Pipeline",
  "Data Automation",
  "Fullstack",
  "Trading Bot",
  "Agent Orchestration",
  "Computer Vision",
  "Real Estate Tech",
  "Content Automation",
];

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a1a] via-[--color-bg] to-[--color-bg]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.08),transparent_70%)]" />

      <div className="relative z-10 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[--color-text-muted] text-sm tracking-[0.2em] uppercase mb-6"
        >
          Team Dots Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          AI로 비즈니스를
          <br />
          <span className="gradient-text">자동화</span>합니다
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-[--color-text-muted] mb-10 leading-relaxed"
        >
          데이터 수집부터 AI 분석, 대시보드 시각화, 자동화 봇까지
          <br />
          아이디어를 실제 작동하는 시스템으로 만듭니다
        </motion.p>

        {/* Capability Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 text-xs font-medium rounded-full border border-[--color-border] text-[--color-text-muted] hover:border-[--color-accent] hover:text-[--color-accent] transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[--color-text-muted]">Projects</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-4 h-7 rounded-full border border-[--color-border] flex items-start justify-center p-1"
        >
          <div className="w-1 h-1.5 rounded-full bg-[--color-accent]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
