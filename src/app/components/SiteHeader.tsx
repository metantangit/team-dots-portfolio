import Link from "next/link";
import Container from "./Container";

// Reduced to 3 items for visual breathing — Clients & Contact are #anchors reachable via scroll
const navItems = [
  { href: "/work", labelEn: "WORK", labelKo: "작업" },
  { href: "/lectures", labelEn: "LECTURES", labelKo: "강의" },
  { href: "/about", labelEn: "ABOUT", labelKo: "소개" },
];

export default function SiteHeader() {
  return (
    <header className="absolute top-0 inset-x-0 z-20 pt-8">
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-1.5">
            <span className="font-[family-name:var(--font-serif-en)] italic text-2xl text-[--color-ink]">
              Dots
            </span>
            <span className="text-2xl text-[--color-accent] -ml-1">,</span>
          </Link>

          {/* Bracket nav — desktop (md+) */}
          <nav className="hidden md:flex items-center gap-6" aria-label="주요 메뉴">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-0.5 text-[11px] text-[--color-ink-soft] hover:text-[--color-ink] transition-colors"
              >
                <span
                  aria-hidden
                  className="text-[--color-muted] group-hover:text-[--color-accent] transition-all duration-200 group-hover:-translate-x-0.5 inline-block"
                >
                  [
                </span>
                <span className="uppercase tracking-[0.18em] px-1 group-hover:text-[--color-ink] transition-colors">
                  {item.labelEn}
                </span>
                <span aria-hidden className="text-[--color-muted] px-0.5 text-[10px]">
                  /
                </span>
                <span className="font-[family-name:var(--font-serif-ko)] px-1 group-hover:text-[--color-accent] transition-colors normal-case tracking-normal text-[12px]">
                  {item.labelKo}
                </span>
                <span
                  aria-hidden
                  className="text-[--color-muted] group-hover:text-[--color-accent] transition-all duration-200 group-hover:translate-x-0.5 inline-block"
                >
                  ]
                </span>
              </Link>
            ))}
          </nav>

          {/* Compact KO nav — mobile (<md) */}
          <nav className="flex md:hidden items-center gap-4" aria-label="주요 메뉴">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-[family-name:var(--font-serif-ko)] text-[13px] text-[--color-ink-soft] hover:text-[--color-accent] transition-colors"
              >
                {item.labelKo}
              </Link>
            ))}
          </nav>

          {/* CTA pill */}
          <Link
            href="/#contact"
            className="text-sm px-4 py-2 rounded-full border border-[--color-paper-edge] text-[--color-ink] hover:bg-[--color-ink] hover:text-[--color-paper] transition-colors"
          >
            의뢰하기
          </Link>
        </div>
      </Container>
    </header>
  );
}
