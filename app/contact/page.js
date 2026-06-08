"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Globe, Send, Info, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactCard from "@/components/ContactCard";
import { companyInfo, services } from "@/data/siteContent";

// Separate the form content to safely use useSearchParams in Next.js 15 App Router
function ContactFormContent() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: preselectedService,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Static submission logic - UI only
    // Form submission can be connected to a backend, Formspree, or EmailJS later
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-6">
      <h3 className="text-xl font-bold text-primary border-b border-slate-100 pb-3">
        Send Us a Message
      </h3>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-primary-light/10 border border-primary-light/40 p-6 rounded-xl text-primary text-sm font-semibold flex items-start space-x-3"
        >
          <Info className="w-5.5 h-5.5 text-accent shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-base text-primary mb-1">Message Received!</p>
            <p className="text-slate-600 font-medium leading-relaxed">
              Thank you for contacting Site Support Services Limited. Our representative will review your message and get back to you shortly.
            </p>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* COMMENT: Form submission can be connected to a backend service like API routes, EmailJS, or Formspree later */}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="e.g. John Mensah"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 transition-all duration-200"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="e.g. +233 (0) 24 000 0000"
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 transition-all duration-200"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g. j.mensah@company.com"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 transition-all duration-200"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 transition-all duration-200 appearance-none focus:outline-none"
            >
              <option value="">Select a service category...</option>
              {services.map((svc) => (
                <option key={svc.id} value={svc.title}>
                  {svc.title}
                </option>
              ))}
              <option value="Custom Integrated Solution">Custom Integrated Solution</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Provide details of your request or requirements..."
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 transition-all duration-200 resize-y"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow text-sm font-bold text-slate-900 bg-accent hover:bg-accent-hover transition-all duration-200 cursor-pointer"
          >
            Submit Request
            <Send className="w-4 h-4 ml-2.5" />
          </button>
        </form>
      )}
    </div>
  );
}

// Suspense Fallback
function ContactFormFallback() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm animate-pulse space-y-6">
      <div className="h-6 bg-slate-200 rounded w-1/3" />
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="h-10 bg-slate-200 rounded" />
          <div className="h-10 bg-slate-200 rounded" />
        </div>
        <div className="h-10 bg-slate-200 rounded" />
        <div className="h-10 bg-slate-200 rounded" />
        <div className="h-28 bg-slate-200 rounded" />
        <div className="h-12 bg-slate-200 rounded" />
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Page Header / Hero */}
      <section className="relative bg-primary-dark text-white pt-36 pb-20 overflow-hidden border-b border-primary-light/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,86,93,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(4,86,93,0.15)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-accent/5 rounded-full filter blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-primary-light/50 border border-primary-light/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-accent"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight"
          >
            Contact Our Office
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base font-semibold tracking-wide uppercase"
          >
            Reliability At Hand • Speak with Our Team
          </motion.p>
        </div>
      </section>

      {/* 2. Main Layout Block */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Contact Cards + Details */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-4">
                <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-accent">
                  Contact Information
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                  Reach Site Support Services
                </h2>
                <div className="h-1 w-12 bg-accent rounded" />
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Have questions about our operations, vehicles, catering packages, or camp management? Reach out to us directly or drop a request via the form.
                </p>
              </div>

              {/* Office Location */}
              <ContactCard iconName="MapPin" title="Office Location" index={0}>
                <p className="font-semibold text-slate-800">{companyInfo.location}</p>
                <p className="text-slate-500 font-bold text-xs mt-1 uppercase tracking-wide">Postal: {companyInfo.postalAddress}</p>
              </ContactCard>

              {/* Phone Numbers */}
              <ContactCard iconName="Phone" title="Phone Numbers" index={1}>
                {companyInfo.phones.map((phone) => (
                  <a
                    key={phone.value}
                    href={`tel:${phone.link}`}
                    className="block font-semibold text-slate-800 hover:text-accent transition-all-300"
                  >
                    {phone.value}
                  </a>
                ))}
              </ContactCard>

              {/* Emails */}
              <ContactCard iconName="Mail" title="Email Inquiries" index={2}>
                <div className="space-y-1.5">
                  {companyInfo.emails.map((email) => (
                    <a
                      key={email.address}
                      href={`mailto:${email.address}`}
                      className="block font-semibold text-slate-800 hover:text-accent transition-all-300 text-xs sm:text-sm break-all"
                    >
                      {email.address}
                    </a>
                  ))}
                </div>
              </ContactCard>

              {/* Hours / Info */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex items-start space-x-4">
                <Clock className="w-5.5 h-5.5 text-accent shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-primary uppercase tracking-wide">
                    Operational Hours
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-semibold">
                    Office Hours: Monday - Friday (8:00 AM - 5:00 PM GMT)
                  </p>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-medium">
                    *Field support and remote operations (catering/camps) run 24/7/365.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <Suspense fallback={<ContactFormFallback />}>
                <ContactFormContent />
              </Suspense>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Map Placeholder */}
      <section className="py-12 bg-slate-50 border-t border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Physical Base in Takoradi"
            subtitle="Find Us"
            align="center"
          />

          {/* SVG Map Layout Representing Shippers Road */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative bg-surface-dark rounded-2xl p-6 sm:p-12 overflow-hidden shadow-inner border border-primary/20 text-white min-h-[300px] sm:min-h-[400px] flex flex-col justify-between"
          >
            {/* Mock Map Grid lines */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
              
              {/* Fake abstract roads layout */}
              <div className="absolute top-[20%] left-0 right-0 h-6 bg-white/5 skew-y-3" />
              <div className="absolute top-0 bottom-0 left-[40%] w-8 bg-white/5 -skew-x-12" />
              <div className="absolute top-[60%] left-0 right-0 h-10 bg-white/5 -skew-y-3 flex items-center justify-center">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Shippers Road</span>
              </div>
              
              {/* Spotlight on Office Pin location */}
              <div className="absolute top-[50%] left-[38%] w-40 h-40 bg-accent/25 rounded-full filter blur-2xl" />
            </div>

            {/* Content over map */}
            <div className="relative z-10 space-y-2 max-w-sm bg-surface-darker/95 border border-primary-light/40 p-5 rounded-xl shadow-lg mt-auto lg:mt-0">
              <div className="flex items-center space-x-2.5 text-accent">
                <MapPin className="w-5.5 h-5.5 animate-bounce shrink-0" />
                <h4 className="text-sm font-bold uppercase tracking-wide text-white">
                  Site Support Services HQ
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                Number 9 Shippers Road, Adjacent Shippers Council, Takoradi, Ghana.
              </p>
              <p className="text-slate-500 text-[10px] leading-normal pt-1 border-t border-primary-light/20">
                Strategic port city placement for immediate coordination of offshore marine runs and logistics.
              </p>
            </div>

            <div className="relative z-10 text-right text-[10px] font-semibold text-slate-400 mt-6 lg:mt-0 uppercase tracking-widest">
              Takoradi Map Coordinates: 4.8973° N, 1.7511° W
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
