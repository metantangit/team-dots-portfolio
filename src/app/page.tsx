import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Hero from "./components/sections/Hero";
import Manifesto from "./components/sections/Manifesto";
import SignatureWork from "./components/sections/SignatureWork";
import LectureSection from "./components/sections/LectureSection";
import ClientsSection from "./components/sections/ClientsSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Manifesto />
        <SignatureWork />
        <LectureSection />
        <ClientsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
