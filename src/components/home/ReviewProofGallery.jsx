import { useState } from "react";
import { ZoomIn, X, ChevronLeft, ChevronRight, CheckCircle2, ExternalLink, Maximize2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const REVIEW_IMAGES = [
  {
    src: "/images/review/Screenshot 2026-08-02 172138.jpg",
    title: "Client Feedback Proof 1",
    tag: "WhatsApp"
  },
  {
    src: "/images/review/Screenshot 2026-08-02 172209.jpg",
    title: "Client Feedback Proof 2",
    tag: "Google Review"
  },
  {
    src: "/images/review/Screenshot 2026-08-02 172228.jpg",
    title: "Client Feedback Proof 3",
    tag: "WhatsApp"
  },
  {
    src: "/images/review/Screenshot 2026-08-02 172248.jpg",
    title: "Client Feedback Proof 4",
    tag: "WhatsApp"
  },
  {
    src: "/images/review/Screenshot 2026-08-02 172309.jpg",
    title: "Client Feedback Proof 5",
    tag: "Review"
  },
  {
    src: "/images/review/Screenshot 2026-08-02 172326.jpg",
    title: "Client Feedback Proof 6",
    tag: "WhatsApp"
  },
  {
    src: "/images/review/Screenshot 2026-08-02 172348.jpg",
    title: "Client Feedback Proof 7",
    tag: "Email Feedback"
  },
  {
    src: "/images/review/Screenshot 2026-08-02 172407.jpg",
    title: "Client Feedback Proof 8",
    tag: "WhatsApp"
  },
  {
    src: "/images/review/Screenshot 2026-08-02 172427.jpg",
    title: "Client Feedback Proof 9",
    tag: "Google Review"
  },
  {
    src: "/images/review/Screenshot 2026-08-02 172444.jpg",
    title: "Client Feedback Proof 10",
    tag: "WhatsApp"
  },
  {
    src: "/images/review/Screenshot 2026-08-02 172501.jpg",
    title: "Client Feedback Proof 11",
    tag: "WhatsApp"
  },
  {
    src: "/images/review/Screenshot 2026-08-02 172514.jpg",
    title: "Client Feedback Proof 12",
    tag: "Review"
  },
  {
    src: "/images/review/Screenshot 2026-08-02 172614.jpg",
    title: "Client Feedback Proof 13",
    tag: "WhatsApp"
  }
];

export default function ReviewProofGallery() {
  const { t } = useLanguage();
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const rp = t.reviewProof || {
    eyebrow: "VERIFIED CLIENT FEEDBACK",
    title: "Real Client Reviews & Messaging Proofs",
    subtitle: "Click any review screenshot to enlarge and read authentic client feedback in full size."
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setIsZoomed(false);
    setSelectedIdx((prev) => (prev === 0 ? REVIEW_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setIsZoomed(false);
    setSelectedIdx((prev) => (prev === REVIEW_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 lg:py-20 bg-cream/40 border-t border-border">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow flex items-center justify-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-gold" />
            {rp.eyebrow}
          </span>
          <h2 className="heading-lg mt-3 text-navy font-heading font-bold">
            {rp.title}
          </h2>
          <p className="body-lg mt-3 text-muted-ink">
            {rp.subtitle}
          </p>
        </div>

        {/* Uncropped Responsive Grid of Screenshots */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {REVIEW_IMAGES.map((img, idx) => (
            <div
              key={idx}
              onClick={() => {
                setSelectedIdx(idx);
                setIsZoomed(false);
              }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl flex flex-col justify-between"
            >
              {/* Full Image Display - Uncropped */}
              <div className="relative flex w-full items-center justify-center overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900/50 p-1 min-h-[220px]">
                <img
                  src={img.src}
                  alt={`Verified Client Review Proof ${idx + 1}`}
                  className="w-full h-auto max-h-[380px] object-contain transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-navy shadow-xl">
                    <ZoomIn className="h-6 w-6" />
                  </div>
                  <span className="mt-2 text-xs font-bold text-white px-3 py-1 rounded-full bg-white/20">
                    Click to View Full Size
                  </span>
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-2.5 px-1">
                <span className="text-xs font-semibold text-navy">
                  Proof {idx + 1}
                </span>
                <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-[11px] font-bold text-navy">
                  {img.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal for Full Size Viewing */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-[350] flex flex-col items-center justify-between bg-navy/95 p-4 sm:p-6 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Header Controls */}
          <div
            className="w-full max-w-5xl flex items-center justify-between z-[360] pb-2 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-base text-gold">
                Review Proof {selectedIdx + 1} of {REVIEW_IMAGES.length}
              </span>
              <span className="rounded-full bg-gold/20 px-3 py-0.5 text-xs font-bold text-white">
                {REVIEW_IMAGES[selectedIdx].tag}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={REVIEW_IMAGES[selectedIdx].src}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
                title="Open original image file in new tab"
              >
                <span>Original File</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setIsZoomed(!isZoomed)}
                className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-white/20"
              >
                <Maximize2 className="h-4 w-4" />
                <span>{isZoomed ? "Fit to Screen" : "100% Size"}</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedIdx(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Close image"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            type="button"
            onClick={handlePrev}
            className="fixed left-3 top-1/2 -translate-y-1/2 z-[360] flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white shadow-2xl transition-all hover:bg-white/30 hover:scale-110 active:scale-95"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="fixed right-3 top-1/2 -translate-y-1/2 z-[360] flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white shadow-2xl transition-all hover:bg-white/30 hover:scale-110 active:scale-95"
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          {/* Modal Container displaying FULL Image */}
          <div
            className={`my-auto relative flex items-center justify-center transition-all duration-300 ${
              isZoomed
                ? "w-full max-w-none overflow-auto p-4"
                : "max-h-[85vh] max-w-[92vw]"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={REVIEW_IMAGES[selectedIdx].src}
              alt={`Full size client review proof ${selectedIdx + 1}`}
              className={`rounded-xl border border-white/20 bg-card shadow-2xl transition-all duration-300 ${
                isZoomed
                  ? "w-auto max-w-none h-auto"
                  : "max-h-[82vh] w-auto max-w-full object-contain"
              }`}
            />
          </div>

          {/* Footer Bar */}
          <div
            className="w-full max-w-5xl flex items-center justify-between z-[360] pt-2 text-xs text-slate-300"
            onClick={(e) => e.stopPropagation()}
          >
            <span>Verified Authentic Feedback Proof • Ibrahim Setup</span>
            <a
              href={REVIEW_IMAGES[selectedIdx].src}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden underline font-medium text-gold"
            >
              Open Full Resolution Image ↗
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
