import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQAccordion({ items, allowMultiple = false }) {
  return (
    <Accordion type={allowMultiple ? "multiple" : "single"} collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="overflow-hidden rounded-xl border border-border bg-card px-1 transition-colors data-[state=open]:border-gold/50"
        >
          <AccordionTrigger className="px-5 py-5 text-start font-heading text-[16px] font-semibold text-ink hover:no-underline hover:text-blue">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 text-[15px] leading-relaxed text-muted-ink">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}