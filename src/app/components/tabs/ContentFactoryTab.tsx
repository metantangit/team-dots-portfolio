"use client";

import FlowDiagram from "../ui/FlowDiagram";
import TechBadge from "../ui/TechBadge";
import StatCard from "../ui/StatCard";
import ScreenshotGallery from "../ui/ScreenshotGallery";

const flow = [
  { icon: "🔍", title: "리서치", desc: "주제 선정" },
  { icon: "📝", title: "대본", desc: "AI가 초안 작성" },
  { icon: "🎙️", title: "나레이션", desc: "AI 음성 생성" },
  { icon: "🎨", title: "영상 제작", desc: "59+ 템플릿 자동 조합" },
  { icon: "📦", title: "마무리", desc: "썸네일, 자막" },
  { icon: "🚀", title: "업로드", desc: "YouTube 게시" },
];

const shots = [
  {
    src: "/screenshots/cf-dashboard-viewport.png",
    label: "영상 제작 현황판",
    desc: "지금 만들고 있는 영상들이 어디까지 진행됐는지 한눈에 확인할 수 있습니다.",
  },
  {
    src: "/screenshots/cf-design-board-viewport.png",
    label: "영상 디자인 템플릿 모음",
    desc: "59가지 이상의 영상 디자인을 미리 만들어두고, 대본에 맞춰 자동으로 조합합니다.",
  },
  {
    src: "/screenshots/cf-pipeline-viewport.png",
    label: "제작 단계별 관리",
    desc: "각 영상이 어떤 단계에 있는지 보드 형태로 관리합니다.",
  },
  {
    src: "/screenshots/cf-scripts-viewport.png",
    label: "대본 미리보기",
    desc: "대본을 쓰면서 어떤 장면이 나올지 미리 지정할 수 있습니다.",
  },
  {
    src: "/screenshots/cf-tts-compare-viewport.png",
    label: "AI 나레이션 비교",
    desc: "여러 버전의 AI 음성을 비교해서 가장 자연스러운 걸 고릅니다.",
  },
  {
    src: "/screenshots/cf-templates-v3-viewport.png",
    label: "영상 템플릿 실제 화면",
    desc: "코드로 만든 디자인이 실제 영상으로 변환되는 모습입니다.",
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
      <div>
        <h2 className="text-3xl font-bold mb-3">Content Factory</h2>
        <p className="text-xl text-[--color-text] font-semibold mb-2">
          유튜브 영상을 AI가 알아서 만들어주는 시스템
        </p>
        <p className="text-[--color-text-muted] text-base leading-relaxed max-w-3xl">
          주제만 정하면 대본 작성, AI 나레이션, 영상 편집, 업로드까지
          전 과정이 자동으로 돌아갑니다. 사람이 하면 며칠 걸리는 영상 제작을
          빠르게 반복 생산할 수 있습니다.
        </p>
      </div>

      <div className="p-6 rounded-xl bg-[--color-accent-dim]/10 border border-[--color-accent-dim]/20">
        <h3 className="text-lg font-bold mb-3 text-[--color-accent]">이런 걸 해줍니다</h3>
        <ul className="space-y-2 text-sm text-[--color-text-muted] leading-relaxed">
          <li><span className="text-[--color-text] font-medium">대본만 쓰면 영상이 나옵니다:</span> 대본에 "여기서 큰 글씨", "여기서 비교 화면" 같은 표시만 해두면, 알아서 맞는 장면이 들어갑니다.</li>
          <li><span className="text-[--color-text] font-medium">AI가 나레이션을 읽어줍니다:</span> 내 컴퓨터에서 AI가 직접 목소리를 만들어냅니다. 외부 서비스 비용 없이 무제한 생성.</li>
          <li><span className="text-[--color-text] font-medium">59가지 영상 디자인:</span> 텍스트 애니메이션, 3D 효과, 손그림 스타일 등 다양한 영상 장면을 미리 만들어두고 재활용합니다.</li>
          <li><span className="text-[--color-text] font-medium">같은 품질로 빠르게 찍어냅니다:</span> 템플릿이 갖춰져 있으니 새 영상을 만들 때마다 처음부터 시작할 필요가 없습니다.</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="영상 디자인" value="59+" />
        <StatCard label="제작중 영상" value="3편" />
        <StatCard label="제작 단계" value="8단계" />
        <StatCard label="AI 음성" value="로컬 생성" />
      </div>

      <FlowDiagram steps={flow} title="영상 제작 흐름" />

      <div>
        <h4 className="text-sm font-medium text-[--color-text-muted] mb-4 uppercase tracking-wider">
          화면 미리보기
        </h4>
        <ScreenshotGallery shots={shots} />
      </div>

      <div>
        <h4 className="text-sm font-medium text-[--color-text-muted] mb-3 uppercase tracking-wider">
          사용 기술
        </h4>
        <TechBadge tech={tech} />
      </div>
    </div>
  );
}
