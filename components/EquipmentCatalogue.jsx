"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";
import { equipmentCatalog } from "@/data/equipmentData";
import EquipmentCard from "@/components/EquipmentCard";

export default function EquipmentCatalogue() {
  return (
    <section className="space-y-12 pt-8 border-t border-slate-200">
      {/* Section Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          Fleet & Machinery Catalogue
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
          Some of the Equipment We Offer
        </h3>
        <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
          Our equipment rental solutions support port, marine, cargo-handling, logistics, construction, and industrial operations. Below are some of the heavy-duty equipment and vehicles available to support client projects and operational requirements.
        </p>
      </div>

      {/* Equipment Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {equipmentCatalog.map((item) => (
          <EquipmentCard key={item.id} equipment={item} />
        ))}
      </div>

      {/* Equipment Specific Call to Action */}
      <div className="bg-primary text-white py-12 px-6 sm:px-10 rounded-2xl text-center shadow-lg relative overflow-hidden my-8">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,86,93,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(4,86,93,0.15)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-accent/10 rounded-full filter blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto space-y-5 relative z-10">
          <span className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-accent bg-primary-dark border border-primary-light/30 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
            Project Availability & Leasing Support
          </span>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Need Equipment for Your Next Operation?
          </h3>

          <p className="text-slate-200 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-medium">
            Speak with Site Support Services Limited about equipment rental support for port, marine, cargo-handling, logistics, construction, and industrial operations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <Link
              href="/contact?service=Equipment%20and%20Vehicle%20Rental&code=SSS-EQUIPMENT-RENTAL"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-xs sm:text-sm font-bold rounded-lg shadow-md bg-accent text-slate-900 hover:bg-accent-hover transition-all duration-200"
            >
              Request Equipment
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-slate-300/40 text-xs sm:text-sm font-bold rounded-lg text-white hover:bg-white/10 transition-all duration-200"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
