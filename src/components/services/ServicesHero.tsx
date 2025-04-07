
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesHero = () => {
  const benefits = [
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      text: "Maximize your settlement"
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      text: "Save time and reduce stress"
    },
    {
      icon: <ThumbsUp className="h-5 w-5 text-primary" />,
      text: "Expert advocacy on your behalf"
    }
  ];

  return (
    <section className="pt-32 pb-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">Comprehensive Restoration Services</h1>
            <p className="text-xl text-muted-foreground mb-6">
              From initial damage assessment to complete restoration, we guide you through the entire insurance claims process.
            </p>
            
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className="flex items-center"
                >
                  <div className="bg-primary/10 p-2 rounded-full mr-3">
                    {benefit.icon}
                  </div>
                  <span className="text-lg">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="group text-base"
              onClick={() => window.location.href = '/contact'}
            >
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
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
