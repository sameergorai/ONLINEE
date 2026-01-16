import React from 'react'

function page() {
    return (
       <main className="bg-white">

    <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6">
            <nav className="flex mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                <a href="/" className="hover:text-gold transition">Home</a>
                <span className="mx-2">/</span>
                <span className="text-gold">About Us</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Empowering India's Entrepreneurs <br />Through <span className="text-gold italic">Seamless Compliance</span>.
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                At <span className="font-bold text-slate-900">Online Digital India</span> (A Unit of E Digital India), we’re here to make business registration and compliance easy and stress-free.
            </p>
        </div>
    </section>

    <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                     className="rounded-3xl shadow-2xl z-10 relative" alt="Our Team Collaboration" />
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gold/10 rounded-3xl z-0"></div>
            </div>
            <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">Your Business Growth is Our Only Goal</h2>
                <div className="w-20 h-1.5 bg-gold rounded-full"></div>
                <p className="text-slate-600 leading-relaxed">
                    Whether you’re just starting out or already growing your business, we help you take care of the legal work so you can focus on what really matters: building your business. 
                </p>
                <p className="text-slate-600 leading-relaxed">
                    From <strong>business registration to GST, GEM, ISO, IEC, MSME, and FSSAI</strong>, we handle all the paperwork and make sure everything is done the right way. No confusion, no surprises, just clear and honest help whenever you need it.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                    <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-gold">
                        <p className="text-sm font-bold text-slate-900">Simplified Process</p>
                        <p className="text-xs text-slate-500">Paperless & Digital</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-gold">
                        <p className="text-sm font-bold text-slate-900">Friendly Support</p>
                        <p className="text-xs text-slate-500">Expert Consultations</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition duration-500">
                    <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                        <i className="fas fa-bullseye text-2xl text-white"></i>
                        {/* <Goal /> */}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                    <p className="text-slate-300 leading-relaxed text-lg">
                        To empower entrepreneurs by simplifying business compliance and enabling them to focus on growth while we handle the complexities.
                    </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 hover:bg-white/20 transition duration-500">
                    <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                        <i className="fas fa-eye text-2xl text-white"></i>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                    <p className="text-slate-300 leading-relaxed text-lg">
                        To become India’s most trusted platform for business registrations and compliance solutions with innovation and transparency.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-24">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl font-bold text-slate-900 leading-tight">Building Strong Relationships, One Registration at a Time.</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        We know every business is different, so we offer help that’s just right for you. We believe in being there whenever you need us. Together, we can make your business dreams a reality.
                    </p>
                    
                    <div className="space-y-6">
                        <h4 className="text-xs uppercase font-black tracking-widest text-gold">Our Foundation Values</h4>
                        <div className="flex items-center gap-6">
                            <div className="text-center">
                                <div className="w-14 h-14 rounded-full border-2 border-slate-100 flex items-center justify-center mb-2 text-gold">
                                    <i className="fas fa-handshake"></i>
                                </div>
                                <span className="text-xs font-bold uppercase">Integrity</span>
                            </div>
                            <div className="text-center">
                                <div className="w-14 h-14 rounded-full border-2 border-slate-100 flex items-center justify-center mb-2 text-gold">
                                    <i className="fas fa-smile-beam"></i>
                                </div>
                                <span className="text-xs font-bold uppercase">Satisfaction</span>
                            </div>
                            <div className="text-center">
                                <div className="w-14 h-14 rounded-full border-2 border-slate-100 flex items-center justify-center mb-2 text-gold">
                                    <i className="fas fa-user-tie"></i>
                                </div>
                                <span className="text-xs font-bold uppercase">Professionalism</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
                         className="rounded-3xl shadow-xl" alt="Success Relationships" />
                    <div className="absolute -top-10 -left-10 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 hidden md:block">
                        <p className="text-gold font-black text-2xl italic">100% Commitment</p>
                        <p className="text-slate-500 text-xs uppercase font-bold">To Your Success</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="p-9 bg-gold text-white text-center">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 italic">"Running a business shouldn’t be complicated."</h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">Let our experienced team handle your legal complexities so you can focus on building your empire.</p>
            <button className="bg-slate-900 text-white px-12 py-4 rounded-full font-bold shadow-2xl hover:bg-slate-800 transition transform hover:-translate-y-1">
                START YOUR JOURNEY WITH US
            </button>
        </div>
    </section>

</main>
    )
}

export default page