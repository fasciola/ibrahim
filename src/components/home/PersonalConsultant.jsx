import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import PortraitFrame from "@/components/ui/PortraitFrame";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function PersonalConsultant() {
  const { t } = useLanguage();
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="order-2 flex justify-center lg:order-1 lg:justify-start">
          <PortraitFrame
            size="md"
            src="https://media.base44.com/images/public/6a6d14210c14a6d36e8db707/266705723_WhatsAppImage2026-07-31at113226PM.jpg"
            alt="Ibrahim, UAE business setup consultant, in his Dubai office."
          />
        </Reveal>
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow={t.personalConsultant.eyebrow}
            title={t.personalConsultant.title}
          />
          <Reveal delay={100}>
            <p className="body-lg mt-6">
              {t.personalConsultant.description}
            </p>
          </Reveal>
          <Reveal delay={150}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {t.personalConsultant.checklist.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to="/consultation"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-navy px-7 font-semibold text-white transition-all hover:bg-navy-secondary hover:shadow-lg focus-ring"
            >
              {t.personalConsultant.cta}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}