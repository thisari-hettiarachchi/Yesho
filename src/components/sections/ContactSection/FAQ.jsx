import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/utils";

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-3">
          FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Quick answers to common queries.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="max-w-3xl mx-auto space-y-4"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-card border border-border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold text-lg">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
