
import { motion } from "framer-motion";

const MapSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
      <p className="text-muted-foreground mb-8">
        We're centrally located in Houston for easy access from anywhere in the metro area.
      </p>
      <div className="bg-muted rounded-lg overflow-hidden h-[400px] relative">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222388.50257159178!2d-95.73089063583365!3d29.78493742546136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C+TX!5e0!3m2!1sen!2sus!4v1565280875549!5m2!1sen!2sus"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default MapSection;
