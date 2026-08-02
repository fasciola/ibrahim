import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Ecosystem() {
  const { t } = useLanguage();
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t.ecosystem.eyebrow}
          title={t.ecosystem.title}
          intro={t.ecosystem.intro}
        />
        <div className="relative mt-12 lg:mt-16">
          <div
            className="absolute left-[27px] rtl:right-[27px] rtl:left-auto top-2 bottom-2 w-px bg-border lg:left-0 lg:right-0 lg:top-[60px] lg:bottom-auto lg:h-px lg:w-full"
            aria-hidden="true"
          />
          <ol className="grid gap-8 lg:grid-cols-5 lg:gap-5">
            {t.ecosystem.steps.map((step, i) => (
              <Reveal as="li" key={step.num} delay={i * 80} className="relative flex gap-4 lg:block lg:text-center">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-card font-heading text-lg font-bold text-navy lg:mx-auto">
                  {step.num}
                </div>
                <div className="lg:mt-5">
                  <h3 className="font-heading text-[17px] font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-ink">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}