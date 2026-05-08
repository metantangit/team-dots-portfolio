import { ImageResponse } from "next/og";

export const alt = "OHJANGSEOP — Dots, · KAIST AI Developer × Lecturer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(family: string, weight: number, italic = false) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:ital,wght@${italic ? 1 : 0},${weight}&display=swap`,
    { headers: { "User-Agent": "Mozilla/5.0" } },
  ).then((r) => r.text());
  const url = css.match(/src:\s*url\((https:\/\/[^)]+\.ttf)\)/)?.[1];
  if (!url) throw new Error(`Font URL not found for ${family}`);
  return fetch(url).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const [newsreaderItalic, newsreaderRegular] = await Promise.all([
    loadFont("Newsreader", 400, true),
    loadFont("Newsreader", 600, false),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0a0a0a",
          color: "#f4f0e7",
          fontFamily: "Newsreader",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 18,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#6e6a62",
          }}
        >
          <span style={{ width: 32, height: 1, background: "#2a2826" }} />
          <span style={{ color: "#f4f0e7", letterSpacing: 8 }}>KAIST</span>
          <span style={{ color: "#2a2826" }}>/</span>
          <span style={{ fontStyle: "italic", color: "#c9a86a", letterSpacing: 0, textTransform: "none", fontSize: 22 }}>
            Seoul
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>OHJANGSEOP</span>
            <span style={{ fontStyle: "italic", color: "#c9a86a", fontWeight: 400 }}>
              Dots,
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#b8b3a8",
              fontStyle: "italic",
              maxWidth: 820,
              lineHeight: 1.4,
            }}
          >
            AI Developer × Lecturer — teaching builds trust, trust ships product.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #2a2826",
            paddingTop: 24,
            fontSize: 16,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#6e6a62",
          }}
        >
          <span>12+ cases · 5 modules · 852 records</span>
          <span style={{ color: "#c9a86a", letterSpacing: 0, textTransform: "none", fontStyle: "italic", fontSize: 20 }}>
            dots-project.work
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: newsreaderRegular, style: "normal", weight: 600 },
        { name: "Newsreader", data: newsreaderItalic, style: "italic", weight: 400 },
      ],
    },
  );
}
