"use client";

import FlowDiagram from "../ui/FlowDiagram";
import TechBadge from "../ui/TechBadge";
import StatCard from "../ui/StatCard";

const flow = [
  { icon: "🌐", title: "전국 스캔", desc: "73개 지역 동시" },
  { icon: "🔤", title: "키워드 필터", desc: "포함/제외 패턴" },
  { icon: "🤖", title: "AI 등급 분류", desc: "S/A/패스 자동" },
  { icon: "📱", title: "자동 지원", desc: "ADB 앱 자동화" },
  { icon: "💰", title: "업셀링", desc: "초기 접촉 → 추가 제안" },
];

const tech = [
  "Python 3 (asyncio)", "httpx", "Claude Haiku",
  "Regex", "ADB (Android)", "JSON",
];

export default function GigHunterTab() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold mb-3">Gig Hunter</h2>
        <p className="text-xl text-[--color-text] font-semibold mb-2">
          당근마켓/숨고에서 AI로 일감을 자동 분류하고 즉시 지원하는 프리랜서 헌팅 봇
        </p>
        <p className="text-[--color-text-muted] text-base leading-relaxed max-w-3xl">
          전국 73개 지역을 하루 4회 스캔해서 ~12,000건 중 AI/코딩 관련 일감을 자동 필터링합니다.
          키워드 매칭 → Claude AI 등급 분류 2단계 파이프라인으로 S급 기회를 즉시 포착합니다.
        </p>
      </div>

      <div className="p-6 rounded-xl bg-[--color-accent-dim]/10 border border-[--color-accent-dim]/20">
        <h3 className="text-lg font-bold mb-3 text-[--color-accent]">이 프로젝트가 하는 일</h3>
        <ul className="space-y-2 text-sm text-[--color-text-muted] leading-relaxed">
          <li><span className="text-[--color-text] font-medium">전국 73개 지역 동시 스캔:</span> 서울 25구, 경기 12시, 주요 광역시를 12시간 윈도우로 스캔. 스캔당 ~12,000건 처리.</li>
          <li><span className="text-[--color-text] font-medium">2단계 AI 분류:</span> Level 1 키워드 매칭(20-30건 추출) → Level 2 Claude Haiku가 S/A/패스 등급으로 분류(5-10건 최종).</li>
          <li><span className="text-[--color-text] font-medium">자동 등급 기준:</span> S급(10만+/건, AI/코딩, 온라인) → 즉시 지원. A급(3만+/건, 업셀 가능) → 검토 후 지원.</li>
          <li><span className="text-[--color-text] font-medium">ADB 자동 지원:</span> Samsung S24+에서 당근마켓 앱을 ADB로 자동 조작해 지원 프로세스 자동화 (개발중).</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="스캔 지역" value="73개" />
        <StatCard label="스캔당 처리량" value="~12K건" />
        <StatCard label="하루 스캔" value="4회" />
        <StatCard label="AI 분류 모델" value="Haiku" />
      </div>

      <FlowDiagram steps={flow} title="일감 헌팅 파이프라인" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">🔍 2단계 필터링</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            Level 1: AI, Python, 자동화, ChatGPT 등 포함 키워드 매칭
            + 수학/영어/피아노/배달 등 제외 필터.
            Level 2: Claude Haiku가 금액, 난이도, 업셀 가능성을
            종합 평가해 S/A/패스 등급 분류.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">📱 ADB 앱 자동화</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            Android Debug Bridge로 Samsung S24+ 실기기를 제어.
            당근마켓 앱에서 검색 → 글 확인 → 지원 메시지 작성까지
            자동화. 지원 템플릿 + 이력 관리 포함.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">💰 숨고 "만원 폭탄" 전략</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            5천원 견적 요청에 1-2만원 견적을 자동 제출.
            &ldquo;AI로 빠르게&rdquo; 차별화 메시징으로 초기 접촉 후
            추가 기능 업셀링으로 전환. (개발 계획중)
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">⚡ 비용 효율 AI</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            Claude Haiku 모델을 선택해 분류 비용 최소화.
            12,000건 → 30건 → 10건으로 단계적 필터링하여
            AI API 호출을 최소한으로 유지.
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
