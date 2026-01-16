'use client'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

function ThankYouContent() {
    const searchParams = useSearchParams()
    const txnid = searchParams.get('id') || 'N/A'

    return (
        <div className="bg-slate-50 text-slate-800 min-h-screen font-sans">
             {/* Use your existing font setup */}
            <style jsx>{` @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap'); `}</style>

            <section className="relative min-h-[600px] flex items-center justify-center py-16 bg-[#0f172a] overflow-hidden">
                {/* Background effects from your main page */}
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,23,42,0.9)] to-[rgba(15,23,42,0.7)]"></div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-2xl">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-slate-100">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        
                        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Payment Successful!</h1>
                        <p className="text-slate-500 mb-8 text-lg">
                            Thank you for registering. Your application has been securely received.
                        </p>

                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-8 text-left">
                            <p className="text-sm text-slate-500 uppercase font-bold">Transaction ID</p>
                            <p className="text-lg font-mono text-slate-800 break-all">{txnid}</p>
                        </div>

                        <div className="space-y-4">
                            <Link href="/" className="block w-full bg-[#b45309] hover:bg-amber-700 text-white font-bold py-4 rounded-lg transition shadow-lg">
                                GO TO HOMEPAGE
                            </Link>
                            <p className="text-xs text-slate-400">
                                A confirmation email has been sent to your registered address.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default function ThankYouPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ThankYouContent />
        </Suspense>
    )
}