
import { motion } from "framer-motion";
import { ClipboardList, ClipboardCheck, Hammer, Home } from "lucide-react";

const ServicesSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const services = [
    { 
      icon: <ClipboardList className="h-8 w-8 text-primary" />, 
      title: "Insurance Claims Estimating", 
      description: "Expert estimation services to ensure you receive fair compensation for your property damage claim." 
    },
    { 
      icon: <ClipboardCheck className="h-8 w-8 text-primary" />, 
      title: "Claim Supplementing", 
      description: "We identify overlooked damages and negotiate with insurers to maximize your settlement." 
    },
    { 
      icon: <Hammer className="h-8 w-8 text-primary" />, 
      title: "Production Management", 
      description: "Efficient oversight of the restoration process from start to finish, ensuring quality work and timely completion." 
    },
    { 
      icon: <Home className="h-8 w-8 text-primary" />, 
      title: "Content Management", 
      description: "Complete inventory and management of your personal belongings during the restoration process." 
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Restoration Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for property damage restoration and insurance claim management
          </p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col items-center text-center p-6 bg-background border border-border rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-3 bg-primary/10 rounded-full">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
