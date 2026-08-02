import { Link, useLocation } from "react-router-dom";
import { CheckCircle2, MessageCircle, Home, ArrowRight } from "lucide-react";
import SEO from "@/components/seo/SEO";
import { consultationWhatsappLink } from "@/lib/siteConfig";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ThankYou() {
  const { state } = useLocation();
  const reference = state?.reference;
  const { t } = useLanguage();
  const typ = t.thankYouPage || {};

  return (
    <>
      <SEO
        title="Thank You | Ibrahim Setup"
        description="Your consultation request has been received. Ibrahim will review your information and contact you using your preferred method."
        path="/thank-you"
        noindex
      />
      <section className="flex min-h-[70vh] items-center bg-cream pt-28 lg:pt-32">
        <div className="container-wide">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10 ring-1 ring-success/30">
              <CheckCircle2 className="h-9 w-9 text-success" strokeWidth={1.5} />
            </div>
            <h1 className="heading-md mt-6 text-balance">
              {typ.title || "Thank You — Your Consultation Request Has Been Received"}
            </h1>
            <p className="body-lg mt-4">
              {typ.text || "Ibrahim will review your information and contact you using your preferred communication method."}
            </p>
            {reference && (
              <div className="mt-6 inline-block rounded-xl border border-border bg-card px-6 py-4">
                <span className="text-[13px] font-medium uppercase tracking-wide text-muted-ink">
                  {typ.referenceLabel || "Your reference number"}
                </span>
                <div className="mt-1 font-heading text-2xl font-bold text-navy [direction:ltr]">{reference}</div>
              </div>
            )}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={consultationWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 font-semibold text-white transition-all hover:brightness-105 focus-ring sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                {typ.chatWhatsApp || "Chat on WhatsApp"}
              </a>
              <Link
                to="/services"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-navy/15 bg-card px-7 font-semibold text-navy transition-all hover:border-gold focus-ring sm:w-auto"
              >
                {typ.exploreServices || "Explore Services"}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
              <Link
                to="/"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-navy px-7 font-semibold text-white transition-all hover:bg-navy-secondary focus-ring sm:w-auto"
              >
                <Home className="h-4 w-4" />
                {typ.returnHome || "Return to Home"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}