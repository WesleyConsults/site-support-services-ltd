"use client";

import Link from "next/link";
import * as LucideIcons from "lucide-react";

export default function RelatedServices({ currentSlug, relatedServices }) {
  if (!relatedServices || relatedServices.length === 0) return null;

  return (
    <section className="space-y-6 pt-8 border-t border-slate-200">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          Complementary Solutions
        </span>
        <h3 className="text-2xl font-extrabold text-primary mt-1">
          Related Support Services
        </h3>
        <p className="text-slate-600 text-sm font-medium mt-1">
          Explore additional operational support capabilities commonly combined for integrated site management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedServices.slice(0, 3).map((service) => {
          const IconComponent = LucideIcons[service.iconName] || LucideIcons.HelpCircle;
          const detailUrl = `/services/${service.slug || service.id}`;

          return (
            <div
              key={service.id}
              className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 flex flex-col justify-between hover:bg-white hover:border-primary-light/40 hover:shadow-md transition-all duration-300 group relative overflow-hidden"
            >
              <div className="space-y-3">
                <div className="p-2.5 bg-white border border-slate-200 rounded-lg w-fit text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <IconComponent className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-primary group-hover:text-primary-light leading-snug">
                  <Link href={detailUrl} className="hover:underline focus:outline-none focus:ring-2 focus:ring-accent rounded">
                    {service.title}
                  </Link>
                </h4>
                <p className="text-xs text-slate-600 line-clamp-3 font-medium leading-relaxed">
                  {service.shortDescription || service.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-bold uppercase">
                  {service.serviceCode}
                </span>
                <Link
                  href={detailUrl}
                  className="text-xs font-bold text-primary group-hover:text-accent uppercase tracking-wider inline-flex items-center transition-all duration-200"
                >
                  View Details
                  <LucideIcons.ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
