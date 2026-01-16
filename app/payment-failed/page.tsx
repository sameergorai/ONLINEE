'use client';

import Link from 'next/link';
import { XCircle, RefreshCcw } from 'lucide-react';

export default function PaymentFailedPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 max-w-lg w-full text-center space-y-6">
        
        <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <XCircle className="w-12 h-12 text-red-500" />
        </div>

        <h1 className="text-3xl font-black text-slate-900">Payment Failed</h1>
        
        <p className="text-slate-500 text-lg">
          We couldn't process your payment. This might be due to a bank decline or a network issue.
        </p>

        <div className="pt-4">
          <Link 
            href="/" 
            className="block w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
          >
            <RefreshCcw size={18} /> Try Again
          </Link>
        </div>

      </div>
    </div>
  );
}