"use client";

import TechBadge from "../ui/TechBadge";
import ScreenshotGallery from "../ui/ScreenshotGallery";

const projects = [
  {
    title: "Autopilot — 자율 에이전트 미션 시스템",
    desc: "부동산 프로젝트의 다단계 미션을 AI 에이전트가 자율 실행. 단계별 사람 승인(y/n/피드백)을 거치는 Human-in-the-Loop 오케스트레이션. npm 의존성 제로, 순수 Node.js.",
    tech: ["Node.js", "Claude CLI", "JSON", "Git"],
    highlights: ["AI 에이전트 오케스트레이션", "4단계 파이프라인", "피드백 자동 반영 (최대 3회)", "제로 의존성"],
  },
  {
    title: "AI 영상 자동 생성",
    desc: "Claude API로 대본 생성 → Azure TTS 나레이션 → Playwright 렌더링 → FFmpeg 합성까지 유튜브 영상 제작 전 과정을 자동화.",
    tech: ["Claude API", "Azure TTS", "Playwright", "FFmpeg"],
    highlights: ["대본 → 영상 풀 파이프라인", "씬 타입별 자동 렌더링"],
  },
  {
    title: "SadTalker — AI 페이스 애니메이션",
    desc: "사진 1장 + 오디오를 넣으면 말하는 영상을 생성. CVPR 2023 논문 기반, GFPGAN 얼굴 보정 포함.",
    tech: ["PyTorch", "GFPGAN", "Gradio"],
    highlights: ["사진 → 말하는 영상 변환", "256/512px 해상도 지원"],
  },
  {
    title: "Novel Workshop — 웹소설 창작 플랫폼",
    desc: "네이버 시리즈, 카카오페이지, 치디엔 등 멀티플랫폼 랭킹을 수집하고, 캐릭터/세계관/복선을 관리하며 집필하는 통합 창작 도구.",
    tech: ["Next.js 15", "React 19", "TypeScript"],
    highlights: ["멀티플랫폼 랭킹 수집", "캐릭터/세계관/복선 관리", "집필 통계 + 일일 목표"],
  },
];

const shots = [
  {
    src: "/screenshots/exam-simulator-viewport.png",
    label: "공인중개사 시험 시뮬레이터",
    desc: "PDF 시험지 + 답안 입력 분할 화면. 타이머, 진행률, 다크/라이트 모드를 갖춘 Apple 디자인 인터페이스. 순수 HTML/CSS/JS.",
  },
  {
    src: "/screenshots/interior-sim-viewport.png",
    label: "아파트 평면도 시각화",
    desc: "SVG 기반 인터랙티브 평면도. 실측 치수(cm) 표시, 방별 색상 코딩, 가구/가전 배치. 잠실 아파트 B타입 기준.",
  },
];

export default function OthersTab() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold mb-3">기타 프로젝트</h2>
        <p className="text-xl text-[--color-text] font-semibold mb-2">
          AI 영상 생성, 에이전트, 창작 도구 등 다양한 실험과 사이드 프로젝트
        </p>
        <p className="text-[--color-text-muted] text-base leading-relaxed max-w-3xl">
          메인 프로젝트 외에도 다양한 도메인에서 아이디어를 실험하고 프로토타입을 만들어왔습니다.
        </p>
      </div>

      <div className="space-y-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]"
          >
            <h3 className="text-base font-bold mb-2">{p.title}</h3>
            <p className="text-sm text-[--color-text-muted] leading-relaxed mb-3">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {p.highlights.map((h) => (
                <span
                  key={h}
                  className="px-2 py-0.5 text-[10px] rounded bg-[--color-accent-dim]/10 text-[--color-accent] border border-[--color-accent-dim]/20"
                >
                  {h}
                </span>
              ))}
            </div>
            <TechBadge tech={p.tech} />
          </div>
        ))}
      </div>

      <div>
        <h4 className="text-sm font-medium text-[--color-text-muted] mb-4 uppercase tracking-wider">
          스크린샷
        </h4>
        <ScreenshotGallery shots={shots} />
      </div>
    </div>
  );
}
