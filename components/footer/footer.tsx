'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#111] text-white mt-2">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 20L20 0v20H0zm40 0L20 0v20h20zM0 40l20-20v20H0zm40 0l-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-xl sm:text-2xl font-bold hover:opacity-90 transition-opacity"
            >
              <svg 
                className="h-6 sm:h-8 fill-white" 
                viewBox="0 0 24 24"
              >
                <path d="M3.8 10V20C3.8 20.6 4.2 21 4.8 21H9.8V16C9.8 15.4 10.2 15 10.8 15H13.8C14.4 15 14.8 15.4 14.8 16V21H19.8C20.4 21 20.8 20.6 20.8 20V10" />
                <path d="M22.8 11.4L12.5 3.2C12.2 3 11.8 3 11.5 3.2L1.2 11.4C0.8 11.7 0.7 12.2 1 12.6C1.3 13 1.8 13.1 2.2 12.8L12 5L21.8 12.8C22 13 22.2 13 22.4 13C22.7 13 22.9 12.9 23.1 12.6C23.3 12.2 23.2 11.7 22.8 11.4Z" />
              </svg>
              <span className="font-semibold">Meshrek</span>
            </Link>
            <p className="text-gray-400 text-sm sm:text-base max-w-md">
              Your trusted partner in Ethiopian real estate, making property dreams come true in Addis Ababa and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div className="sm:ml-auto lg:ml-0">
            <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {['About Us', 'Careers', 'Contact Us', 'Terms & Privacy Policy'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="sm:ml-auto lg:ml-0">
            <h3 className="font-semibold text-base sm:text-lg mb-4 sm:mb-6">Connect With Us</h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {[
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Youtube, href: '#', label: 'YouTube' }
              ].map(({ Icon, href, label }, index) => (
                <Link 
                  key={index} 
                  href={href}
                  aria-label={label}
                  className="bg-white/10 p-2 sm:p-2.5 rounded-full hover:bg-white/20 transition-colors 
                    transform hover:scale-110 active:scale-95 duration-200"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6
          flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
            © 2024 Meshrek.com | The First Real Estate Platform in Ethiopia
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm text-gray-400">Country:</span>
            <button 
              className="flex items-center gap-2 text-xs sm:text-sm bg-white/5 
                px-2 sm:px-3 py-1 sm:py-1.5 rounded-md hover:bg-white/10 
                transition-colors transform hover:scale-105 active:scale-95 duration-200"
            >
              <Image
                src="https://flagcdn.com/et.svg"
                alt="Ethiopia"
                width={20}
                height={14}
                className="w-4 sm:w-5 h-auto rounded"
              />
              <span className="hidden xs:inline">Ethiopia</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;