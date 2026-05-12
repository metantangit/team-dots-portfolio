import Container from "./Container";
import { studio } from "../../content/site";

export default function SiteFooter() {
  return (
    <footer className="py-12">
      <Container size="wide">
        <div className="rounded-[2rem] bg-[var(--color-bg-deep)] p-6 text-[#fff4d8] md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <p className="text-2xl font-black tracking-[-0.05em]">dots-project</p>
              <p className="mt-3 max-w-md text-sm leading-7 text-[#ffd9bd]">{studio.description}</p>
            </div>
            <div className="text-sm leading-7 text-[#ffd9bd]">
              <p className="font-black text-[#cfff47]">contact</p>
              <a className="block hover:text-white" href={`mailto:${studio.email}`}>{studio.email}</a>
              <a className="block hover:text-white" href="tel:+821046859570">{studio.phone}</a>
              <p>Kakao {studio.kakao}</p>
            </div>
            <div className="text-sm leading-7 text-[#ffd9bd] md:text-right">
              <p>{studio.url}</p>
              <p>© {new Date().getFullYear()} {studio.company}</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
