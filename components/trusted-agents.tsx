import React from 'react';
import Image from 'next/image';

const TrustedAgents = () => {
  return (
    <div className="w-full px-4 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full rounded-2xl">
          {/* Gradient background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900 via-teal-800 to-teal-950 rounded-2xl">
            {/* Additional gradient layers for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-700/20 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_50%,rgba(0,128,128,0.2)_100%)] rounded-2xl"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Main content */}
          <div className="relative z-10 px-4 sm:px-6 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="flex -space-x-4">
                  <div className="relative w-14 h-14 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                      alt="Agent 1"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-14 h-14 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                      alt="Agent 2"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-14 h-14 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                      alt="Agent 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-14 h-14 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                      alt="Agent 4"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Find a TruBroker™</h3>
                    <span className="px-2 py-0.5 text-xs bg-red-500 text-white rounded-full">NEW</span>
                  </div>
                  <p className="text-white/80 text-xs sm:text-sm mt-1">Find trusted agents awarded for their excellent performance</p>
                </div>
              </div>

              {/* Right Button */}
              <button className="w-full sm:w-auto bg-white px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group">
                <span className="text-teal-900 text-sm sm:text-base">Find My Agent</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 sm:h-5 sm:w-5 text-teal-900 transform transition-transform group-hover:translate-x-1" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedAgents;