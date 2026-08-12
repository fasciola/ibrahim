import { motion } from "framer-motion";

const spring = { type: "spring", stiffness: 400, damping: 28 };

export default function ImageShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-12 lg:py-16" aria-label="Ibrahim business setup consultation visual">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-64 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100/45 blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          whileHover={{ y: -4 }}
          transition={spring}
          className="relative flex min-h-[240px] items-center justify-center overflow-hidden rounded-[28px] border border-slate-200/70 bg-gradient-to-b from-white to-slate-50/60 p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_14px_34px_rgba(15,23,42,0.07),0_36px_90px_rgba(15,23,42,0.06)] sm:min-h-[320px] sm:p-5 lg:min-h-[420px] lg:p-6"
        >
          <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent" />
          <motion.img
            src="/images/ChatGPT Image Aug 12, 2026, 09_15_52 PM.png"
            alt="Ibrahim business setup consultation"
            className="block max-h-[680px] w-full object-contain object-center"
            loading="eager"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ ...spring, delay: 0.08 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
