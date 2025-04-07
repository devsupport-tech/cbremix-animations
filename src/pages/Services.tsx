
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesDetail from "@/components/services/ServicesDetail";
import ProcessSection from "@/components/services/ProcessSection";
import ServicesCTA from "@/components/services/ServicesCTA";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <ServicesHero />
      <ServicesDetail />
      <ProcessSection />
      <ServicesCTA />
    </div>
  );
};

export default Services;
