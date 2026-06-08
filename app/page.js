"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import IndustryCard from "@/components/IndustryCard";
import CTASection from "@/components/CTASection";
import { companyInfo, services, industries, whyChooseUs } from "@/data/siteContent";

export default function Home() {
  // We display only the first 6 services on the homepage
  const featuredServices = services.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Preview Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Content block */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-accent">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
                Your Trusted Site Operational Support Partner
              </h2>
              <div className="h-1 w-16 bg-accent rounded" />
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                {companyInfo.aboutSummary}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                We manage the complex day-to-day operational details—from feeding your workers and supplying labor, to renting heavy machinery and managing facilities—so your field teams can execute with peace of mind.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center text-sm font-bold text-primary hover:text-accent group uppercase tracking-wider transition-all duration-200"
                >
                  Read Our Full Story
                  <ArrowRight className="w-4.5 h-4.5 ml-2.5 transition-transform duration-200 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* Right side: Modern graphic block placeholder */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] bg-primary rounded-2xl overflow-hidden shadow-xl border border-primary-light/10 p-8 flex flex-col justify-between text-white">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,86,93,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(4,86,93,0.15)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
                
                <div className="space-y-2 relative z-10">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-accent bg-primary-dark border border-primary-light/40 px-2 py-1 rounded">
                    Core Business Categories
                  </span>
                  <h3 className="text-xl font-bold tracking-wide mt-2">
                    Management | Catering | Logistics
                  </h3>
                </div>

                <div className="relative z-10 bg-primary-dark/90 border border-primary-light/35 p-4 rounded-lg">
                  <span className="text-xs text-slate-300 italic">
                    "Reliability is not just a target; it is the baseline of our service."
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Featured Support Services"
            subtitle="What We Do"
            align="center"
          />

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12 sm:mt-16">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3.5 border border-primary text-sm font-bold rounded-md text-primary hover:bg-primary hover:text-white transition-all duration-200 shadow-sm"
            >
              View All 10 Services
              <ArrowRight className="w-4.5 h-4.5 ml-2.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Industries Served Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Industries We Support"
            subtitle="Sectors Served"
            align="center"
          />

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.id} industry={industry} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/industries"
              className="text-primary hover:text-accent text-sm font-bold uppercase tracking-wider inline-flex items-center group transition-all duration-200"
            >
              Explore Sectors Detail
              <ArrowRight className="w-4.5 h-4.5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Partner with Site Support Services?"
            subtitle="Our Value Proposition"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                className="flex items-start space-x-4 border border-slate-100 p-6 rounded-xl hover:bg-slate-50/50 hover:border-slate-200 transition-all duration-200"
              >
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-primary">
                    {strength.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <CTASection />
    </div>
  );
}
