
import { motion } from "framer-motion";
import { ArrowRight, Award, Clock, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import { Testimonial } from "@/components/Testimonial";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const values = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we do, from customer service to restoration work."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Advocacy",
      description: "We stand firmly on the side of our clients, fighting for fair treatment from insurance companies."
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Efficiency",
      description: "We work diligently to expedite the claims process and get your life back to normal as quickly as possible."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Integrity",
      description: "We operate with complete transparency and honesty, building trust with every client interaction."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold mb-6 leading-tight">About CBRS Group</h1>
              <p className="text-xl text-muted-foreground mb-8">
                For over 15 years, we've been helping property owners navigate the complex insurance claims process and restore their properties after damage.
              </p>
              <Button size="lg" className="group text-base">
                Our Services
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
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Our team" 
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                alt="Our story" 
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                CBRS Group was founded in 2008 by a team of construction professionals who saw firsthand how property owners were often shortchanged by insurance companies after disasters.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We recognized that most people don't understand the complexities of their insurance policies or how to properly document damage to ensure full compensation. We set out to change that by creating a company dedicated to advocating for property owners.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we've helped thousands of property owners recover from disasters and receive fair settlements, managing over $100 million in insurance claims across the country.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide every interaction and decision we make as we serve our clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-background rounded-lg p-8 text-center"
              >
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Testimonial */}
      <Testimonial 
        quote="CBRS Group stood by us through the entire process after our home was damaged in a storm. Their expertise in dealing with insurance companies was invaluable, and they helped us receive a settlement that was nearly double the initial offer. We couldn't have navigated this complex process without them."
        author="Jennifer & Robert Davis"
        title="Homeowners"
      />

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-muted p-12 rounded-lg max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to work with us?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let our experienced team help you navigate the insurance claims process and restore your property.
            </p>
            <Button size="lg" className="group text-base">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
