import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/siteConfig";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import Logo from "@/components/layout/Logo";

export default function Header() {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  const navLinks = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.dubaiMainland || "Dubai Mainland", to: "/services/dubai-mainland-company-formation" },
    { label: t.nav.cloudKitchens || "Cloud Kitchens", to: "/services/cloud-kitchen-setup" },
    { label: t.nav.services, to: "/services" },
    { label: t.nav.about, to: "/about" },
    { label: t.nav.faq, to: "/faq" },
    { label: t.nav.contact, to: "/contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !isHome || scrolled || open;
  const isActive = (to) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  const mobileDrawer = open ? (
    <div className="fixed inset-0 z-[200] lg:hidden">
      <div
        className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        className="absolute end-0 top-0 flex h-full w-[82%] max-w-sm flex-col shadow-2xl"
        style={{ backgroundColor: "hsl(43, 31%, 95%)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <Logo className="h-9" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy hover:bg-navy/5 focus-ring"
            aria-label={t.header.closeMenu}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-4 py-3.5 text-[16px] font-medium transition-colors focus-ring ${
                isActive(link.to)
                  ? "bg-navy text-white"
                  : "text-ink hover:bg-navy/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/consultation"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-gold px-5 text-[16px] font-semibold text-navy transition-colors hover:bg-gold-light focus-ring"
          >
            {t.header.freeConsultation}
          </Link>
        </nav>
        <div className="mt-auto space-y-3 border-t border-border p-4">
          <div className="flex items-center justify-between px-4">
            <LanguageSwitcher onAfterChange={() => setOpen(false)} />
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg px-4 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-navy/5 focus-ring"
          >
            <MessageCircle className="h-5 w-5 text-[#25D366]" />
            {t.header.chatWhatsApp}
          </a>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex items-center gap-3 rounded-lg px-4 py-3.5 text-[15px] font-medium text-ink transition-colors hover:bg-navy/5 focus-ring"
          >
            <Phone className="h-5 w-5 text-blue" />
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? "bg-cream/95 shadow-[0_1px_0_rgba(7,26,43,0.06)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container-wide flex h-16 items-center justify-between lg:h-20">
          <Link to="/" className="flex items-center focus-ring rounded-md" aria-label="Ibrahim Setup home">
            <Logo className="h-10 lg:h-12" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative rounded-md px-3.5 py-2 text-[15px] font-medium transition-colors focus-ring ${
                  isActive(link.to)
                    ? "text-navy"
                    : solid
                    ? "text-muted-ink hover:text-navy"
                    : "text-ink hover:text-navy"
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gold" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher className="hidden sm:block" />
            <Link
              to="/consultation"
              className="hidden h-11 items-center rounded-full bg-navy px-5 text-[15px] font-semibold text-white transition-all hover:bg-navy-secondary hover:shadow-lg sm:inline-flex lg:bg-gold lg:text-navy lg:hover:bg-gold-light focus-ring"
            >
              {t.header.freeConsultation}
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy transition-colors hover:bg-navy/5 focus-ring lg:hidden"
              aria-label={t.header.openMenu}
              aria-expanded={open}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      {createPortal(mobileDrawer, document.body)}
    </>
  );
}