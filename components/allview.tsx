import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const AllView = () => {
  return (
    <div className="relative w-full bg-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Card Container */}
        <div className="relative w-full h-[280px] rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
              alt="Floor plan background"
              fill
              className="object-cover opacity-20 mix-blend-overlay"
            />
          </div>

          <div className="relative z-10 h-full px-8 py-6 flex items-center justify-between">
            {/* Left Content */}
            <div className="flex-1 text-white space-y-4 max-w-xl">
              <h2 className="text-3xl font-bold leading-tight">
                Get a bird's-eye-view of your next home with Floor Plans
              </h2>
              <p className="text-lg text-white/90">
                Easily visualise the layout of properties
              </p>
              <button className="inline-flex items-center gap-2 bg-white text-emerald-700 px-6 py-2.5 rounded-full font-medium hover:bg-white/90 transition-colors text-sm">
                View now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 h-full max-w-md relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1628744876497-eb30460be9f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                  alt="Floor plan example"
                  fill
                  className="object-contain"
                  priority
                />
                
                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllView;