
import PageLayout from "@/components/PageLayout";
import ContactHero from "@/components/contact/ContactHero";
import ContactMainSection from "@/components/contact/ContactMainSection";
import EmergencyContact from "@/components/contact/EmergencyContact";

const Contact = () => {
  return (
    <PageLayout>
      <ContactHero />
      <ContactMainSection />
      <EmergencyContact />
    </PageLayout>
  );
};

export default Contact;
