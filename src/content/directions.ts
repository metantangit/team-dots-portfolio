export type DirectionSlug = "editorial" | "blueprint" | "atelier" | "dossier";

export type DesignDirection = {
  slug: DirectionSlug;
  label: string;
  name: string;
  tone: string;
  title: string;
  subtitle: string;
  method: string;
  palette: {
    bg: string;
    surface: string;
    ink: string;
    muted: string;
    accent: string;
    line: string;
  };
  tools: string[];
  blocks: { kicker: string; title: string; body: string }[];
  proof: { title: string; meta: string; body: string }[];
};

export const directions: DesignDirection[] = [
  {
    slug: "editorial",
    label: "01",
    name: "Founder Editorial",
    tone: "긴 글을 읽게 만드는 창업자 에세이 / 개인 매거진 톤",
    title: "강의로 만난 문제를, 오래 쓰는 시스템으로 남깁니다.",
    subtitle:
      "이 버전은 화려한 카드보다 문장, 여백, 리듬으로 신뢰를 만듭니다. 포트폴리오가 아니라 창업자가 직접 쓴 짧은 선언문처럼 보이게 설계합니다.",
    method:
      "큰 serif headline, 넓은 여백, 번호가 있는 essay blocks, 짧은 case note 중심.",
    palette: {
      bg: "#f4efe6",
      surface: "#fbf7ef",
      ink: "#1f2a24",
      muted: "#66736a",
      accent: "#9b5d35",
      line: "#d8cbbb",
    },
    tools: ["Typography system", "Editorial grid", "Case notes", "Long-form hierarchy"],
    blocks: [
      {
        kicker: "Meeting",
        title: "강의는 사람을 만나는 장치입니다.",
        body: "AI를 설명하는 자리에서 고객의 실제 언어를 듣습니다. 어떤 자료가 반복되고, 어떤 판단이 늦어지는지 그 자리에서 드러납니다.",
      },
      {
        kicker: "Making",
        title: "개발은 그 반복을 자산으로 바꾸는 일입니다.",
        body: "한 번의 요청으로 끝나는 산출물이 아니라, 다음 운영에서도 다시 쓰이는 화면·보드·자동화 흐름을 남깁니다.",
      },
      {
        kicker: "Handoff",
        title: "좋은 도구는 다시 설명될 수 있어야 합니다.",
        body: "시스템은 고객이 이해하고 고칠 수 있는 말과 문서로 번역되어야 오래 갑니다.",
      },
    ],
    proof: [
      {
        title: "운영 판단 보드",
        meta: "F&B · 실시간 영상 분석 포함",
        body: "스케줄, 메뉴, 현장 확인 흐름을 한 사람이 다시 계산하지 않아도 되는 화면으로 정리.",
      },
      {
        title: "리서치 실행 흐름",
        meta: "부동산 · 조사와 제안",
        body: "자료 더미를 후보 카드, 제안 문장, 후속 확인으로 연결.",
      },
      {
        title: "직접 고치는 웹 구조",
        meta: "숙박·커머스 · 운영자 입력",
        body: "작은 사업자가 사진·공지·상품을 직접 수정하는 콘텐츠 모델 설계.",
      },
    ],
  },
  {
    slug: "blueprint",
    label: "02",
    name: "System Blueprint",
    tone: "설계도 / 시스템 아키텍처 / 기술 신뢰 중심",
    title: "흩어진 업무를 입력, 판단, 출력의 구조로 다시 그립니다.",
    subtitle:
      "이 버전은 감성보다 구조가 먼저 보입니다. 고객은 ‘이 사람이 내 복잡한 업무를 분해할 수 있겠다’는 확신을 얻습니다.",
    method:
      "SVG diagram, process lanes, sharp borders, spec-sheet layout, module naming.",
    palette: {
      bg: "#eef5f7",
      surface: "#ffffff",
      ink: "#102a33",
      muted: "#58717a",
      accent: "#087e8b",
      line: "#b7d4dc",
    },
    tools: ["Inline SVG", "Process map", "Module table", "Spec layout"],
    blocks: [
      {
        kicker: "Input",
        title: "자료가 들어오는 방식을 정합니다.",
        body: "메신저, 시트, 이미지, 문서가 어떤 주기로 들어오는지 먼저 분류합니다.",
      },
      {
        kicker: "Decision",
        title: "사람의 판단 지점을 남깁니다.",
        body: "AI가 다 한다는 약속보다, 사람이 꼭 봐야 하는 기준과 예외를 화면에 둡니다.",
      },
      {
        kicker: "Output",
        title: "다음 행동으로 출력합니다.",
        body: "리포트가 아니라 연락, 수정, 검토, 배포 같은 행동으로 이어지는 구조를 만듭니다.",
      },
    ],
    proof: [
      {
        title: "Operations board",
        meta: "Schedule · menu · field signal",
        body: "현장 운영 자료를 판단 모듈별로 분리하고 다시 연결.",
      },
      {
        title: "Research pipeline",
        meta: "Data · candidate · proposal",
        body: "조사 자료를 실행 후보와 제안 흐름으로 변환.",
      },
      {
        title: "Editable content model",
        meta: "Web · admin · mobile",
        body: "운영자가 직접 고칠 수 있는 공개 화면과 입력 구조 설계.",
      },
    ],
  },
  {
    slug: "atelier",
    label: "03",
    name: "Warm Atelier",
    tone: "조용한 스튜디오 / 프리미엄 1인 작업실 / 인간적인 고급감",
    title: "작은 팀처럼 보이기보다, 한 사람이 끝까지 이해하는 작업실입니다.",
    subtitle:
      "이 버전은 과시를 줄이고 촉감과 신뢰를 키웁니다. 고객에게 ‘여기 맡기면 내 일을 섬세하게 봐주겠다’는 느낌을 줍니다.",
    method:
      "Muted warm palette, object cards, soft photography-less surfaces, craft language.",
    palette: {
      bg: "#eee5d8",
      surface: "#fffaf1",
      ink: "#35291f",
      muted: "#77685a",
      accent: "#b86f52",
      line: "#d8c7b4",
    },
    tools: ["Object cards", "Soft surfaces", "Craft copy", "Asymmetric layout"],
    blocks: [
      {
        kicker: "Listen",
        title: "먼저 일의 결을 듣습니다.",
        body: "요구사항보다 먼저 실제로 어떻게 일하는지, 누가 무엇을 귀찮아하는지 봅니다.",
      },
      {
        kicker: "Shape",
        title: "필요한 만큼만 만듭니다.",
        body: "큰 시스템을 약속하기보다 업무 안에 자연스럽게 들어갈 작은 형태부터 만듭니다.",
      },
      {
        kicker: "Keep",
        title: "남는 형태로 정리합니다.",
        body: "도구, 문서, 강의 자료가 다음 일에도 다시 쓰일 수 있게 마감합니다.",
      },
    ],
    proof: [
      {
        title: "작은 운영 도구",
        meta: "반복 확인 줄이기",
        body: "매일 확인하는 요소를 한 화면에 정리해 운영 부담을 줄임.",
      },
      {
        title: "제안 준비 도구",
        meta: "자료에서 문장으로",
        body: "조사 자료가 실제 제안과 후속 행동으로 이어지게 정리.",
      },
      {
        title: "강의 핸드오프",
        meta: "이해 가능한 자료",
        body: "사용법과 원리를 고객이 다시 설명할 수 있는 형태로 번역.",
      },
    ],
  },
  {
    slug: "dossier",
    label: "04",
    name: "Capability Dossier",
    tone: "전략 보고서 / 능력 증명 / B2B 신뢰 중심",
    title: "무엇을 할 수 있는지, 고객명이 아니라 능력 단위로 증명합니다.",
    subtitle:
      "이 버전은 가장 사업적입니다. 익명 공개 원칙을 지키면서도, 구매자가 필요한 능력을 빠르게 판단하게 만듭니다.",
    method:
      "Dossier header, capability matrix, evidence rows, restrained accent color.",
    palette: {
      bg: "#f7f7f2",
      surface: "#ffffff",
      ink: "#202124",
      muted: "#61645f",
      accent: "#335c67",
      line: "#d7d9d2",
    },
    tools: ["Capability matrix", "Evidence rows", "Report typography", "B2B proof framing"],
    blocks: [
      {
        kicker: "Capability 1",
        title: "운영 판단을 화면으로 바꾸기",
        body: "현장 감각과 흩어진 자료를 비교 가능한 화면으로 정리합니다.",
      },
      {
        kicker: "Capability 2",
        title: "자료를 실행 목록으로 바꾸기",
        body: "조사와 정리를 다음 연락, 제안, 검토 흐름으로 연결합니다.",
      },
      {
        kicker: "Capability 3",
        title: "시스템을 교육 자산으로 바꾸기",
        body: "만든 도구를 실습 자료와 핸드오프 문서로 다시 설명합니다.",
      },
    ],
    proof: [
      {
        title: "Field operations",
        meta: "운영 · 스케줄 · 영상 확인",
        body: "반복 계산과 현장 확인을 줄이는 판단 화면 설계.",
      },
      {
        title: "Research operations",
        meta: "조사 · 후보 · 제안",
        body: "자료 기반 실행 우선순위와 제안 흐름 설계.",
      },
      {
        title: "Content operations",
        meta: "웹 · 관리자 · 모바일",
        body: "운영자가 직접 고치는 콘텐츠 구조 설계.",
      },
    ],
  },
];

export function getDirection(slug: string) {
  return directions.find((direction) => direction.slug === slug);
}
