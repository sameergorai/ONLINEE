'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, ArrowRight, Home } from 'lucide-react';
import { Suspense } from 'react';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const txnid = searchParams.get('id');

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 max-w-lg w-full text-center space-y-6">
      <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-12 h-12 text-green-500" />
      </div>

      <h1 className="text-3xl font-black text-slate-900">Payment Successful!</h1>
      
      <p className="text-slate-500 text-lg">
        Thank you for your payment. Your registration is now complete.
      </p>

      {txnid && (
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Transaction ID</p>
          <p className="text-slate-900 font-mono font-bold break-all">{txnid}</p>
        </div>
      )}

      <div className="pt-4 space-y-3">
        <Link 
          href="/dashboard" 
          className="block w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
        >
          Go to Dashboard <ArrowRight size={18} />
        </Link>
        
        <Link 
          href="/" 
          className="block w-full py-4 text-slate-500 font-bold hover:text-slate-900 transition-all flex items-center justify-center gap-2"
        >
          <Home size={18} /> Back to Home
        </Link>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <ThankYouContent />
      </Suspense>
    </div>
  );
}