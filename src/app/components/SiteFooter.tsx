import Container from "./Container";
import { studio } from "../../content/site";

export default function SiteFooter() {
  return (
    <footer className="py-12">
      <Container size="default">
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-muted)]">
          <p>© {new Date().getFullYear()} {studio.company} · {studio.url}</p>
          <p>KAIST 전산학부 · {studio.person}</p>
        </div>
      </Container>
    </footer>
  );
}
