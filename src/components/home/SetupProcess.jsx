import { Link } from "react-router-dom";
import { Utensils, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function SetupProcess() {
  const { t, dir } = useLanguage();
  const sp = t.setupProcess;

  return (
    <section className="py-20 lg:py-24 bg-card border-t border-border">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">CLEAR 8-STEP PROCESS</span>
          <h2 className="heading-lg mt-3 text-navy font-heading font-bold">
            {sp?.heading || "Your Dubai Mainland Setup Journey"}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sp?.steps?.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="h-full rounded-2xl border border-border bg-background p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="font-heading text-xs font-bold text-gold uppercase tracking-wider">
                    Step {step.num}
                  </span>
                  <h3 className="mt-2 font-heading text-base font-semibold text-navy">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-ink leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Contextual food callout after step 2 */}
                {idx === 1 && (
                  <div className="mt-4 rounded-xl border border-gold/30 bg-gold/10 p-3 text-[11px] text-navy">
                    <div className="flex items-center gap-1.5 font-bold text-gold">
                      <Utensils className="h-3.5 w-3.5" />
                      <span>Food &amp; Kitchen Branch</span>
                    </div>
                    <p className="mt-1 leading-snug text-muted-ink">
                      {sp?.foodCallout}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/consultation"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-navy px-8 text-base font-semibold text-white transition-all hover:bg-navy-secondary hover:shadow-lg focus-ring"
          >
            <span>{t.hero?.bookConsultation || "Book a Dubai Mainland Consultation"}</span>
            <ArrowRight className={`h-5 w-5 ${dir === "rtl" ? "rotate-180" : ""}`} />
          </Link>
        </div>
      </div>
    </section>
  );
}
