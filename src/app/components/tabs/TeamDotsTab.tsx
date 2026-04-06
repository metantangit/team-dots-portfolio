"use client";

import FlowDiagram from "../ui/FlowDiagram";
import TechBadge from "../ui/TechBadge";
import StatCard from "../ui/StatCard";
import ScreenshotGallery from "../ui/ScreenshotGallery";

const flow = [
  { icon: "👥", title: "4팀 통합", desc: "크립토/R&D/비즈/부동산" },
  { icon: "🤖", title: "AI 제안", desc: "자동 태스크/프로젝트 제안" },
  { icon: "📈", title: "DeFi 모니터", desc: "11개 거래소 실시간" },
  { icon: "🔍", title: "리서치", desc: "유튜브 AI 분석" },
  { icon: "🏠", title: "경매 스캔", desc: "부동산 자동 모니터링" },
];

const shots = [
  {
    src: "/screenshots/teamdots-realestate-reports.png",
    label: "부동산팀 — 주차별 경매 보고서",
    desc: "매주 자동 생성되는 경매 스캔 보고서 10건. 단독주택 경매 물건을 주차별로 분석해 리포트 발행.",
  },
  {
    src: "/screenshots/teamdots-auction-scan.png",
    label: "경매 물건 상세 — 필터링 대시보드",
    desc: "최저가/공시가대비/유찰 횟수로 다중 필터링. 76건 물건을 비율순/가격순/GAP순으로 정렬해 투자 기회 탐색.",
  },
  {
    src: "/screenshots/teamdots-rnd-reports.png",
    label: "R&D팀 — 주차별 AI 리서치",
    desc: "매주 AI 리서치 보고서 자동 발행 (11건 누적). 유튜브 영상 분석 + 채널 발굴 결과를 팀에 공유.",
  },
  {
    src: "/screenshots/teamdots-ai-research-detail.png",
    label: "AI 리서치 상세 — 영상 점수순 랭킹",
    desc: "27개 채널, 16개 영상을 점수순으로 정렬. 각 영상의 핵심 요약과 상세보기 제공. 95점 빌더 조쉬, 90점 윤자동 등.",
  },
  {
    src: "/screenshots/teamdots-ai-research-insight.png",
    label: "AI 리서치 — 핵심 인사이트 분석",
    desc: "영상에서 추출한 핵심 요약, 배경, 전체 흐름, 핵심 인사이트를 구조화. AI Native 조직 설계 등 실행 가능한 인사이트 도출.",
  },
];

const tech = [
  "Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4",
  "Recharts", "Supabase", "Claude API",
  "Etherscan API", "Naver Maps", "Google OAuth",
];

export default function TeamDotsTab() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold mb-3">Team Dots AI</h2>
        <p className="text-xl text-[--color-text] font-semibold mb-2">
          크립토 · R&D · 비즈니스 · 부동산 4개 팀을 AI로 통합 관리하는 대시보드
        </p>
        <p className="text-[--color-text-muted] text-base leading-relaxed max-w-3xl">
          팀별 태스크와 프로젝트를 관리하면서, AI가 자동으로 인사이트와 제안을 생성합니다.
          DeFi 실시간 모니터링, 유튜브 리서치 파이프라인, 경매 스캐닝까지 통합한 운영 허브입니다.
        </p>
      </div>

      <div className="p-6 rounded-xl bg-[--color-accent-dim]/10 border border-[--color-accent-dim]/20">
        <h3 className="text-lg font-bold mb-3 text-[--color-accent]">이 프로젝트가 하는 일</h3>
        <ul className="space-y-2 text-sm text-[--color-text-muted] leading-relaxed">
          <li><span className="text-[--color-text] font-medium">4개 팀 통합 관리:</span> Crypto, R&D, Business, Real Estate 팀별 리포트/태스크/프로젝트를 한 대시보드에서 관리.</li>
          <li><span className="text-[--color-text] font-medium">AI 자동 제안:</span> Claude가 팀 상황을 분석해 subtask, 새 프로젝트, 리마인더를 자동 생성. 승인/거절 인터페이스.</li>
          <li><span className="text-[--color-text] font-medium">DeFi 실시간 모니터:</span> 11개 거래소 펀딩비 비교, Pendle/Morpho/Euler PT-Looping 수익 분석, 포지션 + 세금 추적.</li>
          <li><span className="text-[--color-text] font-medium">유튜브 AI 리서치:</span> 영상 자동 요약, 채널 스코어링(5가지 기준), 주간 AI 뉴스 리포트 자동 생성.</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="관리 팀" value="4개" />
        <StatCard label="DeFi 거래소" value="11개" />
        <StatCard label="AI 리포트 유형" value="7종" />
        <StatCard label="인증" value="OAuth" />
      </div>

      <FlowDiagram steps={flow} title="통합 운영 파이프라인" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">🤖 AI 제안 시스템</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            Claude가 팀 컨텍스트를 분석해 자동으로 subtask, create_task,
            new_project, reminder 타입의 제안을 생성.
            승인/거절/실행 인터페이스로 Human-in-the-Loop 운영.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">📈 DeFi 라이브 모니터</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            Pendle, Morpho, Euler의 PT-Looping 수익 기회를 실시간 분석.
            11개 거래소 펀딩비 비교, 포지션 트래커(세금 기록 포함),
            Etherscan 트랜잭션 히스토리 연동.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">🔍 유튜브 리서치 파이프라인</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            yt-dlp로 영상 다운로드 → Claude가 요약 생성.
            채널 발굴 & 스코어링(구체성, 실행성, 인사이트, 간결성, 포맷)으로
            AI 뉴스 + 리서치 리포트 자동 발행.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">🏠 경매 스캐닝</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            Python 스크래퍼로 부동산 매물 자동 모니터링.
            마당 API + Disco API 연동으로 인근 실거래가 분석.
            지도 기반 매물 시각화 + 가격 분석 패널.
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
