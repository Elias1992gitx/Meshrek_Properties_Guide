"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const AllView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Experience virtual home visits",
      subtitle: "Tour properties in stunning detail",
      bgColor: "bg-gradient-to-r from-teal-600 to-teal-400",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      buttonText: "View now",
      buttonColor: "text-teal-600"
    },
    {
      title: "Discover immersive 360° property tours",
      subtitle: "Explore properties from the comfort of your home",
      bgColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      buttonText: "View now",
      buttonColor: "text-blue-600"
    },
    {
      title: "Experience luxury properties",
      subtitle: "Find your perfect home today",
      bgColor: "bg-gradient-to-r from-teal-600 to-teal-400",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      buttonText: "View now",
      buttonColor: "text-teal-600"
    },
  ];

  // Auto-slide functionality with slower transition
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000); // Changed to 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full px-4 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Slider Container */}
        <div className="relative overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`relative w-full flex-shrink-0 h-[280px] sm:h-[240px] md:h-[220px] ${slide.bgColor} 
                  rounded-2xl shadow-lg flex items-center`}
                style={{ width: '100%' }}
              >
                {/* Left Content */}
                <div className="relative z-20 h-full flex flex-col justify-center p-5 sm:p-8 md:p-10 w-[65%] sm:w-[55%]">
                  <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 line-clamp-2">
                    {slide.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-white/90 mb-4 sm:mb-6 line-clamp-2">
                    {slide.subtitle}
                  </p>
                  <button 
                    className={`${slide.buttonColor} bg-white px-4 sm:px-6 py-2 rounded-lg font-semibold 
                      w-fit flex items-center gap-2 text-sm sm:text-base hover:shadow-lg transition-all 
                      hover:-translate-y-0.5`}
                  >
                    {slide.buttonText}
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Right Image with Gradient */}
                <div className="absolute right-0 top-0 w-[40%] sm:w-1/2 h-full">
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-teal-600/90 z-10" />
                  <Image
                    src={slide.image}
                    alt="Property view"
                    fill
                    className="object-cover rounded-r-2xl"
                    priority={index === 0}
                  />
                  
                  {/* Interactive dots overlay */}
                  <div className="absolute inset-0 z-20 hidden sm:block">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/20 rounded-full"
                        style={{
                          top: `${Math.random() * 70 + 15}%`,
                          left: `${Math.random() * 30 + 20}%`,
                        }}
                      >
                        <div className="absolute inset-0 animate-ping bg-white/30 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={() => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 
              backdrop-blur-sm p-2 rounded-full transition-all hover:scale-110"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => setCurrentIndex((prev) => (prev + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 
              backdrop-blur-sm p-2 rounded-full transition-all hover:scale-110"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide indicators */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-40 pb-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-500 rounded-full
                ${idx === currentIndex 
                  ? 'w-6 sm:w-8 h-1.5 sm:h-2 bg-teal-600' 
                  : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-teal-600/50 hover:bg-teal-600/70'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllView;