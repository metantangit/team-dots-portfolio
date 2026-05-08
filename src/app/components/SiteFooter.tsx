import Container from "./Container";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[--color-paper-edge] py-12 mt-32">
      <Container size="wide">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] text-sm">
          <div>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-[family-name:var(--font-serif-en)] italic text-xl">
                Dots
              </span>
              <span className="text-xl text-[--color-accent] -ml-0.5">,</span>
            </div>
            <p className="text-[--color-ink-soft] leading-relaxed max-w-sm text-sm">
              강의로 신뢰가 쌓이면, 그 자리에서 다음 일이 시작됩니다.
            </p>
          </div>

          <div>
            <p className="text-[--color-muted] uppercase tracking-[0.2em] text-xs mb-3">
              Contact
            </p>
            <ul className="space-y-1.5 text-[--color-ink-soft]">
              <li>
                <a
                  href="mailto:ojsoym2@gmail.com"
                  className="hover:text-[--color-accent] transition-colors"
                >
                  ojsoym2@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+821046859570"
                  className="hover:text-[--color-accent] transition-colors"
                >
                  010-4685-9570
                </a>
              </li>
              <li>카카오 dots_connect</li>
            </ul>
          </div>

          <div>
            <p className="text-[--color-muted] uppercase tracking-[0.2em] text-xs mb-3">
              Site
            </p>
            <ul className="space-y-1.5 text-[--color-ink-soft]">
              <li className="font-[family-name:var(--font-serif-en)]">
                dots-project.work
              </li>
              <li className="text-xs text-[--color-muted] mt-2">
                © {new Date().getFullYear()} 주식회사 이집저집
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
