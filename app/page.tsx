import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { VictoryEquationSection } from "@/components/victory-equation-section"
import { HabitSection } from "@/components/habit-section"
import { RegionalDataSection } from "@/components/regional-data-section"
import { SolutionSection } from "@/components/solution-section"
import { SuccessStories } from "@/components/success-stories"
import { EnvironmentGallery } from "@/components/environment-gallery"
import { PricingSection } from "@/components/pricing-section"
import { ScheduleSection } from "@/components/schedule-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { FixedFooterCta } from "@/components/fixed-footer-cta"
import MedicalRoadmapSection from "@/components/medical-roadmap-section"
import { MathRoadmapSection } from "@/components/math-roadmap-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16 md:pt-20 pb-20">
        {/* 1. ファーストビュー */}
        <HeroSection />
        {/* 2. 問題提起 */}
        <ProblemSection />
        {/* 3. 勝利の方程式 */}
        <VictoryEquationSection />
        {/* 4. 習慣化 */}
        <HabitSection />
        <MathRoadmapSection />

        {/* 5. 地域データ */}
        <RegionalDataSection />
        {/* 6. 解決策 */}
        <SolutionSection />
        {/* 7. 成長事例 */}
        <SuccessStories />
        {/* 8. 学習環境 */}
        <EnvironmentGallery />
        {/* 9. 締めCTA */}
        <FinalCtaSection />
        {/* 10. 料金・時間割（下部にまとめて配置） */}
        <PricingSection />
        <ScheduleSection />
        {/* 11. お問い合わせフォーム */}
        <ContactForm />
        <Footer />
      </div>
      <FixedFooterCta />
    </main>
  )
}
