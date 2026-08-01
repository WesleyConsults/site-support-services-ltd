"use client";

import { CheckCircle2 } from "lucide-react";

export default function ServiceCapabilities({ capabilities }) {
  if (!capabilities || capabilities.length === 0) return null;

  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8 space-y-6">
      <div className="border-b border-slate-200/80 pb-4">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          Operational Scope
        </span>
        <h3 className="text-xl font-extrabold text-primary mt-1">
          Key Capabilities Include:
        </h3>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {capabilities.map((capability, index) => (
          <li
            key={index}
            className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm"
          >
            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span className="text-sm font-semibold text-slate-700 leading-relaxed">
              {capability}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
