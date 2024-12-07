"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MarketItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const marketItems: MarketItem[] = [
    {
      id: 1,
      title: "Development of the Week: Bole Arabsa",
      description: "Luxury apartments with panoramic city views in Bole",
      image: "https://images.unsplash.com/photo-1567684014761-b65e2e59b9eb",
      link: "/developments/bole-arabsa"
    },
    {
      id: 2,
      title: "New off-plan developments shaping up CMC Area",
      description: "Discover upcoming residential projects in CMC",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
      link: "/developments/cmc-area"
    },
    {
      id: 3,
      title: "Living in Bole vs Summit: Where to buy or rent properties",
      description: "Compare prime locations in Addis Ababa",
      image: "https://images.unsplash.com/photo-1580041065738-e72023775cdc",
      link: "/market-comparison"
    },
    {
      id: 4,
      title: "Properties for sale within 5M to 10M ETB in Addis Ababa",
      description: "Affordable housing options in prime locations of the capital",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      link: "/affordable-properties"
    },
    {
      id: 5,
      title: "Emerging Neighborhoods: Sarbet's Real Estate Boom",
      description: "Explore investment opportunities in rapidly developing Sarbet area",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
      link: "/emerging-neighborhoods"
    },
    {
      id: 6,
      title: "Luxury Villa Projects in Old Airport",
      description: "Exclusive residential compounds in Old Airport's prime location",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
      link: "/luxury-villas"
    },
    {
      id: 7,
      title: "Commercial Properties in Mexico Square",
      description: "Prime office spaces and retail locations in the business district",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      link: "/commercial-properties"
    },
    {
      id: 8,
      title: "New Apartment Complexes in Gerji",
      description: "Modern living spaces with excellent amenities in Gerji area",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
      link: "/gerji-apartments"
    },
    {
      id: 9,
      title: "Investment Guide: Rental Properties in Addis",
      description: "Analysis of rental yields across different neighborhoods",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      link: "/investment-guide"
    },
    {
      id: 10,
      title: "Upcoming Projects in Ayat and CMC",
      description: "New developments transforming the eastern suburbs",
      image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7",
      link: "/upcoming-projects"
    }
  ];

const DiscoverMarket = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % marketItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + marketItems.length) % marketItems.length);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Discover more about the Addis Ababa real estate market
        </h2>

        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {marketItems.map((item) => (
                <div key={item.id} className="min-w-[300px] md:min-w-[400px] flex-shrink-0">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                    {/* Image Container */}
                    <div className="relative h-48 md:h-56">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all z-10"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 p-3 rounded-full shadow-lg transition-all z-10"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMarket;