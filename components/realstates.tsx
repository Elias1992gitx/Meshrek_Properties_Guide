"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Agency {
  id: number;
  name: string;
  logo: string;
  propertiesForSale: number;
  propertiesForRent: number;
}

const agencies: Agency[] = [
  {
    id: 1,
    name: "Estate500 Properties",
    logo: "/logos/estate500.png", // Update with actual logo path
    propertiesForSale: 280,
    propertiesForRent: 1
  },
  {
    id: 2,
    name: "Alzorah Properties",
    logo: "/logos/alzorah.png", // Update with actual logo path
    propertiesForSale: 150,
    propertiesForRent: 12
  },
  {
    id: 3,
    name: "Banke Real Estate",
    logo: "/logos/banke.png", // Update with actual logo path
    propertiesForSale: 95,
    propertiesForRent: 8
  }
];

const RealEstates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % agencies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % agencies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + agencies.length) % agencies.length);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          Featured Agencies
        </h2>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden mx-12">
            <div 
              className="flex items-center justify-between gap-16 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {agencies.map((agency) => (
                <div key={agency.id} className="min-w-full flex justify-center">
                  <div className="flex flex-col items-center">
                    {/* Logo */}
                    <div className="relative w-[200px] h-[80px] mb-8">
                      <Image
                        src={agency.logo}
                        alt={agency.name}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    
                    {/* Agency Stats */}
                    {currentIndex === agencies.indexOf(agency) && (
                      <div className="text-center animate-fadeIn">
                        <h3 className="text-2xl font-semibold mb-4">{agency.name}</h3>
                        <div className="flex items-center justify-center gap-8 text-sm">
                          <p className="text-gray-600">
                            {agency.propertiesForSale} Properties for Sale
                          </p>
                          <p className="text-gray-600">
                            {agency.propertiesForRent} Properties to Rent
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center w-full absolute top-1/2 -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="transform -translate-x-6 "
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={nextSlide}
              className="transform translate-x-6 "
              aria-label="Next slide"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstates;