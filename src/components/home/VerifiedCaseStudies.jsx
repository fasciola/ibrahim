import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function VerifiedCaseStudies() {
  const { t } = useLanguage();
  const cs = t.caseStudies;

  return (
    <section className="py-20 lg:py-24 bg-cream/40 border-t border-border">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">PRACTICAL SOLUTIONS</span>
          <h2 className="heading-lg mt-3 text-navy font-heading font-bold">
            {cs?.heading || "Experience Applied to Real Business Challenges"}
          </h2>
          <p className="mt-2 text-xs text-muted-ink italic">
            // Replace with verified client-approved case study before publication.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {cs?.items?.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="inline-block rounded-full bg-navy/10 px-3 py-1 text-xs font-bold text-navy">
                  Case Study 0{idx + 1}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy">
                  {item.title}
                </h3>
                
                <div className="mt-4 space-y-3 text-xs">
                  <div>
                    <span className="font-bold text-navy uppercase tracking-wider text-[10px]">Challenge:</span>
                    <p className="mt-0.5 text-muted-ink leading-relaxed">{item.challenge}</p>
                  </div>
                  <div>
                    <span className="font-bold text-navy uppercase tracking-wider text-[10px]">Approach:</span>
                    <p className="mt-0.5 text-muted-ink leading-relaxed">{item.approach}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <div className="flex items-start gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
                  <span>{item.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
