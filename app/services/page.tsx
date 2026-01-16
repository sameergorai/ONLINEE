"use client";

import React, { useState, useRef } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// --- Data ---
const services = [
  {
    id: 'gem',
    title: 'GeM Registration',
    description: 'Private limited, LLP, OPC registration with government filling and DSC / KM support.',
  },
  {
    id: 'gst',
    title: 'GST Registration',
    description: 'New registrations, amendments, cancellation and GST return assistance for all entities.',
  },
  {
    id: 'iec',
    title: 'IEC / Import Export',
    description: 'IEC code for exporters/importers with expert documentation and global compliance support.',
  },
  {
    id: 'msme',
    title: 'MSME Registration',
    description: 'Get registered as an MSME to enjoy government benefits, subsidies, and tender supports.',
  },
  {
    id: 'fssai',
    title: 'FSSAI / Food License',
    description: 'Food licensing (Basic, State, Central) and renewals for restaurants and FMCG startups.',
  },
  {
    id: 'iso',
    title: 'ISO Certification',
    description: ' enhance your business credibility and operational excellence with global standards.',
  },
];

export default function ServicesPage() {
  // State to handle the selected service in the form
  const [selectedService, setSelectedService] = useState('');
  const formRef = useRef<HTMLDivElement>(null);

  // Scroll to form and set the service
  const handleApplyClick = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      
      {/* 1. Hero Section - Minimalist & Spacious */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
          Exclusive Business <br />
          <span className="font-semibold">Solutions.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl leading-relaxed">
          Expertise meets elegance. We simplify complex government registrations so you can focus on your legacy.
        </p>
      </section>

      {/* 2. Services Grid - Clean Cards with Breathing Room */}
      <section className="px-6 md:px-12 lg:px-24 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {services.map((service) => (
            <div key={service.id} className="group flex flex-col items-start justify-between h-full border-t border-gray-200 pt-8 transition-colors duration-500 hover:border-black">
              <div>
                <h3 className="text-2xl font-medium mb-4 group-hover:translate-x-1 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 font-light leading-7 mb-8">
                  {service.description}
                </p>
              </div>
              <button
                onClick={() => handleApplyClick(service.title)}
                className="flex items-center text-sm font-semibold uppercase tracking-widest text-black mt-auto group-hover:underline underline-offset-4"
              >
                Apply Now <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Universal Form Section - Focused & Elegant */}
      <section ref={formRef} className="bg-gray-50 py-32 px-6 md:px-12">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">Start Your Journey</h2>
            <p className="text-gray-500">Fill in the details below, and our experts will handle the rest.</p>
          </div>

          <form className="space-y-8 bg-white p-10 md:p-14 shadow-sm border border-gray-100">
            {/* Input Group: Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300"
                placeholder="John Doe"
              />
            </div>

            {/* Input Group: Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-black transition-colors bg-transparent placeholder-gray-300"
                  placeholder="hello@company.com"
                />
              </div>
            </div>

            {/* Input Group: Service Selection (Auto-filled) */}
            <div className="space-y-2">
              <label htmlFor="service" className="text-xs font-bold uppercase tracking-widest text-gray-400">
                Interested Service
              </label>
              <div className="relative">
                <select
                  id="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full border-b border-gray-300 py-3 text-lg bg-transparent focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a service...</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Other">Other Inquiry</option>
                </select>
                {/* Custom Dropdown Arrow */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-6 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                Submit Request <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-4">
               <CheckCircle2 className="w-3 h-3" /> Secure & Confidential
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}