"use client";

import Link from "next/link";
import { motion } from "motion/react";
import * as LucideIcons from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { industries } from "@/data/siteContent";

export default function Industries() {
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
            Sectors We Support
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            Industries Served
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base font-semibold leading-relaxed"
          >
            We deploy specialized logistics, remote-site catering, manpower staffing, and equipment leasing programs to meet the complex requirements of key industrial sectors.
          </motion.p>
        </div>
      </section>

      {/* 2. Industries Detailed Staggered List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Strategic Industry Support Solutions"
            subtitle="Tailored Operations"
            align="center"
          />

          {/* Staggered Vertical List */}
          <div className="space-y-12">
            {industries.map((ind, index) => {
              const IconComponent = LucideIcons[ind.iconName] || LucideIcons.Building2;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={ind.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`flex flex-col lg:flex-row items-stretch border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Visual Left/Right Graphic Panel */}
                  <div className="lg:w-1/3 bg-primary-dark text-white p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,86,93,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(4,86,93,0.15)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-25" />
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent/10 rounded-full filter blur-xl" />
                    
                    <div className="relative z-10 space-y-4">
                      <span className="text-[10px] bg-primary-light border border-primary-light/40 text-accent font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                        Sector {index + 1}
                      </span>
                      <div className="p-3 bg-white/10 rounded-lg text-accent w-fit shadow-sm">
                        <IconComponent className="w-8 h-8" />
                      </div>
                    </div>

                    <div className="relative z-10 pt-16">
                      <span className="text-3xl font-black text-primary-light/40 block">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                        {ind.title}
                      </h3>
                    </div>
                  </div>

                  {/* Narrative Right/Left Panel */}
                  <div className="lg:w-2/3 bg-slate-50/50 p-8 sm:p-12 flex flex-col justify-between">
                    <div className="space-y-6">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-accent">
                        Sector Overview & Support
                      </h4>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-semibold">
                        {ind.description}
                      </p>
                      
                      {/* Detailed Facts Mapping */}
                      <div className="space-y-3 pt-2">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Critical Support Services Deployed:
                        </h5>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 font-medium">
                          {ind.id === "oil-gas" && (
                            <>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Offshore/Onshore Catering</li>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Maritime Crew Supply</li>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Equipment & Vehicle Leasing</li>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Safety/QHSE Compliance</li>
                            </>
                          )}
                          {ind.id === "construction" && (
                            <>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Site Worker Feeding</li>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Temporary Accommodation</li>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Heavy Machinery Rental</li>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Janitorial & Cleaning</li>
                            </>
                          )}
                          {ind.id === "mining" && (
                            <>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Remote Camp Management</li>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Catering Operations</li>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Manpower Staffing</li>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Sourcing & Logistics</li>
                            </>
                          )}
                          {ind.id === "hospitality" && (
                            <>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Industrial Catering</li>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Camp Facilities Setup</li>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Laundry & Janitorial</li>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Office/Staff Lodging</li>
                            </>
                          )}
                          {ind.id === "marine-offshore" && (
                            <>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Offshore Supply Runs</li>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Port-side Logistics</li>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Marine Vessel Crewing</li>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Travel & Visa Assistance</li>
                            </>
                          )}
                          {ind.id === "logistics-industrial" && (
                            <>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Sourcing & SCM</li>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Staff Shuttle Transport</li>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Warehouse Support</li>
                              <li className="flex items-center"><LucideIcons.CheckCircle className="w-4 h-4 text-primary mr-2.5 shrink-0" /> Fumigation & Hygiene</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-200 mt-6 flex justify-between items-center text-xs font-bold text-slate-400">
                      <span>SITE SUPPORT SERVICES LIMITED</span>
                      <Link
                        href={`/contact?industry=${encodeURIComponent(ind.title)}`}
                        className="text-primary hover:text-accent uppercase tracking-wider inline-flex items-center"
                      >
                        Request Support
                        <LucideIcons.ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </div>
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
          <h2 className="text-2xl sm:text-3xl font-extrabold">Have operations in demanding industrial hubs?</h2>
          <p className="text-slate-200 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Whether onshore or offshore, we coordinate your camp facilities, meals, safety, and supply chains. Speak to our team based in Takoradi.
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
