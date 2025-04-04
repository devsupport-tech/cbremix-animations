
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

export interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function AuroraBackground({
  children,
  className = "",
  containerClassName = "",
}: AuroraBackgroundProps) {
  const positionClasses = [
    "top-0 left-0",
    "top-1/4 -left-1/4",
    "-top-1/2 left-1/2",
    "top-1/2 left-1/2",
    "bottom-0 right-0",
    "-bottom-1/4 right-1/3"
  ];

  const sizeClasses = [
    "w-[25rem] h-[25rem] md:w-[40rem] md:h-[40rem]",
    "w-[30rem] h-[30rem] md:w-[50rem] md:h-[50rem]",
    "w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem]",
    "w-[25rem] h-[25rem] md:w-[45rem] md:h-[45rem]",
    "w-[35rem] h-[35rem] md:w-[60rem] md:h-[60rem]",
    "w-[25rem] h-[25rem] md:w-[40rem] md:h-[40rem]",
  ];

  const colorClasses = [
    "from-navy-light/30 to-navy/5", 
    "from-navy/20 to-navy-light/5",
    "from-navy-dark/20 to-navy/10",
    "from-navy-light/30 to-navy/10",
    "from-navy/20 to-navy-light/5",
    "from-navy-dark/30 to-navy/5"
  ];

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {positionClasses.map((position, index) => (
        <div
          key={index}
          className={`absolute ${position} bg-gradient-radial ${colorClasses[index]} ${sizeClasses[index]} blur-3xl opacity-60 rounded-full`}
        />
      ))}
      <div className={`relative z-10 ${className}`}>{children}</div>
    </div>
  );
}
