# Team Dots AI - AI 팀 운영 대시보드

## 한줄 요약
4개 전문 팀(크립토/R&D/비즈니스/부동산)을 통합 관리하며, AI 기반 인사이트 생성 + DeFi 모니터링 + 리서치 파이프라인을 제공하는 팀 대시보드

## 프로젝트 개요
- **4개 팀**: Crypto, R&D, Business, Real Estate
- **핵심**: 팀별 태스크/프로젝트 관리 + AI 제안 자동 생성
- **특징**: DeFi 실시간 모니터, 유튜브 리서치 파이프라인, 경매 스캐닝

## 핵심 기능

### 멀티팀 대시보드
- 팀별 탭 (Crypto, R&D, Business, Real Estate)
- 리포트/태스크/프로젝트 카드
- 상태 관리: todo, in_progress, done, blocked, periodical

### DeFi 라이브 모니터
- **PT-Looping**: Pendle, Morpho, Euler 수익 기회 분석
- **펀딩비**: 11개 거래소 실시간 비교
- **포지션 트래커**: 세금 기록 포함
- **트랜잭션 히스토리**: Etherscan 연동
- **리스크 가이드**: 차트 기반

### AI 리서치 파이프라인
- 유튜브 영상 분석 (yt-dlp + Claude 요약)
- 채널 발굴 & 스코어링 (구체성, 실행성, 인사이트, 간결성, 포맷)
- 주간 AI 뉴스 + 리서치 리포트

### AI 제안 시스템
- 자동 제안 생성 (subtask, create_task, new_project, reminder)
- 승인/거절/실행 인터페이스

### 경매 스캐닝
- 부동산 물건 모니터링 (Python 스크래퍼)
- 마당 API + Disco API 연동
- 인근 실거래 + 가격 분석 패널

### 리포트 타입
ai_research, ai_weekly_summary, channel_discover, defi_monitor, auction_scan, weekly_report, generic

## 기술 스택
| 영역 | 기술 |
|------|------|
| 프론트엔드 | Next.js 16, React 19, TypeScript, Tailwind CSS 4, Recharts |
| 백엔드 | Supabase (PostgreSQL), Node.js 파이프라인 |
| AI | Claude API (Haiku/Sonnet), Anthropic SDK |
| DeFi | Pendle, Morpho, Euler, DefiLlama, 11개 거래소 API |
| 블록체인 | Etherscan API |
| 지도 | Naver Maps |
| 인증 | Google OAuth |

## 포트폴리오 하이라이트
- 4개 도메인 통합 대시보드
- DeFi 실시간 모니터링 (11개 거래소)
- AI 에이전트 기반 자동 제안 시스템
- 유튜브 리서치 자동화 파이프라인
