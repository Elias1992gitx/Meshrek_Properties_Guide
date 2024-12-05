'use client';

import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          alt="New description for the image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative pt-40 px-4 max-w-7xl mx-auto">
        <div className="text-center text-white space-y-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Find the right home
            <br />
            at the right price
          </h1>

          {/* Search Navigation */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium px-2 sm:px-4">
            <div className="flex flex-nowrap sm:flex-wrap overflow-x-auto scrollbar-hide justify-start sm:justify-center w-full sm:w-auto py-2 px-4 sm:px-0">
              {['Buy', 'Rent', 'Sell', 'Mortgage', 'Home Estimate'].map((item) => (
                <button
                  key={item}
                  className={`
                    flex-none sm:flex
                    px-3 sm:px-6 md:px-8 
                    py-2 sm:py-3 
                    rounded-full 
                    whitespace-nowrap 
                    transition-colors
                    text-center
                    min-w-[70px] sm:min-w-0
                    mr-1.5 sm:mr-0
                    ${
                      item === 'Buy'
                        ? 'bg-white text-gray-800'
                        : 'text-white hover:bg-white/10'
                    }
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="City, Address, School, Agent, ZIP"
                className="w-full px-6 py-4 rounded-lg pr-14 text-gray-800 text-lg"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-[#A52B23] hover:bg-[#8b241d] rounded-md text-white transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;