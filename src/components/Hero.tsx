"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  const slide = { url: "/sofa (1).webp", text: "Timeless Designs, Modern Comfort" };

  return (
    <section className="relative h-[90vh] md:h-screen w-full">
      <Image
  src="/sofa.webp"
  alt="Oak & Teak Logo - Home" 
  priority
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className=" bg-white "
/>
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-black/20">
        <h1 className="text-4xl text-center sm:text-5xl text-white font-medium font-poppins z-40">
          {slide.text}
        </h1>
        <button
          aria-label="Shop Now"
          className="mt-6 text-xl sm:text-2xl font-medium pb-2 border-b-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-white border-b-white text-white font-poppins"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
