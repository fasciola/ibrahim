import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <TestimonialCard key={i} {...item} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}