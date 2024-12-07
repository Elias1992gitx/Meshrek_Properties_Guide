'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { Logo } from '@/components/logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 scale-125 -ml-4 transform-gpu">
            <Logo />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-6">
            <NavLink text="Buy" hasDropdown isScrolled={isScrolled} />
            <NavLink text="Rent" hasDropdown isScrolled={isScrolled} />
            <NavLink text="Sell" hasDropdown isScrolled={isScrolled} />
            <NavLink text="Mortgage" hasDropdown isScrolled={isScrolled} />
            <NavLink text="Real Estate Agents" hasDropdown isScrolled={isScrolled} />
            <Link 
              href="/feed" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                  : 'text-white hover:text-white/90 hover:bg-white/10'
              }`}
            >
              Feed
            </Link>
          </div>

          {/* Auth Button */}
          <div className="flex items-center gap-2">
            <button 
              className={`hidden sm:inline-flex px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isScrolled 
                  ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
                  : 'text-white hover:text-white/90 hover:bg-white/10'
              }`}
            >
              Sign in
            </button>
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isScrolled 
                  ? 'bg-[#A52B23] text-white hover:bg-[#8a241d]' 
                  : 'bg-white text-[#A52B23] hover:bg-white/90'
              }`}
            >
              Join now
            </button>
          </div>
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
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all ${
        isScrolled 
          ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-100' 
          : 'text-white hover:text-white/90 hover:bg-white/10'
      }`}
    >
      {text}
      {hasDropdown && <ChevronDown className="ml-1 w-4 h-4" />}
    </button>
  </div>
);

export default Navbar;