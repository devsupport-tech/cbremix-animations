
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmartHeader from "@/components/SmartHeader";

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
  return (
    <div className="flex flex-col min-h-screen">
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
