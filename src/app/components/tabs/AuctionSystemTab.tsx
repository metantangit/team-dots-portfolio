"use client";

import FlowDiagram from "../ui/FlowDiagram";
import TechBadge from "../ui/TechBadge";
import StatCard from "../ui/StatCard";
import ScreenshotGallery from "../ui/ScreenshotGallery";

const flow = [
  { icon: "🌐", title: "데이터 수집", desc: "온비드/법원/신탁사 4소스" },
  { icon: "🔍", title: "필터링", desc: "지역/가격/비율 자동 필터" },
  { icon: "💰", title: "시세 검증", desc: "Disco + 실거래가 교차" },
  { icon: "⚠️", title: "리스크 분석", desc: "권리/근저당/압류 체크" },
  { icon: "📊", title: "대시보드", desc: "React + 지도 시각화" },
];

const shots = [
  {
    src: "/screenshots/auction-sniper-v2-viewport.png",
    label: "공매 물건 리스트 — 306건 통합",
    desc: "온비드, 파산경매, 신탁사 5곳에서 수집한 306건 물건을 한 화면에서 필터링. 지역/용도/가격/감정가 비율/유찰 횟수로 다중 필터링.",
  },
  {
    src: "/screenshots/bankruptcy-auction-viewport.png",
    label: "파산 경매 대시보드 — Claude AI 구조화",
    desc: "법원 파산경매 공고 PDF를 Claude Sonnet이 자동으로 JSON 구조화. 87건 PDF에서 물건 정보, 감정가, 소재지를 추출해 테이블로 정리.",
  },
];

const tech = [
  "Python", "React 19", "Vite", "Tailwind CSS",
  "Google Maps", "Claude AI", "PyPDF2", "concurrent.futures",
];

export default function AuctionSystemTab() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold mb-3">경매 자동 분석 시스템</h2>
        <p className="text-xl text-[--color-text] font-semibold mb-2">
          4개 이기종 데이터 소스를 통합하고 AI로 분석하는 부동산 경매 플랫폼
        </p>
        <p className="text-[--color-text-muted] text-base leading-relaxed max-w-3xl">
          온비드, 법원경매, 신탁사, 파산경매에서 매물을 자동 수집하고,
          실거래가 교차검증과 리스크 분석으로 투자 적합 물건을 자동 선별합니다.
        </p>
      </div>

      {/* 이 프로젝트가 하는 일 */}
      <div className="p-6 rounded-xl bg-[--color-accent-dim]/10 border border-[--color-accent-dim]/20">
        <h3 className="text-lg font-bold mb-3 text-[--color-accent]">이 프로젝트가 하는 일</h3>
        <ul className="space-y-2 text-sm text-[--color-text-muted] leading-relaxed">
          <li><span className="text-[--color-text] font-medium">4개 소스 자동 수집:</span> 온비드 모바일 API(99건), 파산경매 PDF(77건), 신탁사 5곳(130건)을 병렬 크롤링으로 한 번에 수집합니다.</li>
          <li><span className="text-[--color-text] font-medium">AI PDF 구조화:</span> 법원 파산경매 공고 PDF를 Claude Sonnet이 JSON으로 변환. TXT 추출 방식으로 토큰 78% 절감 ($3.60 → $0.80).</li>
          <li><span className="text-[--color-text] font-medium">실거래가 교차검증:</span> Disco API + 실거래가 데이터로 감정가 대비 실제 시세를 검증하여 투자 수익률을 자동 산출합니다.</li>
          <li><span className="text-[--color-text] font-medium">지도 기반 대시보드:</span> Google Maps 위성뷰에 매물을 표시하고, 반경 300m~1km 인근 실거래 통계로 입지를 분석합니다.</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="통합 수집 물건" value="306건" />
        <StatCard label="데이터 소스" value="4개" />
        <StatCard label="API 전환 속도 향상" value="10x" />
        <StatCard label="AI 분석 비용 절감" value="78%" />
      </div>

      <FlowDiagram steps={flow} title="데이터 파이프라인" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">🤖 Claude AI PDF 구조화</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            법원 파산경매 공고 PDF를 자동 다운로드 후 텍스트 추출(처음 3페이지),
            Claude Sonnet으로 87건을 JSON 구조화. TXT 추출 방식으로 토큰 78% 절감
            ($3.60 → $0.80). 순차 처리가 병렬보다 41% 빠른 것을 실험으로 확인.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">📡 멀티소스 통합 수집</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            온비드 모바일 API(99건), 파산경매 PDF(77건), 신탁사 5개사(130건)를
            ThreadPoolExecutor로 병렬 수집. Playwright → HTTP API 전환으로
            10배 속도 향상. 비용 모델(취득세 4.6%, 등록비, 수수료) 자동 계산.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">🗺️ React 대시보드 + 지도</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            물건 카드, 다중 필터(지역/용도/가격/비율/유찰횟수),
            반경 300m/500m/1km 인근 실거래 통계, 5분위 가격 분석,
            Google Maps 위성뷰를 통합한 인터랙티브 분석 대시보드.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">💰 시세 교차검증</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            Disco API(공시가격 + 실거래가), data.go.kr(시군구 실거래 데이터),
            온비드 OpenAPI(권리 정보)를 교차 검증하여 감정가 대비
            실제 투자 수익률을 자동 산출.
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
