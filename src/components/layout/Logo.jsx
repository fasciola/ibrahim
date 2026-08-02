import BrandEmblem, { BRAND_ALT } from "@/components/ui/BrandEmblem";

/**
 * Horizontal lockup for the header and footer: the circular emblem from the
 * brand asset, paired with live text. The wordmark baked into the source image
 * is unreadable at header height, so it is cropped out and re-set in type.
 */
export default function Logo({ variant = "header", className = "" }) {
  const isFooter = variant === "footer";

  return (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
      role="img"
      aria-label={BRAND_ALT}
    >
      <BrandEmblem className="h-full" />

      <span className="leading-tight">
        <span
          className={`block whitespace-nowrap font-heading text-[15px] font-bold tracking-tight sm:text-[17px] ${
            isFooter ? "text-white" : "text-navy"
          }`}
        >
          IBRAHIM SETUP
        </span>
        <span
          className={`block whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.14em] sm:text-[10px] ${
            isFooter ? "text-gold-light" : "text-blue"
          }`}
        >
          UAE Business Setup Experts
        </span>
      </span>
    </span>
  );
}
