import { ImageResponse } from "next/og";

export const alt = "dots-project — small AI systems for real work";
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
          padding: 64,
          background: "#fff4d8",
          color: "#4b2558",
          fontFamily: "Arial",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", width: 260, height: 260, borderRadius: 999, background: "#ff6f61", right: 80, top: 70 }} />
        <div style={{ position: "absolute", width: 210, height: 210, borderRadius: 999, background: "#cfff47", right: 260, bottom: 70 }} />
        <div style={{ position: "absolute", width: 190, height: 190, borderRadius: 999, background: "#9ed4ff", left: 80, bottom: 85 }} />
        <div style={{ position: "relative", fontSize: 22, fontWeight: 900, letterSpacing: -1 }}>dots-project</div>
        <div style={{ position: "relative", maxWidth: 760, fontSize: 82, lineHeight: 0.95, letterSpacing: -6, fontWeight: 900 }}>
          복잡한 일을 작게 접어, 쓰이는 도구로.
        </div>
        <div style={{ position: "relative", display: "flex", justifyContent: "space-between", fontSize: 22, fontWeight: 700 }}>
          <span>AI workshop · small systems · founder-operator</span>
          <span>dots-project.work</span>
        </div>
      </div>
    ),
    size,
  );
}
