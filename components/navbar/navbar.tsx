'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Search } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
{/* Logo */}
<Link href="/" className="text-2xl font-bold flex items-center gap-2">
  <svg 
    className={`h-8 ${isScrolled ? 'fill-[#A52B23]' : 'fill-white'}`} 
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path d="M3.8 10V20C3.8 20.6 4.2 21 4.8 21H9.8V16C9.8 15.4 10.2 15 10.8 15H13.8C14.4 15 14.8 15.4 14.8 16V21H19.8C20.4 21 20.8 20.6 20.8 20V10" />
    <path d="M22.8 11.4L12.5 3.2C12.2 3 11.8 3 11.5 3.2L1.2 11.4C0.8 11.7 0.7 12.2 1 12.6C1.3 13 1.8 13.1 2.2 12.8L12 5L21.8 12.8C22 13 22.2 13 22.4 13C22.7 13 22.9 12.9 23.1 12.6C23.3 12.2 23.2 11.7 22.8 11.4Z" />
  </svg>
  <span className={`font-semibold ${isScrolled ? 'text-[#A52B23]' : 'text-white'}`}>
    Meshrek
  </span>
</Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink text="Buy" hasDropdown isScrolled={isScrolled} />
            <NavLink text="Rent" hasDropdown isScrolled={isScrolled} />
            <NavLink text="Sell" hasDropdown isScrolled={isScrolled} />
            <NavLink text="Mortgage" hasDropdown isScrolled={isScrolled} />
            <NavLink text="Real Estate Agents" hasDropdown isScrolled={isScrolled} />
            <Link 
              href="/feed" 
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
              }`}
            >
              Feed
            </Link>
          </div>

          {/* Auth Button */}
          <button 
            className={`text-sm font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`}
          >
            Join / Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ 
  text, 
  hasDropdown, 
  isScrolled 
}: { 
  text: string; 
  hasDropdown?: boolean;
  isScrolled: boolean;
}) => (
  <div className="relative group">
    <button 
      className={`flex items-center text-sm font-medium transition-colors ${
        isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
      }`}
    >
      {text}
      {hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
    </button>
  </div>
);

export default Navbar;