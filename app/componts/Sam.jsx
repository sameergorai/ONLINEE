'use client'
import Link from 'next/link'
import React from 'react'

function Sam() {
  return (
    <div className="bg-slate-50">
     <style jsx>{`
         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        h1, h2, h3 { font-family: 'Playfair Display', serif; }

        .glass-morph {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .hero-bg {
            background: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), 
                        url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
        }

        .service-card:hover img {
            transform: scale(1.1);
        }
      `}</style>

   

    <section className="hero-bg py-10 md:py-20 text-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
                <span className="inline-block px-4 py-1 bg-amber-600/20 border border-amber-600/30 rounded-full text-amber-400 text-xs font-bold tracking-[.2em] uppercase">Trusted by 10k+ Businesses</span>
                <h1 className="text-5xl md:text-7xl leading-[1.1]">Premier Legal & <br/><span className="text-amber-500 italic">Registration</span> Services</h1>
                <p className="text-lg text-slate-300 max-w-lg leading-relaxed">Simplifying complex Indian regulations for entrepreneurs. Fast, secure, and 100% transparent legal processing.</p>
                <div className="flex flex-wrap gap-4 pt-4 text-sm font-semibold">
                    {/* <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10"><i className="fas fa-check text-amber-500"></i> GeM Registration</span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10"><i className="fas fa-check text-amber-500"></i> IEC / Import Export</span>
                    <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10"><i className="fas fa-check text-amber-500"></i> ISO & GST Filing</span> */}
                  <Link href="/trademark-registration"><span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10"><i className="fas fa-check text-amber-500"></i>Trademark Registration</span></Link> 
                </div>
            </div>
            <div className="relative hidden lg:block">
                <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80" className="rounded-3xl shadow-2xl border-8 border-white/10 transform -rotate-2 scale-105" alt="Business Meeting" />
                <div className="absolute -bottom-10 -left-10 glass-morph p-8 rounded-2xl shadow-xl border border-slate-200 text-slate-900">
                    <div className="flex items-center gap-4">
                        <div className="text-4xl font-bold text-amber-600 italic">4.8</div>
                        <div className="text-xs font-bold uppercase tracking-widest text-slate-500 leading-tight">Average Google<br />Client Rating</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-24 bg-white max-w-7xl m-auto">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1630344745991-fb948c5bf9d1?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-2xl shadow-lg mt-12" alt="Success 1" />
                <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&h=500&q=80" className="rounded-2xl shadow-lg" alt="Success 2" />
            </div>
            <div className="space-y-6">
                <h2 className="text-4xl font-bold text-slate-900">Our Success</h2>
                <div className="w-20 h-1.5 bg-amber-600 rounded-full"></div>
                <p className="text-slate-600 leading-relaxed text-lg italic font-light">"At Online Digital India, our success comes from the trust our clients place in us and the passion we have for what we do."</p>
                <p className="text-slate-600 leading-relaxed">Over the years, we have helped thousands of entrepreneurs and food business owners get their registration and compliance with ease. From FSSAI and GST to MSME, Import Export Code, ISO and GeM filing solutions, we have been a reliable partner at every step.</p>
                
                <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-amber-600">
                    <h4 className="text-xs uppercase font-black tracking-widest text-amber-700 mb-2">Our Core Mission</h4>
                    <p className="text-slate-700 font-medium">To simplify legal processes for startups, small businesses, and individuals, combining technology with expert advice.</p>
                </div>
                <button className="bg-slate-900 text-white px-10 py-4 rounded font-bold hover:bg-slate-800 transition shadow-xl">WORK WITH US</button>
            </div>
        </div>
    </section>

    <section className="py-24 bg-slate-50 max-w-7xl m-auto">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-5xl font-bold text-slate-900">Tailored Solutions</h2>
                <p className="text-slate-500 max-w-xl mx-auto">Explore our range of professional registration and certification services designed for growth.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="service-card group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500">
                    <div className="h-60 overflow-hidden relative">
                        <img src="Gemini_Generated_Image_227cj9227cj9227c.png" className="w-full h-full object-cover transition-transform duration-700" alt="GeM" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
                        <div className="absolute bottom-4 left-6 text-white font-bold text-lg uppercase tracking-widest">Govt Portal</div>
                    </div>
                    <div className="p-8 space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900">GeM Registration</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Private limited, LLP, OPC registration with government filling and DSC / KM support.</p>
                        <a href="#" className="inline-block text-amber-600 font-bold border-b-2 border-amber-100 hover:border-amber-600 transition pb-1">Apply Now &rarr;</a>
                    </div>
                </div>

                <div className="service-card group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500">
                    <div className="h-60 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover transition-transform duration-700" alt="GST" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
                        <div className="absolute bottom-4 left-6 text-white font-bold text-lg uppercase tracking-widest">Taxation</div>
                    </div>
                    <div className="p-8 space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900">GST Registration</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">New registrations, amendments, cancellation and GST return assistance for all entities.</p>
                        <a href="#" className="inline-block text-amber-600 font-bold border-b-2 border-amber-100 hover:border-amber-600 transition pb-1">Apply Now &rarr;</a>
                    </div>
                </div>

                <div className="service-card group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500">
                    <div className="h-60 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover transition-transform duration-700" alt="IEC" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
                        <div className="absolute bottom-4 left-6 text-white font-bold text-lg uppercase tracking-widest">Global Trade</div>
                    </div>
                    <div className="p-8 space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900">IEC / Import Export</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">IEC code for exporters/importers with expert documentation and global compliance support.</p>
                        <a href="#" className="inline-block text-amber-600 font-bold border-b-2 border-amber-100 hover:border-amber-600 transition pb-1">Apply Now &rarr;</a>
                    </div>
                </div>

                <div className="service-card group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500">
                    <div className="h-60 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover transition-transform duration-700" alt="MSME" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
                        <div className="absolute bottom-4 left-6 text-white font-bold text-lg uppercase tracking-widest">Growth</div>
                    </div>
                    <div className="p-8 space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900">MSME Registration</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Get registered as an MSME to enjoy government benefits, subsidies, and tender supports.</p>
                        <Link href="/msme-registration" className="inline-block text-amber-600 font-bold border-b-2 border-amber-100 hover:border-amber-600 transition pb-1">Apply Now &rarr;</Link>
                    </div>
                </div>

                <div className="service-card group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500">
                    <div className="h-60 overflow-hidden relative">
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover transition-transform duration-700" alt="FSSAI" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
                        <div className="absolute bottom-4 left-6 text-white font-bold text-lg uppercase tracking-widest">Food Compliance</div>
                    </div>
                    <div className="p-8 space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900">FSSAI / Food License</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Food licensing (Basic, State, Central) and renewals for restaurants and FMCG startups.</p>
                        <a href="#" className="inline-block text-amber-600 font-bold border-b-2 border-amber-100 hover:border-amber-600 transition pb-1">Apply Now &rarr;</a>
                    </div>
                </div>

                <div className="service-card group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-500">
                    <div className="h-60 overflow-hidden relative">
                        <img src="Gemini_Generated_Image_225xm225xm225xm2.png" className="w-full h-full object-cover transition-transform duration-700" alt="ISO" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
                        <div className="absolute bottom-4 left-6 text-white font-bold text-lg uppercase tracking-widest">Certification</div>
                    </div>
                    <div className="p-8 space-y-4">
                        <h3 className="text-2xl font-bold text-slate-900">ISO Certification</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">ISO 9001, 14001, etc. & expert consultancy for audits to boost your global credibility.</p>
                        <a href="#" className="inline-block text-amber-600 font-bold border-b-2 border-amber-100 hover:border-amber-600 transition pb-1">Apply Now &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-24 px-4 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
                <h2 className="text-5xl font-bold tracking-tight">Why Online Legal India?</h2>
                <div className="space-y-6">
                    <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i className="fas fa-hand-holding-dollar text-xl"></i>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold">Transparent Fees</h4>
                            <p className="text-slate-400">Fixed packages with absolutely no hidden costs.</p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i className="fas fa-calendar-check text-xl"></i>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold">7-14 Days Processing</h4>
                            <p className="text-slate-400">Rapid turnaround for 99% of our applications.</p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-start">
                        <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i className="fas fa-user-lock text-xl"></i>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold">Document Privacy</h4>
                            <p className="text-slate-400">Enterprise-grade security for your sensitive data.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-12 rounded-3xl border border-white/10 text-center space-y-2">
                    <p className="text-5xl font-black text-amber-500 italic">4.8</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Avg Rating</p>
                </div>
                <div className="bg-white/5 p-12 rounded-3xl border border-white/10 text-center space-y-2">
                    <p className="text-5xl font-black text-amber-500 italic">1.2k</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">App Clients</p>
                </div>
                <div className="bg-white/5 p-12 rounded-3xl border border-white/10 text-center space-y-2">
                    <p className="text-5xl font-black text-amber-500 italic">100%</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Success</p>
                </div>
                <div className="bg-white/5 p-12 rounded-3xl border border-white/10 text-center space-y-2">
                    <p className="text-5xl font-black text-amber-500 italic">24/7</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Support</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900">What Our Clients Say</h2>
            </div>
            <div className="bg-slate-50 p-12 md:p-20 rounded-[4rem] text-center relative">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80" className="w-24 h-24 rounded-full border-4 border-white shadow-xl absolute -top-12 left-1/2 -translate-x-1/2 object-cover" alt="Client" />
                <i className="fas fa-quote-left text-amber-200 text-6xl mb-6"></i>
                <p className="text-2xl md:text-3xl text-slate-700 italic leading-relaxed mb-8 font-light">
                    "The team made ISO certification process effortless. Very supportive and knowledgeable throughout the journey."
                </p>
                <div>
                    <h5 className="text-xl font-bold text-slate-900">Anjali R.</h5>
                    <p className="text-amber-600 font-bold uppercase tracking-widest text-xs">CEO, Fresh Tech Pvt Ltd</p>
                </div>
            </div>
        </div>
    </section>

    
</div>
  )
}

export default Sam