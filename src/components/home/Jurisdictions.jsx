import { Link } from "react-router-dom";
import { Building2, Landmark, Globe2, MapPin, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ICONS = [Landmark, Building2, Globe2];

export default function Jurisdictions() {
  const { t } = useLanguage();
  const { jurisdictions } = t;

  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="container-wide">
        <SectionHeading
          eyebrow={jurisdictions.eyebrow}
          title={jurisdictions.title}
          intro={jurisdictions.intro}
        />

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {jurisdictions.types.map((type, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal
                key={type.name}
                delay={i * 80}
                className="rounded-2xl border border-border bg-cream p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-ink">
                  {type.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-ink">
                  {type.description}
                </p>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 rounded-2xl border border-border bg-cream p-7">
          <h3 className="flex items-center gap-2 font-heading text-[15px] font-semibold uppercase tracking-[0.12em] text-navy">
            <MapPin className="h-4 w-4 text-gold" />
            {jurisdictions.emiratesLabel}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {jurisdictions.emirates.map((emirate) => (
              <li
                key={emirate}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-[13px] font-medium text-ink"
              >
                {emirate}
              </li>
            ))}
          </ul>
          <Link
            to="/services"
            className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-navy transition-colors hover:text-blue focus-ring"
          >
            {t.servicesPreview.viewAll}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
