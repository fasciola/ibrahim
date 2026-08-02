import StatCounter from "@/components/ui/StatCounter";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function StatsBar() {
  const { t } = useLanguage();
  return (
    <section className="border-y border-border bg-card">
      <div className="container-wide grid grid-cols-2 gap-8 py-12 lg:grid-cols-4 lg:py-14">
        {t.stats.map((s) => (
          <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </div>
    </section>
  );
}