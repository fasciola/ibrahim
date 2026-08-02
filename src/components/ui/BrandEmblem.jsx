import { useState } from "react";
import logoSrc from "../../../logo.png";

/**
 * The brand asset is a square, stacked lockup: the circular "IS" emblem sits
 * above the wordmark, on an off-white field. Most placements on the site want
 * the emblem alone (the baked-in wordmark is illegible below ~120px), so this
 * component crops to the emblem's bounding box and scales it to fill a circle.
 *
 * Percentages are relative to the square container, and frame the emblem with
 * a little breathing room so the gold arc never touches the edge.
 */
const CROP = {
  width: "178.6%",
  height: "178.6%",
  left: "-40%",
  top: "-21.5%",
};

export const BRAND_ALT =
  "Ibrahim Setup — UAE company formation and business setup consultancy";

export default function BrandEmblem({ className = "", ring = true, ...props }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`flex aspect-square items-center justify-center rounded-full bg-navy font-heading font-bold text-gold ${className}`}
        {...props}
      >
        IS
      </span>
    );
  }

  return (
    <span
      className={`relative block aspect-square shrink-0 overflow-hidden rounded-full bg-[#F8F6F2] ${
        ring ? "ring-1 ring-gold/25" : ""
      } ${className}`}
      {...props}
    >
      <img
        src={logoSrc}
        alt=""
        aria-hidden="true"
        decoding="async"
        className="absolute max-w-none"
        style={CROP}
        onError={() => setFailed(true)}
      />
    </span>
  );
}
