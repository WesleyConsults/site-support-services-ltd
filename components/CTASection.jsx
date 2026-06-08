"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { companyInfo } from "@/data/siteContent";

export default function CTASection() {
  return (
    <section className="relative bg-primary py-20 px-4 overflow-hidden border-t border-primary-light/10">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c5944_1px,transparent_1px),linear-gradient(to_bottom,#0c5944_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-primary-light/30 rounded-full filter blur-[65px] pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        {/* Decorative Badge */}
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="inline-block bg-primary-light/50 border border-primary-light px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-accent"
        >
          Partner with Site Support Services
        </motion.span>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
        >
          Need reliable support for your site, project, or operations?
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto"
        >
          Talk to Site Support Services Limited for catering, logistics, manpower, facility, and operational support solutions. We manage the support so you can focus on success.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-bold rounded-md shadow-md text-slate-900 bg-accent hover:bg-accent-hover transition-all duration-200"
          >
            Contact Us Today
            <ArrowRight className="w-4.5 h-4.5 ml-2" />
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-slate-500 text-base font-bold rounded-md text-white hover:bg-primary-light/30 hover:border-white transition-all duration-200"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
