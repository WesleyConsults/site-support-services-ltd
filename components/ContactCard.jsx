"use client";

import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";

export default function ContactCard({ iconName, title, children, index }) {
  const IconComponent = LucideIcons[iconName] || LucideIcons.HelpCircle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex items-start space-x-5 shadow-sm hover:border-primary/30 transition-all duration-300"
    >
      <div className="p-3 bg-primary/5 rounded-lg text-primary shrink-0">
        <IconComponent className="w-6 h-6" />
      </div>
      <div className="flex-grow space-y-1">
        <h3 className="text-base font-bold text-slate-900 tracking-wide">
          {title}
        </h3>
        <div className="text-slate-600 text-sm leading-relaxed font-medium space-y-1">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
