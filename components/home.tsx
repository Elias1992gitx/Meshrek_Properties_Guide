import React from 'react';
import { FaMapMarkerAlt, FaPlay } from 'react-icons/fa';
import { RiAiGenerate } from 'react-icons/ri';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 pt-24 pb-32 max-w-5xl mx-auto">
        {/* Hero Text */}
        <div className="text-center text-white mb-14">
          <h1 className="text-[56px] leading-[1.1] font-bold mb-3">Real homes live here</h1>
          <p className="text-2xl font-light">Real Prices. Real Photos. Real Properties</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-[10px] inline-flex p-1.5">
            {['Properties', 'New Projects', 'Transactions', 'TruEstimate™', 'Agents'].map((tab, index) => (
              <button
                key={tab}
                className={`px-6 py-2.5 rounded-[10px] text-[15px] font-medium transition-all duration-200 ${
                  index === 0 ? 'bg-gradient-to-r from-green-800 to-green-600 text-white shadow-sm' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tab} {index === 3 && <span className="ml-1 text-[11px] bg-red-500 text-white px-1.5 py-0.5 rounded-[10px] font-medium">NEW</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-[10px] p-7 shadow-lg">
          {/* Buy/Rent Toggle */}
          <div className="bg-gray-100 inline-flex rounded-[10px] p-1 mb-7">
            <button className="px-12 py-2.5 rounded-[10px] bg-gradient-to-r from-green-800 to-green-600 text-white shadow-sm font-medium">Buy</button>
            <button className="px-12 py-2.5 rounded-[10px] text-gray-700 hover:bg-gray-50 transition-colors font-medium">Rent</button>
          </div>

          {/* Search Controls */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-green-700 text-lg" />
              <input
                type="text"
                placeholder="Enter location"
                className="w-full pl-12 pr-4 py-3.5 border border-gray-200 rounded-[10px] text-[15px] placeholder:text-gray-500 focus:outline-none focus:border-green-700 transition-colors"
              />
            </div>
            {['Residential', 'Beds & Baths', 'Price (GBP)'].map((option) => (
              <select 
                key={option}
                className="border border-gray-200 rounded-[10px] px-4 py-3.5 text-[15px] text-gray-700 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiA5TDEyIDE1TDE4IDkiIHN0cm9rZT0iIzY0NzQ4QiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=')] bg-[length:16px] bg-[right_16px_center] bg-no-repeat focus:outline-none focus:border-green-700 cursor-pointer"
              >
                <option>{option}</option>
              </select>
            ))}
          </div>

          {/* Property Types */}
          <div className="flex gap-2.5 mt-5 mb-7">
            {['All', 'Ready', 'Off-Plan'].map((type, index) => (
              <button
                key={type}
                className={`px-6 py-2.5 rounded-[10px] text-[15px] font-medium transition-all duration-200 ${
                  index === 0 
                    ? 'bg-green-50 text-green-700 border border-green-100' 
                    : 'border border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* AI Assistant */}
          <div className="flex items-center justify-between bg-green-50 rounded-[10px] p-4">
            <div className="flex items-center gap-3">
              <RiAiGenerate className="text-2xl text-green-700" />
              <p className="text-[15px] text-gray-700">Want to find out more about UAE real estate using AI?</p>
            </div>
            <button className="text-green-700 font-medium text-[15px] flex items-center gap-2 hover:gap-3 transition-all">
              Try BayutGPT
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Experience Journey Button */}
        <div className="text-center mt-14">
          <button className="inline-flex items-center gap-3 text-white border-2 border-white/80 rounded-[10px] px-8 py-3.5 hover:bg-white/10 transition-colors">
            <FaPlay className="text-sm" />
            <span className="text-[15px] font-medium">Experience the Journey</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;