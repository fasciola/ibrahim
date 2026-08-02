import SEO from "@/components/seo/SEO";
import JsonLd, { faqPageSchema } from "@/components/seo/JsonLd";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import AboutPreview from "@/components/home/AboutPreview";
import Recognition from "@/components/home/Recognition";
import Ecosystem from "@/components/home/Ecosystem";
import Jurisdictions from "@/components/home/Jurisdictions";
import ServicesPreview from "@/components/home/ServicesPreview";
import PersonalConsultant from "@/components/home/PersonalConsultant";
import Testimonials from "@/components/home/Testimonials";
import FAQPreview from "@/components/home/FAQPreview";
import CTABanner from "@/components/ui/CTABanner";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <SEO
        title="UAE Company Formation & Business Setup | Ibrahim Setup"
        description="Register a mainland, free zone, or offshore company in the UAE. Expert help with trade licences, investor visas, corporate banking, and tax registration across Dubai, Abu Dhabi, and Sharjah."
        path="/"
      />
      <JsonLd id="home-faq" data={faqPageSchema(t.faqs.slice(0, 6))} />
      <Hero />
      <StatsBar />
      <AboutPreview />
      <Recognition />
      <Ecosystem />
      <Jurisdictions />
      <ServicesPreview />
      <PersonalConsultant />
      <Testimonials />
      <FAQPreview />
      <CTABanner />
    </>
  );
}
