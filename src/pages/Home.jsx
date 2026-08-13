import SEO from "@/components/seo/SEO";
import JsonLd, { faqPageSchema } from "@/components/seo/JsonLd";
import Hero from "@/components/home/Hero";
import ImageShowcase from "@/components/home/ImageShowcase";
import MainlandExpertiseSection from "@/components/home/MainlandExpertiseSection";
import FormerDEDExperience from "@/components/home/FormerDEDExperience";
import CloudKitchenAuthority from "@/components/home/CloudKitchenAuthority";
import AboutIbrahim from "@/components/home/AboutIbrahim";
import ServicesPreview from "@/components/home/ServicesPreview";
import SetupProcess from "@/components/home/SetupProcess";
import ReviewProofGallery from "@/components/home/ReviewProofGallery";
import FAQPreview from "@/components/home/FAQPreview";
import CTABanner from "@/components/ui/CTABanner";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title="Dubai Mainland Business Setup Specialist | Ibrahim Setup"
        description="Dubai Mainland company setup guidance from Ibrahim, with practical licensing experience and specialist support for cloud kitchens and food businesses."
        path="/"
      />
      <JsonLd id="home-faq" data={faqPageSchema(t.faqs.slice(0, 4))} />
      <Hero />
      <ImageShowcase />
      <MainlandExpertiseSection />
      <FormerDEDExperience />
      <CloudKitchenAuthority />
      <AboutIbrahim />
      <ServicesPreview />
      <SetupProcess />
      <ReviewProofGallery />
      <FAQPreview />
      <CTABanner />
    </>
  );
}
