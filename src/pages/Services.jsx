import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Users, FileText, AlertCircle, ArrowRight } from "lucide-react";
import SEO from "@/components/seo/SEO";
import JsonLd from "@/components/seo/JsonLd";
import { SITE } from "@/lib/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import CTABanner from "@/components/ui/CTABanner";
import { DETAILED_SERVICES } from "@/lib/servicesData";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function ServiceBlock({ service, index }) {
  const { t } = useLanguage();
  const sp = t.servicesPage || {};

  return (
    <Reveal delay={(index % 2) * 60} className="scroll-mt-28 rounded-2xl border border-border bg-card p-7 sm:p-8">
      <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-gold">
        {service.category}
      </span>
      <h3 className="mt-2 font-heading text-2xl font-semibold text-ink">{service.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-ink">{service.description}</p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <h4 className="flex items-center gap-2 text-[14px] font-semibold text-ink">
            <Check className="h-4 w-4 text-success" strokeWidth={2.5} />
            {sp.commonInclusions || "Common Inclusions"}
          </h4>
          <ul className="mt-3 space-y-2">
            {service.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2 text-[14px] text-muted-ink">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="flex items-center gap-2 text-[14px] font-semibold text-ink">
            <Users className="h-4 w-4 text-blue" />
            {sp.suitableFor || "Suitable For"}
          </h4>
          <p className="mt-3 text-[14px] leading-relaxed text-muted-ink">{service.suitableFor}</p>
          <h4 className="mt-5 flex items-center gap-2 text-[14px] font-semibold text-ink">
            <AlertCircle className="h-4 w-4 text-gold" />
            {sp.importantNote || "Important Note"}
          </h4>
          <p className="mt-3 text-[14px] leading-relaxed text-muted-ink">{service.note}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Services() {
  const [active, setActive] = useState(DETAILED_SERVICES[0].id);
  const { t } = useLanguage();
  const sp = t.servicesPage || {};

  return (
    <>
      <SEO
        title="UAE Business Setup Services & Company Formation | Ibrahim Setup"
        description="Full-service UAE company formation: mainland and free zone trade licences, offshore registration, investor and employment visas, corporate banking, corporate tax and VAT registration, PRO services, and ongoing compliance."
        path="/services"
      />
      <JsonLd
        id="services-list"
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "UAE Business Setup Services",
          itemListElement: DETAILED_SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title,
              description: s.description,
              serviceType: s.category,
              areaServed: { "@type": "Country", name: "United Arab Emirates" },
              provider: { "@type": "ProfessionalService", name: SITE.brand },
              url: `${SITE.baseUrl}/services#${s.id}`,
            },
          })),
        }}
      />
      <section className="bg-cream pt-28 lg:pt-32">
        <div className="container-wide">
          <Breadcrumbs items={[{ labelKey: "services", label: "Services" }]} />
          <div className="max-w-3xl pb-14">
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              {sp.eyebrow || "Services"}
            </span>
            <h1 className="heading-lg mt-4 text-balance">
              {sp.title || "UAE Company Formation & Business Setup Services"}
            </h1>
            <p className="body-lg mt-5">
              {sp.intro || "End-to-end support for registering, running, and growing a company in the UAE — from choosing between a mainland and free zone jurisdiction, through trade licence issuance, residence visas, and corporate banking, to the tax registration and renewal deadlines that follow."}
            </p>
            <Link
              to="/consultation"
              className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-gold px-7 font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg focus-ring"
            >
              {sp.requestEstimate || "Request a Personalized Estimate"}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Category quick nav */}
      <section className="sticky top-16 z-30 border-y border-border bg-card/95 backdrop-blur-md lg:top-20">
        <div className="container-wide flex gap-2 overflow-x-auto py-3">
          {DETAILED_SERVICES.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setActive(s.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-[13px] font-medium transition-colors focus-ring ${
                active === s.id ? "bg-navy text-white" : "text-muted-ink hover:bg-muted"
              }`}
            >
              {s.title}
            </a>
          ))}
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <div className="container-wide space-y-8">
          {DETAILED_SERVICES.map((service, i) => (
            <div key={service.id} id={service.id}>
              <ServiceBlock service={service} index={i} />
              {(i + 1) % 4 === 0 && i !== DETAILED_SERVICES.length - 1 && (
                <div className="mt-8">
                  <CTABanner
                    title={sp.notSureTitle || "Not Sure Which Service Fits?"}
                    text={sp.notSureText || "Book a free consultation and Ibrahim will recommend the right approach for your business."}
                    primaryLabel={t.hero?.bookConsultation || "Book Your Free Consultation"}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card py-16 lg:py-20">
        <div className="container-wide max-w-2xl text-center">
          <FileText className="mx-auto h-10 w-10 text-gold" strokeWidth={1.5} />
          <h2 className="heading-md mt-4">{sp.estimateTitle || "Request a Personalized Estimate"}</h2>
          <p className="body-lg mt-4">
            {sp.estimateText || "Setup costs vary based on jurisdiction, activities, visa needs, and facilities. Share your requirements and receive a tailored estimate — no fixed prices are published, because every business is different."}
          </p>
          <Link
            to="/consultation"
            className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-navy px-7 font-semibold text-white transition-all hover:bg-navy-secondary hover:shadow-lg focus-ring"
          >
            {sp.estimateButton || "Request Your Estimate"}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </>
  );
}