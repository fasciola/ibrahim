import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ServiceCard({ icon: Icon, title, description, included, delay = 0 }) {
  const { t } = useLanguage();
  return (
    <Reveal
      delay={delay}
      className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_18px_40px_-20px_rgba(7,26,43,0.25)]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold ring-1 ring-gold/30 transition-colors group-hover:bg-gold group-hover:text-navy">
        <Icon className="h-6 w-6" strokeWidth={1.5} />
      </div>
      <h3 className="mt-5 font-heading text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-muted-ink">{description}</p>
      <ul className="mt-5 space-y-2.5">
        {included.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[14px] text-ink">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" strokeWidth={2.5} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/services"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors hover:text-navy focus-ring"
      >
        {t.servicesPreview?.learnMore || t.aboutPreview?.learnMore || "Learn More"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
      </Link>
    </Reveal>
  );
}