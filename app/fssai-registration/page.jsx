"use client";

import React from "react";
import { CheckCircle, Info, ShieldCheck, ArrowRight } from "lucide-react";
import Msmefrom from "../componts/Msmefrom"; // aap chaaho to naam FssaiForm kar sakte ho

export default function FssaiRegistrationPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      
      {/* HERO SECTION */}
      <section className="bg-[#0f172a] pt-16 p-1 text-white relative">
        <div className="container mx-auto px-6 text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            FSSAI Registration | Food License Online Consultancy
          </h1>
          <p className="text-amber-500 font-bold uppercase tracking-widest text-sm">
            Food Safety & Standards Authority of India
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 pt-9 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* FORM COLUMN */}
          <div className="lg:col-span-2">
            <Msmefrom />
          </div>

          {/* INSTRUCTIONS */}
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
                  Enter full name as per Aadhaar.
                </p>
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    MOBILE NUMBER:
                  </span>
                  10 digit active mobile number required.
                </p>
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    EMAIL ID:
                  </span>
                  License & acknowledgment will be sent here.
                </p>
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    BUSINESS ADDRESS:
                  </span>
                  Food business operation address.
                </p>
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    TYPE OF FOOD BUSINESS:
                  </span>
                  Manufacturer / Trader / Restaurant / Home Food.
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 flex items-start gap-4 shadow-sm">
              <ShieldCheck className="text-green-600 flex-shrink-0" size={28} />
              <div className="text-sm">
                <p className="font-bold text-green-900">Fast Processing</p>
                <p className="text-green-700 leading-tight">
                  FSSAI certificate delivered within 24–72 working hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FSSAI LICENSE TYPES */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Types of FSSAI License
            </h2>
            <p className="text-slate-500 mt-2">
              Based on Turnover & Business Scale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-amber-600 mb-4">
                Basic Registration
              </h3>
              <ul className="text-sm space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Turnover up to ₹12 Lakhs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Home food & petty vendors
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-amber-600 mb-4">
                State License
              </h3>
              <ul className="text-sm space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Turnover ₹12L – ₹20 Cr
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Restaurants & manufacturers
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-amber-600 mb-4">
                Central License
              </h3>
              <ul className="text-sm space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Turnover above ₹20 Cr
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Import / Export businesses
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ABOUT FSSAI */}
        <section className="mt-24 bg-white p-12 rounded-[3rem] shadow-sm border">
          <h2 className="text-3xl font-bold mb-6">
            What is FSSAI Registration?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            FSSAI Registration is mandatory for every food business operator in
            India. It is governed by the Food Safety and Standards Authority of
            India to ensure food quality and safety standards.
          </p>
        </section>
      </div>
    </div>
  );
}
