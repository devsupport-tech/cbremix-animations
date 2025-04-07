
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecoveryPathSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-4">Your path to recovery</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Superior Restoration and Management Services is committed to making the restoration process as smooth as possible, advocating for you every step of the way to ensure fair treatment from insurance companies.
            </p>
            <Button className="group">
              Our Approach
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 gap-4">
              {[
                "Initial Damage Assessment",
                "Insurance Claim Filing Assistance",
                "Scope of Work Documentation",
                "Insurance Negotiation",
                "Complete Restoration Management"
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between border-b border-border py-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground">{index + 1}</span>
                    <span className="font-medium">{item}</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read more
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecoveryPathSection;
