import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe, ArrowRight } from "lucide-react";
import { companyInfo, navigationLinks, services } from "@/data/siteContent";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-slate-300 border-t border-primary/20">
      {/* Top Footer Panel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="inline-block group">
              <div className="flex items-center space-x-3 mb-2">
                <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white/10 p-0.5 shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Site Support Services Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold tracking-tight text-white">
                    Site Support <span className="text-accent">Services</span>
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-white transition-all duration-300">
                    {companyInfo.tagline}
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              {companyInfo.aboutSummary}
            </p>
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
              <span>Primary Sector:</span>
              <span className="text-white bg-primary-light px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
                Management
              </span>
              <span className="text-white bg-primary-light px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider">
                Catering
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-base font-bold tracking-wide border-l-4 border-accent pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-base font-bold tracking-wide border-l-4 border-accent pl-3">
              Key Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="flex items-center text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-200"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-accent/80" />
                    <span className="truncate">{service.title}</span>
                  </Link>
                </li>
              ))}
              {services.length > 5 && (
                <li>
                  <Link
                    href="/services"
                    className="text-accent hover:text-white text-xs font-bold inline-flex items-center mt-1 uppercase tracking-wider"
                  >
                    View All Services &rarr;
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-base font-bold tracking-wide border-l-4 border-accent pl-3">
              Contact Us
            </h3>
            <div className="space-y-3.5 text-sm text-slate-400">
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {companyInfo.location}
                  <br />
                  <span className="text-slate-500 font-semibold">{companyInfo.postalAddress}</span>
                </span>
              </div>

              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3.5 text-accent shrink-0" />
                <div className="flex flex-col">
                  {companyInfo.phones.map((phone) => (
                    <a
                      key={phone.value}
                      href={`tel:${phone.link}`}
                      className="hover:text-white transition-all-300"
                    >
                      {phone.value}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-4 h-4 mr-3.5 text-accent shrink-0 mt-1" />
                <div className="flex flex-col">
                  {companyInfo.emails.map((email) => (
                    <a
                      key={email.address}
                      href={`mailto:${email.address}`}
                      className="hover:text-white transition-all-300 text-xs sm:text-sm break-all"
                    >
                      {email.address}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-3.5 text-accent shrink-0" />
                <a
                  href={`https://${companyInfo.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-all-300"
                >
                  {companyInfo.website}
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Panel */}
      <div className="bg-[#041d16] py-6 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-medium">
          <p className="text-center sm:text-left mb-2.5 sm:mb-0">
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <span className="text-[10px] text-accent uppercase font-bold tracking-widest">
              Reliability at Hand
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
