"use client";

import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";

export default function IndustryCard({ industry, index }) {
  const IconComponent = LucideIcons[industry.iconName] || LucideIcons.Building2;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col space-y-4 hover:bg-white hover:border-accent hover:shadow-md transition-all duration-300 group"
    >
      <div className="flex items-center space-x-4">
        {/* Icon container */}
        <div className="p-3 bg-white border border-slate-200 rounded-lg text-primary group-hover:text-accent group-hover:border-accent/40 transition-all duration-300 shadow-sm">
          <IconComponent className="w-6 h-6" />
        </div>
        {/* Title */}
        <h3 className="text-lg font-bold text-primary leading-tight">
          {industry.title}
        </h3>
      </div>
      
      {/* Description */}
      <p className="text-slate-600 text-sm leading-relaxed">
        {industry.description}
      </p>
    </motion.div>
  );
}
