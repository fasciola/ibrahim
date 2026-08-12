import { Link } from "react-router-dom";
import { Award, Briefcase, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutIbrahim() {
  const { t, dir } = useLanguage();
  const a = t.aboutAuthority;

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow">{a?.profileRole || "Dubai Mainland Specialist"}</span>
            <h2 className="heading-lg mt-3 text-navy font-heading font-bold">
              {a?.heading || "Government-Process Knowledge. Real Business Experience."}
            </h2>
            <p className="body-lg mt-5 text-muted-ink leading-relaxed">
              {a?.p1}
            </p>
            <p className="body-lg mt-4 text-muted-ink leading-relaxed">
              {a?.p2}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-card px-4 py-2 text-xs font-semibold text-navy">
                <Briefcase className="h-4 w-4 text-gold" />
                {a?.profileTag1 || "Owner & CEO — Cloud Kitchen Setup"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-card px-4 py-2 text-xs font-semibold text-navy">
                <Award className="h-4 w-4 text-gold" />
                {a?.profileTag2 || "Former DED Licensing Experience"}
              </span>
            </div>

            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-navy px-6 text-sm font-semibold text-white transition-all hover:bg-navy-secondary focus-ring"
              >
                <span>{t.aboutPreview?.learnMore || "Learn More About Ibrahim"}</span>
                <ArrowRight className={`h-4 w-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-xl text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-gold/10 rounded-full blur-2xl -z-10" />

              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-[0_8px_28px_rgba(7,26,43,0.16)] ring-1 ring-border bg-white">
                <img
                  src="/images/ibrahim%20certif.jpeg"
                  alt="Ibrahim Mohamed Ali Ibrahim Idris"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-navy font-heading">
                {a?.profileName || "Ibrahim Mohamed Ali Ibrahim Idris"}
              </h3>
              <p className="mt-1 text-sm font-semibold text-gold">
                {a?.profileRole || "Dubai Mainland Business Setup Specialist"}
              </p>

              <div className="mt-6 border-t border-border pt-6 space-y-3 text-left rtl:text-right">
                <div className="flex items-center gap-3 text-xs text-muted-ink">
                  <ShieldCheck className="h-4 w-4 text-gold shrink-0" />
                  <span>Practical Mainland licensing and activity selection expertise</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-ink">
                  <ShieldCheck className="h-4 w-4 text-gold shrink-0" />
                  <span>Real food business ownership & operational experience</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-ink">
                  <ShieldCheck className="h-4 w-4 text-gold shrink-0" />
                  <span>Direct consultant guidance from start to licence issuance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
