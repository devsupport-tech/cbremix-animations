
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmergencyContact = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Need Emergency Assistance?</h2>
          <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
            For urgent claims that require immediate attention, our emergency response team is available 24/7.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-orange border-orange text-white hover:bg-orange/90 hover:border-orange/90 hover:text-white"
            onClick={() => window.location.href = 'tel:+12818978022'}
          >
            Call Our Emergency Line
            <Phone className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EmergencyContact;
