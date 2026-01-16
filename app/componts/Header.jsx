"use client"; // Required for state management in Next.js App Router

import Link from 'next/link';
import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full">
      {/* Top Bar - Hidden on very small screens to reduce clutter */}
      <div className="bg-[#0f172a] text-slate-300 py-3 px-6 text-sm border-b border-slate-700">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4 md:gap-8">
            <span className="flex items-center gap-2">
              <i className="fas fa-phone-alt text-amber-500"></i> +91 8448831264
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <i className="fas fa-envelope text-amber-500"></i> info@onlinedigitalindia.com
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-500">
              <i className="fas fa-shield-halved mr-2"></i> ISO Certified Agency
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white/90 sticky top-0 z-50 shadow-sm backdrop-blur-md">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/">
              <img src="/logo.jpeg" alt="Logo" className="rounded w-40 md:w-60" />
            </Link>
          </div>

          {/* Desktop Menu - Preserved Logic/Style */}
          <div className="hidden xl:flex gap-10 font-semibold text-slate-600 uppercase text-xs tracking-widest">
            <Link href="/" className="hover:text-amber-600 transition">Home</Link>
            <Link href="/about-us" className="hover:text-amber-600 transition">About Us</Link>
            <Link href="/trademark-registration" className="hover:text-amber-600 transition">Trademark Registration</Link>
            <Link href="/contact-us" className="hover:text-amber-600 transition">Contact</Link>
          </div>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              href='/contact-us' 
              className="hidden md:block bg-amber-600 text-white px-7 py-3 rounded-full font-bold text-sm shadow-lg hover:bg-amber-700 transition transform hover:-translate-y-1"
            >
              CONSULT NOW
            </Link>
            
            {/* Hamburger Icon - Only shows on Mobile/Tablet */}
            <button 
              onClick={toggleMenu}
              className="xl:hidden text-slate-900 focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu - Luxury Minimalist Style */}
        <div className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-slate-100 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col p-6 gap-6 font-semibold text-slate-600 uppercase text-xs tracking-[0.2em]">
            <Link href="/" onClick={toggleMenu} className="hover:text-amber-600 py-2 border-b border-slate-50">Home</Link>
            <Link href="/about-us" onClick={toggleMenu} className="hover:text-amber-600 py-2 border-b border-slate-50">About Us</Link>
            <Link href="/trademark-registration" onClick={toggleMenu} className="hover:text-amber-600 py-2 border-b border-slate-50">Trademark Registration</Link>
            <Link href="/contact-us" onClick={toggleMenu} className="hover:text-amber-600 py-2 border-b border-slate-50">Contact</Link>
            <Link 
              href='/contact-us' 
              onClick={toggleMenu}
              className="bg-amber-600 text-white text-center px-7 py-4 rounded-full font-bold text-sm mt-4"
            >
              CONSULT NOW
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;