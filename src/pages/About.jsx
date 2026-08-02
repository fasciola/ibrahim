import { Link } from "react-router-dom";
import { ShieldCheck, Award, Briefcase, ExternalLink, ArrowRight } from "lucide-react";
import SEO from "@/components/seo/SEO";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import PortraitFrame from "@/components/ui/PortraitFrame";
import CTABanner from "@/components/ui/CTABanner";
import ComplianceDisclaimer from "@/components/ui/ComplianceDisclaimer";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function About() {
  const { t, dir } = useLanguage();
  const a = t.aboutAuthority;

  return (
    <>
      <SEO
        title="About Ibrahim | Dubai Mainland & Cloud Kitchen Setup Specialist"
        description="Learn about Ibrahim Mohamed Ali Ibrahim Idris, a Dubai Mainland business setup specialist with former DED experience and CEO of Cloud Kitchen Setup (CKS)."
        path="/about"
      />
      <section className="bg-cream pt-28 lg:pt-32">
        <div className="container-wide">
          <Breadcrumbs items={[{ labelKey: "about", label: "About Ibrahim" }]} />
          <div className="grid items-center gap-12 pb-16 lg:grid-cols-2 lg:pb-20">
            <div>
              <span className="eyebrow">
                <span className="h-px w-6 bg-current opacity-60" />
                {a?.profileRole || "Dubai Mainland Specialist"}
              </span>
              <h1 className="heading-lg mt-4 text-balance text-navy">
                {a?.heading || "Government-Process Knowledge. Real Business Experience."}
              </h1>
              <p className="body-lg mt-5 text-muted-ink leading-relaxed">
                {a?.p1}
              </p>
              <p className="body-lg mt-3 text-muted-ink leading-relaxed">
                {a?.p2}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-card px-4 py-2 text-xs font-semibold text-navy">
                  <Briefcase className="h-4 w-4 text-gold" />
                  {a?.profileTag1 || "Owner & CEO — Cloud Kitchen Setup"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-card px-4 py-2 text-xs font-semibold text-navy">
                  <Award className="h-4 w-4 text-gold" />
                  {a?.profileTag2 || "Former DED Licensing Experience"}
                </span>
              </div>
            </div>

            <Reveal delay={100} className="flex justify-center lg:justify-end">
              <PortraitFrame size="lg" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 lg:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="PROFESSIONAL BACKGROUND"
              title="A Consultant Who Understands Both Sides of the Process"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-ink">
              <p>
                Ibrahim’s previous professional experience within Dubai’s economic licensing environment provided direct exposure to commercial activities, legal structures, documentation requirements, and procedural challenges.
              </p>
              <p>
                As the owner and CEO of Cloud Kitchen Setup (CKS), he also operates a specialist platform supporting delivery-first restaurants and food concepts in Dubai. This unique combination allows clients to benefit from both administrative process insight and real business ownership experience.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-cream p-7 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-navy">Profile &amp; Credentials</h3>
              <dl className="mt-5 space-y-4">
                <div className="flex items-baseline justify-between border-b border-border pb-3">
                  <dt className="text-xs font-semibold text-muted-ink">Full Name</dt>
                  <dd className="font-heading text-sm font-bold text-navy">Ibrahim Mohamed Ali Ibrahim Idris</dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-border pb-3">
                  <dt className="text-xs font-semibold text-muted-ink">Specialisation</dt>
                  <dd className="font-heading text-sm font-bold text-navy">Dubai Mainland Setup</dd>
                </div>
                <div className="flex items-baseline justify-between border-b border-border pb-3">
                  <dt className="text-xs font-semibold text-muted-ink">Business Ownership</dt>
                  <dd className="font-heading text-sm font-bold text-navy">Owner &amp; CEO — CKS</dd>
                </div>
                <div className="flex items-baseline justify-between">
                  <dt className="text-xs font-semibold text-muted-ink">Licensing Background</dt>
                  <dd className="font-heading text-sm font-bold text-navy">Former DED Experience</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <ComplianceDisclaimer />

      <CTABanner
        title="Ready to Discuss Your Business Plan?"
        text="Book a direct consultation for practical advice on Dubai Mainland company setup and food business licensing."
        primaryLabel="Book a Dubai Mainland Consultation"
      />
    </>
  );
}