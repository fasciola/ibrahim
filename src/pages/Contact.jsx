import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { Image } from "@/components/ui/image";
import SEO from "@/components/seo/SEO";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Reveal from "@/components/ui/Reveal";
import ConsultationForm from "@/components/consultation/ConsultationForm";
import { SITE, whatsappLink } from "@/lib/siteConfig";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const SKYLINE = "https://media.base44.com/images/public/6a6d14210c14a6d36e8db707/3352c2693_generated_723f7302.png";

export default function Contact() {
  const { t } = useLanguage();
  const cp = t.contactPage || {};

  const methods = [
    {
      icon: Phone,
      label: cp.call || "Call",
      value: SITE.phoneDisplay,
      href: `tel:${SITE.phoneTel}`,
      accent: "text-blue",
    },
    {
      icon: MessageCircle,
      label: cp.whatsapp || "WhatsApp",
      value: cp.chatWithIbrahim || "Chat with Ibrahim",
      href: whatsappLink(),
      external: true,
      accent: "text-[#25D366]",
    },
    {
      icon: Mail,
      label: cp.email || "Email",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      accent: "text-gold",
    },
  ];

  return (
    <>
      <SEO
        title="Contact a UAE Business Setup Consultant | Ibrahim Setup"
        description="Speak to a UAE company formation consultant in Dubai. Free initial consultation by phone, WhatsApp, or email — mainland and free zone setup, trade licences, visas, and banking."
        path="/contact"
      />
      <section className="bg-cream pt-28 lg:pt-32">
        <div className="container-wide">
          <Breadcrumbs items={[{ labelKey: "contact", label: "Contact" }]} />
          <div className="max-w-3xl pb-12">
            <span className="eyebrow">
              <span className="h-px w-6 bg-current opacity-60" />
              {cp.eyebrow || "Contact"}
            </span>
            <h1 className="heading-lg mt-4 text-balance">{cp.title || "Let's Talk About Your UAE Business"}</h1>
            <p className="body-lg mt-5">
              {cp.intro || "Reach out by phone, WhatsApp, or email — or submit a consultation request and Ibrahim will respond using your preferred method."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-16 lg:pb-24">
        <div className="container-wide grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {methods.map((m) => (
                  <a
                    key={m.label}
                    href={m.href}
                    target={m.external ? "_blank" : undefined}
                    rel={m.external ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-gold hover:shadow-md focus-ring"
                  >
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-muted ${m.accent}`}>
                      <m.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[13px] font-medium uppercase tracking-wide text-muted-ink">{m.label}</div>
                      <div className="text-[15px] font-semibold text-ink">{m.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <div className="relative h-48 sm:h-56">
                  <Image
                    src={SKYLINE}
                    alt="Dubai skyline at dawn"
                    fittingType="fill"
                    className="h-full w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-4 left-5 rtl:right-5 rtl:left-auto flex items-center gap-2 text-white">
                    <MapPin className="h-5 w-5 text-gold" />
                    <div>
                      <div className="font-heading text-[15px] font-semibold">{cp.dubaiLocation || "Dubai, UAE"}</div>
                      <div className="text-[13px] text-white/75">{cp.locationDesc || "Serving clients across Dubai and the wider UAE"}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-border bg-card p-7 sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-ink">{cp.formTitle || "Send a Consultation Request"}</h2>
              <p className="mt-2 text-[14px] text-muted-ink">
                {cp.formSubtitle || "Fill in the form below and Ibrahim will get back to you promptly."}
              </p>
              <div className="mt-6">
                <ConsultationForm sourcePage="Contact Page" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}