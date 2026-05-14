import { ImageResponse } from "next/og";

export const alt = "dots-project — KAIST 출신 개발자의 AI 비즈니스 자동화";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#d6d3ce",
          color: "#1a1a1a",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontSize: 20, fontWeight: 700 }}>dots-project.work</span>
          <span style={{ fontSize: 16, color: "#2c2a26", fontWeight: 600, letterSpacing: 4, textTransform: "uppercase" }}>
            ThTh &middot; Seoul, KR
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, lineHeight: 1.05, letterSpacing: -3, fontWeight: 600 }}>
            KAIST 출신 개발자의
          </div>
          <div style={{ fontSize: 88, lineHeight: 1.05, letterSpacing: -3, fontWeight: 600 }}>
            AI 비즈니스 자동화.
          </div>
          <div style={{ fontSize: 24, color: "#3a3936", marginTop: 24 }}>
            반복되는 운영을 AI 도구로 정리합니다.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: 18, color: "#6f6c67", borderTop: "1px solid #b8b4ac", paddingTop: 20 }}>
          <span>오장섭 · 주식회사 이집저집</span>
          <span>ojsoym2@gmail.com</span>
        </div>
      </div>
    ),
    size,
  );
}
