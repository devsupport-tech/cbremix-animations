
import { motion } from "framer-motion";
import { ClipboardCheck, Calculator, FileSpreadsheet, TrendingUp, Target, Award } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const SuccessAreas = () => {
  const successAreas = [
    {
      title: "Accurate Scope Writing",
      description: "Capture all damaged items with precision, ensuring nothing is missed in your estimate.",
      icon: <ClipboardCheck className="h-10 w-10 text-white" />
    },
    {
      title: "Price Customization",
      description: "Apply location-specific pricing and adjust for regional materials and labor costs.",
      icon: <Calculator className="h-10 w-10 text-white" />
    },
    {
      title: "Detailed Line Items",
      description: "Include comprehensive line items with the correct quantities and measurements.",
      icon: <FileSpreadsheet className="h-10 w-10 text-white" />
    },
    {
      title: "Supplemental Estimates",
      description: "Easily document additional damages discovered during repairs with proper documentation.",
      icon: <TrendingUp className="h-10 w-10 text-white" />
    },
    {
      title: "Optimal Settlement",
      description: "Achieve maximum claim settlements by accurately representing all damage and required repairs.",
      icon: <Target className="h-10 w-10 text-white" />
    },
    {
      title: "Industry Compliance",
      description: "Generate estimates that adhere to insurance industry standards and requirements.",
      icon: <Award className="h-10 w-10 text-white" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <AuroraBackground containerClassName="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Success Areas for Estimating with Xactimate</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Our team excels in these key areas to maximize your insurance claim settlements
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {successAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-navy/60 backdrop-blur-sm rounded-lg p-8 h-full flex flex-col hover:bg-navy-light/60 transition-colors duration-300 border border-white/10">
                <div className="bg-navy-light/80 p-4 rounded-full w-fit mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{area.title}</h3>
                <p className="text-white/70">{area.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AuroraBackground>
  );
};

export default SuccessAreas;
