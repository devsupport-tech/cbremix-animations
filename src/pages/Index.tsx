import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, ShieldCheck, Hammer, Home, ClipboardList, Users, ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { Testimonial } from "@/components/Testimonial";
import SuccessAreas from "@/components/Team";
import { Link } from "react-router-dom";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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

  const statsData = [
    { number: "15+", label: "Years of restoration experience" },
    { number: "1000+", label: "Insurance claims processed successfully" },
  ];

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

  const clientLogos = [
    "State Farm", "Allstate", "Liberty Mutual", "Farmers", "Nationwide", "Progressive"
  ];

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block py-1 px-3 mb-6 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full text-white border border-white/20"
            >
              Complete Building and Restoration Solutions
            </motion.span>
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Restoring your property, rebuilding your life
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-10 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Expert insurance claims management and restoration services to help you recover from property damage quickly and completely.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button size="lg" className="group text-base">
                File a claim
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 text-base">
                Our services
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={scrollToContent}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="flex flex-col items-center"
          >
            <span className="text-white text-sm mb-2">Scroll down</span>
            <ChevronDown className="h-6 w-6 text-white" />
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        />
      </section>

      {/* Stats Section */}
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

      {/* Ideas to Works Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">We guide you through every step of recovery</h2>
              <p className="text-lg text-muted-foreground mb-6">
                From initial damage assessment to final restoration, our experienced team provides comprehensive support to simplify the insurance claims process and ensure quality rebuilding.
              </p>
              <Button variant="outline" className="group">
                Our Process
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Home restoration process" 
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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

      {/* Projects Section */}
      <Projects />

      {/* Vision Section */}
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
                CBRS Group is committed to making the restoration process as smooth as possible, advocating for you every step of the way to ensure fair treatment from insurance companies.
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

      {/* Success Areas Section */}
      <SuccessAreas />

      {/* Client Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Trusted by insurers nationwide
          </motion.h2>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-xl font-medium text-muted-foreground"
              >
                {logo}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonial 
        quote="After a devastating fire damaged our home, CBRS Group handled everything with our insurance company. They identified items missed in the initial estimate and increased our settlement by over 40%. Their team managed the entire rebuilding process expertly."
        author="Michael Thompson"
        title="Homeowner"
      />

      <Footer />
    </div>
  );
};

export default Index;
