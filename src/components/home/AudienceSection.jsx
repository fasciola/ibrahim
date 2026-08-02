import { Building2, Utensils, Store, Globe, RefreshCw, CreditCard } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AudienceSection() {
  const { t } = useLanguage();
  const aud = t.audience;

  const cardIcons = [
    Building2,
    Utensils,
    Store,
    Globe,
    RefreshCw,
    CreditCard,
  ];

  return (
    <section className="py-20 lg:py-24 bg-cream/40 border-t border-border">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">WHO IBRAHIM HELPS</span>
          <h2 className="heading-lg mt-3 text-navy font-heading font-bold">
            {aud?.heading || "Specialised Support for Entrepreneurs Building in Dubai"}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aud?.cards?.map((card, idx) => {
            const Icon = cardIcons[idx % cardIcons.length];
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-gold/40 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-navy dark:text-gold">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-navy">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-muted-ink leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
