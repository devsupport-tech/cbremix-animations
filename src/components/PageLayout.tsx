
import { ReactNode, useEffect, useState } from "react";
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
  const [bannerHeight, setBannerHeight] = useState<number>(0);
  const [headerOffset, setHeaderOffset] = useState<number>(0);

  useEffect(() => {
    // Set CSS variable for banner height to use in other components
    const alertBanner = document.querySelector('.bg-orange.fixed');
    if (alertBanner) {
      const height = alertBanner.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--banner-height', `${height}px`);
      setBannerHeight(height);
    }
  }, []);

  useEffect(() => {
    // Calculate the total offset needed for the main content
    const smartHeaderHeight = showSmartHeader ? 
      parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--smart-header-height') || '0') : 0;
    const navbarHeight = 80; // Approximation of navbar height
    setHeaderOffset(bannerHeight + smartHeaderHeight + navbarHeight);
  }, [bannerHeight, showSmartHeader]);

  return (
    <div className="flex flex-col min-h-screen">
      <AlertBanner alertMessage={weatherAlert} />
      <div>
        {showSmartHeader && <SmartHeader />}
        <Navbar />
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-grow bg-background ${className}`}
          style={{ paddingTop: `${headerOffset}px` }}
        >
          {children}
        </motion.main>
        <Footer />
      </div>
    </div>
  );
};

export default PageLayout;
