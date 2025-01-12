import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section   className="bg-[#FBEBB5] h-[85vh] md:h-screen">
      <div  className="max-w-screen-xl mx-auto flex items-center justify-center  md:justify-center h-full flex-col-reverse md:flex-row">
        {/* Text Section */}
        <div  className="flex flex-col text-center  sm:text-start items-end h-fit justify-center gap-y-9 px-2 sm:px-8 w-[90%] sm:w-[60%] md:w-fit">
          <h2  className="font-medium text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-poppins">
            Rocket Single Seater
          </h2>
          <div className='w-full'>
            <button  className="text-2xl font-medium pb-2 border-b-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:text-gray-800 border-b-black font-poppins">
              Shop Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-[350px] h-[300px] sm:w-[450px] sm:h-[400px] md:h-[550px] md:w-[550px] xl:w-[900px] xl:h-[600px]">
        <Image
            src='/hero.png'
            alt="shop"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
