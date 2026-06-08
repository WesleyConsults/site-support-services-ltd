"use client";

import { motion } from "motion/react";
import { ShieldCheck, Target, Eye, Quote, Users, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { companyInfo, coreValues } from "@/data/siteContent";
import Link from "next/link";

export default function About() {
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
            About Our Company
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            Site Support Services Limited
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base font-semibold tracking-wide uppercase"
          >
            {companyInfo.tagline} • Takoradi, Ghana
          </motion.p>
        </div>
      </section>

      {/* 2. Company Story / Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Text narrative */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                Our Story & Capabilities
              </h2>
              <div className="h-1 w-12 bg-accent rounded" />
              
              {/* Detailed narrative blocks */}
              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 font-medium">
                {companyInfo.aboutDetailed.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Right Column: "In Simple Terms" Highlight Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-6"
            >
              <h3 className="text-lg font-bold text-primary border-b border-slate-200 pb-3 flex items-center">
                <ShieldCheck className="w-5.5 h-5.5 text-accent mr-2.5 shrink-0" />
                In Simple Terms
              </h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-slate-600 font-medium">
                <p>
                  Site Support Services Limited helps companies run their sites and operations smoothly. 
                </p>
                <p>
                  When organizations run construction sites, offshore projects, mining fields, port operations, or remote camps, they need food, transport, cleaning, safety support, equipment, logistics, and personnel.
                </p>
                <p className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary font-bold text-primary text-xs tracking-wide uppercase">
                  We are a one-stop operational support partner.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm relative overflow-hidden group hover:border-primary-light/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 h-1.5 w-16 bg-accent" />
              <div className="p-3 bg-accent/10 rounded-lg text-accent w-fit mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {companyInfo.mission}
              </p>
            </motion.div>

            {/* Vision Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm relative overflow-hidden group hover:border-primary-light/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 h-1.5 w-16 bg-accent" />
              <div className="p-3 bg-accent/10 rounded-lg text-accent w-fit mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {companyInfo.vision}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Shared Core Values"
            subtitle="The Principles We Live By"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-xl hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-300 relative group"
              >
                <div className="absolute top-0 left-6 h-1 w-10 bg-transparent group-hover:bg-accent transition-all duration-300" />
                <h3 className="text-lg font-bold text-primary mb-2.5">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Leadership */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Company Leadership"
            subtitle="Leadership & Direction"
            align="center"
          />

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-8 -mt-8" />
              
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-primary">
                      {companyInfo.managingDirector}
                    </h3>
                    <p className="text-xs font-bold uppercase text-accent tracking-wider">
                      Managing Director
                    </p>
                  </div>
                </div>
                
                <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded">
                  Executive Board
                </span>
              </div>

              {/* MD Quote / Wording from reference */}
              <div className="pt-6 relative">
                <Quote className="absolute -top-2 -left-2 w-12 h-12 text-slate-100 -z-10" />
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic font-medium relative z-10 pl-6">
                  {companyInfo.mdQuote}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reusable CTA */}
      <section className="bg-primary text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to secure reliable operational support?</h2>
          <p className="text-slate-200 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
            Contact us to request catering, logistics, camp management, manpower supply, or equipment rentals for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-md shadow bg-accent text-slate-900 hover:bg-accent-hover transition-all duration-200"
            >
              Contact Our Office
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-500 text-sm font-bold rounded-md hover:bg-primary-light/35 transition-all duration-200"
            >
              Browse All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
