"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-[75vh] md:h-[90vh]">
    
      <Image
  src="/3.avif"
  alt="Oak & Teak Logo - Home" 
  priority
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className=""
/>

      
      <div className="absolute  inset-0 flex items-center justify-end p-6 md:px-40">
        <div className="bg-[#e9e9e3] space-y-2 lg:space-y-6 p-6 lg:p-10 lg:py-14 rounded-[6px] max-w-md lg:max-w-2xl">
          <p className="text-sm font-semibold text-gray-600 uppercase">trending</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom-green mt-2">
          High-quality Furniture Store in Pakistan
          </h1>
          <p className="text-gray-700 mt-4 md:text-lg">
            Transform your home with stylish and high-quality furniture. Comfort meets design at Oak & Teak.
          </p>
          <Link href="/shop">
            <button className="mt-6 px-6 md:px-16 py-3 md:py-4 bg-custom-green text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
