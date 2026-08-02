import { Link } from "react-router-dom";
import { ArrowRight, Compass, ShieldCheck, Clock } from "lucide-react";
import PortraitFrame from "@/components/ui/PortraitFrame";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-cream pt-24 lg:pt-28">
      <div className="absolute inset-0 bg-grid-navy opacity-50" aria-hidden="true" />
      <div className="absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-radial-gold opacity-70" aria-hidden="true" />
      <div className="container-wide relative grid items-center gap-12 pb-16 lg:grid-cols-2 lg:pb-24">
        <div className="animate-fade-rise">
          <span className="eyebrow">
            <span className="h-px w-6 bg-current opacity-60" />
            {t.hero.eyebrow}
          </span>
          <h1 className="heading-xl mt-5 text-balance">
            {t.hero.title}
          </h1>
          <p className="body-lg mt-6 max-w-xl">
            {t.hero.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {t.hero.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-[13px] font-medium text-ink"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/consultation"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gold px-7 font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg focus-ring"
            >
              {t.hero.bookConsultation}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
            <Link
              to="/services"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-navy/15 bg-card px-7 font-semibold text-navy transition-all hover:border-gold hover:text-blue focus-ring"
            >
              {t.hero.exploreServices}
            </Link>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-medium text-muted-ink">
            <span className="flex items-center gap-1.5">
              <Compass className="h-4 w-4 text-gold" /> {t.hero.personalGuidance}
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-gold" /> {t.hero.clearProcess}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-gold" /> {t.hero.promptResponse}
            </span>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <PortraitFrame size="lg" />
          <div className="absolute -left-2 top-10 z-10 rounded-xl border border-border bg-card/95 px-5 py-3 shadow-lg backdrop-blur-sm sm:left-4 rtl:-right-2 rtl:left-auto rtl:sm:right-4">
            <div className="font-heading text-2xl font-bold text-navy [direction:ltr] inline-block">500+</div>
            <div className="text-[12px] font-medium text-muted-ink">{t.hero.companiesSupported}</div>
          </div>
          <div className="absolute -right-1 bottom-12 z-10 rounded-xl border border-border bg-card/95 px-5 py-3 shadow-lg backdrop-blur-sm sm:right-2 rtl:-left-1 rtl:right-auto rtl:sm:left-2">
            <div className="font-heading text-2xl font-bold text-navy [direction:ltr] inline-block">5+</div>
            <div className="text-[12px] font-medium text-muted-ink">{t.hero.yearsExperience}</div>
          </div>
        </div>
      </div>
    </section>
  );
}