export type WorkPiece = {
  slug: string;
  eyebrow: string;
  title: string;
  field: string;
  intro: string;
  situation: string;
  made: string[];
  changed: string[];
  color: "coral" | "mint" | "sky";
};

export type Session = {
  date: string;
  title: string;
  audience: string;
  format: string;
  status: "완료" | "진행 중" | "예정";
  takeaway: string;
};

export const studio = {
  name: "dots-project",
  person: "오장섭",
  role: "AI 자동화 개발자 · 강사",
  url: "dots-project.work",
  email: "ojsoym2@gmail.com",
  phone: "010-4685-9570",
  kakao: "dots_connect",
  company: "주식회사 이집저집",
  headline: "KAIST 출신 개발자의\nAI 비즈니스 자동화.",
  tagline: "반복되는 운영을 AI 도구로 정리합니다. 강의와 개발을 같이 합니다.",
  description:
    "dots-project는 AI 자동화로 작은 회사의 반복 업무를 정리합니다. 부동산·콘텐츠·영업 같이 매일 같은 일이 쌓이는 영역을 도구 한 줄기로 다시 그립니다.",
};

export const services = [
  {
    no: "01",
    title: "AI 운영 자동화",
    body: "부동산·F&B·금융·플라워·예약 — 도메인 가리지 않고 반복 많은 영역을 AI 도구 한 줄기로 정리합니다.",
  },
  {
    no: "02",
    title: "AI 강의 · 교육",
    body: "1:1 · 소그룹 · 기업 워크숍. Claude Code, AI 자동화, 부동산·주식·회계 도메인별 실전 코스를 운영합니다.",
  },
  {
    no: "03",
    title: "1인 책임 작업",
    body: "기획·설계·개발·운영·유지보수까지 한 사람이 끝까지. 외주가 아니라 작업실로 일합니다.",
  },
];

export type SignatureCase = {
  index: string;
  category: string;
  field: string;
  title: string;
  client: string;
  format: string;
  built: string[];
  impact: string[];
  funnel: string;
};

export const signatureCases: SignatureCase[] = [
  {
    index: "I",
    category: "lecture × dev funnel",
    field: "부동산 · 강의 → 공동 프로젝트",
    title: "부동산 AI 하루코스 — 4시간 풀데이 부트캠프",
    client: "부동산 도메인 대표 H님 · 피아블코퍼레이션",
    format: "1:1 풀데이 · Next.js 라이브 슬라이드 + USB 핸드오프 2트랙",
    built: [
      "Vercel 라이브 덱 60+ 슬라이드",
      "MOLIT 주거 + 상업용 실거래 데이터 852건 실습 환경",
      "핸드오프 USB 패키지: API 신청 · Claude Code 설치 · 프롬프트 라이브러리 · 트러블슈팅 · 상가 실습",
      "hideInHandoff 필터 — 네이버 법적 리스크 콘텐츠 제외",
    ],
    impact: [
      "레슨 종료 직후 공동 프로젝트 제안 — 부동산 도메인 베이스",
      "구로·가산 강의 영업 직접 해주겠다 약속 — 네트워크 리드",
      "단순 거래가 아니라 수익쉐어 모델 작동 유력",
    ],
    funnel: "강의 1회 → 공동 프로젝트 + 강의 추천 funnel",
  },
  {
    index: "II",
    category: "platform build",
    field: "F&B 프랜차이즈 · 풀스택 AI 플랫폼",
    title: "8매장 BBQ 프랜차이즈 통합 AI 플랫폼 — 5개 모듈",
    client: "연매출 ~800억 BBQ 프랜차이즈 D사",
    format: "강의(₩500K) → 시스템 구축 lead → 진행 중",
    built: [
      "스케줄 최적화 모듈 — OR-Tools 솔버",
      "메뉴 개발 모듈 — 매장별 비용·매출 비교",
      "CCTV 분석 모듈 — YOLOv8 객체 감지, 212초 영상 프레임별 분석",
      "전략 로드맵 + 퀀텀점프 시뮬레이터",
      "백엔드 1,675 LOC · 5개 API · 32+ 컴포넌트",
    ],
    impact: [
      "8개 매장 · 7명 직원 · 연매출 ~800억 운영 데이터 처리",
      "강의 1회(2026-02) → 통합정보시스템 구축 확장 논의(2026-04)",
      "90분 라이브 데모 1차 완료",
    ],
    funnel: "단발 강의 → 본격 통합 시스템 구축 funnel",
  },
  {
    index: "III",
    category: "long-term coaching",
    field: "회계법인 · 장기 1:1 + B2B 확장",
    title: "Claude Mastery — 회계 도메인 장기 마스터리 코칭",
    client: "회계법인 대표 S님 · JC도안",
    format: "1:1 장기 코칭 · 매주 수 2시간 (W1 종료 후 자발적 확장) · 라이브 덱 68장",
    built: [
      "Next.js 인터랙티브 강의 덱 (web-murex-nine-49.vercel.app)",
      "4개 모듈: 부동산 AI · 주식 자동화 · PPT 자동생성 · 회계 자동화",
      "도메인별 디자인 시스템 + HTML 템플릿",
      "PPT 빌더 6종 — toss · samsung · naver · kakao · hyundai · yanolja 스타일",
    ],
    impact: [
      "W1 종료 → 1시간 → 2시간 확장 자발적 전환 (몰입 시그널)",
      "Tier 2 파트너 강의 관찰 중 — 회계법인 직원교육 B2B 확장 가능성",
      "주간 반복 · 시간 확장 · 장기 계약 모델 검증",
    ],
    funnel: "1:1 → 직원교육 B2B 확장 funnel",
  },
];

export const workPieces: WorkPiece[] = [
  {
    slug: "daily-operations-flow",
    eyebrow: "운영 자동화",
    title: "매일 바뀌는 운영 흐름을 작은 도구로",
    field: "F&B · 현장 운영",
    intro: "스케줄·메뉴·현장 확인·전략 메모가 따로 움직이던 흐름을 운영자가 다시 볼 수 있는 보드로 모았습니다.",
    situation:
      "경험 많은 사람이 머릿속으로 처리하던 비교와 확인이 많았습니다. 문제는 기능 하나가 아니라, 하루에 여러 번 반복되는 판단의 순서였습니다.",
    made: [
      "스케줄과 배치 비교 화면",
      "메뉴와 비용을 함께 보는 운영 보드",
      "실시간 영상 분석을 참고하는 확인 흐름",
      "운영 메모를 다음 실험으로 남기는 기록 방식",
    ],
    changed: [
      "같은 계산을 다시 하는 시간 단축",
      "운영자가 보는 기준을 화면 위로 꺼냄",
      "다른 운영 문제에도 옮길 수 있는 모듈로 정리",
    ],
    color: "coral",
  },
  {
    slug: "research-to-next-step",
    eyebrow: "리서치 · 제안",
    title: "조사 자료를 다음 행동으로 잇기",
    field: "부동산 · 리서치 · 제안",
    intro: "자료를 모으는 데서 멈추지 않고, 검토 대상과 다음 연락·제안 흐름이 보이도록 바꿨습니다.",
    situation:
      "지역과 공간 자료는 충분했지만, 매번 사람이 다시 분류하고 다음 행동을 정해야 했습니다. 필요한 것은 더 많은 자료가 아니라 실행 가능한 정리 방식이었습니다.",
    made: [
      "조건별 후보 카드",
      "검토 우선순위 보드",
      "제안 문장과 자료 조립 흐름",
      "놓치기 쉬운 후속 확인 목록",
    ],
    changed: [
      "조사와 실행 사이의 빈틈을 줄임",
      "자료가 다음 행동으로 이어지게 만듦",
      "도메인 기준을 재사용 가능한 형태로 남김",
    ],
    color: "mint",
  },
  {
    slug: "editable-business-home",
    eyebrow: "스몰 비즈니스 웹",
    title: "운영자가 직접 고치는 비즈니스 홈",
    field: "숙박 · 커머스 · 콘텐츠 운영",
    intro: "소개 페이지를 예쁘게 만드는 것보다, 운영자가 사진·공지·상품 정보를 직접 바꿀 수 있는 구조에 집중했습니다.",
    situation:
      "작은 수정도 개발 요청처럼 느껴지는 순간, 웹사이트는 운영 도구가 아니라 방치되는 홍보물이 됩니다. 그래서 먼저 수정 가능한 구조를 잡았습니다.",
    made: [
      "공개 화면과 관리 입력 흐름",
      "사진·공지·상품을 나눠 담는 콘텐츠 구조",
      "모바일에서 먼저 보이는 정보 순서",
      "반복 문의를 줄이는 안내 배치",
    ],
    changed: [
      "콘텐츠 수정 부담을 줄임",
      "웹사이트를 매일 쓰는 운영 도구로 전환",
      "다른 로컬 비즈니스에도 옮길 수 있는 패턴 확보",
    ],
    color: "sky",
  },
];

export type MoreWork = {
  field: string;
  client: string;
  scope: string;
  status: "진행 중" | "완료" | "lead";
};

export const moreWork: MoreWork[] = [
  { field: "양평 펜션 그룹 M사", client: "M그룹", scope: "운영 통합 어드민 + 홈페이지 리빌드", status: "진행 중" },
  { field: "교대역 플라워샵 B사", client: "B사 · flcha.kr", scope: "비즈니스 홈 + 주문 흐름", status: "진행 중" },
  { field: "글로벌 카페 프랜차이즈 %A사", client: "%A사", scope: "AI 자동화 + 공동창업 검토", status: "lead" },
  { field: "패션 D사", client: "D사", scope: "데이터 정리·분석", status: "완료" },
  { field: "자양동 상가 임차인 확보", client: "상호님", scope: "Autopilot v1 — 자율 에이전트", status: "완료" },
  { field: "1:1 사업 멘토링", client: "별헤는밤", scope: "사업 컨설팅", status: "완료" },
];

export const sessions: Session[] = [
  {
    date: "",
    title: "부동산 AI 하루코스",
    audience: "부동산 도메인 대표",
    format: "1:1 풀데이 4시간",
    status: "완료",
    takeaway: "MOLIT 실거래 852건으로 직접 실습. 라이브 덱 + USB 핸드오프로 강의 종료 후에도 혼자 돌릴 수 있게.",
  },
  {
    date: "",
    title: "Claude 마스터리 코칭",
    audience: "회계법인 대표",
    format: "장기 1:1 · 매주 2시간",
    status: "진행 중",
    takeaway: "부동산 AI · 주식 자동화 · PPT 생성 · 회계 자동화 4개 모듈. 1시간 → 2시간 자발적 확장.",
  },
  {
    date: "",
    title: "AI 운영 자동화 워크숍",
    audience: "BBQ 프랜차이즈 D사",
    format: "기업 워크숍 1회",
    status: "완료",
    takeaway: "이 강의 1회가 통합 AI 플랫폼 5개 모듈 구축으로 확장. 강의→개발 깔때기의 정석.",
  },
  {
    date: "",
    title: "PPT 자동화 1:1",
    audience: "패션 마케팅 담당",
    format: "집중 2시간",
    status: "완료",
    takeaway: "매번 새로 그리던 발표 자료를 빌더 템플릿으로. 후기·재계약·외주 1건 추가 진행.",
  },
  {
    date: "",
    title: "주식 자동화 코딩과외",
    audience: "개인 트레이더",
    format: "정기 1:1",
    status: "진행 중",
    takeaway: "키움 REST API · 이동평균 · RSI · 52주 신고가 전략 모듈을 본인 손으로.",
  },
  {
    date: "",
    title: "Claude Code 코딩과외",
    audience: "스타트업 The New Standard",
    format: "소그룹 · 최대 3명",
    status: "진행 중",
    takeaway: "Claude Code 워크플로우와 도메인 적용을 함께. 팀 단위로 같은 도구를 쓰게 만드는 형태.",
  },
  {
    date: "",
    title: "AI 워크숍 1·2회차",
    audience: "교육 W사",
    format: "정기 워크숍",
    status: "예정",
    takeaway: "5월·6월 두 차례 진행. 강사 풀로 자리잡기 위한 시그니처 라인업.",
  },
  {
    date: "",
    title: "Claude 1:1 입문",
    audience: "소상공인",
    format: "1회 · 1시간",
    status: "완료",
    takeaway: "AI를 처음 깔아본 분에게 본인 업무 한 가지를 실제로 돌려보게 합니다.",
  },
  {
    date: "",
    title: "랩세미나 발표",
    audience: "MBA 9기",
    format: "세미나",
    status: "완료",
    takeaway: "강연 자체보다 네트워크·간접 레버 목적. 강의 자료 14페이지 덱 재사용 가능.",
  },
  {
    date: "",
    title: "물류 Claude 과외",
    audience: "물류 W사 임원",
    format: "격주 정기",
    status: "예정",
    takeaway: "광명 GIDC. 업무 자료 그대로 받아 실제 적용 시나리오로 매번 한 가지씩.",
  },
];

export type ExperimentProduct = {
  name: string;
  channel: string;
  oneliner: string;
  highlights: string[];
};

export const experiments: ExperimentProduct[] = [
  {
    name: "Content Factory",
    channel: "빌릭 AI · 유튜브 자동화",
    oneliner: "리서치 → 대본 → TTS → 렌더 → 배포 8단계 파이프라인.",
    highlights: [
      "Qwen3-TTS 1.7B (MLX, Apple Silicon) 음성 클로닝",
      "59+ 비주얼 템플릿 · A/B 음성 비교",
      "Next.js 대시보드 + 파이프라인 시각화",
    ],
  },
  {
    name: "Newlisting Bot",
    channel: "바이낸스 V5 · 24h 라이브",
    oneliner: "신규 상장 코인 자동 트레이딩 봇.",
    highlights: ["$130 시드 라이브", "백테스트 APY 96.5%", "리스크 가드 + 인디케이터 트리거"],
  },
  {
    name: "Auction System",
    channel: "부동산 경매 자동 분석",
    oneliner: "PDF 파싱·실거래 비교까지 자동.",
    highlights: ["306건 동시 분석", "AI PDF 파싱 78% 비용절감", "마당 + Disco API 가격 패널"],
  },
  {
    name: "Team Dots Dashboard",
    channel: "내부 팀 운영 + DeFi 모니터",
    oneliner: "4팀 통합 어드민 + 실시간 DeFi 트래커.",
    highlights: [
      "Crypto · R&D · Business · Real Estate 4팀 통합",
      "PT-Looping · 11개 거래소 펀딩비 비교",
      "유튜브 리서치 파이프라인 + AI 제안 시스템",
    ],
  },
  {
    name: "Autopilot",
    channel: "자율 에이전트 미션 시스템",
    oneliner: "단일 목표를 받고 끝까지 실행하는 에이전트.",
    highlights: [
      "자양동 상가 임차인 확보 케이스 엔진",
      "단계 분해 · 외부 도구 호출 · 결과 검증",
      "수동 개입 없이 일 단위 자율 운영",
    ],
  },
];

export const trustBar = [
  { tier: "F&B / 프랜차이즈", name: "BBQ 프랜차이즈 D사 (연매출 ~800억)" },
  { tier: "F&B / 프랜차이즈", name: "글로벌 카페 %A사" },
  { tier: "숙박 · 펜션", name: "양평 펜션 그룹 M사" },
  { tier: "리테일 · 플라워", name: "교대역 플라워샵 B사" },
  { tier: "리테일 · 패션", name: "패션 D사" },
  { tier: "전문직 · 회계", name: "회계법인 J사" },
  { tier: "전문직 · 부동산", name: "부동산 도메인 P사" },
  { tier: "교육 · 컨설팅", name: "컨설팅 N사" },
  { tier: "교육 · 컨설팅", name: "교육 W사" },
  { tier: "금융", name: "신한금융 S지점" },
  { tier: "물류", name: "물류 W사" },
  { tier: "골프 · 라이프스타일", name: "골프 Y사" },
];

export const about = {
  title: "강의로 사람을 만나고, 개발로 그 반복을 남깁니다.",
  body:
    "오장섭은 KAIST 전산학부 출신으로, AI 강의와 실제 시스템 개발을 함께 합니다. 강의는 사람을 만나기 위한 언어이고, 개발은 그 만남에서 발견한 반복을 오래 쓰는 도구로 남기는 일입니다.",
  facts: ["KAIST 전산학부", "Founder-operator", "AI 워크숍 12회+", "주식회사 이집저집"],
};

export const promiseCards = services;
export const stats = [
  { value: "12+", label: "강의·코칭" },
  { value: "5", label: "AI 플랫폼 모듈" },
  { value: "852", label: "실거래 데이터" },
  { value: "KAIST", label: "전산학부" },
];
