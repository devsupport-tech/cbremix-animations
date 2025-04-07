import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";

const About = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold mb-6 leading-tight">About Superior Restoration</h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're a team of dedicated insurance claim specialists with over 20 years of experience helping property owners navigate the complex claims process.
              </p>
              <Button
                size="lg"
                className="group text-base"
                onClick={() => window.location.href = '/contact'}
              >
                Contact Our Team
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
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                alt="Our team"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              To advocate for property owners and ensure they receive fair treatment from insurance companies during the claims process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-muted p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-primary text-white p-1 rounded-full mr-3 mt-1">✓</span>
                  <p><span className="font-semibold">Integrity:</span> Honest representation of our clients at all times</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white p-1 rounded-full mr-3 mt-1">✓</span>
                  <p><span className="font-semibold">Expertise:</span> Continuous education on insurance policies and restoration techniques</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white p-1 rounded-full mr-3 mt-1">✓</span>
                  <p><span className="font-semibold">Advocacy:</span> Relentless pursuit of fair treatment for our clients</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary text-white p-1 rounded-full mr-3 mt-1">✓</span>
                  <p><span className="font-semibold">Transparency:</span> Clear communication throughout the entire claims process</p>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Our History</h3>
              <p className="text-muted-foreground mb-4">
                Founded in 2003, Superior Restoration and Management Services began with a simple mission: to help property owners get fair treatment from insurance companies after experiencing property damage.
              </p>
              <p className="text-muted-foreground mb-4">
                After witnessing firsthand how insurance companies often undervalued claims and left property owners struggling to rebuild, our founder Mark Stevens decided to use his insurance industry experience to advocate for those on the other side.
              </p>
              <p className="text-muted-foreground">
                Today, our team of 30+ professionals combines over 150 years of collective experience to serve clients throughout the region, having successfully managed thousands of claims worth more than $100 million in settlements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experts who will guide you through the insurance claims process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Mark Stevens",
                position: "Founder & CEO",
                bio: "Former insurance adjuster with 25+ years of industry experience.",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Sarah Johnson",
                position: "Chief Operations Officer",
                bio: "15 years experience in construction management and restoration.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "David Wilson",
                position: "Senior Claims Specialist",
                bio: "Certified public adjuster with expertise in commercial claims.",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-background rounded-lg overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary mb-2">{member.position}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
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
            className="bg-primary p-12 rounded-lg max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to work with our team?</h2>
            <p className="text-lg mb-8 text-white/90">
              Contact us today for a free consultation and let us help you maximize your insurance claim.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="group text-base border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.location.href = '/contact'}
            >
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
