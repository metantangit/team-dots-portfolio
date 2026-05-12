import Link from "next/link";
import Container from "./Container";

const navItems = [
  { href: "/work", label: "작업" },
  { href: "/lectures", label: "강의" },
  { href: "/about", label: "소개" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 py-4">
      <Container size="wide">
        <div className="flex items-center justify-between rounded-full border-2 border-[var(--color-ink)]/15 bg-[var(--color-paper)]/80 px-4 py-3 shadow-[0_10px_0_rgba(75,37,88,0.1)] backdrop-blur-md">
          <Link href="/" className="flex items-center gap-2 font-black tracking-[-0.04em] text-[var(--color-ink)]">
            <span className="grid size-9 place-items-center rounded-full bg-[#cfff47] text-lg">·</span>
            <span>dots-project</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="주요 메뉴">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-bold text-[var(--color-ink-soft)] transition hover:bg-[#cfff47] hover:text-[var(--color-ink)]">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/#contact" className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-black text-[#fff8e8] shadow-[0_5px_0_#b54d48]">
            이야기하기
          </Link>
        </div>
      </Container>
    </header>
  );
}
