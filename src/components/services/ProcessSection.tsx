
import { motion } from "framer-motion";
import { CircleCheck, FileCheck, Handshake, HomeIcon } from "lucide-react";

const ProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Initial Assessment",
      description: "We conduct a thorough inspection of your property damage and review your insurance policy details to understand your coverage.",
      icon: <CircleCheck className="h-10 w-10 text-secondary" />
    },
    {
      number: "02",
      title: "Documentation & Estimation",
      description: "Our team meticulously documents all damage and prepares a comprehensive estimate using industry-standard software.",
      icon: <FileCheck className="h-10 w-10 text-secondary" />
    },
    {
      number: "03",
      title: "Claim Filing & Negotiation",
      description: "We help you file your claim correctly and negotiate with your insurance company to ensure fair compensation.",
      icon: <Handshake className="h-10 w-10 text-secondary" />
    },
    {
      number: "04",
      title: "Restoration Management",
      description: "Once approved, we manage the entire restoration process, from coordinating contractors to final quality inspection.",
      icon: <HomeIcon className="h-10 w-10 text-secondary" />
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
              className="flex flex-col p-6 bg-background rounded-lg shadow-sm"
            >
              <div className="mb-4 flex items-center">
                <span className="text-5xl font-bold text-primary/30 mr-4">{step.number}</span>
                <div className="bg-primary/10 p-3 rounded-full">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline for Mobile */}
        <div className="lg:hidden mt-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/20 ml-5"></div>
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="ml-5 pl-8 pb-12 relative"
            >
              <div className="absolute left-0 w-10 h-10 rounded-full bg-primary/20 -ml-5 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-primary"></div>
              </div>
              <span className="inline-block py-1 px-3 bg-primary/10 rounded-full text-primary text-sm font-medium mb-2">Step {step.number}</span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
