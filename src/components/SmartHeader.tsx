
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

  useEffect(() => {
    // Set height of SmartHeader for other components to reference
    const smartHeader = document.querySelector('.smart-header');
    if (smartHeader) {
      const height = smartHeader.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--smart-header-height', `${height}px`);
    }
  }, []);

  return (
    <div 
      className={cn(
        "w-full bg-primary py-2 text-white transition-transform duration-300 sticky z-40 smart-header",
        !isVisible && "-translate-y-full"
      )}
      style={{ top: "var(--banner-height, 0px)" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href="tel:+12818978022" 
              className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">281-897-8022</span>
            </a>
            <a 
              href="mailto:info@superiormgr.com" 
              className="flex items-center gap-2 hover:text-primary-foreground/80 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm font-medium">info@superiormgr.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 mr-4">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">Mon-Fri: 8AM - 6PM</span>
            </div>
            <Button 
              size="sm" 
              className="text-xs h-8 bg-orange hover:bg-orange/90 text-white"
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
