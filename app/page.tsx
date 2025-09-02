import CoverPage from "@/components/cover-page"
import AboutSection from "@/components/about-section"
import PortfolioSection from "@/components/portfolio-section"
import ContactPage from "@/components/contact-page"

export default function Home() {
  return (
    <main className="scroll-smooth">
      <CoverPage />
      <AboutSection />
      <PortfolioSection />
      <ContactPage />
    </main>
  )
}
