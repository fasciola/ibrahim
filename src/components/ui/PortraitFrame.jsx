import { Image } from "@/components/ui/image";
import BrandEmblem, { BRAND_ALT } from "@/components/ui/BrandEmblem";

export default function PortraitFrame({
  src,
  alt = "Ibrahim, UAE business setup consultant in Dubai.",
  className = "",
  size = "lg",
}) {
  const sizeClass =
    size === "lg"
      ? "w-64 h-64 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem]"
      : "w-40 h-40 sm:w-48 sm:h-48";

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 -m-3 rounded-full bg-radial-gold" aria-hidden="true" />
      <div
        className={`relative ${sizeClass} rounded-full p-[3px] bg-gradient-to-br from-gold via-gold-light to-gold shadow-[0_24px_60px_-20px_rgba(7,26,43,0.45)]`}
      >
        <div className="h-full w-full rounded-full overflow-hidden bg-navy ring-1 ring-navy-secondary">
          {src ? (
            <Image
              src={src}
              alt={alt}
              fittingType="fill"
              className="h-full w-full"
            />
          ) : (
            // No portrait supplied — show the brand emblem rather than an
            // "IS" text placeholder.
            <BrandEmblem
              className="h-full w-full"
              ring={false}
              role="img"
              aria-label={BRAND_ALT}
            />
          )}
        </div>
      </div>
    </div>
  );
}