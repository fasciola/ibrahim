import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, Building2, Utensils } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const spring = { type: "spring", stiffness: 400, damping: 28 };

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: spring },
};

const EN_HERO_TITLE = "Start Your Dubai Mainland Company with Expert Guidance";
const EN_HERO_DESCRIPTION =
  "Set up your Dubai Mainland company with practical guidance from Ibrahim, a business-setup specialist with experience supporting licensing services within Dubai’s economic department. From activity selection and legal structure to approvals, visas, office solutions and banking support, Ibrahim helps you move through each step with clarity and compliance.";

function HighlightedDescription({ text }) {
  if (!text) return null;

  const phrase = "within Dubai’s economic department";
  const index = text.toLowerCase().indexOf(phrase.toLowerCase());

  if (index === -1) return text;

  const before = text.slice(0, index);
  const match = text.slice(index, index + phrase.length);
  const after = text.slice(index + phrase.length);

  return (
    <>
      {before}
      <span className="rounded-md bg-emerald-100/80 px-1.5 py-0.5 font-semibold text-[#0B5964] ring-1 ring-inset ring-emerald-200/80">
        {match}
      </span>
      {after}
    </>
  );
}

export default function Hero() {
  const { t, dir, locale } = useLanguage();
  const h = t.hero;
  const heroTitle = locale === "en" ? EN_HERO_TITLE : h?.title;
  const heroDescription = locale === "en" ? EN_HERO_DESCRIPTION : h?.description;

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-white pt-24 pb-6 sm:pt-28 sm:pb-8 lg:pt-24 lg:pb-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-24 top-8 h-72 w-72 rounded-full bg-emerald-200/35 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-cyan-100/40 blur-3xl" />
        <div className="absolute inset-x-6 top-24 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-slate-200/80 to-transparent" />
      </div>

      <motion.div
        className="container-wide relative z-10 grid w-full items-center gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(300px,0.88fr)] lg:gap-10 xl:gap-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div>
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_rgba(15,23,42,0.05)] backdrop-blur-xl sm:text-[11px]">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.12)]" />
              {h?.eyebrow || "DUBAI MAINLAND BUSINESS SETUP SPECIALIST"}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-4 max-w-4xl text-balance font-heading text-[clamp(2.3rem,4.4vw,4.65rem)] font-bold leading-[0.94] tracking-[-0.052em] text-slate-900"
          >
            {heroTitle || "Set Up Your Business in Dubai With Practical, First-Hand Guidance"}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 max-w-3xl text-[14px] leading-6 text-slate-600 sm:text-[15px] sm:leading-7 xl:max-w-2xl"
          >
            <HighlightedDescription text={heroDescription} />
          </motion.p>

          <motion.div variants={item} className="mt-5 flex flex-wrap gap-3">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={spring}>
              <Link
                to="/consultation"
                className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0B5964] px-5 text-sm font-bold text-white shadow-[0_1px_2px_rgba(11,89,100,0.18),0_10px_28px_rgba(11,89,100,0.22)] transition-colors hover:bg-[#084752]"
              >
                <span>{h?.bookConsultation || "Book Consultation"}</span>
                <ArrowRight className={`h-4 w-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={spring}>
              <Link
                to="/services"
                className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white/85 px-5 text-sm font-bold text-slate-800 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_20px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-colors hover:bg-slate-50"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-semibold text-slate-700 sm:text-[12px]">
            <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-emerald-500" /> Former DED Experience</span>
            <span className="inline-flex items-center gap-2"><Building2 className="h-4 w-4 text-emerald-500" /> Dubai Mainland Specialist</span>
            <span className="inline-flex items-center gap-2"><Utensils className="h-4 w-4 text-emerald-500" /> Cloud Kitchen Setup Expert</span>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          whileHover={{ y: -4 }}
          transition={spring}
          className="relative overflow-hidden rounded-[26px] border border-white/70 bg-white/78 p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_30px_rgba(15,23,42,0.08),0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:p-5"
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent" />
          <div className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#0B5964] sm:text-[10px]">PERSONAL BUSINESS SETUP SUPPORT</div>
          <h2 className="mt-2 text-xl font-bold leading-tight tracking-[-0.03em] text-slate-900 sm:text-2xl">Ready to start your business?</h2>
          <p className="mt-2 text-[13px] leading-5 text-slate-600 sm:text-sm sm:leading-6">Speak directly with Ibrahim and get clear guidance on the right setup, approvals and next steps.</p>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {["Dubai Mainland", "Company Formation", "Cloud Kitchen Setup", "Approvals & Licensing"].map((label) => (
              <div key={label} className="rounded-full border border-slate-200/80 bg-slate-50/80 px-3 py-2.5 text-[11px] font-semibold text-slate-600 shadow-inner sm:px-4 sm:text-xs">
                {label}
              </div>
            ))}
          </div>

          <motion.div whileTap={{ scale: 0.97 }} transition={spring} className="mt-4">
            <Link
              to="/consultation"
              className="focus-ring inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#0B5964] px-5 text-sm font-bold text-white shadow-[0_1px_2px_rgba(11,89,100,0.16),0_10px_24px_rgba(11,89,100,0.18)] transition-colors hover:bg-[#084752]"
            >
              Book a Consultation
              <ArrowRight className={`h-4 w-4 ${dir === "rtl" ? "rotate-180" : ""}`} />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
