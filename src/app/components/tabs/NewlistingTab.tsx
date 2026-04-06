"use client";

import FlowDiagram from "../ui/FlowDiagram";
import TechBadge from "../ui/TechBadge";
import StatCard from "../ui/StatCard";

const flow = [
  { icon: "🔍", title: "상장 감지", desc: "실시간 폴링" },
  { icon: "📊", title: "전략 분석", desc: "VWAP 기반" },
  { icon: "⚡", title: "자동 진입", desc: "전략 기반 실행" },
  { icon: "⚠️", title: "리스크 관리", desc: "Kill Switch" },
  { icon: "📈", title: "모니터링", desc: "React 대시보드" },
];

const tech = [
  "Python 3 (asyncio)", "바이낸스 API", "WebSocket",
  "Pandas", "NumPy", "Optuna", "React 19", "Vite",
  "Recharts", "Telegram Bot",
];

export default function NewlistingTab() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-3xl font-bold mb-3">Newlisting Trading Bot</h2>
        <p className="text-xl text-[--color-text] font-semibold mb-2">
          바이낸스 신규 상장 코인을 실시간 감지하고, 검증된 전략으로 운영되는 트레이딩 봇
        </p>
        <p className="text-[--color-text-muted] text-base leading-relaxed max-w-3xl">
          신규 상장 직후 가격 패턴을 VWAP 기반 전략으로 포착합니다.
          46개 전략을 발굴하고 백테스트를 거쳐 1개만 살아남은 검증 과정을 통해 만들어졌습니다.
        </p>
      </div>

      <div className="p-6 rounded-xl bg-[--color-accent-dim]/10 border border-[--color-accent-dim]/20">
        <h3 className="text-lg font-bold mb-3 text-[--color-accent]">이 프로젝트가 하는 일</h3>
        <ul className="space-y-2 text-sm text-[--color-text-muted] leading-relaxed">
          <li><span className="text-[--color-text] font-medium">신규 상장 실시간 감지:</span> 바이낸스 심볼을 실시간 폴링하며 새 코인이 나타나면 즉시 콜백.</li>
          <li><span className="text-[--color-text] font-medium">VWAP 기반 전략 실행:</span> 상장 후 VWAP을 기준으로 전략을 자동 실행. 리스크 관리 룰에 따라 운영.</li>
          <li><span className="text-[--color-text] font-medium">다중 안전장치:</span> Kill Switch로 비정상 상황 자동 감지 및 셧다운. 쿨다운 후 재개.</li>
          <li><span className="text-[--color-text] font-medium">700+ 파라미터 검증:</span> Walk-Forward 백테스트로 실전 비용(슬리피지/수수료)을 반영한 시뮬레이션.</li>
        </ul>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="발굴 전략" value="46개" />
        <StatCard label="생존 전략" value="1개" />
        <StatCard label="리서치 루프" value="19회" />
        <StatCard label="파라미터 조합" value="700+" />
      </div>

      <FlowDiagram steps={flow} title="트레이딩 파이프라인" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">19회 자율 리서치 루프</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            30+ AI 에이전트를 동원해 46개 전략을 발굴하고, 5개를 백테스트해
            1개(VWAP)만 생존. 크로스 거래소 차익, MEV, 옵션 등 심층 분석.
            주관적 스코어링은 완전히 실패 — 데이터만이 답.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">이론 vs 실전 괴리</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            실전 비용(슬리피지, 펀딩비, 수수료)을 반영하면
            백테스트 수익이 크게 축소됨을 확인.
            과다 노출 시 리스크가 급증하므로 보수적 포지션 사이징으로 조정.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">React 모니터링 대시보드</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            실시간 봇 상태 모니터, 백테스트 성과 지표,
            4단계 검증 Strategy Lab, 393개 코인 통계 분석,
            19회 자율 리서치 루프 기록.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-[--color-card] border border-[--color-border]">
          <h4 className="text-sm font-bold mb-2">Walk-Forward 백테스트</h4>
          <p className="text-xs text-[--color-text-muted] leading-relaxed">
            3-fold 교차검증, 실전 비용 반영.
            700+ 파라미터 조합 그리드 서치로 최적 전략 도출.
            실제 트레이딩 환경과 동일한 조건에서 검증.
          </p>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium text-[--color-text-muted] mb-3 uppercase tracking-wider">
          기술 스택
        </h4>
        <TechBadge tech={tech} />
      </div>
    </div>
  );
}
