export type Experiment = {
  name: string;
  tagline: string;
  metric: string;
};

export const experiments: Experiment[] = [
  {
    name: "Content Factory",
    tagline: "AI 채널 8단계 자동화 파이프라인",
    metric: "59+ 템플릿",
  },
  {
    name: "Newlisting Bot",
    tagline: "바이낸스 V5 신규 상장 트레이딩",
    metric: "백테 APY 96.5% · $130 시드 라이브",
  },
  {
    name: "Auction System",
    tagline: "경매 동시 분석 + AI PDF 파싱",
    metric: "306건 분석 · 비용 78% 절감",
  },
  {
    name: "Team Dots Dashboard",
    tagline: "4팀 통합 + DeFi 모니터링",
    metric: "운영 중",
  },
  {
    name: "Autopilot",
    tagline: "자율 에이전트 미션 시스템",
    metric: "자양동 임차인 확보 케이스 엔진",
  },
];
