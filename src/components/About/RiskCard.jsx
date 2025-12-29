import React from "react";
import { motion } from "framer-motion";

const RiskCard = ({ icon: Icon, title, risk, description, index }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className="glass-card p-6 md:p-8 group cursor-pointer"
      variants={cardVariants}
      whileHover={{
        y: -8,
        borderColor: "rgba(220, 38, 38, 0.2)",
      }}
    >
      {/* Icon */}
      <div className="mb-5 relative">
        <div
          className="w-14 h-14 rounded-xl bg-linear-to-br from-red-100 to-red-50 
                        flex items-center justify-center group-hover:from-red-200 group-hover:to-red-100 
                        transition-all duration-500"
        >
          <Icon className="w-7 h-7 text-red-500 group-hover:text-red-600 transition-colors" />
        </div>

        {/* Pulse indicator */}
        <motion.div
          className="absolute top-0 right-0 w-3 h-3 rounded-full bg-red-400/60"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.3,
          }}
        />
      </div>

      {/* Title */}
      <h3
        className="text-xl md:text-2xl font-bold text-slate-800 mb-3 group-hover:text-red-600 transition-colors"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>

      {/* Risk Statement */}
      <p className="text-red-500/90 text-sm font-medium mb-3 uppercase tracking-wide">
        {risk}
      </p>

      {/* Description */}
      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
        {description}
      </p>

      {/* Hover reveal line */}
      <motion.div
        className="mt-6 h-0.5 bg-linear-to-r from-red-400/50 to-transparent"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default RiskCard;
