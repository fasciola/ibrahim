import { Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Recognition() {
  const { t } = useLanguage();
  return (
    <section className="bg-navy py-16 lg:py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t.recognition.eyebrow}
          title={t.recognition.title}
          light
        />
        <Reveal delay={100} className="mt-8 max-w-3xl">
          <div className="flex items-start gap-5 rounded-2xl border border-gold/25 bg-white/[0.03] p-6 sm:p-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/30">
              <Award className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-[16px] leading-relaxed text-white">
                {t.recognition.p1}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-white/65">
                {t.recognition.p2}
              </p>
            </div>
          </div>
          <p className="mt-5 text-[13px] leading-relaxed text-white/45">
            {t.recognition.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}