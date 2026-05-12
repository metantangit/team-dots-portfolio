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
  name: "Dots Field",
  person: "오장섭",
  role: "AI를 쓰는 법을 말하고, 실제로 쓰이는 도구를 만드는 사람",
  url: "dots-project.work",
  email: "ojsoym2@gmail.com",
  phone: "010-4685-9570",
  kakao: "dots_connect",
  company: "주식회사 이집저집",
  headline: "복잡한 일을 작게 접어, 쓰이는 도구로 남깁니다.",
  description:
    "Dots는 거창한 AI 쇼케이스가 아니라, 사람들이 매일 붙잡고 있는 자료·반복·판단을 가볍게 정리해 실제 업무 안에 남기는 작업장입니다.",
};

export const promiseCards = [
  {
    title: "흩어진 자료를 모읍니다",
    body: "메신저, 시트, 사진, 문서처럼 따로 떠다니는 맥락을 한 번에 볼 수 있게 정리합니다.",
  },
  {
    title: "반복을 작게 접습니다",
    body: "사람이 매번 다시 확인하던 부분을 규칙, 알림, 입력 흐름으로 바꿉니다.",
  },
  {
    title: "마지막 판단은 사람이 합니다",
    body: "AI가 대신 결정한다는 말보다, 사람이 더 빨리 판단하도록 준비해두는 구조를 만듭니다.",
  },
];

export const workPieces: WorkPiece[] = [
  {
    slug: "daily-operations-flow",
    eyebrow: "Local operation",
    title: "매일 바뀌는 운영 흐름 정리",
    field: "F&B · 현장 운영",
    intro: "스케줄, 메뉴, 현장 확인, 전략 메모가 따로 움직이던 흐름을 운영자가 다시 볼 수 있는 작은 도구들로 나눴습니다.",
    situation:
      "경험 많은 사람이 머릿속으로 처리하던 비교와 확인이 많았습니다. 문제는 기능 하나가 아니라, 하루에 여러 번 반복되는 판단의 순서였습니다.",
    made: [
      "스케줄과 배치 비교 화면",
      "메뉴와 비용을 함께 보는 작은 보드",
      "실시간 영상 분석을 참고하는 확인 흐름",
      "운영 메모를 다음 실험으로 남기는 기록 방식",
    ],
    changed: [
      "같은 계산을 다시 하는 시간을 줄임",
      "운영자가 보는 기준을 화면 위로 꺼냄",
      "다른 운영 문제에도 옮길 수 있는 모듈로 정리",
    ],
    color: "coral",
  },
  {
    slug: "research-to-next-step",
    eyebrow: "Research to action",
    title: "조사 자료를 다음 행동으로 바꾸기",
    field: "부동산 · 리서치 · 제안",
    intro: "자료를 많이 모으는 데서 멈추지 않고, 검토할 대상과 다음 연락·제안 흐름이 보이도록 바꿨습니다.",
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
    eyebrow: "Small business web",
    title: "직접 고치는 비즈니스 홈",
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
    format: "데모와 실습",
    status: "완료",
    takeaway: "우리 일이 어디서 반복되는지 직접 표시하고 작은 자동화 후보를 찾습니다.",
  },
  {
    date: "2026-04",
    title: "문서·발표 자동화 1:1",
    audience: "지식 업무 담당자",
    format: "집중 코칭",
    status: "완료",
    takeaway: "매번 새로 만드는 문서와 발표를 개인 템플릿으로 바꿉니다.",
  },
  {
    date: "2026-04",
    title: "부동산 AI 하루코스",
    audience: "부동산 도메인",
    format: "4시간 실습",
    status: "완료",
    takeaway: "조사 자료를 제안과 검토 흐름으로 연결해봅니다.",
  },
  {
    date: "2026-04~",
    title: "Claude 업무 자동화 코칭",
    audience: "전문직 도메인",
    format: "정기 1:1",
    status: "진행 중",
    takeaway: "개인의 실제 업무 자료로 자동화 루틴을 설계합니다.",
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
  title: "사람을 만나고, 흐름을 보고, 작게 만들어 남깁니다.",
  body:
    "오장섭은 KAIST 전산학부 출신으로, AI 강의와 실제 시스템 개발을 함께 합니다. 강의는 사람을 만나기 위한 언어이고, 개발은 그 만남에서 발견한 반복을 오래 쓰는 도구로 남기는 일입니다.",
  facts: ["KAIST 전산학부", "Founder-operator", "AI workshop", "Small systems"],
};
