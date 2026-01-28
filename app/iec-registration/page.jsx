"use client";

import React from "react";
import { CheckCircle, Info, ShieldCheck } from "lucide-react";
import Msmefrom from "../componts/Msmefrom"; // chaaho to IecForm rename kar sakte ho

export default function IecRegistrationPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">

      {/* HERO SECTION */}
      <section className="bg-[#0f172a] pt-16 p-1 text-white relative">
        <div className="container mx-auto px-6 text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            IEC Registration | Import Export Code Online
          </h1>
          <p className="text-amber-500 font-bold uppercase tracking-widest text-sm">
            Directorate General of Foreign Trade (DGFT)
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
                  Name as per PAN card.
                </p>
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    MOBILE NUMBER:
                  </span>
                  OTP will be sent on this number.
                </p>
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    EMAIL ID:
                  </span>
                  IEC certificate will be delivered here.
                </p>
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    BUSINESS DETAILS:
                  </span>
                  Firm name, address & nature of business.
                </p>
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    BANK DETAILS:
                  </span>
                  Cancelled cheque / bank certificate required.
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 flex items-start gap-4 shadow-sm">
              <ShieldCheck className="text-green-600 flex-shrink-0" size={28} />
              <div className="text-sm">
                <p className="font-bold text-green-900">Quick Approval</p>
                <p className="text-green-700 leading-tight">
                  IEC code generated within 24–48 working hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* IEC ELIGIBILITY */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Who Can Apply for IEC?
            </h2>
            <p className="text-slate-500 mt-2">
              Eligibility for Import Export Code
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-amber-600 mb-4">
                Proprietorship
              </h3>
              <ul className="text-sm space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Individual exporters/importers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> PAN & Aadhaar required
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-amber-600 mb-4">
                Company / LLP
              </h3>
              <ul className="text-sm space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Pvt Ltd / LLP entities
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> CIN / LLPIN mandatory
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-amber-600 mb-4">
                MSME / Startup
              </h3>
              <ul className="text-sm space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Udyam / DPIIT benefits
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Export incentives
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ABOUT IEC */}
        <section className="mt-24 bg-white p-12 rounded-[3rem] shadow-sm border">
          <h2 className="text-3xl font-bold mb-6">
            What is IEC Registration?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Import Export Code (IEC) is a mandatory registration issued by DGFT
            for businesses involved in import or export of goods and services.
            Without IEC, no import or export activity can be legally carried out
            in India.
          </p>
        </section>
      </div>
    </div>
  );
}
