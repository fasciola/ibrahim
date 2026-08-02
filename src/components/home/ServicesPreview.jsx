import { Link } from "react-router-dom";
import { ArrowRight, Building2, Utensils, Store, UserCheck, CreditCard, ShieldCheck, RefreshCw, Landmark, Scale } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ICONS = [
  Building2,
  Utensils,
  Store,
  UserCheck,
  CreditCard,
  ShieldCheck,
  RefreshCw,
  Landmark,
  Scale,
];

export default function ServicesPreview() {
  const { t } = useLanguage();
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow={t.servicesPreview?.eyebrow || "SERVICES HIERARCHY"}
            title={t.servicesPreview?.title || "Specialist UAE Setup Services"}
            intro={t.servicesPreview?.intro}
          />
          <Link
            to="/services"
            className="hidden shrink-0 items-center gap-1.5 font-semibold text-blue transition-colors hover:text-navy focus-ring sm:inline-flex"
          >
            {t.servicesPreview?.viewAll || "View All Services"}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.servicesPreview?.cards?.map((card, i) => (
            <ServiceCard key={i} icon={ICONS[i % ICONS.length]} {...card} delay={i * 50} />
          ))}
        </div>
      </div>
    </section>
  );
}