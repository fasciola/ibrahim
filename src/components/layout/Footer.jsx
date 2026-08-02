import { Link } from "react-router-dom";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/siteConfig";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Disclaimer from "@/components/ui/Disclaimer";
import Logo from "@/components/layout/Logo";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const navLinks = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.dubaiMainland || "Dubai Mainland", to: "/services/dubai-mainland-company-formation" },
    { label: t.nav.cloudKitchens || "Cloud Kitchens", to: "/services/cloud-kitchen-setup" },
    { label: t.nav.services, to: "/services" },
    { label: t.nav.about, to: "/about" },
    { label: t.nav.faq, to: "/faq" },
    { label: t.nav.contact, to: "/contact" },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container-wide py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="footer" className="h-12" />
            <p className="mt-4 text-[14px] leading-relaxed text-white/65">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-[15px] font-semibold uppercase tracking-[0.12em] text-gold-light">
              {t.footer.navigate}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[14px] text-white/75 transition-colors hover:text-gold-light focus-ring"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-[15px] font-semibold uppercase tracking-[0.12em] text-gold-light">
              {t.footer.services}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {t.footer.serviceLinks.map((label, i) => (
                <li key={i}>
                  <Link
                    to="/services"
                    className="text-[14px] text-white/75 transition-colors hover:text-gold-light focus-ring"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-[15px] font-semibold uppercase tracking-[0.12em] text-gold-light">
              {t.footer.contact}
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-[14px] text-white/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {SITE.location}
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="flex items-center gap-2.5 text-[14px] text-white/75 transition-colors hover:text-gold-light focus-ring"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2.5 text-[14px] text-white/75 transition-colors hover:text-gold-light focus-ring"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[14px] text-white/75 transition-colors hover:text-gold-light focus-ring"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-[#25D366]" />
                  {t.footer.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <Disclaimer light />
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-[13px] text-white/55">
            &copy; {year} {t.footer.copyright}
          </p>
          <Link
            to="/privacy-policy"
            className="text-[13px] text-white/75 transition-colors hover:text-gold-light focus-ring"
          >
            {t.footer.privacyPolicy}
          </Link>
        </div>
      </div>
    </footer>
  );
}