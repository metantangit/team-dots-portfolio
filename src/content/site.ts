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

export const stats = [
  { value: "12+", label: "강의·코칭" },
  { value: "5", label: "AI 플랫폼 모듈" },
  { value: "852", label: "실거래 데이터" },
  { value: "KAIST", label: "전산학부" },
];

export const services = [
  {
    no: "01",
    title: "AI 운영 자동화",
    body: "부동산·콘텐츠·영업처럼 반복 많은 영역을 AI 도구 한 줄기로 정리합니다.",
  },
  {
    no: "02",
    title: "AI 강의·코칭",
    body: "기업·도메인 대상 워크숍과 1:1 코칭. 본인 업무 자료로 자동화 루틴을 설계합니다.",
  },
  {
    no: "03",
    title: "1인 책임 작업",
    body: "기획·설계·개발·운영을 한 사람이 끝까지. 외주가 아니라 작업실로 일합니다.",
  },
];

export const workPieces: WorkPiece[] = [
  {
    slug: "daily-operations-flow",
    eyebrow: "현장 운영",
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
    eyebrow: "리서치·제안",
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

export const sessions: Session[] = [
  {
    date: "2026-02",
    title: "AI 운영 자동화 워크숍",
    audience: "운영 조직",
    format: "데모·실습",
    status: "완료",
    takeaway: "반복되는 업무를 직접 표시하고 자동화 후보를 찾습니다.",
  },
  {
    date: "2026-04",
    title: "문서·발표 자동화 1:1",
    audience: "지식 업무",
    format: "집중 코칭",
    status: "완료",
    takeaway: "매번 새로 만드는 문서·발표를 개인 템플릿으로.",
  },
  {
    date: "2026-04",
    title: "부동산 AI 하루코스",
    audience: "부동산 도메인",
    format: "4시간 실습",
    status: "완료",
    takeaway: "조사 자료를 제안·검토 흐름으로 연결합니다.",
  },
  {
    date: "2026-04~",
    title: "Claude 업무 자동화 코칭",
    audience: "전문직",
    format: "정기 1:1",
    status: "진행 중",
    takeaway: "본인 업무 자료로 자동화 루틴을 설계합니다.",
  },
  {
    date: "2026-05",
    title: "AI 업무 적용 워크숍",
    audience: "교육 컨설팅",
    format: "워크숍",
    status: "예정",
    takeaway: "팀별 적용 시나리오를 정리하고 다음 실험을 정합니다.",
  },
];

export const about = {
  title: "강의로 사람을 만나고, 개발로 그 반복을 남깁니다.",
  body:
    "오장섭은 KAIST 전산학부 출신으로, AI 강의와 실제 시스템 개발을 함께 합니다. 강의는 사람을 만나기 위한 언어이고, 개발은 그 만남에서 발견한 반복을 오래 쓰는 도구로 남기는 일입니다.",
  facts: ["KAIST 전산학부", "Founder-operator", "AI 워크숍 12회+", "주식회사 이집저집"],
};

export const promiseCards = services;
