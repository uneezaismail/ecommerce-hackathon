"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const slide = { url: "/sofa (1).webp", text: "High-quality Furniture Store in Pakistan" };

  return (
    <section className="relative h-[75vh] md:h-screen w-full">
      <Image
  src="/sofa.webp"
  alt="Oak & Teak Logo - Home" 
  priority
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className=" bg-custom-green "
/>
<div className="absolute inset-0  flex flex-col items-center justify-center z-20 bg-black/30">
        
        <h1
          className="text-4xl max-w-[600px] sm:text-5xl font-bold text-white font-playfair opacity-0 animate-fade-in-top text-center"
        >
          {slide.text}
        </h1>

       
        <p
          className="mt-4 text-lg sm:text-xl font-bold text-gray-200 opacity-0 animate-fade-in-top delay-200 text-center px-6 max-w-3xl"
        >
          Redefine your space with style and comfort
        </p>

       
        <button
          aria-label="Shop Now"
          className="flex items-center mt-8 px-6 py-3 border-2 border-white text-lg sm:text-xl font-semibold bg-custom-green text-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg opacity-0 animate-fade-in-top delay-400"
        >
       <Link href={"/shop"}> Shop Now </Link>  
        </button>
      </div>
    </section>
  );
};

export default Hero;
