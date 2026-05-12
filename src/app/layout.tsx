import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { gowunBatang, newsreader, pretendard } from "../styles/fonts";
import "./globals.css";

const SITE_URL = "https://dots-project.work";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "dots-project — 작게 시스템화하는 AI 작업장",
    template: "%s · dots-project",
  },
  description:
    "오장섭의 AI 작업장. 흩어진 자료, 반복 업무, 늦어지는 판단을 작게 접어 실제로 쓰이는 도구로 남깁니다.",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "dots-project",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${gowunBatang.variable} ${newsreader.variable} ${pretendard.variable}`}>
      <body>
        <Script id="ld-person" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "오장섭",
            alternateName: "Oh Jangseop",
            jobTitle: "Founder-operator, AI systems developer",
            alumniOf: { "@type": "CollegeOrUniversity", name: "KAIST", sameAs: "https://www.kaist.ac.kr/" },
            worksFor: {
              "@type": "Organization",
              name: "주식회사 이집저집",
              brand: { "@type": "Brand", name: "dots-project" },
              url: SITE_URL,
            },
            url: SITE_URL,
            email: "mailto:ojsoym2@gmail.com",
            sameAs: [SITE_URL],
            knowsAbout: ["AI Education", "Operations Automation", "AI System Design", "Real-time Video Analysis"],
          })}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8YLSL7DJWP" strategy="afterInteractive" />
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
