export type CaseImage = {
  src: string;
  alt: string;
};

export type Case = {
  slug: string;
  order: number;
  category: string;
  title: string;
  client: string;
  period: string;
  format: string;
  summary: string;
  outputs: string[];
  impact: string[];
  metrics: { label: string; value: string }[];
  images: CaseImage[];
  pullquote?: string;
  /** Full-bleed hero asset for /work grid and case detail header */
  heroAsset: string;
};

export const cases: Case[] = [
  {
    slug: "real-estate-day-bootcamp",
    order: 1,
    category: "강의 → 공동 프로젝트",
    title: "부동산 AI 하루코스",
    client: "부동산 도메인",
    period: "2026-04-20 · 4시간 풀데이",
    format: "1:1 풀데이 부트캠프 · Vercel 라이브 덱 + USB 핸드오프 2트랙",
    summary:
      "MOLIT 실거래 852건 실습 환경과 60+ 슬라이드 라이브 덱, 4종 핸드오프 매뉴얼. 강의 종료 직후 공동 프로젝트 제안과 신규 강연 영업 약속까지 자연스럽게 흘러간 케이스.",
    outputs: [
      "Vercel 라이브 덱 60+ 슬라이드",
      "핸드오프 USB: API 신청 · Claude Code 설치 · 프롬프트 라이브러리 · 트러블슈팅",
      "MOLIT 주거+상업 실거래 852건 실습 환경",
      "hideInHandoff 필터 (법적 리스크 콘텐츠 분리)",
    ],
    impact: [
      "레슨 종료 직후 공동 프로젝트 제안",
      "구로·가산 강의 영업 직접 연결 약속",
      "장기 협약 funnel 4번째 검증 신호",
    ],
    metrics: [
      { label: "거래 데이터", value: "852건" },
      { label: "라이브 슬라이드", value: "60+" },
      { label: "핸드오프 매뉴얼", value: "4종" },
    ],
    images: [
      { src: "/screenshots/sanho-research-v2-viewport.png", alt: "부동산 리서치 대시보드" },
      { src: "/screenshots/sanho-broker-viewport.png", alt: "중개·매물 분석 화면" },
      { src: "/screenshots/sanho-analysis-viewport.png", alt: "실거래 분석 리포트" },
    ],
    heroAsset: "/screenshots/sanho-research-v2-viewport.png",
    pullquote:
      "강의 한 번이 아니라, 다음 협업과 영업 동선까지 함께 설계됐다.",
  },
  {
    slug: "fnb-group-ai-platform",
    order: 2,
    category: "장기 dev + 강의 연계",
    title: "요식업 그룹 AI 플랫폼",
    client: "연매출 800억 · 8개 매장 요식업 프랜차이즈",
    period: "2026-01 ~ 진행중 · 90분 라이브 데모 1차 완료",
    format: "5개 모듈 풀스택 AI 플랫폼",
    summary:
      "스케줄 최적화 · 메뉴 개발 · CCTV 객체 감지 · 전략 로드맵 · 시뮬레이터까지 5개 모듈, 32+ 컴포넌트, 백엔드 1,675 LOC. 강의를 통해 시작된 관계가 통합정보시스템 확장으로 이어지는 중.",
    outputs: [
      "스케줄 최적화 모듈 (OR-Tools 솔버)",
      "메뉴 개발 모듈",
      "CCTV 분석 모듈 (YOLOv8 · 212초 영상 프레임별 분석)",
      "전략 로드맵 모듈",
      "퀀텀점프 시뮬레이터",
    ],
    impact: [
      "8개 매장 · 7명 직원 · 연매출 800억 운영 데이터 처리",
      "강의 → 통합정보시스템 lead 전환",
      "확장 미팅 진행 중",
    ],
    metrics: [
      { label: "모듈", value: "5개" },
      { label: "컴포넌트", value: "32+" },
      { label: "백엔드", value: "1,675 LOC" },
    ],
    images: [
      { src: "/screenshots/sales-meeting-viewport.png", alt: "운영 미팅 인사이트 보드" },
      { src: "/screenshots/sales-analysis-viewport.png", alt: "매출·트래픽 분석 화면" },
      { src: "/screenshots/teamdots-auction-scan.png", alt: "데이터 스캔 모니터" },
    ],
    heroAsset: "/screenshots/teamdots-business-viewport.png",
    pullquote:
      "운영 데이터를 한 화면에서 다루는 도구가 생기자, 의사결정 속도가 다르게 바뀝니다.",
  },
  {
    slug: "claude-mastery-private",
    order: 3,
    category: "장기 1:1 → B2B 확장",
    title: "Claude 마스터리 1:1 코칭",
    client: "전문직 회계법인",
    period: "2026-04-23 ~ 진행중 · 매주 수 16:00 (자발 2시간 확장)",
    format: "1:1 장기 코칭 + Vercel 인터랙티브 라이브 덱 (68장)",
    summary:
      "회계 도메인 1:1 장기 코칭이 W1 종료 직후 2시간 확장으로 자발 전환. B2B 직원교육으로 확장될 가능성을 관찰 중인 장기 계약 모델 검증 케이스.",
    outputs: [
      "Next.js 인터랙티브 강의 덱 68장",
      "부동산 AI 모듈",
      "주식 자동화 모듈",
      "PPT 자동생성 모듈",
      "회계 자동화 모듈",
    ],
    impact: [
      "W1 완료 → 2시간 확장 자발 전환 (몰입 시그널)",
      "Tier 2 파트너 강의 관찰 중",
      "장기 계약 모델 검증",
    ],
    metrics: [
      { label: "라이브 덱", value: "68장" },
      { label: "강의 모듈", value: "4개" },
      { label: "주간 호흡", value: "수 · 2h" },
    ],
    images: [
      { src: "/screenshots/cf-design-board-viewport.png", alt: "강의 인터랙티브 덱 보드" },
      { src: "/screenshots/cf-pipeline-viewport.png", alt: "자동화 파이프라인 다이어그램" },
    ],
    heroAsset: "/screenshots/cf-design-board-viewport.png",
    pullquote:
      "한 회차의 만족도가 자발적인 시간 확장으로 돌아오는 게 가장 정직한 KPI.",
  },
];
