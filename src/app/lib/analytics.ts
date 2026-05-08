/**
 * GA4 커스텀 이벤트 트래킹
 *
 * GA4 리포트에서 확인 방법:
 *   보고서 → 참여도 → 이벤트 에서 아래 이벤트명으로 검색
 *
 * 이벤트 목록:
 *   - 프로젝트_탭_클릭    : 어떤 프로젝트를 가장 많이 보는지
 *   - 태그_클릭           : Hero 섹션 태그 클릭
 *   - 외부_링크_클릭      : 깃헙/데모 등 외부 링크
 *   - 스크롤_깊이         : 페이지 어디까지 봤는지 (25/50/75/100%)
 *   - 페이지_체류시간     : 탭별 체류 시간 (초)
 */

// gtag 타입 선언
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function sendEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

// ─── 프로젝트 탭 클릭 ─────────────────────────────
// GA4: 이벤트 → "프로젝트_탭_클릭" → 매개변수 "탭이름"
export function trackTabClick(tabId: string, tabLabel: string) {
  sendEvent("프로젝트_탭_클릭", {
    탭ID: tabId,
    탭이름: tabLabel,
  });
}

// ─── 태그 클릭 (Hero) ─────────────────────────────
// GA4: 이벤트 → "태그_클릭" → 매개변수 "태그명"
export function trackTagClick(tagName: string) {
  sendEvent("태그_클릭", {
    태그명: tagName,
  });
}

// ─── 외부 링크 클릭 ───────────────────────────────
// GA4: 이벤트 → "외부_링크_클릭" → 매개변수 "링크URL", "링크텍스트"
export function trackOutboundClick(url: string, text?: string) {
  sendEvent("외부_링크_클릭", {
    링크URL: url,
    링크텍스트: text || url,
  });
}

// ─── 스크롤 깊이 ─────────────────────────────────
// GA4: 이벤트 → "스크롤_깊이" → 매개변수 "깊이_퍼센트"
// 25%, 50%, 75%, 100% 도달 시 각각 1회 발생
let scrollMilestones = new Set<number>();

export function initScrollTracking() {
  if (typeof window === "undefined") return;

  scrollMilestones = new Set();

  const handler = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;

    const percent = Math.round((scrollTop / docHeight) * 100);

    [25, 50, 75, 100].forEach((milestone) => {
      if (percent >= milestone && !scrollMilestones.has(milestone)) {
        scrollMilestones.add(milestone);
        sendEvent("스크롤_깊이", {
          깊이_퍼센트: milestone,
        });
      }
    });
  };

  window.addEventListener("scroll", handler, { passive: true });
  return () => window.removeEventListener("scroll", handler);
}

// ─── 탭 체류시간 ─────────────────────────────────
// GA4: 이벤트 → "페이지_체류시간" → 매개변수 "탭이름", "체류_초"
let tabStartTime: number | null = null;
let currentTab: string | null = null;

export function startTabTimer(tabId: string) {
  // 이전 탭 체류시간 기록
  if (currentTab && tabStartTime) {
    const seconds = Math.round((Date.now() - tabStartTime) / 1000);
    if (seconds >= 3) {
      // 3초 이상만 기록 (노이즈 방지)
      sendEvent("탭_체류시간", {
        탭이름: currentTab,
        체류_초: seconds,
      });
    }
  }

  currentTab = tabId;
  tabStartTime = Date.now();
}

// 페이지 떠날 때 마지막 탭 체류시간 기록
export function initExitTracking() {
  if (typeof window === "undefined") return;

  const handler = () => {
    if (currentTab && tabStartTime) {
      const seconds = Math.round((Date.now() - tabStartTime) / 1000);
      if (seconds >= 3) {
        sendEvent("탭_체류시간", {
          탭이름: currentTab,
          체류_초: seconds,
        });
      }
    }
  };

  window.addEventListener("beforeunload", handler);
  return () => window.removeEventListener("beforeunload", handler);
}
