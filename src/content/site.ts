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
  tagline: "반복되는 업무를 AI 도구로 정리합니다. 강의와 개발을 같이 합니다.",
  description:
    "dots-project는 AI 자동화로 작은 회사의 반복 업무를 정리합니다. 매일 같은 일이 쌓이는 영역을 도구 한 줄기로 다시 그립니다.",
};

export const services = [
  {
    no: "01",
    title: "AI 비즈니스 자동화",
    body:
      "사장님이 매일 손으로 하던 일을 AI 도구로 정리합니다. 매장 운영 · 영업 · 회계 · 마케팅 · 부동산 · 콘텐츠 — 도메인을 가리지 않습니다.",
  },
  {
    no: "02",
    title: "AI 강의 · 코칭",
    body:
      "AI를 처음 깔아본 분부터 실무자까지. 1:1 · 소그룹 · 기업 워크숍으로 진행합니다. 본인 업무 자료를 그대로 가져와 실제로 돌려봅니다.",
  },
  {
    no: "03",
    title: "1인 책임 작업",
    body:
      "기획 · 디자인 · 개발 · 운영 · 유지보수까지 한 사람이 끝까지 갑니다. 외주 아니라 작업실로 같이 일합니다.",
  },
];

export type SignatureCase = {
  index: string;
  category: string;
  field: string;
  title: string;
  lead: string;
  client: string;
  format: string;
  built: string[];
  impact: string[];
  funnel: string;
};

export const signatureIntro =
  "dots-project가 일하는 기본 패턴은 같습니다. 강의나 코칭에서 한 분을 만나고, 그 자리에서 진짜 문제를 같이 풉니다. 거기서 나온 다음 단계가 공동 프로젝트로, 통합 시스템 구축으로, 조직 단위 교육으로 이어집니다. 아래 세 가지가 그 흐름을 가장 잘 보여주는 작업입니다.";

export const signatureCases: SignatureCase[] = [
  {
    index: "I",
    category: "강의 한 번이 공동 프로젝트로",
    field: "부동산 일하시는 분께",
    title: "부동산 AI 하루 코스 — 4시간 만에 본인 손으로 돌리기",
    lead:
      "4시간짜리 강의 한 번. 끝나기 전에 다음 협업 제안이 먼저 나왔습니다. 강의가 영업 자료가 아니라, 그 자리에서 같이 푸는 작업이 되도록 설계했습니다.",
    client: "부동산 도메인 대표 H님",
    format: "1:1 풀데이 4시간 · 라이브 슬라이드 + 강의 종료 후 USB 자료까지",
    built: [
      "라이브 슬라이드 덱 60장 이상 — 실시간으로 같이 따라하는 형식",
      "국토부 주거 · 상업용 실거래 데이터 852건으로 직접 실습",
      "강의 종료 후 USB 자료 — API 발급법, AI 도구 설치, 자주 쓰는 명령어 모음, 문제 해결 가이드, 상가 실습 키트",
      "법적 리스크 있는 콘텐츠는 자료에서 자동 제외",
    ],
    impact: [
      "강의 종료 직후 공동 프로젝트 제안 — 부동산 도메인 기반",
      "구로 · 가산 추가 강의 직접 연결해주기로",
      "단순 수강이 아니라 수익쉐어 협업 모델로 발전",
    ],
    funnel: "강의 한 번 → 공동 프로젝트 + 추가 강의 연결",
  },
  {
    index: "II",
    category: "단발 강의가 통합 시스템 구축으로",
    field: "외식 프랜차이즈 통합 운영",
    title: "8매장 외식 프랜차이즈 AI 운영 도구 5개",
    lead:
      "기업 워크숍 한 번이 통합 시스템 본 계약으로 이어진 케이스. 8개 매장의 운영을 도구 위에서 다시 그렸고, 90분 라이브 데모로 1차 검증까지 마쳤습니다.",
    client: "연매출 ~800억 외식 프랜차이즈 D사 (흑돼지·고깃집 브랜드)",
    format: "단발 강의 한 번 → 통합 시스템 구축으로 확장 → 진행 중",
    built: [
      "스케줄 최적화 — 매장별 인력 자동 배치",
      "메뉴 운영 보드 — 매장별 비용·매출 한눈에 비교",
      "CCTV 영상 분석 — AI가 손님 동선·체류 시간 자동 파악",
      "전략 로드맵 + 매출 시뮬레이터",
      "전체 시스템: 매장 데이터 처리 · 5개 자동 흐름 · 30개 이상 화면",
    ],
    impact: [
      "8개 매장 · 7명 직원 · 연매출 ~800억 운영 데이터 처리",
      "강의 1회(2월) → 통합 시스템 구축 확장 논의(4월)",
      "90분 라이브 데모 1차 완료",
    ],
    funnel: "단발 강의 → 통합 시스템 본 계약",
  },
  {
    index: "III",
    category: "1:1 코칭이 조직 단위로",
    field: "비즈니스 대표 장기 코칭",
    title: "대표님 한 분과 매주 2시간 — 사업 전반 AI 코칭",
    lead:
      "첫 주에 1시간이 2시간으로 자발적으로 늘었고, 지금은 직원 교육·파트너 확장 논의로 이어지는 중입니다. 깊은 1:1이 조직 단위 계약으로 퍼지는 흐름.",
    client: "전문직 1인 대표 S님",
    format: "1:1 장기 코칭 · 매주 수요일 2시간 · 강의 자료 68장",
    built: [
      "인터랙티브 강의 덱 — 클릭하며 직접 따라하는 형식",
      "4개 주제: 부동산 AI · 주식 자동화 · 발표 자료 자동 만들기 · 세무 자동화",
      "주제별 강의 디자인 시스템 + 자료 템플릿",
      "PPT 자동 생성기 6종 — 토스 · 삼성 · 네이버 · 카카오 · 현대 · 야놀자 스타일",
    ],
    impact: [
      "첫 주 종료 후 1시간 → 2시간으로 자발적 확장 (몰입 시그널)",
      "직원 교육 · 다른 파트너 확장 논의 중",
      "주간 반복 · 시간 확장 · 장기 계약 모델 검증",
    ],
    funnel: "대표 1:1 → 직원 교육으로 확장",
  },
];

export const workPieces: WorkPiece[] = [
  {
    slug: "daily-operations-flow",
    eyebrow: "운영 자동화",
    title: "매일 바뀌는 운영 흐름을 작은 도구로",
    field: "외식 · 현장 운영",
    intro: "스케줄·메뉴·현장 확인·전략 메모가 따로 움직이던 흐름을 운영자가 다시 볼 수 있는 보드로 모았습니다.",
    situation:
      "경험 많은 분이 머릿속으로 처리하던 비교와 확인이 많았습니다. 문제는 기능 하나가 아니라, 하루에 여러 번 반복되는 판단의 순서였습니다.",
    made: [
      "스케줄과 배치 비교 화면",
      "메뉴와 비용을 함께 보는 운영 보드",
      "CCTV 영상 분석을 참고하는 확인 흐름",
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
    intro: "자료를 모으는 데서 멈추지 않고, 검토 대상과 다음 연락 · 제안 흐름이 보이도록 바꿨습니다.",
    situation:
      "지역과 공간 자료는 충분했지만, 매번 사람이 다시 분류하고 다음 행동을 정해야 했습니다. 필요한 건 더 많은 자료가 아니라 실행 가능한 정리 방식이었습니다.",
    made: [
      "조건별 후보 카드",
      "검토 우선순위 보드",
      "제안 문장과 자료 조립 흐름",
      "놓치기 쉬운 후속 확인 목록",
    ],
    changed: [
      "조사와 실행 사이의 빈틈 축소",
      "자료가 다음 행동으로 이어지게 만듦",
      "도메인 기준을 재사용 가능한 형태로 남김",
    ],
    color: "mint",
  },
  {
    slug: "editable-business-home",
    eyebrow: "스몰 비즈니스 홈페이지",
    title: "운영자가 직접 고치는 비즈니스 홈페이지",
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
      "콘텐츠 수정 부담 축소",
      "웹사이트를 매일 쓰는 운영 도구로 전환",
      "다른 로컬 비즈니스에도 옮길 수 있는 패턴 확보",
    ],
    color: "sky",
  },
];

export type CapabilityGroup = {
  label: string;
  english: string;
  items: string[];
};

export const capabilities: CapabilityGroup[] = [
  {
    label: "웹·홈페이지",
    english: "web & homepage",
    items: [
      "비즈니스 홈페이지 — 운영자가 직접 고치는 구조",
      "운영 관리 페이지 (사진·공지·상품 직접 수정)",
      "주문·예약 흐름 설계",
      "모바일 최적화 · SEO 세팅",
      "랜딩 페이지 · 포트폴리오 사이트",
    ],
  },
  {
    label: "AI 자동화",
    english: "ai automation",
    items: [
      "운영 자동화 — 스케줄·인력 배치·메뉴 보드",
      "CCTV 영상 분석 — 손님 동선·체류 자동 파악",
      "AI 자율 실행 — 목표 받고 본인 대신 진행",
      "반복 업무 자동 흐름 — 5개 이상 묶음",
      "AI 도구 도입 진단·우선순위 설계",
    ],
  },
  {
    label: "데이터·리서치",
    english: "data & research",
    items: [
      "매출·운영 데이터 정리·분석",
      "부동산 실거래·경매 자동 분석",
      "주식·코인 자동매매 시스템",
      "리서치 자료 → 다음 행동까지 정리",
      "세무·회계 자동화",
    ],
  },
  {
    label: "콘텐츠 자동화",
    english: "content automation",
    items: [
      "유튜브 영상 자동 제작 (대본·음성·편집까지)",
      "PPT·발표 자료 자동 생성",
      "강의 자료 디자인 시스템",
      "AI 음성 합성 · 채널 전용 보이스",
    ],
  },
  {
    label: "강의·코칭",
    english: "lectures & coaching",
    items: [
      "1:1 풀데이 (4시간 · 하루 코스)",
      "장기 1:1 코칭 (매주 정기)",
      "기업 워크숍 · 정기 강사",
      "소그룹 (최대 3명)",
      "AI 입문 1시간 코칭",
      "1:1 사업 멘토링·컨설팅",
    ],
  },
];

export const sessions: Session[] = [
  {
    date: "",
    title: "부동산 AI 하루 코스",
    audience: "부동산 대표님",
    format: "1:1 풀데이 4시간",
    status: "완료",
    takeaway:
      "국토부 실거래 852건으로 직접 실습. 강의 후 USB 자료로 혼자서도 그대로 돌릴 수 있게 만들었습니다.",
  },
  {
    date: "",
    title: "비즈니스 대표 장기 코칭",
    audience: "1인 대표 / 전문직 대표",
    format: "매주 2시간 · 장기 1:1",
    status: "진행 중",
    takeaway:
      "부동산 AI · 주식 자동화 · 발표 자료 자동 만들기 · 세무 자동화 4개 주제. 1시간이 2시간으로 자발적으로 늘었습니다.",
  },
  {
    date: "",
    title: "AI 운영 자동화 워크숍",
    audience: "외식 프랜차이즈",
    format: "기업 워크숍 1회",
    status: "완료",
    takeaway:
      "이 강의 한 번이 통합 AI 시스템 5개 모듈 구축으로 이어졌습니다.",
  },
  {
    date: "",
    title: "AI 입문 1:1 코칭",
    audience: "소상공인 · 처음 시작하시는 분",
    format: "1회 · 1시간",
    status: "완료",
    takeaway:
      "AI를 처음 깔아본 분에게 본인 업무 한 가지를 실제로 돌려보게 합니다. 그 자리에서 손에 쥐고 가게.",
  },
  {
    date: "",
    title: "발표 자료 자동화 1:1",
    audience: "패션 마케팅 담당",
    format: "집중 2시간",
    status: "완료",
    takeaway:
      "매번 새로 그리던 발표 자료를 템플릿으로. 재계약 + 추가 외주로 이어졌습니다.",
  },
  {
    date: "",
    title: "주식 자동화 코딩 과외",
    audience: "개인 트레이더",
    format: "정기 1:1",
    status: "진행 중",
    takeaway:
      "키움증권 데이터로 이동평균 · 신고가 전략을 본인 손으로 만듭니다.",
  },
  {
    date: "",
    title: "AI 개발 도구 코딩 과외",
    audience: "스타트업 팀",
    format: "소그룹 · 최대 3명",
    status: "진행 중",
    takeaway:
      "AI 개발 도구 사용법과 실제 업무 적용을 함께. 팀 전체가 같은 도구를 쓰게 만드는 형태.",
  },
  {
    date: "",
    title: "AI 워크숍 정기 강사",
    audience: "교육 기관",
    format: "정기 워크숍",
    status: "예정",
    takeaway:
      "5월·6월 두 차례. 정기 강사진으로 자리잡기 위한 시그니처 라인업.",
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
    name: "유튜브 영상 자동 제작 시스템",
    channel: "콘텐츠 자동화",
    oneliner: "리서치 → 대본 → 음성 → 영상 → 배포까지 8단계 자동 생성.",
    highlights: [
      "AI 음성 합성 모델로 채널 전용 목소리 만들기",
      "59가지 영상 디자인 템플릿 · 음성 A/B 비교",
      "전 과정 한눈에 보이는 대시보드",
    ],
  },
  {
    name: "신규 상장 코인 자동매매봇",
    channel: "퀀트 매매",
    oneliner: "거래소에 새로 올라온 코인을 정해진 규칙대로 자동으로 사고팝니다.",
    highlights: [
      "실제 자금 $130으로 24시간 운영 중",
      "백테스트 연 96.5% 수익률",
      "손실 차단 · 기술적 지표 기반 매매 규칙",
    ],
  },
  {
    name: "부동산 경매 자동 분석기",
    channel: "부동산 분석",
    oneliner: "경매 물건 PDF를 읽고 주변 실거래까지 한 번에 비교합니다.",
    highlights: [
      "한 번에 306건 동시 분석",
      "AI 문서 분석 처리 비용 78% 절감",
      "공공 부동산 데이터 + 시세 패널 자동 정리",
    ],
  },
  {
    name: "팀 통합 대시보드 + 시장 모니터",
    channel: "내부 운영",
    oneliner: "4개 팀을 한 화면에서 운영하고 시장 흐름을 실시간으로 봅니다.",
    highlights: [
      "크립토 · R&D · 비즈니스 · 부동산 4개 팀 통합",
      "수익 기회 분석 · 11개 거래소 펀딩비 비교",
      "유튜브 영상 자동 리서치 + AI 제안 시스템",
    ],
  },
  {
    name: "AI 비서 — 목표 받고 알아서 실행",
    channel: "자율 실행 AI",
    oneliner: "목표 한 줄을 주면 사람 개입 없이 끝까지 알아서 진행합니다.",
    highlights: [
      "자양동 상가 임차인 확보에 실제로 사용해서 성사",
      "단계 분해 · 외부 도구 호출 · 결과 검증까지",
      "사람 개입 없이 하루 단위로 알아서 돌아감",
    ],
  },
];

export const trustBar = [
  { industry: "요식업", note: "프랜차이즈 외식" },
  { industry: "요식업", note: "글로벌 카페" },
  { industry: "숙박업", note: "펜션" },
  { industry: "리테일", note: "플라워" },
  { industry: "리테일", note: "패션 커머스" },
  { industry: "전문직", note: "회계 · 세무" },
  { industry: "전문직", note: "부동산" },
  { industry: "금융", note: "은행" },
  { industry: "교육 · 컨설팅", note: "정기 워크숍" },
  { industry: "교육 · 컨설팅", note: "1:1 멘토링" },
  { industry: "물류", note: "현장 운영" },
  { industry: "라이프스타일", note: "골프 · 레저" },
];

export const about = {
  title: "강의로 사람을 만나고, 개발로 그 반복을 남깁니다.",
  body:
    "오장섭은 KAIST 출신으로, AI 강의와 실제 시스템 개발을 함께 합니다. 강의는 사람을 만나기 위한 언어이고, 개발은 그 만남에서 발견한 반복을 오래 쓰는 도구로 남기는 일입니다.",
  facts: ["KAIST 출신", "1인 작업실", "AI 워크숍 12회 이상", "주식회사 이집저집"],
};

export const promiseCards = services;
export const stats = [
  { value: "12+", label: "강의 · 코칭" },
  { value: "5", label: "AI 모듈 구축" },
  { value: "852", label: "실거래 데이터" },
  { value: "KAIST", label: "출신" },
];
