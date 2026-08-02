import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Building, FileText, Stamp, Scale, Key, ShieldCheck, Briefcase, Landmark, UserCheck, RefreshCw } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import SectionHeading from "@/components/ui/SectionHeading";

export default function MainlandExpertiseSection() {
  const { t, dir } = useLanguage();
  const m = t.mainlandExpertise;

  const cardIcons = [
    Briefcase,
    FileText,
    CheckCircle2,
    Scale,
    Stamp,
    Building,
    Key,
    ShieldCheck,
    Landmark,
    UserCheck,
    Landmark,
    RefreshCw,
  ];

  return (
    <section className="py-20 lg:py-24 bg-cream/40">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{t.hero?.eyebrow || "DUBAI MAINLAND SPECIALIST"}</span>
          <h2 className="heading-lg mt-3 text-navy font-heading font-bold">
            {m?.title || "Dubai Mainland Setup Is Ibrahim’s Core Expertise"}
          </h2>
          <p className="body-lg mt-4 text-muted-ink">
            {m?.p1}
          </p>
          <p className="body-lg mt-3 text-muted-ink">
            {m?.p2}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {m?.cards?.map((card, idx) => {
            const Icon = cardIcons[idx % cardIcons.length];
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-md"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy transition-colors group-hover:bg-gold/15 group-hover:text-gold">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-navy">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-ink leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/consultation"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-navy px-8 text-base font-semibold text-white transition-all hover:bg-navy-secondary hover:shadow-lg focus-ring"
          >
            <span>{m?.cta || "Discuss Your Mainland Business"}</span>
            <ArrowRight className={`h-5 w-5 ${dir === "rtl" ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </div>
    </section>
  );
}
