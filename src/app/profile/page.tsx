"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.4 },
});

const projects = {
  self: [
    { name: "팀 관리 대시보드", desc: "4개 팀 업무를 한 화면에서 관리. AI가 보고서, 할 일 제안, 우선순위 정리" },
    { name: "경매 분석 대시보드", desc: "경매 물건 필터링 + 주변 시세 비교 분석" },
    { name: "DeFi 투자 모니터", desc: "거래소별 수익률/금리 실시간 비교" },
    { name: "자동 매매 봇", desc: "시장 조건 감지 → 매매 → 알림까지 자동" },
    { name: "AI 리서치 수집", desc: "AI 유튜브 영상 자동 수집 → 요약 + 품질 평가" },
    { name: "영상 자동 제작", desc: "주제 → 대본 → 음성 → 편집 AI 파이프라인" },
  ],
  client: [
    { name: "프랜차이즈 AI 플랫폼", desc: "스케줄 최적화, 영상 분석, 메뉴 경쟁력, 손익 시뮬레이션" },
    { name: "숙박 예약 홈페이지", desc: "숙박 시설 랜딩페이지" },
    { name: "상가 임대 분석", desc: "임대 시장 데이터 대시보드" },
    { name: "부품 유통 분석", desc: "자동차 부품 시장 경쟁사 분석" },
    { name: "매출 분석 대시보드", desc: "매장별 매출 추이 비교" },
    { name: "프리랜서 매칭", desc: "프리랜서 플랫폼 일감 AI 분류/추천" },
  ],
};

const lectureBlocks = [
  { time: "15분", label: "오프닝 + AI 흐름", desc: "AI 흐름 요약 (프롬프트 시대 → 에이전트 시대)" },
  { time: "15분", label: "비교 시연", desc: "ChatGPT/Gemini vs Claude 비교 (단순→복잡→에이전트)" },
  { time: "15분", label: "토론 + 아이디어 수집", desc: "2인 1조 짝 토론, 포스트잇 제출" },
  { time: "10분", label: "쉬는 시간", desc: "강사가 아이디어 분류 및 데모 준비" },
  { time: "35분", label: "에이전트 심화 데모", desc: "실제 AI 플랫폼 시연 + 라이브 프롬프팅" },
  { time: "20분", label: "Q&A", desc: "자유 질의응답 + 추가 시연" },
  { time: "5분", label: "마무리", desc: "핵심 정리 + 다음 시간 예고" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xs tracking-[0.15em] uppercase text-[--color-text-muted] mb-4 md:mb-6">{children}</h2>;
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`p-4 md:p-5 rounded-xl border border-[--color-border] bg-[--color-card] ${className}`}>
      {children}
    </div>
  );
}

export default function ProfilePage() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[--color-border] bg-[--color-bg]/90 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 md:px-6 h-12 md:h-14 flex items-center justify-between">
          <Link href="/" className="text-xs md:text-sm text-[--color-text-muted] hover:text-[--color-accent] transition-colors">
            &larr; Portfolio
          </Link>
          <span className="text-xs md:text-sm font-medium text-[--color-text-muted]">Profile</span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 md:px-6 pt-20 md:pt-28 pb-16 md:pb-20">
        {/* Hero */}
        <motion.section {...fadeUp(0.1)} className="mb-12 md:mb-20">
          <p className="text-[--color-accent] text-xs tracking-[0.15em] uppercase mb-3">About</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            <span className="gradient-text">닷츠</span>{" "}
            <span className="text-[--color-text-muted] text-2xl md:text-4xl font-normal">Dots</span>
          </h1>
          <p className="text-xs md:text-sm text-[--color-text-muted] tracking-[0.1em] mb-4 md:mb-6">Connecting the Dots</p>
          <p className="text-base md:text-lg text-[--color-text-muted] leading-relaxed">
            투자하고, 사업하고, AI로 직접 만드는 사람입니다.
          </p>
        </motion.section>

        {/* Background */}
        <motion.section {...fadeUp(0.2)} className="mb-10 md:mb-16">
          <SectionLabel>Background</SectionLabel>
          <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
            <Card>
              <p className="text-[10px] md:text-xs text-[--color-text-muted] mb-1.5">학력</p>
              <p className="text-xs md:text-sm leading-relaxed">
                KAIST 산업 및 시스템공학과 학사<br />
                KAIST 기술경영전문대학원 석사<br />
                KAIST 기술경영전문대학원 박사과정 수료
              </p>
            </Card>
            <Card>
              <p className="text-[10px] md:text-xs text-[--color-text-muted] mb-1.5">경력</p>
              <p className="text-xs md:text-sm leading-relaxed">
                (주)이집저집 운영 (현)<br />
                (주)굳페이스 COO (전)
              </p>
            </Card>
          </div>
        </motion.section>

        {/* What I Do */}
        <motion.section {...fadeUp(0.3)} className="mb-10 md:mb-16">
          <SectionLabel>What I Do</SectionLabel>
          <div className="space-y-3 md:space-y-0 md:grid md:grid-cols-3 md:gap-4">
            {[
              {
                title: "AI 컨설팅",
                items: ["기업 AI 도입 전략 ~ 시스템 구축", "반복 업무 AI 에이전트 자동화"],
              },
              {
                title: "교육 및 강의",
                items: ["아이디어 → 기획 → 구현 → 배포", "비개발자 대상 AI 실습 교육"],
              },
              {
                title: "투자",
                items: ["크립토: DeFi, 트레이딩, 차익거래", "부동산: 경매/공매 데이터 기반 입찰"],
              },
            ].map((card) => (
              <Card key={card.title}>
                <p className="font-semibold text-sm mb-2">{card.title}</p>
                <ul className="space-y-1">
                  {card.items.map((item) => (
                    <li key={item} className="text-xs md:text-sm text-[--color-text-muted]">{item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section {...fadeUp(0.35)} className="mb-12 md:mb-20">
          <SectionLabel>
            Projects <span className="text-[--color-accent]">15+</span>
            <span className="ml-1.5 text-[10px] md:text-xs normal-case tracking-normal">(2026.01 ~ 현재)</span>
          </SectionLabel>

          <div className="mb-6">
            <p className="text-[10px] md:text-xs text-[--color-text-muted] mb-2 uppercase tracking-wider">자체 프로젝트</p>
            <div className="space-y-2 md:space-y-0 md:grid md:grid-cols-2 md:gap-3">
              {projects.self.map((p) => (
                <div key={p.name} className="p-3 md:p-4 rounded-lg border border-[--color-border] bg-[--color-card] hover:border-[--color-accent]/40 transition-colors">
                  <p className="font-medium text-xs md:text-sm mb-0.5">{p.name}</p>
                  <p className="text-[11px] md:text-xs text-[--color-text-muted] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] md:text-xs text-[--color-text-muted] mb-2 uppercase tracking-wider">클라이언트 프로젝트</p>
            <div className="space-y-2 md:space-y-0 md:grid md:grid-cols-2 md:gap-3">
              {projects.client.map((p) => (
                <div key={p.name} className="p-3 md:p-4 rounded-lg border border-[--color-border] bg-[--color-card] hover:border-[--color-accent]/40 transition-colors">
                  <p className="font-medium text-xs md:text-sm mb-0.5">{p.name}</p>
                  <p className="text-[11px] md:text-xs text-[--color-text-muted] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Divider */}
        <div className="border-t border-[--color-border] mb-12 md:mb-20" />

        {/* Lecture Program */}
        <motion.section {...fadeUp(0.4)}>
          <p className="text-[--color-accent] text-xs tracking-[0.15em] uppercase mb-3">Lecture Program</p>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-2">
            AI 에이전트 시대,<br className="md:hidden" /> 내 사업에 적용하기
          </h2>
          <p className="text-[11px] md:text-sm text-[--color-text-muted] mb-8 md:mb-12">
            AI 에이전트를 실제 사업에 적용하는 실전 강의
          </p>

          {/* Session 1 */}
          <div className="mb-10">
            <h3 className="text-sm md:text-lg font-semibold mb-4 md:mb-6">
              1회차: AI 에이전트, 이게 뭐고 뭐가 다른가
            </h3>
            <div className="space-y-2 md:space-y-3">
              {lectureBlocks.map((block, i) => (
                <div
                  key={i}
                  className="flex gap-3 md:gap-4 p-3 md:p-4 rounded-lg border border-[--color-border] bg-[--color-card]"
                >
                  <span className="shrink-0 w-10 md:w-12 text-[10px] md:text-xs font-mono text-[--color-accent] pt-0.5">
                    {block.time}
                  </span>
                  <div className="min-w-0">
                    <p className="font-medium text-xs md:text-sm">{block.label}</p>
                    <p className="text-[11px] md:text-xs text-[--color-text-muted] mt-0.5 leading-relaxed">{block.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] md:text-xs text-[--color-text-muted] mt-3 italic">
              * 1~2회차 사이 (약 1달): 토론에서 나온 아이디어 중 2~3개를 강사가 실제로 구현
            </p>
          </div>

          {/* Session 2 */}
          <div>
            <h3 className="text-sm md:text-lg font-semibold mb-4">
              2회차: 내 사업에 AI 적용하기
            </h3>
            <div className="p-3 md:p-4 rounded-lg border border-[--color-border] bg-[--color-card]">
              <p className="text-xs md:text-sm text-[--color-text-muted]">1회차 이후 상세화 예정</p>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer {...fadeUp(0.5)} className="mt-16 md:mt-20 pt-6 md:pt-8 border-t border-[--color-border] text-center">
          <p className="text-xs md:text-sm text-[--color-text-muted]">
            <Link href="/" className="hover:text-[--color-accent] transition-colors">Portfolio</Link>
            <span className="mx-2 text-[--color-border]">|</span>
            <Link href="/" className="hover:text-[--color-accent] transition-colors">Team Dots</Link>
          </p>
        </motion.footer>
      </div>
    </main>
  );
}
