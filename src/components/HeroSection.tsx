"use client";
import Image from 'next/image';
import { useState } from 'react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const totalImages = 5; // Update this based on how many images you upload

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === totalImages ? 1 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 1 ? totalImages : prev - 1));
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-[2000px] mx-auto px-[12%] pt-12">
        {/* Title */}
        <h1 className="text-[9.5vw] font-black tracking-[-0.03em] leading-none w-full text-center whitespace-nowrap font-title">
          FUTURE AUTO
        </h1>

        {/* Navigation Container */}
        <div className="mt-8 bg-[#f1f1f1] rounded-full p-3">
          <div className="grid grid-cols-6 gap-[2px]">
            <a href="#home" className="py-4 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors text-[16px] font-medium font-sans text-center">
              Home
            </a>
            <a href="#services" className="py-4 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors text-[16px] font-medium font-sans text-center">
              Our Services
            </a>
            <a href="#gallery" className="py-4 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors text-[16px] font-medium font-sans text-center">
              Gallery
            </a>
            <a href="#pricing" className="py-4 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors text-[16px] font-medium font-sans text-center">
              Pricing
            </a>
            <a href="#about" className="py-4 rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors text-[16px] font-medium font-sans text-center">
              About Us
            </a>
            <button className="py-4 bg-[#e5ff1a] text-black rounded-full text-[16px] font-medium font-sans hover:bg-[#d4ee09] transition-colors shadow-sm text-center">
              Get Quote
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="my-8">
          <div className="relative w-full" style={{ height: '600px' }}>
            <div className="absolute inset-0 bg-[#0a0a0a] rounded-[300px] overflow-hidden">
              <Image 
                src={`/images/car-hero${currentImageIndex}.jpg`}
                alt="Luxury car with premium wrap" 
                fill
                className="object-cover object-center object-[50%_85%]"
                priority
              />
              {/* Left Arrow */}
              <button 
                onClick={prevImage}
                className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-gray-500/30 backdrop-blur-sm rounded-full inline-flex items-center justify-center hover:bg-gray-500/40 hover:scale-110 transition-all duration-200 ease-out">
                <span className="text-white text-2xl -mt-1.5">&larr;</span>
              </button>
              {/* Right Arrow */}
              <button 
                onClick={nextImage}
                className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 bg-gray-500/30 backdrop-blur-sm rounded-full inline-flex items-center justify-center hover:bg-gray-500/40 hover:scale-110 transition-all duration-200 ease-out">
                <span className="text-white text-2xl -mt-1.5">&rarr;</span>
              </button>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="grid grid-cols-2 gap-8 my-16">
          <div>
            <div className="flex flex-col">
              <h1 className="text-[4.5rem] font-black leading-[1.1] tracking-tight font-title">
                TRANSFORM<br />
                YOUR VEHICLE'S<br />
                LOOK
              </h1>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex gap-4">
              <span className="text-gray-600 text-xl font-title">Premium Films</span>
              <span className="text-gray-600 text-xl font-title">•</span>
              <span className="text-gray-600 text-xl font-title">Expert Installation</span>
              <span className="text-gray-600 text-xl font-title">•</span>
              <span className="text-gray-600 text-xl font-title">Lifetime Warranty</span>
            </div>
            <p className="text-gray-400 mt-6 leading-relaxed font-sans">
              Experience the ultimate vehicle transformation with our premium car wrapping services. From color changes to paint protection, we deliver flawless finishes that protect and enhance your vehicle.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-2 gap-8 my-16 bg-[#0a0a0a] rounded-[40px] p-12 text-white">
          <div className="flex flex-col justify-between">
            <p className="text-gray-400 leading-relaxed mb-8 font-sans">
              From subtle color changes to bold statements, our expert team delivers precision and perfection in every wrap. Using only premium materials, we ensure your vehicle stands out with a finish that lasts.
            </p>
            <h2 className="text-4xl font-extrabold leading-tight font-title group cursor-pointer hover:opacity-80 transition-opacity">
              EXPLORE OUR<br />PREMIUM WRAP<br />SERVICES
              <span className="inline-block text-[#e5ff1a] ml-2 group-hover:rotate-45 transition-transform">+</span>
            </h2>
          </div>
          <div className="relative aspect-[16/9] rounded-[40px] overflow-hidden">
            <Image 
              src="/images/car-wrapping.jpg" 
              alt="Professional car wrapping process" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 