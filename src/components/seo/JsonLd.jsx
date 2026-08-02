import { useEffect } from "react";

/**
 * Injects a JSON-LD <script> into <head> for the lifetime of the component.
 * Each instance is tagged with `id` so it can be replaced on navigation
 * rather than accumulating duplicate blocks.
 */
export default function JsonLd({ id, data }) {
  // Serialise up front so an inline object literal from the caller does not
  // re-trigger the effect on every render.
  const json = data ? JSON.stringify(data) : null;

  useEffect(() => {
    if (!json) return undefined;

    const scriptId = `jsonld-${id}`;
    document.getElementById(scriptId)?.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = scriptId;
    script.textContent = json;
    document.head.appendChild(script);

    return () => script.remove();
  }, [id, json]);

  return null;
}

export const faqPageSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
});
