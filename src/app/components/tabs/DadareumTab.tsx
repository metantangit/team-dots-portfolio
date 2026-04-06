"use client";

import FlowDiagram from "../ui/FlowDiagram";
import TechBadge from "../ui/TechBadge";
import StatCard from "../ui/StatCard";

const flow = [
  { icon: "📅", title: "스케줄 최적화", desc: "4시나리오 자동 생성" },
  { icon: "🍖", title: "메뉴 개발", desc: "AI 신메뉴 + 원가분석" },
  { icon: "📹", title: "CCTV 분석", desc: "YOLOv8 동선 히트맵" },
  { icon: "📈", title: "전략 로드맵", desc: "손익분석 + 시뮬레이션" },
  { icon: "🚀", title: "퀀텀점프", desc: "80억 → 800억 프로젝션" },
];

const tech = [
  "Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4",
  "shadcn/ui", "Zustand", "Recharts", "Plotly.js",
  "FastAPI", "PostgreSQL 16", "Redis 7",
  "LangChain", "YOLOv8", "OR-Tools", "Docker",
];

export default function DadareumTab() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold mb-3">프랜차이즈 AI 플랫폼</h2>
        <p className="text-xl text-[--color-text] font-semibold mb-2">
          고기집 프랜차이즈 8매장의 운영을 AI로 자동화하고, 현재 80억에서 800억까지의 성장 로드맵을 설계
        </p>
        <p className="text-[--color-text-muted] text-base leading-relaxed max-w-3xl">
          스케줄링, 메뉴 개발, CCTV 동선 분석, 전략 수립, 매출 시뮬레이션 5대 모듈을 풀스택으로 구현.
          현재 매출 규모에서 10배 성장까지의 시나리오를 데이터 기반으로 시뮬레이션합니다.
        </p>
      </div>

      <div className="p-6 rounded-xl bg-[--color-accent-dim]/10 border border-[--color-accent-dim]/20">
        <h3 className="text-lg font-bold mb-3 text-[--color-accent]">이 프로젝트가 하는 일</h3>
        <ul className="space-y-2 text-sm text-[--color-text-muted] leading-relaxed">
          <li><span className="text-[--color-text] font-medium">자동 스케줄 최적화:</span> 최소/균형/여유/비상 4가지 시나리오를 자동 생성. 직원 스킬 ↔ 역할 매칭, 인건비(4대보험 포함) 자동 계산.</li>
          <li><span className="text-[--color-text] font-medium">AI 메뉴 개발 랩:</span> 현재 메뉴 분석 후 AI가 신메뉴를 제안. 원가/마진 분석, 계절성 평가, 벤치마크 비교까지.</li>
          <li><span className="text-[--color-text] font-medium">CCTV 동선 분석:</span> 실제 CCTV 영상에서 YOLOv8로 사람을 감지하고, 고객/직원 동선 히트맵을 생성. 구역별 병목 감지.</li>
          <li><span className="text-[--color-text] font-medium">80억 → 800억 로드맵:</span> 현재 매출에서 목표까지 보수/목표/공격 3가지 시나리오를 시뮬레이션. 필요한 지표를 역산해 실행 플랜 제시.</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="운영 매장" value="8개" />
        <StatCard label="AI 모듈" value="5개" />
        <StatCard label="현재 → 목표" value="80억→800억" />
        <StatCard label="라이브 데모" value="90분" />
      </div>

      <FlowDiagram steps={flow} title="5대 AI 모듈" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">스케줄 최적화 엔진</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            OR-Tools 솔버로 직원의 주간/일간 스케줄을 최적화.
            포지션 적합도 매트릭스로 직원 스킬과 역할을 자동 매칭.
            드래그앤드롭으로 수동 조정 가능, 인건비 실시간 계산.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">YOLOv8 CCTV 동선 분석</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            실제 매장 CCTV 영상을 프레임별로 분석.
            고객/직원을 분리해 동선 히트맵을 생성하고,
            구역별 커버리지, 전환율, 병목 구간을 KPI로 산출.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">AI 메뉴 개발 랩</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            현재 메뉴의 원가/마진을 분석한 후,
            LangChain + Ollama로 계절성/난이도를 고려한
            신메뉴를 AI가 제안. 벤치마크 레스토랑과 비교 분석.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">퀀텀점프 시뮬레이터</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            80억 → 800억 연간 손익 프로젝션을 보수/목표/공격 3가지 시나리오로 비교.
            매출 범위 밴드 시각화, 목표 매출 달성에 필요한 지표를 역산하여
            실행 가능한 액션 플랜 제시.
          </p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-[--color-text-muted] mb-3 uppercase tracking-wider">
          기술 스택
        </h4>
        <TechBadge tech={tech} />
      </div>
    </div>
  );
}
