"use client";

import FlowDiagram from "../ui/FlowDiagram";
import TechBadge from "../ui/TechBadge";
import StatCard from "../ui/StatCard";
import ScreenshotGallery from "../ui/ScreenshotGallery";

const flow = [
  { icon: "📊", title: "시장 분석", desc: "99건 매물 데이터 수집" },
  { icon: "🏢", title: "상권 리서치", desc: "업종별 분석 + 경쟁사" },
  { icon: "👨‍⚕️", title: "타겟 선정", desc: "치과 등 맞춤 임차인" },
  { icon: "🎬", title: "영상 투어", desc: "Veo AI 영상 제작" },
  { icon: "📄", title: "랜딩페이지", desc: "맞춤 제안서 자동 생성" },
  { icon: "📞", title: "영업", desc: "중개사 + 직접 컨택" },
];

const shots = [
  {
    src: "/screenshots/sanho-dentist-landing-viewport.png",
    label: "치과 개원 랜딩페이지",
    desc: "치과 개원을 준비하는 원장님 대상 맞춤 임대 제안서. 공간 특징, 상권 분석, 임대 조건을 원페이지로 요약해 전달.",
  },
  {
    src: "/screenshots/sanho-rental-viewport.png",
    label: "매물 분석 대시보드",
    desc: "Leaflet 지도에 자양동 일대 99건 매물을 시각화. 층별 가격, 용도별 분포, 분기별 거래 트렌드를 한눈에 파악.",
  },
  {
    src: "/screenshots/sanho-proposal-viewport.png",
    label: "임대 제안서",
    desc: "시세 분석, 상권 데이터, 임대 조건을 종합한 제안서. 임차인에게 직접 발송하는 데이터 기반 세일즈 도구.",
  },
  {
    src: "/screenshots/sanho-broker-viewport.png",
    label: "공인중개사 분석",
    desc: "7개 구 893명 중개사 데이터를 수집해 경력, 전문 분야, 직원 수 기반으로 스코어링. 상위 10명 자동 추천.",
  },
  {
    src: "/screenshots/sanho-research-v2-viewport.png",
    label: "자양동 상권 리서치 v2",
    desc: "업종별 경쟁사 분포, 유동인구, 매출 추정치를 포함한 자양동 상권 종합 리포트. 임차인 설득에 활용.",
  },
  {
    src: "/screenshots/sanho-analysis-viewport.png",
    label: "경쟁 매물 분석",
    desc: "자양동 인근 경쟁 매물의 층별 가격 비교. 우리 매물의 가격 경쟁력을 데이터로 증명.",
  },
];

const tech = [
  "HTML/CSS/JS", "Leaflet.js", "Chart.js",
  "Veo (AI 영상)", "Python",
];

export default function JayangdongTab() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold mb-3">자양동 상가 임대 프로젝트</h2>
        <p className="text-xl text-[--color-text] font-semibold mb-2">
          데이터 기반으로 상가 임차인을 찾고, 맞춤 제안서까지 자동 생성하는 세일즈 시스템
        </p>
        <p className="text-[--color-text-muted] text-base leading-relaxed max-w-3xl">
          자양역 인근 41평 2층 상가의 임차인 유치 프로젝트.
          시장 분석 → 타겟 선정 → AI 영상 투어 → 맞춤 랜딩페이지까지
          전체 영업 프로세스를 데이터와 AI로 자동화했습니다.
        </p>
      </div>

      {/* 이 프로젝트가 하는 일 */}
      <div className="p-6 rounded-xl bg-[--color-accent-dim]/10 border border-[--color-accent-dim]/20">
        <h3 className="text-lg font-bold mb-3 text-[--color-accent]">이 프로젝트가 하는 일</h3>
        <ul className="space-y-2 text-sm text-[--color-text-muted] leading-relaxed">
          <li><span className="text-[--color-text] font-medium">시장 데이터 수집 + 분석:</span> 자양동 일대 99건 매물, 62개 건물의 임대 시세를 수집하고 Leaflet 지도에 시각화. 적정 임대료(6.6만원/평) 도출.</li>
          <li><span className="text-[--color-text] font-medium">타겟 맞춤 랜딩페이지:</span> 치과 개원, 일반 임대 등 업종별로 자동 생성되는 맞춤 제안서. 공간 특징 + 상권 분석 + 임대 조건을 원페이지로.</li>
          <li><span className="text-[--color-text] font-medium">AI 영상 투어:</span> Google Veo로 실제 공간 촬영 영상을 AI 보정/편집하여 현장 방문 전 공간 체험 가능.</li>
          <li><span className="text-[--color-text] font-medium">중개사 자동 매칭:</span> 893명 중개사를 스코어링해 상위 10명을 추천. 효율적인 영업 채널 확보.</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="분석 매물" value="99건" />
        <StatCard label="중개사 데이터" value="893명" />
        <StatCard label="맞춤 랜딩페이지" value="3종" />
        <StatCard label="AI 영상 투어" value="Veo" />
      </div>

      <FlowDiagram steps={flow} title="임차인 유치 파이프라인" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">🎬 Veo AI 영상 투어</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            Google Veo로 실제 공간 촬영 영상을 AI로 보정/편집하여
            임차인이 현장 방문 전 공간을 체험할 수 있는 영상 투어 제작.
            랜딩페이지에 임베드하여 전환율 향상.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">📄 맞춤 랜딩페이지 자동 생성</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            임차인 업종에 따라 맞춤형 랜딩페이지 자동 생성.
            치과 개원용, 일반 임대용 등 타겟별로 공간 특징, 임대 조건,
            상권 분석을 포함한 원페이지 제안서.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">🗺️ 데이터 기반 시장 분석</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            99개 매물, 62개 건물 데이터를 Leaflet 지도에 시각화.
            층별 가격 비교, 분기별 거래 트렌드, 업종 분포를 분석하여
            적정 임대료(6.6만원/평) 도출.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">👨‍💼 중개사 매칭 시스템</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            7개 구 893명 공인중개사 데이터를 수집하여
            경력, 전문 분야, 직원 수 기반 전문성 스코어링.
            상위 10명 추천으로 효율적인 영업 채널 확보.
          </p>
        </div>
      </div>

      {/* Veo AI 영상 */}
      <div>
        <h4 className="text-sm font-medium text-[--color-text-muted] mb-4 uppercase tracking-wider">
          AI 영상 투어
        </h4>
        <div className="max-w-lg">
          <div className="rounded-xl overflow-hidden border border-[--color-border] bg-[--color-card]">
            <video
              src="/videos/jayang-dentist.mp4"
              controls
              muted
              playsInline
              className="w-full aspect-video object-cover"
            />
            <div className="px-4 py-2.5 border-t border-[--color-border]">
              <p className="text-xs font-medium text-[--color-text]">치과 개원 홍보 영상</p>
              <p className="text-[11px] text-[--color-text-muted] mt-1">Google Veo AI로 제작한 치과 개원 타겟 영상</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-[--color-text-muted] mb-4 uppercase tracking-wider">
          스크린샷
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
