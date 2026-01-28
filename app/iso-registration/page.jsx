"use client";

import React from "react";
import { CheckCircle, Info, ShieldCheck, ArrowRight } from "lucide-react";
import Msmefrom from "../componts/Msmefrom"; // chaaho to IsoForm rename kar sakte ho

export default function IsoRegistrationPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">

      {/* HERO SECTION */}
      <section className="bg-[#0f172a] pt-16 p-1 text-white relative">
        <div className="container mx-auto px-6 text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            ISO Registration | ISO Certification Online
          </h1>
          <p className="text-amber-500 font-bold uppercase tracking-widest text-sm">
            International Organization for Standardization
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 pt-9 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* FORM COLUMN */}
          <div className="lg:col-span-2">
            <Msmefrom />
          </div>

          {/* INSTRUCTIONS COLUMN */}
          <div className="space-y-6">
            <div className="bg-[#0f172a] text-white p-8 rounded-2xl shadow-xl border border-white/5">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Info className="text-amber-500" size={20} />
                Instructions
              </h3>

              <div className="space-y-5 text-[11px] leading-relaxed">
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    APPLICANT NAME:
                  </span>
                  Enter name as per official business records.
                </p>
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    MOBILE NUMBER:
                  </span>
                  Active mobile number for verification.
                </p>
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    EMAIL ID:
                  </span>
                  ISO certificate will be sent on this email.
                </p>
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    BUSINESS DETAILS:
                  </span>
                  Company name, address & scope of business.
                </p>
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    ISO TYPE:
                  </span>
                  Select required ISO standard (ISO 9001, 14001, etc.).
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 flex items-start gap-4 shadow-sm">
              <ShieldCheck className="text-green-600 flex-shrink-0" size={28} />
              <div className="text-sm">
                <p className="font-bold text-green-900">Fast Certification</p>
                <p className="text-green-700 leading-tight">
                  ISO certificate issued within 3–5 working days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ISO TYPES */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Popular ISO Certifications
            </h2>
            <p className="text-slate-500 mt-2">
              Choose Certification as per Business Requirement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-amber-600 mb-4">
                ISO 9001:2015
              </h3>
              <ul className="text-sm space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Quality Management System
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Customer satisfaction focus
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-amber-600 mb-4">
                ISO 14001:2015
              </h3>
              <ul className="text-sm space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Environmental Management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Legal compliance
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-amber-600 mb-4">
                ISO 45001:2018
              </h3>
              <ul className="text-sm space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Occupational Health & Safety
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Risk reduction
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ABOUT ISO */}
        <section className="mt-24 bg-white p-12 rounded-[3rem] shadow-sm border">
          <h2 className="text-3xl font-bold mb-6">
            What is ISO Certification?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            ISO Certification is an internationally recognized standard that
            ensures quality, safety, efficiency, and reliability of products
            and services. It enhances business credibility and helps in global
            trade and tender eligibility.
          </p>
        </section>
      </div>
    </div>
  );
}
