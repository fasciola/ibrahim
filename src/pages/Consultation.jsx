import { Phone, MessageCircle, Mail, Clock, ShieldCheck } from "lucide-react";
import SEO from "@/components/seo/SEO";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import ConsultationForm from "@/components/consultation/ConsultationForm";
import { SITE, whatsappLink } from "@/lib/siteConfig";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Consultation() {
  const { t } = useLanguage();
  const cp = t.consultationPage || {};

  return (
    <>
      <SEO
        title="Free UAE Company Formation Consultation | Ibrahim Setup"
        description="Book a free consultation with a UAE business setup expert in Dubai. Personalised guidance on mainland vs free zone company formation, trade licences, visas, corporate banking, and compliance."
        path="/consultation"
      />
      <section className="bg-cream pt-28 lg:pt-32">
        <div className="container-wide">
          <Breadcrumbs items={[{ labelKey: "consultation", label: "Free Consultation" }]} />
          <div className="max-w-3xl pb-12">
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              {cp.eyebrow || "Free Consultation"}
            </span>
            <h1 className="heading-lg mt-4 text-balance">{cp.title || "Book Your Free Consultation"}</h1>
            <p className="body-lg mt-5">
              {cp.intro || "Share a few details about your business goals and Ibrahim will personally review your request and respond using your preferred contact method — usually within 24 hours."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-16 lg:pb-24">
        <div className="container-wide grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-7 sm:p-8">
              <ConsultationForm sourcePage="Consultation Page" />
            </div>
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={100}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h2 className="font-heading text-lg font-semibold text-ink">{cp.preferToTalk || "Prefer to talk first?"}</h2>
                <p className="mt-2 text-[14px] text-muted-ink">
                  {cp.talkDesc || "You can also reach Ibrahim directly through any of these channels."}
                </p>
                <div className="mt-4 space-y-3">
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-border p-3.5 transition-colors hover:border-gold focus-ring">
                    <MessageCircle className="h-5 w-5 text-[#25D366]" />
                    <span className="text-[14px] font-medium text-ink">WhatsApp</span>
                  </a>
                  <a href={`tel:${SITE.phoneTel}`} className="flex items-center gap-3 rounded-lg border border-border p-3.5 transition-colors hover:border-gold focus-ring">
                    <Phone className="h-5 w-5 text-blue" />
                    <span className="text-[14px] font-medium text-ink">{SITE.phoneDisplay}</span>
                  </a>
                  <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 rounded-lg border border-border p-3.5 transition-colors hover:border-gold focus-ring">
                    <Mail className="h-5 w-5 text-gold" />
                    <span className="text-[14px] font-medium text-ink">{SITE.email}</span>
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-2xl border border-border bg-navy p-6 text-white">
                <Clock className="h-6 w-6 text-gold" />
                <h3 className="mt-3 font-heading text-lg font-semibold">{cp.avgResponseTitle || "Average response: 24 hours"}</h3>
                <p className="mt-2 text-[14px] text-white/70">
                  {cp.avgResponseText || "Every request is reviewed personally. You will receive a clear, practical response — not an automated reply."}
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-6">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <p className="text-[13px] leading-relaxed text-muted-ink">
                  {cp.privacyGuarantee || "Your details are stored securely and used only to respond to your inquiry. Public visitors can never access submitted inquiries."}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}