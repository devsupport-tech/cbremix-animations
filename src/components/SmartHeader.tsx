
import { useState, useEffect } from "react";
import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SmartHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (typeof window !== 'undefined') {
        // Hide on scroll down, show on scroll up
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlHeader);
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return (
    <div 
      className={cn(
        "w-full bg-primary py-2 text-white transition-transform duration-300 z-50",
        !isVisible && "-translate-y-full"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+15551234567" 
              className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">555-123-4567</span>
            </a>
            <a 
              href="mailto:info@superiorrestoration.com" 
              className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm font-medium">info@superiorrestoration.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 mr-4">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">Mon-Fri: 8AM - 6PM</span>
            </div>
            <Button 
              size="sm" 
              variant="outline" 
              className="text-xs h-8 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => window.location.href = '/contact'}
            >
              Free Estimate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartHeader;
