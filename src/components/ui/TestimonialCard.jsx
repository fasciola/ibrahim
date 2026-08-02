import { Star, Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function TestimonialCard({ quote, name, source, rating = 5, delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-[0_1px_3px_rgba(7,26,43,0.04)]"
    >
      <Quote className="h-8 w-8 text-gold/40" strokeWidth={1.5} />
      <div className="mt-3 flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-6 border-t border-border pt-4">
        <div className="font-heading font-semibold text-ink">{name}</div>
        <div className="text-[13px] text-muted-ink">{source}</div>
      </div>
    </Reveal>
  );
}