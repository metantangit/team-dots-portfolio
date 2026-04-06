"use client";

import FlowDiagram from "../ui/FlowDiagram";
import TechBadge from "../ui/TechBadge";
import StatCard from "../ui/StatCard";
import ScreenshotGallery from "../ui/ScreenshotGallery";

const flow = [
  { icon: "🔍", title: "리서치", desc: "트렌드 분석" },
  { icon: "📝", title: "대본 작성", desc: "AI + 가이드 템플릿" },
  { icon: "🎙️", title: "TTS 생성", desc: "Qwen3 음성 클로닝" },
  { icon: "🎨", title: "비주얼 렌더링", desc: "Remotion 59+ 템플릿" },
  { icon: "📦", title: "패키징", desc: "썸네일, 자막, SEO" },
  { icon: "🚀", title: "배포", desc: "YouTube 업로드" },
];

const shots = [
  {
    src: "/screenshots/cf-dashboard-viewport.png",
    label: "대시보드 — 영상 파이프라인 현황",
    desc: "현재 제작중인 영상들의 단계별 진행 상태를 한눈에 확인. 리서치→대본→TTS→렌더링→배포까지 8단계 파이프라인 추적.",
  },
  {
    src: "/screenshots/cf-design-board-viewport.png",
    label: "디자인 컨셉보드 — 59+ 비주얼 템플릿",
    desc: "React 컴포넌트로 만든 영상용 비주얼 템플릿 라이브러리. CSS 애니메이션, Framer Motion, Three.js 3D, 손그림 스타일 등 다양한 모션 템플릿.",
  },
  {
    src: "/screenshots/cf-pipeline-viewport.png",
    label: "파이프라인 — 단계별 진행 현황",
    desc: "각 영상의 제작 단계를 칸반 형태로 관리. 병목 구간 식별과 동시 제작 영상 수 관리.",
  },
  {
    src: "/screenshots/cf-scripts-viewport.png",
    label: "대본 프리뷰 — 비주얼 태그 매핑",
    desc: "대본 텍스트에 [BigKeyword], [SplitScreen] 같은 비주얼 태그를 매핑. 대본 작성 시점에 어떤 영상 템플릿이 들어갈지 미리 지정.",
  },
  {
    src: "/screenshots/cf-tts-compare-viewport.png",
    label: "TTS 비교 — 음성 A/B 테스트",
    desc: "로컬 Qwen3-TTS 모델로 생성한 나레이션을 A/B 비교 청취. 레퍼런스 오디오 기반 음성 클로닝으로 일관된 톤 유지.",
  },
  {
    src: "/screenshots/cf-templates-v3-viewport.png",
    label: "템플릿 v3 — 모션 컴포넌트",
    desc: "Remotion으로 렌더링되는 실제 영상 컴포넌트. React 코드가 그대로 MP4 영상 프레임으로 변환됨.",
  },
];

const tech = [
  "Next.js 15", "React 19", "TypeScript", "Tailwind CSS",
  "Remotion", "Framer Motion", "GSAP", "Three.js",
  "Qwen3-TTS (MLX)", "Whisper", "Python",
];

export default function ContentFactoryTab() {
  return (
    <div className="space-y-10">
      {/* 프로젝트 핵심 요약 */}
      <div>
        <h2 className="text-3xl font-bold mb-3">Content Factory</h2>
        <p className="text-xl text-[--color-text] font-semibold mb-2">
          유튜브 영상 제작 전 과정을 AI로 자동화하는 콘텐츠 파이프라인
        </p>
        <p className="text-[--color-text-muted] text-base leading-relaxed max-w-3xl">
          리서치 → 대본 → 음성 합성 → 영상 렌더링 → 배포까지 8단계를 자동화합니다.
          대본에 비주얼 태그를 매핑하면 59개 이상의 React 모션 템플릿이 자동으로 영상에 삽입되고,
          로컬 TTS로 나레이션까지 생성합니다.
        </p>
      </div>

      {/* 이 프로젝트가 하는 일 */}
      <div className="p-6 rounded-xl bg-[--color-accent-dim]/10 border border-[--color-accent-dim]/20">
        <h3 className="text-lg font-bold mb-3 text-[--color-accent]">이 프로젝트가 하는 일</h3>
        <ul className="space-y-2 text-sm text-[--color-text-muted] leading-relaxed">
          <li><span className="text-[--color-text] font-medium">대본 → 영상 자동 변환:</span> 대본 텍스트에 비주얼 태그를 붙이면, 해당 구간에 맞는 모션 템플릿이 자동으로 영상 시퀀스에 삽입됩니다.</li>
          <li><span className="text-[--color-text] font-medium">로컬 AI 음성 합성:</span> Apple Silicon에서 Qwen3-TTS 1.7B 모델을 직접 실행해 나레이션을 생성합니다. 외부 API 비용 제로.</li>
          <li><span className="text-[--color-text] font-medium">React → MP4 영상:</span> Remotion으로 React 컴포넌트를 그대로 MP4 프레임으로 렌더링합니다. CSS 애니메이션, 3D, 손그림 등 다양한 스타일.</li>
          <li><span className="text-[--color-text] font-medium">일관된 품질의 반복 생산:</span> 한 번 만든 템플릿과 파이프라인으로 새 영상을 빠르게 찍어냅니다.</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="비주얼 템플릿" value="59+" />
        <StatCard label="제작중 영상" value="3편" />
        <StatCard label="파이프라인 단계" value="8단계" />
        <StatCard label="TTS 모델" value="로컬" />
      </div>

      <FlowDiagram steps={flow} title="콘텐츠 제작 파이프라인" />

      {/* 핵심 기술 설명 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">🎙️ 로컬 TTS 음성 합성</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            Qwen3-TTS 1.7B 모델을 Apple Silicon(MLX)에서 로컬 실행.
            레퍼런스 오디오 기반 음성 클로닝으로 일관된 나레이션 생성.
            외부 API 의존 제로, 세그먼트당 약 3분 생성.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">🎨 React → Video 렌더링</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            Remotion 프레임워크로 React 컴포넌트를 MP4 영상으로 변환.
            59+ 재사용 가능한 비주얼 템플릿 (CSS 애니메이션, Framer Motion,
            Three.js 3D, Rough.js 손그림 등)을 조합해 영상 시퀀스 구성.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">📝 대본 자동화 시스템</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            가이드 A(흐름연결형) + 가이드 C(긴장해소형) 템플릿 기반 대본 생성.
            각 섹션에 비주얼 태그([BigKeyword], [SplitScreen] 등)를 매핑하여
            대본 → 영상 비주얼 자동 연결.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">🐱 캐릭터 디자인 시스템</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            채널 마스코트 &ldquo;샤크냥&rdquo; — 상어모자 쓴 고양이 캐릭터.
            SVG(스케일러블) + Zdog(인터랙티브 3D) + HTML 목업으로 제작.
            통일된 컬러 시스템(#7DD3FC 메인, #FECDD3 악센트) 적용.
          </p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-[--color-text-muted] mb-3 uppercase tracking-wider">
          기술 스택
        </h4>
        <TechBadge tech={tech} />
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
