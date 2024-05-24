import { HeadSection } from './section/HeadSection';
import { PartnersSection } from './section/PartnersSection';
import { BenefitsSection } from './section/BenefitsSection';
import { AboutFounderSection } from './section/AboutFounderSection';
import { HowToOrderSection } from './section/HowToOrderSection';
import { UserGeneratedContentSection } from './section/UserGeneratedContentSection';
import { FAQSection } from './section/FAQSection';
import { InfoBannerSection } from './section/InfoBannerSection';
import { FinalCTASection } from './section/FinalCTASection';

export const ProductPage = () => {
  return (
    <div className="relative">
      <HeadSection />
      <PartnersSection />
      <BenefitsSection />
      <AboutFounderSection />
      <HowToOrderSection />
      <UserGeneratedContentSection />
      <FAQSection />
      <InfoBannerSection />
      <FinalCTASection />
    </div>
  )
}