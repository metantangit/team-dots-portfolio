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
          background: "#f4f0e7",
          color: "#1a1a1a",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: 20, letterSpacing: -0.5 }}>
          <span style={{ fontWeight: 700 }}>dots-project.work</span>
          <span style={{ color: "#a85b3a", fontWeight: 600, letterSpacing: 4, textTransform: "uppercase", fontSize: 16 }}>
            AI Automation Studio · Seoul
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 6, textTransform: "uppercase", color: "#a85b3a" }}>
            since 2024
          </div>
          <div style={{ fontSize: 88, lineHeight: 1.04, letterSpacing: -3, fontWeight: 600, maxWidth: 1000 }}>
            KAIST 출신 개발자의
            <br />
            AI 비즈니스 자동화.
          </div>
          <div style={{ fontSize: 24, color: "#404040", maxWidth: 920, lineHeight: 1.4 }}>
            반복되는 운영을 AI 도구로 정리합니다. 강의와 개발을 같이 합니다.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: 18, color: "#737373", borderTop: "1px solid #d9d4c7", paddingTop: 20 }}>
          <span>오장섭 · 주식회사 이집저집</span>
          <span>ojsoym2@gmail.com · 010-4685-9570</span>
        </div>
      </div>
    ),
    size,
  );
}
