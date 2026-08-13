import { Link } from "react-router-dom";
import { ExternalLink, ChefHat, ShieldCheck, Store, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const spring = { type: "spring", stiffness: 400, damping: 28 };
const features = [
  [ChefHat, "Food-business activity & licence guidance"],
  [ShieldCheck, "Municipality and safety approvals"],
  [Store, "Kitchen location and operational setup"],
  [Truck, "Delivery-platform readiness"],
];

export default function CloudKitchenAuthority() {
  const { t } = useLanguage();
  const c = t.cloudKitchen;

  return (
    <section className="bg-gradient-to-br from-[#073D46] via-[#0B5964] to-[#0A6971] py-20 text-white lg:py-28">
      <div className="container-wide">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-200 backdrop-blur-md">
              <ChefHat className="h-4 w-4" /> Cloud Kitchen Specialist
            </span>
            <h2 className="heading-lg mt-4 max-w-2xl text-white">Specialist Cloud Kitchen & Food-Business Setup</h2>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/75 sm:text-base">
              Ibrahim combines business-setup knowledge with real food-business experience to help founders move from licence to operation with fewer unknowns.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={c?.cksUrl || "https://cloudkitchensetup.com/"}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex h-11 items-center gap-2 rounded-full bg-emerald-300 px-5 text-sm font-bold text-[#073D46] transition hover:-translate-y-0.5"
              >
                Visit Cloud Kitchen Setup <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                to="/consultation"
                className="focus-ring inline-flex h-11 items-center rounded-full border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
              >
                Book Consultation
              </Link>
            </div>
          </div>

          <motion.div
            whileHover={{ y: -4 }}
            transition={spring}
            className="rounded-[28px] border border-white/15 bg-white/8 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl"
          >
            <img src="/images/brand/cks-logo.svg" alt="Cloud Kitchen Setup" className="h-12 w-auto object-contain" />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {features.map(([Icon, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/7 p-4">
                  <Icon className="h-5 w-5 text-emerald-300" />
                  <p className="mt-3 text-sm font-medium leading-6 text-white/85">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
