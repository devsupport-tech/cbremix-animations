
import { motion } from "framer-motion";
import { ClipboardList, ClipboardCheck, Hammer, Home } from "lucide-react";

const ServicesDetail = () => {
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
      icon: <ClipboardList className="h-12 w-12 text-primary" />, 
      title: "Insurance Claims Estimating", 
      description: "Our experts meticulously evaluate property damage to ensure you receive fair compensation. We document all damages thoroughly, create detailed line-item estimates using industry-standard software, and provide comprehensive reports that insurance companies respect and accept." 
    },
    { 
      icon: <ClipboardCheck className="h-12 w-12 text-primary" />, 
      title: "Claim Supplementing", 
      description: "We identify overlooked damages and negotiate with insurers to maximize your settlement. Our team conducts thorough reinspections, documents hidden damages, and works directly with adjusters to ensure nothing is missed, often increasing claim settlements by 30% or more." 
    },
    { 
      icon: <Hammer className="h-12 w-12 text-primary" />, 
      title: "Production Management", 
      description: "From demolition to final touches, we coordinate every aspect of the restoration process. Our production managers oversee contractor schedules, ensure quality workmanship, monitor progress, and keep you informed every step of the way, allowing you to focus on getting back to normal life." 
    },
    { 
      icon: <Home className="h-12 w-12 text-primary" />, 
      title: "Content Management", 
      description: "We inventory, pack, clean, store, and return your personal belongings. Our content specialists create detailed inventories of affected items, coordinate cleaning and restoration of salvageable belongings, safely store your items during construction, and carefully return everything to its proper place." 
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
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer end-to-end solutions designed to streamline the insurance claims process and get your property restored quickly and efficiently.
          </p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col p-8 bg-muted/50 rounded-lg"
            >
              <div className="mb-4 p-4 bg-primary/10 rounded-full w-fit">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground text-lg">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesDetail;
