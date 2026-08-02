import SEO from "@/components/seo/SEO";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { SITE } from "@/lib/siteConfig";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const SECTIONS = [
  {
    title: "Information We Collect",
    body: "When you submit a consultation request, we collect your full name, email address, phone number (including country code), country of residence, preferred contact method, the service you are interested in, and any optional details you choose to share such as business activity, shareholder and visa counts, timeline, budget, and your message.",
  },
  {
    title: "Purpose of Processing",
    body: "Your information is used solely to review your inquiry, respond to your request, and provide relevant business setup guidance. We do not use your data for unrelated marketing without your consent.",
  },
  {
    title: "Communication Channels",
    body: "By submitting the form, you agree that Ibrahim Setup may contact you by phone, email, or WhatsApp, based on your selected preferred contact method and consent preferences.",
  },
  {
    title: "Data Security",
    body: "Consultation inquiries are stored securely using access controls that prevent public access. Only authorized administrators can view, search, update, or delete submitted inquiries. Submitted records are never exposed through public APIs.",
  },
  {
    title: "Data Retention",
    body: "We retain inquiry information for as long as necessary to respond to your request and for reasonable record-keeping. You may request deletion of your data at any time by contacting us.",
  },
  {
    title: "Service Providers",
    body: "We rely on trusted platform and hosting providers to store and process inquiry data. These providers act under appropriate data-processing obligations and do not use your data for their own purposes.",
  },
  {
    title: "Your Rights",
    body: "You have the right to request access to, correction of, or deletion of your personal information. To exercise any of these rights, contact us using the details below.",
  },
  {
    title: "Cookies and Analytics",
    body: "This website may use basic cookies and analytics to understand usage and improve the experience. We do not use cookies to sell your data to third parties.",
  },
  {
    title: "Policy Updates",
    body: "We may update this privacy policy from time to time. Changes will be posted on this page with the updated date.",
  },
];

export default function PrivacyPolicy() {
  const { t, locale } = useLanguage();
  const pp = t.privacyPage || {};

  return (
    <>
      <SEO
        title="Privacy Policy | Ibrahim Setup"
        description="Privacy policy for Ibrahim Setup, covering how consultation inquiries are collected, used, protected, and retained."
        path="/privacy-policy"
      />
      <section className="bg-cream pt-28 lg:pt-32">
        <div className="container-wide">
          <Breadcrumbs items={[{ labelKey: "privacyPolicy", label: "Privacy Policy" }]} />
          <div className="max-w-3xl pb-12">
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              {pp.eyebrow || "Legal"}
            </span>
            <h1 className="heading-lg mt-4">{pp.title || "Privacy Policy"}</h1>
            <p className="body-lg mt-5">
              {pp.intro || "This page explains how Ibrahim Setup handles information collected through the consultation form. This is general website privacy wording and should be legally reviewed before final commercial publication."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-16 lg:pb-24">
        <div className="container-wide max-w-3xl">
          <div className="space-y-8">
            {SECTIONS.map((s, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6 sm:p-7">
                <h2 className="font-heading text-lg font-semibold text-ink">{i + 1}. {s.title}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-ink">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-gold/30 bg-card p-6 sm:p-7">
            <h2 className="font-heading text-lg font-semibold text-ink">{pp.contactTitle || "Contact Information"}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-ink">
              {pp.contactText || "For any privacy-related questions or requests, contact Ibrahim Setup:"}
            </p>
            <ul className="mt-3 space-y-1.5 text-[15px] text-ink">
              <li>Email: <a href={`mailto:${SITE.email}`} className="font-medium text-blue hover:text-navy">{SITE.email}</a></li>
              <li>Phone: <a href={`tel:${SITE.phoneTel}`} className="font-medium text-blue hover:text-navy">{SITE.phoneDisplay}</a></li>
              <li>Location: {SITE.location}</li>
            </ul>
          </div>

          <p className="mt-8 text-[13px] text-muted-ink">
            {pp.lastUpdated || "Last updated:"} {new Date().toLocaleDateString(locale === "ar" ? "ar-AE" : "en-GB", { year: "numeric", month: "long" })}.
          </p>
        </div>
      </section>
    </>
  );
}