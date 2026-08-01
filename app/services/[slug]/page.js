import { notFound } from "next/navigation";
import { services } from "@/data/siteContent";
import ServiceHero from "@/components/ServiceHero";
import ServiceCapabilities from "@/components/ServiceCapabilities";
import ServiceGallery from "@/components/ServiceGallery";
import RelatedServices from "@/components/RelatedServices";
import ServiceCTA from "@/components/ServiceCTA";
import EquipmentCatalogue from "@/components/EquipmentCatalogue";

// Static Parameters Generation for SSG / 404 Prevention
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Dynamic SEO Metadata Generation
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | Site Support Services Limited",
      description: "The requested support service could not be found.",
    };
  }

  const siteUrl = "https://www.sitesupportgh.com";

  return {
    title: service.seoTitle || `${service.title} | Site Support Services Limited`,
    description: service.seoDescription || service.shortDescription,
    alternates: {
      canonical: `${siteUrl}/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle || `${service.title} | Site Support Services Limited`,
      description: service.seoDescription || service.shortDescription,
      url: `${siteUrl}/services/${service.slug}`,
      siteName: "Site Support Services Limited",
      images: [
        {
          url: service.heroImage,
          alt: service.heroAlt || service.title,
        },
      ],
      locale: "en_GH",
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Resolve related services by slug
  const relatedServices = (service.relatedSlugs || [])
    .map((relSlug) => services.find((s) => s.slug === relSlug))
    .filter(Boolean);

  const isEquipmentPage = service.slug === "equipment-vehicle-rental";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Service Hero Section with Breadcrumb & Code */}
      <ServiceHero service={service} />

      {/* 2. Main Service Content Body */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Service Overview & Capabilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Expanded Overview Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-accent">
                  Service Detail Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                  Comprehensive Site Operational Support
                </h2>
              </div>

              <div className="prose prose-slate max-w-none space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                {service.fullDescription.split("\n\n").map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Right Column: Key Capabilities Box */}
            <div className="lg:col-span-5">
              <ServiceCapabilities capabilities={service.bullets} />
            </div>

          </div>

          {/* 3. Operational Image Gallery */}
          {service.galleryImages && service.galleryImages.length > 0 && (
            <ServiceGallery images={service.galleryImages} serviceTitle={service.title} />
          )}

          {/* 4. Equipment Catalogue (Specific to Equipment & Vehicle Rental) */}
          {isEquipmentPage && <EquipmentCatalogue />}

          {/* 5. Strong Call-to-Action Block (For Non-Equipment Services) */}
          {!isEquipmentPage && (
            <ServiceCTA serviceTitle={service.title} serviceCode={service.serviceCode} />
          )}

          {/* 6. Related Services Section */}
          <RelatedServices currentSlug={service.slug} relatedServices={relatedServices} />

        </div>
      </section>
    </div>
  );
}
