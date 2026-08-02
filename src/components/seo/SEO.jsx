import { useEffect } from "react";
import { SITE } from "@/lib/siteConfig";

const upsertMeta = (selector, attr, value) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    // Recreate the identifying attribute from the selector, e.g.
    // 'meta[property="og:title"]' -> property="og:title"
    const match = selector.match(/\[([\w:-]+)="([^"]+)"\]/);
    if (match) el.setAttribute(match[1], match[2]);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
  return el;
};

const upsertLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
  return el;
};

export default function SEO({
  title,
  description,
  path = "/",
  image,
  noindex = false,
}) {
  useEffect(() => {
    const url = `${SITE.baseUrl}${path}`;
    const ogImage = image || `${SITE.baseUrl}/og-image.svg`;

    document.title = title;

    upsertMeta('meta[name="description"]', "content", description);
    // Canonical is a <link>, not a <meta> — creating it as a meta tag means
    // search engines never see it.
    upsertLink("canonical", url);

    upsertMeta('meta[property="og:title"]', "content", title);
    upsertMeta('meta[property="og:description"]', "content", description);
    upsertMeta('meta[property="og:url"]', "content", url);
    upsertMeta('meta[property="og:image"]', "content", ogImage);
    upsertMeta('meta[property="og:type"]', "content", "website");
    upsertMeta('meta[property="og:site_name"]', "content", SITE.brand);

    upsertMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "content", title);
    upsertMeta('meta[name="twitter:description"]', "content", description);
    upsertMeta('meta[name="twitter:image"]', "content", ogImage);

    upsertMeta(
      'meta[name="robots"]',
      "content",
      noindex ? "noindex, nofollow" : "index, follow"
    );
  }, [title, description, path, image, noindex]);

  return null;
}
