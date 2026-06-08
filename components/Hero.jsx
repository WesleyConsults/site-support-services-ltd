"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Shield, Award } from "lucide-react";
import { companyInfo } from "@/data/siteContent";

export default function Hero() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="relative bg-primary-dark text-white min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Architectural Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,86,93,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(4,86,93,0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
        {/* Light teal spotlight/glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-light/25 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-accent/5 rounded-full filter blur-[80px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            {/* Tagline / Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-primary-light/45 border border-primary-light/60 px-3 py-1.5 rounded-full w-fit">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-wider text-accent uppercase">
                {companyInfo.tagline}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white"
            >
              Reliable Site Support Services for <span className="text-accent">Industrial</span> & <span className="text-accent">Commercial</span> Operations
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              Site Support Services Limited provides professional management, catering, logistics, manpower, facility, and operational support services to clients across Ghana’s Oil & Gas, Construction, Mining, Hospitality, and industrial sectors.
            </motion.p>

            {/* Core Pillars Text representation */}
            <motion.div
              variants={itemVariants}
              className="py-2 flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-wider text-slate-400 uppercase"
            >
              <span>Management</span>
              <span className="text-accent">•</span>
              <span>Catering</span>
              <span className="text-accent">•</span>
              <span>Logistics</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-bold rounded-md shadow-md text-slate-900 bg-accent hover:bg-accent-hover transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Our Services
                <ArrowRight className="w-5 h-5 ml-2.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-500 text-base font-bold rounded-md text-white hover:bg-slate-800/50 hover:border-white transition-all duration-200"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Decorative Industrial Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.4 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative p-1 bg-gradient-to-br from-primary-light via-primary to-accent/30 rounded-2xl shadow-2xl">
              <div className="bg-surface-dark p-8 rounded-[15px] space-y-6">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-primary-light/40 rounded-lg text-accent">
                    <Shield className="w-8 h-8" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">Operational Base</span>
                    <span className="text-base text-white font-bold block">Takoradi, Ghana</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white tracking-wide border-b border-primary-light pb-2">
                    Key Statistics & Strengths
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent mr-3" />
                      100% Reliability Commitment
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent mr-3" />
                      Full QHSE Safety Compliance
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent mr-3" />
                      Onshore & Offshore Capabilities
                    </li>
                    <li className="flex items-center text-sm text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent mr-3" />
                      Experienced Remote Camp Operators
                    </li>
                  </ul>
                </div>

                <div className="bg-primary-dark p-4 rounded-lg flex items-center space-x-3.5 border border-primary-light/20">
                  <Award className="w-10 h-10 text-accent shrink-0" />
                  <div className="text-xs text-slate-300 leading-normal font-medium">
                    Led by experienced Managing Director <span className="text-white font-bold">{companyInfo.managingDirector}</span>.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
