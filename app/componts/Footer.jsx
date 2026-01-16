import { Facebook, Instagram, MessageSquareHeart, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-[#0b1222] text-slate-400 pt-10 pb-12 border-t border-slate-800">
                <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-10">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            {/* <span className="text-2xl font-bold text-white tracking-tighter">e-digital<span className="text-amber-600">.India</span></span> */}
                            <img src="/logo.jpeg" alt="logo" className='w-70 rounded' />
                        </div>
                        <p className="text-sm leading-relaxed">Redefining professional legal services for the digital age. Trusted by thousands across the nation.</p>
                        <div className="flex gap-4">
                            {/* <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition">
                        <Facebook />
                        </a> */}
                            {/* <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition"><i className="fab fa-twitter"></i></a>
                    <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-600 hover:text-white transition"><i className="fab fa-instagram"></i></a> */}
                            <a href="https://www.facebook.com/people/Online-Digital-India/61577940892905/" target="_blank" className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-80 transition">
                                <Facebook />
                            </a>
                            <a href="https://x.com/OnlineDigiital" target="_blank" className    ="w-8 h-8 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:opacity-80 transition">
                                <Twitter />
                            </a>
                            <a href="https://www.instagram.com/theonlinedigitalindia" target="_blank" className="w-8 h-8 rounded-full bg-[#E4405F] flex items-center justify-center text-white hover:opacity-80 transition">
                                <Instagram />
                            </a>
                            <a href="https://in.pinterest.com/onlinedigitalindia34/" target="_blank" className="w-8 h-8 rounded-full bg-[#BD081C] flex items-center justify-center text-white hover:opacity-80 transition">
                                <MessageSquareHeart />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Services</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/msme-registration" className="hover:text-amber-500 transition">MSME Registration</Link></li>
                            <li><a href="#" className="hover:text-amber-500 transition">FSSAI / Food License</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition">ISO Certification</a></li>
                            <li><a href="#" className="hover:text-amber-500 transition">GST Filling</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex gap-3"><i className="fas fa-map-marker-alt text-amber-500"></i> 2nd floor, Jayanta Tower, opposite Delhi Darbar, SNP Area, Sakchi, Jamshedpur, Jharkhand 831001</li>
                            <li className="flex gap-3"><i className="fas fa-phone text-amber-500"></i> +91 8448831264</li>
                            <li className="flex gap-3"><i className="fas fa-envelope text-amber-500"></i> info@onlinedigitalindia.com</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Certification</h4>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <p className="text-[10px] leading-relaxed italic">Online Digital India is part of E-digital India, registered under the MSME Act, 2006. ISO Verified Agency.</p>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6 pt-3 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center ">
                    <p className="text-[10px] text-slate-500 max-w-2xl text-center md:text-left">
                        Disclaimer: This website acts only as an agency and is not linked to any government department. Fees include our service charges.
                    </p>
                    <p className="text-xs">© 2025 Online Digital India. All Rights Reserved.</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer