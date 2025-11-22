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
      className="relative py-12 sm:py-16 md:py-20 bg-background overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-red-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-900/10 rounded-full blur-3xl"></div>
      <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
          FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
          Quick answers to common queries.
        </p>
      </div>

      <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-3 sm:space-y-4 px-4 sm:px-6 relative z-10">
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
