
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type AlertBannerProps = {
  alertMessage: string;
  alertTitle?: string;
  variant?: "default" | "destructive";
};

const AlertBanner = ({ 
  alertMessage, 
  alertTitle = "Weather Alert", 
  variant = "default" 
}: AlertBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="w-full bg-orange">
      <div className="container mx-auto px-4 py-2">
        <Alert 
          variant={variant} 
          className="border-none bg-transparent text-white flex items-center justify-between"
        >
          <div className="flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            {alertTitle && <AlertTitle className="mr-2">{alertTitle}</AlertTitle>}
            <AlertDescription className="text-white">{alertMessage}</AlertDescription>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsVisible(false)}
            className="text-white hover:bg-orange/20 p-1 h-auto"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </Alert>
      </div>
    </div>
  );
};

export default AlertBanner;
