"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Wrench, Shield } from "lucide-react";

export default function EquipmentCard({ equipment }) {
  const enquiryUrl = `/contact?service=${encodeURIComponent("Equipment and Vehicle Rental")}&code=SSS-EQUIPMENT-RENTAL&equipment=${encodeURIComponent(equipment.enquiryValue || equipment.name)}`;

  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:bg-white hover:border-primary-light/40 hover:shadow-lg transition-all duration-300 group relative">
      <div>
        {/* Equipment Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-200">
          <Image
            src={equipment.image}
            alt={equipment.imageAlt || equipment.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Category Tag Overlay */}
          <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-2">
            {equipment.category && (
              <span className="text-[10px] font-bold uppercase tracking-wider bg-primary-dark/90 text-accent border border-primary-light/30 px-2.5 py-1 rounded-md shadow-sm">
                {equipment.category}
              </span>
            )}
          </div>

          {/* Capacity Tag Overlay */}
          {equipment.capacity && (
            <div className="absolute bottom-3 right-3 z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/95 text-slate-800 border border-slate-200 px-2.5 py-1 rounded-md shadow-sm flex items-center">
                <Wrench className="w-3 h-3 mr-1 text-accent" />
                {equipment.capacity}
              </span>
            </div>
          )}
        </div>

        {/* Content Block */}
        <div className="p-6 space-y-3">
          <h4 className="text-lg font-bold text-primary leading-snug group-hover:text-primary-light transition-colors duration-200">
            {equipment.name}
          </h4>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
            {equipment.description}
          </p>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 pt-0 mt-2">
        <Link
          href={enquiryUrl}
          className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary-light hover:text-accent transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Request This Equipment
          <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
