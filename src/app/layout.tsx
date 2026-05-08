import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { gowunBatang, newsreader, pretendard } from "../styles/fonts";
import "./globals.css";

const SITE_URL = "https://dots-project.work";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "오장섭 — AI를 가르치고, AI로 만든다",
    template: "%s · 오장섭",
  },
  description:
    "강연·교육·멘토링과 실전 AI 자동화 프로젝트를 동시에. 부동산, F&B, 회계, 트레이딩 등 도메인 가리지 않음.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "Dots,",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ko"
      className={`${gowunBatang.variable} ${newsreader.variable} ${pretendard.variable}`}
    >
      <body>
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "오장섭",
            alternateName: "Oh Jangseop",
            jobTitle: "AI Developer & Lecturer",
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "KAIST",
              sameAs: "https://www.kaist.ac.kr/",
            },
            worksFor: {
              "@type": "Organization",
              name: "주식회사 이집저집",
              brand: { "@type": "Brand", name: "Dots," },
              url: SITE_URL,
            },
            url: SITE_URL,
            email: "mailto:ojsoym2@gmail.com",
            sameAs: [SITE_URL],
            knowsAbout: [
              "Artificial Intelligence",
              "Claude Code",
              "Real Estate Analytics",
              "F&B Operations Software",
              "AI Education",
            ],
          })}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8YLSL7DJWP"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8YLSL7DJWP');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
