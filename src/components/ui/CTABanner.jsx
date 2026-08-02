import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { consultationWhatsappLink } from "@/lib/siteConfig";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CTABanner({
  title,
  text,
  primaryLabel,
  primaryTo = "/consultation",
}) {
  const { t } = useLanguage();
  const finalTitle = title || t.ctaBanner.title;
  const finalText = text || t.ctaBanner.text;
  const finalLabel = primaryLabel || t.ctaBanner.primaryLabel;
  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-grid-navy opacity-40" aria-hidden="true" />
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-radial-gold opacity-60" aria-hidden="true" />
      <div className="container-wide relative py-16 sm:py-20 lg:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow !text-gold-light">
            <span className="h-px w-6 bg-current opacity-60" />
            {t.ctaBanner.eyebrow}
          </span>
          <h2 className="heading-lg mt-4 !text-white text-balance">{finalTitle}</h2>
          <p className="body-lg mt-5 !text-white/75">{finalText}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to={primaryTo}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-7 font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg sm:w-auto focus-ring"
            >
              {finalLabel}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
            <a
              href={consultationWhatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/25 px-7 font-semibold text-white transition-all hover:bg-white/10 sm:w-auto focus-ring"
            >
              <MessageCircle className="h-4 w-4" />
              {t.ctaBanner.chatWhatsApp}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}