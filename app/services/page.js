"use client";

import Link from "next/link";
import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/siteContent";

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Page Header / Hero */}
      <section className="relative bg-primary-dark text-white pt-36 pb-20 overflow-hidden border-b border-primary-light/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,86,93,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(4,86,93,0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-accent/5 rounded-full filter blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-primary-light/50 border border-primary-light/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-accent"
          >
            What We Deliver
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            Our Support Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-semibold leading-relaxed"
          >
            We provide a comprehensive, one-stop suite of professional support services designed to keep demanding industrial and commercial operations running seamlessly.
          </motion.p>
        </div>
      </section>

      {/* 2. Services Detailed Listing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Complete Services Directory"
            subtitle="Integrated Solutions"
            align="center"
          />

          {/* Grid Layout of Detailed Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => {
              // Dynamically resolve icon
              const IconComponent = LucideIcons[service.iconName] || LucideIcons.HelpCircle;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between scroll-mt-28 hover:bg-white hover:border-primary-light/35 hover:shadow-md transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-transparent group-hover:bg-accent transition-all duration-300" />
                  
                  <div>
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-white border border-slate-200 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-primary leading-snug group-hover:text-primary-light transition-all duration-300">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                      {service.description}
                    </p>

                    {/* Deliverables / Bullets */}
                    <div className="space-y-3 mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Key Capabilities Include:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex items-start text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                            <LucideIcons.Check className="w-4 h-4 text-accent shrink-0 mr-2 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-5 border-t border-slate-200/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      Service Code: SSS-{service.id.toUpperCase()}
                    </span>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center text-xs font-bold text-primary group-hover:text-accent uppercase tracking-wider transition-all duration-200"
                    >
                      Inquire About Service
                      <LucideIcons.ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reusable CTA */}
      <section className="bg-primary text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Need a custom operational support package?</h2>
          <p className="text-slate-200 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            We can combine catering, logistics, camp management, and manpower into a single tailored contract. Reach out to our Takoradi team.
          </p>
          <div className="flex justify-center pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-md shadow bg-accent text-slate-900 hover:bg-accent-hover transition-all duration-200"
            >
              Contact Our Representative
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
