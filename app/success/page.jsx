'use client'
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi';

// Component that handles the URL logic
function SuccessUI() {
    const searchParams = useSearchParams();
    const txnid = searchParams.get('id');

    return (
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center border border-slate-100 animate-in fade-in zoom-in duration-500">
            <div className="flex justify-center mb-6">
                <div className="bg-emerald-100 p-4 rounded-full">
                    <HiCheckCircle className="w-16 h-16 text-emerald-600" />
                </div>
            </div>

            <h1 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Payment Received</h1>
            <p className="text-slate-500 mb-8 leading-relaxed">
                Thank you for choosing **Online Digital India**. Your trademark registration is now being processed.
            </p>

            <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Confirmation ID</span>
                <span className="text-lg font-mono font-bold text-slate-800">{txnid || "Processing..."}</span>
            </div>

            <div className="space-y-4">
                <Link href="/" className="w-full inline-flex items-center justify-center gap-2 bg-[#0f172a] text-white font-bold py-4 rounded-xl transition hover:bg-slate-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Go to Homepage <HiArrowRight />
                </Link>
                <p className="text-[11px] text-slate-400 italic px-4">
                    A detailed receipt has been dispatched to your email address.
                </p>
            </div>
        </div>
    );
}

// Main exported page component
export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <Suspense fallback={
                <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 border-4 border-slate-200 border-t-emerald-500 rounded-full animate-spin"></div>
                    <p className="text-slate-400 text-sm font-medium">Verifying Transaction...</p>
                </div>
            }>
                <SuccessUI />
            </Suspense>
        </div>
    );
}