'use client'
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { HiXCircle, HiRefresh } from 'react-icons/hi';

// Component that handles the URL logic
function FailedUI() {
    const searchParams = useSearchParams();
    const txnid = searchParams.get('id');

    return (
        <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 text-center border border-red-50 animate-in fade-in zoom-in duration-500">
            <div className="flex justify-center mb-6">
                <div className="bg-red-100 p-4 rounded-full">
                    <HiXCircle className="w-16 h-16 text-red-600" />
                </div>
            </div>

            <h1 className="text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Transaction Failed</h1>
            <p className="text-slate-500 mb-8 leading-relaxed">
                We couldn't process your payment. If any amount was deducted, it will be automatically reversed by your bank.
            </p>

            {txnid && (
                <div className="bg-red-50/50 rounded-2xl p-4 mb-8 border border-red-100">
                    <span className="block text-xs font-bold text-red-400 uppercase tracking-widest mb-1">Reference ID</span>
                    <span className="text-md font-mono font-bold text-red-800">{txnid}</span>
                </div>
            )}

            <div className="space-y-4">
                <Link href="/" className="w-full inline-flex items-center justify-center gap-2 bg-[#b45309] text-white font-bold py-4 rounded-xl transition hover:bg-amber-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    <HiRefresh className="w-5 h-5" /> Try Payment Again
                </Link>
                <Link href="/contact" className="block text-sm font-semibold text-slate-400 hover:text-slate-600 transition">
                    Contact Support for Assistance
                </Link>
            </div>
        </div>
    );
}

// Main exported page component
export default function FailedPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <Suspense fallback={
                <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 border-4 border-slate-200 border-t-red-500 rounded-full animate-spin"></div>
                    <p className="text-slate-400 text-sm font-medium">Checking Details...</p>
                </div>
            }>
                <FailedUI />
            </Suspense>
        </div>
    );
}