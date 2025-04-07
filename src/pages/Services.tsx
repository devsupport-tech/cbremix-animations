
import PageLayout from "@/components/PageLayout";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesDetail from "@/components/services/ServicesDetail";
import ProcessSection from "@/components/services/ProcessSection";
import ServicesCTA from "@/components/services/ServicesCTA";

const Services = () => {
  return (
    <PageLayout>
      <ServicesHero />
      <ServicesDetail />
      <ProcessSection />
      <ServicesCTA />
    </PageLayout>
  );
};

export default Services;
