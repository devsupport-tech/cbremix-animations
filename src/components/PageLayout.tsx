
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmartHeader from "@/components/SmartHeader";
import AlertBanner from "@/components/AlertBanner";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  showSmartHeader?: boolean;
}

const PageLayout = ({ 
  children, 
  className = "",
  showSmartHeader = true 
}: PageLayoutProps) => {
  // Weather alert message - in a real app, this would come from an API
  const weatherAlert = "Severe thunderstorm warning in effect for Houston area until 8:00 PM. Take necessary precautions.";

  return (
    <div className="flex flex-col min-h-screen">
      <AlertBanner alertMessage={weatherAlert} />
      {showSmartHeader && <SmartHeader />}
      <Navbar />
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`flex-grow bg-background ${className}`}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default PageLayout;
