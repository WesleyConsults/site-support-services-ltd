"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ChevronRight, ArrowRight, ShieldCheck } from "lucide-react";

export default function ServiceHero({ service }) {
  const enquiryUrl = `/contact?service=${encodeURIComponent(service.title)}&code=${encodeURIComponent(service.serviceCode)}`;

  return (
    <section className="relative bg-primary-dark text-white pt-32 pb-16 sm:pb-24 overflow-hidden border-b border-primary-light/10">
      {/* Background Hero Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={service.heroImage}
          alt={service.heroAlt || service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-primary-dark/60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,86,93,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(4,86,93,0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300 font-medium">
          <Link href="/" className="hover:text-accent transition-colors duration-200">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/services" className="hover:text-accent transition-colors duration-200">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-accent font-bold truncate max-w-[200px] sm:max-w-xs" aria-current="page">
            {service.title}
          </span>
        </nav>

        {/* Hero Content Block */}
        <div className="max-w-3xl space-y-4 pt-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-block bg-accent/20 border border-accent/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-accent">
              Service Code: {service.serviceCode}
            </span>
            <span className="inline-flex items-center text-xs font-semibold text-slate-300 bg-primary-light/40 border border-primary-light/30 px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-accent" />
              Verified Support Service
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed"
          >
            {service.shortDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <Link
              href={enquiryUrl}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg shadow-md text-sm font-bold text-slate-900 bg-accent hover:bg-accent-hover transition-all duration-200"
            >
              Request This Service
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-white border border-white/30 hover:bg-white/10 transition-all duration-200"
            >
              Back to Services Directory
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
