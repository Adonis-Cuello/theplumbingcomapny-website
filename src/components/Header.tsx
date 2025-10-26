'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="text-white py-4 px-4 md:px-8" style={{backgroundColor: '#01B1AF'}}>
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center text-base">
          <div className="flex flex-col md:flex-row gap-3 md:gap-10">
            <div className="flex items-center gap-3">
              <a href="tel:302-998-0938" className="hover:underline text-lg flex items-center gap-2">
                <Phone size={16} style={{color: '#ffffff'}} />
                (302) 998-0938
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} style={{color: '#01B1AF'}} />
              <span className="text-lg">MON-FRI 9:00AM - 4:00PM</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={18} style={{color: '#01B1AF'}} />
              <span className="text-lg">SERVING NEW CASTLE COUNTY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-4xl caslon-bold-italic" style={{color: '#01B1AF'}}>
              THE PLUMBING COMPANY
            </h1>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-8 items-center font-semibold text-gray-700">
            <Link href="/" className="text-lg" style={{color: '#01B1AF'}}>HOME</Link>
            <Link href="/services" className="text-lg" style={{color: '#01B1AF'}}>SERVICES</Link>
            <Link href="/#about" className="text-lg" style={{color: '#01B1AF'}}>ABOUT US</Link>
            <Link href="/reviews" className="text-lg" style={{color: '#01B1AF'}}>REVIEWS</Link>
            <a href="tel:302-998-0938" className="text-lg" style={{color: '#01B1AF'}}>CONTACT US</a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile slide-down menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <nav className="flex flex-col p-4 gap-4 font-semibold text-gray-700 border-t border-gray-200">
            <Link href="/" className="text-lg" onClick={closeMobileMenu} style={{color: '#01B1AF'}}>HOME</Link>
            <Link href="/services" className="text-lg" onClick={closeMobileMenu} style={{color: '#01B1AF'}}>SERVICES</Link>
            <Link href="/#about" className="text-lg" onClick={closeMobileMenu} style={{color: '#01B1AF'}}>ABOUT US</Link>
            <Link href="/reviews" className="text-lg" onClick={closeMobileMenu} style={{color: '#01B1AF'}}>REVIEWS</Link>
            <a href="tel:302-998-0938" className="text-lg" onClick={closeMobileMenu} style={{color: '#01B1AF'}}>CONTACT US</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

