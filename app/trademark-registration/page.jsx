'use client'
import React, { useState } from 'react'
import './ttss.css'

function Page() {
    // State management for steps and data
    const [step, setStep] = useState(1); // 1: Form, 2: Acknowledgment/Summary
    const [formData, setFormData] = useState({});
    const [status, setStatus] = useState({ message: '', isError: false, loading: false });

    const PAYU_KEY = "P3tnUM";
    const PAYU_URL = "https://secure.payu.in/_payment";

    // Step 1: Initial Form Submit -> Move to Summary
    const handleInitialSubmit = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        setFormData(data);
        setStep(2); // Move to Acknowledgment Screen
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Step 2: Final Secure Payment Execution
    const handleFinalPayment = async () => {
        setStatus({ message: 'Initializing secure payment...', isError: false, loading: true });

        try {
            const response = await fetch('https://onlinedigitalindia.com/api/registration.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success && result.payu_data) {
                redirectToPayU(result.payu_data);
            } else {
                setStatus({ message: result.message || 'Registration failed', isError: true, loading: false });
            }
        } catch (error) {
            setStatus({ message: `System Error: ${error.message}`, isError: true, loading: false });
        }
    };

    const redirectToPayU = (pd) => {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = PAYU_URL;

        const params = {
            key: PAYU_KEY,
            txnid: pd.txnid,
            amount: "4999.00",
            firstname: pd.firstname || formData.name,
            email: pd.email || formData.email,
            phone: pd.phone || formData.number,
            productinfo: "Trademark Registration",
            surl: "https://onlinedigitalindia.com/api/payment-response.php",
            furl: "https://onlinedigitalindia.com/api/payment-response.php",
            hash: pd.hash,
            service_provider: "payu_paisa"
        };

        for (const key in params) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = params[key];
            form.appendChild(input);
        }

        document.body.appendChild(form);
        form.submit();
    };

    return (
        <div className="bg-slate-50 text-slate-800 sam">
            <style jsx>{` @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap'); `}</style>

            {/* Adjusted Section Padding and min-height for mobile */}
            <section className="relative min-h-[600px]  flex items-center py-12 lg:py-0 bg-[#0f172a] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
                    className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Legal Protection" />
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,23,42,0.9)] to-[rgba(15,23,42,0.7)]"></div>

                {/* Adjusted responsive padding: px-6 for mobile, md:px-20 for desktop */}
                <div className="container mx-auto px-6 md:px-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                        
                        {/* Left Side Content - Centered on mobile */}
                        <div className="text-white space-y-6 text-center lg:text-left">
                            <span className="inline-block px-4 py-1 bg-[#b45309]/20 border border-[#b45309]/40 rounded text-[#b45309] text-xs font-bold uppercase tracking-widest">Premium Consultancy</span>
                            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                                Secure Your Brand with <span className="text-[#b45309]">Strategic Protection</span>
                            </h1>
                            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">Experience a seamless, expert-led journey in trademark compliance and brand security.</p>
                        </div>

                        {/* STEP 1: REGISTRATION FORM */}
                        {step === 1 && (
                            <div id="registration-form" className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl border border-slate-100 transition-all duration-500">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Register Your Brand</h3>
                                <p className="text-slate-500 text-sm mb-6 md:mb-8">Begin your professional brand protection journey.</p>

                                <form onSubmit={handleInitialSubmit} className="space-y-4 md:space-y-5">
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-slate-400 mb-2 tracking-wider">Full Name</label>
                                        <input type="text" name="name" placeholder="Enter your full name" required className="w-full px-4 py-3 md:py-4 rounded-lg border border-slate-200 focus:border-[#b45309] outline-none transition bg-slate-50/50" />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-slate-400 mb-2 tracking-wider">Email Address</label>
                                            <input type="email" name="email" placeholder="email@domain.com" required className="w-full px-4 py-3 md:py-4 rounded-lg border border-slate-200 focus:border-[#b45309] outline-none transition bg-slate-50/50" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-slate-400 mb-2 tracking-wider">Mobile Number</label>
                                            <input type="tel" name="number" placeholder="98765 43210" required className="w-full px-4 py-3 md:py-4 rounded-lg border border-slate-200 focus:border-[#b45309] outline-none transition bg-slate-50/50" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-slate-400 mb-2 tracking-wider">State / UT</label>
                                        <select name="state" required className="w-full px-4 py-3 md:py-4 rounded-lg border border-slate-200 focus:border-[#b45309] outline-none transition bg-slate-50/50">
                                            <option value="">Select Location</option>
                                            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                            <option value="Assam">Assam</option>
                                            <option value="Bihar">Bihar</option>
                                            <option value="Chandigarh">Chandigarh</option>
                                            <option value="Chhattisgarh">Chhattisgarh</option>
                                            <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                                            <option value="Delhi">Delhi</option>
                                            <option value="Goa">Goa</option>
                                            <option value="Gujarat">Gujarat</option>
                                            <option value="Haryana">Haryana</option>
                                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                                            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                            <option value="Jharkhand">Jharkhand</option>
                                            <option value="Karnataka">Karnataka</option>
                                            <option value="Kerala">Kerala</option>
                                            <option value="Ladakh">Ladakh</option>
                                            <option value="Lakshadweep">Lakshadweep</option>
                                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                                            <option value="Maharashtra">Maharashtra</option>
                                            <option value="Manipur">Manipur</option>
                                            <option value="Meghalaya">Meghalaya</option>
                                            <option value="Mizoram">Mizoram</option>
                                            <option value="Nagaland">Nagaland</option>
                                            <option value="Odisha">Odisha</option>
                                            <option value="Puducherry">Puducherry</option>
                                            <option value="Punjab">Punjab</option>
                                            <option value="Rajasthan">Rajasthan</option>
                                            <option value="Sikkim">Sikkim</option>
                                            <option value="Tamil Nadu">Tamil Nadu</option>
                                            <option value="Telangana">Telangana</option>
                                            <option value="Tripura">Tripura</option>
                                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                                            <option value="Uttarakhand">Uttarakhand</option>
                                            <option value="West Bengal">West Bengal</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="w-full bg-[#b45309] hover:bg-amber-800 text-white font-bold py-4 md:py-5 rounded-lg transition shadow-xl mt-4 tracking-widest uppercase text-sm">
                                        Continue to Summary
                                    </button>
                                </form>
                            </div>
                        )}

                        {/* STEP 2: ACKNOWLEDGMENT & SUMMARY SCREEN */}
                        {step === 2 && (
                            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl border border-slate-100 animate-in fade-in slide-in-from-right-5 duration-500">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Review & Acknowledgment</h3>

                                {/* Summary Table */}
                                <div className="bg-slate-50 rounded-xl p-5 md:p-6 mb-8 border border-slate-100">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Application Summary</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between border-b border-slate-200 pb-2">
                                            <span className="text-slate-500 text-sm">Applicant</span>
                                            <span className="font-semibold text-slate-900 text-sm">{formData.name}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-slate-200 pb-2">
                                            <span className="text-slate-500 text-sm">Service</span>
                                            <span className="font-semibold text-slate-900 text-sm">Trademark Consultancy</span>
                                        </div>
                                        <div className="flex flex-col space-y-2 border-t border-slate-100 pt-6 mt-6">
                                            <div className="flex justify-between items-center">
                                                <span className="text-slate-500 text-sm uppercase tracking-widest font-medium">Professional Service Fee </span>
                                                <span className="font-bold text-[#b45309] text-xl tracking-tight">₹4,999.00</span>
                                            </div>
                                            <p className="text-[11px] text-slate-400 italic leading-relaxed">
                                                * This is a comprehensive, all-inclusive flat fee for our end-to-end professional consultancy and brand protection services.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Disclaimer Box */}
                                <div className="p-4 md:p-5 bg-amber-50 rounded-xl border border-amber-100 mb-8">
                                    <p className="text-[11px] leading-relaxed text-amber-900 opacity-80">
                                        <strong>Disclaimer:</strong> This is a private consultancy service. We are not affiliated with any government department or official. <br /><br />
                                        <strong>Refund Policy:</strong> All payments made to us are <strong>non-refundable</strong>.
                                    </p>
                                </div>

                                {status.message && (
                                    <div className={`mb-6 p-4 rounded-lg text-sm font-semibold border ${status.isError ? 'bg-red-50 border-red-200 text-red-700' : 'bg-green-50 border-green-200 text-green-700'}`}>
                                        {status.message}
                                    </div>
                                )}

                                <div className="space-y-4">
                                    <button
                                        onClick={handleFinalPayment}
                                        disabled={status.loading}
                                        className={`w-full bg-[#b45309] hover:bg-amber-800 text-white font-bold py-4 md:py-5 rounded-lg transition shadow-xl tracking-widest uppercase text-sm ${status.loading ? 'opacity-50' : ''}`}
                                    >
                                        {status.loading ? 'SECURELY REDIRECTING...' : 'PROCEED TO PAYMENT'}
                                    </button>
                                    <button
                                        onClick={() => setStep(1)}
                                        disabled={status.loading}
                                        className="w-full text-slate-400 hover:text-slate-600 text-xs font-bold uppercase tracking-widest transition"
                                    >
                                        Edit Details
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page;