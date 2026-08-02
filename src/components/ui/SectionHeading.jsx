import Reveal from "@/components/ui/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-start";
  return (
    <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
      <div className={alignment}>
        {eyebrow && (
          <span className={`eyebrow ${light ? "!text-gold-light" : ""}`}>
            <span className="h-px w-6 bg-current opacity-60" />
            {eyebrow}
          </span>
        )}
        <h2
          className={`heading-lg mt-4 ${light ? "!text-white" : ""}`}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={`body-lg mt-5 ${light ? "!text-white/75" : ""}`}
          >
            {intro}
          </p>
        )}
      </div>
    </Reveal>
  );
}