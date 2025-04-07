
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`min-h-screen bg-background ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default PageLayout;
