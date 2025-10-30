import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How soon will I get a response?",
      answer:
        "You'll usually receive a response within 24 hours during our regular business hours. Messages sent on weekends or holidays will be replied to on the next working day.",
    },
    {
      question: "Do you provide support outside business hours?",
      answer:
        "While our standard support hours are Monday to Friday, 9 AM to 6 PM, we do monitor urgent requests outside these hours. For critical issues, please call our emergency hotline.",
    },
    {
      question: "Can I schedule a meeting with your team?",
      answer:
        "Absolutely! You can request a meeting through our contact form, and our team will reach out to schedule a convenient time. We offer both in-person and virtual meetings.",
    },
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          FREQUENTLY ASKED <span className="text-primary">QUESTIONS</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Quick answers to common queries.
        </p>
      </div>

      <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-card border border-border rounded-lg px-6"
          >
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
