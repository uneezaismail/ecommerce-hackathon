import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section className='bg-[#FBEBB5] h-screen'>
      <div className='max-w-screen-xl mx-auto flex items-center justify-center h-full flex-col-reverse  md:flex-row'>
        {/* Text Section */}
        <div className=' flex flex-col text-center sm:text-start items-end h-fit justify-center gap-y-9  px-8 w-[90%] sm:w-[60%] md:w-[45%] lg:w-fit'>
          <h2 className='font-medium text-4xl sm:text-4xl lg:text-6xl xl:text-7xl font-poppins'>
            Rocket Single Seater
          </h2>
          <div className='w-full'>
            <button className='text-2xl font-medium font-poppins'>
              Shop Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className='relative w-[350px] h-[350px] sm:w-[450px] sm:h-[400px] md:h-[600px] md:w-[600px]  xl:w-[1000px] xl:h-[653px]'>
          <Image
            src='/hero.png'
            alt='hero-image'          
           fill 
      className='object-cover '
                     
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
