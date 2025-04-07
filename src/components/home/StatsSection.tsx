
import { motion } from "framer-motion";

const StatsSection = () => {
  const statsData = [
    { number: "15+", label: "Years of restoration experience" },
    { number: "1000+", label: "Insurance claims processed successfully" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col p-6 md:p-10"
            >
              <span className="text-5xl md:text-6xl font-bold text-primary mb-2">{stat.number}</span>
              <p className="text-lg text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
