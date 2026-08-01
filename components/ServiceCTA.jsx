"use client";

import Link from "next/link";
import { ArrowRight, Grid } from "lucide-react";

export default function ServiceCTA({ serviceTitle, serviceCode }) {
  const enquiryUrl = `/contact?service=${encodeURIComponent(serviceTitle || "")}&code=${encodeURIComponent(serviceCode || "")}`;

  return (
    <section className="bg-primary text-white py-16 px-4 rounded-2xl text-center shadow-lg relative overflow-hidden my-12">
      {/* Background Accent Grids */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,86,93,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(4,86,93,0.15)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-25" />
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-primary-dark border border-primary-light/30 px-3.5 py-1 rounded-full">
          Get Started Today
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
          Need this service for your operation or project?
        </h2>

        <p className="text-slate-200 max-w-xl mx-auto text-sm sm:text-base leading-relaxed font-medium">
          Speak with Site Support Services Limited about a support package tailored to your operational requirements.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
          <Link
            href={enquiryUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-sm font-bold rounded-lg shadow-md bg-accent text-slate-900 hover:bg-accent-hover transition-all duration-200"
          >
            Request This Service
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-slate-300/40 text-sm font-bold rounded-lg text-white hover:bg-white/10 transition-all duration-200"
          >
            <Grid className="w-4 h-4 mr-2" />
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
