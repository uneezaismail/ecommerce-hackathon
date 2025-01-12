import Image from 'next/image';
import React from 'react';

const Table = () => {
  return (
    <section className="bg-[#FAF4F4] flex w-full h-fit lg:h-[700px] xl:h-[672px] box-border">
      <div className="flex flex-col py-16 lg:py-0 sm:flex-row md:justify-center w-full h-full items-center gap-8">
        {/* First Column */}
        <div className="relative xl:w-[605px] xl:h-[562px] sm:w-[48%] w-[90%] h-[300px] md:h-[400px]">
          <Image
            src="/home-table.png"
            alt="home-table"
            fill
            objectFit="contain"
            className="rounded-lg"
          />
          <div className="absolute  md:text-start bottom-4 left-4 text-black">
            <h4 className="text-[1.25rem] sm:text-[1.5rem] lg:text-[2rem] font-medium font-poppins">
              Side Table
            </h4>
            <button className="text-base sm:text-xl border-b-2 border-b-black lg:text-2xl mt-4 font-medium font-poppins transition-transform duration-300 ease-in-out hover:scale-105 hover:text-gray-700">
              View more
            </button>
          </div>
        </div>

        {/* Second Column */}
        <div className="relative xl:w-[605px] xl:h-[562px] sm:w-[48%] w-[90%] h-[300px] md:h-[400px]">
          <Image
            src="/sofa-home.png"
            alt="home-sofa"
            fill
            objectFit="contain"
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-black">
            <h4 className="text-[1.25rem] sm:text-[1.5rem] lg:text-[2rem] font-medium font-poppins">
              Sofa
            </h4>
            <button className="text-base sm:text-xl lg:text-2xl border-b-2 border-b-black font-medium mt-4 font-poppins transition-transform duration-300 ease-in-out hover:scale-105 hover:text-gray-700">
              View more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;






