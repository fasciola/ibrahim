import { Building2, FileCheck, Utensils, Award } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ExpertiseStrip() {
  const { t } = useLanguage();
  const items = t.expertiseStrip?.items || [];

  const icons = [Building2, FileCheck, Utensils, Award];

  return (
    <section className="border-y border-border bg-card/80 py-8 shadow-sm">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="flex items-start gap-3.5 rounded-xl border border-border/50 bg-background/50 p-4 transition-all hover:border-gold/30 hover:bg-background"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-navy dark:text-gold">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-[15px] font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[13px] leading-relaxed text-muted-ink">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
