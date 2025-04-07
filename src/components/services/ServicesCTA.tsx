
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to get started with your claim?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Contact us today for a consultation and let our experts guide you through the insurance claims process.
          </p>
          <div className="flex justify-center items-center mb-8">
            <Phone className="h-5 w-5 text-primary mr-2" />
            <span className="text-lg font-medium">Call us at 281-897-8022</span>
          </div>
          <Button 
            size="lg" 
            className="group text-base"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;
