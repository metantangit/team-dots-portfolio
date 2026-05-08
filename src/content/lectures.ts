export type LectureStatus = "완료" | "진행 중" | "예정";

export type Lecture = {
  date: string;
  title: string;
  audience: string;
  format: string;
  status: LectureStatus;
  highlight?: string;
};

export const lectures: Lecture[] = [
  {
    date: "2026-02",
    title: "AI 자동화 도입 강의",
    audience: "요식업 프랜차이즈",
    format: "1회 · 풀스택 데모 동반",
    status: "완료",
    highlight: "강의 → 풀스택 플랫폼 lead 전환",
  },
  {
    date: "2026-04-18",
    title: "PPT 자동화 1:1",
    audience: "패션 브랜드 직원",
    format: "2시간 집중",
    status: "완료",
    highlight: "재계약·외주 확장 가능성",
  },
  {
    date: "2026-04-20",
    title: "부동산 AI 하루코스",
    audience: "부동산 도메인",
    format: "4시간 풀데이",
    status: "완료",
    highlight: "공동 프로젝트 제안 전환",
  },
  {
    date: "2026-04-23 ~",
    title: "Claude 마스터리 1:1",
    audience: "회계법인 대표",
    format: "주간 2시간 · 장기 선입금",
    status: "진행 중",
    highlight: "B2B 직원교육 확장 관찰 중",
  },
  {
    date: "2026-04-23 ~",
    title: "주식 자동화 코딩과외",
    audience: "개인 투자자",
    format: "주 1시간",
    status: "진행 중",
    highlight: "키움 REST API 실전",
  },
  {
    date: "2026-04-24 ~",
    title: "코딩과외 (소그룹)",
    audience: "교육 도메인 · 최대 3명",
    format: "정기 회차",
    status: "진행 중",
  },
  {
    date: "2026-05-13",
    title: "AI 강의 1회차",
    audience: "교육 컨설팅 · 이수역",
    format: "단발 워크숍",
    status: "예정",
  },
  {
    date: "2026-06-10",
    title: "AI 강의 2회차",
    audience: "교육 컨설팅 · 이수역",
    format: "단발 워크숍",
    status: "예정",
  },
  {
    date: "2026-04-08 ~",
    title: "MBA 9기 랩세미나",
    audience: "동문회 발표",
    format: "14페이지 덱",
    status: "진행 중",
  },
];
