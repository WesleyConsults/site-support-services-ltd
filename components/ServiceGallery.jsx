"use client";

import Image from "next/image";

export default function ServiceGallery({ images, serviceTitle }) {
  if (!images || images.length === 0) return null;

  return (
    <section className="space-y-4">
      <div className="border-b border-slate-200 pb-3">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          Operational Imagery
        </span>
        <h3 className="text-xl font-extrabold text-primary mt-1">
          Service Environment & Operations
        </h3>
      </div>

      <div className={`grid grid-cols-1 ${images.length > 1 ? "md:grid-cols-2" : "grid-cols-1"} gap-6`}>
        {images.map((img, idx) => (
          <div
            key={idx}
            className="group bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-200">
              <Image
                src={img.src}
                alt={img.alt || `${serviceTitle} operation image`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {img.caption && (
              <div className="p-4 bg-white border-t border-slate-100 flex-1">
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {img.caption}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
