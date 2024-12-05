"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface Card {
  id: number;
  title: string;
  description: string;
  bgGradient: string;
  overlayImage: string;
  mainImage: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Get a bird's-eye-view of your next home with Floor Plans",
    description: "Easily visualise the layout of properties",
    bgGradient: "from-emerald-600 to-emerald-500",
    overlayImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    mainImage: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6",
  },
  {
    id: 2,
    title: "Discover Modern Living Spaces",
    description: "Explore contemporary architecture and design",
    bgGradient: "from-blue-600 to-blue-500",
    overlayImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    mainImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },
  {
    id: 3,
    title: "Find Your Dream Kitchen",
    description: "Browse through stunning kitchen designs",
    bgGradient: "from-purple-600 to-purple-500",
    overlayImage: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
    mainImage: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d",
  },
];

const AllView = () => {
  const [currentCard, setCurrentCard] = useState(0);

  // Auto-rotate cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full bg-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Card Container */}
        <div 
          className={`relative w-full h-[280px] md:h-[400px] rounded-2xl bg-gradient-to-r ${cards[currentCard].bgGradient} overflow-hidden transition-all duration-500`}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src={`${cards[currentCard].overlayImage}?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80`}
              alt="Background"
              fill
              className="object-cover opacity-20 mix-blend-overlay"
            />
          </div>

          <div className="relative z-10 h-full px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="flex-1 text-white space-y-4 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                {cards[currentCard].title}
              </h2>
              <p className="text-base md:text-lg text-white/90">
                {cards[currentCard].description}
              </p>
              <button className="inline-flex items-center gap-2 bg-white text-emerald-700 px-4 md:px-6 py-2 md:py-2.5 rounded-full font-medium hover:bg-white/90 transition-colors text-sm">
                View now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 h-full max-w-md relative mt-4 md:mt-0">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[80%] md:w-[90%] aspect-[4/3]">
                <Image
                  src={`${cards[currentCard].mainImage}?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80`}
                  alt="Feature image"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-2 h-2 md:w-1.5 md:h-1.5 rounded-full transition-opacity duration-300 ${
                  currentCard === index ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllView;