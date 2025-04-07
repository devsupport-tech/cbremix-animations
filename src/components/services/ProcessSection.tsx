
import { motion } from "framer-motion";

const ProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Initial Assessment",
      description: "We conduct a thorough inspection of your property damage and review your insurance policy details to understand your coverage."
    },
    {
      number: "02",
      title: "Documentation & Estimation",
      description: "Our team meticulously documents all damage and prepares a comprehensive estimate using industry-standard software."
    },
    {
      number: "03",
      title: "Claim Filing & Negotiation",
      description: "We help you file your claim correctly and negotiate with your insurance company to ensure fair compensation."
    },
    {
      number: "04",
      title: "Restoration Management",
      description: "Once approved, we manage the entire restoration process, from coordinating contractors to final quality inspection."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We follow a streamlined approach to handle your insurance claim efficiently from start to finish.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col p-6"
            >
              <span className="text-5xl font-bold text-primary/30 mb-4">{step.number}</span>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
