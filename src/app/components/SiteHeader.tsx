import Link from "next/link";
import Container from "./Container";

const navItems = [
  { href: "/work", label: "작업" },
  { href: "/lectures", label: "강의" },
  { href: "/about", label: "소개" },
];

export default function SiteHeader() {
  return (
    <header className="pt-6">
      <Container size="default">
        <div className="flex items-center justify-between border-b border-[var(--color-line)] pb-5 text-sm">
          <Link href="/" className="font-semibold tracking-[-0.02em]">
            dots-project.work
          </Link>
          <nav className="flex items-center gap-5 text-[var(--color-muted)]" aria-label="주요 메뉴">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[var(--color-ink)]">
                {item.label}
              </Link>
            ))}
            <Link href="/#contact" className="font-semibold text-[var(--color-ink)] hover:text-[var(--color-accent)]">
              의뢰
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
