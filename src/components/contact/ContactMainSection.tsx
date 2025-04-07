
import ContactForm from "./ContactForm";
import MapSection from "./MapSection";
import ContactInfo from "./ContactInfo";

const ContactMainSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <ContactInfo />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Map */}
          <MapSection />
        </div>
      </div>
    </section>
  );
};

export default ContactMainSection;
