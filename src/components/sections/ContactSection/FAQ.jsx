"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/utils";

const FAQ = () => {
  return (
    <motion.section
      className="py-12 sm:py-16 md:py-20 bg-background"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
          FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          Quick answers to common queries.
        </p>
      </div>

      <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3 sm:space-y-4 px-4 sm:px-6">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-card border border-border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold text-sm sm:text-base md:text-lg">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-xs sm:text-sm md:text-base">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  );
};

export default FAQ;
