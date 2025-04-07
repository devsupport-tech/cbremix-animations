
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  contact: string;
  href?: string;
  index: number;
}

const ContactCard = ({ icon: Icon, title, description, contact, href, index }: ContactCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card>
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="bg-primary/10 p-3 rounded-full mb-4">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          {href ? (
            <a href={href} className="mt-3 font-medium text-primary">
              {contact}
            </a>
          ) : (
            <div className="mt-3 font-medium text-primary">
              {contact}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactCard;
