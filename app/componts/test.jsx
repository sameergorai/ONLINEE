// 'use client'
// import React from 'react'
// import '../trademark-registration/ttss.css'
// import { useState } from 'react';

// function page() {

//     const [status, setStatus] = useState(''); // To show success/error messages

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setStatus('Sending...');

//         const formData = new FormData(e.target);
//         const data = Object.fromEntries(formData.entries());

//         try {
//             const response = await fetch('https://onlinedigitalindia.com/api/registration.php', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(data),
//             });

//             const result = await response.json();

//             if (result.success) {
//                 setStatus('Registration Successful!');
//                 e.target.reset();
//             } else {
//                 setStatus('Error: ' + result.message);
//             }
//         } catch (error) {
//             setStatus('Server error. Please try again later.');
//         }
//     };
//     return (
//         <div className="bg-slate-50 text-slate-800 sam">
//             <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
       
//         `}
//             </style>

//             {/* <nav className="bg-white sticky top-0 z-50 shadow-md">
//                 <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//                     <div className="flex items-center gap-2">
//                         <span className="text-2xl font-bold text-slate-900 tracking-tighter">e-digital<span className="text-[#b45309]">.India</span></span>
//                 <span className="text-2xl font-bold text-slate-900 tracking-tighter">online-digital<span className="text-amber-600"> India</span></span>

//                     </div>
//                     <div className="hidden md:flex gap-8 font-semibold text-slate-600 text-sm uppercase tracking-widest">
//                         <a href="/" className="hover:text-[#b45309] transition">Home</a>
//                         <a href="#benefits" className="hover:text-[#b45309] transition">Benefits</a>
//                         <a href="#process" className="hover:text-[#b45309] transition">Process</a>
//                     </div>
//                     <a href="tel:+918448331281" className="bg-[#0f172a] text-white px-5 py-2 rounded font-bold text-sm shadow-lg">
//                         <i className="fas fa-phone-alt mr-2"></i> +91 8448331281
//                     </a>
//                 </div>
//             </nav> */}

//             <section className="relative min-h-[600px] flex items-center py-16 bg-[#0f172a] overflow-hidden">
//                 <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
//                     className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Legal Protection" />
//                 <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,23,42,0.9)] to-[rgba(15,23,42,0.7)]"></div>

//                 <div className="container mx-auto px-6 relative z-10">
//                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                         <div className="text-white space-y-6">
//                             <span className="inline-block px-4 py-1 bg-[#b45309]/20 border border-gold/40 rounded text-[#b45309] text-xs font-bold uppercase tracking-widest">Brand Protection Services</span>
//                             <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
//                                 Get Your Trademark Registered Online Easily with <span className="text-[#b45309]">Expert Guidance</span>
//                             </h1>
//                             <p className="text-lg text-slate-300">
//                                 Secure your brand the easy way. We guide you step-by-step to get your trademark registered online without any stress.
//                             </p>
//                             <div className="flex items-center gap-4 text-sm font-medium">
//                                 <span className="flex items-center gap-2"><i className="fas fa-check-circle text-[#b45309]"></i> Fast Filing</span>
//                                 <span className="flex items-center gap-2"><i className="fas fa-check-circle text-[#b45309]"></i> Expert Search</span>
//                                 <span className="flex items-center gap-2"><i className="fas fa-check-circle text-[#b45309]"></i> Secure Process</span>
//                             </div>
//                         </div>

//                         <div id="registration-form" className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-100">
//                             <h3 className="text-2xl font-bold text-slate-900 mb-2">Register Your Brand</h3>
//                             <p className="text-slate-500 text-sm mb-6">Fill the form below and our legal experts will contact you.</p>

//                             <form action="#" method="POST" className="space-y-4">
//                                 <div>
//                                     <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Full Name</label>
//                                     <input type="text" name="name" placeholder="Enter your name" required
//                                         className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition " />
//                                 </div>
//                                 <div className="grid md:grid-cols-2 gap-4">
//                                     <div>
//                                         <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Email Address</label>
//                                         <input type="email" name="email" placeholder="email@domain.com" required
//                                             className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition" />
//                                     </div>
//                                     <div>
//                                         <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Mobile Number</label>
//                                         <input type="tel" name="number" placeholder="98765 43210" required
//                                             className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition" />
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Select State</label>
//                                     <select
//                                         name="state"
//                                         required
//                                         className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition bg-white"
//                                     >
//                                         <option value="">Select your state / UT</option>

//                                         {/* States */}
//                                         <option value="Andhra Pradesh">Andhra Pradesh</option>
//                                         <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//                                         <option value="Assam">Assam</option>
//                                         <option value="Bihar">Bihar</option>
//                                         <option value="Chhattisgarh">Chhattisgarh</option>
//                                         <option value="Goa">Goa</option>
//                                         <option value="Gujarat">Gujarat</option>
//                                         <option value="Haryana">Haryana</option>
//                                         <option value="Himachal Pradesh">Himachal Pradesh</option>
//                                         <option value="Jharkhand">Jharkhand</option>
//                                         <option value="Karnataka">Karnataka</option>
//                                         <option value="Kerala">Kerala</option>
//                                         <option value="Madhya Pradesh">Madhya Pradesh</option>
//                                         <option value="Maharashtra">Maharashtra</option>
//                                         <option value="Manipur">Manipur</option>
//                                         <option value="Meghalaya">Meghalaya</option>
//                                         <option value="Mizoram">Mizoram</option>
//                                         <option value="Nagaland">Nagaland</option>
//                                         <option value="Odisha">Odisha</option>
//                                         <option value="Punjab">Punjab</option>
//                                         <option value="Rajasthan">Rajasthan</option>
//                                         <option value="Sikkim">Sikkim</option>
//                                         <option value="Tamil Nadu">Tamil Nadu</option>
//                                         <option value="Telangana">Telangana</option>
//                                         <option value="Tripura">Tripura</option>
//                                         <option value="Uttar Pradesh">Uttar Pradesh</option>
//                                         <option value="Uttarakhand">Uttarakhand</option>
//                                         <option value="West Bengal">West Bengal</option>

//                                         {/* Union Territories */}
//                                         <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
//                                         <option value="Chandigarh">Chandigarh</option>
//                                         <option value="Dadra and Nagar Haveli and Daman and Diu">
//                                             Dadra and Nagar Haveli and Daman and Diu
//                                         </option>
//                                         <option value="Delhi">Delhi (NCT)</option>
//                                         <option value="Jammu and Kashmir">Jammu and Kashmir</option>
//                                         <option value="Ladakh">Ladakh</option>
//                                         <option value="Lakshadweep">Lakshadweep</option>
//                                         <option value="Puducherry">Puducherry</option>
//                                     </select>

//                                 </div>
//                                 <button type="submit" className="w-full bg-[#b45309] hover:bg-amber-700 text-white font-bold py-4 rounded-lg transition shadow-lg transform hover:-translate-y-1">
//                                     START REGISTRATION NOW
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="py-20 bg-white">
//                 <div className="container mx-auto px-6 max-w-4xl">
//                     <div className="text-center space-y-6">
//                         <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
//                             Get Trademark Registration Online with Expert Support at Online Digital India
//                         </h2>
//                         <div className="w-20 h-1.5 bg-[#b45309] mx-auto rounded-full"></div>
//                         <p className="text-lg text-slate-600 leading-relaxed">
//                             Protecting your brand is one of the most important steps for any business. At Online Digital India, our expert team helps you get trademark registration online seamlessly with the government, ensuring your brand name, logo, or slogan is legally protected for years to come.
//                         </p>
//                         <p className="text-slate-600 italic">
//                             "With our guidance, you won’t have to worry about complicated forms, legal terms, or missing deadlines; we take care of everything while you focus on growing your business."
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             <section className="py-20 bg-slate-50">
//                 <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
//                     <div>
//                         <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80" className="rounded-3xl shadow-xl" alt="Trademark Meaning" />
//                     </div>
//                     <div className="space-y-6">
//                         <h2 className="text-3xl font-bold text-slate-900">What Is Trademark Registration & Why It Matters</h2>
//                         <p className="text-slate-600">A trademark is a unique sign, name, logo, or slogan that identifies your business and sets it apart from others. Once registered with the Government of India, it gives you exclusive rights to use your brand identity and prevents others from copying or misusing it.</p>
//                         <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
//                             <p className="text-red-700 font-medium">Without proper trademark protection, competitors can legally use similar names or logos, leading to customer confusion and weakening your brand reputation.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section id="benefits" className="py-20 bg-white">
//                 <div className="container mx-auto px-6">
//                     <h2 className="text-3xl font-bold text-center mb-12">Benefits of Registering Your Trademark with Us</h2>
//                     <div className="grid md:grid-cols-3 gap-8">
//                         <div className="p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition group border border-slate-100">
//                             <div className="w-12 h-12 bg-[#0f172a] text-[#b45309] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
//                                 <i className="fas fa-gavel"></i>
//                             </div>
//                             <h4 className="text-xl font-bold mb-3">Legal Protection Across India</h4>
//                             <p className="text-sm text-slate-500">Once registered, your trademark is protected nationwide. No one else can use the same or a similar mark in your category.</p>
//                         </div>
//                         <div className="p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition group border border-slate-100">
//                             <div className="w-12 h-12 bg-[#0f172a] text-[#b45309] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
//                                 <i className="fas fa-crown"></i>
//                             </div>
//                             <h4 className="text-xl font-bold mb-3">Exclusive Rights to Your Brand</h4>
//                             <p className="text-sm text-slate-500">A registered trademark becomes your intellectual property, adding authenticity and encouraging customer trust.</p>
//                         </div>
//                         <div className="p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition group border border-slate-100">
//                             <div className="w-12 h-12 bg-[#0f172a] text-[#b45309] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
//                                 <i className="fas fa-handshake"></i>
//                             </div>
//                             <h4 className="text-xl font-bold mb-3">Builds Trust & Recognition</h4>
//                             <p className="text-sm text-slate-500">Demonstrates that your brand is serious and credible, enhancing long-term brand loyalty.</p>
//                         </div>
//                         <div className="p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition group border border-slate-100">
//                             <div className="w-12 h-12 bg-[#0f172a] text-[#b45309] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
//                                 <i className="fas fa-shield-alt"></i>
//                             </div>
//                             <h4 className="text-xl font-bold mb-3">Legal Advantage</h4>
//                             <p className="text-sm text-slate-500">Rights allow you to take legal action if someone tries to copy or misuse your brand identity.</p>
//                         </div>
//                         <div className="p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition group border border-slate-100 md:col-span-2">
//                             <div className="w-12 h-12 bg-[#0f172a] text-[#b45309] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
//                                 <i className="fas fa-chart-line"></i>
//                             </div>
//                             <h4 className="text-xl font-bold mb-3">Long-Lasting Asset for Your Business</h4>
//                             <p className="text-sm text-slate-500">A registered trademark is valid for 10 years and can be renewed indefinitely, providing long-term protection that grows with your business.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="py-20 bg-[#0f172a] text-white">
//                 <div className="container mx-auto px-6 text-center">
//                     <h2 className="text-3xl font-bold mb-12">Items You Can Protect with a Trademark</h2>
//                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//                         <div className="p-6 bg-white/5 rounded-xl border border-white/10">
//                             <i className="fas fa-font text-3xl text-[#b45309] mb-4"></i>
//                             <p className="font-bold">Business Name</p>
//                         </div>
//                         <div className="p-6 bg-white/5 rounded-xl border border-white/10">
//                             <i className="fas fa-pen-nib text-3xl text-[#b45309] mb-4"></i>
//                             <p className="font-bold">Logo or Symbol</p>
//                         </div>
//                         <div className="p-6 bg-white/5 rounded-xl border border-white/10">
//                             <i className="fas fa-quote-right text-3xl text-[#b45309] mb-4"></i>
//                             <p className="font-bold">Tagline / Slogan</p>
//                         </div>
//                         <div className="p-6 bg-white/5 rounded-xl border border-white/10">
//                             <i className="fas fa-box text-3xl text-[#b45309] mb-4"></i>
//                             <p className="font-bold">Product Names</p>
//                         </div>
//                         <div className="p-6 bg-white/5 rounded-xl border border-white/10">
//                             <i className="fas fa-palette text-3xl text-[#b45309] mb-4"></i>
//                             <p className="font-bold">Brand Graphics</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section id="process" className="py-20 bg-white">
//                 <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
//                     <div className="space-y-6">
//                         <h2 className="text-3xl font-bold text-slate-900 leading-snug">Why Choose Online Digital India for Trademark Registration</h2>
//                         <p className="text-slate-500">Online Digital India makes it simple by providing professional support throughout the registration process:</p>
//                         <ul className="space-y-4">
//                             <li className="flex items-start gap-4">
//                                 <i className="fas fa-check-circle text-[#b45309] mt-1"></i>
//                                 <span><strong>Expert Guidance</strong> – Understand what is needed and ensure precise application.</span>
//                             </li>
//                             <li className="flex items-start gap-4">
//                                 <i className="fas fa-check-circle text-[#b45309] mt-1"></i>
//                                 <span><strong>Trademark Search</strong> – Check availability and avoid conflicts with existing marks.</span>
//                             </li>
//                             <li className="flex items-start gap-4">
//                                 <i className="fas fa-check-circle text-[#b45309] mt-1"></i>
//                                 <span><strong>Document Preparation</strong> – Submit forms correctly to prevent delays.</span>
//                             </li>
//                             <li className="flex items-start gap-4">
//                                 <i className="fas fa-check-circle text-[#b45309] mt-1"></i>
//                                 <span><strong>Objection Support</strong> – Help in responding to concerns raised by the office.</span>
//                             </li>
//                         </ul>
//                     </div>
//                     <div>
//                         <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" className="rounded-3xl shadow-xl" alt="Consulting" />
//                     </div>
//                 </div>
//             </section>

//             <section className="py-20 bg-[#b45309] text-white">
//                 <div className="container mx-auto px-6 text-center space-y-8">
//                     <h2 className="text-4xl font-extrabold tracking-tight">Lock in Your Brand Identity for the Future</h2>
//                     <p className="text-xl opacity-90 max-w-2xl mx-auto">Don’t leave your most valuable asset unprotected. Get professional guidance and legal certainty today.</p>
//                     <a href="#registration-form" className="inline-block bg-[#0f172a] text-white px-12 py-5 rounded-lg font-black text-lg shadow-2xl hover:bg-slate-800 transition transform hover:-translate-y-1">
//                         SECURE MY BRAND NOW
//                     </a>
//                 </div>
//             </section>

           

//         </div>
//     )
// }

// export default page