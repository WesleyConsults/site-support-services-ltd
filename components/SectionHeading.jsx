"use client";

import { motion } from "motion/react";

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const isCentered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCentered ? "mx-auto text-center" : "text-left"
      }`}
    >
      {subtitle && (
        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-accent block mb-2 sm:mb-3">
          {subtitle}
        </span>
      )}
      
      <h2
        className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
          light ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      
      <div
        className={`h-1 w-16 bg-accent mt-4 sm:mt-5 rounded ${
          isCentered ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
