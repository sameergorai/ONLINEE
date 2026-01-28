"use client";

import React from "react";
import { CheckCircle, Info, ShieldCheck, ArrowRight } from "lucide-react";
import Msmefrom from "../componts/Msmefrom"; // aap chaaho to GemForm kar sakte ho

export default function GemRegistrationPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
      
      {/* HERO SECTION */}
      <section className="bg-[#0f172a] pt-16 p-1 text-white relative">
        <div className="container mx-auto px-6 text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            GeM Registration | Government e-Marketplace Seller
          </h1>
          <p className="text-amber-500 font-bold uppercase tracking-widest text-sm">
            Sell Products & Services to Government Departments
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
                  Name as per Aadhaar / PAN.
                </p>
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    MOBILE NUMBER:
                  </span>
                  Active mobile linked with Aadhaar.
                </p>
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    EMAIL ID:
                  </span>
                  Login credentials will be shared here.
                </p>
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    BUSINESS DETAILS:
                  </span>
                  Firm name, constitution & address.
                </p>
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    BANK DETAILS:
                  </span>
                  Required for payments from government buyers.
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 flex items-start gap-4 shadow-sm">
              <ShieldCheck className="text-green-600 flex-shrink-0" size={28} />
              <div className="text-sm">
                <p className="font-bold text-green-900">Quick Activation</p>
                <p className="text-green-700 leading-tight">
                  GeM Seller ID activation within 24–48 working hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SELLER TYPES */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Types of Sellers on GeM
            </h2>
            <p className="text-slate-500 mt-2">
              Eligible Businesses & Individuals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-amber-600 mb-4">
                Proprietorship
              </h3>
              <ul className="text-sm space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Individual sellers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Aadhaar & PAN required
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-amber-600 mb-4">
                Company / LLP
              </h3>
              <ul className="text-sm space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Pvt Ltd / LLP
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> MCA & GST details
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-amber-600 mb-4">
                MSME / Startup
              </h3>
              <ul className="text-sm space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Udyam / DPIIT benefit
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Preference in tenders
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ABOUT GEM */}
        <section className="mt-24 bg-white p-12 rounded-[3rem] shadow-sm border">
          <h2 className="text-3xl font-bold mb-6">
            What is GeM Registration?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Government e-Marketplace (GeM) is an online platform launched by the
            Government of India to facilitate procurement of goods and services
            by government departments. Sellers registered on GeM can directly
            sell to ministries, PSUs, and government buyers.
          </p>
        </section>
      </div>
    </div>
  );
}
