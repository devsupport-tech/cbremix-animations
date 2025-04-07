
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactCard from "./ContactCard";

const ContactInfo = () => {
  const contactCards = [
    {
      icon: Phone,
      title: "Phone",
      description: "Have questions? Call us directly",
      contact: "281-897-8022",
      href: "tel:+12818978022"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us an email anytime",
      contact: "info@superiormgr.com",
      href: "mailto:info@superiormgr.com"
    },
    {
      icon: MapPin,
      title: "Office",
      description: "Visit our headquarters",
      contact: "Houston and Surrounding Areas"
    },
    {
      icon: Clock,
      title: "Hours",
      description: "We're available",
      contact: "Monday - Friday\n8:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {contactCards.map((card, index) => (
        <ContactCard
          key={card.title}
          icon={card.icon}
          title={card.title}
          description={card.description}
          contact={card.contact}
          href={card.href}
          index={index}
        />
      ))}
    </div>
  );
};

export default ContactInfo;
