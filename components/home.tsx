import React from 'react'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Hero Background with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80"
          alt="Luxury modern architecture"
          fill
          className="object-cover transition-transform duration-300 scale-105 hover:scale-100"
          priority
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        
        {/* Animated Grain Effect */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-20 md:px-8 w-full">
        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 p-4 mb-12 bg-white/90 backdrop-blur-md rounded-full max-w-4xl mx-auto shadow-lg shadow-black/5 hover:shadow-xl transition-shadow duration-300">
          <button className="text-sm md:text-base text-emerald-600 font-semibold hover:scale-105 transition-transform">Properties</button>
          <button className="text-sm md:text-base hover:text-emerald-600 transition-colors">New Projects</button>
          <button className="text-sm md:text-base hover:text-emerald-600 transition-colors">Transactions</button>
          <button className="text-sm md:text-base flex items-center gap-2 group">
            TruEstimate™ 
            <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full group-hover:scale-105 transition-transform">NEW</span>
          </button>
          <button className="text-sm md:text-base hover:text-emerald-600 transition-colors">Agents</button>
        </nav>

        {/* Hero Text with Animation */}
        <div className="text-center text-white mb-12 space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80">
            Real homes live here
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light">
            Real Prices. Real Photos. Real Properties
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Buy/Rent Toggle */}
          <div className="bg-white/95 backdrop-blur-md p-1.5 rounded-full inline-flex mx-auto shadow-lg">
            <button className="px-6 sm:px-8 py-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full shadow-sm text-sm sm:text-base">Buy</button>
            <button className="px-6 sm:px-8 py-2.5 hover:bg-black/5 rounded-full transition-colors text-sm sm:text-base">Rent</button>
          </div>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl mx-auto">
            <div className="flex-1 bg-white/95 backdrop-blur-md rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow">
              <input 
                type="text" 
                placeholder="Enter location"
                className="w-full outline-none bg-transparent placeholder:text-gray-400 text-sm sm:text-base"
              />
            </div>
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 sm:px-12 py-4 rounded-full hover:shadow-lg hover:shadow-emerald-500/20 transition-all transform hover:-translate-y-0.5 text-sm sm:text-base whitespace-nowrap">
              Search
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <button className="text-sm bg-emerald-100 text-emerald-600 px-4 sm:px-6 py-2.5 rounded-full hover:shadow-md transition-shadow">All</button>
            <button className="text-sm bg-white/95 backdrop-blur-md px-4 sm:px-6 py-2.5 rounded-full hover:bg-emerald-50 transition-colors">Ready</button>
            <button className="text-sm bg-white/95 backdrop-blur-md px-4 sm:px-6 py-2.5 rounded-full hover:bg-emerald-50 transition-colors">Off-Plan</button>
            <select className="text-sm bg-white/95 backdrop-blur-md px-4 sm:px-6 py-2.5 rounded-full outline-none hover:bg-emerald-50 transition-colors cursor-pointer">
              <option>Residential</option>
            </select>
            <select className="text-sm bg-white/95 backdrop-blur-md px-4 sm:px-6 py-2.5 rounded-full outline-none hover:bg-emerald-50 transition-colors cursor-pointer">
              <option>Beds & Baths</option>
            </select>
            <select className="text-sm bg-white/95 backdrop-blur-md px-4 sm:px-6 py-2.5 rounded-full outline-none hover:bg-emerald-50 transition-colors cursor-pointer">
              <option>Price (GBP)</option>
            </select>
          </div>
        </div>

        {/* Experience Journey Button */}
        <div className="text-center mt-12 sm:mt-20">
          <button className="group bg-black/20 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full backdrop-blur-md border border-white/10 hover:bg-black/30 hover:border-white/20 transition-all hover:shadow-lg hover:shadow-black/20">
            <span className="flex items-center gap-3 text-sm sm:text-base">
              <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">▶</span>
              Experience the Journey
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home