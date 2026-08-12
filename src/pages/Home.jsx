import SEO from "@/components/seo/SEO";
import JsonLd, { faqPageSchema } from "@/components/seo/JsonLd";
import Hero from "@/components/home/Hero";
import ExpertiseStrip from "@/components/home/ExpertiseStrip";
import ImageShowcase from "@/components/home/ImageShowcase";
import MainlandExpertiseSection from "@/components/home/MainlandExpertiseSection";
import FormerDEDExperience from "@/components/home/FormerDEDExperience";
import CloudKitchenAuthority from "@/components/home/CloudKitchenAuthority";
import AboutIbrahim from "@/components/home/AboutIbrahim";
import ServicesPreview from "@/components/home/ServicesPreview";
import AudienceSection from "@/components/home/AudienceSection";
import SetupProcess from "@/components/home/SetupProcess";
import VerifiedCaseStudies from "@/components/home/VerifiedCaseStudies";
import Testimonials from "@/components/home/Testimonials";
import ReviewProofGallery from "@/components/home/ReviewProofGallery";
import FAQPreview from "@/components/home/FAQPreview";
import ComplianceDisclaimer from "@/components/ui/ComplianceDisclaimer";
import CTABanner from "@/components/ui/CTABanner";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title="Dubai Mainland Business Setup Specialist | Ibrahim Setup"
        description="Establish your Dubai Mainland company with practical guidance from Ibrahim, a former DED professional and CEO of Cloud Kitchen Setup. Support for licensing, approvals, visas, offices and food-business setup."
        path="/"
      />
      <JsonLd id="home-faq" data={faqPageSchema(t.faqs.slice(0, 6))} />
      <Hero />
      <ExpertiseStrip />
      <ImageShowcase />
      <MainlandExpertiseSection />
      <FormerDEDExperience />
      <CloudKitchenAuthority />
      <AboutIbrahim />
      <ServicesPreview />
      <AudienceSection />
      <SetupProcess />
      <VerifiedCaseStudies />
      <Testimonials />
      <ReviewProofGallery />
      <FAQPreview />
      <ComplianceDisclaimer />
      <CTABanner />
    </>
  );
}
