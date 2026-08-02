import { useState } from "react";
import { ZoomIn, X, ChevronLeft, ChevronRight, CheckCircle2, MessageCircle } from "lucide-react";
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
    tag: "Review"
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
    tag: "Email/Review"
  },
  {
    src: "/images/review/Screenshot 2026-08-02 172407.jpg",
    title: "Client Feedback Proof 8",
    tag: "WhatsApp"
  },
  {
    src: "/images/review/Screenshot 2026-08-02 172427.jpg",
    title: "Client Feedback Proof 9",
    tag: "Review"
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
  const { t, dir } = useLanguage();
  const [selectedIdx, setSelectedIdx] = useState(null);

  const rp = t.reviewProof || {
    eyebrow: "VERIFIED CLIENT FEEDBACK",
    title: "Real Client Reviews & Messaging Proofs",
    subtitle: "Click any review screenshot to enlarge and read authentic client feedback."
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIdx((prev) => (prev === 0 ? REVIEW_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
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

        {/* Responsive Grid of Screenshots */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {REVIEW_IMAGES.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-md"
            >
              <div className="aspect-[3/4] w-full overflow-hidden bg-navy/5">
                <img
                  src={img.src}
                  alt={`Verified Client Review Proof ${idx + 1}`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy shadow-lg">
                  <ZoomIn className="h-5 w-5" />
                </div>
                <span className="mt-2 text-xs font-semibold text-white px-2 py-0.5 rounded bg-white/20">
                  {img.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-[350] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-md"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedIdx(null)}
            className="absolute top-4 right-4 z-[360] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Close image"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation Controls */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-4 z-[360] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-4 z-[360] flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          {/* Screenshot Image */}
          <div
            className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl border border-white/20 bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={REVIEW_IMAGES[selectedIdx].src}
              alt={`Client Review Proof ${selectedIdx + 1}`}
              className="max-h-[80vh] w-auto max-w-full object-contain"
            />
            <div className="flex items-center justify-between border-t border-border bg-card px-4 py-2.5 text-xs text-navy">
              <span className="font-semibold">
                Client Review Proof {selectedIdx + 1} of {REVIEW_IMAGES.length}
              </span>
              <span className="rounded-full bg-gold/20 px-2.5 py-0.5 font-bold text-navy">
                Verified Feedback
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
