import { Link } from "react-router-dom";
import { ArrowRight, Building2, Utensils, Store } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ICONS = [Building2, Utensils, Store];

export default function ServicesPreview() {
  const { t } = useLanguage();
  const cards = t.servicesPreview?.cards?.slice(0, 3) || [];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="Core Services"
            title="Focused Support for Starting in Dubai"
            intro="Start with the setup you actually need. Detailed support is available when you are ready to move forward."
          />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <ServiceCard key={card.title} icon={ICONS[i]} {...card} delay={i * 60} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="focus-ring inline-flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-navy shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            View All Services <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
