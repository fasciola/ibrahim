import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Award, Utensils, Building2 } from "lucide-react";
import PortraitFrame from "@/components/ui/PortraitFrame";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t, dir } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative overflow-hidden bg-cream pt-20 lg:pt-22 min-h-[calc(100vh-80px)] flex items-center">
      {/* Explicit Dubai Skyline Hero Background Image */}
      <img
        src="/images/dubai_skyline_hero.png"
        alt="Dubai Skyline Background"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-65 pointer-events-none"
        aria-hidden="true"
      />
      {/* Light Overlay Gradient for Readability */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-cream/95 via-cream/80 to-cream/40 pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute right-0 top-1/4 h-[22rem] w-[22rem] rounded-full bg-radial-gold opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="container-wide relative grid items-center gap-8 py-6 lg:py-8 lg:grid-cols-12 w-full z-10">
        <div className="lg:col-span-7 animate-fade-rise">
          <span className="eyebrow text-xs">
            <span className="h-px w-5 bg-current opacity-60" />
            {h?.eyebrow || "DUBAI MAINLAND BUSINESS SETUP SPECIALIST"}
          </span>

          <h1 className="mt-2.5 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-navy text-balance">
            {h?.title}
          </h1>

          <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-ink max-w-xl">
            {h?.description}
          </p>

          {h?.cloudKitchenCopy && (
            <div className="mt-3 rounded-xl border border-gold/40 bg-gold/15 p-2.5 sm:p-3 text-[11px] sm:text-xs text-navy leading-snug max-w-xl backdrop-blur-sm">
              <strong>Cloud Kitchen &amp; Food Business Specialist: </strong>
              {h.cloudKitchenCopy}
            </div>
          )}

          {/* Compact Action Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              to="/consultation"
              className="inline-flex h-10 sm:h-11 items-center justify-center gap-2 rounded-full bg-navy px-6 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-navy-secondary hover:shadow-lg focus-ring"
            >
              <span>{h?.bookConsultation || "Book a Dubai Mainland Consultation"}</span>
              <ArrowRight className={`h-4 w-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </Link>

            <a
              href={h?.cksUrl || "https://cloudkitchensetup.com/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 sm:h-11 items-center justify-center gap-2 rounded-full border border-gold/60 bg-gold px-6 text-xs sm:text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-md focus-ring"
            >
              <span>{h?.exploreCKS || "Explore Cloud Kitchen Setup"}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Concise Credibility Points */}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-semibold text-navy">
            <span className="flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5 text-gold shrink-0" />
              {h?.trustPoints?.[0] || "Former DED Experience"}
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 className="h-3.5 w-3.5 text-gold shrink-0" />
              {h?.trustPoints?.[1] || "Dubai Mainland Specialist"}
            </span>
            <span className="flex items-center gap-1.5">
              <Utensils className="h-3.5 w-3.5 text-gold shrink-0" />
              {h?.trustPoints?.[2] || "CEO of Cloud Kitchen Setup"}
            </span>
          </div>
        </div>

        {/* Compact Portrait Frame Container */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <PortraitFrame size="md" />

          {/* Credibility Badge Overlay 1 */}
          <div className="absolute -left-2 top-6 z-10 rounded-xl border border-border bg-card/95 px-3.5 py-2 shadow-md backdrop-blur-sm sm:left-2 rtl:-right-2 rtl:left-auto rtl:sm:right-2">
            <div className="font-heading text-xs font-bold text-navy">Former DED</div>
            <div className="text-[10px] font-medium text-muted-ink">Licensing Insight</div>
          </div>

          {/* Credibility Badge Overlay 2 */}
          <div className="absolute -right-1 bottom-6 z-10 rounded-xl border border-border bg-card/95 px-3.5 py-2 shadow-md backdrop-blur-sm sm:right-2 rtl:-left-1 rtl:right-auto rtl:sm:left-2">
            <div className="font-heading text-xs font-bold text-navy">CKS Founder &amp; CEO</div>
            <div className="text-[10px] font-medium text-muted-ink">Cloud Kitchen Authority</div>
          </div>
        </div>
      </div>
    </section>
  );
}