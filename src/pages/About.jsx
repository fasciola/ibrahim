import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Target, Eye, HeartHandshake, Lock, Clock } from "lucide-react";
import SEO from "@/components/seo/SEO";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import PortraitFrame from "@/components/ui/PortraitFrame";
import CTABanner from "@/components/ui/CTABanner";
import { ABOUT_TAGS } from "@/lib/siteConfig";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const VALUE_ICONS = [Eye, ShieldCheck, Target, Clock, Lock, HeartHandshake];

export default function About() {
  const { t } = useLanguage();
  const ap = t.aboutPage || {};

  const valuesList = (ap.values || []).map((v, i) => ({
    ...v,
    icon: VALUE_ICONS[i % VALUE_ICONS.length],
  }));

  const approachList = ap.approachList || [];

  return (
    <>
      <SEO
        title="UAE Business Setup Consultant in Dubai | About Ibrahim Setup"
        description="Meet Ibrahim, a UAE company formation consultant with 5+ years of experience and a professional background with the Dubai Department of Economic Development. 500+ companies registered across the Emirates."
        path="/about"
      />
      <section className="bg-cream pt-28 lg:pt-32">
        <div className="container-wide">
          <Breadcrumbs items={[{ labelKey: "about", label: "About" }]} />
          <div className="grid items-center gap-12 pb-16 lg:grid-cols-2 lg:pb-20">
            <div>
              <span className="eyebrow">
                <span className="h-px w-6 bg-current opacity-60" />
                {ap.eyebrow || "About Ibrahim"}
              </span>
              <h1 className="heading-lg mt-4 text-balance">
                {ap.title || "Practical Experience. Personalized Guidance."}
              </h1>
              <p className="body-lg mt-5">
                {ap.intro || "Helping entrepreneurs navigate UAE company formation with clarity, professionalism, and informed support."}
              </p>
            </div>
            <Reveal delay={100} className="flex justify-center lg:justify-end">
              <PortraitFrame
                size="lg"
                src="https://media.base44.com/images/public/6a6d14210c14a6d36e8db707/266705723_WhatsAppImage2026-07-31at113226PM.jpg"
                alt="Ibrahim, UAE business setup consultant, in his Dubai office."
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 lg:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading
              eyebrow={ap.biographyEyebrow || "Biography"}
              title={ap.biographyTitle || "A Consultant Who Understands Both Sides of the Process"}
            />
            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-muted-ink">
              <Reveal>
                <p>{ap.p1}</p>
              </Reveal>
              <Reveal delay={100}>
                <p>{ap.p2}</p>
              </Reveal>
            </div>
            <Reveal delay={150}>
              <div className="mt-7 flex flex-wrap gap-2">
                {(t.aboutPreview?.tags || ABOUT_TAGS).map((tag) => (
                  <span key={tag} className="rounded-full border border-border bg-cream px-3.5 py-1.5 text-[13px] font-medium text-ink">
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-border bg-cream p-7">
              <h3 className="font-heading text-lg font-semibold text-ink">{ap.summaryTitle || "Experience Summary"}</h3>
              <dl className="mt-5 space-y-4">
                <div className="flex items-baseline justify-between border-b border-border pb-3">
                  <dt className="text-[14px] text-muted-ink">{ap.summaryYears || "Years of UAE setup experience"}</dt>
                  <dd className="font-heading text-xl font-bold text-navy [direction:ltr]">5+</dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-border pb-3">
                  <dt className="text-[14px] text-muted-ink">{ap.summaryCompanies || "Companies supported"}</dt>
                  <dd className="font-heading text-xl font-bold text-navy [direction:ltr]">500+</dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-border pb-3">
                  <dt className="text-[14px] text-muted-ink">{ap.summaryJurisdictions || "Jurisdictions covered"}</dt>
                  <dd className="font-heading text-xl font-bold text-navy">{ap.summaryJurisdictionsVal || "Mainland & Free Zone"}</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="text-[14px] text-muted-ink">{ap.summaryRecognition || "Recognition"}</dt>
                  <dd className="font-heading text-xl font-bold text-navy">DET, 2025</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-24">
        <div className="container-wide">
          <SectionHeading eyebrow={ap.approachEyebrow || "Working Approach"} title={ap.approachTitle || "Direct, Personal, and Structured"} />
          <Reveal delay={100}>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {approachList.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-success" strokeWidth={2} />
                  <span className="text-[15px] text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-card py-16 lg:py-24">
        <div className="container-wide">
          <SectionHeading eyebrow={ap.valuesEyebrow || "Core Values"} title={ap.valuesTitle || "The Principles Behind Every Engagement"} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valuesList.map((v, i) => (
              <Reveal key={v.title} delay={i * 60} className="rounded-2xl border border-border bg-cream p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-gold ring-1 ring-gold/30">
                  {v.icon && <v.icon className="h-5 w-5" strokeWidth={1.5} />}
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-ink">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={ap.ctaTitle || "Let's Map Out Your UAE Setup"}
        text={ap.ctaText || "Book a free consultation and receive a clear, practical plan tailored to your business goals."}
        primaryLabel={ap.ctaButton || "Book Your Free Consultation"}
      />
    </>
  );
}