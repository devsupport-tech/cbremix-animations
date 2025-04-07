import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, ClipboardCheck, Hammer, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
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
    <div className="min-h-screen bg-background">
      
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold mb-6 leading-tight">Comprehensive Restoration Services</h1>
              <p className="text-xl text-muted-foreground mb-8">
                From initial damage assessment to complete restoration, we guide you through the entire insurance claims process.
              </p>
              <Button size="lg" className="group text-base">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1543525238-54e3306b0787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Insurance claim services" 
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
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

      {/* Process Section */}
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

      {/* CTA Section */}
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
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today for a consultation and let our experts guide you through the insurance claims process.
            </p>
            <Button size="lg" className="group text-base">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      
    </div>
  );
};

export default Services;
