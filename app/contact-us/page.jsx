// import React from 'react'

// function page() {
//     return (
//         <div className="bg-slate-50 text-slate-800 ">


//             <section className="bg-[#0f172a] py-20 text-center relative overflow-hidden">
//                 <div className="absolute inset-0 opacity-10">
//                     <img src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover" />
//                 </div>
//                 <div className="container mx-auto px-6 relative z-10">
//                     <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Get in Touch</h1>
//                     <p className="text-slate-300 max-w-xl mx-auto italic">"Our mission is to simplify legal processes for you. Reach out to our expert team for immediate assistance."</p>
//                 </div>
//             </section>

//             <section className="py-16 -mt-10 relative z-20">
//                 <div className="container mx-auto px-6">
//                     <div className="grid lg:grid-cols-3 gap-8">

//                         <div className="lg:col-span-1 space-y-6">
//                             <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex items-start gap-5 group">
//                                 <div className="w-12 h-12 bg-[#0f172a] text-[#b45309] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#b45309] group-hover:text-white transition-colors duration-300">
//                                     <i className="fas fa-location-dot text-xl"></i>
//                                 </div>
//                                 <div>
//                                     <h4 className="text-lg font-bold text-slate-900 mb-1">Our Office</h4>
//                                     <p className="text-slate-500 text-sm leading-relaxed">
//                                         2nd floor, Jayanta Tower, opposite Delhi Darbar, SNP Area, Sakchi, Jamshedpur, Jharkhand 831001
//                                     </p>
//                                 </div>
//                             </div>

//                             <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex items-start gap-5 group">
//                                 <div className="w-12 h-12 bg-[#0f172a] text-[#b45309] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#b45309] group-hover:text-white transition-colors duration-300">
//                                     <i className="fas fa-phone-volume text-xl"></i>
//                                 </div>
//                                 <div>
//                                     <h4 className="text-lg font-bold text-slate-900 mb-1">Phone Number</h4>
//                                     <p className="text-slate-500 text-sm leading-relaxed">
//                                         <a href="tel:+918448331281" className="hover:text-[#b45309]">+91 8448331281</a>
//                                     </p>
//                                     <p className="text-xs text-[#b45309] font-bold mt-2">Available 24/7 Support</p>
//                                 </div>
//                             </div>

//                             <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex items-start gap-5 group">
//                                 <div className="w-12 h-12 bg-[#0f172a] text-[#b45309] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#b45309] group-hover:text-white transition-colors duration-300">
//                                     <i className="fas fa-envelope-open-text text-xl"></i>
//                                 </div>
//                                 <div>
//                                     <h4 className="text-lg font-bold text-slate-900 mb-1">Email Support</h4>
//                                     <p className="text-slate-500 text-sm leading-relaxed">
//                                         <a href="mailto:info@onlinedigitalindia.com" className="hover:text-[#b45309]">info@onlinedigitalindia.com</a>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="lg:col-span-2">
//                             <div className="bg-white p-10 rounded-2xl shadow-2xl border border-slate-100 h-full">
//                                 <h3 className="text-3xl font-bold text-slate-900 mb-6">Send us a message</h3>
//                                 <form action="#" className="space-y-6">
//                                     <div className="grid md:grid-cols-2 gap-6">
//                                         <div>
//                                             <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Your Name</label>
//                                             <input type="text" placeholder="John Doe" required
//                                                 className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition" />
//                                         </div>
//                                         <div>
//                                             <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Phone Number</label>
//                                             <input type="tel" placeholder="+91 00000 00000" required
//                                                 className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition" />
//                                         </div>
//                                     </div>
//                                     <div>
//                                         <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Email Address</label>
//                                         <input type="email" placeholder="example@mail.com" required
//                                             className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition" />
//                                     </div>
//                                     <div>
//                                         <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Service Interested In</label>
//                                                                <input type="service" placeholder="Name of Service" required
//                                             className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition" />
//                                     </div>
//                                     <div>
//                                         <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Message</label>
//                                         <textarea rows="4" placeholder="How can we help you?"
//                                             className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition"></textarea>
//                                     </div>
//                                     <button type="submit" className="w-full bg-[#0f172a] hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition shadow-lg transform hover:-translate-y-1">
//                                         SEND MESSAGE <i className="fas fa-paper-plane ml-2"></i>
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="py-16 bg-white">
//                 <div className="container mx-auto px-6">
//                     <div className="text-center mb-10">
//                         <h2 className="text-3xl font-bold">Visit Our Office</h2>
//                         <p className="text-slate-500 mt-2">Strategically located in the heart of Jamshedpur</p>
//                     </div>
//                     <div className="map-container h-96 shadow-2xl rounded-2xl overflow-hidden border-4 border-white">
//                         {/* <iframe
//                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.696144547!2d86.1911!3d22.8023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ4JzEwLjEiTiA4NsKwMTEnMjcuOSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
//                             allowfullscreen="" loading="lazy">
//                         </iframe> */}
//                         <iframe 
//                                 src="https://maps.google.com/maps?q=E-DIGITALINDIA%20Best%20Skill%20Development%20Institute%20in%20Jharkhand,%202nd%20floor,%20Jayanta%20Tower,%20opposite%20Delhi%20Darbar,%20SNP%20Area,%20Sakchi,%20Jamshedpur,%20Jharkhand%20831001&t=&z=15&ie=UTF8&iwloc=&output=embed" 
//                                 width="100%" 
//                                 height="100%" 
//                                 // style="border:0;" 
//                                 // allowfullscreen="" 
//                                 loading="lazy" 
//                                 // referrerpolicy="no-referrer-when-downgrade"
//                                 >
//                             </iframe>
//                     </div>
//                 </div>
//             </section>


//         </div>
//     )
// }

// export default page



'use client'
import React, { useState } from 'react'

function Page() {
    // State for form feedback
    const [status, setStatus] = useState({ message: '', isError: false, loading: false });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ message: 'Sending your message...', isError: false, loading: true });

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            // Replace with your actual contact API endpoint
            const response = await fetch('https://onlinedigitalindia.com/api/contact.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setStatus({ message: 'Message sent successfully! We will contact you soon.', isError: false, loading: false });
                e.target.reset();
            } else {
                setStatus({ message: `Error: ${result.message}`, isError: true, loading: false });
            }
        } catch (error) {
            setStatus({ message: 'Connection error. Please try again later.', isError: true, loading: false });
        }
    };

    return (
        <div className="bg-slate-50 text-slate-800 ">
            <section className="bg-[#0f172a] py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover" alt="Background" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Get in Touch</h1>
                    <p className="text-slate-300 max-w-xl mx-auto italic">"Our mission is to simplify legal processes for you. Reach out to our expert team for immediate assistance."</p>
                </div>
            </section>

            <section className="py-16 -mt-10 relative z-20">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex items-start gap-5 group">
                                <div className="w-12 h-12 bg-[#0f172a] text-[#b45309] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#b45309] group-hover:text-white transition-colors duration-300">
                                    <i className="fas fa-location-dot text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">Our Office</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        2nd floor, Jayanta Tower, opposite Delhi Darbar, SNP Area, Sakchi, Jamshedpur, Jharkhand 831001
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex items-start gap-5 group">
                                <div className="w-12 h-12 bg-[#0f172a] text-[#b45309] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#b45309] group-hover:text-white transition-colors duration-300">
                                    <i className="fas fa-phone-volume text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">Phone Number</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        <a href="tel:+918448831264" className="hover:text-[#b45309]">+91 8448831264</a>
                                    </p>
                                    <p className="text-xs text-[#b45309] font-bold mt-2">Available 24/7 Support</p>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex items-start gap-5 group">
                                <div className="w-12 h-12 bg-[#0f172a] text-[#b45309] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#b45309] group-hover:text-white transition-colors duration-300">
                                    <i className="fas fa-envelope-open-text text-xl"></i>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-1">Email Support</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        <a href="mailto:info@onlinedigitalindia.com" className="hover:text-[#b45309]">info@onlinedigitalindia.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="bg-white p-10 rounded-2xl shadow-2xl border border-slate-100 h-full">
                                <h3 className="text-3xl font-bold text-slate-900 mb-6">Send us a message</h3>
                                
                                {status.message && (
                                    <div className={`mb-6 p-4 rounded-xl text-sm font-bold border ${status.isError ? 'bg-red-50 border-red-100 text-red-600' : 'bg-green-50 border-green-100 text-green-600'}`}>
                                        {status.message}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Your Name</label>
                                            <input type="text" name="name" placeholder="Enter your name" required
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Phone Number</label>
                                            <input type="tel" name="phone" placeholder="+91 00000 00000" required
                                                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Email Address</label>
                                        <input type="email" name="email" placeholder="example@mail.com" required
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Service Interested In</label>
                                        <input type="text" name="service" placeholder="Name of Service" required
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase text-slate-500 mb-2">Message</label>
                                        <textarea name="message" rows="4" placeholder="How can we help you?"
                                            className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition"></textarea>
                                    </div>
                                    <button 
                                        type="submit" 
                                        disabled={status.loading}
                                        className={`w-full bg-[#0f172a] hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition shadow-lg transform hover:-translate-y-1 ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                                        {status.loading ? 'SENDING...' : 'SEND MESSAGE'} <i className="fas fa-paper-plane ml-2"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold">Visit Our Office</h2>
                        <p className="text-slate-500 mt-2">Strategically located in the heart of Jamshedpur</p>
                    </div>
                    <div className="map-container h-96 shadow-2xl rounded-2xl overflow-hidden border-4 border-white">
                        <iframe
                  src="https://maps.google.com/maps?q=E-DIGITALINDIA%20Best%20Skill%20Development%20Institute%20in%20Jharkhand,%202nd%20floor,%20Jayanta%20Tower,%20opposite%20Delhi%20Darbar,%20SNP%20Area,%20Sakchi,%20Jamshedpur,%20Jharkhand%20831001&t=&z=15&ie=UTF8&iwloc=&output=embed"

                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page