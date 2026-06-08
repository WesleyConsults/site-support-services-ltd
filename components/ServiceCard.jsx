"use client";

import Link from "next/link";
import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";

export default function ServiceCard({ service, index }) {
  // Dynamically resolve the icon component
  const IconComponent = LucideIcons[service.iconName] || LucideIcons.HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className="bg-white rounded-xl border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 group shadow-sm hover:border-primary-light/30 relative overflow-hidden"
    >
      {/* Structural Accent Top-Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-accent transition-all duration-300" />
      
      <div>
        {/* Icon Container */}
        <div className="p-3 bg-primary/5 rounded-lg w-fit text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6">
          <IconComponent className="w-7 h-7" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-primary mb-3.5 group-hover:text-primary-light transition-all duration-300 leading-snug">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      {/* Footer / Read More Action */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/services#${service.id}`}
          className="text-xs font-bold text-primary group-hover:text-accent uppercase tracking-wider inline-flex items-center transition-all duration-300"
        >
          Learn More
          <LucideIcons.ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
