"use client";

import React from "react";
import { CheckCircle, Info, ShieldCheck } from "lucide-react";
import Msmefrom from "../componts/Msmefrom"; // chaaho to GstForm rename kar sakte ho

export default function GstRegistrationPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900">

      {/* HERO SECTION */}
      <section className="bg-[#0f172a] pt-16 p-1 text-white relative">
        <div className="container mx-auto px-6 text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            GST Registration | Apply GST Online
          </h1>
          <p className="text-amber-500 font-bold uppercase tracking-widest text-sm">
            Goods and Services Tax – Government of India
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
                  GST login & certificate sent here.
                </p>
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    BUSINESS DETAILS:
                  </span>
                  Trade name, nature of business & address.
                </p>
                <p>
                  <span className="text-amber-500 font-bold block mb-1">
                    BANK DETAILS:
                  </span>
                  Account number & IFSC required.
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 flex items-start gap-4 shadow-sm">
              <ShieldCheck className="text-green-600 flex-shrink-0" size={28} />
              <div className="text-sm">
                <p className="font-bold text-green-900">Fast Processing</p>
                <p className="text-green-700 leading-tight">
                  GST number generated within 3–7 working days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* GST TYPES */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">
              Types of GST Registration
            </h2>
            <p className="text-slate-500 mt-2">
              Choose GST category as per business requirement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-amber-600 mb-4">
                Regular GST
              </h3>
              <ul className="text-sm space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Normal taxpayers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Monthly/Quarterly returns
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-amber-600 mb-4">
                Composition Scheme
              </h3>
              <ul className="text-sm space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Lower tax rate
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Limited turnover
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-amber-600 mb-4">
                Casual / Non-Resident
              </h3>
              <ul className="text-sm space-y-3 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Temporary businesses
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} /> Exhibition / foreign sellers
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ABOUT GST */}
        <section className="mt-24 bg-white p-12 rounded-[3rem] shadow-sm border">
          <h2 className="text-3xl font-bold mb-6">
            What is GST Registration?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            GST Registration is mandatory for businesses whose turnover exceeds
            the prescribed threshold or who are involved in inter-state supply.
            GST provides a unified tax system across India and enables input
            tax credit benefits.
          </p>
        </section>
      </div>
    </div>
  );
}
