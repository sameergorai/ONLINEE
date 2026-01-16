"use client";

import React, { useState, useEffect } from 'react';
import { CheckCircle, Info, ShieldCheck, ArrowRight } from 'lucide-react';
import Msmefrom from '../componts/Msmefrom';

export default function UdyamRegistrationPage() {
 

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 ">
      
      {/* 1. HERO & FORM SECTION */}
      <section className="bg-[#0f172a] pt-16 p-1 text-white relative">
        <div className="container mx-auto px-6 text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Udyog Aadhaar | Udyam Registration Online Consultancy</h1>
          <p className="text-amber-500 font-bold uppercase tracking-widest text-sm">Official MSME Certification Support</p>
        </div>
      </section>

      <div className="container mx-auto px-6 pt-9 pb-20 ">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* FORM COLUMN */}
          <div className='lg:col-span-2'>
          <Msmefrom />
</div>
          {/* 2. INSTRUCTIONS COLUMN */}
          <div className="space-y-6 ">
            <div className="bg-[#0f172a] text-white p-8 rounded-2xl shadow-xl border border-white/5">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Info className="text-amber-500" size={20} /> 
                Instructions
              </h3>
              <div className="space-y-5 text-[11px] leading-relaxed">
                <p><span className="text-amber-500 font-bold block mb-1">APPLICANT NAME:</span> Enter full name (First Name As Well As Last Name).</p>
                <p><span className="text-amber-500 font-bold block mb-1">MOBILE NUMBER:</span> Enter 10 digits. Don't enter +91.</p>
                <p><span className="text-amber-500 font-bold block mb-1">EMAIL ID:</span> Certificate & acknowledgment will be sent here.</p>
                <p><span className="text-amber-500 font-bold block mb-1">OFFICE ADDRESS:</span> Enter complete business address.</p>
                <p><span className="text-amber-500 font-bold block mb-1">DATE OF COMMENCEMENT:</span> Printed on certificate as incorporation date.</p>
                <p><span className="text-amber-500 font-bold block mb-1">INVESTMENT:</span> Total investment in plant, machinery, etc.</p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 flex items-start gap-4 shadow-sm">
                <ShieldCheck className="text-green-600 flex-shrink-0" size={28} />
                <div className="text-sm">
                    <p className="font-bold text-green-900">Swift Processing</p>
                    <p className="text-green-700 leading-tight">Receive your certificate within 2-3 working hours via email.</p>
                </div>
            </div>
          </div>
        </div>

        {/* 3. CLASSIFICATION SECTION */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Classification of MSME</h2>
            <p className="text-slate-500 mt-2">Based on Investment in Plant & Machinery and Annual Turnover</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition"><ArrowRight /></div>
                <h3 className="text-xl font-bold text-amber-600 mb-4">Micro Enterprises</h3>
                <ul className="text-sm space-y-3 text-slate-600">
                    <li className="flex items-center gap-2"><CheckCircle size={14} /> Investment ≤ ₹1 Crore</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} /> Turnover ≤ ₹5 Crore</li>
                </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition"><ArrowRight /></div>
                <h3 className="text-xl font-bold text-amber-600 mb-4">Small Enterprises</h3>
                <ul className="text-sm space-y-3 text-slate-600">
                    <li className="flex items-center gap-2"><CheckCircle size={14} /> Investment ₹1 Cr - ₹10 Cr</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} /> Turnover ₹5 Cr - ₹50 Cr</li>
                </ul>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition"><ArrowRight /></div>
                <h3 className="text-xl font-bold text-amber-600 mb-4">Medium Enterprises</h3>
                <ul className="text-sm space-y-3 text-slate-600">
                    <li className="flex items-center gap-2"><CheckCircle size={14} /> Investment ₹10 Cr - ₹50 Cr</li>
                    <li className="flex items-center gap-2"><CheckCircle size={14} /> Turnover ₹50 Cr - ₹250 Cr</li>
                </ul>
            </div>
          </div>
        </section>

        {/* 4. EDUCATIONAL CONTENT SECTION */}
        <div className="mt-24 max-w-5xl mx-auto space-y-20">
          
          <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Udyam Registration?</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
                Udyam Registration is a initiative in India introduced by the Ministry of Micro, Small, and Medium Enterprises (MSME) in July 2020. It replaces the earlier MSME enrollment process known as udyog aadhaar registration. 
            </p>
            <p className="text-slate-600 leading-relaxed">
                It aims to simplify the registration process for MSMEs and provide them with various benefits and incentives such as easier access to credit, subsidies, and other support schemes.
            </p>
          </div>

          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Udyam vs MSME vs Udyog Aadhaar</h2>
            <div className="grid md:grid-cols-3 gap-8 text-sm">
                <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-amber-600">
                    <h4 className="font-bold text-slate-900 mb-4">Udyam Registration</h4>
                    <p className="text-slate-500 leading-relaxed">The newest registration process. It replaced earlier processes. Businesses need to register here to avail benefits. Based on self-declaration.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-slate-300">
                    <h4 className="font-bold text-slate-900 mb-4">MSME Registration</h4>
                    <p className="text-slate-500 leading-relaxed">The old process of registering MSMEs in India. It was replaced by Udyam. Required document submission to respective authorities.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-slate-300">
                    <h4 className="font-bold text-slate-900 mb-4">Udyog Aadhaar</h4>
                    <p className="text-slate-500 leading-relaxed">Earlier simplified online process. Provided a unique UAM. Now out of date; businesses must transition to Udyam.</p>
                </div>
            </div>
          </section>

          <section className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-slate-100">
            <h2 className="text-3xl font-bold mb-12">Detailed Comparison Analysis</h2>
            <div className="space-y-12">
                <div>
                    <h5 className="font-bold text-amber-600 mb-2">1. Initiative and Purpose</h5>
                    <p className="text-slate-600">Udyog Aadhaar simplified the process; Udyam further streamlined it to enhance accessibility. MSME registration originally facilitated growth through recognition and support.</p>
                </div>
                <div>
                    <h5 className="font-bold text-amber-600 mb-2">2. Registration Criteria</h5>
                    <p className="text-slate-600">Criteria across all three remain fundamentally based on investment in plant/machinery and annual turnover, though the platform and process have matured.</p>
                </div>
                <div>
                    <h5 className="font-bold text-amber-600 mb-2">3. Registration Process</h5>
                    <p className="text-slate-600">Udyog Aadhaar was online; Udyam is a completely digitized self-declaration platform. The older MSME registration involved significant manual document submission.</p>
                </div>
                <div>
                    <h5 className="font-bold text-amber-600 mb-2">4. Benefits and Incentives</h5>
                    <p className="text-slate-600">All registrations facilitate access to credit guarantee schemes, subsidies on loans, preferential treatment in procurement, and tax exemptions.</p>
                </div>
            </div>
          </section>

          <section className="bg-[#0f172a] text-white p-12 md:p-20 rounded-[4rem]">
            <h2 className="text-3xl font-bold mb-10 text-center">The Udyam Registration Process</h2>
            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <span className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center font-bold">1</span>
                        <p className="text-sm">Visit official Udyam website and fill the application.</p>
                    </div>
                    <div className="flex gap-4">
                        <span className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center font-bold">2</span>
                        <p className="text-sm">Enter correct business and personal details.</p>
                    </div>
                    <div className="flex gap-4">
                        <span className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center font-bold">3</span>
                        <p className="text-sm">Submit application and get executive contact for processing.</p>
                    </div>
                </div>
                <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
                    <h4 className="font-bold text-amber-500 mb-2">Note for Applicants</h4>
                    <p className="text-xs text-slate-300 italic">Delay in certificates only occurs when the government website is under maintenance. Standard delivery is 2-3 working hours.</p>
                </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}