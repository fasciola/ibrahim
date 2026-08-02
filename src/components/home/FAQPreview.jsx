import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FAQPreview() {
  const { t } = useLanguage();
  const preview = t.faqs ? t.faqs.slice(0, 6) : [];
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="container-wide max-w-3xl">
        <SectionHeading
          eyebrow={t.faqPreview.eyebrow}
          title={t.faqPreview.title}
          align="center"
        />
        <div className="mt-10 space-y-3">
          <FAQAccordion items={preview} />
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/faq"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-navy/15 bg-card px-7 font-semibold text-navy transition-all hover:border-gold hover:text-blue focus-ring"
          >
            {t.faqPreview.viewAll}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}