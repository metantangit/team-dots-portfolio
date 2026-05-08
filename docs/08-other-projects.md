# 기타 프로젝트 요약

## SadTalker - AI 페이스 애니메이션
- 사진 1장 + 오디오 → 말하는 영상 생성
- PyTorch, CVPR 2023 논문 기반
- GFPGAN 얼굴 보정, 256/512px 지원
- Gradio WebUI, Discord, Colab 지원

## Novel Workshop - 웹소설 창작 플랫폼
- Next.js 15, React 19, TypeScript
- 네이버 시리즈, 카카오페이지, 치디엔 등 멀티플랫폼 랭킹 수집
- 캐릭터/세계관/복선 관리 패널
- 집필 통계 + 일일 목표 추적

## Exam Simulator - 공인중개사 시험 시뮬레이터
- 순수 HTML/CSS/JS (바닐라)
- PDF 시험지 + 답안 입력 분할 화면
- 타이머, 진행률, 다크/라이트 모드
- Apple 디자인 인터페이스

## Interior Simulation - 아파트 평면도 시각화
- SVG 기반 인터랙티브 평면도
- 실측 치수 표시 (cm)
- 방별 색상 코딩 + 가구/가전 배치
- 잠실 아파트 B타입 기준

## Property Page Test - 부동산 실거래 분석 플랫폼
- FastAPI + React 18 (TypeScript, MUI)
- 국토교통부/네이버 부동산 데이터 수집
- 3단계 매칭 로직 (아파트 코드 ↔ 실거래)
- 지역별 평균가 통계 (59/84㎡)
- 일 100만건 처리, API 응답 <500ms

## 산호선진 프로젝트 - 자양동 상가 임대 분석
- Leaflet 지도 + Chart.js 시각화
- 99개 물건, 62개 건물, 893명 공인중개사 데이터
- 매물 분석 + 가격 비교 + 중개사 추천
- 목표 임대료: 270만원/월 (6.6만원/평)

## Autonomous Money Get Bot - 유튜브 자동 생성
- Claude API → 대본 → Azure TTS → Playwright 렌더링 → FFmpeg 합성
- 장르: 트레이딩/크립토 콘텐츠
- 씬 타입: text_slide, terminal, code, comparison
- V6 로드맵: 15-25개월 → $300K/월 목표

## Newlisting Short Simulator - 퀀트 전략 분석 엔진
- 150+ 코인 OHLCV + 펀딩비 데이터
- 10+ 내장 전략 (즉시진입, 펌프감지, VWAP, RSI, DCA...)
- 700+ 파라미터 그리드 서치
- newlisting_bot의 전략 검증 도구

## 매출 분석 프로젝트
- Chart.js 기반 매출 대시보드
- 일별/월별 매출 트렌드
- 경영진/매장별/회의용 4종 대시보드

## 현대기아 부품 대리점 분석
- 11개 주요 부품 대리점 벤치마킹
- 재무 지표 비교 (매출, 마진, 성장률)
- Chrome 확장 프로그램으로 데이터 수집

## SRT 예약 도우미
- SRT 기차표 자동 예매 + 취소표 감시
- Watch 모드: 매표 취소 자동 감지 → 즉시 예매
- CLI 인터페이스 + Flask 웹 서버

## 메탄탄 게임 - 픽셀아트 던전 RPG
- Godot 4.6, GDScript
- 전투/던전생성/루트/시즌/길드/업적 시스템
- 9개 서브시스템, 이벤트 드리븐 아키텍처
