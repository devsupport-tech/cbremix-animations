
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="pt-32 pb-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold mb-6 leading-tight">Contact Us</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Have questions about your insurance claim? Our team of experts is here to help.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
