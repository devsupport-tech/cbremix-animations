
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import ProjectsComponent from "@/components/Projects";

const Projects = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6 leading-tight">Our Restoration Projects</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our recent restoration projects and see how we've helped property owners recover from damage and rebuild stronger than before.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Component */}
      <ProjectsComponent />

      {/* Case Studies Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed examples of how we've handled complex restoration projects from start to finish.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Residential Fire Damage Restoration",
                description: "After a devastating house fire, we helped this family navigate their insurance claim and rebuild their home better than before.",
                image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                increase: "$85,000 increase in claim settlement"
              },
              {
                title: "Commercial Water Damage Recovery",
                description: "When flooding damaged this retail location, our team expedited the claim process to minimize business interruption.",
                image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
                increase: "45% increase in initial settlement offer"
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-background rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="inline-block py-1 px-3 mb-4 text-sm font-medium bg-primary/10 rounded-full text-primary">
                    {caseStudy.increase}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{caseStudy.title}</h3>
                  <p className="text-muted-foreground mb-6">{caseStudy.description}</p>
                  <Button variant="outline" className="group">
                    Read Full Case Study
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
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
            className="bg-muted p-12 rounded-lg max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Have a restoration project?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're dealing with fire, water, or storm damage, our team is ready to help you navigate the insurance claim process and restore your property.
            </p>
            <Button size="lg" className="group text-base">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
