
import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ProcessSection from "@/components/home/ProcessSection";
import ServicesSection from "@/components/home/ServicesSection";
import RecoveryPathSection from "@/components/home/RecoveryPathSection";
import ClientsSection from "@/components/home/ClientsSection";
import FAQSection from "@/components/home/FAQSection";
import Projects from "@/components/Projects";
import { Testimonial } from "@/components/Testimonial";
import SuccessAreas from "@/components/Team";

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Ideas to Works Section */}
      <ProcessSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Projects Section */}
      <Projects />

      {/* Vision Section */}
      <RecoveryPathSection />

      {/* Success Areas Section */}
      <SuccessAreas />

      {/* Client Section */}
      <ClientsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials */}
      <Testimonial 
        quote="After a devastating fire damaged our home, Superior Restoration and Management Services handled everything with our insurance company. They identified items missed in the initial estimate and increased our settlement by over 40%. Their team managed the entire rebuilding process expertly."
        author="Michael Thompson"
        title="Homeowner"
      />
    </PageLayout>
  );
};

export default Index;
