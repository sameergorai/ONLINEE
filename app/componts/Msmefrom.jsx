"use client";
import React, { useState, useEffect } from 'react';

function Msmefrom() {
  const [formData, setFormData] = useState({ male: 0, female: 0, other: 0, total: 0 });
  const [status, setStatus] = useState({ message: '', isError: false, loading: false });

  useEffect(() => {
    const total = Number(formData.male) + Number(formData.female) + Number(formData.other);
    setFormData(prev => ({ ...prev, total }));
  }, [formData.male, formData.female, formData.other]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: 'Processing Application...', isError: false, loading: true });

    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    data.total = formData.total;

    try {
      const res = await fetch('https://onlinedigitalindia.com/api/registration_msme.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success && result.payu_data) {
        // Create hidden form and submit to PayU
        const pd = result.payu_data;
        const payuForm = document.createElement('form');
        payuForm.method = 'POST';
        payuForm.action = "https://secure.payu.in/_payment";

        const fields = {
          key: "P3tnUM", 
          txnid: pd.txnid,
          amount: pd.amount,
          firstname: pd.firstname,
          email: pd.email,
          phone: pd.phone,
          productinfo: pd.productinfo,
          surl: "https://onlinedigitalindia.com/api/msme-success.php",
          furl: "https://onlinedigitalindia.com/api/msme-success.php",
          hash: pd.hash,
          service_provider: "payu_paisa"
        };

        Object.entries(fields).forEach(([key, value]) => {
          const input = document.createElement('input');
          input.type = 'hidden'; input.name = key; input.value = value;
          payuForm.appendChild(input);
        });

        document.body.appendChild(payuForm);
        payuForm.submit();
      } else {
        setStatus({ message: result.message || 'Submission failed', isError: true, loading: false });
      }
    } catch (err) {
      setStatus({ message: 'Network Error', isError: true, loading: false });
    }
  };

  const states = ["ANDHRA PRADESH", "BIHAR", "DELHI", "GUJARAT", "JHARKHAND", "MAHARASHTRA", "WEST BENGAL"];

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 border border-slate-100">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <span className="w-1.5 h-8 bg-amber-600 rounded-full"></span>
        Udyam Registration Consultancy Online Form
      </h2>

      {status.message && (
        <div className={`mb-6 p-4 rounded-lg text-sm font-bold ${status.isError ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase">Applicant Name *</label>
            <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase">Mobile Number *</label>
            <input type="tel" name="number" required className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none" />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] font-black text-slate-400 uppercase">Email ID *</label>
          <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-200 outline-none" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase">Business Address *</label>
            <textarea name="business_address" required className="w-full px-4 py-3 rounded-lg border border-slate-200 h-24 outline-none" />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-black text-slate-400 uppercase">Office Address *</label>
            <textarea name="office_address" required className="w-full px-4 py-3 rounded-lg border border-slate-200 h-24 outline-none" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-1"><label className="text-[10px] uppercase">Pincode</label><input type="text" name="pincode" className="w-full px-4 py-3 border rounded-lg" /></div>
          <div className="space-y-1"><label className="text-[10px] uppercase">State</label>
            <select name="state" className="w-full px-4 py-3 border rounded-lg bg-white">
              {states.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="space-y-1"><label className="text-[10px] uppercase">District</label><input type="text" name="district" className="w-full px-4 py-3 border rounded-lg" /></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-1"><label className="text-[10px] uppercase">Social Category</label><select name="social_category" className="w-full px-4 py-3 border rounded-lg"><option>General</option><option>OBC</option><option>SC</option><option>ST</option></select></div>
          <div className="space-y-1"><label className="text-[10px] uppercase">Org Type</label><select name="org_type" className="w-full px-4 py-3 border rounded-lg"><option>Proprietorship</option><option>Private Limited</option></select></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-1"><label className="text-[10px] uppercase">Business Name</label><input type="text" name="business_name" className="w-full px-4 py-3 border rounded-lg" /></div>
          <div className="space-y-1"><label className="text-[10px] uppercase">Commencement Date</label><input type="date" name="commencement_date" className="w-full px-4 py-3 border rounded-lg" /></div>
        </div>

        <div className="space-y-1"><label className="text-[10px] uppercase">Main Activity</label><select name="business_activity" className="w-full px-4 py-3 border rounded-lg"><option>Manufacturer</option><option>Service Provider</option></select></div>
        <div className="space-y-1"><label className="text-[10px] uppercase">Additional Details</label><input type="text" name="additional_details" className="w-full px-4 py-3 border rounded-lg" /></div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
          <label className="text-[10px] font-black text-slate-900 uppercase block mb-4">Number of Persons Employed</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <input type="number" placeholder="Male" name="emp_male" onChange={(e) => setFormData({...formData, male: parseInt(e.target.value) || 0})} className="px-3 py-2 border rounded outline-none" />
            <input type="number" placeholder="Female" name="emp_female" onChange={(e) => setFormData({...formData, female: parseInt(e.target.value) || 0})} className="px-3 py-2 border rounded outline-none" />
            <input type="number" placeholder="Other" name="emp_other" onChange={(e) => setFormData({...formData, other: parseInt(e.target.value) || 0})} className="px-3 py-2 border rounded outline-none" />
            <div className="bg-slate-200 px-3 py-2 rounded font-bold text-center">Total: {formData.total}</div>
          </div>
        </div>

        <div className="flex items-start gap-3 py-4 border-t">
          <input type="checkbox" required className="mt-1 w-5 h-5 accent-amber-600" id="terms" />
          <label htmlFor="terms" className="text-xs text-slate-600 font-medium uppercase">I agree to the Terms of Service *</label>
        </div>

        <button type="submit" disabled={status.loading} className={`w-full bg-amber-600 text-white font-black py-4 rounded-xl shadow-xl transition active:scale-95 ${status.loading ? 'opacity-50' : 'hover:bg-amber-700'}`}>
          {status.loading ? 'Processing...' : 'Submit '}
        </button>
      </form>
    </div>
  );
}

export default Msmefrom;