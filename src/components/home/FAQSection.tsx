
import { motion } from "framer-motion";
import { QuestionMarkCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqItems = [
    {
      question: "How do I start the insurance claim process?",
      answer:
        "Contact us immediately after property damage occurs. We'll guide you through filing your insurance claim, documenting the damage properly, and ensure you meet all deadlines required by your insurance provider."
    },
    {
      question: "Will you work directly with my insurance company?",
      answer:
        "Yes. Our team acts as your advocate and communicates directly with your insurance company. We handle the documentation, negotiation, and ensure that all damage is properly accounted for in your settlement."
    },
    {
      question: "What types of property damage do you handle?",
      answer:
        "We specialize in all types of property damage including fire, water, storm, hail, and wind damage. Our experienced team can restore both residential and commercial properties."
    },
    {
      question: "How long does the restoration process typically take?",
      answer:
        "The timeline varies depending on the extent of the damage. Minor restorations may take 1-2 weeks, while major reconstructions can take several months. We provide detailed timelines during our initial assessment and keep you updated throughout the process."
    },
    {
      question: "What if my insurance company misses items in their estimate?",
      answer:
        "This is where our claim supplementing service is crucial. We conduct thorough inspections to identify any overlooked damage and work with your insurance company to add these items to your claim, often increasing your settlement by 20-40%."
    },
    {
      question: "Do I have to use the contractor my insurance company recommends?",
      answer:
        "No. You have the legal right to choose your own restoration contractor. Insurance companies may recommend their preferred vendors, but the final decision is always yours."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <QuestionMarkCircle className="h-8 w-8 text-primary mr-2" />
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about the restoration and insurance claims process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p className="text-muted-foreground">
              Still have questions? <a href="/contact" className="text-primary font-medium hover:underline">Contact our team</a> for personalized assistance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
