import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/siteConfig";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import Logo from "@/components/layout/Logo";

const spring = { type: "spring", stiffness: 400, damping: 28 };

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

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = !isHome || scrolled || open;
  const isActive = (to) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  const mobileDrawer = (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[200] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            className="absolute inset-0 bg-slate-950/28 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          />
          <motion.div
            className="absolute end-0 top-0 flex h-full w-[86%] max-w-sm flex-col border-s border-white/70 bg-white/92 shadow-[0_20px_80px_rgba(15,23,42,0.18)] backdrop-blur-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={spring}
          >
            <div className="flex h-16 items-center justify-between border-b border-slate-200/70 px-5">
              <Logo className="h-9" />
              <motion.button
                type="button"
                onClick={() => setOpen(false)}
                whileTap={{ scale: 0.97 }}
                whileHover={{ y: -1 }}
                transition={spring}
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl text-slate-800 transition-colors hover:bg-slate-100"
                aria-label={t.header.closeMenu}
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>

            <motion.nav
              className="flex flex-col gap-1.5 p-4"
              aria-label="Mobile navigation"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } } }}
            >
              {navLinks.map((link) => (
                <motion.div key={link.to} variants={{ hidden: { opacity: 0, x: 12 }, show: { opacity: 1, x: 0, transition: spring } }}>
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`focus-ring block rounded-xl px-4 py-3 text-[15px] font-semibold transition-colors ${
                      isActive(link.to) ? "bg-[#0B5964] text-white shadow-sm" : "text-slate-800 hover:bg-slate-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={{ hidden: { opacity: 0, x: 12 }, show: { opacity: 1, x: 0, transition: spring } }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/consultation"
                  onClick={() => setOpen(false)}
                  className="focus-ring mt-2 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#0B5964] px-5 text-[15px] font-bold text-white shadow-[0_8px_24px_rgba(11,89,100,0.18)]"
                >
                  {t.header.freeConsultation}
                </Link>
              </motion.div>
            </motion.nav>

            <div className="mt-auto space-y-2 border-t border-slate-200/70 p-4">
              <div className="flex items-center justify-between px-3 py-2">
                <LanguageSwitcher onAfterChange={() => setOpen(false)} />
              </div>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="focus-ring flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100">
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                {t.header.chatWhatsApp}
              </a>
              <a href={`tel:${SITE.phoneTel}`} className="focus-ring flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100">
                <Phone className="h-5 w-5 text-[#0B5964]" />
                {SITE.phoneDisplay}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4"
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={spring}
      >
        <motion.div
          layout
          transition={spring}
          className={`container-wide flex h-16 items-center justify-between rounded-2xl border px-4 sm:px-5 lg:h-[72px] ${
            solid
              ? "border-white/80 bg-white/88 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-2xl"
              : "border-white/65 bg-white/72 shadow-[0_1px_2px_rgba(15,23,42,0.03),0_6px_20px_rgba(15,23,42,0.05)] backdrop-blur-xl"
          }`}
        >
          <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }} transition={spring}>
            <Link to="/" className="focus-ring flex items-center rounded-lg" aria-label="Ibrahim Setup home">
              <Logo className="h-10 lg:h-11" />
            </Link>
          </motion.div>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <motion.div key={link.to} whileHover={{ y: -1 }} transition={spring} className="relative">
                <Link
                  to={link.to}
                  className={`focus-ring relative block rounded-lg px-2.5 py-2 text-[13px] font-semibold whitespace-nowrap transition-colors xl:px-3 ${
                    isActive(link.to) ? "text-[#0B5964]" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-emerald-400 xl:inset-x-3"
                      transition={spring}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher className="hidden sm:block" />
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={spring}>
              <Link
                to="/consultation"
                className="focus-ring hidden h-11 items-center rounded-full bg-[#0B5964] px-5 text-[14px] font-bold text-white shadow-[0_1px_2px_rgba(11,89,100,0.14),0_8px_24px_rgba(11,89,100,0.18)] transition-colors hover:bg-[#084752] sm:inline-flex"
              >
                {t.header.freeConsultation}
              </Link>
            </motion.div>
            <motion.button
              type="button"
              onClick={() => setOpen(true)}
              whileTap={{ scale: 0.97 }}
              whileHover={{ y: -1 }}
              transition={spring}
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl text-slate-800 transition-colors hover:bg-slate-100 lg:hidden"
              aria-label={t.header.openMenu}
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </motion.header>
      {createPortal(mobileDrawer, document.body)}
    </>
  );
}
