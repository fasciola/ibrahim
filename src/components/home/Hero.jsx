import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, ShieldCheck, Award, Utensils, Building2 } from "lucide-react";
import PortraitFrame from "@/components/ui/PortraitFrame";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Hero() {
  const { t, dir } = useLanguage();
  const h = t.hero;

  return (
    <section className="relative overflow-hidden bg-cream pt-24 lg:pt-28">
      <div className="absolute inset-0 bg-grid-navy opacity-50" aria-hidden="true" />
      <div className="absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-radial-gold opacity-70" aria-hidden="true" />
      <div className="container-wide relative grid items-center gap-12 pb-16 lg:grid-cols-2 lg:pb-24">
        <div className="animate-fade-rise">
          <span className="eyebrow">
            <span className="h-px w-6 bg-current opacity-60" />
            {h?.eyebrow || "DUBAI MAINLAND BUSINESS SETUP SPECIALIST"}
          </span>
          <h1 className="heading-xl mt-4 text-balance text-navy">
            {h?.title}
          </h1>
          <p className="body-lg mt-5 max-w-xl text-muted-ink">
            {h?.description}
          </p>

          {h?.cloudKitchenCopy && (
            <p className="mt-3 rounded-xl border border-gold/30 bg-gold/10 p-3.5 text-xs text-navy leading-relaxed max-w-xl">
              <strong>Cloud Kitchen &amp; Food Business Specialist: </strong>
              {h.cloudKitchenCopy}
            </p>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
            <Link
              to="/consultation"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-navy px-7 font-semibold text-white transition-all hover:bg-navy-secondary hover:shadow-lg focus-ring"
            >
              <span>{h?.bookConsultation || "Book a Dubai Mainland Consultation"}</span>
              <ArrowRight className={`h-4 w-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </Link>

            <a
              href={h?.cksUrl || "https://cloudkitchensetup.com/"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-gold/60 bg-gold px-7 font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg focus-ring"
            >
              <span>{h?.exploreCKS || "Explore Cloud Kitchen Setup"}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Concise Credibility Points */}
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-medium text-navy">
            <span className="flex items-center gap-1.5">
              <Award className="h-4 w-4 text-gold shrink-0" />
              {h?.trustPoints?.[0] || "Former DED Experience"}
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 className="h-4 w-4 text-gold shrink-0" />
              {h?.trustPoints?.[1] || "Dubai Mainland Specialist"}
            </span>
            <span className="flex items-center gap-1.5">
              <Utensils className="h-4 w-4 text-gold shrink-0" />
              {h?.trustPoints?.[2] || "CEO of Cloud Kitchen Setup"}
            </span>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <PortraitFrame size="lg" />

          {/* Credibility Badge Overlay 1 */}
          <div className="absolute -left-2 top-10 z-10 rounded-xl border border-border bg-card/95 px-5 py-3 shadow-lg backdrop-blur-sm sm:left-4 rtl:-right-2 rtl:left-auto rtl:sm:right-4">
            <div className="font-heading text-sm font-bold text-navy">Former DED</div>
            <div className="text-[11px] font-medium text-muted-ink">Licensing Procedure Insight</div>
          </div>

          {/* Credibility Badge Overlay 2 */}
          <div className="absolute -right-1 bottom-12 z-10 rounded-xl border border-border bg-card/95 px-5 py-3 shadow-lg backdrop-blur-sm sm:right-2 rtl:-left-1 rtl:right-auto rtl:sm:left-2">
            <div className="font-heading text-sm font-bold text-navy">CKS Founder &amp; CEO</div>
            <div className="text-[11px] font-medium text-muted-ink">Cloud Kitchen Authority</div>
          </div>
        </div>
      </div>
    </section>
  );
}