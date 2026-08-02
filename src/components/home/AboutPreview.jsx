import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import PortraitFrame from "@/components/ui/PortraitFrame";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutPreview() {
  const { t } = useLanguage();
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow={t.aboutPreview.eyebrow}
            title={t.aboutPreview.title}
          />
          <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-muted-ink">
            <Reveal>
              <p>{t.aboutPreview.p1}</p>
            </Reveal>
            <Reveal delay={100}>
              <p>{t.aboutPreview.p2}</p>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="mt-6 flex flex-wrap gap-2">
              {t.aboutPreview.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-card px-3.5 py-1.5 text-[13px] font-medium text-ink"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-1.5 font-semibold text-blue transition-colors hover:text-navy focus-ring"
            >
              {t.aboutPreview.learnMore}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={100} className="flex justify-center lg:justify-end">
          <PortraitFrame
            size="md"
            src="https://media.base44.com/images/public/6a6d14210c14a6d36e8db707/266705723_WhatsAppImage2026-07-31at113226PM.jpg"
            alt="Ibrahim, UAE business setup consultant, in his Dubai office."
          />
        </Reveal>
      </div>
    </section>
  );
}